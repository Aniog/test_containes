# 温思达电力装备有限公司 — 设计规范

## 品牌定位
工业电力装备行业，专业、可靠、技术领先。视觉风格沉稳大气，以深蓝+橙黄为主色调，传递科技感与信任感。

## 色彩系统
- 主色（深海蓝）：`#0A1628` — 导航栏、页脚背景
- 辅色（科技蓝）：`#1A3A6B` — 区块背景、卡片
- 强调色（电力橙）：`#F5A623` — CTA 按钮、高亮文字、图标
- 亮蓝（链接/悬停）：`#2E7FD9`
- 浅灰背景：`#F4F6FA`
- 白色：`#FFFFFF`
- 正文深色：`#1C2B3A`
- 次要文字：`#5A6A7A`

Tailwind 自定义颜色（在 tailwind.config.js 中扩展）：
- `brand-navy: #0A1628`
- `brand-blue: #1A3A6B`
- `brand-orange: #F5A623`
- `brand-sky: #2E7FD9`
- `brand-gray: #F4F6FA`
- `brand-text: #1C2B3A`
- `brand-muted: #5A6A7A`

## 字体
- 标题：思源黑体 / Noto Sans SC，font-weight: 700/800
- 正文：Noto Sans SC，font-weight: 400/500
- 英文辅助：Inter

## 间距
- 区块 padding：`py-20 md:py-28`
- 容器最大宽度：`max-w-7xl mx-auto px-6`
- 卡片内边距：`p-8`
- 元素间距：`gap-8` / `gap-12`

## 边框与阴影
- 卡片：`rounded-xl shadow-lg`
- 按钮：`rounded-lg`
- 分割线：`border-brand-blue/20`

## 排版规范
- 主标题（Hero）：`text-4xl md:text-6xl font-extrabold`
- 区块标题：`text-3xl md:text-4xl font-bold`
- 副标题：`text-lg md:text-xl font-medium`
- 正文：`text-base leading-relaxed`
- 小字/标签：`text-sm font-medium`

## 组件风格
- 导航：固定顶部，深海蓝背景，白色文字，滚动后加阴影
- Hero：全屏背景图，深色遮罩，白色大标题，橙色 CTA
- 区块标题：居中，上方有橙色小标签，下方有蓝色下划线装饰
- 卡片：白色背景，圆角，悬停时轻微上移 + 阴影加深
- 按钮主色：橙色背景白字；次要：透明边框白字
- 页脚：深海蓝背景，白色/灰色文字

## Do's
- 使用 Tailwind 工具类，不写内联 style
- 所有文字必须与背景形成高对比度
- 图片使用 data-strk-img 系统
- 响应式：移动端单列，桌面端多列

## Don'ts
- 不使用浅色文字在浅色背景上
- 不使用魔法数值（硬编码 hex/px）
- 不使用过于花哨的动画
