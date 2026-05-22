# Design System — FIFA World Cup 2026

## Theme
Dark, bold, energetic sports theme. Inspired by the official World Cup 2026 branding.
Primary palette: deep navy/black backgrounds with vibrant red, gold, and white accents.

## Colors (Tailwind config names)
- Background primary: `#0a0e1a` (deep navy black) → `bg-[#0a0e1a]`
- Background secondary: `#111827` (dark gray-blue) → `bg-gray-900`
- Background card: `#1a2035` → `bg-[#1a2035]`
- Accent red: `#e63946` → `text-red-500` / `bg-red-500`
- Accent gold: `#f4a261` → `text-amber-400` / `bg-amber-400`
- Accent blue: `#4361ee` → `text-blue-500`
- Text primary: `#ffffff` → `text-white`
- Text secondary: `#94a3b8` → `text-slate-400`
- Border: `#2d3748` → `border-gray-700`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight text-white`
- Section heading: `text-3xl md:text-4xl font-bold text-white`
- Card title: `text-xl font-semibold text-white`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-gray-700/50 rounded-2xl`
- Card shadow: `shadow-xl shadow-black/30`
- Hover effect: `hover:border-amber-400/50 transition-all duration-300`
- Gradient borders: use `bg-gradient-to-r from-red-500 via-amber-400 to-blue-500`

## Buttons
- Primary: `bg-gradient-to-r from-red-500 to-amber-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition`
- Secondary: `border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition`

## Do's
- Use gradient text for hero headings: `bg-gradient-to-r from-red-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent`
- Use glassmorphism for cards: `bg-white/5 backdrop-blur-sm border border-white/10`
- Use subtle grid/pattern backgrounds for sections
- Animate numbers and stats with visual emphasis

## Don'ts
- Don't use light backgrounds for main sections
- Don't use low-contrast text on dark backgrounds
- Don't use more than 3 accent colors in one component
- Don't use default browser button styles
