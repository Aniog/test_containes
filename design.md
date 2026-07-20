# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. No loud discount aesthetics. Soft, confident, refined.

## Color Palette
- **Base / Background**: `#FAF8F5` — warm off-white, used for page backgrounds
- **Surface**: `#FFFFFF` — pure white for cards, overlays
- **Primary Text**: `#1A1A1A` — near-black for headings and body
- **Secondary Text**: `#6B6B6B` — warm gray for captions, meta text
- **Muted Text**: `#9E9E9E` — lighter gray for placeholders, dividers
- **Accent**: `#B76E3E` — warm copper/bronze for CTAs, highlights, links
- **Accent Hover**: `#9A5A30` — deeper copper on hover
- **Dark Section**: `#1A1A1A` — near-black for footer, newsletter block
- **Dark Section Text**: `#FAF8F5` — warm white on dark backgrounds
- **Hairline**: `#E5E0DA` — warm taupe for borders and dividers
- **Star / Rating**: `#C4956A` — muted gold for star ratings

## Typography
- **Headings / Serif**: `Cormorant Garamond`, weights 400, 500, 600
  - H1: 48–64px, weight 500, line-height 1.1
  - H2: 32–40px, weight 500, line-height 1.2
  - H3: 24px, weight 500, line-height 1.3
  - Product names: uppercase, letter-spacing `0.15em`, weight 500
- **Body / Sans**: `Inter`, weights 400, 500
  - Body: 16px, weight 400, line-height 1.6
  - Caption / UI: 14px, weight 400, letter-spacing 0.02em
  - Nav links: 14px, weight 500, letter-spacing 0.05em, uppercase

## Spacing
- Generous whitespace. Section padding: `80–120px` desktop, `48–64px` mobile.
- Container max-width: `1280px`, centered.
- Grid gaps: `24–32px`.
- Card border-radius: `0px` (sharp editorial edges) or `2px` for subtle softness.

## Components
- **Buttons**: 
  - Primary: solid accent `#B76E3E`, white text, no border-radius, padding `14px 32px`, uppercase, letter-spacing `0.1em`, font-size 13px, weight 500. Hover: background `#9A5A30`, subtle lift.
  - Secondary / Outline: 1px hairline border `#1A1A1A`, transparent bg, dark text. Hover: bg `#1A1A1A`, text white.
- **Cards**: no shadow by default, subtle `1px` hairline border on hover or a very soft shadow `0 4px 24px rgba(0,0,0,0.06)`.
- **Dividers**: 1px hairline `#E5E0DA`.
- **Inputs**: 1px border `#E5E0DA`, no radius, padding `12px 16px`, focus border accent.

## Imagery
- Warm gold jewelry on dark or neutral backgrounds.
- Editorial, close-up, soft lighting.
- Use stock image system with `data-strk-img` tags.

## Motion
- Subtle, slow transitions. `0.3s ease` for hovers.
- Scroll reveal: fade-up, `0.6s ease-out`.
- Cart drawer: slide from right, `0.35s cubic-bezier(0.25, 0.1, 0.25, 1)`.

## Do's
- Use uppercase + wide tracking for product names and nav.
- Keep contrast strong: dark text on light bg, light text on dark sections.
- Maintain generous whitespace around all elements.
- Use thin hairline borders to separate sections.

## Don'ts
- No bright primary colors (no red, no loud blue).
- No rounded pill buttons for primary CTAs.
- No discount badges, no strikethrough prices.
- No cluttered layouts or tight spacing.
