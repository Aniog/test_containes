# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind tokens)
- `cream` — #FDFBF7 — page background
- `charcoal` — #1C1917 — primary text, headings
- `gold` — #C9A96E — accent, CTAs, highlights
- `gold-dark` — #A67C52 — hover states for gold
- `taupe` — #8B7D6B — secondary/muted text
- `warm-gray` — #E8E2DA — borders, hairline dividers
- `stone` — #F5F0EA — card/section backgrounds
- `deep` — #2C2420 — dark sections (footer, hero overlay)

## Typography
- Headings / product names: `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- Body / UI: `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, tracking-widest (letter-spacing: 0.15em)
- Hero headlines: text-4xl md:text-6xl lg:text-7xl font-serif font-light
- Section titles: text-2xl md:text-3xl font-serif
- Body: text-sm md:text-base font-sans text-taupe

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Hairline dividers: border-t border-warm-gray

## Components
- Buttons (primary): bg-gold text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors
- Buttons (outline): border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest hover:bg-charcoal hover:text-cream transition-colors
- Cards: no border-radius, subtle shadow-sm on hover, transition-shadow
- Images: object-cover, aspect ratios maintained

## Do's
- Use generous whitespace between sections
- Use serif for all headings and product names
- Keep UI elements minimal and refined
- Use gold accent sparingly — CTAs and highlights only
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, shadow, translate-y)

## Don'ts
- No rounded corners on cards (keep editorial/sharp)
- No bright/saturated colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount-style badges or loud sale banners
- No generic stock photography feel
