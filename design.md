# 维纯家居用品有限公司 — 设计规范

## 品牌定位
温馨、自然、品质生活。以暖色调为主，传递家的温度与舒适感。

## 色彩系统
- 主色（暖棕）：`#8B6F47` — `bg-[#8B6F47]` / `text-[#8B6F47]`
- 辅色（米白）：`#F5F0E8` — `bg-[#F5F0E8]`
- 强调色（赤陶橙）：`#C4714A` — `text-[#C4714A]`
- 深色文字：`#2C1810` — `text-[#2C1810]`
- 中性灰文字：`#6B5B4E` — `text-[#6B5B4E]`
- 浅背景：`#FDFAF5` — `bg-[#FDFAF5]`
- 白色：`#FFFFFF`

## 字体
- 标题：`font-serif`（衬线字体，优雅感）
- 正文：`font-sans`（无衬线，清晰易读）
- 全局字体引入：Noto Serif SC + Noto Sans SC（Google Fonts）

## 排版
- 大标题：`text-4xl md:text-5xl lg:text-6xl font-serif font-bold`
- 小标题：`text-2xl md:text-3xl font-serif font-semibold`
- 正文：`text-base md:text-lg leading-relaxed`
- 辅助文字：`text-sm text-[#6B5B4E]`

## 间距
- 区块内边距：`py-16 md:py-24 px-4 md:px-8`
- 卡片内边距：`p-6 md:p-8`
- 元素间距：`gap-6 md:gap-8`

## 圆角
- 卡片：`rounded-2xl`
- 按钮：`rounded-full`
- 图片：`rounded-xl`

## 阴影
- 卡片悬停：`shadow-lg hover:shadow-xl transition-shadow`
- 导航栏：`shadow-sm`

## 按钮样式
- 主按钮：`bg-[#8B6F47] text-white rounded-full px-8 py-3 hover:bg-[#C4714A] transition-colors`
- 次按钮：`border-2 border-[#8B6F47] text-[#8B6F47] rounded-full px-8 py-3 hover:bg-[#8B6F47] hover:text-white transition-colors`

## 导航栏
- 背景：`bg-white/95 backdrop-blur-sm`
- 固定顶部：`sticky top-0 z-50`
- 高度：`h-16 md:h-20`

## 图片风格
- 家居产品实物图、温馨家庭生活场景
- 比例：产品卡片 4x3，Hero 16x9，人物场景 3x2

## 禁止事项
- 不使用冷色调（蓝、紫、灰绿）作为主色
- 不使用深色背景（除 Footer 外）
- 不使用过于尖锐的直角（统一使用圆角）
- 不使用低对比度文字颜色
