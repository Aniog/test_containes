# MicroCosmos Design System

## Brand Identity
MicroCosmos is a science-meets-wonder website exploring the microscopic world. The visual style is dark, immersive, and scientific — evoking deep-sea bioluminescence, petri dishes, and electron microscopy imagery.

## Color Palette

### Primary Colors
- Deep Space Black: `#050a0e` — page background
- Midnight Navy: `#0a1628` — card/section backgrounds
- Dark Teal: `#0d2137` — secondary surfaces

### Accent Colors
- Bioluminescent Cyan: `#00d4ff` — primary accent, links, highlights (`text-cyan-400`, `border-cyan-400`)
- Emerald Green: `#10b981` — secondary accent, success states (`text-emerald-400`)
- Violet Purple: `#8b5cf6` — tertiary accent, tags (`text-violet-400`)
- Amber Glow: `#f59e0b` — warm highlights (`text-amber-400`)

### Text Colors
- Primary Text: `#f0f9ff` — headings (`text-slate-50`)
- Secondary Text: `#94a3b8` — body copy (`text-slate-400`)
- Muted Text: `#475569` — captions, metadata (`text-slate-600`)

## Typography

### Font Stack
- Headings: `font-['Space_Grotesk']` — modern, scientific feel
- Body: `font-['Inter']` — clean, readable
- Mono/Labels: `font-mono` — data labels, scientific notation

### Scale
- Hero Title: `text-5xl md:text-7xl font-bold tracking-tight`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Component Styles

### Cards
```
bg-[#0a1628] border border-cyan-900/40 rounded-2xl p-6
hover:border-cyan-400/60 transition-all duration-300
```

### Buttons
- Primary: `bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition`
- Secondary: `border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition`
- Ghost: `text-slate-400 hover:text-cyan-400 transition`

### Badges / Tags
```
text-xs font-mono px-3 py-1 rounded-full border
```
- Cyan: `bg-cyan-400/10 text-cyan-400 border-cyan-400/30`
- Emerald: `bg-emerald-400/10 text-emerald-400 border-emerald-400/30`
- Violet: `bg-violet-400/10 text-violet-400 border-violet-400/30`

### Navigation
- Background: `bg-[#050a0e]/90 backdrop-blur-md border-b border-cyan-900/30`
- Active link: `text-cyan-400`
- Inactive link: `text-slate-400 hover:text-slate-100`

### Hero Section
- Full viewport height with dark gradient overlay
- Subtle animated particle/glow effects via CSS
- Large centered text with cyan accent underline

## Visual Effects
- Glow effects: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Gradient text: `bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent`
- Subtle grid background pattern for scientific feel
- Hover scale: `hover:scale-105 transition-transform duration-300`

## Do's
- Use dark backgrounds exclusively — this is a dark-mode-only site
- Use cyan as the primary accent consistently
- Use `font-mono` for scientific data, measurements, and labels
- Add subtle glows to important UI elements
- Use border-based cards rather than heavy shadows

## Don'ts
- Never use white backgrounds
- Never use light text on light backgrounds
- Avoid overly saturated colors — keep accents muted/glowing
- Don't use more than 3 accent colors per section
- Avoid rounded corners larger than `rounded-2xl` for cards
