# MicroCosmos Design System

## Concept
A dark, immersive science website exploring the microscopic world. Deep navy/teal backgrounds with bioluminescent accent colors evoke the feeling of peering through a microscope into an alien, glowing world.

## Color Palette

### Backgrounds
- Primary background: `bg-slate-950` (#020617) — near-black deep space
- Secondary background: `bg-slate-900` (#0f172a) — dark navy
- Card background: `bg-slate-800/60` — semi-transparent dark card
- Surface: `bg-slate-800` (#1e293b)

### Accent Colors (Bioluminescent)
- Teal primary: `text-teal-400` / `bg-teal-400` (#2dd4bf) — main brand accent
- Teal glow: `text-teal-300` (#5eead4) — highlights
- Cyan secondary: `text-cyan-400` (#22d3ee) — secondary accent
- Emerald: `text-emerald-400` (#34d399) — success / nature
- Purple: `text-purple-400` (#c084fc) — science / discovery

### Text
- Primary text: `text-slate-100` (#f1f5f9) — near-white
- Secondary text: `text-slate-300` (#cbd5e1) — muted body
- Muted text: `text-slate-400` (#94a3b8) — captions, labels
- Accent text: `text-teal-400` — links, highlights

### Borders
- Default border: `border-slate-700` (#334155)
- Accent border: `border-teal-500/30`

## Typography

### Font Family
- Headings: `font-['Space_Grotesk']` — geometric, scientific feel
- Body: `font-['Inter']` — clean, readable

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base` (16px)
- Small/caption: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Components

### Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-all`
- Secondary/outline: `border border-teal-500/50 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full transition-all`

### Cards
- Base: `bg-slate-800/60 border border-slate-700 rounded-2xl p-6 backdrop-blur-sm`
- Hover: `hover:border-teal-500/50 hover:bg-slate-800/80 transition-all`

### Badges
- `bg-teal-500/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full border border-teal-500/30`

### Navigation
- Background: `bg-slate-950/90 backdrop-blur-md border-b border-slate-800`
- Links: `text-slate-300 hover:text-teal-400 transition-colors`
- Active: `text-teal-400`

## Visual Effects
- Glow effects: `shadow-[0_0_30px_rgba(45,212,191,0.15)]`
- Gradient text: `bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent`
- Section dividers: subtle gradient from transparent to teal-500/10 to transparent
- Background patterns: radial gradients with teal/cyan at low opacity

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use teal/cyan as the primary accent consistently
- Add subtle glow/blur effects to create depth
- Use `backdrop-blur` on overlapping elements
- Keep text contrast high (slate-100 on slate-900+)

## Don'ts
- Don't use light mode colors
- Don't use harsh pure white (#fff) for backgrounds
- Don't use more than 3 accent colors per section
- Don't use small font sizes below `text-sm` for body content
