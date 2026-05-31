# Design System — VirtuStar AI Celebrity Platform

## Brand Identity
Dark, futuristic, premium. The platform feels like a high-end creative studio meets AI lab.

## Color Palette
- Background: `#0a0a0f` (near-black with blue tint) — `bg-[#0a0a0f]`
- Surface: `#12121a` — `bg-[#12121a]`
- Card: `#1a1a2e` — `bg-[#1a1a2e]`
- Border: `#2a2a3e` — `border-[#2a2a3e]`
- Primary: `#7c3aed` (violet-600) — `bg-violet-600`
- Primary hover: `#6d28d9` — `hover:bg-violet-700`
- Accent: `#06b6d4` (cyan-500) — `text-cyan-400`
- Gradient: `from-violet-600 to-cyan-500`
- Text primary: `#f1f5f9` — `text-slate-100`
- Text secondary: `#94a3b8` — `text-slate-400`
- Text muted: `#475569` — `text-slate-600`
- Success: `#10b981` — `text-emerald-400`
- Warning: `#f59e0b` — `text-amber-400`
- Danger: `#ef4444` — `text-red-400`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold tracking-tight text-slate-100`
- H1: `text-4xl font-bold`
- H2: `text-2xl font-bold`
- H3: `text-lg font-semibold`
- Body: `text-sm text-slate-300`
- Muted: `text-xs text-slate-500`
- Labels: `text-xs font-medium text-slate-400 uppercase tracking-wider`

## Borders & Radius
- Default radius: `rounded-xl`
- Cards: `rounded-2xl`
- Buttons: `rounded-lg`
- Inputs: `rounded-lg`
- Border color: `border border-[#2a2a3e]`

## Spacing
- Section padding: `p-6` or `p-8`
- Card padding: `p-5` or `p-6`
- Gap between cards: `gap-4` or `gap-6`
- Form field gap: `space-y-4`

## Shadows & Glow
- Card shadow: `shadow-lg shadow-black/40`
- Glow effect: `shadow-violet-500/20`
- Hover glow: `hover:shadow-violet-500/30`

## Components

### Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-lg transition-all`
- Secondary: `bg-[#1a1a2e] hover:bg-[#2a2a3e] text-slate-200 border border-[#2a2a3e] px-4 py-2 rounded-lg`
- Ghost: `hover:bg-[#1a1a2e] text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg`
- Gradient: `bg-gradient-to-r from-violet-600 to-cyan-500 text-white`

### Cards
- Base: `bg-[#1a1a2e] border border-[#2a2a3e] rounded-2xl p-6 shadow-lg shadow-black/40`
- Hover: `hover:border-violet-500/50 hover:shadow-violet-500/10 transition-all`

### Inputs
- Base: `bg-[#12121a] border border-[#2a2a3e] text-slate-100 placeholder:text-slate-600 rounded-lg px-3 py-2 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none`

### Badges
- Default: `bg-[#2a2a3e] text-slate-300 text-xs px-2 py-0.5 rounded-full`
- Active: `bg-violet-600/20 text-violet-300 border border-violet-500/30`
- Success: `bg-emerald-500/20 text-emerald-300 border border-emerald-500/30`

## Do's
- Always use dark backgrounds with light text
- Use violet as the primary action color
- Use cyan as accent/highlight
- Add subtle gradients to hero sections and key CTAs
- Use `transition-all` on interactive elements

## Don'ts
- Never use white backgrounds
- Never use black text on dark surfaces
- Avoid flat, colorless UI — always add subtle glow or gradient accents
- Don't use more than 2 accent colors per section
