# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
All hex values are registered as named Tailwind colors.

| Token        | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `velvet`     | #1a1410   | Primary text, nav bg (solid), footer bg    |
| `obsidian`   | #2c2520   | Secondary dark surfaces                    |
| `bark`       | #4a3f35   | Tertiary text, borders on dark bg          |
| `driftwood`  | #8a7a6e   | Muted/secondary text, captions             |
| `parchment`  | #f5f0e8   | Primary page background                    |
| `linen`      | #ede8df   | Section alternating bg, card bg            |
| `champagne`  | #e8dcc8   | Hairline dividers, subtle borders          |
| `gold`       | #c9a96e   | Primary accent — CTAs, highlights, icons   |
| `gold-light` | #dfc08a   | Hover state for gold elements              |
| `gold-dark`  | #a8854a   | Active/pressed gold                        |
| `ivory`      | #faf7f2   | Near-white, hero overlay text bg           |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide text-ivory`
- Section H2: `font-serif text-3xl md:text-4xl font-light tracking-wide text-velvet`
- Product name: `font-serif text-xl font-medium tracking-widest2 uppercase text-velvet`
- Caption/label: `font-serif text-sm italic text-driftwood`

### Body — Inter (sans)
- Body text: `font-sans text-sm text-bark leading-relaxed`
- Nav links: `font-sans text-xs tracking-widest uppercase text-velvet`
- Price: `font-sans text-base font-medium text-velvet`
- Button label: `font-sans text-xs tracking-widest2 uppercase`
- Muted/meta: `font-sans text-xs text-driftwood`

## Buttons

### Primary (solid gold)
`bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 transition-colors duration-300`

### Secondary (outlined)
`border border-gold text-gold hover:bg-gold hover:text-velvet font-sans text-xs tracking-widest2 uppercase px-8 py-3.5 transition-colors duration-300`

### Ghost (dark)
`border border-velvet text-velvet hover:bg-velvet hover:text-parchment font-sans text-xs tracking-widest2 uppercase px-6 py-3 transition-colors duration-300`

## Spacing & Layout
- Section vertical padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Hairline divider: `border-t border-champagne`

## Borders & Shadows
- Card border: `border border-champagne`
- Soft shadow: `shadow-sm` (avoid heavy shadows)
- Hover lift: `hover:-translate-y-0.5 transition-transform duration-300`

## Do's
- Use generous whitespace between sections
- Keep product names UPPERCASE with wide letter-spacing
- Use serif for all editorial/emotional copy
- Use gold sparingly as a true accent
- Thin hairline dividers only (1px, champagne color)
- Subtle hover transitions (300–400ms ease)

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic blue links
- No dark mode (this is a warm light-mode brand)
- No text that blends into background
