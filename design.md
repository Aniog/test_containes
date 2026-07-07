# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine gold jewelry. No loud sale language, no discount cues, no generic marketplace styling. Generous whitespace, large imagery, restrained typography.

## Color Palette
- **Espresso** `#1C1410` — primary dark background, footer, nav solid state
- **Warm Charcoal** `#2A211C` — cards, secondary surfaces
- **Cream** `#F7F3ED` — primary light background, light text on dark
- **Champagne** `#E8DFD3` — secondary light background, dividers, subtle cards
- **Gold** `#B8935F` — accent CTA, links, star ratings, hover states
- **Soft Gold** `#D4B88F` — highlights, secondary accent
- **Muted Rose** `#C4A79B` — subtle warm neutral for hover backgrounds

Semantic pairings:
- Dark surfaces use `text-cream`
- Light surfaces use `text-espresso`
- Accent text/CTAs use `text-gold` or `bg-gold text-espresso`

## Typography
- **Headings / Product names**: Cormorant Garamond, weights 400–700. Product names uppercase, `tracking-[0.22em]`.
- **Body / UI**: Inter, weights 300–600.
- Hero headline: `text-4xl md:text-6xl lg:text-7xl`.
- Section titles: `text-2xl md:text-3xl lg:text-4xl`.

## Spacing & Layout
- Max container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical spacing: `py-16 md:py-24`.
- Hairline dividers: `border-champagne/30` or `border-espresso/10`, 1px.
- Cards: minimal borders, soft shadows on hover, no heavy chrome.

## Components
- **Buttons**:
  - Primary: `bg-gold text-espresso` hover `bg-soft-gold`.
  - Secondary/outline: `border-espresso text-espresso` or `border-cream text-cream` hover `bg-espresso text-cream`.
- **Inputs**: minimal underline or 1px border, focus ring in gold.
- **Product cards**: image-first, uppercase product name, price in gold.
- **Cart drawer**: espresso panel sliding from right, cream text.

## Motion
- Subtle hover transitions: `transition-all duration-500`.
- Image crossfade on product hover: `opacity` transition.
- Page load fades via simple opacity classes.

## Do's and Don'ts
- DO use generous padding and large imagery.
- DO keep text contrast strong (cream on espresso, espresso on champagne).
- DON'T use bright primary colors, heavy drop shadows, or discount-style badges.
- DON'T crowd components; whitespace is part of the brand.
