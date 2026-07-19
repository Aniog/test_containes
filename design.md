# Velmora Fine Jewelry — Design System

## Brand mood
Quiet luxury. Warm. Editorial. Premium demi-fine jewelry.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color palette
- `ivory` (#FAF6F0) — primary background, soft and warm
- `cream` (#F1E9DC) — secondary surface, subtle elevation
- `taupe` (#D9CFC1) — hairlines, borders, dividers
- `mocha` (#8A6F4E) — muted accent text, captions
- `espresso` (#1F1A17) — primary text, dark sections
- `gold` (#B8965A) — restrained metallic accent (CTAs, hover states)
- `gold-soft` (#D4B98A) — softer metallic for subtle accents

Always pair: dark text on light surface (espresso on ivory), light text on dark surface (ivory on espresso).

## Typography
- **Serif**: `Cormorant Garamond` — used for all headlines, hero text, product names, editorial pull-quotes
- **Sans**: `Inter` — used for body copy, UI, buttons, navigation
- **Product names**: UPPERCASE Inter with wide letter-spacing (`tracking-[0.2em]`, weight 500)

Font scale:
- Display (hero h1): Cormorant 64-80px desktop / 40-48px mobile, weight 400
- Section h2: Cormorant 40-48px desktop / 28-32px mobile, weight 400
- Card title: Inter 12-13px, UPPERCASE, tracking 0.2em, weight 500
- Body: Inter 15-16px, weight 400, leading relaxed
- Small / captions: Inter 12-13px, weight 400

## Layout principles
- Generous whitespace: section padding `py-20 md:py-32` for editorial breathing room
- Hairline dividers: 1px solid `taupe` between major sections
- Container max width: 1280px, with `px-6 md:px-10`
- Mobile-first: single column on mobile, 2-3 columns on md+, full grid on lg

## Buttons
- **Primary**: solid `espresso` background, `ivory` text, uppercase Inter, tracking 0.2em, py-4 px-10, subtle hover (lighten bg + tiny letter-spacing shift)
- **Secondary (outline)**: transparent bg, 1px `espresso` border, `espresso` text, same uppercase treatment, hover fills with `espresso`
- **Accent (gold)**: solid `gold` bg, `espresso` text — used sparingly for newsletter / highlight CTAs

## Cards & surfaces
- Product cards: no harsh shadows, subtle hover lift with `shadow-[0_8px_30px_rgba(31,26,23,0.08)]`
- Background tints: `ivory` default, `cream` for alternate sections
- Hairline borders instead of cards where possible (editorial feel)

## Do's
- Pair dark text on light, light text on dark
- Use generous whitespace
- Use thin gold underlines for inline links
- Subtle hover transitions (200-300ms ease)
- Italic Cormorant for editorial pull-quotes
- Image focal points should be warm-lit gold jewelry on neutral skin / dark backgrounds

## Don'ts
- Never use bright/saturated colors
- No drop shadows on text
- No emoji or playful elements
- No aggressive sale-style badges (small "New" / "Bestseller" pill is OK if needed)
- No more than 2 typefaces in one place
- No bright red or saturated green for state
