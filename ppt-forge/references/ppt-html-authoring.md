# 华为网页 PPT 制作

仅在用户选择网页/HTML 演示时读取。此模式使用随 skill 分发的归藏 Style C 资源，不需要 imagegen。HTML 源码可修改，但不是原生可编辑 PPTX。

## 资源和制作

资源根目录是本 skill 的 `vendor/guizang/`，以下路径均相对该目录：

- 模板：[template-huawei.html](../vendor/guizang/assets/template-huawei.html)。复制到交付目录并命名为 `index.html`，替换 `<title>` 的必填占位和 `<!-- SLIDES_HERE -->`。
- 版式：[layouts-huawei.md](../vendor/guizang/references/layouts-huawei.md)。按内容选择 H01–H42，保留对应类名及 `data-layout`，不要混入归藏其他风格的类。
- 主题：[themes-huawei.md](../vendor/guizang/references/themes-huawei.md)。默认 Classic Red；管理层材料可选 Deep Executive，云/AI/研发可选 Cloud Tech。整套只用一套主题；用户有品牌要求时统一调整变量，并复核对比度。

沿用主 skill 的事实清单、唯一主结论和分页表。HTML 模式可直接用版式编号与内容槽位表达蓝图，不必为已明确的模板重复画 ASCII 图。不要把 raster preset 的 `#D33941` 与 HTML 主题的 `#c7000b` 混用。

图片保存到 `index.html` 同级的 `images/`，使用相对路径并添加有意义的 alt。证据截图应完整保留文字与数据，用 contain 和留边适配，不能为了美化重画事实。示意配图与真实截图应明确区分。默认沿用模板的企业标识；若用户指定其他品牌，替换标识和文字，不暗示华为官方背书。

并列卡片沿用模板的等高网格；嵌套区域用 `.same-size`、`.equal-children`。保留自动页码，不手写页号。长文本优先重组或拆页。

## 校验和交付

在 `vendor/guizang/` 目录下执行（需要 Node.js）：

```sh
node scripts/validate-huawei-template.mjs
node scripts/validate-huawei-deck.mjs /absolute/path/to/index.html
```

脚本仅做静态检查。品牌替换后上游校验器可能仍要求 `.brand-mark` 等结构，应逐项解释差异，不能因此谎报通过。

随后在浏览器按目标画幅查看全部页面，检查溢出、裁切、字体、同层卡片尺寸和数据；验证方向键、滚轮、触屏（有设备时）、ESC 索引及 B 静态模式。未能进行的设备或浏览器验证要如实说明。

模板依赖 Google Fonts 和 Lucide CDN，不能默认宣称完全离线；需要离线时将依赖本地化并断网验证。交付 `index.html` 和实际引用的图片/本地依赖，附带归藏 LICENSE 与来源说明。不要只交一张整套截图，也不要把浏览器打印 PDF 称为可编辑 PPTX。

## 来源

本模式调用 `seandongx/guizang-ppt-skill` 的华为资源快照，提交 `8653aaca8d2949cd576752704dc50671a4f35854`；原作者为歸藏（op7418）。版本和许可见 [供应商来源记录](../vendor/guizang/UPSTREAM.md)。
