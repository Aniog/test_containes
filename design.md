# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette (Soft Neutral / Editorial)
- `--bg-main`: `#FAF7F2` — warm ivory, primary page background
- `--bg-card`: `#FFFFFF` — pure white for cards, panels
- `--bg-dark`: `#1C1C1C` — charcoal, footer and dark sections
- `--text-primary`: `#1C1C1C` — charcoal black for headings and body
- `--text-secondary`: `#7A6F5B` — warm taupe for muted text, captions
- `--text-inverse`: `#FAF7F2` — warm ivory on dark backgrounds
- `--accent`: `#B8924A` — refined champagne gold for CTAs, links, highlights
- `--accent-hover`: `#A07F3D` — deeper gold on hover
- `--border`: `#E8E2D9` — warm hairline dividers
- `--shadow`: `rgba(28, 28, 28, 0.06)` — soft shadows

## Typography
- **Headings / Logo / Product names**: Cormorant Garamond, weight 400–600. Product names in UPPERCASE with `letter-spacing: 0.12em`.
- **Body / UI / Buttons**: Inter, weight 300–500.
- **Scale**: 
  - H1: 48–64px (mobile 32–40px), line-height 1.1
  - H2: 32–40px (mobile 24–28px), line-height 1.2
  - H3: 20–24px, line-height 1.3
  - Body: 15–16px, line-height 1.6
  - Caption / UI: 12–13px, uppercase, wide tracking

## Spacing
- Generous whitespace. Section padding: 80–120px vertical on desktop, 48–64px on mobile.
- Container max-width: 1280px, centered, with 24px horizontal padding (mobile) / 48px (desktop).
- Thin hairline dividers: 1px solid `#E8E2D9`.

## Components
- **Buttons**: 
  - Primary: solid `#B8924A` background, `#1C1C1C` text (or inverse `#FAF7F2` text), no border-radius or 2px radius. Padding 14px 32px. Uppercase, 12px, letter-spacing 0.1em. Hover: `#A07F3D` background, subtle scale(1.02).
  - Secondary / Outlined: transparent bg, 1px solid `#1C1C1C`, hover: `#1C1C1C` bg + `#FAF7F2` text.
- **Cards**: white bg, no border-radius or 4px, 1px solid `#E8E2D9` or shadow only. Subtle hover lift (`translateY(-4px)` + soft shadow).
- **Inputs**: 1px solid `#E8E2D9`, no radius or 2px, focus ring in `#B8924A`. Background `#FAF7F2` or `#FFFFFF`.
- **Pills / Variant selectors**: 1px solid `#E8E2D9`, rounded-full, padding 8px 20px. Selected state: `#1C1C1C` bg, `#FAF7F2` text.

## Imagery
- Warm gold jewelry on dark or neutral backgrounds.
- Editorial, close-up, soft lighting.
- All product cards use stock image system with `data-strk-img` tags.

## Motion
- Subtle, slow transitions (200–300ms ease-out).
- Hover reveals: opacity fade or gentle scale.
- Cart drawer: slide from right, 300ms.
- Navbar: transparent-to-solid on scroll.

## Do's and Don'ts
- DO use generous whitespace and large imagery.
- DO keep borders thin and hairline.
- DO use uppercase with wide tracking for product names and UI labels.
- DON'T use bright yellow gold or saturated colors.
- DON'T use heavy drop shadows or aggressive borders.
- DON'T use rounded corners larger than 4px.
