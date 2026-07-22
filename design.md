# Velmora Fine Jewelry — Visual Style Guide

## Brand
Quiet luxury, warm, editorial. Premium demi-fine jewelry — confident, refined, never loud.

## Color Palette — "Burnished Ivory"
- `ivory` `#FAF6EF` — primary page background (warm off-white)
- `bone` `#F0E9DD` — secondary surface
- `espresso` `#1A1814` — primary text, deep contrast surface (warmer than pure black)
- `graphite` `#3D352B` — secondary text on light
- `taupe` `#8B7D6B` — muted text
- `brass` `#A8824A` — primary accent (burnished gold, refined)
- `brass-deep` `#7A5E2F` — hover/active for brass
- `oxblood` `#5C2A2A` — secondary editorial accent
- `hairline` `#E5DDD0` — 1px dividers on ivory
- `smoke` `#6B5F4F` — supporting muted text

**Contrast rules**
- Body text on ivory: `espresso` (#1A1814) — AAA
- Muted text on ivory: `graphite` (#3D352B) — AA+
- Brass on ivory: only for non-text, or large bold text
- White text on espresso surface only

## Typography
- **Serif** (headings, product names in display contexts, brand wordmark): Cormorant Garamond, 300–500
- **Sans** (body, UI, product name UPPERCASE labels): Inter, 300–600
- **Product names**: Inter, UPPERCASE, letter-spacing 0.18em, weight 500
- Hero headlines: Cormorant Garamond, weight 400, italic for emphasis

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-32`
- Max container width: `max-w-7xl` with `px-6 md:px-10`
- Hairline dividers: 1px, `bg-hairline`
- Soft shadow on cards/buttons: `shadow-[0_2px_24px_-12px_rgba(26,24,20,0.25)]`

## Buttons
- **Primary**: solid `bg-espresso text-ivory`, hover `bg-graphite`, transition 300ms
- **Accent**: solid `bg-brass text-ivory`, hover `bg-brass-deep`
- **Outline**: 1px `border-espresso text-espresso`, hover inverted (espresso bg, ivory text)
- All buttons: `px-8 py-3.5`, letter-spacing 0.15em, UPPERCASE, font-medium, no border radius (square) or `rounded-none`

## Imagery
- Warm-lit, close-up gold jewelry on dark/neutral backgrounds
- Editorial portrait style — never catalog cutout feel
- Generous negative space around product

## Motion
- Subtle, never bouncy. Durations 300–500ms, ease-out
- Hover image swaps: 400ms fade
- Nav background fade-in on scroll
- Drawer slide-in: 400ms ease-out

## Do's
- Use serif for emotional/aspirational copy
- Use uppercase Inter labels for product names, buttons, nav
- Leave whitespace — do not crowd
- Use brass sparingly — it's a punctuation, not a flood

## Don'ts
- Never use bright/glowy gold
- Never use heavy drop shadows
- Never use icons that feel "e-commerce generic" — keep them hairline
- Never put brass on white text without espresso backing
- Never use more than 2 typefaces in a single block
