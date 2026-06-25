# MicroCosmos Design System

## Concept
A dark, immersive, science-inspired aesthetic evoking the mysterious beauty of the microscopic world — bioluminescent organisms, cellular structures, and hidden universes.

## Color Palette

### Primary Colors
- Deep Space Black: `#050a0e` — main background
- Midnight Navy: `#0a1628` — section backgrounds
- Dark Teal: `#0d2137` — card backgrounds

### Accent Colors
- Bioluminescent Cyan: `#00e5ff` — primary accent, `text-cyan-400`
- Electric Teal: `#00bcd4` — secondary accent, `text-cyan-500`
- Soft Violet: `#7c3aed` — highlight accent, `text-violet-600`
- Emerald Glow: `#10b981` — success/nature accent, `text-emerald-400`

### Text Colors
- Primary Text: `#f0f9ff` — `text-slate-50`
- Secondary Text: `#94a3b8` — `text-slate-400`
- Muted Text: `#475569` — `text-slate-600`

## Typography

### Font Stack
- Headings: `Space Grotesk` (Google Fonts) — modern, scientific feel
- Body: `Inter` — clean, readable

### Scale
- Hero Title: `text-6xl md:text-8xl font-bold tracking-tight`
- Section Title: `text-4xl md:text-5xl font-bold`
- Card Title: `text-xl font-semibold`
- Body: `text-base md:text-lg`
- Caption: `text-sm text-slate-400`

## Borders & Shadows
- Card border: `border border-cyan-900/30`
- Glow effect: `shadow-[0_0_30px_rgba(0,229,255,0.15)]`
- Subtle glow: `shadow-[0_0_15px_rgba(0,229,255,0.08)]`

## Spacing
- Section padding: `py-24 px-6`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`

## Component Styles

### Cards
- Background: `bg-slate-900/60 backdrop-blur-sm`
- Border: `border border-cyan-900/40`
- Hover: `hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,229,255,0.12)]`
- Rounded: `rounded-2xl`

### Buttons
- Primary: `bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-full`
- Outline: `border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full`

### Navigation
- Background: `bg-slate-950/80 backdrop-blur-md`
- Border bottom: `border-b border-cyan-900/30`

## Do's
- Use dark backgrounds with glowing cyan/teal accents
- Add subtle gradient overlays for depth
- Use `backdrop-blur` on cards and nav for glass effect
- Animate elements subtly with CSS transitions
- Use `text-cyan-400` on dark backgrounds for readability

## Don'ts
- Never use light backgrounds — this is a dark-theme site
- Don't use harsh white text on colored backgrounds
- Avoid flat, non-glowing designs — everything should feel alive
- Don't use more than 3 accent colors in one section
