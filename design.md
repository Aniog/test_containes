# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — Deep warm black, primary background for hero/dark sections
- `charcoal`: #2C2825 — Secondary dark surface
- `espresso`: #3D3530 — Tertiary dark, card backgrounds in dark mode
- `ivory`: #FAF7F2 — Primary light background, page base
- `cream`: #F2EDE4 — Secondary light surface, card backgrounds
- `linen`: #E8E0D4 — Borders, dividers, hairlines

### Accent / Brand Colors
- `gold`: #C9A96E — Primary brand accent, CTAs, highlights (warm gold)
- `gold-light`: #DFC08A — Hover state for gold
- `gold-dark`: #A8854A — Active/pressed state for gold
- `champagne`: #EDD9A3 — Soft gold tint for backgrounds

### Text Colors
- `ink`: #1A1714 — Primary body text on light backgrounds
- `muted`: #6B6259 — Secondary/muted text
- `subtle`: #9C9189 — Placeholder, captions

## Typography

### Fonts
- **Serif (headings, product names)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI)**: Manrope — clean, modern, readable

### Scale
- Display: 72px / Cormorant Garamond / font-weight 300 / tracking wide
- H1: 56px / Cormorant Garamond / font-weight 400
- H2: 40px / Cormorant Garamond / font-weight 400
- H3: 28px / Cormorant Garamond / font-weight 400
- Product Name: 20px / Cormorant Garamond / UPPERCASE / tracking-widest
- Body: 15px / Manrope / font-weight 400
- Caption: 12px / Manrope / font-weight 400 / tracking-wide

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Container max-width: 1280px, px-6 md:px-12
- Grid gaps: gap-6 to gap-10

## Borders & Dividers
- Hairline dividers: border-linen (1px)
- Card borders: border-linen
- Rounded corners: rounded-none (sharp, editorial) or rounded-sm for pills

## Shadows
- Soft card shadow: shadow-[0_4px_24px_rgba(26,23,20,0.06)]
- Hover shadow: shadow-[0_8px_40px_rgba(26,23,20,0.12)]

## Buttons
- Primary (CTA): bg-gold text-ivory px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-gold-light transition-all
- Outlined: border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs hover:bg-gold hover:text-ivory
- Ghost: text-ink underline-offset-4 hover:underline

## Animations
- Transitions: duration-300 ease-out
- Hover image scale: scale-105 duration-500
- Fade in: opacity-0 → opacity-100 duration-500

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names
- Warm ivory/cream backgrounds for most sections
- Gold accent sparingly — it should feel precious
- Large editorial imagery, full-bleed where possible
- Thin hairline dividers between sections

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (too casual)
- No generic blue links
- No crowded layouts — always breathe
