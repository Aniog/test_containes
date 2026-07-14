# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark, footer
- `velmora-stone`: #4A4540 — muted text, borders

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — page background, light sections
- `velmora-cream`: #FAF7F2 — card backgrounds, hero overlay
- `velmora-sand`: #E8DDD0 — dividers, subtle borders

### Gold Accent
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover states, warm glow
- `velmora-gold-dark`: #A8854A — pressed states, deep accent

### Text
- `velmora-text-primary`: #1A1714 — headings on light bg
- `velmora-text-secondary`: #4A4540 — body text
- `velmora-text-muted`: #8A7E74 — captions, metadata
- `velmora-text-inverse`: #FAF7F2 — text on dark bg

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: Cormorant Garamond 64–80px, weight 300–400, tracking normal
- H1: Cormorant Garamond 48–56px, weight 400
- H2: Cormorant Garamond 36–42px, weight 400
- H3: Cormorant Garamond 24–28px, weight 500
- Product Name: Cormorant Garamond 20–24px, UPPERCASE, tracking-widest
- Body: Manrope 14–16px, weight 400
- Label/UI: Manrope 11–13px, weight 500–600, tracking-wide
- Price: Manrope 18–20px, weight 600

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Cards: p-6 to p-8
- Hairline dividers: border-velmora-sand, 1px

## Borders & Shadows
- Hairline: `border border-velmora-sand` (1px)
- Card shadow: `shadow-sm` with warm tint
- Hover shadow: `shadow-md`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian` — solid, no radius or very slight
- Secondary: `border border-velmora-gold text-velmora-gold bg-transparent`
- Hover: gold lightens, subtle scale transform
- All caps, tracking-widest, Manrope font, text-xs to text-sm

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Drawer slide: translateX
- Fade in: opacity 0→1

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + letter-spacing for product names
- Warm gold (#C9A96E) as the single accent color
- Generous padding, editorial whitespace
- Thin 1px dividers in sand color
- Soft warm shadows

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on editorial elements
- No generic e-commerce blue/green CTAs
- No cluttered layouts
