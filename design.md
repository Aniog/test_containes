# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, highlights
- Stardust gold: `#f5c842` — warm memories, featured items
- Cosmic rose: `#e879a0` — emotional tags, love/joy
- Void purple: `#9b59f5` — era markers, time indicators

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-400`
- Muted: `text-slate-600`
- Accent: `text-[#4f8ef7]`

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — headings, titles, cosmic feel
- Body: "Inter" — readable body text, UI elements

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section heading: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold`
- Body: `text-base text-slate-300`
- Caption: `text-sm text-slate-500`

## Borders & Shadows
- Card border: `border border-slate-800`
- Glow border: `border border-[#4f8ef7]/30`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6`

## Components

### Memory Card
- Dark background `bg-[#080d1a]`
- Subtle border `border border-slate-800`
- Hover: border brightens to `border-[#4f8ef7]/50`, slight scale `hover:scale-[1.02]`
- Transition: `transition-all duration-300`

### Filter Pill
- Default: `bg-slate-800 text-slate-300`
- Active: `bg-[#4f8ef7] text-white`
- Rounded: `rounded-full`

### Constellation Canvas
- Full-screen canvas with animated star nodes
- Lines connecting nearby nodes with low opacity
- Nodes pulse gently, representing memory fragments
- Clicking a node reveals a memory snippet

## Do's
- Use dark backgrounds exclusively — this is a space/cosmos theme
- Always ensure text is readable: white/light text on dark surfaces
- Use subtle glows and gradients to create depth
- Animate sparingly — constellation, subtle pulses, smooth transitions
- Use `font-cinzel` for all display headings

## Don'ts
- No light/white backgrounds
- No harsh borders — keep them subtle and dark
- No flat, unstyled buttons — always use the design system
- No text smaller than `text-xs` for important content
- Don't overuse color — let the dark space breathe
