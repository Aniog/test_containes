# Velmora Fine Jewelry — Design System

## Philosophy
Quiet luxury. Warm, editorial, premium demi-fine jewelry. No loud discount vibes. No generic e-commerce templates. Every surface should feel like a boutique storefront.

## Color Palette
- `base` — `#1C1917` (warm near-black) — primary text, nav solid bg, footer
- `cream` — `#FAF8F5` — primary page background
- `gold` — `#C9A962` — accent color for CTAs, stars, hover states, highlights
- `muted` — `#78716C` — secondary text, captions, disabled states
- `hairline` — `#E7E5E4` — borders, dividers, card outlines
- `overlay` — `rgba(28,25,23,0.45)` — image overlays for text legibility
- `white` — `#FFFFFF` — cards, input backgrounds, text on dark sections

## Typography
- Headings / Product names: `Cormorant Garamond`, serif, weight 400–600
  - H1: 48–64px, line-height 1.1, letter-spacing 0.02em
  - H2: 32–40px, line-height 1.15, letter-spacing 0.02em
  - Product names: uppercase, letter-spacing 0.12em, font-size 13–14px
- Body / UI: `Inter`, sans-serif, weight 400–500
  - Body: 15–16px, line-height 1.65
  - Caption / UI labels: 12–13px, letter-spacing 0.05em, uppercase

## Spacing
- Section vertical padding: 80–120px desktop, 56–72px mobile
- Content max-width: 1280px
- Horizontal page padding: 24px mobile, 40px tablet, 64px desktop
- Grid gap: 24px
- Component internal padding: 16–24px

## Borders & Shadows
- Hairline dividers: 1px solid `#E7E5E4`
- Card shadows: `0 1px 3px rgba(28,25,23,0.06)`
- Hover card shadow: `0 8px 24px rgba(28,25,23,0.08)`
- Border radius: 0px for images (editorial), 4px for buttons/inputs, 9999px for pills

## Buttons
- Primary (solid accent): bg-gold, text-white, hover:bg-[#b89a52], px-6 py-3, rounded-sm, uppercase tracking-widest text-xs font-medium
- Secondary (outlined): border-hairline, text-base, hover:border-gold hover:text-gold, px-6 py-3, rounded-sm, uppercase tracking-widest text-xs
- Ghost: text-base, hover:text-gold, no border

## Motion
- Default transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Hover scale on product cards: `scale(1.02)` over 0.4s
- Nav background transition: 0.3s ease
- Image crossfade on product hover: opacity 0.4s
- Cart drawer slide: translateX 0.35s ease-out

## Elevation
- z-index: nav 50, cart drawer 60, modals 70
