# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white, flatters gold
- **Foreground (charcoal):** `#1A1A1A` — near-black for text
- **Accent (warm gold):** `#B8860B` — dark goldenrod, premium metallic feel
- **Accent light:** `#D4A853` — lighter gold for hover states
- **Muted:** `#F5F0E8` — warm beige for sections
- **Muted foreground:** `#6B5E4F` — warm gray-brown for secondary text
- **Border:** `#E8E0D4` — warm hairline dividers
- **Card:** `#FFFFFF` — pure white cards on cream bg

Tailwind config names: `cream`, `charcoal`, `gold`, `gold-light`, `muted`, `muted-fg`, `border-warm`, `card`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI:** `Inter` (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-sm` or no rounding, thin border `border border-border-warm`
- Hairline dividers: `border-t border-border-warm`

## Buttons
- Primary: `bg-gold text-white hover:bg-gold-light` — solid accent
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-white`
- Pill shape for variant selectors: `rounded-full px-5 py-2`
- Transitions: `transition-all duration-300`

## Shadows & Effects
- Cards: `shadow-none` or very subtle `shadow-sm`
- Hover on product cards: slight scale `hover:scale-[1.02]` + shadow
- Image overlays: subtle gradient for text readability

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (300ms)
- Warm tones throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-lg or pill-shaped cards
- No discount badges or sale stickers
- No cluttered layouts
