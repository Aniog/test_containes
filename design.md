# Mnemosynē Archive — Design System

## Concept
A deep-space memory preservation platform. The visual language evokes the cosmos: infinite darkness, nebula colors, starlight, and the warmth of human memory glowing against the void.

## Color Palette

### Backgrounds
- `bg-space-950`: `#020817` — deepest space black (page background)
- `bg-space-900`: `#050a14` — dark space
- `bg-space-800`: `#0a1628` — card backgrounds
- `bg-space-700`: `#0f1f3d` — elevated surfaces

### Primary — Nebula Violet
- `text-nebula-400`: `#a78bfa` — primary text accent
- `text-nebula-500`: `#8b5cf6` — primary interactive
- `bg-nebula-600`: `#7c3aed` — primary buttons
- `bg-nebula-700`: `#6d28d9` — hover state

### Secondary — Starlight Blue
- `text-star-400`: `#38bdf8` — secondary accent
- `text-star-500`: `#0ea5e9` — links
- `bg-star-600`: `#0284c7` — secondary buttons

### Accent — Memory Gold
- `text-gold-400`: `#fbbf24` — warm highlights, era labels
- `text-gold-300`: `#fcd34d` — bright accents

### Emotion Colors
- Joy: `#fbbf24` (gold)
- Grief: `#6366f1` (indigo)
- Love: `#f43f5e` (rose)
- Wonder: `#06b6d4` (cyan)
- Nostalgia: `#a78bfa` (violet)
- Fear: `#64748b` (slate)
- Hope: `#34d399` (emerald)

### Text
- `text-slate-100`: primary text
- `text-slate-300`: secondary text
- `text-slate-400`: muted/placeholder
- `text-slate-500`: disabled

## Typography

### Fonts
- Headings: `Cinzel` (Google Fonts) — classical, cosmic, timeless
- Body: `Inter` — clean, readable
- Mono/Labels: `Space Mono` — technical, archival

### Scale
- Hero title: `text-6xl md:text-8xl font-cinzel font-bold`
- Section title: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold`
- Body: `text-base text-slate-300`
- Label/Tag: `text-xs font-mono uppercase tracking-widest`

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow effect: `shadow-[0_0_30px_rgba(139,92,246,0.15)]`
- Hover glow: `shadow-[0_0_50px_rgba(139,92,246,0.3)]`
- Subtle separator: `border-slate-800`

## Spacing
- Section padding: `py-20 md:py-32`
- Card padding: `p-6`
- Container: `max-w-7xl mx-auto px-4 md:px-8`

## Component Patterns

### Memory Card
- Dark card bg (`bg-space-800`)
- Thin violet border
- Emotion color dot indicator
- Era badge (gold, mono font)
- Hover: subtle glow + slight scale

### Filter Pill
- Inactive: `bg-space-800 border-slate-700 text-slate-400`
- Active: `bg-nebula-600/20 border-nebula-500 text-nebula-400`

### Buttons
- Primary: `bg-nebula-600 hover:bg-nebula-700 text-white`
- Secondary: `border border-star-500 text-star-400 hover:bg-star-600/10`
- Ghost: `text-slate-400 hover:text-slate-100`

## Do's
- Use dark backgrounds exclusively — this is a space theme
- Layer subtle gradients (radial nebula glows) behind sections
- Use `backdrop-blur` on overlays and nav
- Animate with `transition-all duration-300`
- Use `font-cinzel` for all headings
- Emotion colors should always be used as accents, not backgrounds

## Don'ts
- Never use white or light backgrounds
- Never use harsh, saturated colors as large fills
- Don't use more than 3 colors in a single component
- Don't use rounded-full on cards (use rounded-xl or rounded-2xl)
- No drop shadows on text — use glow effects instead
