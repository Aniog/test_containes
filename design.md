# 梅露可家居用品有限公司 — 设计规范

## 品牌定位
温馨、自然、高品质的家居生活方式品牌。色调以暖米色、柔棕、深绿为主，营造家的温暖感。

## 颜色系统
- 主色（暖棕）：`#8B6F47` → Tailwind 自定义 `brand-brown`
- 辅色（深绿）：`#4A6741` → Tailwind 自定义 `brand-green`
- 强调色（金黄）：`#C9A84C` → Tailwind 自定义 `brand-gold`
- 背景米白：`#FAF7F2` → Tailwind 自定义 `brand-cream`
- 浅米色：`#F0EAE0` → Tailwind 自定义 `brand-beige`
- 深棕文字：`#3D2B1F` → Tailwind 自定义 `brand-dark`
- 中灰文字：`#7A6A5A` → Tailwind 自定义 `brand-muted`

## 字体
- 标题：思源宋体 / Noto Serif SC（衬线，优雅）
- 正文：思源黑体 / Noto Sans SC（无衬线，清晰）
- Google Fonts embed in index.html

## 排版
- 大标题：`text-4xl md:text-6xl font-serif font-bold text-brand-dark`
- 副标题：`text-xl md:text-2xl font-serif text-brand-brown`
- 正文：`text-base text-brand-muted leading-relaxed`
- 小标签：`text-sm font-medium tracking-widest uppercase text-brand-gold`

## 间距
- 节间距：`py-20 md:py-28`
- 卡片内边距：`p-6 md:p-8`
- 元素间距：`gap-6 md:gap-10`

## 圆角与阴影
- 卡片：`rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- 按钮：`rounded-full`
- 图片：`rounded-xl`

## 按钮样式
- 主按钮：`bg-brand-brown text-white px-8 py-3 rounded-full hover:bg-brand-dark transition-colors font-medium`
- 次按钮：`border-2 border-brand-brown text-brand-brown px-8 py-3 rounded-full hover:bg-brand-brown hover:text-white transition-colors`

## 导航
- 背景：`bg-brand-cream/95 backdrop-blur-sm`
- 固定顶部，滚动时加阴影

## 禁止事项
- 不使用纯黑背景
- 不使用高饱和度荧光色
- 不使用小于 14px 的正文字体
- 不使用低对比度文字（如浅灰色文字在白色背景上）
