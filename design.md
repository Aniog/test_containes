# Dream Exchange — Design System

## Brand Identity
Dream Exchange is a luxury, surreal, emotionally immersive platform. The visual language combines deep space aesthetics with art gallery refinement and social network warmth.

## Color Palette

### Core Colors (Named in Tailwind config)
- `dream-void` (#050510) — Primary background, deepest dark
- `dream-deep` (#0a0820) — Secondary background
- `dream-purple` (#1a0a3e) — Surface backgrounds
- `dream-violet` (#2d1b69) — Elevated surfaces
- `dream-indigo` (#4a2c8a) — Interactive elements
- `dream-lavender` (#7c5cbf) — Muted text, borders
- `dream-lilac` (#b89ee8) — Secondary text
- `dream-mist` (#e8d5ff) — Primary text
- `dream-glow` (#c084fc) — Primary accent, CTAs
- `dream-aurora` (#818cf8) — Secondary accent
- `dream-rose` (#f472b6) — Romance/emotion accent
- `dream-gold` (#fbbf24) — Ratings, premium
- `dream-teal` (#2dd4bf) — Cosmic/success accent
- `dream-cyan` (#67e8f9) — Highlights
- `dream-ember` (#fb923c) — Adventure/trending accent

### Do's
- Always use dark backgrounds (#050510 to #1a0a3e range)
- Use glowing accent colors for interactive elements
- Apply glass morphism for cards and overlays
- Use gradient text (text-shimmer class) for hero headings
- Pair light text (#e8d5ff) on dark surfaces

### Don'ts
- Never use white backgrounds
- Never use dark text on dark backgrounds
- Avoid flat, non-glowing UI elements
- Don't use more than 3 accent colors per section

## Typography

### Fonts
- **Cinzel** (font-dream) — Headings, titles, brand name. Weights: 400–900
- **Inter** (font-body) — Body text, UI labels, descriptions. Weights: 300–700
- **Playfair Display** (font-display) — Pull quotes, featured text

### Scale
- Hero: `text-5xl sm:text-7xl lg:text-8xl` Cinzel font-black
- Section headings: `text-3xl sm:text-4xl` Cinzel font-bold
- Card titles: `text-sm` Cinzel font-bold
- Body: `text-sm` Inter
- Labels/captions: `text-xs` Inter

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `px-4 sm:px-6 py-16`
- Card gap: `gap-6`
- Component padding: `p-5` to `p-8`

## Components

### Glass Cards
```
glass: bg-white/3 backdrop-blur-20 border border-white/8
glass-strong: bg-white/6 backdrop-blur-30 border border-white/12
```

### Dream Cards
- Rounded: `rounded-2xl`
- Hover: translateY(-8px) scale(1.02) with purple glow
- Use `.dream-card` class for hover transitions

### Buttons
- Primary: `bg-gradient-to-r from-purple-600 to-pink-600` rounded-full
- Secondary: `glass border border-purple-500/30` rounded-full
- Micro: `glass border border-white/10` rounded-full text-xs

### Badges
- Trending: `bg-orange-500/80 text-white` rounded-full text-xs
- New: `bg-teal-500/80 text-white` rounded-full text-xs
- Category: colored border + background matching category accent

## Animations
- `animate-float` — Gentle floating for hero objects (6s)
- `animate-float-slow` — Slow drift for background elements (10s)
- `animate-pulse-glow` — Breathing glow for orbs (4s)
- `animate-twinkle` — Star twinkling (3s)
- `animate-drift` — Cloud drifting across screen (20s)
- `text-shimmer` — Gradient text animation (4s)
- `animate-fade-in-up` — Entry animation for content

## Glow Effects
- Text glow: `.glow-purple`, `.glow-rose`, `.glow-gold`, `.glow-teal`
- Box glow: `.box-glow-purple`, `.box-glow-rose`, `.box-glow-gold`

## Category Color Mapping
- Adventure: #fb923c (ember/orange)
- Romance: #f472b6 (rose/pink)
- Mystery: #818cf8 (aurora/indigo)
- Horror: #6b7280 (gray)
- Historical: #fbbf24 (gold)
- Cosmic: #2dd4bf (teal)
