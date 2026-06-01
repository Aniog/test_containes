# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of time and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, tags
- Stardust gold: `#f5c842` — highlights, featured items
- Memory rose: `#e879a0` — emotion tags, warm memories
- Cosmic violet: `#a78bfa` — era tags, temporal elements

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
- Card title: `text-lg font-semibold text-white`
- Body: `text-base text-slate-300`
- Caption/meta: `text-sm text-slate-500`

## Borders & Surfaces
- Card border: `border border-slate-800` with subtle glow on hover
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`
- Hover glow: `hover:shadow-[0_0_30px_rgba(79,142,247,0.3)]`
- Rounded: `rounded-xl` for cards, `rounded-full` for tags/badges

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6`

## Animations
- Constellation: canvas-based particle animation with connecting lines
- Fade-in: `animate-fade-in` on page load
- Pulse glow: subtle pulsing on featured elements
- Hover transitions: `transition-all duration-300`

## Do's
- Use dark backgrounds exclusively — this is a space/cosmic theme
- Layer translucent panels over the dark background (`bg-slate-900/60 backdrop-blur-sm`)
- Use glowing borders and shadows for depth
- Animate sparingly — constellation hero is the main animation
- Use Cinzel font for all headings to maintain the cosmic/archival feel

## Don'ts
- Never use white or light backgrounds
- Don't use bright saturated colors as backgrounds
- Avoid flat, non-glowing UI elements in key areas
- Don't use more than 3 accent colors in a single component
