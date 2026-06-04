# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and bioluminescence.
Deep navy/black backgrounds with glowing teal, cyan, and violet accents.

## Color Palette
- Background primary: `#050d1a` (deep space navy) → Tailwind: `bg-[#050d1a]`
- Background secondary: `#0a1628` (dark navy) → Tailwind: `bg-[#0a1628]`
- Background card: `#0f1f38` (card navy) → Tailwind: `bg-[#0f1f38]`
- Accent teal: `#00d4c8` → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent cyan: `#38bdf8` → Tailwind: `text-sky-400`
- Accent violet: `#a78bfa` → Tailwind: `text-violet-400`
- Accent green: `#4ade80` → Tailwind: `text-green-400`
- Text primary: `#f0f9ff` → Tailwind: `text-slate-50`
- Text secondary: `#94a3b8` → Tailwind: `text-slate-400`
- Text muted: `#64748b` → Tailwind: `text-slate-500`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold or font-extrabold, tracking-tight
- Body: font-normal, leading-relaxed
- Labels/caps: text-xs uppercase tracking-widest font-semibold

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,200,0.25)]`
- Divider: `border-slate-800`

## Spacing
- Section padding: `py-20 px-4` or `py-24 px-6`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Components
- Primary button: `bg-[#00d4c8] text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-[#00bfb4] transition`
- Secondary button: `border border-[#00d4c8] text-[#00d4c8] px-6 py-3 rounded-full hover:bg-[#00d4c8]/10 transition`
- Card: `bg-[#0f1f38] border border-slate-700/50 rounded-2xl p-6 hover:border-[#00d4c8]/40 transition`
- Badge: `text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full`

## Do's
- Use dark backgrounds throughout
- Use glowing teal/cyan as primary accent
- Use subtle gradients for hero sections
- Use rounded-2xl or rounded-xl for cards
- Ensure all text is clearly readable on dark backgrounds

## Don'ts
- No white or light backgrounds
- No harsh color contrasts that feel clinical
- No small text on dark muted backgrounds without sufficient contrast
- No magic hex values outside this palette
