# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on dark/neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors (Dark Scheme)
- `obsidian`: #1A1714 — primary background, deepest dark warm-black
- `charcoal`: #2C2825 — secondary background, card surfaces
- `mink`: #3D3733 — borders, dividers, subtle surfaces
- `stone`: #6B6460 — muted text, placeholders
- `parchment`: #F5F0E8 — primary text on dark, warm off-white
- `cream`: #FAF7F2 — lightest surface, input backgrounds

### Accent Colors (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active state
- `gold-muted`: #C9A96E26 — transparent gold for subtle backgrounds

### Semantic
- `success`: #7A9E7E
- `error`: #C97070

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Manrope" (sans-serif) — clean, modern

### Scale
- `text-display`: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- `text-heading`: 2xl–3xl, Cormorant Garamond, font-normal
- `text-subheading`: xl, Cormorant Garamond, italic
- `text-product-name`: sm–base, Manrope, UPPERCASE, tracking-widest, font-medium
- `text-body`: sm–base, Manrope, font-normal, text-parchment/80
- `text-caption`: xs, Manrope, tracking-wide, text-stone

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 to p-8
- Grid gaps: gap-6 to gap-8

## Borders & Dividers
- Hairline dividers: border-mink (1px)
- Card borders: border border-mink/50
- Rounded corners: rounded-none (sharp, editorial) or rounded-sm for inputs

## Shadows
- Soft card shadow: shadow-[0_4px_24px_rgba(0,0,0,0.3)]
- Hover lift: shadow-[0_8px_40px_rgba(0,0,0,0.4)]

## Buttons
- Primary (CTA): bg-gold text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300
- Secondary (outlined): border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all duration-300
- Ghost: text-parchment/70 hover:text-parchment text-xs tracking-widest uppercase

## Animations
- Transitions: duration-300 ease-out
- Hover scale: hover:scale-[1.02]
- Fade in: opacity-0 → opacity-100 with translate-y-4 → translate-y-0
- Cart drawer: translate-x-full → translate-x-0

## Do's
- Use Cormorant Garamond for all product names, section headings, hero text
- Use UPPERCASE + wide letter-spacing for product names and nav links
- Keep backgrounds dark (obsidian/charcoal) or warm neutral (cream/parchment)
- Use gold sparingly as a true accent — borders, CTAs, highlights
- Generous padding and whitespace everywhere
- Thin hairline borders (1px) for dividers and card edges

## Don'ts
- No bright white backgrounds (#FFFFFF) — use cream/parchment instead
- No generic blue links
- No rounded pill buttons (use sharp or very slightly rounded)
- No heavy drop shadows
- No cluttered layouts — less is more
- No sans-serif for product names or headings
