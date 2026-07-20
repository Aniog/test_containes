# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF8F5` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Accent (gold):** `#B8860B` — warm dark gold for CTAs, highlights, accents
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Muted:** `#F5F0EB` — soft warm beige for cards, sections
- **Muted foreground:** `#6B5E53` — warm brown-gray for secondary text
- **Border:** `#E8E0D8` — warm hairline dividers

Tailwind config names: `cream`, `charcoal`, `gold`, `gold-dark`, `muted`, `muted-fg`, `border-warm`

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle shadow or border-warm
- Hairline dividers: `border-t border-border-warm`

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-dark`, rounded-none (square edges for premium feel), `px-8 py-3`
- Secondary/outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Pill variant: `rounded-full` for variant selectors

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105`
- Links: no underline, opacity change on hover

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, golden tone throughout
- Use serif for elegance, sans for clarity

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded corners on primary buttons
- No cluttered layouts
- No generic stock photo feel — keep editorial
