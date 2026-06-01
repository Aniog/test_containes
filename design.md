# Mnemosynē Archive — Design System

## Visual Identity
A deep-space aesthetic evoking the vastness of the cosmos and the fragility of human memory. Dark, immersive, with luminous accents that feel like stars and nebulae.

## Color Palette

### Backgrounds
- `void` (#03040a) — deepest background, page base
- `cosmos` (#070b18) — card backgrounds, secondary surfaces
- Nebula gradient: `radial-gradient(ellipse at top, #1e1b4b 0%, #070b18 50%, #03040a 100%)`

### Accent Colors
- Nebula purple: `nebula-500` (#6366f1) — primary interactive, links, highlights
- Aurora teal: `aurora-400` (#2dd4bf) — secondary accent, success states
- Stardust gold: `stardust-400` (#fbbf24) — tertiary accent, warnings, joy emotion

### Emotion Colors
- Joy: #fbbf24 (gold)
- Sorrow: #818cf8 (soft indigo)
- Love: #f472b6 (pink)
- Wonder: #34d399 (emerald)
- Fear: #f87171 (red)
- Nostalgia: #a78bfa (violet)
- Peace: #67e8f9 (cyan)
- Longing: #c084fc (purple)

### Text
- Primary: #e2e8f0 (slate-200)
- Secondary: #94a3b8 (slate-400)
- Muted: #64748b (slate-500)
- On dark cards: always use slate-200 or white

## Typography

### Fonts
- Display/Headings: `Playfair Display` — elegant, literary, serif
- Body: `Inter` — clean, readable, modern
- Mono: `JetBrains Mono` — archive IDs, technical data

### Scale
- Hero title: `text-5xl md:text-7xl font-display font-bold`
- Section title: `text-3xl md:text-4xl font-display font-semibold`
- Card title: `text-lg md:text-xl font-display font-semibold`
- Body: `text-base font-body`
- Caption/meta: `text-sm text-slate-400`
- Archive ID: `text-xs font-mono text-slate-500`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6`

## Components

### Glass Cards
```
background: rgba(14, 17, 40, 0.7)
backdrop-filter: blur(12px)
border: 1px solid rgba(99, 102, 241, 0.15)
border-radius: 12px
```
Hover: border brightens to rgba(99,102,241,0.4), slight lift

### Buttons
- Primary: `bg-nebula-600 hover:bg-nebula-500 text-white px-6 py-3 rounded-lg font-medium`
- Secondary: `border border-nebula-500/40 text-nebula-300 hover:border-nebula-400 px-6 py-3 rounded-lg`
- Ghost: `text-slate-300 hover:text-white`

### Tags/Badges
- Small pill: `px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide`
- Emotion tags: colored background at 15% opacity, colored text

### Text Gradients
- Nebula: `linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #67e8f9 100%)`
- Aurora: `linear-gradient(135deg, #34d399 0%, #67e8f9 100%)`
- Stardust: `linear-gradient(135deg, #fbbf24 0%, #f472b6 100%)`

## Do's
- Always ensure text is readable against dark backgrounds
- Use glass morphism for cards and overlays
- Animate subtly — stars twinkle, cards lift on hover
- Use serif font for all headings and memory titles
- Use emotion colors consistently throughout

## Don'ts
- No white or light backgrounds
- No harsh borders — use subtle rgba borders
- No flat, unlit surfaces — always add subtle gradients
- Don't use pure black (#000) — use void (#03040a) instead
- No bright, saturated colors for large areas — keep them as accents
