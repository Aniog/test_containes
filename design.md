# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base (deep warm charcoal):** `#1C1917` (stone-900) — primary background for hero/dark sections
- **Surface (warm off-white):** `#FAF9F7` — page background, cards
- **Card/Panel:** `#F5F0EB` — slightly warmer card backgrounds
- **Text Primary:** `#1C1917` — headings, body on light
- **Text Secondary:** `#78716C` (stone-500) — muted text, descriptions
- **Text on Dark:** `#FAF9F7` — text over dark backgrounds
- **Accent (warm gold):** `#B8860B` — CTA buttons, links, highlights
- **Accent Hover:** `#9A7209` — darker gold for hover states
- **Accent Light:** `#F5ECD7` — light gold tint for newsletter bg
- **Border/Divider:** `#E7E0D8` — hairline dividers, card borders
- **Star Rating:** `#B8860B` — gold stars

## Typography
- **Headings:** Cormorant Garamond, serif. Uppercase with wide letter-spacing for product names.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide`
  - H2: `text-3xl md:text-4xl font-light tracking-wide`
  - H3 (product names): `text-lg font-medium uppercase tracking-[0.15em]`
- **Body:** Inter, sans-serif. Clean and legible.
  - Body: `text-sm md:text-base font-light`
  - Small/Label: `text-xs uppercase tracking-[0.1em]`
  - Price: `text-base font-medium`

## Spacing & Layout
- Generous whitespace. Sections: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-[#E7E0D8]`

## Buttons
- **Primary CTA:** Solid accent gold bg, white text, uppercase, tracking-wide, rounded-none (sharp corners for premium feel)
  - `bg-[#B8860B] text-white uppercase tracking-[0.15em] text-xs font-medium px-8 py-3 hover:bg-[#9A7209] transition-colors`
- **Secondary/Outline:** Border accent, text accent
  - `border border-[#B8860B] text-[#B8860B] uppercase tracking-[0.15em] text-xs font-medium px-8 py-3 hover:bg-[#B8860B] hover:text-white transition-colors`
- **Pill buttons (variant selector):** `border border-[#E7E0D8] px-4 py-2 text-xs uppercase tracking-wider hover:border-[#B8860B]`

## Cards
- Product cards: no visible border, subtle shadow on hover, image zoom on hover
- `bg-white rounded-none shadow-sm hover:shadow-md transition-all duration-300`

## Images
- Large editorial imagery, warm-lit, gold jewelry on dark/neutral backgrounds
- Product images: 4x3 ratio
- Hero: 16x9 ratio
- UGC cards: 9x16 ratio

## Animations
- Subtle, smooth transitions (300ms ease)
- Image hover zoom: `hover:scale-105 transition-transform duration-500`
- Nav: transparent to solid on scroll
- No bouncy or playful animations

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Keep accent color restrained — gold for CTAs and highlights only
- Ensure strong text contrast on all backgrounds

## Don'ts
- Don't use rounded buttons (sharp corners feel more premium)
- Don't use bright/saturated colors
- Don't use playful or bouncy animations
- Don't use generic e-commerce patterns (no sale badges, no countdown timers)
- Don't use light text on light backgrounds
