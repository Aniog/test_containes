# 香港中文大学内地生校友网站设计规范

## 视觉风格

### 色彩方案
- 主色调：深蓝色 (#1e3a8a) - 代表学术严谨和专业性
- 辅助色：金黄色 (#f59e0b) - 代表荣誉和成就
- 背景色：浅灰色 (#f8fafc) - 保持页面清洁
- 文字色：深灰色 (#1f2937) - 确保可读性
- 成功色：绿色 (#10b981) - 用于成功状态
- 警告色：橙色 (#f59e0b) - 用于警告信息
- 错误色：红色 (#ef4444) - 用于错误状态

### 字体
- 主字体：Inter, system-ui, sans-serif
- 标题字体：Inter, 字重 600-700
- 正文字体：Inter, 字重 400-500
- 小字体：Inter, 字重 300-400

### 间距
- 基础间距单位：4px (Tailwind的spacing-1)
- 组件内边距：16px (p-4)
- 组件间距：24px (gap-6)
- 页面边距：32px (px-8)
- 卡片内边距：24px (p-6)

### 边框和阴影
- 边框圆角：8px (rounded-lg)
- 卡片阴影：shadow-md
- 悬停阴影：shadow-lg
- 边框颜色：border-gray-200

### 按钮样式
- 主按钮：bg-blue-600 hover:bg-blue-700 text-white
- 次要按钮：bg-gray-100 hover:bg-gray-200 text-gray-900
- 危险按钮：bg-red-600 hover:bg-red-700 text-white
- 按钮圆角：rounded-md
- 按钮内边距：px-4 py-2

### 表单样式
- 输入框：border-gray-300 focus:border-blue-500 focus:ring-blue-500
- 标签：text-sm font-medium text-gray-700
- 错误信息：text-red-600 text-sm

### 卡片样式
- 背景：bg-white
- 边框：border border-gray-200
- 圆角：rounded-lg
- 阴影：shadow-md

## 响应式设计
- 移动端优先设计
- 断点：sm (640px), md (768px), lg (1024px), xl (1280px)
- 移动端：单列布局
- 平板端：双列布局
- 桌面端：多列布局

## 组件规范
- 使用 shadcn/ui 组件库
- 保持组件一致性
- 确保无障碍访问
- 支持深色模式（可选）

## 禁止事项
- 不使用硬编码的十六进制颜色值
- 不使用固定像素值，使用 Tailwind 类
- 不使用过于复杂的动画
- 确保文字与背景对比度足够