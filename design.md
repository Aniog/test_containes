# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet-luxury demi-fine jewelry storefront. Warm, editorial, premium-but-accessible. No loud discount cues, no generic marketplace styling. Confidence through restraint.

## Color Palette

| Token            | Hex     | Usage                                          |
|------------------|---------|------------------------------------------------|
| `velmora-cream`  | #FAF8F5 | Primary background, light surfaces             |
| `velmora-champagne`| #F2EEE8 | Subtle section backgrounds, cards              |
| `velmora-linen`  | #E8E2DA | Hairline dividers, borders, subtle separators  |
| `velmora-taupe`  | #A89F94 | Muted text, secondary details                  |
| `velmora-mocha`  | #6B5E51 | Body text, hover states                        |
| `velmora-espresso`| #2C241F| Primary headings, primary text                 |
| `velmora-gold`   | #B58A5F | Accent CTA, links, highlights, rating stars    |
| `velmora-gold-dark`| #9A7046| Accent hover / active states                   |

### Contrast rules
- Primary text on cream/champagne: `velmora-espresso` (#2C241F) for AAA contrast.
- Text on accent gold blocks: `velmora-espresso` or `white` depending on gold shade; use white for high-impact newsletter blocks on dark gold.
- Muted text must stay above 4.5:1; `velmora-mocha` on cream passes.

## Typography

### Fonts
- **Headings / product names / editorial quotes:** `Cormorant Garamond`, serif (Google Fonts: 300, 400, 500, 600, 700).
- **Body / UI / labels / prices:** `Inter`, sans-serif (weights 300, 400, 500, 600).

### Scale
- Display hero: `text-5xl md:text-7xl` Cormorant, font-light, leading-tight.
- Section headings: `text-3xl md:text-4xl` Cormorant, font-normal.
- Product names: uppercase, `tracking-[0.2em]`, `text-xs md:text-sm`, Inter medium.
- Body: `text-sm md:text-base`, leading-relaxed.
- UI labels / buttons: `text-xs uppercase tracking-widest`.

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto` (1280px).
- Section vertical padding: `py-16 md:py-24`.
- Grid gaps: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-velmora-linen`.

## Components

### Buttons
- **Primary (solid):** `bg-velmora-gold text-white hover:bg-velmora-gold-dark` with `px-8 py-3`, `text-xs uppercase tracking-widest`, transition 300ms.
- **Secondary (outline):** `border border-velmora-espresso text-velmora-espresso hover:bg-velmora-espresso hover:text-white`.
- **Ghost:** transparent with underline or icon hover.

### Cards
- Product cards: no border, cream/champagne background, subtle shadow on hover (`shadow-sm hover:shadow-md`), image swap on hover, quick-add overlay.
- Category tiles: full-bleed image, label appears on hover with soft gradient.

### Forms
- Inputs: `border-b border-velmora-linen bg-transparent focus:border-velmora-gold focus:outline-none`.
- Pills (variants): `border border-velmora-linen rounded-full px-4 py-1.5 text-xs uppercase tracking-widest`, active state `bg-velmora-espresso text-white`.

## Imagery
- Warm gold jewelry on dark or neutral backgrounds.
- Use `data-strk-img` and `data-strk-bg` tags for stock-image integration.
- Prefer portrait / close-up crops. Product images 3:4, UGC 9:16, hero background 16:9.

## Animation
- Transitions: `transition-all duration-300 ease-out`.
- Hover image fade: opacity cross-fade 300ms.
- Cart drawer: translate-x slide 300ms.
- Scroll reveal optional; keep subtle.

## Do's and Don'ts
- DO use generous whitespace and large imagery.
- DO keep product names uppercase with wide letter-spacing.
- DO use thin hairline dividers, not heavy borders.
- DON'T use bright primary colors, loud badges, or discount-style red.
- DON'T use single-column desktop layouts.
- DON'T use generic placeholder copy.
