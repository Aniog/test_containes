# FIFA World Cup 2026 – Design System

## Theme
Sports / World Cup 2026 (USA · Canada · Mexico). Bold, energetic, international.

## Color Palette
- **Primary Red**: `#C8102E` (FIFA red / USA flag red) → Tailwind custom: `wc-red`
- **Primary Blue**: `#003DA5` (deep navy) → `wc-blue`
- **Gold / Accent**: `#FFD700` (trophy gold) → `wc-gold`
- **Dark BG**: `#0A0E1A` (near-black navy) → `wc-dark`
- **Surface**: `#111827` (gray-900 equivalent) → use `gray-900`
- **Card BG**: `#1F2937` (gray-800) → use `gray-800`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#9CA3AF` (gray-400)
- **Border**: `#374151` (gray-700)

## Typography
- **Font**: "Bebas Neue" for headings (bold, condensed, sporty), "Inter" for body
- **H1**: Bebas Neue, 5xl–8xl, tracking-wide, uppercase
- **H2**: Bebas Neue, 3xl–5xl, tracking-wide
- **H3**: Inter semibold, xl–2xl
- **Body**: Inter, base–lg, text-gray-300
- **Label/Badge**: Inter, xs–sm, uppercase, tracking-widest

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Cards: `rounded-xl border border-gray-700`
- Glow effect on accent elements: `shadow-[0_0_30px_rgba(255,215,0,0.3)]`
- Gradient borders: use `bg-gradient-to-r from-wc-red via-wc-gold to-wc-blue`

## Buttons
- Primary: `bg-wc-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest`
- Secondary: `border-2 border-wc-gold text-wc-gold hover:bg-wc-gold hover:text-black py-3 px-8 rounded-full uppercase tracking-widest`

## Do's
- Use dark backgrounds with bright accent colors for contrast
- Use gradient text for hero headings (red → gold → blue)
- Use flag emoji or SVG flags for country identification
- Animate counters and stats for engagement
- Use grid layouts for match cards and team cards

## Don'ts
- Don't use light backgrounds for main sections
- Don't use low-contrast text on dark surfaces
- Don't use serif fonts for headings
- Don't crowd cards — maintain generous spacing
