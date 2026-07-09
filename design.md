# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind named colors)
- `cream` (#FAF7F2) — page background, light surfaces
- `charcoal` (#1A1A1A) — primary text, headings
- `gold` (#C9A96E) — accent, CTAs, highlights
- `gold-dark` (#A8854A) — hover states for gold
- `warm-gray` (#6B6460) — secondary/body text
- `stone` (#E8E2DA) — borders, hairline dividers, subtle backgrounds
- `espresso` (#2C2420) — dark sections (footer, hero overlays)

## Typography
- Headings / product names: `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- Body / UI: `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, `tracking-[0.15em]`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Hairline dividers: `border-t border-stone`

## Components
- Buttons (primary): `bg-gold text-white hover:bg-gold-dark` with `px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-colors`
- Buttons (outlined): `border border-gold text-gold hover:bg-gold hover:text-white`
- Cards: no visible border, subtle `shadow-sm hover:shadow-md` transition
- Product names on cards: serif, uppercase, tracking-wide

## Do's
- Use large editorial imagery
- Maintain generous whitespace
- Use thin hairline dividers (1px, stone color)
- Subtle hover transitions (300ms)
- Soft shadows on cards

## Don'ts
- No bright/neon colors
- No heavy borders or thick outlines
- No cramped layouts
- No generic e-commerce feel
- No discount badges or loud sale banners
