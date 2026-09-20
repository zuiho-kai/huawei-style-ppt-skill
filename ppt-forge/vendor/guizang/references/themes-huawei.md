# Huawei Corporate Themes

Huawei 风格模板默认只做**企业汇报红灰体系**。颜色可以切换,但一份 deck 只能选一套,不要在同一份 PPT 里混用多个红色或多个强调色。

## 使用方法

1. 打开 `assets/template-huawei.html`
2. 找到 `:root{` 顶部的 Huawei corporate theme 变量区
3. 用下面某一套主题的变量整体替换同名变量
4. 其他 CSS 都走 `var(--...)`,不需要逐处改

## 主题 1 · Classic Red

默认主题。适合华为企业汇报模板:白底、浅灰、华为红、黑灰正文。

```css
--paper:#f7f8fa;
--paper-rgb:247,248,250;
--card:#ffffff;
--ink:#22252b;
--ink-rgb:34,37,43;
--muted:#6f7680;
--line:#dfe3e8;
--line-strong:#c7ccd4;
--brand-red:#c7000b;
--brand-red-rgb:199,0,11;
--brand-red-dark:#990008;
--brand-red-soft:#f5e5e7;
--brand-black:#111111;
--brand-grey:#f0f2f5;
```

适合:年度总结、工作汇报、部门计划、商务路演。

## 主题 2 · Deep Executive

更稳重,红色压暗,黑灰更强。适合战略、管理层汇报、董事会材料。

```css
--paper:#f6f6f4;
--paper-rgb:246,246,244;
--card:#ffffff;
--ink:#1c1f24;
--ink-rgb:28,31,36;
--muted:#666d76;
--line:#dadde1;
--line-strong:#bfc5cc;
--brand-red:#b00010;
--brand-red-rgb:176,0,16;
--brand-red-dark:#730007;
--brand-red-soft:#f2e1e3;
--brand-black:#0d0d0f;
--brand-grey:#eceff2;
```

适合:战略复盘、商业计划、投资沟通、严肃组织议题。

## 主题 3 · Cloud Tech

更现代,浅灰偏冷,适合云、AI、ICT、产品技术发布。

```css
--paper:#f4f7fb;
--paper-rgb:244,247,251;
--card:#ffffff;
--ink:#20242c;
--ink-rgb:32,36,44;
--muted:#667080;
--line:#dce3ea;
--line-strong:#c1cad4;
--brand-red:#d20a2e;
--brand-red-rgb:210,10,46;
--brand-red-dark:#9c001f;
--brand-red-soft:#f8e5e9;
--brand-black:#14171c;
--brand-grey:#edf2f7;
```

适合:ICT、云服务、AI 产品、研发总结、技术路线图。

## 选择建议

| 内容 | 推荐主题 |
|---|---|
| 常规公司总结 / 工作计划 | Classic Red |
| 管理层 / 战略 / 商业计划 | Deep Executive |
| 科技产品 / 云 / AI / 研发 | Cloud Tech |

## 不要做的事

- 不要把红色换成蓝色、紫色或橙色;这会离开 Huawei corporate 识别。
- 不要同时使用两个红色作为主强调色。
- 不要给卡片叠加彩色阴影;视觉重点来自红色锚点、浅灰底和清晰层级。
- 不要把页面做成大面积渐变科技风;Huawei 模板的基础是企业汇报,不是发布会海报。
