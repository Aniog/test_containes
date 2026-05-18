# 金利厨具用品有限公司 — 设计规范

## 品牌定位
温馨、家庭感、品质感。传递"家的味道从厨房开始"的品牌理念。

## 色彩系统
- 主色（暖橙）：`#E8622A` — 用于按钮、强调、图标
- 辅色（深棕）：`#5C3317` — 用于标题、深色文字
- 背景米白：`#FDF8F3` — 页面主背景
- 浅暖灰：`#F5EDE3` — 卡片、区块背景
- 文字主色：`#2D1B0E` — 正文深色
- 文字次色：`#7A5C44` — 副标题、说明文字
- 白色：`#FFFFFF`

Tailwind 自定义色名（在 tailwind.config.js 中注册）：
- `brand-orange: #E8622A`
- `brand-brown: #5C3317`
- `warm-bg: #FDF8F3`
- `warm-card: #F5EDE3`
- `text-main: #2D1B0E`
- `text-sub: #7A5C44`

## 字体
- 标题：思源宋体 / Noto Serif SC（Google Fonts），粗体
- 正文：思源黑体 / Noto Sans SC（Google Fonts），常规
- 英文备用：Inter

## 间距
- 区块上下 padding：`py-16` 至 `py-24`
- 卡片内边距：`p-6` 至 `p-8`
- 元素间距：`gap-6` 至 `gap-10`

## 圆角
- 卡片：`rounded-2xl`
- 按钮：`rounded-full`
- 图片：`rounded-xl`

## 阴影
- 卡片悬停：`shadow-lg`
- 默认卡片：`shadow-md`

## 排版规则
- 大标题：`text-4xl md:text-5xl font-bold text-brand-brown`
- 区块标题：`text-3xl font-bold text-brand-brown`
- 副标题：`text-lg text-text-sub`
- 正文：`text-base text-text-main leading-relaxed`

## 按钮样式
- 主按钮：`bg-brand-orange text-white rounded-full px-8 py-3 font-semibold hover:bg-orange-600 transition`
- 次按钮：`border-2 border-brand-orange text-brand-orange rounded-full px-8 py-3 font-semibold hover:bg-brand-orange hover:text-white transition`

## 禁止事项
- 不使用纯黑背景
- 不使用冷色调（蓝、紫、灰绿）
- 不使用小于 14px 的正文字体
- 不使用低对比度文字（如浅灰文字在白底上）
