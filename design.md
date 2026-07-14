# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind tokens: `brand-*`)
- `cream` (#FAF7F2) — page background
- `ivory` (#F5F0E8) — card/section backgrounds
- `sand` (#E8DFD3) — borders, hairlines, dividers
- `gold` (#B8956A) — primary accent, CTAs, highlights
- `gold-light` (#D4B896) — hover states, subtle accents
- `gold-dark` (#8B6914) — active/pressed states
- `charcoal` (#2C2C2C) — primary text, dark buttons
- `espresso` (#1A1A1A) — headings, hero overlays
- `muted` (#6B6560) — secondary/body text
- `warm-gray` (#9C9590) — placeholder, disabled

## Typography
- Headings: `font-serif` (Cormorant Garamond), weight 400–600
- Body/UI: `font-sans` (Inter), weight 300–600
- Product names: UPPERCASE, `tracking-product` (0.2em), `font-sans text-xs font-medium`
- Section titles: `font-serif text-3xl md:text-4xl lg:text-5xl`

## Spacing & Layout
- Section padding: `px-5 md:px-10 lg:px-20 py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto`
- Card gaps: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border-t border-brand-sand` (1px)
- Card borders: none or `border border-brand-sand`
- Border radius: minimal (`rounded-none` or `rounded-sm`)

## Buttons
- Primary: `.btn-primary` — dark charcoal bg, cream text, uppercase, tracked
- Outline: `.btn-outline` — charcoal border, transparent bg, fills on hover
- Gold: `.btn-gold` — gold bg, white text, darkens on hover

## Shadows & Effects
- Cards: `shadow-none` or very subtle `shadow-sm`
- Hover: `transition-all duration-300`, scale slightly or reveal overlay
- Images: no border-radius, full-bleed or contained

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, translateY)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded corners on product images
- No bright/saturated colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount/sale-style badges
