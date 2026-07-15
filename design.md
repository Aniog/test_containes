# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine gold jewelry for women 25–45. Never loud, never discount-looking, never generic.

## Color Palette

### Backgrounds
- `bg-ivory` `#F7F5F0` — primary page background, warm rice paper
- `bg-cream` `#FAF8F4` — card surfaces, subtle panels
- `bg-espresso` `#2C1A12` — hero/footer dark sections
- `bg-warm-gray` `#E8E4DD` — secondary panels

### Foregrounds
- `text-espresso` `#2C1A12` — primary text, headings
- `text-taupe` `#6B5E55` — body, captions, muted text
- `text-cream` `#FAF8F4` — text on dark backgrounds
- `text-ivory` `#F7F5F0` — secondary text on dark

### Accents
- `gold` `#C6A25F` — primary CTA, highlights, stars, links
- `gold-hover` `#B08D4B` — button/link hover
- `terracotta` `#B56B4F` — newsletter block, secondary accent
- `terracotta-hover` `#9C5A41`

### Utility
- `border` `#E3DDD5` — hairline dividers, card borders
- `border-strong` `#D4CCC1` — input borders
- `shadow-soft` `rgba(44, 26, 18, 0.06)` — subtle shadows

## Typography
- **Headings / product names:** Cormorant Garamond, weights 400–700, uppercase product names with `tracking-[0.2em]` wide letter-spacing.
- **Body / UI:** Inter, weights 300–600.
- Product names: uppercase, wide tracking, serif.

## Spacing & Layout
- Max content width: `1280px` (`max-w-7xl`).
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container horizontal padding: `px-4 sm:px-6 lg:px-8`.
- Grid gaps: `gap-6 md:gap-8`.
- Hairline dividers: `border-b border-[#E3DDD5]` or `bg-[#E3DDD5] h-px`.

## Components

### Buttons
- Primary: solid gold background, cream text, no border-radius (`rounded-none`), uppercase tracking-wide, hover:bg-gold-hover.
- Secondary / outline: transparent bg, espresso border, espresso text, hover:bg-espresso hover:text-cream.
- Ghost: text only with underline offset, hover:text-gold.

### Cards
- White/cream background, no border or `border border-[#E3DDD5]`, soft shadow on hover.
- Product cards: image aspect `4x5`, second image reveal on hover, quick-add button appears on hover.

### Inputs
- `bg-transparent`, `border-b border-[#D4CCC1]`, rounded-none, focus:border-gold, placeholder:text-taupe.

## Animations
- Transitions: `transition-all duration-300 ease-out`.
- Hover lift: `-translate-y-1` with shadow.
- Image crossfade: opacity transition 500ms.
- Nav background: background-color transition on scroll.

## Do's
- Use generous whitespace.
- Keep backgrounds warm and desaturated.
- Use gold sparingly as an accent.
- Ensure all text has strong contrast.
- Use editorial 4x5 and 16x9 imagery.

## Don'ts
- No bright white backgrounds.
- No neon or saturated colors.
- No heavy drop shadows.
- No discount-style badges or starbursts.
