# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Midnight navy: `bg-[#080d1a]` — card/panel backgrounds
- Dark indigo: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind.config.js)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, tags
- Stardust gold: `#f5c842` — highlights, featured items
- Memory rose: `#e879a0` — emotion tags, warm memories
- Cosmic violet: `#a78bfa` — era/time indicators

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-300`
- Muted: `text-slate-500`
- Accent: `text-[#4f8ef7]`

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — headings, titles, logo
- Body: "Inter" — body text, UI elements

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section heading: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold text-white`
- Body: `text-sm md:text-base text-slate-300`
- Caption: `text-xs text-slate-500`

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow border: `border border-[#4f8ef7]/30`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`

## Spacing
- Section padding: `py-20 md:py-32`
- Card padding: `p-5 md:p-6`
- Container: `max-w-7xl mx-auto px-4 md:px-8`

## Components

### Memory Card
- Dark background with subtle border
- Hover: slight scale + glow border brightens
- Tag pills: rounded-full, small, colored by category

### Navigation
- Transparent on hero, dark on scroll
- Logo in Cinzel font with star icon
- Links: slate-300, hover white

### Constellation Canvas
- Full-screen canvas behind hero
- Stars as memory fragments (dots)
- Lines connecting nearby stars
- Slow drift animation
- Clicking a star reveals a memory snippet

## Do's
- Use `backdrop-blur` for glass-morphism panels
- Use subtle gradients: `from-[#050810] via-[#080d1a] to-[#050810]`
- Animate with `transition-all duration-300`
- Use `opacity-0 group-hover:opacity-100` for reveal effects

## Don'ts
- No white or light backgrounds
- No harsh borders (always use opacity)
- No flat colors without depth
- No text below 12px
