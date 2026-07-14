# Velmora Fine Jewelry — Visual Style Guide

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Halfway between a fashion-magazine spread and a high-end boutique. The look is restrained, never loud, never discount-feeling.

## Color Palette

### Core tokens
- `ink` `#0E0D0B` — deep warm near-black, primary dark surface
- `bone` `#F6F1E7` — warm ivory, primary light surface
- `cream` `#EFE6D5` — slightly deeper cream, for cards / sections
- `taupe` `#E4DBC9` — soft warm neutral, secondary surface
- `hairline` `#D8CDB7` — for thin dividers on light
- `hairline-dark` `#2A2722` — for thin dividers on dark

### Accent (the only color used for emphasis)
- `gold` `#B89968` — warm brushed metallic gold, primary accent / CTAs / icons
- `gold-soft` `#D4B98A` — lighter gold for hover
- `gold-deep` `#8C7349` — deeper gold for pressed / outline borders

### Text colors
- `ink` on light backgrounds for body / headings
- `bone` on dark backgrounds
- `muted-light` `#7A7368` — secondary text on light
- `muted-dark` `#A89B85` — secondary text on dark

### Rule of thumb
- Pick a surface (`ink` or `bone`), then use the other family for text
- Use `gold` only for emphasis — links on hover, primary buttons, key icons
- Never use saturated red/blue/green for accents. The only chromatic accent is gold.

## Typography

### Font families
- **Serif** — Cormorant Garamond (Google Fonts) — for headlines, product names, editorial pull-quotes
- **Sans** — Inter (Google Fonts) — for body, UI, nav, buttons

### Scale & usage
- Hero headline: `font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]`
- Section title: `font-serif text-3xl md:text-4xl lg:text-5xl font-light`
- Product name: `font-serif text-sm md:text-base uppercase tracking-[0.22em] font-medium` (always uppercase + wide tracking)
- Body: `font-sans text-sm md:text-base leading-relaxed font-normal`
- Caption / micro: `font-sans text-[11px] uppercase tracking-[0.2em]`
- Buttons: `font-sans text-xs uppercase tracking-[0.22em] font-medium`

## Spacing & Layout

- Mobile-first; container max-width `max-w-7xl mx-auto px-5 md:px-8 lg:px-12`
- Generous vertical rhythm: section padding `py-16 md:py-24 lg:py-32`
- Hairline dividers: `border-t border-hairline` (light) or `border-hairline-dark` (dark)
- Grid gaps: `gap-6 md:gap-8 lg:gap-10` (never cramped)

## Components & Patterns

### Buttons
- **Primary**: `bg-ink text-bone hover:bg-gold hover:text-ink transition-colors duration-500` (or inverse: gold bg on dark)
  - Pill-shaped: `rounded-full`, height ~48px desktop
  - Text: uppercase Inter, `tracking-[0.22em]`, `text-xs`
- **Secondary / outline**: 1px gold border, transparent bg, gold text; on hover inverts
- **Underline link**: thin gold underline on hover, no bold

### Cards (product)
- Background `bone`, hairline border
- Image area: `aspect-[4/5]`, warm gold jewelry on dark backdrop
- On hover: secondary image swaps in, quick "Add to Cart" pill slides up
- Title and price stacked under image, generous padding

### Form inputs
- 1px hairline border, focus ring `gold`, no rounded chunky corners — `rounded-sm`
- Inline newsletter input + gold button

### Icons
- Use `lucide-react`. Stroke 1.5px. Never fill colors. Match the surface.

## Imagery
- Editorial warm-lit close-ups of gold jewelry on dark or warm neutral backgrounds
- UGC / Reels: 9:16 vertical cards
- Product: 4:5 portrait
- Hero: 16:9 full-bleed
- Categories: 1:1 squares
- Brand story: 4:5 portrait, image left

## Motion
- Subtle, slow transitions (`duration-500` to `duration-700`, `ease-out`)
- Hover: opacity / color shift; no bouncy springs
- Page elements: simple `opacity` + slight `translate-y` fade-up on mount
- Carousels: smooth scroll-snap on mobile

## Do
- Use the serif for everything editorial (headlines, product names, captions)
- Use letter-spacing `0.2em` for uppercase text
- Keep one accent color: gold
- Use thin 1px dividers liberally
- Allow whitespace to breathe

## Don't
- Don't introduce new accent colors (no red sale tags, no blue links)
- Don't use bold/black weight in the serif
- Don't use icons with fill colors
- Don't crowd — when in doubt, increase padding
- Don't use generic "ecommerce" tropes (no carousels with arrows-only pagination, no star burst badges)
