# CUHK 内地生校友会 设计系统

## 品牌色彩
- 主色（中大紫）: `#4E2A84` → Tailwind: `purple-900` / 自定义 `cuhk-purple`
- 辅色（中大金）: `#C8A951` → Tailwind: 自定义 `cuhk-gold`
- 深紫: `#3B1F63` → `cuhk-purple-dark`
- 浅紫背景: `#F5F0FF` → `cuhk-purple-light`
- 文字主色: `#1A1A2E` → `gray-900`
- 文字次色: `#6B7280` → `gray-500`
- 背景色: `#FAFAFA` → `gray-50`
- 白色: `#FFFFFF`

## 排版
- 字体: Inter (正文), 系统字体栈
- 标题: `font-bold text-gray-900`
- 正文: `text-gray-700 leading-relaxed`
- 小字: `text-sm text-gray-500`

## 组件风格
- 卡片: `bg-white rounded-2xl shadow-sm border border-gray-100 p-6`
- 主按钮: `bg-cuhk-purple text-white rounded-lg px-6 py-2.5 font-medium hover:bg-cuhk-purple-dark`
- 次按钮: `border border-cuhk-purple text-cuhk-purple rounded-lg px-6 py-2.5 font-medium hover:bg-cuhk-purple-light`
- 金色按钮: `bg-cuhk-gold text-white rounded-lg px-6 py-2.5 font-medium`
- 输入框: `border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-cuhk-purple focus:border-transparent`
- 徽章-绿: `bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium`
- 徽章-黄: `bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-xs font-medium`
- 徽章-红: `bg-red-100 text-red-700 rounded-full px-3 py-1 text-xs font-medium`
- 徽章-紫: `bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-xs font-medium`

## 导航
- 顶部导航: `bg-cuhk-purple text-white shadow-lg`
- 导航链接: `text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg`

## 间距
- 页面内边距: `px-4 md:px-8 lg:px-16`
- 区块间距: `py-12 md:py-16`
- 卡片间距: `gap-6`

## 禁止
- 不使用纯黑背景上的白色小字（对比度不足）
- 不使用灰色背景上的浅灰文字
- 不在紫色背景上使用深色文字
