# Velmora Fine Jewelry — Design System

## Brand Direction

Quiet luxury, warm, editorial demi-fine jewelry storefront. Premium-but-accessible DTC e-commerce for women 25–45. Avoid loud discount aesthetics; favor restraint, generous whitespace, and warm metallics.

## Color Palette

Use Tailwind custom colors defined in `tailwind.config.js`:

- **Cream** (`#FAF8F5`) — Primary page background. Warm, soft, gallery-like.
- **Parchment** (`#F3EFE8`) — Secondary surfaces: cards, newsletter block, related-products section.
- **Espresso** (`#1C1917`) — Primary text and dark UI surfaces (footer).
- **Warm Stone** (`#78716C`) — Body copy, captions, secondary text.
- **Stone Border** (`#E7E5E4`) — Hairline dividers, borders, input outlines.
- **Gold** (`#B4862C`) — Primary accent: CTAs, links, stars, hover states.
- **Gold Dark** (`#8C6A1F`) — Button hover backgrounds.
- **Gold Light** (`#D4AF37`) — Subtle metallic highlights.
- **Gold Muted** (`#C8B99A`) — Decorative accents.

### Do's
- Pair dark text on light backgrounds for high contrast and accessibility.
- Use gold as an intentional accent, not a background fill.
- Let espresso backgrounds (footer) use cream/stone text.

### Don'ts
- Don't place light text on light surfaces or dark text on dark surfaces.
- Don't introduce arbitrary hex codes outside the palette.
- Don't use neon, bright primary colors, or discount-red tones.

## Typography

- **Headings / product names**: Playfair Display (Google Fonts), elegant serif.
- **Body / UI**: Inter (Google Fonts), clean sans-serif.
- Product names are uppercase with wide letter-spacing (`tracking-widest`, `0.22em`).
- Section headings: large serif (`text-3xl` to `text-5xl`).
- Body copy: `text-sm` to `text-base`, leading-relaxed (`1.7` approx).

## Spacing & Layout

- Max content width: `max-w-7xl` centered.
- Section vertical padding: `py-16` mobile, `py-24`/`py-32` desktop.
- Generous whitespace between sections.
- Thin hairline dividers using `border-stoneborder`.

## Components

### Buttons
- Primary: solid `bg-gold` with white text, uppercase tracking, rounded-sm, hover `bg-gold-dark`.
- Secondary: outlined `border-stoneborder` with espresso text, hover `border-gold` / `text-gold`.
- Pill selectors (tone/quantity): rounded-full borders.

### Cards
- Product cards: image-first, minimal text, star rating, hover reveal of alternate image and quick-add button.
- UGC cards: tall 9:16 aspect ratio with soft caption overlay.
- Category tiles: full-bleed image with label revealed on hover overlay.

### Forms
- Inputs: light background, `border-stoneborder`, focus ring `gold`.
- Select dropdowns: native select styled with custom chevron.

## Imagery

- Warm gold jewelry on dark or neutral backgrounds.
- Editorial close-ups, model shots, and flatlays.
- Stock images populated via the Strikingly image tagging system (`data-strk-img-*`).
- Use contextual text IDs for image queries, ordered from most-specific to broadest.

## Animations

- Subtle, premium transitions (`duration-300` to `duration-500`).
- Fade-in on scroll with `fadeIn` keyframe.
- Hover lifts and opacity changes rather than jarring motion.

## Responsive

- Mobile-first by default.
- Breakpoints: `sm:`, `md:`, `lg:`.
- Navigation collapses to hamburger drawer on mobile.
- Collection filters move to slide-out drawer on mobile.
- Product grid: 2 columns mobile, 3 columns tablet, 4–5 columns desktop.
