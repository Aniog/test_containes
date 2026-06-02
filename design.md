# Abyssos — Design System

## Brand
Deep-ocean immersive experience. Dark, fluid, mysterious.

## Colors
- **Midnight Navy**: `#000080` — primary brand, deep ocean base
- **Electric Cyan**: `#00FFFF` — accent, bioluminescence, highlights
- **Abyss Black**: `#000510` — deepest background
- **Surface Blue**: `#001a4d` — shallow water
- **Coral Pink**: `#FF6B6B` — reef accent
- **Coral Orange**: `#FF8C42` — reef warmth
- **Glow White**: `rgba(255,255,255,0.9)` — text on dark

## Typography
- **Font**: `'Cinzel'` for headings (Google Fonts) — ancient, oceanic gravitas
- **Body**: `'Inter'` — clean, readable
- Heading sizes: `text-5xl` to `text-8xl` with `tracking-widest`
- Body: `text-base` to `text-lg`, `leading-relaxed`

## Borders & Corners
- All cards/panels: `rounded-3xl` or `rounded-[2rem]` — bubble-like
- Buttons: `rounded-full`
- No sharp corners anywhere

## Glassmorphism
- `backdrop-blur-md` or `backdrop-blur-xl`
- `bg-white/10` or `bg-cyan-500/10`
- `border border-white/20`
- `shadow-lg shadow-cyan-500/20`

## Animations
- Transitions: `transition-all duration-700 ease-in-out`
- Hover lifts: `hover:-translate-y-1`
- Glow pulses: custom `@keyframes pulse-glow`
- Liquid float: custom `@keyframes float`
- Particle drift: canvas-based, scroll-responsive

## Do's
- Use `#000080` as the primary brand color
- Use `#00FFFF` for glows, borders, and highlights
- Rounded everything — no sharp edges
- Smooth transitions on all interactive elements
- Dark backgrounds with light text always

## Don'ts
- No white backgrounds
- No sharp corners
- No flat, static layouts — everything should feel alive
- No low-contrast text on dark backgrounds
