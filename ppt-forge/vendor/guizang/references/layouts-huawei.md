# Layouts · Style C Huawei Corporate

这套版式使用 Huawei 企业汇报视觉语言:白/浅灰底、华为红、右上品牌位、左上红方块标题锚点、章节红带、红色圆形图标、灰色信息条、流程箭头、数据柱状图、人物头像、地图定位、圆心辐射和照片证据页。

## 生成前必读

### A. 文件和类名来源

- 模板文件:`assets/template-huawei.html`
- 主题色:`references/themes-huawei.md`
- 不要把 Style A / Style B 的类名混进来。Huawei 模板使用自己的类名系统。
- 每页 `<section>` 必须写 `data-layout="Hxx"`。
- 页面内必须保留 `.brand-lockup` 或使用 cover/closing 里的品牌锁定区域。
- `.brand-mark` 已内置 Huawei logo SVG mask;生成华为 PPT 时保留 `<span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span>` 结构。

### B. 图片规则

| 场景 | 推荐比例 | 容器 |
|---|---|---|
| 主图 / 产品图 | 16:9 或 16:10 | `.image-frame.r-16x9` / `.image-frame.r-16x10` |
| 人物 / 现场照片 | 4:3 或 16:9 | `.image-frame.r-4x3` / `.image-frame.r-16x9` |
| 多图证据墙 | 全部统一 16:9 | `.grid-3` + `.image-frame.r-16x9` |
| 白底 UI / 图表 | 16:10 + contain | `.image-frame.r-16x10.fit-contain` |

图片放在目标 deck 的 `images/` 目录下,命名建议:`01-cover.jpg`、`06-product.png`。

### C. 版式节奏

8-10 页 deck 推荐节奏:

| 页码 | 布局 | 用途 |
|---|---|---|
| 01 | H01 | 封面 |
| 02 | H02 | 目录 |
| 03 | H03 | 章节幕封 |
| 04 | H04 | 观点说明 |
| 05 | H07 | 数据页 |
| 06 | H08 | 流程页 |
| 07 | H09 | 图片/证据页 |
| 08 | H06 | 时间线 |
| 09 | H05 | 能力/方案卡片 |
| 10 | H10 | 收束 |

12-18 页 deck 可以在 H04-H09 中间插入 H11-H42 扩展版式,让内容形状更贴近企业汇报场景:

| 内容形状 | 优先版式 |
|---|---|
| 前言 / 引言 / 说明书式正文 | H11 |
| 图文报告 / 案例摘要 / 业务新闻 | H12 / H25 |
| 多张照片横向展示 | H13 |
| 团队 / 专家 / 管理层 | H14 |
| KPI + 数字看板 | H15 |
| 柱线组合 / 趋势分析 | H16 / H22 |
| 能力模型 / 生态关系 / 关键要素 | H17 |
| 阶段路线 / 斜向推进 | H18 / H24 |
| 圆形案例 / 客户现场 / 业务节点 | H19 |
| 图标能力矩阵 | H20 |
| 区域布局 / 网点 / 项目地图 | H21 |
| 齿轮协同 / 闭环流程 | H23 |
| 隐喻表达 / 方案对比 | H26 |
| 商业计划 / 市场 / 融资 / 定价 | H27-H36 |
| 人机协作 / 组织机制 / 任务匹配 | H37-H42 |

### D. 同层子容器尺寸规则

- 统一层级的子容器尽量 size 一致:同一组卡片、步骤、指标、角色、触发条件必须共享同一宽度和高度,避免出现一高一矮、一宽一窄的漂移感。
- 普通并列卡片优先用 `.grid-2` / `.grid-3` / `.grid-4`。模板已让直接 `.card` 子元素等高。
- 如果同层子容器不是 `.card`,给父级加 `.same-size`;如果是嵌套小卡网格,给父级加 `.equal-children` 并让子项用 `.mini-card`。
- 少量内容不要靠缩短容器高度表达层级,用留白、红色编号、标题粗细表达层级。并列项必须看起来属于同一套量尺。
- 只有明确的主次结构可以破例,例如左侧 30% 输入卡 + 右侧 70% 主图;但每一列内部的同级子容器仍要保持等尺寸。

## H01 · Cover

适合首页。使用大 logo、白灰背景、底部红色波浪。

```html
<section class="slide hw-cover" data-layout="H01" data-animate="cover">
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div class="cover-shell">
    <div class="cover-title-wrap">
      <div class="cover-badge" data-anim>
        <span class="brand-mark" aria-hidden="true"></span>
      </div>
      <div class="kicker" data-anim>ANNUAL REPORT / 2026</div>
      <h1 class="h-hero" data-anim>华为公司<br/>总结PPT</h1>
      <p class="lead cover-subtitle" data-anim>业绩报告 / 工作计划总结 / 商务路演等应用</p>
    </div>

    <div class="cover-visual" aria-hidden="true">
      <span class="orb red" style="width:6vw;height:6vw;right:10vw;top:3vh"></span>
      <span class="orb" style="width:12vw;height:12vw;right:0;top:16vh"></span>
      <span class="orb red" style="width:2.6vw;height:2.6vw;right:18vw;top:34vh"></span>
      <span class="orb" style="width:5vw;height:5vw;right:26vw;top:8vh"></span>
    </div>
  </div>

  <div class="cover-wave" aria-hidden="true"></div>
  <div class="cover-meta">
    <div>汇报人: [姓名]</div>
    <div>部门: [部门名称]</div>
  </div>
</section>
```

## H02 · Agenda

目录页。左侧红色目录块,右侧灰色条目,所有条目统一使用 `.agenda-item`,不要添加 `active` 标记。

```html
<section class="slide" data-layout="H02" data-animate="agenda">
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div class="agenda-layout">
    <div class="red-panel" data-anim>
      <div class="kicker" style="color:rgba(255,255,255,.72)">CONTENT</div>
      <h2 class="h-xl" style="margin-top:2vh">目录</h2>
      <div class="en" style="margin-top:2vh">CONTENT</div>
    </div>

    <div class="agenda-list">
      <div class="agenda-item" data-anim><div class="idx">01</div><div class="txt">添加章节标题内容</div></div>
      <div class="agenda-item" data-anim><div class="idx">02</div><div class="txt">添加章节标题内容</div></div>
      <div class="agenda-item" data-anim><div class="idx">03</div><div class="txt">添加章节标题内容</div></div>
      <div class="agenda-item" data-anim><div class="idx">04</div><div class="txt">添加章节标题内容</div></div>
      <div class="agenda-item" data-anim><div class="idx">05</div><div class="txt">添加章节标题内容</div></div>
    </div>
  </div>
</section>
```

## H03 · Section Divider

章节幕封。适合“01 工作完成情况 / 02 成功项目展示”一类章节切换。

```html
<section class="slide" data-layout="H03" data-animate="section">
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div class="section-layout">
    <div data-anim>
      <div class="section-no">01</div>
      <div class="kicker">SECTION ONE</div>
      <h2 class="h-xl" style="margin-top:1.8vh">工作完成情况</h2>
      <p class="lead" style="margin-top:2vh">添加章节说明文字,控制在一到两行。</p>
    </div>

    <div class="red-panel" data-anim>
      <div class="kicker" style="color:rgba(255,255,255,.72)">KEY MESSAGE</div>
      <h3 class="h-md" style="margin-top:2vh">用一句话概括本章节最重要的结论</h3>
    </div>
  </div>
</section>
```

## Page Number Rule

页码由模板脚本自动生成在左下角 `.page-no`。不要在 `.chrome` 右侧手写页码;右侧保留空 `<div></div>` 或放简短元信息。

## H04 · Title Body

最通用正文页。左上红色方块标题锚点 + 右上品牌位 + 正文卡片。

```html
<section class="slide" data-layout="H04" data-animate="body">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="height:100%;display:grid;grid-template-rows:auto 1fr;gap:4.8vh;padding-top:7vh">
    <div class="content-stack" data-anim>
      <div class="kicker">INTRODUCTION</div>
      <h2 class="h-xl">前言 / Introduction</h2>
      <div class="red-rule" style="width:8vw"></div>
    </div>

    <div class="grid-2" style="align-items:start">
      <div class="card flat" data-anim>
        <p class="body-copy">请输入正文内容。此页适合承载背景介绍、项目说明、阶段总结和管理层摘要。建议每段不超过 3 行,避免堆成文档页。</p>
      </div>
      <div class="card" data-anim>
        <div class="card-title">核心结论</div>
        <p class="card-body">把最关键的信息放在这里,用红色标题和白卡片形成稳定的企业汇报感。</p>
      </div>
    </div>
  </div>
</section>
```

## H05 · Three Cards

三项能力、三阶段、三条策略。

```html
<section class="slide" data-layout="H05" data-animate="cards">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim>
      <div class="kicker">THREE PRIORITIES</div>
      <h2 class="h-xl">三项核心能力</h2>
    </div>

    <div class="grid-3" style="margin-top:6vh">
      <div class="card" data-anim>
        <div class="icon-disc"><i data-lucide="target"></i></div>
        <div class="card-title">目标牵引</div>
        <p class="card-body">添加说明文字,强调阶段目标与业务结果的对应关系。</p>
      </div>
      <div class="card" data-anim>
        <div class="icon-disc"><i data-lucide="workflow"></i></div>
        <div class="card-title">流程闭环</div>
        <p class="card-body">添加说明文字,强调跨团队协同、交付节奏与复盘机制。</p>
      </div>
      <div class="card" data-anim>
        <div class="icon-disc"><i data-lucide="bar-chart-3"></i></div>
        <div class="card-title">数据度量</div>
        <p class="card-body">添加说明文字,强调指标体系、风险预警与持续改进。</p>
      </div>
    </div>
  </div>
</section>
```

## H06 · Vertical Timeline

年度演进、项目里程碑、产品发布节奏。

```html
<section class="slide" data-layout="H06" data-animate="timeline">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim>
      <div class="kicker">MILESTONE</div>
      <h2 class="h-xl">项目关键里程碑</h2>
    </div>

    <div class="timeline-v" style="margin-top:5vh">
      <div>
        <div class="tl-card" data-anim><div class="year">2024 Q1</div><p class="card-body">完成项目立项与目标拆解。</p></div>
        <div class="tl-card" data-anim><div class="year">2024 Q3</div><p class="card-body">完成核心系统上线与试点。</p></div>
      </div>
      <div class="tl-axis" data-anim>
        <div class="tl-dot">01</div>
        <div class="tl-dot">02</div>
        <div class="tl-dot">03</div>
      </div>
      <div>
        <div class="tl-card" data-anim><div class="year">2024 Q2</div><p class="card-body">完成方案评审和资源锁定。</p></div>
        <div class="tl-card" data-anim><div class="year">2024 Q4</div><p class="card-body">完成规模化推广与复盘。</p></div>
      </div>
    </div>
  </div>
</section>
```

## H07 · Data Bars

数据对比、达成率、排名、增长情况。

```html
<section class="slide" data-layout="H07" data-animate="data">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="padding-top:8vh">
    <div class="grid-12" style="align-items:end">
      <div class="span-5 content-stack" data-anim>
        <div class="kicker">PERFORMANCE</div>
        <h2 class="h-xl">关键指标达成</h2>
        <p class="lead">用一页讲清楚最重要的业务结果,不要塞满表格。</p>
        <div>
          <div class="stat-big">86%</div>
          <div class="meta">TARGET COMPLETION</div>
        </div>
      </div>

      <div class="span-7 card" data-anim>
        <div class="bar-chart">
          <div class="bar-row"><span>市场</span><div class="bar-track"><div class="bar-fill" style="--v:86%"></div></div><strong>86%</strong></div>
          <div class="bar-row"><span>交付</span><div class="bar-track"><div class="bar-fill" style="--v:74%"></div></div><strong>74%</strong></div>
          <div class="bar-row"><span>质量</span><div class="bar-track"><div class="bar-fill" style="--v:92%"></div></div><strong>92%</strong></div>
          <div class="bar-row"><span>效率</span><div class="bar-track"><div class="bar-fill" style="--v:68%"></div></div><strong>68%</strong></div>
          <div class="bar-row"><span>满意度</span><div class="bar-track"><div class="bar-fill" style="--v:80%"></div></div><strong>80%</strong></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## H08 · Process Arrow

横向流程、方法论步骤、项目推进路径。

```html
<section class="slide" data-layout="H08" data-animate="process">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim>
      <div class="kicker">WORKFLOW</div>
      <h2 class="h-xl">标准化推进流程</h2>
    </div>

    <div class="process" style="margin-top:7vh">
      <div class="process-step" data-anim>
        <div class="num-pill">01</div>
        <div class="card-title">目标定义</div>
        <p class="card-body">明确项目目标、边界、负责人和度量方式。</p>
      </div>
      <div class="process-step" data-anim>
        <div class="num-pill">02</div>
        <div class="card-title">方案设计</div>
        <p class="card-body">完成路径拆解、资源评估和关键风险识别。</p>
      </div>
      <div class="process-step" data-anim>
        <div class="num-pill">03</div>
        <div class="card-title">执行交付</div>
        <p class="card-body">按里程碑推进,通过周节奏管理进展。</p>
      </div>
      <div class="process-step" data-anim>
        <div class="num-pill">04</div>
        <div class="card-title">复盘优化</div>
        <p class="card-body">沉淀方法、数据和下一阶段改进项。</p>
      </div>
    </div>
  </div>
</section>
```

## H09 · Image Evidence Grid

照片、产品图、案例图、客户现场图。多图必须统一比例和高度。

```html
<section class="slide" data-layout="H09" data-animate="images">
  <div class="chrome">
    <div class="l"><span class="square"></span><span>添加标题文本</span></div>
    <div></div>
  </div>
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim>
      <div class="kicker">EVIDENCE</div>
      <h2 class="h-xl">案例与现场证据</h2>
    </div>

    <div class="grid-3" style="margin-top:5vh">
      <div data-anim>
        <div class="image-frame r-16x9"><img src="images/06-case-01.jpg" alt="案例图片 1"></div>
        <div class="caption">案例说明文字,控制在一行到两行。</div>
      </div>
      <div data-anim>
        <div class="image-frame r-16x9"><img src="images/06-case-02.jpg" alt="案例图片 2"></div>
        <div class="caption">案例说明文字,控制在一行到两行。</div>
      </div>
      <div data-anim>
        <div class="image-frame r-16x9"><img src="images/06-case-03.jpg" alt="案例图片 3"></div>
        <div class="caption">案例说明文字,控制在一行到两行。</div>
      </div>
    </div>
  </div>
</section>
```

## H10 · Closing

结束页。适合“感谢聆听 / 演示完毕”。

```html
<section class="slide dark" data-layout="H10" data-animate="closing">
  <div class="brand-lockup">
    <span class="brand-mark" aria-hidden="true"></span>
    <span>HUAWEI</span>
  </div>

  <div style="height:100%;display:grid;align-content:center;gap:3vh;max-width:62vw">
    <div class="cover-badge" data-anim>
      <span class="brand-mark" aria-hidden="true"></span>
    </div>
    <div class="kicker" data-anim>THANK YOU</div>
    <h2 class="h-hero" data-anim>演示完毕<br/>感谢聆听</h2>
    <p class="lead" data-anim>业绩报告 / 工作计划总结 / 商务路演等应用</p>
  </div>
</section>
```

## H11 · Framed Foreword

长图里多次出现的“前言 / Introduction”页:上方小标题,中间白底正文框,四角红色标记。适合前言、背景说明、政策解读、研究口径。

```html
<section class="slide" data-layout="H11" data-animate="foreword">
  <div class="chrome"><div class="l"><span class="square"></span><span>前言 / INTRODUCTION</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:9vh;display:grid;gap:4vh">
    <div class="content-stack" data-anim>
      <div class="kicker">INTRODUCTION</div>
      <h2 class="h-xl">前言</h2>
    </div>
    <div class="card flat" data-anim style="position:relative;max-width:72vw;margin:auto;padding:5vh 5vw">
      <span style="position:absolute;left:1.4vw;top:1.4vh;width:2.2vw;height:2px;background:var(--brand-red)"></span>
      <span style="position:absolute;left:1.4vw;top:1.4vh;width:2px;height:2.2vw;background:var(--brand-red)"></span>
      <span style="position:absolute;right:1.4vw;bottom:1.4vh;width:2.2vw;height:2px;background:var(--brand-red)"></span>
      <span style="position:absolute;right:1.4vw;bottom:1.4vh;width:2px;height:2.2vw;background:var(--brand-red)"></span>
      <p class="body-copy">添加前言正文。每段控制在 2-3 行,总字数不超过 180 字。此页用于建立汇报背景、范围、目标和口径,不要放复杂图表。</p>
    </div>
  </div>
</section>
```

## H12 · Media Report Split

上方横向图片或新闻截图,下方多段说明。适合业务案例、会议纪要、产品发布、项目实证。

```html
<section class="slide" data-layout="H12" data-animate="media-report">
  <div class="chrome"><div class="l"><span class="square"></span><span>案例摘要</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh;display:grid;grid-template-columns:.92fr 1.08fr;gap:3vw;align-items:start">
    <div data-anim>
      <div class="image-frame r-16x10"><img src="images/12-case.jpg" alt="案例主图"></div>
      <div class="caption">图片说明 / 客户现场 / 产品截图 / 会议照片。</div>
    </div>
    <div class="content-stack" data-anim>
      <div class="kicker">CASE STUDY</div>
      <h2 class="h-xl">用一句话概括案例价值</h2>
      <div class="card flat"><p class="body-copy">第一段写背景,第二段写动作,第三段写结果。右侧正文比图片略高,形成传统企业报告里的图文页节奏。</p></div>
      <div class="grid-3">
        <div><div class="num-pill">01</div><p class="card-body">关键事实</p></div>
        <div><div class="num-pill">02</div><p class="card-body">关键动作</p></div>
        <div><div class="num-pill">03</div><p class="card-body">关键结果</p></div>
      </div>
    </div>
  </div>
</section>
```

## H13 · Captioned Image Strip

横向 5 图证据条:每张图下方一个红色标签。适合活动回顾、项目阶段、产品矩阵、客户案例墙。

```html
<section class="slide" data-layout="H13" data-animate="image-strip">
  <div class="chrome"><div class="l"><span class="square"></span><span>成果展示</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim>
      <div class="kicker">GALLERY</div>
      <h2 class="h-xl">阶段成果展示</h2>
    </div>
    <div class="grid-4" style="grid-template-columns:repeat(5,1fr);margin-top:5vh">
      <div data-anim><div class="image-frame r-16x9"><img src="images/13-01.jpg" alt="成果图片 1"></div><div class="caption" style="background:var(--brand-red);color:#fff;text-align:center;padding:.8vh">成果一</div></div>
      <div data-anim><div class="image-frame r-16x9"><img src="images/13-02.jpg" alt="成果图片 2"></div><div class="caption" style="background:var(--brand-red);color:#fff;text-align:center;padding:.8vh">成果二</div></div>
      <div data-anim><div class="image-frame r-16x9"><img src="images/13-03.jpg" alt="成果图片 3"></div><div class="caption" style="background:var(--brand-red);color:#fff;text-align:center;padding:.8vh">成果三</div></div>
      <div data-anim><div class="image-frame r-16x9"><img src="images/13-04.jpg" alt="成果图片 4"></div><div class="caption" style="background:var(--brand-red);color:#fff;text-align:center;padding:.8vh">成果四</div></div>
      <div data-anim><div class="image-frame r-16x9"><img src="images/13-05.jpg" alt="成果图片 5"></div><div class="caption" style="background:var(--brand-red);color:#fff;text-align:center;padding:.8vh">成果五</div></div>
    </div>
  </div>
</section>
```

## H14 · Team Profiles

四位人物头像 + 姓名职务 + 简介。适合团队介绍、专家阵容、项目成员、客户代表。

```html
<section class="slide" data-layout="H14" data-animate="profiles">
  <div class="chrome"><div class="l"><span class="square"></span><span>团队介绍</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">TEAM</div><h2 class="h-xl">核心团队</h2></div>
    <div class="grid-4" style="margin-top:5vh">
      <div class="card" data-anim style="text-align:center"><div class="image-frame" style="width:8vw;height:8vw;border-radius:999px;margin:auto;overflow:hidden"><img src="images/14-person-01.jpg" alt="成员头像 1"></div><div class="card-title" style="margin-top:2vh">姓名</div><p class="card-body">职位 / 负责方向 / 一句话简介。</p></div>
      <div class="card" data-anim style="text-align:center"><div class="image-frame" style="width:8vw;height:8vw;border-radius:999px;margin:auto;overflow:hidden"><img src="images/14-person-02.jpg" alt="成员头像 2"></div><div class="card-title" style="margin-top:2vh">姓名</div><p class="card-body">职位 / 负责方向 / 一句话简介。</p></div>
      <div class="card" data-anim style="text-align:center"><div class="image-frame" style="width:8vw;height:8vw;border-radius:999px;margin:auto;overflow:hidden"><img src="images/14-person-03.jpg" alt="成员头像 3"></div><div class="card-title" style="margin-top:2vh">姓名</div><p class="card-body">职位 / 负责方向 / 一句话简介。</p></div>
      <div class="card" data-anim style="text-align:center"><div class="image-frame" style="width:8vw;height:8vw;border-radius:999px;margin:auto;overflow:hidden"><img src="images/14-person-04.jpg" alt="成员头像 4"></div><div class="card-title" style="margin-top:2vh">姓名</div><p class="card-body">职位 / 负责方向 / 一句话简介。</p></div>
    </div>
  </div>
</section>
```

## H15 · KPI Dashboard

左侧堆叠柱或柱状图,右侧大数字与指标解释。适合经营结果、年度目标、预算、人效、质量指标。

```html
<section class="slide" data-layout="H15" data-animate="kpi-dashboard">
  <div class="chrome"><div class="l"><span class="square"></span><span>关键数据</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-12" style="padding-top:9vh;align-items:end">
    <div class="span-7 card" data-anim>
      <div class="kicker">YEARLY PERFORMANCE</div>
      <div style="height:42vh;display:flex;align-items:end;gap:1.2vw;margin-top:4vh;border-bottom:1px solid var(--line)">
        <div style="height:38%;width:4vw;background:#d8dde4"></div><div style="height:52%;width:4vw;background:#d8dde4"></div><div style="height:64%;width:4vw;background:var(--brand-red)"></div><div style="height:76%;width:4vw;background:var(--brand-red)"></div><div style="height:88%;width:4vw;background:var(--brand-red)"></div>
      </div>
    </div>
    <div class="span-5 content-stack" data-anim>
      <div class="stat-big">123,456</div>
      <div class="card-title">核心指标名称</div>
      <p class="lead">右侧只解释一个最重要数字,补充同比、环比、目标完成率。</p>
      <div class="red-rule" style="width:10vw"></div>
    </div>
  </div>
</section>
```

## H16 · Combo Chart

柱状图 + 折线 / 趋势点 + 旁侧结论。适合增长趋势、成本收益、质量变化、渠道对比。

```html
<section class="slide" data-layout="H16" data-animate="combo-chart">
  <div class="chrome"><div class="l"><span class="square"></span><span>趋势分析</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">TREND</div><h2 class="h-xl">增长趋势分析</h2></div>
    <div class="grid-12" style="margin-top:5vh;align-items:stretch">
      <div class="span-8 card" data-anim>
        <div style="height:42vh;display:grid;grid-template-columns:repeat(6,1fr);align-items:end;gap:1vw;border-bottom:1px solid var(--line);position:relative">
          <span style="position:absolute;left:4%;right:4%;top:42%;border-top:3px solid var(--brand-red);transform:rotate(-8deg);transform-origin:left center"></span>
          <span style="position:absolute;left:18%;top:47%;width:.9vw;height:.9vw;border-radius:999px;background:var(--brand-red)"></span>
          <span style="position:absolute;left:51%;top:36%;width:.9vw;height:.9vw;border-radius:999px;background:var(--brand-red)"></span>
          <span style="position:absolute;right:12%;top:30%;width:.9vw;height:.9vw;border-radius:999px;background:var(--brand-red)"></span>
          <div style="height:30%;background:#d8dde4"></div><div style="height:46%;background:#d8dde4"></div><div style="height:58%;background:var(--brand-red)"></div><div style="height:74%;background:var(--brand-red)"></div><div style="height:62%;background:#d8dde4"></div><div style="height:82%;background:var(--brand-red)"></div>
        </div>
      </div>
      <div class="span-4 card" data-anim>
        <div class="num-pill">01</div><div class="card-title">趋势判断</div><p class="card-body">用 2-3 个 bullet 解释波峰、波谷和拐点,不要把所有明细塞进图表。</p>
      </div>
    </div>
  </div>
</section>
```

## H17 · Central Hub

中心圆 + 周围节点。长图里的灯泡、圆形关系图、生态协同页都属于这个结构。适合能力模型、生态关系、战略抓手、系统架构。

```html
<section class="slide" data-layout="H17" data-animate="hub">
  <div class="chrome"><div class="l"><span class="square"></span><span>能力模型</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">MODEL</div><h2 class="h-xl">中心能力模型</h2></div>
    <div style="position:relative;height:52vh;margin-top:2vh" data-anim>
      <div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:10vw;height:10vw;border-radius:999px;background:var(--brand-red);color:#fff;display:grid;place-items:center;font-weight:900">核心</div>
      <div style="position:absolute;left:16%;top:12%" class="card"><div class="card-title">能力一</div><p class="card-body">说明文字</p></div>
      <div style="position:absolute;right:16%;top:12%" class="card"><div class="card-title">能力二</div><p class="card-body">说明文字</p></div>
      <div style="position:absolute;left:18%;bottom:6%" class="card"><div class="card-title">能力三</div><p class="card-body">说明文字</p></div>
      <div style="position:absolute;right:18%;bottom:6%" class="card"><div class="card-title">能力四</div><p class="card-body">说明文字</p></div>
    </div>
  </div>
</section>
```

## H18 · Diagonal Roadmap

斜向上升路径 + 红色圆点。适合阶段推进、成长路径、项目路线、能力成熟度。

```html
<section class="slide" data-layout="H18" data-animate="diagonal-roadmap">
  <div class="chrome"><div class="l"><span class="square"></span><span>推进路线</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">ROADMAP</div><h2 class="h-xl">四阶段推进路线</h2></div>
    <div style="position:relative;height:46vh;margin-top:5vh" data-anim>
      <div style="position:absolute;left:10%;bottom:10%;right:10%;height:1px;background:var(--line-strong);transform:rotate(-12deg)"></div>
      <div style="position:absolute;left:10%;bottom:9%"><div class="icon-disc"><i data-lucide="flag"></i></div><div class="card-title">启动</div></div>
      <div style="position:absolute;left:34%;bottom:22%"><div class="icon-disc"><i data-lucide="settings"></i></div><div class="card-title">建设</div></div>
      <div style="position:absolute;left:58%;bottom:35%"><div class="icon-disc"><i data-lucide="rocket"></i></div><div class="card-title">推广</div></div>
      <div style="position:absolute;left:80%;bottom:48%"><div class="icon-disc"><i data-lucide="trophy"></i></div><div class="card-title">达成</div></div>
    </div>
  </div>
</section>
```

## H19 · Circular Case Cluster

多张圆形图片围绕结论排列。适合客户案例、区域项目、活动现场、生态伙伴。

```html
<section class="slide" data-layout="H19" data-animate="case-cluster">
  <div class="chrome"><div class="l"><span class="square"></span><span>案例集群</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">CASES</div><h2 class="h-xl">重点案例分布</h2></div>
    <div style="position:relative;height:52vh;margin-top:2vh" data-anim>
      <div style="position:absolute;left:42%;top:34%;width:13vw;height:13vw;border-radius:999px;background:var(--brand-red);color:#fff;display:grid;place-items:center;font-weight:900;text-align:center">核心<br/>成果</div>
      <div class="image-frame" style="position:absolute;left:15%;top:5%;width:12vw;height:12vw;border-radius:999px;overflow:hidden"><img src="images/19-case-01.jpg" alt="圆形案例 1"></div>
      <div class="image-frame" style="position:absolute;right:16%;top:8%;width:10vw;height:10vw;border-radius:999px;overflow:hidden"><img src="images/19-case-02.jpg" alt="圆形案例 2"></div>
      <div class="image-frame" style="position:absolute;left:24%;bottom:4%;width:10vw;height:10vw;border-radius:999px;overflow:hidden"><img src="images/19-case-03.jpg" alt="圆形案例 3"></div>
      <div class="image-frame" style="position:absolute;right:25%;bottom:2%;width:12vw;height:12vw;border-radius:999px;overflow:hidden"><img src="images/19-case-04.jpg" alt="圆形案例 4"></div>
    </div>
  </div>
</section>
```

## H20 · Icon Matrix

2x4 或 3x3 图标矩阵。适合能力清单、产品模块、服务范围、工具箱。

```html
<section class="slide" data-layout="H20" data-animate="icon-matrix">
  <div class="chrome"><div class="l"><span class="square"></span><span>能力矩阵</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">CAPABILITY</div><h2 class="h-xl">八项核心能力</h2></div>
    <div class="grid-4" style="margin-top:5vh">
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="cloud"></i></div><div class="card-title">能力一</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="database"></i></div><div class="card-title">能力二</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="shield"></i></div><div class="card-title">能力三</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="cpu"></i></div><div class="card-title">能力四</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="network"></i></div><div class="card-title">能力五</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="workflow"></i></div><div class="card-title">能力六</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="bar-chart-3"></i></div><div class="card-title">能力七</div><p class="card-body">一句话说明。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="settings"></i></div><div class="card-title">能力八</div><p class="card-body">一句话说明。</p></div>
    </div>
  </div>
</section>
```

## H21 · Map Locations

地图轮廓 + 红色定位点 + 右侧列表。适合区域布局、项目网点、市场覆盖、客户分布。

```html
<section class="slide" data-layout="H21" data-animate="map">
  <div class="chrome"><div class="l"><span class="square"></span><span>区域布局</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-12" style="padding-top:9vh;align-items:center">
    <div class="span-8 card" data-anim style="height:54vh;position:relative;background:#f1f3f6">
      <div style="position:absolute;left:12%;top:18%;right:12%;bottom:18%;background:#dfe3e8;clip-path:polygon(12% 38%,31% 20%,54% 24%,75% 36%,84% 60%,62% 75%,34% 68%,18% 58%)"></div>
      <span style="position:absolute;left:38%;top:38%;width:1.6vw;height:1.6vw;border-radius:999px;background:var(--brand-red)"></span>
      <span style="position:absolute;left:55%;top:45%;width:1.6vw;height:1.6vw;border-radius:999px;background:var(--brand-red)"></span>
      <span style="position:absolute;left:48%;top:58%;width:1.6vw;height:1.6vw;border-radius:999px;background:var(--brand-red)"></span>
    </div>
    <div class="span-4 content-stack" data-anim>
      <div class="kicker">REGION</div><h2 class="h-md">重点区域覆盖</h2>
      <div class="agenda-list">
        <div class="agenda-item"><div class="idx">01</div><div class="txt">区域 A</div></div>
        <div class="agenda-item"><div class="idx">02</div><div class="txt">区域 B</div></div>
        <div class="agenda-item"><div class="idx">03</div><div class="txt">区域 C</div></div>
      </div>
    </div>
  </div>
</section>
```

## H22 · Growth Staircase

逐级上升台阶 / 阶梯柱。适合年度增长、阶段目标、成熟度爬坡、收入预测。

```html
<section class="slide" data-layout="H22" data-animate="staircase">
  <div class="chrome"><div class="l"><span class="square"></span><span>增长路径</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">GROWTH</div><h2 class="h-xl">关键指标持续爬坡</h2></div>
    <div style="display:flex;align-items:end;gap:1vw;height:46vh;margin-top:5vh" data-anim>
      <div style="height:25%;width:13vw;background:#dfe3e8;padding:1.4vh">10%</div>
      <div style="height:42%;width:13vw;background:#cfd5dd;padding:1.4vh">18%</div>
      <div style="height:58%;width:13vw;background:#b7c0ca;padding:1.4vh">26%</div>
      <div style="height:74%;width:13vw;background:var(--brand-red);color:#fff;padding:1.4vh">34%</div>
      <div style="height:88%;width:13vw;background:var(--brand-red-dark);color:#fff;padding:1.4vh">40%</div>
    </div>
  </div>
</section>
```

## H23 · Gear Process

齿轮 / 闭环协同。适合组织协作、流程机制、平台运转、生态联动。

```html
<section class="slide" data-layout="H23" data-animate="gear-process">
  <div class="chrome"><div class="l"><span class="square"></span><span>协同机制</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">OPERATING SYSTEM</div><h2 class="h-xl">四项机制协同运转</h2></div>
    <div class="grid-4" style="margin-top:6vh;align-items:center">
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="cog"></i></div><div class="card-title">机制一</div><p class="card-body">输入、责任和节奏。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="refresh-cw"></i></div><div class="card-title">机制二</div><p class="card-body">流转、反馈和复盘。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="network"></i></div><div class="card-title">机制三</div><p class="card-body">协同、治理和对齐。</p></div>
      <div class="card" data-anim><div class="icon-disc"><i data-lucide="check-circle-2"></i></div><div class="card-title">机制四</div><p class="card-body">验收、沉淀和扩展。</p></div>
    </div>
  </div>
</section>
```

## H24 · Arrow Callout Timeline

长红箭头 + 多个信息框。适合搜索/漏斗/推进路径、政策流程、项目阶段复盘。

```html
<section class="slide" data-layout="H24" data-animate="arrow-timeline">
  <div class="chrome"><div class="l"><span class="square"></span><span>推进路径</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">PATH</div><h2 class="h-xl">从输入到结果的关键路径</h2></div>
    <div class="arrow-timeline" data-anim>
      <div class="arrow-timeline-line"></div>
      <div class="arrow-timeline-head"></div>
      <div class="card arrow-timeline-card top" style="left:6%;width:18vw"><div class="num-pill">01</div><p class="card-body">阶段说明</p></div>
      <div class="card arrow-timeline-card bottom" style="left:30%;width:18vw"><div class="num-pill">02</div><p class="card-body">阶段说明</p></div>
      <div class="card arrow-timeline-card top" style="left:54%;width:18vw"><div class="num-pill">03</div><p class="card-body">阶段说明</p></div>
    </div>
  </div>
</section>
```

## H25 · Photo Quote

整张照片 + 左侧红色标题块 / 引语块。适合会议、发布会、现场故事、客户证言。图片要真实、明亮、可识别主体。

```html
<section class="slide" data-layout="H25" data-animate="photo-quote">
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>
  <div class="image-frame" style="position:absolute;inset:0;padding:0;border:0;box-shadow:none"><img src="images/25-scene.jpg" alt="现场照片"></div>
  <div style="position:absolute;left:7vw;top:18vh;width:25vw;background:var(--brand-red);color:#fff;padding:4vh 3vw" data-anim>
    <div class="kicker" style="color:rgba(255,255,255,.78)">FIELD STORY</div>
    <h2 class="h-md" style="margin-top:2vh">一句强结论覆盖照片现场</h2>
    <p style="margin-top:2vh;line-height:1.7">用于引用客户反馈、现场故事或发布会主题。</p>
  </div>
</section>
```

## H26 · Metaphor Compare

植物成长、双塔对比、金字塔等隐喻页。适合战略解释、方案对比、成长模型。只在需要“记忆点”时用,不要每页都用隐喻。

```html
<section class="slide" data-layout="H26" data-animate="metaphor">
  <div class="chrome"><div class="l"><span class="square"></span><span>方案对比</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">CONTRAST</div><h2 class="h-xl">两种路径的差异</h2></div>
    <div class="grid-2" style="margin-top:5vh;align-items:end">
      <div class="card" data-anim style="text-align:center"><div style="height:28vh;display:flex;align-items:end;justify-content:center;gap:.6vw"><span style="height:36%;width:3vw;background:#dfe3e8"></span><span style="height:58%;width:3vw;background:#cfd5dd"></span><span style="height:82%;width:3vw;background:var(--brand-red)"></span></div><div class="card-title">路径 A</div><p class="card-body">优势、限制、适用场景。</p></div>
      <div class="card" data-anim style="text-align:center"><div style="height:28vh;display:flex;align-items:end;justify-content:center;gap:.6vw"><span style="height:82%;width:3vw;background:var(--brand-red)"></span><span style="height:58%;width:3vw;background:#cfd5dd"></span><span style="height:36%;width:3vw;background:#dfe3e8"></span></div><div class="card-title">路径 B</div><p class="card-body">优势、限制、适用场景。</p></div>
    </div>
  </div>
</section>
```

## H27 · Problem Overview

三列问题拆解。适合痛点概览、现状挑战、客户问题、调研发现。

```html
<section class="slide" data-layout="H27" data-animate="problem-overview">
  <div class="chrome"><div class="l"><span class="square"></span><span>问题概览</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">PROBLEM</div><h2 class="h-xl">三个问题定义当前局面</h2></div>
    <div class="grid-3" style="margin-top:6vh">
      <div class="card flat" data-anim><div class="num-pill">01</div><div class="card-title">问题一</div><p class="card-body">用 2-3 句话描述问题来源、影响对象和为什么现在必须解决。</p></div>
      <div class="card flat" data-anim><div class="num-pill">02</div><div class="card-title">问题二</div><p class="card-body">适合写用户痛点、流程瓶颈、市场供需断点或组织成本。</p></div>
      <div class="card flat" data-anim><div class="num-pill">03</div><div class="card-title">问题三</div><p class="card-body">最后一列给出趋势性矛盾,引出后续方案和商业机会。</p></div>
    </div>
  </div>
</section>
```

## H28 · Market Size Donut

市场规模圆环 / 饼图 + 左右解释。适合 TAM/SAM/SOM、目标客群、市场空间、份额结构。

```html
<section class="slide" data-layout="H28" data-animate="market-size">
  <div class="chrome"><div class="l"><span class="square"></span><span>市场规模</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-12" style="padding-top:9vh;align-items:center">
    <div class="span-4 content-stack" data-anim>
      <div class="kicker">MARKET TARGET</div><h2 class="h-md">目标市场</h2>
      <p class="body-copy">定义用户、行业、地域或场景边界,说明为什么这是当前最值得进入的市场。</p>
    </div>
    <div class="span-4" data-anim style="display:grid;place-items:center">
      <div style="width:20vw;height:20vw;border-radius:999px;background:conic-gradient(var(--brand-red) 0 65%,#dfe3e8 65% 100%);display:grid;place-items:center;box-shadow:var(--shadow-soft)">
        <div style="width:11vw;height:11vw;border-radius:999px;background:#fff;display:grid;place-items:center;text-align:center"><div class="stat-big" style="font-size:3vw">65%</div><p class="card-body">share / segment</p></div>
      </div>
    </div>
    <div class="span-4 content-stack" data-anim>
      <div class="kicker">MARKET POTENTIAL</div><h2 class="h-md">增长潜力</h2>
      <p class="body-copy">放入市场规模、增长率、渗透率或替代空间,并说明机会为什么不是短期噪音。</p>
    </div>
  </div>
</section>
```

## H29 · Funding Use Donut

资金用途 / 预算结构圆环。适合融资计划、预算分配、资源投入、成本结构。

```html
<section class="slide" data-layout="H29" data-animate="funding-use">
  <div class="chrome"><div class="l"><span class="square"></span><span>资金用途</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-12" style="padding-top:9vh;align-items:center">
    <div class="span-5" data-anim style="display:grid;place-items:center">
      <div style="width:22vw;height:22vw;border-radius:999px;background:conic-gradient(var(--brand-red) 0 42%,#ef7b80 42% 58%,var(--brand-red-dark) 58% 89%,#dfe3e8 89% 100%);display:grid;place-items:center;box-shadow:var(--shadow-soft)">
        <div style="width:10vw;height:10vw;border-radius:999px;background:#fff;display:grid;place-items:center"><div class="stat-big" style="font-size:3vw">100%</div></div>
      </div>
    </div>
    <div class="span-7 grid-2" data-anim>
      <div class="card flat"><div class="card-title">42% 产品研发</div><p class="card-body">核心产品、平台能力、工程化和质量验证。</p></div>
      <div class="card flat"><div class="card-title">31% 市场获客</div><p class="card-body">销售渠道、品牌、活动和客户成功。</p></div>
      <div class="card flat"><div class="card-title">16% 团队建设</div><p class="card-body">关键岗位招聘、培训和组织能力建设。</p></div>
      <div class="card flat"><div class="card-title">11% 运营储备</div><p class="card-body">基础设施、法务、财务和不可预见支出。</p></div>
    </div>
  </div>
</section>
```

## H30 · Mini Market Share Charts

三组小柱状图并列。适合市场份额、竞品对比、区域表现、渠道拆分。

```html
<section class="slide" data-layout="H30" data-animate="market-share">
  <div class="chrome"><div class="l"><span class="square"></span><span>市场份额</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">COMPETITIVE SHARE</div><h2 class="h-xl">关键细分市场的份额变化</h2></div>
    <div class="grid-3" style="margin-top:5vh">
      <div class="card flat" data-anim><div class="card-title">Category One <span style="color:var(--brand-red)">45%</span></div><div style="height:24vh;display:flex;align-items:end;gap:.7vw"><span style="height:42%;width:2vw;background:#dfe3e8"></span><span style="height:55%;width:2vw;background:#cfd5dd"></span><span style="height:78%;width:2vw;background:var(--brand-red)"></span><span style="height:62%;width:2vw;background:#dfe3e8"></span></div></div>
      <div class="card flat" data-anim><div class="card-title">Category Two <span style="color:var(--brand-red)">22%</span></div><div style="height:24vh;display:flex;align-items:end;gap:.7vw"><span style="height:70%;width:2vw;background:#dfe3e8"></span><span style="height:36%;width:2vw;background:#cfd5dd"></span><span style="height:48%;width:2vw;background:var(--brand-red)"></span><span style="height:62%;width:2vw;background:#dfe3e8"></span></div></div>
      <div class="card flat" data-anim><div class="card-title">Competitor Gap <span style="color:var(--brand-red)">33%</span></div><div style="height:24vh;display:flex;align-items:end;gap:.7vw"><span style="height:32%;width:2vw;background:#dfe3e8"></span><span style="height:46%;width:2vw;background:#cfd5dd"></span><span style="height:73%;width:2vw;background:var(--brand-red)"></span><span style="height:58%;width:2vw;background:#dfe3e8"></span></div></div>
    </div>
  </div>
</section>
```

## H31 · Business Model Cards

商业模式 / 产品入口卡片。适合 app、平台、渠道、收入模型,可放 2-4 张产品图或示意卡。

```html
<section class="slide" data-layout="H31" data-animate="business-model">
  <div class="chrome"><div class="l"><span class="square"></span><span>商业模式</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">BUSINESS MODEL</div><h2 class="h-xl">产品、渠道和收入模型如何闭合</h2></div>
    <div class="grid-4" style="margin-top:5vh">
      <div class="card" data-anim style="background:var(--brand-red);color:#fff"><div class="icon-disc" style="background:#fff;color:var(--brand-red)"><i data-lucide="download"></i></div><div class="card-title" style="color:#fff">入口一</div><p style="line-height:1.6">核心获客入口和转化动作。</p></div>
      <div class="image-frame r-4x3" data-anim><img src="images/31-model-01.jpg" alt="商业模式图片 1"></div>
      <div class="card" data-anim style="background:var(--brand-red-dark);color:#fff"><div class="icon-disc" style="background:#fff;color:var(--brand-red)"><i data-lucide="upload"></i></div><div class="card-title" style="color:#fff">入口二</div><p style="line-height:1.6">留存、复购或增值服务路径。</p></div>
      <div class="image-frame r-4x3" data-anim><img src="images/31-model-02.jpg" alt="商业模式图片 2"></div>
    </div>
  </div>
</section>
```

## H32 · KPI Square Loop

四个 KPI 方块 + 循环箭头。适合增长闭环、转化漏斗、运营指标、关键数字页。

```html
<section class="slide" data-layout="H32" data-animate="kpi-loop">
  <div class="chrome"><div class="l"><span class="square"></span><span>关键数字</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-12" style="padding-top:9vh;align-items:center">
    <div class="span-4 content-stack" data-anim><div class="kicker">LOOK AT NUMBERS</div><h2 class="h-md">四个指标构成增长闭环</h2><p class="body-copy">用循环箭头表达指标之间互相驱动,适合把运营数字讲成一套机制。</p></div>
    <div class="span-8" data-anim style="position:relative;height:50vh">
      <div class="card flat" style="position:absolute;left:22%;top:5%;width:13vw;text-align:center;background:var(--brand-red);color:#fff"><div class="stat-big" style="font-size:3vw;color:#fff">85%</div><p>Metric One</p></div>
      <div class="card flat" style="position:absolute;right:22%;top:5%;width:13vw;text-align:center;background:#dfe3e8"><div class="stat-big" style="font-size:3vw">92%</div><p>Metric Two</p></div>
      <div class="card flat" style="position:absolute;left:22%;bottom:5%;width:13vw;text-align:center;background:#dfe3e8"><div class="stat-big" style="font-size:3vw">72%</div><p>Metric Three</p></div>
      <div class="card flat" style="position:absolute;right:22%;bottom:5%;width:13vw;text-align:center;background:var(--brand-red);color:#fff"><div class="stat-big" style="font-size:3vw;color:#fff">95%</div><p>Metric Four</p></div>
      <div style="position:absolute;left:42%;top:49%;width:12vw;height:1px;background:var(--line-strong)"></div>
      <div style="position:absolute;left:49%;top:30%;width:1px;height:16vh;background:var(--line-strong)"></div>
    </div>
  </div>
</section>
```

## H33 · Pricing Table

价格表 / 套餐表。适合 SaaS 定价、服务包、咨询报价、版本权益对比。

```html
<section class="slide" data-layout="H33" data-animate="pricing-table">
  <div class="chrome"><div class="l"><span class="square"></span><span>定价方案</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">PRICING PLAN</div><h2 class="h-xl">四档套餐覆盖不同客户成熟度</h2></div>
    <div class="grid-4" style="margin-top:5vh">
      <div class="card flat" data-anim><div class="card-title">Basic</div><div class="stat-big" style="font-size:2.4vw">$35</div><p class="card-body">入门功能、基础支持、月度报告。</p></div>
      <div class="card flat" data-anim><div class="card-title">Lite</div><div class="stat-big" style="font-size:2.4vw">$50</div><p class="card-body">团队协作、自动化流程、标准集成。</p></div>
      <div class="card flat" data-anim style="border-color:var(--brand-red)"><div class="card-title">Business</div><div class="stat-big" style="font-size:2.4vw">$80</div><p class="card-body">高级治理、审计、权限和客户成功。</p></div>
      <div class="card flat" data-anim><div class="card-title">Enterprise</div><div class="stat-big" style="font-size:2.4vw">Custom</div><p class="card-body">私有化、SLA、专属实施和安全评估。</p></div>
    </div>
  </div>
</section>
```

## H34 · SWOT Dark Panel

深色 SWOT 分析。适合机会风险、竞争格局、战略判断、产品强弱势。

```html
<section class="slide dark" data-layout="H34" data-animate="swot">
  <div class="chrome"><div class="l"><span class="square"></span><span>SWOT</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">PRODUCT STRENGTH</div><h2 class="h-xl">优势、弱点、机会和威胁</h2></div>
    <div class="grid-4" style="margin-top:6vh">
      <div class="card flat" data-anim style="background:rgba(255,255,255,.10);color:#fff"><div class="card-title" style="color:#fff">S / Strength</div><p style="line-height:1.6">核心优势和可持续差异。</p></div>
      <div class="card flat" data-anim style="background:rgba(255,255,255,.10);color:#fff"><div class="card-title" style="color:#fff">W / Weakness</div><p style="line-height:1.6">短板、依赖和执行风险。</p></div>
      <div class="card flat" data-anim style="background:rgba(255,255,255,.10);color:#fff"><div class="card-title" style="color:#fff">O / Opportunity</div><p style="line-height:1.6">市场窗口和外部机会。</p></div>
      <div class="card flat" data-anim style="background:rgba(255,255,255,.10);color:#fff"><div class="card-title" style="color:#fff">T / Threat</div><p style="line-height:1.6">竞争、替代和监管压力。</p></div>
    </div>
  </div>
</section>
```

## H35 · Gantt Milestones

甘特图 / 项目里程碑。适合项目计划、产品路线、季度推进、实施排期。

```html
<section class="slide" data-layout="H35" data-animate="gantt">
  <div class="chrome"><div class="l"><span class="square"></span><span>里程碑</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">TIMELINES AND MILESTONES</div><h2 class="h-xl">季度推进计划</h2></div>
    <div class="card flat" style="margin-top:5vh" data-anim>
      <div style="display:grid;grid-template-columns:7vw repeat(6,1fr);gap:.7vw;align-items:center">
        <div></div><div class="meta">JAN</div><div class="meta">FEB</div><div class="meta">MAR</div><div class="meta">APR</div><div class="meta">MAY</div><div class="meta">JUN</div>
        <div class="card-title">Research</div><div style="grid-column:2 / 4;background:#dfe3e8;padding:1vh">调研</div><div style="grid-column:4 / 5;background:var(--brand-red);color:#fff;padding:1vh">评审</div><div></div><div></div>
        <div class="card-title">Build</div><div></div><div style="grid-column:3 / 6;background:#cfd5dd;padding:1vh">开发</div><div style="grid-column:6 / 7;background:var(--brand-red);color:#fff;padding:1vh">发布</div>
        <div class="card-title">Launch</div><div></div><div></div><div style="grid-column:4 / 7;background:#dfe3e8;padding:1vh">推广与复盘</div>
      </div>
    </div>
  </div>
</section>
```

## H36 · Client Testimonials

客户证言 / 人物反馈。适合用户评价、合作伙伴背书、团队反馈、专家观点。

```html
<section class="slide" data-layout="H36" data-animate="testimonials">
  <div class="chrome"><div class="l"><span class="square"></span><span>客户证言</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="padding-top:8vh">
    <div class="content-stack" data-anim><div class="kicker">CLIENT TESTIMONIALS</div><h2 class="h-xl">来自关键客户的反馈</h2></div>
    <div class="grid-3" style="margin-top:6vh">
      <div class="card flat" data-anim style="text-align:center"><div style="font-size:4vw;color:var(--brand-red)">“</div><p class="card-body">一句真实、有指向性的客户反馈,说明产品解决了什么问题。</p><div class="num-pill" style="margin-top:2vh">A</div><div class="card-title">Name</div></div>
      <div class="card flat" data-anim style="text-align:center"><div style="font-size:4vw;color:var(--brand-red)">“</div><p class="card-body">可以写行业、职位、使用场景,避免空泛赞美。</p><div class="num-pill" style="margin-top:2vh">B</div><div class="card-title">Name</div></div>
      <div class="card flat" data-anim style="text-align:center"><div style="font-size:4vw;color:var(--brand-red)">“</div><p class="card-body">最后一条用于强化转化、效率、收入或风险降低。</p><div class="num-pill" style="margin-top:2vh">C</div><div class="card-title">Name</div></div>
    </div>
  </div>
</section>
```

## H37 · Human Agent Loop

人机协作闭环:上方治理、中心自动执行、下方人工门禁。适合 AI 流程、自动化平台、质量闭环、运营控制系统。右侧同级小节点使用 `.equal-children` + `.mini-card`,保持统一层级子容器等尺寸。

```html
<section class="slide" data-layout="H37" data-animate="human-agent-loop">
  <div class="chrome"><div class="l"><span class="square"></span><span>人机协作闭环</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div class="grid-2 same-size" style="height:100%;padding-top:7vh;grid-template-columns:.92fr 1.08fr;gap:2.4vw;align-items:center">
    <div class="content-stack" data-anim>
      <div class="kicker">HUMAN + AGENT LOOP</div>
      <h2 class="h-xl" style="color:var(--brand-red)">让人回到治理位,让 Agent 连续执行</h2>
      <p class="lead">一页讲清楚人在环上定目标和边界,Agent 在中间推进,人在关键门禁进入判断。</p>
      <div class="red-rule"></div>
      <p class="body-copy">适合解释 AI 研发、自动化运营、风控审核、质量验证等“自动执行 + 人工治理”的场景。</p>
    </div>

    <div class="card" data-anim style="display:grid;grid-template-rows:auto 1fr auto;gap:1.4vh;padding:2vh 1.8vw">
      <div style="border:2px solid var(--brand-red);background:#fff4f4;color:var(--brand-red);padding:1.6vh 1.4vw;text-align:center;font-weight:900">Human On the Loop · 治理 / 边界 / 发布</div>
      <div style="display:grid;grid-template-columns:1fr 9vw 1fr;gap:1vw;align-items:center">
        <div class="equal-children" style="grid-template-rows:repeat(4,minmax(0,1fr));gap:.8vh">
          <div class="mini-card"><strong>规划</strong><p class="card-body">目标拆解</p></div>
          <div class="mini-card"><strong>生成</strong><p class="card-body">方案输出</p></div>
          <div class="mini-card"><strong>测试</strong><p class="card-body">自动验证</p></div>
          <div class="mini-card"><strong>回归</strong><p class="card-body">质量确认</p></div>
        </div>
        <div style="width:9vw;height:9vw;border-radius:999px;background:var(--brand-red);color:#fff;display:grid;place-items:center;text-align:center;font-weight:900;box-shadow:var(--shadow-soft)">Agent<br/>自主执行</div>
        <div class="equal-children" style="grid-template-rows:repeat(4,minmax(0,1fr));gap:.8vh">
          <div class="mini-card"><strong>语义</strong><p class="card-body">理解偏差</p></div>
          <div class="mini-card"><strong>架构</strong><p class="card-body">边界风险</p></div>
          <div class="mini-card"><strong>性能</strong><p class="card-body">基准回归</p></div>
          <div class="mini-card"><strong>安全</strong><p class="card-body">风险升级</p></div>
        </div>
      </div>
      <div style="border:2px solid #1976d2;background:#f5faff;color:#1976d2;padding:1.4vh 1.4vw;text-align:center;font-weight:900">Human In the Loop · 关键节点判断</div>
    </div>
  </div>
</section>
```

## H38 · On In Governance Split

左侧大图/机制,右侧解释卡。适合把“治理位”和“裁决位”讲成一个统一操作系统,也适合组织分工、责任边界、风险门禁页。

```html
<section class="slide" data-layout="H38" data-animate="governance-split">
  <div class="chrome"><div class="l"><span class="square"></span><span>治理与门禁</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="height:100%;display:grid;grid-template-rows:auto minmax(0,1fr);gap:2vh;padding-top:7vh">
    <div class="content-stack" data-anim>
      <div class="kicker">ON + IN, ONE OPERATING LOOP</div>
      <h2 class="h-xl">一个闭环,两种人的位置</h2>
      <p class="lead">On 定战法,In 校偏差;执行不被打断,风险有人背书。</p>
    </div>

    <div class="grid-12 same-size" style="align-items:stretch">
      <div class="span-8 card" data-anim style="display:grid;grid-template-rows:auto 1fr auto;gap:1.4vh;padding:2vh 1.6vw">
        <div style="background:#fff4f4;border:2px solid var(--brand-red);padding:1.5vh;text-align:center;color:var(--brand-red);font-weight:900">Human On the Loop · 指挥所</div>
        <div style="display:grid;place-items:center">
          <div style="width:20vw;height:12vw;border:3px dashed var(--brand-red);border-radius:999px;display:grid;place-items:center;background:#fff7f7">
            <div style="width:8.5vw;height:8.5vw;border-radius:999px;background:var(--brand-red);color:#fff;display:grid;place-items:center;text-align:center;font-weight:900">Agent<br/>连续推进</div>
          </div>
        </div>
        <div style="background:#f5faff;border:2px solid #1976d2;padding:1.5vh;text-align:center;color:#1976d2;font-weight:900">Human In the Loop · 前沿校射</div>
      </div>
      <div class="span-4" data-anim style="display:grid;grid-template-rows:auto auto 1fr;gap:1.1vh;min-height:0">
        <div class="card" style="border-color:rgba(var(--brand-red-rgb),.24)"><div class="card-title" style="color:var(--brand-red)">一句比喻</div><p class="card-body">指挥所在环上定战法,前沿节点在环中校偏差。</p></div>
        <div class="quote-band" style="font-size:1.02vw;line-height:1.5;padding:1.6vh 1.4vw">人不是退出链路,而是从每步执行上移到系统治理和关键裁决。</div>
        <div class="equal-children" style="grid-template-rows:repeat(3,minmax(0,1fr));gap:.9vh">
          <div class="mini-card"><strong style="color:var(--brand-red)">On: 系统治理</strong><p class="card-body">方向、边界、资源、发布节奏。</p></div>
          <div class="mini-card"><strong style="color:#1976d2">In: 关键裁决</strong><p class="card-body">高风险、高不确定、高影响节点。</p></div>
          <div class="mini-card"><strong>统一: 组织协议</strong><p class="card-body">规则前置、风险触发、结果沉淀。</p></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## H39 · Org Protocol Board

组织落位 + 运行过程 + 触发矩阵。适合管理机制、项目治理、AI 落地流程、跨团队协作协议。此页信息密度高,必须用 `.same-size` 和 `.equal-children` 控制同层小卡尺寸。

```html
<section class="slide" data-layout="H39" data-animate="org-protocol">
  <div class="chrome"><div class="l"><span class="square"></span><span>组织协议</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="height:100%;display:grid;grid-template-rows:auto minmax(0,1fr) auto;gap:1.2vh;padding-top:7vh;padding-bottom:4.5vh">
    <div class="content-stack" data-anim style="gap:1vh">
      <div class="kicker">ORG DESIGN + OPERATING PROCESS</div>
      <h2 class="h-xl" style="font-size:min(3.35vw,5.7vh)">组织协议先行,流程才能稳定运转</h2>
      <p class="lead" style="font-size:1.08vw;line-height:1.5">先明确谁治理、谁审查、谁编排、谁验证;再把任务进入到资产沉淀串成一条协议。</p>
    </div>

    <div class="grid-2 same-size" style="grid-template-columns:.86fr 1.14fr;gap:2vw;min-height:0">
      <div class="card" data-anim style="display:grid;grid-template-rows:auto 1fr;gap:.8vh;padding:1.4vh 1.35vw;background:linear-gradient(135deg,#fff7f7,#fff)">
        <div class="card-title" style="color:var(--brand-red)">角色落位</div>
        <div class="equal-children" style="grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:.7vh .8vw">
          <div class="mini-card"><strong>系统架构师</strong><p class="card-body">On: 方向、边界、资源、发布。</p></div>
          <div class="mini-card"><strong>领域骨干</strong><p class="card-body">In: 语义、架构、质量裁决。</p></div>
          <div class="mini-card"><strong>编排工程师</strong><p class="card-body">Flow: 上下文、工具、Prompt、路由。</p></div>
          <div class="mini-card"><strong>验证工程师</strong><p class="card-body">Gate: 测试、基准、日志、回归。</p></div>
        </div>
      </div>
      <div class="card" data-anim style="display:grid;grid-template-rows:auto 1fr;gap:.8vh;padding:1.4vh 1.35vw;background:linear-gradient(135deg,#f7fbff,#fff)">
        <div class="card-title" style="color:var(--brand-red)">运行过程</div>
        <div class="equal-children" style="grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:.7vh .8vw">
          <div class="mini-card"><strong>01 任务进入</strong><p class="card-body">目标、优先级、风险级别。</p></div>
          <div class="mini-card"><strong>02 人工定义</strong><p class="card-body">PRD、架构、验收标准。</p></div>
          <div class="mini-card"><strong>03 自动迭代</strong><p class="card-body">拆解、生成、测试、回归。</p></div>
          <div class="mini-card"><strong>04 自动验证</strong><p class="card-body">日志、基准、CI。</p></div>
          <div class="mini-card"><strong>05 人审触发</strong><p class="card-body">方向错误、风险越界。</p></div>
          <div class="mini-card"><strong>06 资产沉淀</strong><p class="card-body">Spec、测试、知识库。</p></div>
        </div>
      </div>
    </div>

    <div class="card flat" data-anim style="display:grid;grid-template-rows:auto minmax(0,1fr);gap:1vh;padding:1.05vh 1vw;border:1px solid var(--line);background:linear-gradient(135deg,#fff8f8,#fff 52%,#f7fbff)">
      <div style="display:flex;align-items:center;justify-content:space-between"><strong style="color:var(--brand-red);font-size:1.12vw">三层协同触发矩阵</strong><span class="meta">TRIGGER MATRIX</span></div>
      <div class="grid-3 same-size" style="gap:1vw">
        <div class="mini-card"><strong>自动执行</strong><p class="card-body">测试通过、影响可解释、基准无异常。</p></div>
        <div class="mini-card"><strong>Human In</strong><p class="card-body">破坏性变更、性能回归、质量争议。</p></div>
        <div class="mini-card"><strong>Human On</strong><p class="card-body">发布决策、路线调整、资源协调。</p></div>
      </div>
    </div>
  </div>
</section>
```

## H40 · Matching Engine

任务池 - 匹配引擎 - 能力池。适合资源调度、人才盘点、Agent 编排、供需匹配、项目组队。左右两侧同级标签必须等高,不要按文字多少缩放。

```html
<section class="slide" data-layout="H40" data-animate="matching-engine">
  <div class="chrome"><div class="l"><span class="square"></span><span>任务匹配引擎</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="height:100%;display:grid;grid-template-rows:auto 1fr auto;gap:2vh;padding-top:7vh;padding-bottom:5vh">
    <div class="content-stack" data-anim style="gap:1vh">
      <div class="kicker">MATCHING ENGINE</div>
      <h2 class="h-xl">从固定分工,转向基于标签的动态编组</h2>
    </div>
    <div style="display:grid;grid-template-columns:1fr .52fr 1fr;gap:1.4vw;align-items:stretch">
      <div class="card" data-anim style="padding:2vh 1.7vw;display:grid;grid-template-rows:auto 1fr;gap:1.1vh">
        <div class="card-title" style="color:var(--brand-red)">任务池 Task Pool</div>
        <div class="equal-children" style="grid-template-rows:repeat(4,minmax(0,1fr));gap:.8vh">
          <div class="quote-band" style="font-size:1vw;padding:1.5vh 1.4vw">P0 · 线上故障 · 标签: 风险 / 快速修复</div>
          <div class="quote-band" style="font-size:1vw;padding:1.5vh 1.4vw">P1 · 性能 gap · 标签: 标准库 / 基准</div>
          <div class="quote-band" style="font-size:1vw;padding:1.5vh 1.4vw">P1 · 新能力 · 标签: 架构 / 测试</div>
          <div class="quote-band" style="font-size:1vw;padding:1.5vh 1.4vw">P2 · 文档补齐 · 标签: Spec / 示例</div>
        </div>
      </div>
      <div data-anim style="display:grid;align-items:center;justify-items:center;gap:1vh">
        <div style="width:100%;border:1px solid var(--brand-red);background:#fff;box-shadow:var(--shadow-soft);padding:2vh 1vw;text-align:center">
          <div class="icon-disc" style="margin:0 auto 1vh"><i data-lucide="network"></i></div>
          <div style="font-size:1.35vw;font-weight:900;color:var(--brand-red);line-height:1.15">匹配<br/>引擎</div>
          <p class="meta" style="margin-top:1vh">优先级 · 标签覆盖 · 负载 · 风险</p>
        </div>
        <div class="meta">DYNAMIC TEAMING</div>
      </div>
      <div class="card" data-anim style="padding:2vh 1.7vw;display:grid;grid-template-rows:auto 1fr;gap:1.1vh">
        <div class="card-title" style="color:var(--brand-red)">能力池 Capability Pool</div>
        <div class="equal-children" style="grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:.8vh">
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">人 · 性能 / 标准库</div>
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">人 · 编译器 / 语义</div>
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">人 · 测试 / Fuzzing</div>
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">人 · Agent 编排</div>
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">Agent · 基准分析</div>
          <div class="quote-band" style="font-size:.96vw;padding:1.45vh 1.2vw">Agent · 代码生成</div>
        </div>
      </div>
    </div>
    <div class="red-panel" data-anim style="padding:1.5vh 2vw;min-height:auto;display:flex;align-items:center;justify-content:space-between;gap:2vw">
      <div style="font-size:1.45vw;font-weight:900">动态组织: 需求攻坚小队 + 自动化工作流 + 验证门禁</div>
      <div class="en">OPTIMAL ALLOCATION</div>
    </div>
  </div>
</section>
```

## H41 · Metaphor Mapping

左侧讲一个历史/行业/业务类比,右侧映射到当前方案。适合把抽象机制讲得有记忆点。不要滥用,每份 deck 1 页足够。

```html
<section class="slide" data-layout="H41" data-animate="metaphor-mapping">
  <div class="chrome"><div class="l"><span class="square"></span><span>机制类比</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="height:100%;display:grid;grid-template-rows:auto minmax(0,1fr) auto;gap:2.4vh;padding-top:7vh">
    <div class="content-stack" data-anim>
      <div class="kicker">METAPHOR TO MECHANISM</div>
      <h2 class="h-xl">技术进步扩大供给,组织机制放大战力</h2>
      <p class="lead">用一个熟悉类比解释新机制:真正的胜负手不是工具本身,而是把新的供给组织成可持续协同。</p>
    </div>
    <div class="grid-2 same-size" style="grid-template-columns:.95fr 1.05fr;gap:2vw;min-height:0">
      <div class="card" data-anim style="background:linear-gradient(135deg,#fff7f7,#fff);display:grid;grid-template-rows:auto 1fr;gap:1.6vh">
        <div><div class="card-title" style="color:var(--brand-red)">类比对象</div><p class="card-body">过去依赖少数专家,能力供给窄、训练周期长;技术和制度变化后,更多成员可以被快速组织进作战序列。</p></div>
        <div style="display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:1vw;align-items:center;text-align:center">
          <div class="mini-card"><strong>稀缺能力</strong><p class="card-body">小规模</p></div>
          <div style="color:var(--brand-red);font-weight:900">→</div>
          <div class="mini-card"><strong>技术 + 制度</strong><p class="card-body">门槛下降</p></div>
          <div style="color:var(--brand-red);font-weight:900">→</div>
          <div class="mini-card"><strong>能力池</strong><p class="card-body">可持续补充</p></div>
        </div>
      </div>
      <div class="card" data-anim style="background:linear-gradient(135deg,#f7fbff,#fff);display:grid;grid-template-rows:auto 1fr;gap:1.6vh">
        <div class="card-title">映射到当前方案</div>
        <div class="grid-3 same-size" style="gap:1vw">
          <div class="mini-card"><strong>01 降低门槛</strong><p class="card-body">工具让更多成员调用高阶能力。</p></div>
          <div class="mini-card"><strong>02 标签检索</strong><p class="card-body">把“人在哪里”变成“能力在哪里”。</p></div>
          <div class="mini-card"><strong>03 动态编组</strong><p class="card-body">围绕高优先级任务临时成军。</p></div>
        </div>
      </div>
    </div>
    <div class="quote-band" data-anim style="font-size:1.12vw;text-align:center">工具扩大可用供给;组织机制把能力池组织成面向任务的动态单元。</div>
  </div>
</section>
```

## H42 · Before After Case

传统模式 vs 新模式 + 底部三项结果。适合改革收益、试点案例、效率提升、研发流程改造。两列和底部指标都必须保持同层尺寸一致。

```html
<section class="slide" data-layout="H42" data-animate="before-after-case">
  <div class="chrome"><div class="l"><span class="square"></span><span>实践举例</span></div><div></div></div>
  <div class="brand-lockup"><span class="brand-mark" aria-hidden="true"></span><span>HUAWEI</span></div>

  <div style="height:100%;display:grid;grid-template-rows:auto 1fr auto;gap:2vh;padding-top:7vh;padding-bottom:5vh">
    <div class="content-stack" data-anim style="gap:1vh">
      <div class="kicker">CASE EXAMPLE</div>
      <h2 class="h-xl">用一个试点案例说明机制带来的变化</h2>
      <p class="lead">左侧写传统排期/等待/串行,右侧写标签匹配/自动先行/人工关键审查。</p>
    </div>
    <div class="grid-2 same-size" style="align-items:stretch">
      <div class="card" data-anim>
        <div class="card-title" style="color:var(--muted)">传统模式</div>
        <div class="bullet-list" style="margin-top:2vh">
          <div class="bullet-item"><div class="bullet-dot" style="background:var(--line-strong)"></div><div><strong>讨论排期</strong><p class="card-body">先判断职责归属,再等待专家空档。</p></div></div>
          <div class="bullet-item"><div class="bullet-dot" style="background:var(--line-strong)"></div><div><strong>跨组等待</strong><p class="card-body">基准、根因和方案需要多轮同步。</p></div></div>
          <div class="bullet-item"><div class="bullet-dot" style="background:var(--line-strong)"></div><div><strong>串行推进</strong><p class="card-body">实现、验证、回归依次排队。</p></div></div>
        </div>
      </div>
      <div class="card" data-anim style="border-color:rgba(var(--brand-red-rgb),.34)">
        <div class="card-title" style="color:var(--brand-red)">新模式</div>
        <div class="bullet-list" style="margin-top:2vh">
          <div class="bullet-item"><div class="bullet-dot"></div><div><strong>标签匹配成队</strong><p class="card-body">围绕任务标签快速形成攻坚小队。</p></div></div>
          <div class="bullet-item"><div class="bullet-dot"></div><div><strong>自动先行分析</strong><p class="card-body">自动读取基准、定位瓶颈、生成候选方案。</p></div></div>
          <div class="bullet-item"><div class="bullet-dot"></div><div><strong>人审关键判断</strong><p class="card-body">负责人审查架构、兼容性和质量背书。</p></div></div>
        </div>
      </div>
    </div>
    <div class="grid-3 same-size">
      <div class="card flat" data-anim style="text-align:center"><div class="stat-big" style="font-size:min(3.4vw,6vh)">标签</div><p class="meta">基于能力识别组队</p></div>
      <div class="card flat" data-anim style="text-align:center"><div class="stat-big" style="font-size:min(3.4vw,6vh)">7 天</div><p class="meta">形成初步输出</p></div>
      <div class="card flat" data-anim style="text-align:center"><div class="stat-big" style="font-size:min(3.4vw,6vh)">TTM</div><p class="meta">从排期驱动转向任务驱动</p></div>
    </div>
  </div>
</section>
```

## 选版式决策表

| 你要表达 | 选 |
|---|---|
| 首页、主题、汇报人 | H01 |
| 目录 / 章节索引 | H02 |
| 新章节开始 | H03 |
| 背景、前言、说明文字 | H04 |
| 三个能力 / 三项策略 | H05 |
| 年度进展 / 里程碑 | H06 |
| 指标、达成率、横向数据对比 | H07 |
| 流程、路径、方法论 | H08 |
| 照片、产品图、案例证据 | H09 |
| 结束页 | H10 |
| 前言、背景长说明、研究口径 | H11 |
| 案例摘要、新闻式图文、会议纪要 | H12 / H25 |
| 多图横向陈列、活动回顾 | H13 |
| 团队、专家、人物阵容 | H14 |
| 大数字、KPI 看板、年度结果 | H15 |
| 趋势、柱线组合、经营分析 | H16 / H22 |
| 能力模型、生态关系、中心辐射 | H17 |
| 路线图、阶段推进、成熟度路径 | H18 / H24 |
| 客户案例、区域项目、圆形照片集 | H19 |
| 图标化能力清单、产品模块 | H20 |
| 地图、区域布局、网点分布 | H21 |
| 协同机制、闭环流程、齿轮关系 | H23 |
| 战略隐喻、双路径对比、成长模型 | H26 |
| 问题概览、市场规模、融资用途 | H27 / H28 / H29 |
| 市场份额、商业模式、KPI 闭环 | H30 / H31 / H32 |
| 定价、SWOT、甘特计划、客户证言 | H33 / H34 / H35 / H36 |
| 人机协作闭环、On/In 治理、人和 Agent 边界 | H37 / H38 |
| 组织协议、角色落位、运行过程、触发矩阵 | H39 |
| 任务池、能力池、动态组队、Agent 编排 | H40 |
| 历史/业务类比映射到机制 | H41 |
| 传统模式 vs 新模式的试点案例 | H42 |

## 常犯错误

- 不要把页面做得过度互联网化:大圆角、渐变按钮、彩色卡片会破坏企业汇报感。
- 不要在每页都放大 logo;右上品牌位已经足够。
- 不要给同一页放太多红色圆形图标;每页 3-5 个就够。
- 不要把正文塞满;Huawei 企业汇报的信息密度可以偏高,但网页 PPT 大屏展示仍要留白。
- 不要在图片页混用不同宽高比。
- 不要把目录页、章节页、正文页都做成同一版式;红色大块只适合封面、目录、章节和结尾。
- 不要让同一层级的子容器按内容多少自然长短变化;用 `.same-size` / `.equal-children` / `.mini-card` 锁住同级尺寸。
