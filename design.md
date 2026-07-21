# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking, never generic e-commerce. Generous whitespace, hairline dividers, restrained gold accent, soft transitions.

## Color Palette (warm, sophisticated)
Committed to ONE confident direction: **Warm Charcoal + Cream + Champagne Gold**.

- `ink` — `#1A1614` — Deep warm near-black. Base for dark sections, hero, footer, product image backgrounds.
- `ink-soft` — `#26201D` — Slightly lifted ink for layering.
- `bone` — `#F5F0E8` — Warm cream. Primary page background. Warm, not sterile.
- `bone-soft` — `#EFE8DC` — Slightly deeper cream for alternating sections.
- `champagne` — `#C9A86A` — Primary metallic accent. CTAs, logo marks, highlights. NEVER bright/yellow gold.
- `champagne-deep` — `#A8864D` — Pressed/hover state for gold.
- `brass` — `#8A6E3B` — Secondary metallic. Subtle borders on dark.
- `muted` — `#8A7F73` — Warm taupe. Secondary text on cream.
- `muted-dark` — `#A89B8E` — Secondary text on dark.
- `line` — `#E5DDD0` — Hairline dividers on cream.
- `line-dark` — `rgba(245, 240, 232, 0.10)` — Hairline dividers on ink.

### Contrast & Accessibility
- Body text on bone: `ink` (≥ 13:1)
- Body text on ink: `bone` (≥ 13:1)
- Champagne on ink: used for icons/links only, never body copy (contrast ~5:1, AA Large only)
- Champagne on bone: decorative or large headings only

## Typography
- **Display / Headings / Product names**: `Cormorant Garamond` (Google Fonts). Weights: 300, 400, 500, 600. Italic: 400, 500. Optical sizing.
- **Body / UI / Nav**: `Inter` (Google Fonts). Weights: 300, 400, 500, 600.
- **Product names**: UPPERCASE, `tracking-[0.18em]`, `font-medium` (500), `text-sm` for cards, `text-xl md:text-2xl` on detail.
- **Section overlines (small caps)**: `Inter`, UPPERCASE, `tracking-[0.25em]`, `text-xs`, `text-muted`.
- **Body**: 16px / 1.65 line-height, `text-muted` (NOT ink) for readability on cream.

## Spacing & Layout
- Container: `max-w-7xl` (1280px) for content, full-bleed for hero.
- Section vertical rhythm: `py-20 md:py-28 lg:py-32` for major sections, `py-12 md:py-16` for tight.
- Hairline divider: 1px `border-line` on cream, 1px `border-line-dark` on ink.
- Grid gaps: `gap-6 md:gap-8` for product grid.

## Imagery
- Lifestyle / hero / UGC / brand story / categories: warm-lit, neutral/cream/dark backgrounds, gold jewelry as hero subject.
- Product shots: warm soft light, 1:1 or 4:5 aspect on cream/dark background.
- Use `data-strk-img` / `data-strk-bg` with `[id]` interpolation referencing nearby headings and section titles.

## Buttons
- **Primary (accent)**: solid `ink` background, `bone` text, `tracking-[0.18em]`, `text-xs`, uppercase, `px-8 py-4`. Hover: `ink-soft`. Premium, not aggressive.
- **Gold accent**: `champagne` background, `ink` text. Used sparingly for the hero CTA and "Add to Cart".
- **Outline**: transparent, `1px border-line` (or `border-line-dark`), `text-ink`/`text-bone`, hover fills.

## Motion
- All transitions: 300–400ms, `ease-out`. Subtle, never bouncy.
- Nav: transparent over hero → solid bone with shadow on scroll past 80px.
- Product card hover: secondary image crossfade, gold underline on title.
- Cart drawer: 400ms `ease-out` translate-x.
- Accordion: 300ms height + opacity.

## Do / Don't
- DO use generous whitespace; never crowd elements.
- DO use hairline dividers; avoid heavy borders/shadows.
- DO use UPPERCASE + wide tracking for product names and section overlines.
- DO show two product images per card (main + hover state).
- DO keep accent gold to small, intentional moments.
- DON'T use bright yellow gold or `#FFD700`.
- DON'T use drop shadows on text or heavy card shadows.
- DON'T use rounded-pill buttons (use gentle 2px radius).
- DON'T crowd multiple CTAs in one section.
- DON'T use low-contrast text on photos.
