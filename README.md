# 华为风格 PPT Skill

面向战略汇报、架构总览、经营分析和方案对比的 PPT 制作工作流。新版采用：

> 内容分析 → 分页规划 → 低保真 Markdown 蓝图 → imagegen 逐页出图 → 视觉与文字验收

相比旧版 HTML/CSS 高密度管线，新版不再用空白率和元素数量驱动排版，优先保证主结论、信息层级和视觉质量。

## 主要变化

- 同步 `clowder-ai` 2026-06-17 的新版 PPT Forge 流程。
- 用 ASCII art 低保真蓝图锁定每页结构，再交给 imagegen。
- 新增完整华为风格 preset：色板、灰度、字体、8 种页面模式、图表配色和禁忌清单。
- 删除旧 HTML/CSS、密度检测和多 reviewer 流程。
- 明确 raster PNG 与可编辑 PPTX 的能力边界和交接条件。
- 增加生成后文字、数字和来源复核门禁。
- 新增华为式 HTML 可编辑 deck 轨道：数据密集型技术汇报的编辑友好流程（≥16px 字号地板、N 栏对比、原生 SVG 架构图、评测表、数据接地门禁）。

## 目录结构

```text
huawei-style-ppt-skill/
├── README.md
├── LICENSE
└── ppt-forge/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    └── references/
        ├── ppt-html-authoring.md
        ├── ppt-lofi-authoring.md
        └── ppt-style-huawei.md
```

## 快速开始

### 前置能力

最终出图要求宿主提供可调用的 image-generation / imagegen 工具。安装后先确认当前会话能生成图片；如果宿主没有该能力，本 skill 只交付分页表和低保真 Markdown，不承诺生成最终视觉稿。

Claude Code：

```bash
cp -r ppt-forge ~/.claude/skills/
```

Codex：

```bash
cp -r ppt-forge ~/.codex/skills/
```

然后直接提出需求：

> 做一套华为式技术方案汇报，受众是 CTO，大屏展示，内容可以适度精简。

Skill 会先给出分页表和低保真稿；确认且当前宿主具备图像生成能力后，才逐页生成最终视觉稿。

## 输出模式

| 模式 | 适用场景 | 限制 |
|---|---|---|
| Low-fi Markdown | 所有宿主；内容规划和审稿 | 不含最终视觉稿 |
| Raster PNG | 宿主具备 image-generation 能力；快速出图和固定内容交付 | 文字、图表和形状不可独立编辑 |
| Editable HTML deck | 数据密集、文字需精确可改、要导出 PPTX/PDF | 视觉规整度中等，需自行核算字号与溢出 |
| Editable PPTX handoff | 正式汇报、需要反复改稿 | 本仓库不实现；必须交给独立的原生 PPTX authoring/export 工具 |

不要把整页 PNG 宣称为“可编辑 PPT”。需要可编辑交付时，停止在低保真稿和视觉素材交付，并明确转交原生 PPTX 制作流程。

## 使用前必读

- 一页只讲一个主结论；高密度不等于没有留白。
- 先确认分页和最复杂的一页，再批量生成。
- 图片中的文字必须逐字核对，尤其是中文、数字、单位和来源。
- 华为红只用于关键数据和结论，不应铺满整页。
- 正式交付前必须并排查看整套页面，检查字体、配色、装饰和密度是否漂移。

## 来源与许可

新版工作流同步自 [`zts212653/clowder-ai`](https://github.com/zts212653/clowder-ai) `main` 分支：

| 上游文件 | 本仓库文件 |
|---|---|
| `cat-cafe-skills/ppt-forge/SKILL.md` | `ppt-forge/SKILL.md` |
| `cat-cafe-skills/refs/ppt-lofi-authoring.md` | `ppt-forge/references/ppt-lofi-authoring.md` |
| `cat-cafe-skills/refs/ppt-style-huawei.md` | `ppt-forge/references/ppt-style-huawei.md` |

同步基线：上游 PPT Forge 最近提交 `f3d530cea3ef`（2026-06-17）。本仓库将上游分散引用整理为可独立安装的 skill，并移除了项目内部角色与工具耦合。

MIT License，详见 [LICENSE](LICENSE)。
