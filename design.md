# 听力健康专题网站 Design System

## Brand Identity
- **Theme**: 听力健康 (Hearing Health)
- **Tone**: Professional, warm, trustworthy, accessible
- **Target Audience**: General public, seniors, parents, healthcare seekers

## Color Palette
- **Primary**: Teal/Cyan — `#0891b2` (sky-600) — trust, health, calm
- **Primary Dark**: `#0e7490` (cyan-700)
- **Primary Light**: `#e0f2fe` (sky-100)
- **Accent**: Warm Orange — `#f97316` (orange-500) — energy, attention
- **Accent Light**: `#fff7ed` (orange-50)
- **Background**: `#f8fafc` (slate-50)
- **Surface**: `#ffffff` (white)
- **Text Primary**: `#0f172a` (slate-900)
- **Text Secondary**: `#475569` (slate-600)
- **Text Muted**: `#94a3b8` (slate-400)
- **Border**: `#e2e8f0` (slate-200)
- **Success**: `#16a34a` (green-600)
- **Warning**: `#d97706` (amber-600)

## Typography
- **Font Family**: Inter (Google Fonts)
- **Heading 1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
- **Heading 2**: `text-3xl md:text-4xl font-bold text-slate-900`
- **Heading 3**: `text-xl md:text-2xl font-semibold text-slate-800`
- **Body Large**: `text-lg text-slate-600 leading-relaxed`
- **Body**: `text-base text-slate-600 leading-relaxed`
- **Small/Caption**: `text-sm text-slate-500`
- **Label/Tag**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary**: `bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg`
- **Secondary**: `border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 font-semibold px-6 py-3 rounded-xl transition-all duration-200`
- **Ghost**: `text-cyan-600 hover:text-cyan-700 font-medium underline-offset-4 hover:underline`

### Cards
- Base: `bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200`
- Featured: `bg-white rounded-2xl shadow-lg border border-cyan-100`

### Navigation
- Background: `bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm`
- Links: `text-slate-600 hover:text-cyan-600 font-medium transition-colors`
- Active: `text-cyan-600 font-semibold`

### Badges/Tags
- Health tip: `bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full`
- Warning: `bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full`
- Success: `bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full`

## Section Styles
- **Hero**: Full-width gradient background `from-sky-50 via-cyan-50 to-teal-50`
- **Alternating sections**: White and `bg-slate-50`
- **CTA sections**: `bg-gradient-to-r from-cyan-600 to-teal-600 text-white`

## Do's
- Use rounded corners (`rounded-xl`, `rounded-2xl`) for a modern, friendly feel
- Use subtle shadows for depth
- Use icons alongside text for visual clarity
- Maintain generous whitespace between sections
- Use gradient backgrounds for hero and CTA sections

## Don'ts
- Don't use harsh red/black color combinations
- Don't use tiny font sizes (minimum 14px / text-sm for body)
- Don't use low-contrast text on colored backgrounds
- Don't crowd elements — always use adequate padding
