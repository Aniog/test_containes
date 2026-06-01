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
- Aurora teal: `#2dd4bf` — secondary accent, highlights
- Stardust gold: `#f5c842` — warm memory glow, featured items
- Cosmic violet: `#a78bfa` — emotion tags, special states
- Supernova rose: `#f472b6` — love/family memories, warm emotions

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-400`
- Muted: `text-slate-600`
- Accent: `text-[#4f8ef7]`

## Typography

### Fonts
- Display: "Cinzel" (Google Fonts) — headings, titles, cosmic gravitas
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

### Tags / Badges
- Era: `bg-[#4f8ef7]/20 text-[#4f8ef7]`
- Emotion: `bg-[#a78bfa]/20 text-[#a78bfa]`
- Location: `bg-[#2dd4bf]/20 text-[#2dd4bf]`
- Life Event: `bg-[#f5c842]/20 text-[#f5c842]`

### Buttons
- Primary: `bg-[#4f8ef7] hover:bg-[#3a7de8] text-white`
- Ghost: `border border-[#4f8ef7]/50 text-[#4f8ef7] hover:bg-[#4f8ef7]/10`

## Do's
- Use subtle gradients: `from-[#050810] via-[#080d1a] to-[#050810]`
- Animate with opacity and transform for cosmic feel
- Use `backdrop-blur` on overlays
- Layer multiple low-opacity elements for depth

## Don'ts
- No bright white backgrounds
- No harsh solid borders — always use opacity
- No flat, non-glowing buttons for primary actions
- No sans-serif for display headings
