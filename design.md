# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud discount styling. Generous whitespace, thin hairlines, subtle transitions.

## Color Palette
- **Base Dark**: `#0F0F0F` — hero overlays, footer, dark sections
- **Base Cream**: `#FAF7F4` — primary page background
- **Accent Gold**: `#B8956A` — CTAs, accent buttons, stars, hover states
- **Accent Gold Hover**: `#A07E55` — button hover
- **Text Primary**: `#1A1A1A` — headings, body text
- **Text Secondary**: `#6B6560` — captions, descriptions
- **Text Muted**: `#9A9590` — placeholders, disabled
- **Hairline**: `#E5E0DA` — dividers, borders
- **Card Surface**: `#FFFFFF` — product cards on cream background
- **Overlay**: `rgba(15,15,15,0.45)` — hero overlay

## Typography
- **Headings / Product names**: Cormorant Garamond, weights 300, 400, 500, 600
  - Product names: uppercase, letter-spacing `0.12em`, font-weight 500
  - Section headings: font-weight 400, letter-spacing `0.02em`
  - Hero headline: font-weight 300, large
- **Body / UI**: Inter, weights 300, 400, 500, 600
  - Body: font-weight 400, line-height 1.65
  - Nav links, buttons, captions: font-weight 500, letter-spacing `0.04em`

## Spacing
- Section vertical padding: `80px` desktop, `48px` mobile
- Content max-width: `1280px`, centered with `px-6` (mobile) / `px-12` (desktop)
- Card gap: `24px`
- Hairline dividers: `1px solid #E5E0DA`

## Component Styles
- Buttons:
  - Primary: bg `#B8956A`, text white, uppercase, tracking-wide, py-3 px-8, hover `#A07E55`, transition 300ms
  - Outline: border `1px solid #B8956A`, text `#B8956A`, hover bg `#B8956A` text white
- Product cards: bg white, subtle shadow on hover, image swap on hover
- Inputs: border `1px solid #E5E0DA`, bg white, focus border `#B8956A`
- Accordion: hairline top/bottom, chevron rotate animation

## Animations
- Hover transitions: 300ms ease-out for colors, shadows, transforms
- Nav background transition: 300ms ease
- Cart drawer slide: 300ms ease-out
- Image hover swap: opacity crossfade 300ms

## Do's and Don'ts
- DO use generous whitespace and large imagery
- DO keep text clearly readable against all backgrounds
- DO use uppercase with wide tracking for product names and CTAs
- DON'T use bright saturated colors
- DON'T use heavy drop shadows or borders
- DON'T crowd elements on desktop
