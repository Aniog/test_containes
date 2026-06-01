# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of time and the intimacy of human memory. Dark backgrounds with luminous, glowing accents. The feeling of starlight and nostalgia.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, highlights
- Stardust gold: `#f5c842` — warm memory highlights, featured items
- Cosmic violet: `#a78bfa` — emotion tags, special labels
- Supernova rose: `#f472b6` — love/family emotion category

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-300`
- Muted: `text-slate-500`
- Accent: `text-[#4f8ef7]`

## Typography

### Fonts
- Display: "Cormorant Garamond" — headings, hero text (elegant, timeless)
- Body: "Inter" — UI text, descriptions
- Mono: system monospace — metadata, coordinates, timestamps

### Scale
- Hero: `text-6xl md:text-8xl font-light tracking-tight` (Cormorant)
- Section heading: `text-3xl md:text-4xl font-light` (Cormorant)
- Card title: `text-lg font-medium` (Inter)
- Body: `text-sm text-slate-300` (Inter)
- Label/tag: `text-xs uppercase tracking-widest` (Inter)

## Borders & Surfaces
- Cards: `border border-slate-800 rounded-xl bg-[#080d1a]`
- Glowing card hover: `hover:border-[#4f8ef7]/40 hover:shadow-[0_0_20px_rgba(79,142,247,0.15)]`
- Dividers: `border-slate-800`
- Glass panels: `bg-white/5 backdrop-blur-sm border border-white/10`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Animations
- Constellation: canvas-based particle animation with connecting lines
- Fade in: `animate-fade-in` (custom, opacity 0→1, translateY 20px→0)
- Pulse glow: subtle box-shadow pulse on accent elements
- Hover transitions: `transition-all duration-300`

## Tags / Badges
- Era: `bg-[#4f8ef7]/15 text-[#4f8ef7] border border-[#4f8ef7]/30`
- Emotion: `bg-[#a78bfa]/15 text-[#a78bfa] border border-[#a78bfa]/30`
- Location: `bg-[#2dd4bf]/15 text-[#2dd4bf] border border-[#2dd4bf]/30`
- Life Event: `bg-[#f5c842]/15 text-[#f5c842] border border-[#f5c842]/30`

## Do's
- Use generous whitespace to evoke cosmic scale
- Layer subtle gradients for depth
- Use glowing effects sparingly for emphasis
- Animate slowly and smoothly (no jarring transitions)
- Keep text high-contrast against dark backgrounds

## Don'ts
- No white or light backgrounds
- No harsh borders or heavy shadows
- No bright saturated colors without dark context
- No small text on dark muted backgrounds (always ensure contrast)
- No more than 3 accent colors per view
