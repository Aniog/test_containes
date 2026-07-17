# Velmora Fine Jewelry — Design System

## Mood & Tone
Quiet luxury, premium demi-fine jewelry. Editorial, refined, warm.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Neutrals (Warm Editorial)
- `cream` (#FAF6F1) — page backgrounds, cards
- `warm-white` (#FDFBF9) — alternate sections, contrast surface
- `charcoal` (#2C2C2C) — primary text, headings
- `dark-charcoal` (#1A1A1A) — footer bg, dark overlay
- `stone` (#8B8580) — secondary/muted text, dividers

### Accent (Gold/Metallic)
- `gold` (#C9A96E) — primary accent, buttons, icons
- `gold-light` (#E8D5A3) — hover state, soft accents
- `gold-dark` (#A8894D) — active state, deeper gold

### Semantic
- `error` (#C73E3E)
- `success` (#2E7D5E)

## Typography
- **Headings / Display**: Playfair Display, serif — used for logo, page headings, product names
- **Body / UI**: Inter, sans-serif — used for navigation, descriptions, buttons, all UI text
- **Product Names**: UPPERCASE with `tracking-widest` class
- **Scale**: h1: text-5xl/sm:text-6xl, h2: text-3xl/sm:text-4xl, h3: text-xl/sm:text-2xl

## Spacing & Layout
- Generous whitespace: section padding py-16 md:py-24, container max-w-7xl mx-auto px-6
- Thin hairline dividers: border-t border-stone/20
- Max content width: 1280px

## Borders & Dividers
- Hairline: border border-stone/10 or border-t border-stone/20
- Thin borders on cards, subtle

## Shadows
- Soft shadow on hover: shadow-sm hover:shadow-md transition-shadow
- No harsh shadows

## Transitions & Hover
- Subtle: transition-all duration-300 ease-out
- Button hover: bg-gold-dark or scale-[1.02]
- Card hover: -translate-y-0.5 shadow-md

## Buttons
- **Primary**: bg-gold text-white px-8 py-3 hover:bg-gold-dark transition
- **Outline**: border border-gold text-gold hover:bg-gold hover:text-white
- Rounded: rounded-none (sharp/square) — clean luxury feel
- Uppercase, tracking-widest, text-sm font-medium

## DO's
- Use warm neutrals as primary backgrounds
- Use gold sparingly as an accent
- Thin dividers, generous whitespace
- Product names in uppercase with wide spacing
- Serif for all headings, sans-serif for body
- Subtle hover transitions
- Full-bleed editorial imagery

## DON'Ts
- No bright/neon colors
- No heavy shadows
- No cluttered layouts
- No discount/coupon aesthetics (exception: newsletter signup)
- No mixed typography styles