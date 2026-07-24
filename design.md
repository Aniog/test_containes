# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Charcoal** — `#1A1A1A` — primary text, nav text on solid bg, footer bg
- **Warm Ivory** — `#F6F2ED` — page background, hero overlay base, sections
- **Champagne Gold** — `#C8A97E` — accent color, CTAs, hover states, stars

### Neutral Colors
- **Soft Stone** — `#E8E3DC` — dividers, subtle borders, card hover bg
- **Muted Taupe** — `#9E958A` — secondary text, captions, disabled states
- **Deep Espresso** — `#2C2420` — dark section backgrounds (occasional contrast)
- **Pure White** — `#FFFFFF` — cards on dark backgrounds, cart drawer

### Usage Rules
- Page background: Warm Ivory
- Text on light: Charcoal
- Text on dark: Warm Ivory or White
- Accent CTAs: Champagne Gold background with Charcoal or White text
- Hairline dividers: Soft Stone at 1px
- Never use bright saturated colors

## Typography

### Fonts
- **Headings & Product Names**: Cormorant Garamond (serif) — weights 400, 500, 600
- **Body & UI**: Inter (sans-serif) — weights 300, 400, 500

### Scale
- Display: `text-5xl md:text-7xl` — Cormorant Garamond, font-weight 400, letter-spacing wide
- H1: `text-4xl md:text-5xl` — Cormorant Garamond, font-weight 500
- H2: `text-3xl md:text-4xl` — Cormorant Garamond, font-weight 500
- H3: `text-xl md:text-2xl` — Cormorant Garamond, font-weight 500
- Product Name: `text-sm` — Cormorant Garamond, uppercase, tracking-widest, font-weight 600
- Body: `text-sm md:text-base` — Inter, font-weight 400, leading-relaxed
- Caption / UI: `text-xs md:text-sm` — Inter, font-weight 400, tracking-wide
- Nav links: `text-sm` — Inter, font-weight 400, tracking-wide

## Spacing & Layout
- Section vertical padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Generous whitespace between sections
- Grid gaps: `gap-4 md:gap-8`

## Components

### Buttons
- **Primary (solid accent)**: bg Champagne Gold, text Charcoal, rounded-none, px-8 py-3, uppercase tracking-widest text-xs, hover:bg-opacity-90 transition
- **Secondary (outlined)**: border Charcoal, text Charcoal, rounded-none, px-8 py-3, uppercase tracking-widest text-xs, hover:bg Charcoal hover:text Warm Ivory transition
- **Ghost**: text only, underline on hover

### Cards
- Product card: no border, bg Warm Ivory, subtle shadow on hover (`shadow-sm` to `shadow-md`)
- Image aspect ratios: 3:4 for products, 1:1 for category tiles

### Inputs
- bg White, border Soft Stone, rounded-none, focus:border Champagne Gold, focus:ring-1 focus:ring Champagne Gold

## Animations
- Nav transition: 300ms ease for background/color change
- Card hover: 400ms ease for image swap and shadow
- Button hover: 200ms ease
- Page transitions: 300ms fade
- Scroll reveal: subtle translateY(20px) to 0 with opacity

## Do's and Don'ts
- DO use generous whitespace
- DO use uppercase + wide tracking for product names and CTAs
- DO use thin hairline dividers
- DO keep images warm, editorial, gold-toned
- DON'T use bright or saturated colors
- DON'T use heavy drop shadows
- DON'T crowd elements
- DON'T use rounded corners on buttons/cards (keep sharp for luxury feel)
