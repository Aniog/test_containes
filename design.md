# The Time Traveler's Archive — Design System

## Visual Identity
A premium, atmospheric experience blending futuristic museum, vintage library, and classified government database aesthetics.

## Color Palette
- Background primary: `#050810` (deep space black)
- Background secondary: `#0a0f1e` (dark navy)
- Background tertiary: `#0d1428` (midnight blue)
- Surface glass: `rgba(255,255,255,0.04)` with `backdrop-blur`
- Accent primary: `#00d4ff` (electric cyan) — `text-cyan-400`, `border-cyan-400`
- Accent secondary: `#7c3aed` (temporal violet) — `text-violet-500`, `border-violet-500`
- Accent gold: `#f59e0b` (archive amber) — `text-amber-400`
- Accent danger: `#ef4444` (paradox red) — `text-red-500`
- Accent success: `#10b981` (stable green) — `text-emerald-400`
- Text primary: `#e2e8f0` — `text-slate-200`
- Text secondary: `#94a3b8` — `text-slate-400`
- Text muted: `#475569` — `text-slate-600`
- Border subtle: `rgba(0,212,255,0.15)` — `border-cyan-400/15`
- Glow cyan: `shadow-[0_0_20px_rgba(0,212,255,0.3)]`
- Glow violet: `shadow-[0_0_20px_rgba(124,58,237,0.3)]`

## Typography
- Display font: "Cinzel" (Google Fonts) — headings, titles, logo
- Body font: "Inter" — body text, UI elements
- Mono font: "JetBrains Mono" — metadata, codes, classifications
- Display sizes: `text-5xl` to `text-8xl` with `font-cinzel`
- Section headings: `text-2xl` to `text-4xl` with `font-cinzel tracking-widest`
- Body: `text-sm` to `text-base` with `font-inter`
- Metadata: `text-xs font-mono tracking-wider uppercase`

## Glassmorphism Panels
```
bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-xl
```
Hover state: `hover:bg-white/[0.07] hover:border-cyan-400/30`

## Borders & Dividers
- Default: `border-white/10`
- Accent: `border-cyan-400/20`
- Danger: `border-red-500/30`
- Gold: `border-amber-400/20`

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Animations
- Entrance: fade-in + slide-up, 0.4s ease-out
- Hover transitions: `transition-all duration-300`
- Glow pulse: keyframe animation on accent borders
- Particle drift: slow upward float, 8-15s loop
- Timeline scan: horizontal sweep, 4s loop

## Clearance Level Colors
- Observer: `text-slate-400` / `border-slate-500`
- Researcher: `text-cyan-400` / `border-cyan-400`
- Chronologist: `text-violet-400` / `border-violet-400`
- Admin: `text-amber-400` / `border-amber-400`

## Timeline Risk Indicators
- Stable (0-30): `text-emerald-400` green
- Moderate (31-60): `text-amber-400` amber
- Unstable (61-85): `text-orange-400` orange
- Critical (86-100): `text-red-500` red with pulse

## Do's
- Use glassmorphism for all cards and panels
- Layer multiple translucent backgrounds for depth
- Use glow effects on interactive elements
- Animate borders with subtle pulse on hover
- Use monospace font for all technical metadata
- Maintain dark backgrounds throughout

## Don'ts
- No white or light backgrounds
- No flat, non-glowing buttons
- No sans-serif for headings (use Cinzel)
- No high-saturation colors except accents
- No sharp corners on cards (always rounded-xl or rounded-2xl)
