# ARTITECT MACHINERY — Visual Style Guide

A precision-engineering brand for sheet-metal folding machines. Tone: industrial confidence, calm, gallery-like restraint. Elegant but user-friendly.

## Color Palette

Hex codes are registered as Tailwind theme colors:

- **ink** `#0E1116` — primary deep ink, used for body text and dark surfaces
- **graphite** `#1F242C` — slightly softer dark, used for hero/CTA backgrounds
- **steel** `#5B6472` — muted slate, used for secondary copy and labels
- **mist** `#E6E8EC` — subtle hairline borders and dividers
- **bone** `#F5F3EE` — page background, warm off-white
- **paper** `#FFFFFF` — card surfaces
- **brass** `#B8884A` — accent (italic words, underlines, small labels)
- **brass-dark** `#8E6632` — hover for brass accents
- **brass-soft** `#EDE3D2` — pale brass background tint

## Typography

- **Serif** (display, headings, italic accents): "Cormorant Garamond" via Google Fonts. Tailwind class `font-serif`. Use weights 400/500/600. Use sparingly with italics for refined punctuation.
- **Sans** (body, UI, nav): Inter via Google Fonts. Tailwind class `font-sans`. Use 400 for body, 500 for nav/buttons, weight 300 for large hero subheads.
- **Eyebrow text**: uppercase Inter, `text-xs` or `text-[10px]`, `tracking-[0.2em]` to `tracking-[0.3em]`, color `text-brass` or `text-steel`.

### Type scale

- Hero h1: `font-serif text-5xl md:text-7xl font-light leading-[1.05]`
- Section h2: `font-serif text-4xl md:text-5xl font-light`
- Card h3: `font-serif text-2xl`
- Body: `text-base text-steel leading-relaxed`
- Lead paragraph: `text-lg md:text-xl text-steel font-light leading-relaxed`

## Layout

- Page max width: `max-w-7xl mx-auto`
- Section horizontal padding: `px-6 lg:px-10`
- Section vertical rhythm: `py-20 md:py-28`
- Grid gutters: `gap-8` to `gap-12`

## Buttons

- Primary: `bg-ink text-bone px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition`
- Secondary: `border border-ink text-ink px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition`
- Tertiary link: brass underline `text-brass border-b border-brass hover:text-brass-dark`

## Borders & dividers

- Hairlines: `border-mist`
- Cards: `border border-mist bg-paper`. Avoid heavy shadows; use crisp 1px borders.

## Do's

- Favor whitespace, single-column hero, balanced grids.
- Use brass only for italic/accent words and small markers — never as a flood color.
- Keep imagery industrial, monochromatic, and architectural.

## Don'ts

- No vivid saturated colors, gradients, or drop-shadows.
- No multiple competing accent colors.
- No light text on light backgrounds. Body text is always `text-ink` or `text-steel` on bone/paper; on graphite/ink surfaces use `text-bone` or `text-mist`.
