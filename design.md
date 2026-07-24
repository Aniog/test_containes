# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F7F3EE — primary light background, page base
- `cream`: #FDF9F4 — card backgrounds, hero overlay
- `linen`: #EDE8E1 — subtle section backgrounds, dividers

### Accent / Gold
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #E2C98A — hover states, warm highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions, metadata
- `whisper`: #9E9189 — placeholder, disabled, subtle labels

### Utility
- `divider`: #E0D9D0 — hairline borders, separators

## Typography

### Fonts
- Headings / Product Names: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, weight 400
- H3: `text-xl md:text-2xl`, Cormorant Garamond, weight 500
- Product Name: `text-xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Caption / Label: `text-xs`, Manrope, weight 500, `tracking-wider`, UPPERCASE

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline: `border border-divider` or `border-[#E0D9D0]`
- Radius: `rounded-none` for editorial cards, `rounded-sm` for buttons, `rounded-full` for pills
- No heavy box shadows — use `shadow-sm` or subtle `shadow-[0_2px_20px_rgba(0,0,0,0.06)]`

## Buttons
- Primary (CTA): `bg-gold text-cream px-8 py-3 text-xs tracking-widest uppercase font-manrope font-medium hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors`
- Ghost: `text-ink text-xs tracking-widest uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right, `translate-x-full` → `translate-x-0`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (parchment, cream, linen)
- Use gold accent sparingly — it should feel precious
- Large editorial imagery, full-bleed sections
- Thin hairline dividers between sections
- Generous padding and whitespace

## Don'ts
- No bright/saturated colors
- No heavy drop shadows or gradients
- No rounded corners on editorial image cards
- No generic sans-serif headings
- No cluttered layouts
- No discount-style badges (SALE!, 50% OFF in red)
