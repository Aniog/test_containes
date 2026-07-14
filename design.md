# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest surface, cards on light bg
- `linen`: #EDE8DF — subtle dividers, borders on light

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold
- `gold-muted`: #E8D9B8 — very light gold tint for backgrounds

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6560 — secondary/caption text
- `ink-faint`: #9E9890 — placeholder, disabled

### Semantic
- `success`: #4A7C59
- `error`: #9B3A3A

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- `text-xs`: 0.75rem — labels, badges
- `text-sm`: 0.875rem — captions, meta
- `text-base`: 1rem — body
- `text-lg`: 1.125rem — lead text
- `text-xl`: 1.25rem — subheadings
- `text-2xl`: 1.5rem — section headings (sans)
- `text-3xl`: 1.875rem — section headings (serif)
- `text-4xl`: 2.25rem — page headings
- `text-5xl`: 3rem — hero subhead
- `text-6xl`: 3.75rem — hero headline
- `text-7xl`: 4.5rem — large editorial

### Product Names
Always: `font-serif uppercase tracking-widest text-ink`

### Section Headings
`font-serif font-light text-3xl md:text-4xl tracking-wide text-ink`

## Spacing
Generous whitespace. Section padding: `py-16 md:py-24`. Card gaps: `gap-6 md:gap-8`.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Subtle: `shadow-sm` with warm tint
- Card hover: `shadow-md` transition

## Buttons

### Primary (Gold Solid)
`bg-gold text-cream font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`

### Secondary (Outlined)
`border border-gold text-gold font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold hover:text-cream transition-all duration-300`

### Ghost (Dark)
`border border-ink text-ink font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-ink hover:text-cream transition-all duration-300`

## Animations
- Hover transitions: `duration-300 ease-out`
- Image zoom on hover: `scale-105 duration-500`
- Fade in: `opacity-0 → opacity-100 duration-500`
- No bouncy or playful animations — everything is smooth and restrained

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide tracking for product names
- Keep backgrounds warm (parchment, cream) or deep (obsidian)
- Use gold accent sparingly — it should feel precious
- Generous padding and whitespace
- Thin 1px borders, never thick
- Large editorial images

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (too casual)
- No drop shadows that look "web 2.0"
- No generic blue links
- No crowded layouts
- No Comic Sans, Roboto, or system fonts for headings
