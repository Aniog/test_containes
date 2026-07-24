# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, refined. Premium demi-fine jewelry — never loud, never discount-looking, never generic. Think Celine / Mejuri editorial: soft ivory paper backgrounds, deep espresso ink text, burnished antique-gold accents, generous whitespace, hairline dividers.

## Palette (Tailwind tokens — never use raw hex in components)
- `cream`  #FAF6EF — page background (soft warm ivory, flatters gold)
- `sand`   #F1EAE0 — alternating section background
- `ink`    #211A12 — primary text / dark surfaces (deep espresso brown-black)
- `espresso` #4A3F30 — secondary text
- `taupe`  #8A7B66 — muted text, captions, metadata
- `gold`   #A7803F — accent: buttons, stars, hover states, hairline details (burnished antique gold — muted, NOT yellow)
- `gold-deep` #8C6A32 — accent hover / pressed
- `line`   #E3D9C9 — hairline borders and dividers

Contrast rules:
- Body text on cream/sand: `ink` or `espresso` only. Never gold for paragraphs.
- Muted text: `taupe` minimum on cream (passes AA at small sizes only for large text — use for captions/labels, not body).
- On `ink` surfaces: text `cream`, accents `gold`.
- Buttons: solid `ink` with `cream` text, hover → `gold-deep`; or outline `ink`/`gold` variants.

## Typography
- Display/serif: **Cormorant Garamond** (300–600, italic available). Used for hero headline, section headings, product names, logo, prices on PDP.
- Body/UI sans: **Inter** (300–600). Descriptions, buttons, forms, nav, footer.
- Product names: serif, UPPERCASE, `tracking-[0.18em]` (wide letter-spacing).
- Eyebrow labels: sans, uppercase, `text-[11px] tracking-[0.3em] text-taupe`.
- Section headings: `font-serif text-3xl md:text-5xl font-light`.
- Hairline dividers: `border-line` 1px.

## Spacing & layout
- Section padding: `py-16 md:py-24 lg:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace — never crowd. Grid gaps `gap-5 md:gap-8`.
- Cards: no heavy borders — soft shadows `shadow-[0_18px_40px_-24px_rgba(33,26,18,0.35)]`, rounded `rounded-sm` (barely rounded — editorial, not bubbly).

## Motion
- Subtle only: `transition-all duration-300 ease-out`. Hover: image `scale-[1.04]`, cards lift `-translate-y-0.5`.
- Fade-up reveal on scroll for sections (IntersectionObserver).
- Cart drawer slides in from right with soft overlay fade.

## Do's
- Do use serif italic sparingly for editorial captions.
- Do keep accent gold restrained: stars, prices accents, buttons on hover, hairline rules, small labels.
- Do use uppercase + wide tracking for product names and nav links.
- Do keep backgrounds light and warm; dark `ink` only for footer, newsletter block, and toast.

## Don'ts
- Don't use bright/yellow gold, gradients, or saturated colors.
- Don't use heavy drop shadows, thick borders, pill-shaped everything, or bubbly rounded corners.
- Don't use gray-on-gray low-contrast text.
- Don't stack single-column on desktop — grids at `md`/`lg`.
- No magic values: only tokens above; new colors must be added to tailwind.config.js with names.
