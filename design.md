# 成都网站设计规范

## 主题
以成都为主题的城市介绍网站，展现成都的自然风光、美食文化、历史人文与现代都市魅力。

## 色彩系统

### 主色调（红色系 - 取自成都锦官城的红墙）
- Primary Red: `#C0392B` → Tailwind: `text-red-700`, `bg-red-700`
- Light Red: `#E74C3C` → Tailwind: `text-red-500`, `bg-red-500`
- Dark Red: `#922B21` → Tailwind: `text-red-800`, `bg-red-800`

### 辅助色（金色系 - 取自金沙遗址的黄金）
- Gold: `#D4A017` → 在 tailwind.config.js 中定义为 `chengdu-gold`
- Light Gold: `#F0C040` → 定义为 `chengdu-gold-light`

### 中性色
- Dark Background: `#1A1A2E` → 深夜成都
- Section Background: `#F9F5F0` → 暖白色
- Text Dark: `#2C2C2C`
- Text Muted: `#6B7280` → Tailwind: `text-gray-500`

### 绿色（取自都江堰的绿水）
- Green: `#27AE60` → Tailwind: `text-green-600`

## 字体
- 标题：Noto Serif SC（衬线体，体现历史感）
- 正文：Noto Sans SC（无衬线体，清晰易读）
- 英文辅助：Inter

## 排版
- 大标题：`text-5xl md:text-7xl font-bold`
- 章节标题：`text-3xl md:text-4xl font-bold`
- 卡片标题：`text-xl font-semibold`
- 正文：`text-base leading-relaxed`
- 辅助文字：`text-sm text-gray-500`

## 间距
- 章节间距：`py-20 md:py-28`
- 容器：`max-w-7xl mx-auto px-4 md:px-8`
- 卡片内边距：`p-6`
- 元素间距：`gap-6 md:gap-8`

## 边框与圆角
- 卡片圆角：`rounded-2xl`
- 按钮圆角：`rounded-full`
- 图片圆角：`rounded-xl`
- 边框：`border border-gray-200`

## 阴影
- 卡片阴影：`shadow-lg hover:shadow-xl transition-shadow`
- 导航阴影：`shadow-md`

## 组件风格

### 导航栏
- 固定顶部，半透明背景 + backdrop-blur
- Logo 使用红色主色
- 链接 hover 时显示红色下划线

### Hero 区域
- 全屏高度，深色叠加层
- 大标题白色，副标题金色
- 渐变遮罩从底部向上

### 章节卡片
- 白色背景，圆角，阴影
- hover 时轻微上移 `hover:-translate-y-1`
- 图片占上半部分，文字在下

### 按钮
- 主按钮：红色背景，白色文字，圆角
- 次按钮：透明背景，红色边框，红色文字

## 禁止事项
- 不使用纯黑色背景（除 Hero 区域）
- 不使用低对比度文字（如浅灰色文字在白色背景上）
- 不使用超过 3 种主色
- 不使用硬编码 hex 颜色（在 tailwind.config.js 中定义）
