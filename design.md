# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals (primary surfaces)
- `ivory`: #FAF7F2 — page background, light surfaces
- `linen`: #F2EDE5 — card backgrounds, section alternates
- `sand`: #E8DFD0 — borders, dividers, subtle fills

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter gold
- `gold-dark`: #A8854A — pressed states, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6259 — secondary/muted text
- `ink-faint`: #9C9189 — placeholder, captions

### Semantic
- `success`: #4A7C59
- `error`: #B85C4A

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- `text-display`: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- `text-heading`: 2xl–3xl, Cormorant Garamond, font-normal
- `text-subheading`: xl, Cormorant Garamond, font-normal
- `text-product-name`: sm–base, Cormorant Garamond, UPPERCASE, tracking-widest
- `text-body`: sm–base, Manrope, font-normal
- `text-label`: xs–sm, Manrope, font-medium, tracking-wider, UPPERCASE

## Spacing & Layout
- Max content width: 1280px (`max-w-7xl`)
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-sand` (1px)
- Card borders: `border border-sand`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/tags

## Shadows
- Soft card shadow: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`
- Hover lift: `shadow-[0_8px_32px_rgba(26,23,20,0.12)]`

## Buttons
- **Primary (CTA)**: bg-gold text-obsidian, hover:bg-gold-light, px-8 py-3, tracking-widest uppercase text-xs font-semibold Manrope
- **Outlined**: border border-gold text-gold hover:bg-gold hover:text-obsidian
- **Ghost**: text-ink-muted hover:text-ink underline-offset-4 hover:underline
- Transition: `transition-all duration-300`

## Animations
- Hover transitions: 300ms ease
- Page transitions: subtle fade
- Cart drawer: slide from right 350ms
- Image hover: scale(1.04) 400ms ease

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide tracking for product names and labels
- Warm ivory/linen backgrounds — never pure white or cold grey
- Gold accent sparingly — it should feel precious
- Large editorial imagery with generous padding
- Thin hairline dividers (border-sand)

## Don'ts
- No bright/saturated colors
- No rounded-full on large buttons (pill shape feels cheap)
- No drop shadows that are too heavy
- No cold blue/grey tones
- No tight spacing or cramped layouts
