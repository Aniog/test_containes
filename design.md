# Memory Archive — Design System

## Concept
A deep-space, cosmic aesthetic evoking the vastness of interstellar travel and the fragility of human memory. Dark backgrounds with luminous, glowing accents. Feels like looking at stars — each one a memory.

## Color Palette

### Backgrounds
- `bg-void`: `#050810` — deepest space black
- `bg-deep`: `#080d1a` — dark navy
- `bg-surface`: `#0d1528` — card/panel background
- `bg-elevated`: `#111e38` — elevated surfaces

### Accent Colors (named in tailwind config)
- `nebula-blue`: `#4f8ef7` — primary interactive blue
- `nebula-purple`: `#8b5cf6` — secondary purple
- `nebula-teal`: `#2dd4bf` — teal highlight
- `nebula-gold`: `#f59e0b` — warm gold for special moments
- `nebula-rose`: `#f43f5e` — emotional/love memories
- `nebula-dim`: `#1e2d4a` — subtle borders

### Text
- `text-starlight`: `#e8edf8` — primary text
- `text-muted`: `#6b7fa3` — secondary/muted text
- `text-faint`: `#3a4d6b` — very subtle text

## Typography

### Fonts
- **Display**: "Cinzel" (Google Fonts) — for titles, cosmic/ancient feel
- **Body**: "Inter" — clean, readable for content
- **Mono**: system monospace — for coordinates, IDs

### Scale
- Hero title: `text-5xl md:text-7xl font-cinzel font-bold`
- Section title: `text-3xl md:text-4xl font-cinzel`
- Card title: `text-lg font-semibold text-starlight`
- Body: `text-sm text-muted leading-relaxed`
- Label/tag: `text-xs font-medium uppercase tracking-widest`

## Borders & Shadows
- Card border: `border border-nebula-dim`
- Glow effect: `shadow-[0_0_20px_rgba(79,142,247,0.15)]`
- Strong glow: `shadow-[0_0_40px_rgba(79,142,247,0.3)]`
- Hover glow: `hover:shadow-[0_0_30px_rgba(79,142,247,0.25)]`

## Components

### Cards
- Background: `bg-surface` with `border-nebula-dim`
- Hover: subtle glow + slight scale `hover:scale-[1.02]`
- Rounded: `rounded-xl`
- Padding: `p-5` or `p-6`

### Buttons
- Primary: `bg-nebula-blue text-white hover:bg-blue-500 rounded-lg px-5 py-2.5`
- Ghost: `border border-nebula-dim text-starlight hover:border-nebula-blue`
- Tag/pill: `bg-nebula-dim text-nebula-blue text-xs rounded-full px-3 py-1`

### Tags / Badges
- Era: `bg-nebula-purple/20 text-purple-300 border border-purple-500/30`
- Emotion: `bg-nebula-rose/20 text-rose-300 border border-rose-500/30`
- Location: `bg-nebula-teal/20 text-teal-300 border border-teal-500/30`
- Event: `bg-nebula-gold/20 text-amber-300 border border-amber-500/30`

## Animations
- Constellation: canvas-based particle system with connecting lines
- Fade-in: `animate-fade-in` with `opacity-0 → opacity-100`
- Float: subtle `translateY` oscillation for hero elements
- Pulse glow: `animate-pulse` on star/memory dots
- Transition: `transition-all duration-300`

## Do's
- Use dark backgrounds exclusively — this is a space/cosmic theme
- Always ensure text is clearly readable (min contrast ratio 4.5:1)
- Use glowing borders and shadows to create depth
- Animate subtly — the universe is vast and slow
- Use the Cinzel font for all headings to maintain the cosmic/archival feel

## Don'ts
- No white or light backgrounds
- No flat, corporate-looking UI
- No harsh, bright neon colors — keep glows soft
- Don't use more than 3 accent colors per section
- No text smaller than `text-xs` for important content
