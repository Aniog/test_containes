# 牙齿健康防护专题网站 - 设计规范

## 品牌定位
清新、专业、可信赖的牙齿健康防护网站，面向关注口腔健康的大众用户。

## 色彩系统

### 主色调
- 主蓝色（信任/专业）: `#1E88E5` → Tailwind: `blue-600`
- 浅蓝色（背景/辅助）: `#E3F2FD` → Tailwind: `blue-50`
- 薄荷绿（清新/健康）: `#00BFA5` → Tailwind: `teal-500`
- 浅绿色（背景）: `#E0F2F1` → Tailwind: `teal-50`

### 中性色
- 深灰文字: `#1A1A2E` → Tailwind: `gray-900`
- 中灰文字: `#4A5568` → Tailwind: `gray-600`
- 浅灰背景: `#F7FAFC` → Tailwind: `gray-50`
- 白色: `#FFFFFF` → Tailwind: `white`

### 强调色
- 橙色（警示/提示）: `#FF7043` → Tailwind: `orange-500`
- 黄色（亮点）: `#FFD54F` → Tailwind: `yellow-300`

## 排版

### 字体
- 标题: `font-bold` 或 `font-extrabold`
- 正文: `font-normal`
- 辅助文字: `font-medium`

### 字号层级
- 超大标题 (Hero): `text-4xl md:text-6xl`
- 大标题 (Section): `text-3xl md:text-4xl`
- 中标题 (Card): `text-xl md:text-2xl`
- 正文: `text-base` (16px)
- 辅助文字: `text-sm` (14px)

## 间距
- 区块间距: `py-16 md:py-24`
- 卡片内边距: `p-6 md:p-8`
- 元素间距: `gap-6 md:gap-8`

## 圆角
- 卡片: `rounded-2xl`
- 按钮: `rounded-full`
- 图标容器: `rounded-xl`

## 阴影
- 卡片阴影: `shadow-md hover:shadow-xl`
- 导航阴影: `shadow-sm`

## 组件风格

### 按钮
- 主按钮: `bg-blue-600 text-white rounded-full px-8 py-3 font-semibold hover:bg-blue-700 transition`
- 次按钮: `border-2 border-blue-600 text-blue-600 rounded-full px-8 py-3 font-semibold hover:bg-blue-50 transition`

### 卡片
- 背景: `bg-white rounded-2xl shadow-md p-6`
- 悬停: `hover:shadow-xl transition-shadow duration-300`

### 图标容器
- 蓝色: `bg-blue-100 text-blue-600 rounded-xl p-3`
- 绿色: `bg-teal-100 text-teal-600 rounded-xl p-3`

## 禁止事项
- 不使用纯黑色背景
- 不使用低对比度文字（如浅灰色文字在白色背景上）
- 不使用超过3种主色调
- 不使用超过16px的圆角（除了按钮和圆形元素）
