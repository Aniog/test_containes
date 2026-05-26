# World Cup Merchandise Store — Design System

## Brand Identity
- **Theme**: FIFA World Cup 2026 — USA, Canada, Mexico
- **Tone**: Energetic, bold, celebratory, international

## Color Palette
- **Primary**: Deep Red `#C8102E` (FIFA red) — `bg-red-700`, `text-red-700`
- **Secondary**: Gold `#FFD700` — `bg-yellow-400`, `text-yellow-400`
- **Accent**: Dark Navy `#003087` — `bg-blue-900`, `text-blue-900`
- **Background**: Off-white `#F8F9FA` — `bg-gray-50`
- **Surface**: White `#FFFFFF` — `bg-white`
- **Dark Surface**: `#1A1A2E` — `bg-slate-900`
- **Text Primary**: `#1A1A2E` — `text-slate-900`
- **Text Secondary**: `#6B7280` — `text-gray-500`
- **Border**: `#E5E7EB` — `border-gray-200`
- **Success**: `#10B981` — `text-emerald-500`

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, tracking tight
  - H1: `text-4xl md:text-6xl font-extrabold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base font-normal text-slate-700`
- **Small/Caption**: `text-sm text-gray-500`
- **Price**: `text-2xl font-bold text-red-700`

## Spacing
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`
- Container max width: `max-w-7xl mx-auto`

## Components

### Buttons
- **Primary**: `bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Outline**: `border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-slate-700 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100`
- Product image: `aspect-square object-cover rounded-t-xl`
- Card body: `p-4`

### Badges
- **New**: `bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-1 rounded-full`
- **Sale**: `bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-full`
- **Hot**: `bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full`
- **Category**: `bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full`

### Navigation
- Sticky top nav: `bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm`
- Logo: `text-red-700 font-extrabold text-xl`
- Nav links: `text-slate-700 hover:text-red-700 font-medium transition-colors`

### Hero Section
- Full-width gradient: `bg-gradient-to-br from-slate-900 via-blue-900 to-red-900`
- Overlay text: `text-white`
- CTA button: Primary style

### Product Grid
- Desktop: `grid-cols-4`
- Tablet: `grid-cols-2 md:grid-cols-3`
- Mobile: `grid-cols-2`

## Do's
- Use bold, high-contrast text on dark backgrounds
- Use red and gold as primary accent colors throughout
- Add hover effects on all interactive elements
- Use rounded corners (`rounded-xl`, `rounded-lg`) for modern feel
- Use shadow for depth on cards
- Show country flags and team colors where relevant

## Don'ts
- Don't use light gray text on white backgrounds (low contrast)
- Don't use more than 3 colors in a single component
- Don't use flat, unstyled buttons
- Don't use serif fonts
- Don't use very small text (below `text-sm`) for important content
