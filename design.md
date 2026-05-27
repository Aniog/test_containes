# Design System - 清新简约 ToDo App

## 色彩方案 (清新清淡简洁)

### 主色调
- **主色**: `#7dd3fc` (天空蓝 - sky-300) - 清新的天空蓝
- **主色深**: `#0ea5e9` (天空蓝 - sky-500) - 用于按钮和重点元素
- **主色浅**: `#e0f2fe` (天空蓝 - sky-50) - 用于背景和卡片

### 辅助色彩
- **成功色**: `#86efac` (绿色 - green-300) - 完成状态
- **警告色**: `#fde047` (黄色 - yellow-300) - 中等优先级
- **危险色**: `#fca5a5` (红色 - red-300) - 高优先级
- **中性色**: `#e2e8f0` (石板灰 - slate-200) - 边框和分割线

### 文字色彩
- **主文字**: `#1e293b` (石板灰 - slate-800) - 深色文字
- **次要文字**: `#64748b` (石板灰 - slate-500) - 辅助信息
- **占位符**: `#94a3b8` (石板灰 - slate-400) - 输入框占位符

### 背景色彩
- **主背景**: `#f8fafc` (石板灰 - slate-50) - 页面背景
- **卡片背景**: `#ffffff` (白色) - 卡片和容器背景
- **悬停背景**: `#f1f5f9` (石板灰 - slate-100) - 悬停状态

## 设计原则

### 简约风格
- 使用大量留白
- 简洁的线条和形状
- 最小化的装饰元素
- 清晰的层次结构

### 排版
- 字体: Inter (已在 index.html 中引入)
- 标题: font-semibold, text-slate-800
- 正文: font-normal, text-slate-600
- 小字: text-sm, text-slate-500

### 间距
- 容器内边距: p-6, p-4
- 元素间距: space-y-4, gap-4
- 按钮内边距: px-4 py-2, px-6 py-3

### 圆角
- 卡片: rounded-xl (12px)
- 按钮: rounded-lg (8px)
- 输入框: rounded-md (6px)

### 阴影
- 卡片: shadow-sm
- 悬停: shadow-md
- 聚焦: shadow-lg

## 组件样式指南

### 按钮
- 主按钮: bg-sky-500 hover:bg-sky-600 text-white
- 次要按钮: bg-slate-100 hover:bg-slate-200 text-slate-700
- 危险按钮: bg-red-300 hover:bg-red-400 text-red-800

### 输入框
- 边框: border-slate-200 focus:border-sky-300
- 背景: bg-white
- 占位符: placeholder-slate-400

### 卡片
- 背景: bg-white
- 边框: border border-slate-100
- 阴影: shadow-sm

### 状态指示
- 完成: text-green-600, bg-green-100
- 进行中: text-sky-600, bg-sky-100
- 高优先级: text-red-600, bg-red-100
- 中优先级: text-yellow-600, bg-yellow-100
- 低优先级: text-slate-600, bg-slate-100