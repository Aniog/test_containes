# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Named Colors (add to Tailwind config)
- `cosmos-950`: #03040a — deepest space black
- `cosmos-900`: #070b18 — dark navy void
- `cosmos-800`: #0d1530 — deep space blue
- `cosmos-700`: #162048 — midnight blue
- `cosmos-600`: #1e2d6b — deep indigo
- `nebula-500`: #3d4fc4 — nebula blue
- `nebula-400`: #6b7fe8 — soft nebula
- `nebula-300`: #9aaaf0 — pale nebula
- `aurora-500`: #7c3aed — aurora violet
- `aurora-400`: #a855f7 — bright violet
- `aurora-300`: #c084fc — soft violet
- `stardust-500`: #d97706 — warm amber
- `stardust-400`: #f59e0b — golden stardust
- `stardust-300`: #fcd34d — pale gold
- `memory-pink`: #ec4899 — memory rose
- `memory-teal`: #14b8a6 — memory teal
- `memory-cyan`: #06b6d4 — memory cyan
- `text-primary`: #f0f4ff — near-white with blue tint
- `text-secondary`: #a8b4d8 — muted blue-grey
- `text-muted`: #5a6a9a — dim blue-grey

## Typography

### Fonts
- **Display**: "Cinzel" (Google Fonts) — for titles, headings, cosmic feel
- **Body**: "Inter" (Google Fonts) — for readable body text
- **Mono**: "JetBrains Mono" — for metadata, coordinates, timestamps

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold tracking-wider`
- Section title: `text-3xl md:text-4xl font-cinzel font-semibold`
- Card title: `text-lg font-semibold text-text-primary`
- Body: `text-base text-text-secondary leading-relaxed`
- Caption/meta: `text-xs font-mono text-text-muted uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-32`
- Card padding: `p-6`
- Grid gaps: `gap-6 md:gap-8`

## Components

### Cards
- Background: `bg-cosmos-800/60 backdrop-blur-sm`
- Border: `border border-nebula-500/20`
- Hover: `hover:border-nebula-400/50 hover:bg-cosmos-700/60`
- Border radius: `rounded-2xl`
- Shadow: `shadow-lg shadow-cosmos-950/50`

### Buttons
- Primary: `bg-nebula-500 hover:bg-nebula-400 text-white rounded-full px-6 py-3 font-semibold`
- Ghost: `border border-nebula-500/40 hover:border-nebula-400 text-nebula-300 rounded-full px-6 py-3`
- Icon: `p-2 rounded-full hover:bg-cosmos-700`

### Badges / Tags
- Era: `bg-stardust-500/20 text-stardust-300 border border-stardust-500/30`
- Emotion: `bg-aurora-500/20 text-aurora-300 border border-aurora-500/30`
- Location: `bg-memory-teal/20 text-memory-teal border border-memory-teal/30`
- Life Event: `bg-memory-pink/20 text-memory-pink border border-memory-pink/30`
- All: `text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full`

### Navigation
- Background: `bg-cosmos-950/80 backdrop-blur-md`
- Border bottom: `border-b border-nebula-500/10`

## Visual Effects
- Constellation canvas: animated SVG/Canvas with twinkling nodes and connecting lines
- Glow effects: `drop-shadow` or `box-shadow` with nebula/aurora colors
- Gradient text: `bg-gradient-to-r from-nebula-300 to-aurora-300 bg-clip-text text-transparent`
- Particle shimmer: subtle CSS keyframe animations on star dots
- Glass morphism cards: `backdrop-blur-sm bg-cosmos-800/60`

## Do's
- Always use dark backgrounds (cosmos-950 to cosmos-800)
- Use luminous accent colors sparingly for emphasis
- Maintain high contrast for all readable text (min 4.5:1 ratio)
- Use font-mono for all metadata, coordinates, dates
- Animate subtly — cosmic, slow, ethereal

## Don'ts
- No white or light backgrounds
- No harsh, saturated colors as backgrounds
- No dense walls of text — use generous spacing
- No sharp corners on interactive elements — prefer rounded-xl or rounded-2xl
- No more than 3 accent colors per section
