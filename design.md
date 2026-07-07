# Velmora Fine Jewelry — Design System

Quiet luxury demi-fine jewelry storefront. Warm, editorial, premium-but-accessible.

## Color palette

Primary dark backgrounds:
- `velmora-charcoal` — `#1c1917` (hero, nav solid, footer)
- `velmora-espresso` — `#292524` (section alternates)

Light backgrounds:
- `velmora-ivory` — `#faf8f5` (primary light background)
- `velmora-linen` — `#f3efe8` (subtle section alternates)
- `velmora-cream` — `#efe9df` (accent blocks, newsletter)

Metallic accents (gold):
- `velmora-gold` — `#c8a165` (primary accent, CTAs, highlights)
- `velmora-gold-light` — `#d4b483` (hover states)
- `velmora-gold-dark` — `#a8834a` (active states)

Text:
- `velmora-text-dark` — `#1c1917` (on light backgrounds)
- `velmora-text-light` — `#f5f2ed` (on dark backgrounds)
- `velmora-text-muted` — `#78716c` (secondary text)

UI neutrals:
- `velmora-border` — `#e7e5e4` (hairline dividers on light)
- `velmora-border-dark` — `#44403c` (dividers on dark)
- `velmora-white` — `#ffffff`

## Typography

Headings / product names: `Cormorant Garamond`, serif
- H1: 48–64px, weight 500, line-height 1.1
- H2: 32–40px, weight 500, line-height 1.15
- Product names: uppercase, letter-spacing 0.12em, weight 500

Body / UI: `Inter`, sans-serif
- Body: 16px, weight 400, line-height 1.6
- UI labels: 12–13px, uppercase, letter-spacing 0.08em, weight 500

## Spacing

- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-6` to `gap-8`

## Components

Buttons:
- Primary: solid gold bg, dark text, no radius (or 0), uppercase tracking, hover darkens gold
- Secondary / outline: 1px dark border, transparent bg, hover fills dark with light text
- Ghost nav links: uppercase tracking, hover gold

Cards:
- No border-radius or very subtle (2px)
- Soft shadow on hover: `shadow-lg`
- Hairline border optional

Dividers:
- Hairline `border-t border-velmora-border` or `border-velmora-border-dark`

## Visual effects

- Subtle hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105` over 700ms
- Fade-in on scroll: opacity + translateY

## Do's and Don'ts

Do:
- Use generous whitespace
- Keep product names uppercase with wide tracking
- Use gold sparingly as accent
- Maintain strong contrast for all text

Don't:
- Use bright yellow gold (#ffd700) — keep gold muted and refined
- Use heavy drop shadows
- Use loud discount styling
- Use generic ecommerce blue/red accents
