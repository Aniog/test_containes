# 台风专题网站 Design System

## 主题风格
深色系、科技感、大气磅礴，以深蓝色和青色为主色调，营造台风的力量感与神秘感。

## 颜色系统

### 主色调
- 深海蓝（背景主色）: `#0a0f1e` — `bg-[#0a0f1e]`
- 深蓝（卡片背景）: `#0d1b2a` — `bg-[#0d1b2a]`
- 中蓝（次级背景）: `#112240` — `bg-[#112240]`
- 青蓝（强调色）: `#00b4d8` — `text-[#00b4d8]` / `border-[#00b4d8]`
- 亮青（高亮/CTA）: `#48cae4` — `text-[#48cae4]`
- 深青（悬停）: `#0096c7` — `hover:text-[#0096c7]`

### 台风等级颜色
- 热带低压（TD）: `#90e0ef` — 浅蓝
- 热带风暴（TS）: `#48cae4` — 青色
- 强热带风暴（STS）: `#00b4d8` — 中青
- 台风（TY）: `#f4a261` — 橙色
- 强台风（STY）: `#e76f51` — 深橙
- 超强台风（SuperTY）: `#e63946` — 红色

### 文字颜色
- 主文字: `text-white`
- 次级文字: `text-slate-300`
- 辅助文字: `text-slate-400`
- 强调文字: `text-[#48cae4]`

## 排版

### 字体
- 标题: Inter, 系统字体
- 正文: Inter, 系统字体
- 数字/数据: 等宽字体 `font-mono`

### 字号
- 超大标题: `text-5xl md:text-7xl font-black`
- 大标题: `text-3xl md:text-4xl font-bold`
- 中标题: `text-xl md:text-2xl font-semibold`
- 小标题: `text-lg font-semibold`
- 正文: `text-base`
- 辅助: `text-sm`

## 间距
- 页面内边距: `px-4 md:px-8 lg:px-16`
- 区块间距: `py-16 md:py-24`
- 卡片内边距: `p-6 md:p-8`
- 元素间距: `gap-4 md:gap-6 lg:gap-8`

## 边框与圆角
- 卡片圆角: `rounded-2xl`
- 按钮圆角: `rounded-full` 或 `rounded-xl`
- 边框颜色: `border-[#00b4d8]/30` 或 `border-slate-700`

## 阴影与光效
- 卡片阴影: `shadow-lg shadow-[#00b4d8]/10`
- 发光效果: `drop-shadow-[0_0_20px_rgba(0,180,216,0.4)]`
- 渐变背景: `bg-gradient-to-br from-[#0a0f1e] to-[#112240]`

## 组件规范

### 导航栏
- 固定顶部，半透明背景 `bg-[#0a0f1e]/90 backdrop-blur-md`
- 高度: `h-16`
- Logo 使用台风图标 + 文字

### 卡片
- 背景: `bg-[#0d1b2a]`
- 边框: `border border-[#00b4d8]/20`
- 悬停: `hover:border-[#00b4d8]/60 hover:shadow-lg hover:shadow-[#00b4d8]/20`
- 过渡: `transition-all duration-300`

### 按钮
- 主按钮: `bg-[#00b4d8] hover:bg-[#0096c7] text-white font-semibold px-6 py-3 rounded-full`
- 次级按钮: `border border-[#00b4d8] text-[#00b4d8] hover:bg-[#00b4d8]/10 px-6 py-3 rounded-full`

### 分隔线
- `border-t border-slate-700/50`

## 动效
- 过渡时间: `duration-300`
- 悬停缩放: `hover:scale-105`
- 渐入动画: 使用 CSS animation

## 禁止事项
- 不使用纯白色背景
- 不使用低对比度文字（如深色背景上的深色文字）
- 不使用过于鲜艳的颜色（保持深色系统一性）
- 不使用超过3种主色调
