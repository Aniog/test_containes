# Design System — 木质家具品牌网站

## 品牌定位
高端、自然、温暖的木质家具品牌，强调工艺与质感。

## 色彩系统

### 主色调（暖木色系）
- `wood-50`: `#fdf8f3` — 极浅米白，页面背景
- `wood-100`: `#f5ede0` — 浅米色，卡片背景
- `wood-200`: `#e8d5b7` — 浅木色，分隔线/边框
- `wood-400`: `#c49a6c` — 中木色，次要强调
- `wood-600`: `#8b5e3c` — 深木色，主要强调色
- `wood-800`: `#5c3d2e` — 深棕，标题文字
- `wood-900`: `#3d2314` — 极深棕，深色背景

### 辅助色
- `forest-600`: `#4a7c59` — 森林绿，自然感点缀
- `cream`: `#fefcf8` — 奶白，纯净背景

### 文字色
- 主标题：`text-wood-900` (`#3d2314`)
- 正文：`text-wood-800` (`#5c3d2e`)
- 次要文字：`text-wood-600` (`#8b5e3c`)
- 浅色背景上的文字：`text-wood-800`

## 字体
- 标题：Playfair Display（衬线，优雅感）
- 正文：Inter（无衬线，清晰易读）
- 字重：标题 700/800，正文 400/500

## 间距
- 区块内边距：`py-20 px-6` (desktop: `py-28 px-8`)
- 卡片内边距：`p-6` (desktop: `p-8`)
- 元素间距：`gap-8` (desktop: `gap-12`)

## 圆角
- 卡片：`rounded-2xl`
- 按钮：`rounded-full`
- 图片：`rounded-xl`

## 阴影
- 卡片悬停：`shadow-lg`
- 按钮：`shadow-md`

## 按钮样式
- 主按钮：`bg-wood-800 text-cream rounded-full px-8 py-3 font-medium hover:bg-wood-900`
- 次按钮：`border-2 border-wood-800 text-wood-800 rounded-full px-8 py-3 hover:bg-wood-100`

## 导航
- 背景：`bg-cream/95 backdrop-blur`
- 文字：`text-wood-800`
- 固定顶部，带阴影

## 区块结构
1. Hero — 全屏背景图，大标题，CTA按钮
2. Features — 三列特色介绍（工艺/材质/设计）
3. Products — 产品展示网格（4件精选）
4. About — 品牌故事，左图右文
5. Testimonials — 客户评价
6. Contact/CTA — 联系我们，底部行动号召
7. Footer — 版权信息

## 禁止事项
- 不使用纯黑色背景（除非深色区块）
- 不使用冷色调（蓝/紫）作为主色
- 不使用过于圆润的卡通风格
- 文字颜色必须与背景有足够对比度
