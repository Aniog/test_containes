# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind.config.js)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, tags
- Stardust gold: `#f5c842` — highlights, featured items
- Memory rose: `#e879a0` — emotion tags, warm memories
- Void purple: `#8b5cf6` — era tags, historical

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-400`
- Muted: `text-slate-600`
- Accent: `text-[#4f8ef7]`

## Typography

### Font Stack
- Headings: `font-serif` (Playfair Display via Google Fonts)
- Body: `font-sans` (Inter)
- Mono/data: `font-mono`

### Scale
- Hero title: `text-5xl md:text-7xl font-serif font-bold`
- Section title: `text-3xl md:text-4xl font-serif`
- Card title: `text-lg font-semibold`
- Body: `text-base text-slate-300`
- Caption: `text-sm text-slate-500`

## Borders & Shadows
- Card border: `border border-slate-800`
- Glow border: `border border-[#4f8ef7]/30`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`

## Spacing
- Section padding: `py-20 md:py-32`
- Card padding: `p-6`
- Grid gap: `gap-6`

## Components

### Memory Card
- Dark background `bg-[#080d1a]`
- Subtle border `border border-slate-800 hover:border-[#4f8ef7]/40`
- Transition on hover: `transition-all duration-300`
- Rounded: `rounded-xl`

### Filter Tags
- Default: `bg-slate-800 text-slate-300 rounded-full px-3 py-1 text-sm`
- Active: `bg-[#4f8ef7] text-white`

### Buttons
- Primary: `bg-[#4f8ef7] hover:bg-[#3a7de8] text-white rounded-lg px-6 py-3`
- Ghost: `border border-slate-700 hover:border-[#4f8ef7] text-slate-300 rounded-lg px-6 py-3`

## Do's
- Use subtle gradients for depth: `bg-gradient-to-b from-[#050810] to-[#080d1a]`
- Add glow effects sparingly for key interactive elements
- Use `backdrop-blur` for overlays
- Animate with `transition-all duration-300`
- Use `opacity` and `scale` for hover states

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Avoid harsh, saturated colors — keep them cosmic and muted
- Don't use more than 3 accent colors per section
