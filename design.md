# Design System — Forno & Co. Pizza & Bakery

## Brand Identity
Warm, artisan, rustic-modern. Evokes the smell of fresh bread and wood-fired pizza.
Rich earthy tones balanced with clean white space.

## Color Palette
All hex values are registered in tailwind.config.js as named colors.

| Name        | Hex       | Tailwind token  | Usage                              |
|-------------|-----------|-----------------|-------------------------------------|
| ember       | #C0392B   | `ember`         | Primary CTA, accents, highlights    |
| wheat       | #F5E6C8   | `wheat`         | Section backgrounds, cards          |
| crust       | #8B5E3C   | `crust`         | Secondary text, borders, icons      |
| charcoal    | #1C1C1C   | `charcoal`      | Headings, nav text                  |
| cream       | #FFFDF7   | `cream`         | Page background, card surfaces      |
| smoke       | #6B6B6B   | `smoke`         | Body text, captions                 |
| ash         | #F0EBE1   | `ash`           | Subtle section dividers, hover bg   |

## Typography
- Font family: **Playfair Display** (headings) + **Inter** (body/UI)
- Loaded via Google Fonts in index.html

### Scale
- Display / Hero heading: `text-5xl md:text-7xl font-bold font-playfair text-charcoal`
- Section heading (h2): `text-3xl md:text-4xl font-bold font-playfair text-charcoal`
- Card heading (h3): `text-xl font-semibold font-playfair text-charcoal`
- Body: `text-base font-inter text-smoke leading-relaxed`
- Caption / label: `text-sm font-inter text-crust uppercase tracking-widest`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-6xl mx-auto px-6`
- Card gap: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Dividers: `border-ash`

## Shadows
- Card: `shadow-md hover:shadow-xl transition-shadow`
- Nav: `shadow-sm`

## Buttons
- Primary: `bg-ember text-white rounded-full px-8 py-3 font-semibold hover:bg-red-700 transition-colors`
- Secondary / outline: `border-2 border-ember text-ember rounded-full px-8 py-3 font-semibold hover:bg-ember hover:text-white transition-colors`

## Navigation
- Sticky top nav, white/cream background, `shadow-sm`
- Logo: Playfair Display bold, ember color
- Links: Inter medium, charcoal, hover ember underline

## Sections (single page)
1. **Hero** — full-viewport, background image, overlay, headline + CTA
2. **About** — two-column text + image, warm wheat background
3. **Menu** — tabbed (Pizza / Bakery), card grid with images and prices
4. **Specials** — horizontal scroll or 3-col highlight cards
5. **Gallery** — masonry-style image grid
6. **Testimonials** — quote cards on ash background
7. **Contact / Hours** — two-column, map placeholder + hours table
8. **Footer** — dark charcoal background, white text

## Do's
- Use `font-playfair` for all headings
- Use `text-charcoal` on light backgrounds, `text-white` on dark/ember backgrounds
- Keep generous whitespace between sections
- Use ember as the single accent color; do not introduce other bright colors

## Don'ts
- Do not use blue, purple, or green as accent colors
- Do not use tight line-height on body text
- Do not stack more than 2 columns on mobile
- Do not use arbitrary hex codes in JSX — use named Tailwind tokens only
