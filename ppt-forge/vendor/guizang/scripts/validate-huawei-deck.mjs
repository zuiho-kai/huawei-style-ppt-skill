#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const file = process.argv[2];

if (!file) {
  console.error('Usage: node scripts/validate-huawei-deck.mjs <index.html>');
  process.exit(2);
}

const html = readFileSync(file, 'utf8');
const htmlForSlides = html.replace(/<!--[\s\S]*?-->/g, '');
const errors = [];
const warnings = [];

const allowedLayouts = new Set(Array.from({ length: 42 }, (_, i) => `H${String(i + 1).padStart(2, '0')}`));
const slideRe = /<section\b[^>]*class="[^"]*\bslide\b[^"]*"[^>]*>[\s\S]*?<\/section>/g;
const slides = [...htmlForSlides.matchAll(slideRe)].map((m, idx) => ({
  idx: idx + 1,
  html: m[0],
  tag: m[0].match(/<section\b[^>]*>/)?.[0] ?? '',
}));

if (/\[必填\]/.test(html)) {
  errors.push('Unreplaced [必填] placeholder found.');
}

if (!slides.length) {
  errors.push('No <section class="slide"> pages found.');
}

slides.forEach((slide) => {
  const layout = slide.tag.match(/\bdata-layout="([^"]+)"/)?.[1];

  if (!layout) {
    errors.push(`Slide ${slide.idx}: missing data-layout. Huawei template expects H01-H36.`);
  } else if (!allowedLayouts.has(layout)) {
    errors.push(`Slide ${slide.idx}: data-layout="${layout}" is not registered in layouts-huawei.md.`);
  }

  if (!/\bbrand-lockup\b/.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: missing .brand-lockup top-right brand area.`);
  }

  if (!/\bbrand-mark\b/.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: missing .brand-mark Huawei logo.`);
  }

  const chromeOptionalLayouts = new Set(['H01', 'H02', 'H03', 'H10', 'H25']);
  if (!chromeOptionalLayouts.has(layout) && !/\bchrome\b/.test(slide.html)) {
    warnings.push(`Slide ${slide.idx}: no .chrome title bar. Confirm this is intentional.`);
  }

  const imageTags = [...slide.html.matchAll(/<img\b[^>]*>/g)];
  imageTags.forEach((match, imageIndex) => {
    const imgTag = match[0];
    if (!/\balt="[^"]+"/.test(imgTag)) {
      errors.push(`Slide ${slide.idx}: image ${imageIndex + 1} missing non-empty alt text.`);
    }
    if (!/\bsrc="images\//.test(imgTag)) {
      warnings.push(`Slide ${slide.idx}: image ${imageIndex + 1} is not using an images/ relative path.`);
    }
  });

  if (/<svg\b[\s\S]*?<text\b/i.test(slide.html)) {
    errors.push(`Slide ${slide.idx}: SVG contains visible <text>. Use HTML text for labels.`);
  }

  if (/linear-gradient\([^)]*(?:blue|purple|violet|#\s*[0-9a-f]{2}[0-9a-f]{2}ff)/i.test(slide.html)) {
    warnings.push(`Slide ${slide.idx}: custom gradient detected. Huawei corporate pages should stay red/grey unless intentionally overridden.`);
  }
});

if (warnings.length) {
  console.warn('Warnings:');
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error('Huawei deck validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Huawei deck validation passed: ${slides.length} slide(s).`);
