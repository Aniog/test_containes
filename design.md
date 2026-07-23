# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly warmer for cards and sections
- **Foreground (charcoal):** `#1A1A1A` — near-black for primary text
- **Muted text:** `#6B6358` — warm gray-brown for secondary text
- **Accent (gold):** `#B8860B` — rich dark gold for CTAs, links, highlights
- **Accent hover:** `#9A7209` — deeper gold on hover
- **Accent light:** `#F5ECD7` — pale gold for backgrounds/badges
- **Border:** `#E8E0D4` — warm hairline dividers

Tailwind config names: `cream`, `ivory`, `charcoal`, `muted`, `gold`, `gold-hover`, `gold-light`, `border-warm`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 400–700
- **Body / UI:** `Inter` (sans-serif), weights 300–600
- Product names: UPPERCASE, `tracking-[0.2em]`
- Section headings: serif, normal case or uppercase depending on context
- Body: 16px base, line-height 1.6

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle `shadow-sm` or `border border-border-warm`
- Hairline dividers: `border-t border-border-warm`

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-hover`, rounded-none (sharp edges), `px-8 py-3`, uppercase tracking
- Outlined: `border border-gold text-gold` with `hover:bg-gold hover:text-white`
- Transitions: `transition-all duration-300`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers
- Subtle hover transitions (opacity, translate-y)
- Soft shadows on product cards
- Restrained accent color usage

## Don'ts
- No heavy drop shadows
- No rounded buttons (use sharp/square edges)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
