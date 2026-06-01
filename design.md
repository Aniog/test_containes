# Memory Archive — Design System

## Concept
A deep-space aesthetic evoking the vastness of the cosmos and the intimacy of human memory. Dark backgrounds with luminous accents, as if memories are stars scattered across the void.

## Color Palette

### Named Colors (in tailwind.config.js)
- `void`: `#03050f` — deepest background, near-black space
- `cosmos`: `#070d1f` — primary background
- `nebula`: `#0d1635` — card/surface background
- `stardust`: `#1a2a5e` — elevated surfaces, borders
- `aurora`: `#4f8ef7` — primary accent, interactive elements
- `aurora-dim`: `#2a5cbf` — hover states
- `aurora-glow`: `#7ab3ff` — highlights, active states
- `memory`: `#c8a8f0` — secondary accent (purple/lavender)
- `memory-dim`: `#9b6fd4` — muted memory accent
- `warmth`: `#f0c87a` — warm accent for emotional tones
- `warmth-dim`: `#c8963a` — muted warmth
- `starlight`: `#e8f0ff` — primary text on dark
- `mist`: `#8899cc` — secondary/muted text
- `fog`: `#4a5a8a` — disabled/placeholder text

## Typography

### Fonts
- **Display**: `Cinzel` (Google Fonts) — for headings, titles, cosmic feel
- **Body**: `Inter` — for readable body text, UI elements
- **Mono**: `JetBrains Mono` — for coordinates, timestamps, data

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section heading: `text-3xl md:text-4xl font-cinzel font-semibold`
- Card title: `text-lg font-semibold text-starlight`
- Body: `text-base text-mist`
- Caption/meta: `text-sm text-fog font-mono`

## Spacing
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Container max-width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border: `border border-stardust/50`
- Card hover border: `border-aurora/40`
- Glow shadow: `shadow-[0_0_30px_rgba(79,142,247,0.15)]`
- Memory glow: `shadow-[0_0_20px_rgba(200,168,240,0.2)]`

## Components

### Cards
- Background: `bg-nebula`
- Border: `border border-stardust/50`
- Hover: `hover:border-aurora/40 hover:shadow-[0_0_30px_rgba(79,142,247,0.15)]`
- Transition: `transition-all duration-300`
- Border radius: `rounded-xl`

### Buttons
- Primary: `bg-aurora text-void font-semibold px-6 py-3 rounded-lg hover:bg-aurora-glow transition-colors`
- Secondary: `border border-aurora/50 text-aurora px-6 py-3 rounded-lg hover:bg-aurora/10 transition-colors`
- Ghost: `text-mist hover:text-starlight transition-colors`

### Badges / Tags
- Era: `bg-stardust/60 text-aurora text-xs px-3 py-1 rounded-full font-mono`
- Emotion: `bg-memory/10 text-memory text-xs px-3 py-1 rounded-full`
- Location: `bg-warmth/10 text-warmth text-xs px-3 py-1 rounded-full`

### Navigation
- Background: `bg-void/80 backdrop-blur-md border-b border-stardust/30`
- Logo: `font-cinzel text-xl text-starlight`
- Links: `text-mist hover:text-starlight transition-colors`

## Animations
- Constellation: canvas-based particle system with connecting lines
- Fade-in: `animate-fade-in` (custom keyframe, opacity 0→1, translateY 20px→0)
- Pulse glow: `animate-pulse-glow` (custom keyframe, box-shadow oscillation)
- Float: `animate-float` (subtle vertical oscillation)
- Twinkle: `animate-twinkle` (opacity oscillation for star dots)

## Do's
- Always use dark backgrounds (`bg-void`, `bg-cosmos`, `bg-nebula`)
- Use `text-starlight` for primary text, `text-mist` for secondary
- Add subtle glow effects to interactive elements
- Use `font-cinzel` for all headings and display text
- Use `font-mono` for dates, coordinates, IDs
- Maintain generous whitespace for a cosmic, expansive feel

## Don'ts
- Never use white or light backgrounds
- Never use black text — always use `text-starlight` or `text-mist`
- Don't use harsh, saturated colors — keep palette cool and cosmic
- Don't crowd elements — space is vast, layouts should breathe
- Don't use standard button styles — always apply the design system
