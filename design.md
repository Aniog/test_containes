# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base (Deep Warm Charcoal):** `#1C1917` — primary background for hero, nav, footer, dark sections
- **Surface (Warm Off-White):** `#FAF7F2` — page background, card backgrounds, light sections
- **Surface Alt (Soft Cream):** `#F5EFE6` — alternate card backgrounds, hover states
- **Foreground (Rich Dark):** `#2C2420` — primary text on light backgrounds
- **Foreground Muted (Warm Gray):** `#8C7E72` — secondary text, captions, labels
- **Accent (Warm Gold):** `#C8A96E` — primary accent, buttons, highlights, links, CTA
- **Accent Hover (Deep Gold):** `#B8944E` — hover state for accent elements
- **Accent Light (Pale Gold):** `#E8D5B0` — subtle gold tint for borders, dividers, backgrounds
- **Border (Hairline):** `#E8D5B0` — thin dividers, card borders
- **White:** `#FFFFFF` — pure white for contrast elements

## Typography
- **Headings / Product Names:** Cormorant Garamond (serif), weights 400/500/600/700
  - Product names in UPPERCASE with wide letter-spacing (tracking-wide / tracking-widest)
  - Hero headlines: 48-64px, section headings: 32-40px, product names: 18-20px
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
  - Body text: 14-16px, UI labels: 12-14px, buttons: 14-16px
- **Line heights:** Headings 1.1-1.2, Body 1.5-1.6

## Spacing & Layout
- Generous whitespace: section padding 80-120px vertical, 24-40px horizontal on mobile
- Max content width: 1280px (container)
- Grid gaps: 24-32px for product grids
- Card padding: 0 (image-first cards), 24px for content cards
- Hairline dividers (1px, accent-light color) between sections

## Component Styles
- **Buttons:**
  - Primary: solid accent gold bg (#C8A96E), dark text (#2C2420), rounded-none or rounded-sm, uppercase, tracking-wide, hover:bg-accent-hover
  - Secondary: outlined (1px accent border), accent text, hover:fill accent bg
  - Padding: 14-16px vertical, 32-48px horizontal
- **Cards:**
  - Product cards: no border, subtle shadow on hover, image-first layout
  - Content cards: warm off-white bg, hairline border optional
- **Links:** accent color, underline on hover only, subtle transition
- **Inputs:** hairline border (#E8D5B0), warm off-white bg, focus:accent border
- **Nav:** transparent over hero → solid (#1C1917) on scroll, hairline bottom border when solid

## Shadows
- Subtle only: `shadow-sm` equivalent — 0 1px 2px rgba(0,0,0,0.05)
- Hover shadow: `shadow-md` — 0 4px 12px rgba(0,0,0,0.08)
- Never heavy or dark shadows

## Animations
- Subtle hover transitions: 200-300ms ease
- Image hover: slight scale (1.02) or second image reveal
- Nav scroll: smooth background transition
- No flashy or bouncy animations

## Do's
- Use generous whitespace
- Keep gold accent restrained — not everywhere
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Ensure strong text contrast on all backgrounds
- Use hairline dividers between sections

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy shadows or thick borders
- Don't use sans-serif for headings
- Don't crowd elements — give them breathing room
- Don't use discount/sale visual language (no red badges, no bold "SALE" text)
- Don't use generic e-commerce patterns (no busy grids, no cluttered sidebars)
