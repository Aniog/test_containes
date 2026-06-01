# Quantum Dynamics — Design System

## Visual Identity
Light Mode aesthetic. Clean, scientific, precise.

## Colors
- Background: `#F9F9F9` (off-white) — `bg-[#F9F9F9]`
- Surface / Card: `#FFFFFF` — `bg-white`
- Surface Elevated: `#F0F2F5` — `bg-[#F0F2F5]`
- Slate Primary: `#334155` (slate-700) — `text-slate-700`
- Slate Dark: `#1E293B` (slate-800) — `text-slate-800`
- Slate Muted: `#64748B` (slate-500) — `text-slate-500`
- Accent Blue: `#2563EB` (blue-600) — `text-blue-600`
- Accent Cyan: `#0891B2` (cyan-600) — `text-cyan-600`
- Border: `#CBD5E1` (slate-300) — `border-slate-300`
- Blueprint Grid: `rgba(37, 99, 235, 0.07)` — custom CSS

## Typography
- Display / Headings: `'Playfair Display', serif` — elegant, high-contrast
- Body / UI: `'Inter', sans-serif` — clean, readable
- Mono / Technical: `'JetBrains Mono', monospace` — dashboard, code

### Scale
- xs: `text-xs` (12px)
- sm: `text-sm` (14px)
- base: `text-base` (16px)
- lg: `text-lg` (18px)
- xl: `text-xl` (20px)
- 2xl: `text-2xl` (24px)
- 3xl: `text-3xl` (30px)
- 4xl: `text-4xl` (36px)
- 5xl: `text-5xl` (48px)

## Blueprint Grid Background
Applied via CSS background-image with two sets of lines:
- Major grid: 80px spacing, `rgba(37,99,235,0.07)`
- Minor grid: 20px spacing, `rgba(37,99,235,0.04)`

## Spacing
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Radius
- Cards: `rounded-2xl border border-slate-200`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow`
- Elevated: `shadow-lg`

## Do's
- Use Playfair Display for all editorial headings
- Use Inter for all UI labels, nav, captions
- Use JetBrains Mono for all technical/dashboard text
- Maintain blueprint grid on all page backgrounds
- Use aspect-ratio boxes for all images to prevent layout shift
- High contrast text on all surfaces

## Don'ts
- No dark backgrounds (this is strictly light mode)
- No CSS-in-JS (use Tailwind + CSS custom properties only)
- No invisible text — always check contrast
- No fixed pixel widths — use responsive Tailwind classes
