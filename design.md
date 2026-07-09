# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette
A deep refined base (warm espresso/charcoal) paired with warm metallic gold
accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for text on light and
  for dark sections / hero overlays.
- `cream` (light base): `#F7F3EC` — warm ivory page background.
- `sand`: `#EDE6DA` — secondary light surface, cards, dividers tint.
- `gold`: `#B08A4F` — primary accent (warm metallic gold). Buttons, links,
  price highlights, hairline accents.
- `gold-deep`: `#8A6A38` — hover / pressed state for gold.
- `stone`: `#6B6258` — muted body text on light.
- `stone-light`: `#9A9089` — placeholder / secondary muted text.

Tailwind named colors (see tailwind.config.js): `ink`, `cream`, `sand`,
`gold`, `gold-deep`, `stone`, `stone-light`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`, muted.

Font loading via Google Fonts `<link>` in index.html.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-ink/10`.

## Buttons
- Primary (accent): `bg-gold text-cream` solid, `hover:bg-gold-deep`,
  uppercase tracking, `px-8 py-3.5`, subtle transition.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- No harsh rounded corners: `rounded-none` or `rounded-sm` only — editorial feel.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` tagging system for all imagery.
- Large editorial hero, 4:3 product cards, 9:16 reel cards, 3:4 category tiles.

## Motion
- Subtle, slow transitions (`duration-500`, `ease-out`).
- Hover reveals second product image with crossfade.
- Nav background fade on scroll.
- No bouncy / playful animations.

## Do's
- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Ensure strong text contrast (ink on cream, cream on ink/gold).
- Generous whitespace.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No large rounded corners or pill-heavy UI (except variant pills).
- No generic e-commerce clutter or discount badges.
- No low-contrast muted text on important data.
