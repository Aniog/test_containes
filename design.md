# 温思达电力装备有限公司 — 设计规范

## 品牌定位
工业电力装备制造商，专业、可靠、技术领先。视觉风格沉稳大气，体现高端制造业质感。

## 色彩系统

### 主色调
- 深海蓝（品牌主色）：`#0A1628`  → Tailwind: `bg-[#0A1628]`
- 电力蓝（强调色）：`#1565C0`    → Tailwind: `bg-[#1565C0]`
- 亮蓝（CTA/高亮）：`#2196F3`    → Tailwind: `bg-[#2196F3]`
- 电气橙（点缀色）：`#FF6D00`    → Tailwind: `text-[#FF6D00]`

### 中性色
- 深灰背景：`#0F1923`
- 卡片背景：`#162032`
- 边框线：`#1E3A5F`
- 正文白：`#E8EDF5`
- 次要文字：`#8BA3C1`

## 字体
- 标题：思源黑体 / Noto Sans SC，font-weight: 700/600
- 正文：Noto Sans SC，font-weight: 400
- 英文辅助：Inter

Google Fonts 引入：
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 间距
- 节间距：`py-20` (desktop) / `py-12` (mobile)
- 容器：`max-w-7xl mx-auto px-6 lg:px-8`
- 卡片内边距：`p-8`
- 元素间距：`gap-8` / `gap-6`

## 圆角
- 卡片：`rounded-xl`
- 按钮：`rounded-lg`
- 标签/徽章：`rounded-full`

## 阴影
- 卡片悬停：`shadow-2xl shadow-blue-900/30`
- 发光效果：`shadow-[0_0_30px_rgba(33,150,243,0.15)]`

## 按钮样式
- 主按钮：`bg-[#2196F3] hover:bg-[#1565C0] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300`
- 次按钮：`border border-[#2196F3] text-[#2196F3] hover:bg-[#2196F3] hover:text-white px-8 py-3 rounded-lg transition-all duration-300`

## 分隔线
- 使用渐变线：`border-t border-[#1E3A5F]`
- 装饰线：`w-16 h-1 bg-[#2196F3] rounded-full`

## 图标
- 使用 lucide-react，尺寸 `w-6 h-6` 或 `w-8 h-8`
- 图标容器：`bg-[#1565C0]/20 p-3 rounded-lg`

## 禁止事项
- 不使用纯白背景（工业感不足）
- 不使用圆润卡通风格图标
- 不使用低对比度文字（深色背景上必须用白/浅色文字）
- 不使用超过3种主色的混搭
