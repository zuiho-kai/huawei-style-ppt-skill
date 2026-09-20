#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const template = readFileSync('assets/template-huawei.html', 'utf8');
const layouts = readFileSync('references/layouts-huawei.md', 'utf8');
const errors = [];

function getRule(text, selector) {
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`, 'm'))?.[1] ?? '';
}

function expect(condition, message) {
  if (!condition) errors.push(message);
}

expect(
  !/\.agenda-item\.active\b/.test(template),
  'Template must not style agenda items with .agenda-item.active.'
);

expect(
  !/\bagenda-item\s+active\b/.test(layouts),
  'Huawei agenda layout examples must not mark any agenda item as active.'
);

const pageNoRule = getRule(template, '.page-no');
expect(pageNoRule, 'Template must define .page-no.');
expect(/position\s*:\s*absolute/i.test(pageNoRule), '.page-no must be positioned on each slide.');
expect(/\bleft\s*:/i.test(pageNoRule), '.page-no must sit on the left side.');
expect(/\bbottom\s*:/i.test(pageNoRule), '.page-no must sit at the bottom.');
expect(!/\bright\s*:/i.test(pageNoRule), '.page-no must not use right positioning.');
expect(/function\s+buildPageNumbers\s*\(/.test(template), 'Template JS must generate page numbers.');
expect(/\bbuildPageNumbers\(\);/.test(template), 'Template JS must call buildPageNumbers().');

expect(
  !/class="chrome"[\s\S]{0,180}<div>\d{2}\s*\/\s*\d{2}<\/div><\/div>/.test(layouts),
  'Huawei layout examples must not put page numbers in the top chrome.'
);

expect(
  !/<div>\s*\d{2}\s*\/\s*\d{2}\s*<\/div>/.test(layouts),
  'Huawei layout examples must not include handwritten page numbers.'
);

expect(
  /\.grid-2,\s*\.grid-3,\s*\.grid-4\s*\{[^}]*align-items\s*:\s*stretch/i.test(template),
  'Parallel grid containers must stretch children to equal height.'
);

expect(
  /\.grid-2\s*>\s*\.card,\s*\.grid-3\s*>\s*\.card,\s*\.grid-4\s*>\s*\.card\s*\{[^}]*height\s*:\s*100%/i.test(template),
  'Direct card children in parallel grids must fill the row height.'
);

expect(
  /\.same-size\s*>\s*\*\s*\{[^}]*height\s*:\s*100%/i.test(template),
  'Template must provide .same-size > * so same-level child containers can share size.'
);

expect(
  /\.equal-children\s*>\s*\*\s*\{[^}]*height\s*:\s*100%/i.test(template),
  'Template must provide .equal-children > * for nested equal-size subcontainers.'
);

expect(
  /\.mini-card\s*\{[^}]*min-height\s*:\s*0/i.test(template),
  'Template must provide .mini-card for compact same-level subcontainers.'
);

expect(
  /统一层级/.test(layouts) && /\.same-size/.test(layouts) && /\.equal-children/.test(layouts),
  'Huawei layouts must document the same-level child container size rule and utility classes.'
);

const cardTitleRule = getRule(template, '.card-title');
const cardBodyRule = getRule(template, '.card-body');
expect(/font-size\s*:\s*clamp\(/i.test(cardTitleRule), '.card-title must use a larger responsive font size.');
expect(/white-space\s*:\s*nowrap/i.test(cardTitleRule), '.card-title should avoid wrapping when possible.');
expect(/font-size\s*:\s*(?:1(?:\.\d+)?vw|clamp\()/i.test(cardBodyRule), '.card-body font size should be at least 1vw or responsive clamp().');

for (const layoutId of ['H37', 'H38', 'H39', 'H40', 'H41', 'H42']) {
  expect(
    new RegExp(`## ${layoutId}\\b`).test(layouts),
    `${layoutId} must be documented in references/layouts-huawei.md.`
  );
}

if (errors.length) {
  console.error('Huawei template validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('Huawei template validation passed.');
