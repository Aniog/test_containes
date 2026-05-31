# Fantasy Kingdoms — Design System

## Theme
Arcane midnight aesthetic. Deep purple-blacks, vibrant warm gold, and emerald accents. Rich, immersive, and regal — inspired by high fantasy and arcane strategy games.

## Colors
- Background primary: `#09080e` (near-black purple) — `bg-[#09080e]`
- Background secondary: `#100e1a` (very dark purple) — `bg-[#100e1a]`
- Card surface: `#181230` (dark purple) — `bg-[#181230]`
- Card border: `#2e2650` (medium purple) — `border-[#2e2650]`
- Accent gold: `#f0b830` (bright warm gold) — `text-[#f0b830]`, `border-[#f0b830]`
- Accent gold light: `#ffd060` — `text-[#ffd060]`
- Accent purple: `#8b5cf6` (vibrant violet) — `text-[#8b5cf6]`
- Accent purple light: `#b48af8` — `text-[#b48af8]`
- Text primary: `#f0ecff` (cool white with purple tint) — `text-[#f0ecff]`
- Text secondary: `#9890b8` (muted purple-grey) — `text-[#9890b8]`
- Text muted: `#5a5278` (dark purple-grey) — `text-[#5a5278]`
- Success green: `#34d399` (emerald) — `text-[#34d399]`
- Danger red: `#f04040` (bright crimson) — `text-[#f04040]`
- Warning amber: `#f09030` (amber) — `text-[#f09030]`

## Typography
- Font: Inter (system fallback)
- Headings: font-bold, tracking-wide, text-[#f0ecff]
- Section titles: text-[#f0b830] font-semibold uppercase tracking-widest text-xs
- Body: text-[#f0ecff] text-sm
- Muted: text-[#9890b8] text-sm

## Borders & Radius
- Cards: `rounded-xl border border-[#2e2650]`
- Buttons: `rounded-lg`
- Inputs: `rounded-lg border border-[#2e2650] bg-[#09080e]`

## Spacing
- Section padding: `p-6`
- Card padding: `p-5`
- Gap between cards: `gap-4` or `gap-6`

## Buttons
- Primary: `bg-[#f0b830] text-[#09080e] font-semibold hover:bg-[#ffd060]`
- Secondary: `bg-[#181230] border border-[#2e2650] text-[#f0ecff] hover:border-[#f0b830]`
- Danger: `bg-[#f04040] text-white hover:bg-red-600`
- Ghost: `text-[#9890b8] hover:text-[#f0ecff]`

## Navigation
- Sidebar: `bg-[#09080e] border-r border-[#2e2650]`
- Active nav item: `bg-[#181230] text-[#f0b830] border-l-2 border-[#f0b830]`
- Inactive nav item: `text-[#9890b8] hover:text-[#f0ecff] hover:bg-[#100e1a]`

## Do's
- Use gold accents for important values, titles, and CTAs
- Use deep purple card surfaces with subtle borders
- Use icons alongside labels for navigation
- Show stat cards with colored icons
- Use progress bars for resource/power levels

## Don'ts
- No white backgrounds
- No light mode styles
- No flat/minimal design — use depth and layering
- No bright neon colors
