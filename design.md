# Design System — GameVault

## Visual Identity
Dark gaming aesthetic with vibrant neon accents. Inspired by modern gaming platforms.

## Colors
- Background primary: `#0a0a14` (deep dark navy)
- Background secondary: `#12121f` (card/surface)
- Background tertiary: `#1a1a2e` (elevated surface)
- Accent primary: `#7c3aed` (violet-600) — main brand color
- Accent secondary: `#06b6d4` (cyan-500) — highlights
- Accent hot: `#f97316` (orange-500) — deals/discounts
- Text primary: `#f1f5f9` (slate-100)
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Border: `#1e293b` (slate-800)
- Success: `#22c55e` (green-500)
- Danger: `#ef4444` (red-500)

## Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` accent
- Epic: `#2d2d2d` bg, `#ffffff` accent
- Nintendo: `#e4000f` accent
- PlayStation: `#003087` bg, `#00439c` accent
- Xbox: `#107c10` accent

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Body: font-normal, leading-relaxed
- Labels/badges: font-semibold, uppercase, tracking-wide, text-xs

## Spacing
- Section padding: `py-16 px-4` (desktop), `py-10 px-4` (mobile)
- Card padding: `p-4` or `p-6`
- Gap between cards: `gap-4` or `gap-6`

## Borders & Radius
- Cards: `rounded-xl` with `border border-slate-800`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Shadows & Effects
- Cards: `shadow-lg shadow-black/40`
- Hover: `hover:border-violet-500/50 transition-all duration-200`
- Glow effects on featured items: `shadow-violet-500/20`

## Components

### Cards
- Dark background `bg-[#12121f]`
- Border `border border-slate-800`
- Hover: lift + border glow
- Image top, content bottom

### Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white`
- Secondary: `bg-slate-800 hover:bg-slate-700 text-slate-100`
- Outline: `border border-violet-500 text-violet-400 hover:bg-violet-500/10`
- Danger/Deal: `bg-orange-500 hover:bg-orange-600 text-white`

### Badges / Platform Tags
- Steam: `bg-[#1b2838] text-[#66c0f4]`
- Epic: `bg-slate-700 text-white`
- Nintendo: `bg-red-600 text-white`
- PlayStation: `bg-blue-800 text-white`
- Xbox: `bg-green-700 text-white`
- News: `bg-violet-600/20 text-violet-400`
- Deal: `bg-orange-500/20 text-orange-400`

### Navigation
- Sticky top, `bg-[#0a0a14]/95 backdrop-blur`
- Logo: gradient text violet→cyan
- Links: `text-slate-300 hover:text-white`
- Active: `text-violet-400`

## Do's
- Use dark backgrounds consistently
- Use vibrant accents sparingly for emphasis
- Show platform badges on all game cards
- Use percentage discount badges in orange/red
- Use grid layouts for game cards (3-4 cols desktop, 1-2 mobile)

## Don'ts
- No light backgrounds on main content areas
- No low-contrast text (always check against dark bg)
- No plain white backgrounds
- Don't mix too many accent colors in one section
