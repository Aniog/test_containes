# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card backgrounds, panels
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind.config.js)
- Nebula blue: `#4f8ef7` — primary interactive, links
- Aurora teal: `#2dd4bf` — secondary accent, tags
- Stellar gold: `#f5c842` — highlights, featured items
- Memory rose: `#e879a0` — emotion tags, warm memories
- Void purple: `#8b5cf6` — era markers, deep history

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-300`
- Muted: `text-slate-500`
- Accent: `text-[#4f8ef7]`

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — headings, titles, logo
- Body: "Inter" — body text, UI elements
- Mono: system monospace — coordinates, dates, IDs

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section heading: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold text-white`
- Body: `text-sm text-slate-300`
- Caption: `text-xs text-slate-500`

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow border: `border border-[#4f8ef7]/30`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Grid gap: `gap-4 md:gap-6`

## Components

### Memory Card
- Dark navy background with subtle border
- Hover: slight glow + scale transform
- Tag pills: small rounded badges with category colors
- `rounded-xl border border-slate-700/50 bg-[#080d1a] hover:border-[#4f8ef7]/50 transition-all`

### Filter Pills
- Inactive: `bg-slate-800 text-slate-400 border border-slate-700`
- Active: `bg-[#4f8ef7]/20 text-[#4f8ef7] border border-[#4f8ef7]/50`

### Buttons
- Primary: `bg-[#4f8ef7] text-white hover:bg-[#3a7de8]`
- Ghost: `border border-slate-600 text-slate-300 hover:border-[#4f8ef7] hover:text-[#4f8ef7]`

## Animations
- Constellation: canvas-based particle system with connecting lines
- Memory cards: fade-in on scroll with stagger
- Star twinkle: CSS keyframe opacity pulse
- Hover glow: CSS transition on box-shadow

## Do's
- Always use dark backgrounds with light text
- Use subtle gradients for depth (e.g., `from-[#050810] to-[#0d1530]`)
- Add glow effects sparingly for emphasis
- Use Cinzel font for all headings to maintain the cosmic/archival feel

## Don'ts
- Never use white or light backgrounds
- Never use harsh, fully saturated colors — always use muted/translucent variants
- Don't use more than 3 accent colors per section
- Avoid flat, non-textured dark surfaces — always add subtle gradients
