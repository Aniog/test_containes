# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous, glowing accents. The visual language should feel like starlight — distant, beautiful, and timeless.

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- Nebula blue: `#4f8ef7` — primary interactive, links, highlights
- Aurora teal: `#2dd4bf` — secondary accent, tags, badges
- Stardust gold: `#f5c842` — featured/special items, constellation nodes
- Cosmic purple: `#a855f7` — emotion tags, special states
- Supernova rose: `#f472b6` — love/family emotion category

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-400`
- Muted: `text-slate-600`
- Accent: `text-[#4f8ef7]`

### Borders
- Subtle: `border-slate-800` / `border-white/10`
- Glowing: `border-[#4f8ef7]/30`

## Typography

### Font Stack
- Headings: `font-serif` (Playfair Display via Google Fonts)
- Body: `font-sans` (Inter)
- Monospace/data: `font-mono`

### Scale
- Hero title: `text-5xl md:text-7xl font-serif font-bold`
- Section title: `text-3xl md:text-4xl font-serif`
- Card title: `text-lg font-semibold`
- Body: `text-sm md:text-base`
- Caption/meta: `text-xs text-slate-400`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Components

### Cards
- Background: `bg-[#080d1a]`
- Border: `border border-white/10`
- Hover: `hover:border-[#4f8ef7]/40 hover:bg-[#0d1530]`
- Rounded: `rounded-xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-[#4f8ef7] hover:bg-[#3a7de8] text-white rounded-lg px-5 py-2.5 font-medium`
- Ghost: `border border-white/20 hover:border-[#4f8ef7]/50 text-slate-300 hover:text-white rounded-lg px-5 py-2.5`
- Tag/Badge: `bg-white/5 border border-white/10 text-slate-300 text-xs rounded-full px-3 py-1`

### Glows & Effects
- Text glow: `drop-shadow-[0_0_20px_rgba(79,142,247,0.6)]`
- Card glow on hover: `shadow-[0_0_30px_rgba(79,142,247,0.1)]`
- Constellation node: `shadow-[0_0_8px_rgba(245,200,66,0.8)]`

## Do's
- Use subtle gradients: `bg-gradient-to-b from-[#050810] to-[#080d1a]`
- Animate with slow, smooth transitions (0.3s–1s)
- Use opacity layers for depth: `bg-white/5`, `bg-white/10`
- Constellation lines should be thin and semi-transparent
- Memory cards should feel like windows into another world

## Don'ts
- No bright white backgrounds
- No harsh borders or sharp shadows
- No saturated colors without dark context
- Don't use default Tailwind grays on dark backgrounds without checking contrast
- Never show invisible text (white on white, dark on dark)
