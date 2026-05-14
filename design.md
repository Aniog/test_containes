# MicroCosmos Design System

## Visual Identity
Japanese Minimalism meets dark laboratory aesthetics. Ultra-clean layouts, generous whitespace, crisp typography, and an immersive dark palette that mimics microscope illumination.

## Color Palette

### Backgrounds
- Deep Obsidian: `#090D16` — primary page background (`bg-obsidian`)
- Muted Charcoal: `#121824` — card/panel backgrounds (`bg-charcoal`)
- Surface Elevated: `#1A2235` — elevated cards, modals (`bg-surface`)
- Border Subtle: `#1E2D42` — dividers, card borders (`border-subtle`)

### Accent Colors (Microscope Illumination)
- Bio-luminescent Green: `#10B981` — primary accent, CTAs (`text-bio-green`, `bg-bio-green`)
- Electric Cyan: `#06B6D4` — secondary accent, highlights (`text-cyan-400`)
- Phosphorus Orange: `#F97316` — tertiary accent, warnings/labels (`text-phosphor`)
- Amber Glow: `#F59E0B` — warm highlights (`text-amber-400`)

### Text
- Primary: `#F1F5F9` — headings, important text (`text-slate-100`)
- Secondary: `#94A3B8` — body text, descriptions (`text-slate-400`)
- Muted: `#475569` — captions, metadata (`text-slate-600`)
- Accent: `#10B981` — links, labels (`text-bio-green`)

## Typography

### Font Stack
- Primary: `'Space Grotesk'` — headings, UI labels (geometric, scientific feel)
- Secondary: `'Inter'` — body text, descriptions
- Mono: `'JetBrains Mono'` — specimen codes, magnification labels, data

### Scale
- Display: `text-6xl` to `text-8xl`, `font-bold`, `tracking-tight`
- H1: `text-4xl` to `text-5xl`, `font-bold`, `tracking-tight`
- H2: `text-2xl` to `text-3xl`, `font-semibold`
- H3: `text-xl`, `font-semibold`
- Body: `text-base`, `font-normal`, `leading-relaxed`
- Caption/Label: `text-xs` to `text-sm`, `font-medium`, `tracking-widest uppercase`

## Spacing & Layout
- Section padding: `py-24 px-6` or `py-32 px-8`
- Max content width: `max-w-7xl mx-auto`
- Card padding: `p-8` or `p-10`
- Grid gaps: `gap-8` or `gap-12`

## Component Styles

### Specimen Cards (Glass Slide aesthetic)
- Background: `bg-charcoal` with `border border-subtle`
- Hover: subtle `border-bio-green/30` glow, `shadow-lg shadow-bio-green/5`
- Corner accent: thin colored line at top (`border-t-2 border-bio-green`)
- Rounded: `rounded-2xl`

### Navigation
- Background: `bg-obsidian/90 backdrop-blur-md`
- Border bottom: `border-b border-subtle`
- Links: `text-slate-400 hover:text-bio-green` transition
- Active: `text-bio-green`

### Buttons
- Primary: `bg-bio-green text-obsidian font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400`
- Ghost: `border border-bio-green/50 text-bio-green px-6 py-3 rounded-lg hover:bg-bio-green/10`

### Labels / Badges
- Specimen code: `font-mono text-xs tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full`
- Magnification: `font-mono text-xs text-phosphor bg-phosphor/10 px-2 py-1 rounded`

## Do's
- Use generous whitespace between sections (min `py-24`)
- Layer subtle grid/dot patterns at very low opacity for depth
- Use `backdrop-blur` on overlays for glass morphism
- Animate with subtle `transition-all duration-300`
- Use asymmetric layouts (60/40 splits) for visual interest
- Keep text columns narrow (`max-w-prose`) for readability

## Don'ts
- Never use white backgrounds
- Never use default blue links
- Avoid crowded layouts — embrace negative space
- Don't use more than 3 accent colors per section
- Avoid rounded corners larger than `rounded-2xl` on cards
