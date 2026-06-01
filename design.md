# Cinematography Archive — Design System

## Visual Identity
Sophisticated, cinematic, editorial. Inspired by film noir and high-fashion editorial photography.

## Color Palette
- **Background primary**: `#0d0d0d` (near-black) — `bg-cinema-black`
- **Background secondary**: `#1a1a1a` (dark grey) — `bg-cinema-dark`
- **Background tertiary**: `#242424` (medium dark) — `bg-cinema-mid`
- **Surface**: `#2e2e2e` — `bg-cinema-surface`
- **Gold primary**: `#c9a84c` — `text-gold` / `border-gold`
- **Gold muted**: `#a8893d` — `text-gold-muted`
- **Gold light**: `#e2c97e` — `text-gold-light`
- **Text primary**: `#f0ece4` (warm white) — `text-cinema-white`
- **Text secondary**: `#9e9a93` (warm grey) — `text-cinema-grey`
- **Text muted**: `#5a5752` — `text-cinema-muted`

## Typography
- **Display / Headlines**: Cormorant Garamond — elegant, cinematic serif
  - Hero: `text-7xl lg:text-9xl font-light tracking-tight`
  - Section title: `text-5xl lg:text-7xl font-light tracking-tight`
  - Card title: `text-2xl lg:text-3xl font-light`
- **Body / UI**: Inter — clean, modern sans-serif
  - Body: `text-base font-light tracking-wide`
  - Caption: `text-sm tracking-widest uppercase`
  - Label: `text-xs tracking-[0.2em] uppercase`

## Aspect Ratios
- **Cinematic (hero/filmography)**: 21:9 — `aspect-[21/9]`
- **Editorial (BTS cards)**: 16:9 — `aspect-video`
- **Portrait (detail)**: 3:4 — `aspect-[3/4]`

## Spacing
- Section padding: `py-24 lg:py-32`
- Container: `max-w-screen-2xl mx-auto px-6 lg:px-12`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Thin gold accent line: `border-gold/30`
- Divider: `border-t border-cinema-surface`

## Effects
- Film grain: CSS SVG noise filter overlay on sections, `opacity-[0.04]`
- Hover transitions: `transition-all duration-700 ease-in-out`
- Image overlay: dark gradient `from-cinema-black/80 via-transparent to-transparent`
- Letter spacing on labels: `tracking-[0.3em]`

## Do's
- Use Cormorant Garamond for all display text
- Keep layouts asymmetric and editorial
- Use generous whitespace
- Gold accents sparingly — borders, underlines, small highlights
- 21:9 containers for all hero/filmography images

## Don'ts
- No bright whites — use warm white `#f0ece4`
- No saturated colors
- No rounded corners on image containers (sharp edges only)
- No drop shadows — use subtle borders instead
