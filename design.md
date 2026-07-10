# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE7D9 — card backgrounds, section alternates
- `sand`: #D4C9B5 — borders, dividers, hairlines

### Gold Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E2C98A — hover states, warm glow
- `gold-dark`: #A8854A — pressed states, deep accent

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A7068 — secondary text, captions
- `whisper`: #A89E94 — placeholder, disabled

### Semantic
- `surface`: #FFFFFF — card surfaces
- `overlay`: rgba(26,23,20,0.6) — image overlays

## Typography

### Fonts
- Headings: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Manrope" (sans-serif) — clean, modern

### Scale
- Display: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- H1: 3xl–4xl, Cormorant Garamond, font-light
- H2: 2xl–3xl, Cormorant Garamond, font-light
- H3: xl–2xl, Cormorant Garamond, font-normal
- Product Name: sm–base, Manrope, font-medium, UPPERCASE, tracking-[0.15em]
- Body: sm–base, Manrope, font-normal, leading-relaxed
- Caption: xs–sm, Manrope, font-normal, text-muted
- Button: xs–sm, Manrope, font-medium, UPPERCASE, tracking-[0.12em]

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-4 md:px-8
- Card gap: gap-4 md:gap-6
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: border-sand (1px)
- Card borders: border border-sand/60
- Rounded: rounded-none (sharp, editorial) or rounded-sm for pills

## Shadows
- Card hover: shadow-[0_8px_32px_rgba(201,169,110,0.12)]
- Drawer: shadow-[-8px_0_40px_rgba(26,23,20,0.15)]

## Buttons
- Primary (solid): bg-gold text-obsidian hover:bg-gold-light, uppercase tracking-widest, py-3 px-8
- Secondary (outline): border border-gold text-gold hover:bg-gold hover:text-obsidian
- Ghost: text-ink hover:text-gold, no border

## Transitions
- Default: transition-all duration-300 ease-out
- Hover image: scale-105 duration-500
- Nav: duration-200

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and button labels
- Use gold accent sparingly — it should feel precious
- Generous whitespace between sections
- Thin hairline dividers (1px, sand color)
- Warm, editorial image treatment

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on main containers (keep editorial/sharp)
- No generic e-commerce blue/green CTAs
- No crowded layouts
