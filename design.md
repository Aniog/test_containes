# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory canvas)
- `ivory` (canvas / page background): `#F7F3EC` — warm soft ivory
- `cream` (secondary surface): `#EFE8DC`
- `espresso` (deep base / text / dark sections): `#1F1A15` — warm near-black
- `espresso-soft` (muted text on dark): `#3A322A`
- `gold` (primary accent / CTAs / metallic): `#B08A4F` — refined warm gold
- `gold-deep` (hover / pressed): `#947039`
- `stone` (muted body text on ivory): `#6B6258`
- `hairline` (thin dividers): `#D9CFC0`

Semantic token pairs:
- foreground `#1F1A15` on background `#F7F3EC`
- card-foreground `#1F1A15` on card `#FFFFFF`
- muted-foreground `#6B6258` on muted `#EFE8DC`
- primary `#B08A4F` / primary-foreground `#FFFFFF`
- dark sections: foreground `#F7F3EC` on background `#1F1A15`

Contrast: espresso text on ivory = strong. Gold accent used for CTAs and small details only (never large body text). On dark espresso sections, ivory text is used.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, text-xs.
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px) with `px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Generous whitespace between blocks.
- Thin hairline dividers: `border-t border-[#D9CFC0]`.

## Buttons
- Primary (accent): solid `bg-gold text-white`, `tracking-[0.18em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`, subtle transition.
- Outlined: `border border-espresso text-espresso`, hover `bg-espresso text-ivory`.
- Pill variant buttons (variant selectors): rounded-full border, active = filled gold.

## Cards & Imagery
- Product cards: white background, hairline border, soft shadow on hover, image area 4:5 or 1:1.
- Hover reveals second image + quick "Add to Cart" overlay.
- Editorial full-bleed imagery for hero and story sections.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, stars.
- Use hairline dividers between sections.
- Large whitespace, editorial feel.

## Don'ts
- No loud discount badges, no neon colors.
- No generic blue/purple links.
- No heavy drop shadows (use soft, subtle).
- No all-caps sans-serif for headings (only small UI labels).
- Don't put gold text on ivory for body copy (low contrast) — use espresso/stone.
