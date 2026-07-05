# Velmora Fine Jewelry — Design System

## Visual Identity
- Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal** (#1C1917): Main background for hero/dark sections, nav solid state. Tailwind: `stone-900`
- **Warm Cream** (#FAF7F2): Main page background, card backgrounds. Custom: `cream`
- **Rich Gold** (#B8860B): Primary accent — buttons, links, highlights. Custom: `gold`
- **Soft Gold** (#D4A843): Hover state for gold, lighter accents. Custom: `gold-light`
- **Pale Gold** (#F5E6C8): Subtle gold tint for backgrounds. Custom: `gold-pale`

### Neutral Colors
- **Warm White** (#FEFCF9): Card surfaces, text on dark. Custom: `warm-white`
- **Stone** (#78716C): Muted text, secondary info. Tailwind: `stone-500`
- **Light Stone** (#E7E5E4): Borders, dividers. Tailwind: `stone-200`
- **Dark Stone** (#292524): Body text on light backgrounds. Tailwind: `stone-800`

### Semantic
- Success: muted green (#4A7C59)
- Error: muted rose (#9B4444)

## Typography

### Headings — Cormorant Garamond (serif)
- H1: 3.5rem–4rem, font-weight 400, letter-spacing 0.04em, uppercase for product names
- H2: 2.25rem, font-weight 400, letter-spacing 0.02em
- H3: 1.5rem, font-weight 500
- Product names: uppercase, letter-spacing 0.12em

### Body — Inter (sans-serif)
- Body: 0.9375rem (15px), font-weight 400, line-height 1.6
- Small: 0.8125rem (13px)
- Buttons: 0.75rem, font-weight 600, letter-spacing 0.1em, uppercase
- Nav links: 0.8125rem, font-weight 500, letter-spacing 0.08em, uppercase

## Spacing
- Section padding: 5rem vertical (mobile), 7rem (desktop)
- Container max-width: 1280px
- Card gap: 1.5rem
- Component padding: generous — 2rem mobile, 3rem desktop

## Borders & Dividers
- Hairline dividers: 1px solid stone-200
- Card borders: none (use subtle shadow instead)
- Button borders: 1px solid gold for outlined variant

## Shadows
- Cards: `0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)`
- Hover: `0 4px 16px rgba(0,0,0,0.08)`
- Nav solid: `0 1px 3px rgba(0,0,0,0.06)`

## Buttons
- Primary: bg-gold text-warm-white, hover:bg-gold-light, rounded-none, uppercase, tracking-widest
- Secondary: border-gold text-gold, hover:bg-gold hover:text-warm-white, rounded-none
- Transitions: all 0.3s ease

## Images
- Editorial, warm-lit, close-up jewelry photography
- Product cards: 4x5 ratio
- Hero: 16x9 or full-bleed
- Category tiles: 3x4
- UGC cards: 9x16

## Do's
- Use generous whitespace
- Use serif for emotional/editorial moments
- Keep interactions subtle and smooth
- Use gold sparingly as accent
- Ensure strong text contrast on all backgrounds

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons (premium = sharp edges)
- Don't use heavy shadows or gradients
- Don't mix too many font weights
- Don't use generic e-commerce patterns (badges, countdown timers, etc.)
