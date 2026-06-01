# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of the universe and the intimacy of human memory. Dark backgrounds with luminous, glowing accents. The visual language blends the scientific (star charts, data grids) with the emotional (warm amber, soft violet).

## Color Palette

### Backgrounds
- Deep space black: `bg-[#050810]` — primary page background
- Dark navy: `bg-[#080d1a]` — card/panel backgrounds
- Midnight blue: `bg-[#0d1530]` — elevated surfaces, modals

### Accent Colors (named in tailwind config)
- `cosmic-blue`: `#4a9eff` — primary interactive, links, highlights
- `cosmic-violet`: `#9b6dff` — secondary accent, emotion tags
- `cosmic-amber`: `#ffb347` — warm memories, life events
- `cosmic-teal`: `#2dd4bf` — location tags, geographic data
- `cosmic-rose`: `#ff6b9d` — emotional/love memories
- `star-white`: `#e8f0ff` — primary text on dark backgrounds
- `star-dim`: `#8899bb` — secondary/muted text
- `nebula-glow`: `#1a2a5e` — subtle glow backgrounds

### Gradients
- Hero gradient: `from-[#050810] via-[#080d1a] to-[#050810]`
- Card hover: subtle `from-[#0d1530] to-[#080d1a]`
- Text gradient: `from-cosmic-blue to-cosmic-violet`

## Typography

### Font Stack
- Primary: `'Space Grotesk', sans-serif` — headings, UI labels
- Secondary: `'Inter', sans-serif` — body text, descriptions
- Mono: `'Space Mono', monospace` — coordinates, timestamps, IDs

### Scale
- Display: `text-5xl md:text-7xl font-bold tracking-tight` (Space Grotesk)
- H1: `text-4xl md:text-5xl font-bold` (Space Grotesk)
- H2: `text-2xl md:text-3xl font-semibold` (Space Grotesk)
- H3: `text-xl font-semibold` (Space Grotesk)
- Body: `text-base leading-relaxed` (Inter)
- Caption: `text-sm text-star-dim` (Inter)
- Mono: `text-xs font-mono text-star-dim` (Space Mono)

## Borders & Surfaces

### Cards
- Border: `border border-[#1a2a5e]` or `border border-white/10`
- Background: `bg-[#080d1a]`
- Hover: `hover:border-cosmic-blue/40 hover:bg-[#0d1530]`
- Radius: `rounded-xl` for cards, `rounded-2xl` for featured
- Shadow: `shadow-lg shadow-black/50`

### Glow Effects
- Blue glow: `shadow-[0_0_20px_rgba(74,158,255,0.3)]`
- Violet glow: `shadow-[0_0_20px_rgba(155,109,255,0.3)]`
- Amber glow: `shadow-[0_0_20px_rgba(255,179,71,0.3)]`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Interactive Elements

### Buttons
- Primary: `bg-cosmic-blue text-white hover:bg-cosmic-blue/90 rounded-lg px-6 py-3 font-semibold`
- Ghost: `border border-cosmic-blue/40 text-cosmic-blue hover:bg-cosmic-blue/10 rounded-lg px-6 py-3`
- Icon button: `p-2 rounded-lg hover:bg-white/10 text-star-dim hover:text-star-white`

### Tags / Badges
- Era: `bg-cosmic-blue/20 text-cosmic-blue border border-cosmic-blue/30 rounded-full px-3 py-1 text-xs`
- Emotion: `bg-cosmic-violet/20 text-cosmic-violet border border-cosmic-violet/30 rounded-full px-3 py-1 text-xs`
- Location: `bg-cosmic-teal/20 text-cosmic-teal border border-cosmic-teal/30 rounded-full px-3 py-1 text-xs`
- Life Event: `bg-cosmic-amber/20 text-cosmic-amber border border-cosmic-amber/30 rounded-full px-3 py-1 text-xs`

## Animations
- Constellation: canvas-based particle system with connecting lines
- Fade in: `animate-fade-in` with `opacity-0 → opacity-100`
- Float: subtle `translateY` oscillation for hero elements
- Pulse glow: `animate-pulse` on star/node elements
- Transition: `transition-all duration-300 ease-in-out` for interactions

## Do's
- Always use `text-star-white` or `text-white` on dark backgrounds
- Use glow shadows on featured/highlighted elements
- Maintain cosmic depth with layered backgrounds
- Use `font-mono` for technical data (coordinates, timestamps, IDs)
- Animate subtly — the universe is vast and slow

## Don'ts
- Never use white backgrounds
- Never use black text on dark surfaces
- Avoid harsh, flat colors — prefer glowing, translucent variants
- Don't overcrowd — embrace negative space like the cosmos
- No sharp corners on cards — always rounded
