# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, main page background
- **Surface (ivory):** `#F5F0E8` — card backgrounds, subtle sections
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (warm gold):** `#B8860B` — CTAs, highlights, hover states
- **Accent hover:** `#9A7209` — darker gold for hover
- **Border (hairline):** `#E8E2D9` — thin dividers, card borders
- **Dark section:** `#1A1A1A` — footer, dark blocks

Tailwind config names: `cream`, `ivory`, `charcoal`, `muted`, `gold`, `gold-dark`, `hairline`, `dark`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: subtle border `border-hairline`, no heavy shadows
- Dividers: 1px `border-hairline`

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-dark`, rounded-none (sharp edges), `px-8 py-3`, uppercase tracking-wider text-sm
- Secondary/outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Transitions: `transition-all duration-300`

## Interactions
- Hover on images: subtle scale `hover:scale-105` with `transition-transform duration-500`
- Links: underline on hover, gold color
- Cards: lift on hover with very subtle shadow

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Maintain warm, golden tones throughout
- Use serif for elegance, sans for clarity

## Don'ts
- No heavy drop shadows
- No rounded buttons (use sharp/square edges)
- No bright/neon colors
- No cluttered layouts
- No generic stock photo feel — keep it editorial
