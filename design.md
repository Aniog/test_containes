# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly warmer for cards and sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6358` — warm gray-brown for secondary text
- **Accent (gold):** `#B8860B` — dark goldenrod for CTAs, links, highlights
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Border:** `#E8E0D4` — warm light border for dividers

Tailwind config names: `cream`, `ivory`, `charcoal`, `muted`, `gold`, `gold-dark`, `border-warm`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle shadow `shadow-sm`, rounded `rounded-sm`

## Borders & Dividers
- Thin hairline dividers: `border-t border-border-warm`
- No thick borders or heavy outlines

## Buttons
- Primary: `bg-gold text-white hover:bg-gold-dark` — solid accent
- Secondary/outlined: `border border-gold text-gold hover:bg-gold hover:text-white`
- Pill shape for variant selectors: `rounded-full px-4 py-1.5`
- Transitions: `transition-all duration-300`

## Shadows
- Cards: `shadow-sm` or none
- Hover: `shadow-md` with subtle lift `hover:-translate-y-0.5`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for elegance, sans for clarity
- Subtle hover transitions (opacity, translate, shadow)
- Warm tones throughout

## Don'ts
- No neon or saturated colors
- No heavy drop shadows
- No rounded-lg or rounded-xl on cards (keep angular/refined)
- No busy patterns or gradients
- No discount-style badges or flashy sale banners
