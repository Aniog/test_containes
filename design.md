# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #3D3835 — borders, dividers on dark

### Warm Neutrals (primary surfaces)
- `ivory`: #FAF7F2 — main page background, cards
- `cream`: #F2EDE4 — section alternates, subtle fills
- `linen`: #E8E0D4 — hairline dividers, borders

### Gold Accent (THE brand color)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm fills
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #6B6460 — secondary text, captions
- `ghost`: #9E9590 — placeholder, disabled

### Semantic
- `surface`: #FAF7F2 (= ivory)
- `on-surface`: #1A1714 (= ink)

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Sans**: Manrope — body, UI, labels, captions
  - Weights: 300, 400, 500, 600, 700

### Scale
- `display`: Cormorant Garamond 300, 4–6rem, tracking-wide
- `h1`: Cormorant Garamond 400, 3rem
- `h2`: Cormorant Garamond 400, 2.25rem
- `h3`: Cormorant Garamond 500, 1.5rem
- `product-name`: Cormorant Garamond 500, UPPERCASE, tracking-widest
- `body`: Manrope 400, 0.9375rem (15px)
- `caption`: Manrope 400, 0.8125rem (13px)
- `label`: Manrope 600, 0.75rem (12px), UPPERCASE, tracking-widest

## Spacing
Generous whitespace. Section padding: py-20 to py-28 on desktop, py-12 on mobile.
Grid gaps: gap-6 to gap-8. Card padding: p-6.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border-linen` with subtle shadow
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md` with warm tint
- Drawer/modal: `shadow-2xl`
- Nav solid: `shadow-sm`

## Buttons
- **Primary (CTA)**: bg-gold text-obsidian, hover:bg-gold-light, px-8 py-3, tracking-widest uppercase text-xs font-semibold Manrope
- **Outlined**: border border-gold text-gold hover:bg-gold hover:text-obsidian
- **Ghost**: text-ink hover:text-gold underline-offset-4

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Drawer slide: `translate-x-full` → `translate-x-0`
- Fade in: `opacity-0` → `opacity-100`

## Do's
- Use Cormorant Garamond for ALL headings and product names
- Product names always UPPERCASE with tracking-widest
- Gold accent sparingly — it should feel precious
- Large editorial images, full-bleed sections
- Thin hairline dividers between sections
- Generous padding around all content

## Don'ts
- No bright/neon colors
- No rounded-full on large buttons (pill shape only for variant selectors)
- No heavy drop shadows
- No generic stock-photo blue/white color schemes
- No crowded layouts — always breathe
