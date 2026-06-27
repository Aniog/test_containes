# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking.

## Colors
- Background: `--color-white-soft` (#FDFCFA) as the main page bg
- Warm accent sections: `--color-cream` (#FAF7F2), `--color-warm-ivory` (#F5F0E8)
- Text: `--color-charcoal` (#2C2C2C) for body/headings
- Muted text: `--color-charcoal-light` (#4A4A4A)
- Gold accent: `--color-gold` (#C9A96E) for CTAs, accents, borders
- Gold hover: `--color-gold-dark` (#A8894E)
- Light dividers: `--color-border-light` rgba(44,44,44,0.08)
- Borders: `--color-border-medium` rgba(44,44,44,0.15)

## Typography
- Headings: 'Cormorant Garamond', Georgia, serif — weight 400-600
- Body/UI: 'Inter', system-ui, sans-serif — weight 300-500
- Product names: UPPERCASE, 0.08em letter-spacing, Cormorant Garamond, 0.8rem

## Spacing
- Generous whitespace throughout. Sections: py-16 md:py-24
- Content max-width: 1280px (mx-auto px-6)
- Cards have subtle shadows on hover (shadow-md transition)

## Buttons
- Primary: bg-gold text-white, hover:bg-gold-dark, px-8 py-3
- Outlined: border border-charcoal, hover:bg-charcoal hover:text-white

## Borders & Dividers
- Thin hairline dividers (1px, `--color-border-light`)
- Subtle borders on cards and inputs

## Transitions
- All interactive elements: transition-all duration-300 ease-out
- Images: hover scale-[1.02] subtle zoom
- Nav: transparent->solid on scroll, duration-300

## Grid
- Product grid: 2 cols mobile, 3-4 cols desktop
- Category tiles: 2 cols mobile, 3 cols desktop