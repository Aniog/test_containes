# Design System — Mnemo: The Memory Archive

## Concept
A deep-space, cosmic aesthetic evoking the vastness of time and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Background
- Deep space black: `bg-[#050810]` — primary page background
- Deep navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors
- Nebula gold: `text-[#e8c97a]` / `bg-[#e8c97a]` — primary accent, CTAs, highlights
- Stellar cyan: `text-[#7dd3fc]` / `bg-[#7dd3fc]` — secondary accent, links, tags
- Memory violet: `text-[#c084fc]` / `bg-[#c084fc]` — emotion tags, special highlights
- Warm amber: `text-[#fb923c]` — life event tags
- Soft rose: `text-[#f9a8d4]` — personal/intimate memory tags

### Text
- Primary: `text-white` / `text-slate-100`
- Secondary: `text-slate-300`
- Muted: `text-slate-500`
- On-dark-card: `text-slate-200`

### Borders & Dividers
- Subtle: `border-slate-800` / `border-white/10`
- Accent: `border-[#e8c97a]/30` / `border-[#7dd3fc]/30`

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
- Caption/meta: `text-sm text-slate-500`
- Micro: `text-xs text-slate-600`

## Spacing
- Section padding: `py-20 md:py-32`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`

## Components

### Cards
- Background: `bg-[#080d1a]`
- Border: `border border-white/10`
- Hover: `hover:border-[#e8c97a]/40 hover:bg-[#0d1530]`
- Rounded: `rounded-xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-[#e8c97a] text-[#050810] font-semibold rounded-lg px-6 py-3 hover:bg-[#f0d98a]`
- Secondary: `border border-[#e8c97a]/50 text-[#e8c97a] rounded-lg px-6 py-3 hover:bg-[#e8c97a]/10`
- Ghost: `text-slate-300 hover:text-white`

### Tags / Badges
- Era: `bg-[#7dd3fc]/10 text-[#7dd3fc] border border-[#7dd3fc]/20 rounded-full px-3 py-1 text-xs`
- Emotion: `bg-[#c084fc]/10 text-[#c084fc] border border-[#c084fc]/20 rounded-full px-3 py-1 text-xs`
- Location: `bg-[#fb923c]/10 text-[#fb923c] border border-[#fb923c]/20 rounded-full px-3 py-1 text-xs`
- Life Event: `bg-[#f9a8d4]/10 text-[#f9a8d4] border border-[#f9a8d4]/20 rounded-full px-3 py-1 text-xs`

### Navigation
- Background: `bg-[#050810]/80 backdrop-blur-md`
- Border: `border-b border-white/5`
- Logo: `text-[#e8c97a] font-serif text-xl`

## Visual Effects
- Glow effects: `shadow-[0_0_30px_rgba(232,201,122,0.15)]`
- Constellation canvas: animated SVG/Canvas with star nodes and connecting lines
- Gradient overlays: `bg-gradient-to-b from-transparent to-[#050810]`
- Subtle noise texture on hero sections

## Do's
- Use deep dark backgrounds consistently
- Layer subtle glows on interactive elements
- Use serif fonts for emotional/poetic headings
- Animate constellation nodes with gentle floating motion
- Use color-coded tags for memory categories

## Don'ts
- Never use white or light backgrounds
- Never use harsh, saturated colors — keep accents muted/luminous
- Don't use more than 3 accent colors in one component
- Avoid flat, corporate-looking UI patterns
