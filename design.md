# Velmora Fine Jewelry — Visual Identity

## Brand direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — confident, restrained, never loud or discount-looking. Think atelier, not marketplace.

## Color system
- `ink` (deepest base, warm near-black espresso): `#1A1410` — hero, UGC reel background, footer
- `ink-soft` (slightly lifted dark surface): `#241A14` — overlays, card surfaces over dark
- `cream` (primary light surface, warm ivory): `#F5EFE6` — body sections, product grid background, cart drawer
- `cream-elevated` (soft warm white for cards): `#FAF6F0` — product cards, popovers
- `gold` (antique metallic, primary accent): `#B8954A` — primary CTAs, accent text, hairline dividers
- `gold-deep` (pressed/hover gold): `#8E6E33` — hover state for accent buttons
- `gold-soft` (translucent gold tint): `#B8954A33` — for subtle borders, focus rings
- `text-on-dark`: `#F4ECE1`
- `text-on-dark-muted`: `#B8A990`
- `text-on-light`: `#2A2018`
- `text-on-light-muted`: `#6E5D4E`

Tailwind tokens (use these classes — never hardcode hex):
- Backgrounds: `bg-ink`, `bg-ink-soft`, `bg-cream`, `bg-cream-elevated`
- Text: `text-ink`, `text-ink-soft`, `text-cream`, `text-cream-elevated`, `text-gold`, `text-gold-deep`, `text-muted-dark` (text-on-dark-muted), `text-muted-light` (text-on-light-muted)
- Borders: `border-hairline-dark` (gold at 0.18 alpha), `border-hairline-light` (ink at 0.12 alpha)
- Accent: `bg-gold`, `bg-gold-deep`, `text-gold`

## Typography
- **Serif (display + product names + editorial)**: `Cormorant Garamond`, weights 300, 400, 500, 600
  - Headings: `font-serif`, 400 weight, tight leading
  - Product names: `font-serif`, 500 weight, UPPERCASE, `tracking-[0.18em]`, small size
  - Editorial pull-quotes: `font-serif`, 300 weight, italic for accents
- **Sans (body + UI)**: `Inter`, weights 300, 400, 500, 600
  - Body: `font-sans`, 400, leading-relaxed
  - UI labels: `font-sans`, 500, small caps or wide tracking

Standard sizes:
- Hero headline: `text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05]`
- Section heading: `text-3xl md:text-5xl font-serif font-light`
- Product name: `text-xs md:text-sm font-serif font-medium uppercase tracking-[0.18em]`
- Body: `text-sm md:text-base font-sans font-normal leading-relaxed`
- Eyebrow (label above headings): `text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-gold`

## Layout & spacing
- Generous whitespace. Sections: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-5 md:px-10`
- Hairline dividers: `border-t border-hairline-dark` or `border-hairline-light`
- Grid gaps: `gap-6 md:gap-10` for product grids

## Imagery
- Warm-lit, close-up photography of gold jewelry on dark/neutral
- Hero and UGC sections: deep ink background, models in warm low light
- Product cards: cream background, jewelry in soft warm light with subtle shadow
- UGC reel cards: vertical (9:16), soft caption overlay bottom-left in serif

## Buttons
- **Primary (accent)**: `bg-ink text-cream hover:bg-ink-soft` OR `bg-gold text-ink hover:bg-gold-deep` — solid, full-width or auto, `py-4 px-8`, `text-xs font-sans uppercase tracking-[0.25em]`, subtle scale on hover
- **Secondary (outline)**: `border border-ink text-ink hover:bg-ink hover:text-cream` (or on dark: `border-cream text-cream hover:bg-cream hover:text-ink`)
- **Text link with underline reveal**: gold underline that grows from left on hover

## Interactions
- Hover: 200-300ms ease, subtle (translate -1px, opacity shift, image swap)
- No bouncy springs. Tasteful, restrained motion only.
- Image crossfade on product card hover (200ms)
- Cart drawer slide-in from right (300ms ease-out)
- Accordion expand: 250ms ease

## Don'ts
- Never use a saturated red/orange discount color
- Never use rounded chunky buttons — corners are `rounded-none` or `rounded-sm` only
- Never use emoji
- Never use drop shadows that look 2010s — use very soft, warm shadows only
- Never use bright/saturated backgrounds
- Never use the "free shipping" loud badge style — keep trust signals as quiet typographic strips
- Product names are always UPPERCASE with wide letter-spacing — never title case
