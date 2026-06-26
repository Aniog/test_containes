# FIFA World Cup 2026 Website Design System

## Brand Identity
World Cup 2026 — hosted by USA, Canada & Mexico. Theme: bold, energetic, modern.

## Color Palette
- Primary background: `#0a0e1a` (deep navy black)
- Secondary background: `#111827` (dark navy)
- Card background: `#1a2235` (dark blue-gray)
- Border: `#2a3550` (muted blue border)
- Gold accent: `#f5c518` (FIFA gold) — Tailwind: use `[#f5c518]`
- Green accent: `#22c55e` (grass green) — Tailwind: `green-500`
- Red accent: `#ef4444` — Tailwind: `red-500`
- Text primary: `#f1f5f9` — Tailwind: `slate-100`
- Text secondary: `#94a3b8` — Tailwind: `slate-400`
- Text muted: `#64748b` — Tailwind: `slate-500`

## Typography
- Font: Inter (Google Fonts)
- Hero title: `text-5xl md:text-7xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-sm text-slate-400`
- Label/badge: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Components

### Cards
- Background: `bg-[#1a2235]`
- Border: `border border-[#2a3550]`
- Radius: `rounded-2xl`
- Hover: `hover:border-[#f5c518]/40 transition-all duration-200`

### Buttons
- Primary: `bg-[#f5c518] text-[#0a0e1a] font-bold rounded-xl px-6 py-3 hover:bg-yellow-400`
- Secondary: `border border-[#2a3550] text-slate-300 rounded-xl px-6 py-3 hover:border-[#f5c518]/50`

### Badges
- Live: `bg-red-500/20 text-red-400 border border-red-500/30`
- Finished: `bg-slate-700/50 text-slate-400`
- Upcoming: `bg-blue-500/20 text-blue-400 border border-blue-500/30`
- Group stage: `bg-[#f5c518]/10 text-[#f5c518]`

### Navigation
- Background: `bg-[#0a0e1a]/95 backdrop-blur-md`
- Border bottom: `border-b border-[#2a3550]`
- Active link: `text-[#f5c518]`
- Inactive link: `text-slate-400 hover:text-white`

## Do's
- Use gold (#f5c518) for highlights, scores, and key stats
- Use dark backgrounds throughout for a premium feel
- Use subtle gradients on hero sections
- Use flag emojis for team representation
- Keep cards consistent with rounded-2xl and dark bg

## Don'ts
- Don't use white backgrounds
- Don't use light mode styles
- Don't use more than 2 accent colors per section
- Don't use small font sizes below text-xs
