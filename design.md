# Velmora Fine Jewelry — Design System

## Color Palette
- Base: `#0A0A0A` (near-black, backgrounds, footer)
- Surface: `#FAF9F7` (warm off-white, primary background)
- Surface Alt: `#F3F0EB` (slightly warmer sections)
- Text Primary: `#1A1A1A` (body text)
- Text Secondary: `#6B6560` (muted text, captions)
- Accent: `#B28A5B` (warm gold-bronze, CTAs, links, badges)
- Accent Dark: `#8C6B42` (hover state for accent)
- White: `#FFFFFF`
- Hairline: `#E5E2DD` (thin borders, dividers)

## Typography
- Headings: `Cormorant Garamond`, serif. Elegant, editorial, slightly tall x-height.
- Body / UI: `Inter`, sans-serif. Clean, modern, highly legible.
- Product names: UPPERCASE, `letter-spacing: 0.12em`, Cormorant Garamond, weight 500.
- Hero headline: 56–72px desktop, 36–42px mobile, weight 400, line-height 1.1.
- Section titles: 32–40px, weight 400, line-height 1.2.
- Body: 15–16px, weight 400, line-height 1.6.
- Captions / labels: 12–13px, weight 500, letter-spacing 0.08em, uppercase.

## Spacing
- Generous vertical rhythm: sections spaced 80–120px apart on desktop, 56–72px mobile.
- Container max-width: 1280px, centered, with 24px mobile / 48px desktop padding.
- Grid gaps: 24–32px.

## Components
- Buttons:
  - Primary: solid accent `#B28A5B`, white text, no border-radius (square corners), padding 14px 32px, uppercase label, letter-spacing 0.1em.
  - Secondary / outline: 1px hairline border, transparent bg, dark text, same padding.
  - Hover: slight scale (1.02), background darken, transition 250ms ease.
- Cards: no border-radius, subtle 1px hairline border, no heavy shadows. Soft hover lift with `shadow-sm`.
- Pills: rounded-full, 1px border, padding 8px 20px, uppercase 12px.
- Dividers: 1px solid hairline color.

## Imagery
- Warm-lit gold jewelry on dark or neutral backgrounds.
- Editorial, close-up, soft shadows.
- Large hero images, generous cropping.

## Animations
- Subtle fade-in on scroll (opacity 0 to 1, translateY 12px to 0, 400ms ease-out).
- Hover transitions on cards and buttons: 200–300ms ease.
- Nav background transition: 300ms ease.
