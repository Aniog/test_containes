# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, not loud. Generous whitespace, large imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink`        #1A1714  — primary dark surface / text on light (warm near-black)
- `espresso`   #2B2520  — secondary dark surface
- `cream`      #F7F2EA  — primary light surface / page background
- `sand`       #EDE4D3  — muted neutral surface, dividers
- `stone`      #8A7F73  — muted body text on light
- `gold`       #B08D57  — primary accent (warm metallic gold)
- `gold-soft`  #C9A876  — lighter gold for hovers / highlights
- `ivory`      #FBF8F2  — lightest surface (cards on cream)

Text contrast rules:
- On `cream`/`ivory`: use `ink` for headings, `espresso`/`stone` for body. Never use `gold` for body text on light (low contrast) — gold is for accents, buttons, hairlines, small labels.
- On `ink`/`espresso`: use `ivory`/`cream` for text. Gold for accents and small uppercase labels.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Eyebrow / overline labels: UPPERCASE, `text-xs`, `tracking-[0.25em]`, gold or stone.

Font sizes (desktop):
- Hero headline: `text-5xl md:text-7xl`
- Section titles: `text-3xl md:text-4xl`
- Product names: `text-sm md:text-base`
- Body: `text-sm md:text-base`, `leading-relaxed`

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Hairline dividers: `border-t border-sand` (1px)
- Card gaps: `gap-6 md:gap-8`

## Components
- Buttons:
  - Primary (accent): `bg-gold text-ink hover:bg-gold-soft`, uppercase, tracking-wide, `px-8 py-3`, `text-xs`, no border-radius (sharp/editorial) or `rounded-none`.
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-cream`.
  - On dark: `bg-cream text-ink` or `border border-cream text-cream`.
- Product cards: image area `aspect-[4/5]`, hover reveals second image (opacity swap), quick "Add to Cart" button slides up on hover. Name uppercase serif, price sans.
- Pills (variant selector): `border border-stone rounded-full px-4 py-2`, active = `bg-ink text-cream border-ink`.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups. Use `data-strk-img` / `data-strk-bg` system with dynamic text references.

## Do's
- Use generous whitespace.
- Keep accent gold restrained — small labels, buttons, hairlines.
- Uppercase serif for product names with wide tracking.
- Soft, subtle transitions (`duration-300`, `ease-out`).

## Don'ts
- No loud discount banners or generic e-commerce clutter.
- No low-contrast text (gold body text on cream, light text on light).
- No rounded chunky buttons — keep editorial/sharp.
- No magic hex values in JSX — use Tailwind named colors from config.
