# 溪流谷机械智造有限公司 — 设计规范

## 品牌定位
工业制造 · 精密智造 · 专业可信

## 色彩系统
- 主色（深钢蓝）：`#0D2137` — 导航栏、深色背景区块
- 辅色（工业蓝）：`#1A5276` — 次级背景、卡片强调
- 强调色（橙金）：`#D4820A` — CTA 按钮、高亮数字、分隔线
- 浅灰背景：`#F4F6F8` — 交替区块背景
- 白色：`#FFFFFF` — 主内容区背景
- 正文深色：`#1C2B3A` — 主要文字
- 正文中灰：`#4A5568` — 次要文字、描述段落
- 边框灰：`#CBD5E0` — 卡片边框、分隔线

## 排版
- 标题字体：Noto Serif SC（衬线，体现专业感）
- 正文字体：Noto Sans SC（无衬线，清晰易读）
- 主标题（H1）：`text-5xl font-bold` 深钢蓝
- 区块标题（H2）：`text-3xl font-bold` 深钢蓝，下方橙金色短横线装饰
- 卡片标题（H3）：`text-xl font-semibold` 深钢蓝
- 正文：`text-base leading-relaxed` 中灰色
- 数字强调：`text-4xl font-bold` 橙金色

## 间距
- 区块上下内边距：`py-20`（桌面）/ `py-12`（移动）
- 内容最大宽度：`max-w-6xl mx-auto px-6`
- 卡片内边距：`p-8`
- 卡片间距：`gap-8`

## 组件风格
- 按钮（主要）：`bg-[#D4820A] text-white px-8 py-3 rounded font-semibold hover:bg-[#B8700A] transition`
- 按钮（次要）：`border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#0D2137] transition`
- 卡片：`bg-white rounded-lg shadow-md border border-[#CBD5E0] p-8`
- 区块标题装饰：标题下方 `w-16 h-1 bg-[#D4820A]`
- 导航：固定顶部，深钢蓝背景，白色文字

## 图片风格
- 工业机械、精密制造、自动化生产线、工厂车间
- 风格：专业、现代、高科技感

## Do's
- 使用深色背景配白色文字于 Hero 区块
- 数字统计使用橙金色强调
- 区块交替使用白色和浅灰背景
- 图标使用 Lucide React，保持线条风格统一

## Don'ts
- 不使用过于鲜艳的颜色
- 不使用圆角过大的卡片（最多 `rounded-lg`）
- 不在深色背景上使用深色文字
