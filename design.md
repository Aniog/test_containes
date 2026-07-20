# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette (commit to ONE direction: warm ivory + espresso)
- `ivory` (#F8F4ED) — primary base background, warm off-white that flatters gold
- `ivory-soft` (#FBF8F2) — slightly lighter, for cards / sections
- `espresso` (#1F1812) — deep warm black-brown; used for hero, footer, primary buttons
- `espresso-soft` (#2A1F18) — body text on light, slightly warmer
- `bronze` (#B08855) — restrained metallic accent; CTAs in footer/newsletter, hover state
- `bronze-light` (#C8A578) — hover/secondary accent
- `muted` (#7A6A5D) — secondary text, descriptions
- `hairline` (#E4DACA) — dividers, borders
- `card` (#FFFFFF) — product card surfaces (pure white for clarity)

## Typography
- Headings: `Cormorant Garamond` (300/400/500), elegant high-contrast serif
- Body / UI: `Inter` (300/400/500/600)
- Product names: UPPERCASE Inter 500, tracking 0.15em
- Logo: Cormorant Garamond 400, tracking 0.3em
- Hero headline: Cormorant Garamond 300, 4xl–6xl

## Spacing
- Section vertical padding: 96–128px desktop, 64–80px mobile
- Container max-width: 1440px, padding 24px mobile / 48px desktop
- Generous whitespace around product names and CTAs

## Components
- Buttons: `rounded-none` or `rounded-sm` (premium, not pill), uppercase, tracking-wide
- Primary: bg-espresso, text-ivory, hover:bg-espresso-soft
- Accent outline: border 1px espresso, transparent bg, fill on hover
- Inputs: bottom border only, no boxy rectangles
- Cards: subtle shadow on hover, no hard borders
- Icons: thin, 1.25–1.5 stroke

## Do's
- Use lowercase for body copy; UPPERCASE only for product names and small caps UI labels
- Show 5px breathing room between icon and adjacent text
- Use thin hairline dividers (#E4DACA, 1px) instead of card borders
- Keep accent color usage minimal — one or two moments per page
- Animate with 300–400ms ease-out, never bouncy

## Don'ts
- No bright primary colors (no red, no orange, no neon)
- No drop shadows on default state of cards
- No emoji
- No rounded pill buttons
- No italicized text
- No all-caps body paragraphs
- No mixed serif/sans in product names (always Inter uppercase)
