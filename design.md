# Design System — 财富增长指南网站

## 品牌定位
高端财富教育平台，专业、可信、激励人心。深色金融风格，金色点缀，传递财富与成功感。

## 色彩系统
- 主背景: `#0a0e1a` (深海军蓝黑)
- 次背景: `#0f1629` (深蓝)
- 卡片背景: `#141c35` (深蓝卡片)
- 金色主色: `#f5c842` (金黄)
- 金色深色: `#d4a017` (深金)
- 金色浅色: `#fde68a` (浅金)
- 强调绿色: `#22c55e` (成功绿)
- 文字主色: `#f1f5f9` (近白)
- 文字次色: `#94a3b8` (灰蓝)
- 边框色: `#1e2d4a` (深蓝边框)

## Tailwind 颜色映射
在 tailwind.config.js 中扩展:
- `gold-400: #f5c842`
- `gold-500: #d4a017`
- `gold-200: #fde68a`
- `navy-900: #0a0e1a`
- `navy-800: #0f1629`
- `navy-700: #141c35`
- `navy-600: #1e2d4a`

## 排版
- 字体: Inter (Google Fonts)
- 标题: font-bold, tracking-tight
- 大标题: text-4xl md:text-6xl
- 副标题: text-xl md:text-2xl
- 正文: text-base, leading-relaxed
- 小字: text-sm, text-slate-400

## 间距
- 区块内边距: py-20 md:py-28
- 容器: max-w-6xl mx-auto px-4 md:px-8
- 卡片内边距: p-6 md:p-8
- 元素间距: gap-6 md:gap-8

## 组件风格
- 按钮主色: bg-gold-400 text-navy-900 font-bold, hover:bg-gold-500, rounded-full px-8 py-3
- 按钮次色: border border-gold-400 text-gold-400, hover:bg-gold-400/10, rounded-full
- 卡片: bg-navy-700 border border-navy-600 rounded-2xl shadow-xl
- 徽章: bg-gold-400/10 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full
- 分割线: border-navy-600

## 视觉效果
- 渐变标题: bg-gradient-to-r from-gold-200 to-gold-400 bg-clip-text text-transparent
- 卡片悬停: hover:border-gold-400/50 transition-all duration-300
- 光晕效果: 使用 shadow 和 ring 模拟金色光晕
- 背景装饰: 使用 radial-gradient 添加微妙光晕

## Do's
- 使用深色背景配金色文字/边框
- 数字统计用大字体金色展示
- 卡片使用微妙边框和阴影
- 图标使用 Lucide React

## Don'ts
- 不使用纯白背景
- 不使用低对比度文字
- 不使用过于鲜艳的颜色组合
- 不使用超过3种主色
