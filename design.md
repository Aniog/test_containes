# Velmora Fine Jewelry — Visual Style Guide

A quiet-luxury, warm, editorial direction for a demi-fine gold jewelry DTC brand.
Mood references: Mejuri, Aurate, Missoma, Vogue editorials, soft natural-light studio photography.

## Tone
- Premium, refined, NOT loud, NOT discount-looking, NOT generic e-commerce.
- Confident negative space. Slow, intentional rhythm. Small, deliberate accents.
- Imagery does the talking — type and UI stay quiet and supportive.

## Color Palette
A warm cream / ivory editorial scheme, anchored by deep espresso text and a muted antique gold accent.

| Token            | Hex       | Tailwind utility (via @theme)   | Usage                                      |
|------------------|-----------|---------------------------------|--------------------------------------------|
| velmora-cream    | #F6F1E8   | bg-velmora-cream                | Page background, large surfaces            |
| velmora-ivory    | #FBF8F2   | bg-velmora-ivory                | Cards, alt surfaces                        |
| velmora-bone     | #ECE4D6   | bg-velmora-bone                 | Soft section background, hairline blocks   |
| velmora-espresso | #1F1A14   | text-velmora-espresso           | Primary text, footer, dark sections        |
| velmora-ink      | #2B2520   | text-velmora-ink                | Body text                                  |
| velmora-mocha    | #6B5E4E   | text-velmora-mocha              | Secondary text, captions                   |
| velmora-stone    | #A89B86   | text-velmora-stone              | Muted text, meta, borders                  |
| velmora-gold     | #B08A4A   | text-velmora-gold / bg-...      | Primary accent (CTAs, links, highlights)   |
| velmora-goldsoft | #D9B47A   | bg-velmora-goldsoft             | Soft accent surfaces, hover backgrounds    |
| velmora-line     | #E4DBC9   | border-velmora-line             | Hairline dividers, input borders           |

Do's:
- Use cream (#F6F1E8) as the dominant page background.
- Use espresso (#1F1A14) for headings on light surfaces.
- Use gold (#B08A4A) sparingly — CTAs, underlines on hover, small price-tag accents.
- Pair espresso surfaces with cream/ivory text for the footer and the brand-story dark blocks.

Don'ts:
- No pure black (#000) or pure white (#FFF).
- No saturated reds/blues for sale tags. Use gold + uppercase serif label instead.
- Never put gold text on cream without bumping weight/size — contrast is tight.
- Don't mix more than one accent color on a single screen.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Letter-spacing tight on large sizes; UPPERCASE + wide tracking for product names (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), 300/400/500. Body text is 15–16px on desktop, 14–15px on mobile.
- Eyebrow labels: Inter, uppercase, `text-[11px]`, `tracking-[0.28em]`, color `velmora-mocha`.

Typography scale (Tailwind):
- Display: `text-5xl md:text-7xl font-serif font-light tracking-tight`
- H2: `text-3xl md:text-5xl font-serif font-light`
- H3: `text-xl md:text-2xl font-serif`
- Product name: `text-sm md:text-base font-sans uppercase tracking-[0.18em]`
- Body: `text-[15px] leading-relaxed text-velmora-ink`
- Eyebrow: `text-[11px] uppercase tracking-[0.28em] text-velmora-mocha`

## Layout & Spacing
- Container max-width: `max-w-[1400px]` with `px-5 md:px-10 lg:px-16`.
- Generous vertical rhythm between sections: `py-20 md:py-28`.
- Grid gaps: `gap-6 md:gap-10` for product grids.
- Hairline dividers (1px) in `border-velmora-line` instead of heavy borders.

## Components
- Buttons:
  - Primary: `bg-velmora-espresso text-velmora-cream hover:bg-velmora-gold transition-colors duration-500`, uppercase, tracking-[0.22em], `px-8 py-4 text-xs`.
  - Outline: `border border-velmora-espresso text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream`.
  - Ghost link: serif italic with thin underline on hover.
- Inputs: transparent background, only a bottom border `border-b border-velmora-line` → focus turns gold.
- Cards: no harsh shadows; rely on whitespace and image. Optional very soft `shadow-[0_20px_60px_-30px_rgba(31,26,20,0.25)]` on hover only.
- Image hover: subtle `scale-[1.03]` over 700ms ease-out.

## Motion
- All transitions: `duration-500 ease-out` or `duration-700`. Never bounce, never spring.
- Reveal on scroll: opacity + 8px translate-y, ~600ms.
- Cart drawer: slide-in from right, 400ms.

## Imagery
- Warm-lit, natural light, close-up macro of gold jewelry on skin or neutral linen/marble.
- Backgrounds for stock-image queries should be neutral / warm / editorial.
- Never use loud studio backdrops, neon, or stock-photo-looking compositions.

## Accessibility
- All text must meet WCAG AA. Espresso on cream = strong contrast. Gold on cream is for accents/large text only, never small body copy.
- Focus rings: `focus-visible:ring-2 focus-visible:ring-velmora-gold focus-visible:ring-offset-2 focus-visible:ring-offset-velmora-cream`.
