# Design System — 水培植物展示网站

## 品牌定位
清新、自然、现代。以绿色和青绿色为主色调，传达生命力与水的纯净感。

## 调色板

### 主色 — Leaf（叶绿）
- 主要按钮、强调文字、图标：`text-leaf-600` / `bg-leaf-600`
- 悬停状态：`hover:bg-leaf-700`
- 浅色背景区块：`bg-leaf-50`
- 徽章/标签：`bg-leaf-100 text-leaf-700`

### 辅色 — Water（水青）
- 次要按钮、链接、装饰线：`text-water-500` / `bg-water-500`
- 浅色背景：`bg-water-50`
- 渐变搭配：`from-water-400 to-leaf-500`

### 暖色 — Soil（土棕）
- 提示信息、暖色标签：`text-soil-600`
- 浅色背景：`bg-soil-50`

### 中性色
- 页面背景：`bg-gray-50`
- 卡片背景：`bg-white`
- 主要文字：`text-gray-900`
- 次要文字：`text-gray-600`
- 边框：`border-gray-200`

## 排版

### 字体
- 全局：Inter（Google Fonts）
- 标题：`font-bold` 或 `font-semibold`
- 正文：`font-normal`

### 字号层级
- 超大标题（Hero）：`text-5xl md:text-6xl font-bold`
- 页面标题：`text-3xl md:text-4xl font-bold`
- 区块标题：`text-2xl font-semibold`
- 卡片标题：`text-lg font-semibold`
- 正文：`text-base text-gray-700`
- 辅助文字：`text-sm text-gray-500`

## 间距
- 区块上下间距：`py-16 md:py-24`
- 容器水平内边距：`px-4 md:px-8`
- 最大宽度：`max-w-7xl mx-auto`
- 卡片内边距：`p-6`
- 元素间距：`gap-6` 或 `gap-8`

## 圆角
- 卡片：`rounded-2xl`
- 按钮：`rounded-full`
- 标签/徽章：`rounded-full`
- 图片：`rounded-xl`

## 阴影
- 卡片默认：`shadow-sm`
- 卡片悬停：`hover:shadow-lg`
- 导航栏：`shadow-sm`

## 按钮样式
- 主要按钮：`bg-leaf-600 hover:bg-leaf-700 text-white font-semibold px-6 py-3 rounded-full transition-colors`
- 次要按钮：`border-2 border-leaf-600 text-leaf-600 hover:bg-leaf-50 font-semibold px-6 py-3 rounded-full transition-colors`
- 幽灵按钮：`text-water-600 hover:text-water-700 font-medium`

## 卡片样式
- 标准卡片：`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden`
- 特色卡片：`bg-leaf-50 rounded-2xl p-6`

## 导航栏
- 背景：`bg-white/90 backdrop-blur-sm`
- 固定顶部：`sticky top-0 z-50`
- 高度：`h-16`

## 渐变
- Hero 背景：`bg-gradient-to-br from-leaf-50 via-water-50 to-white`
- 装饰渐变：`bg-gradient-to-r from-leaf-400 to-water-400`

## 禁止事项
- 不使用纯黑色背景（用 `gray-900` 代替）
- 不在绿色背景上使用绿色文字
- 不使用超过 3 种主色的组合
- 不使用小于 `text-sm` 的字号作为主要内容
- 不硬编码十六进制颜色，使用 Tailwind 命名颜色
