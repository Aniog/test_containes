# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Surface (ivory):** `#F5F0E8` — slightly warmer for cards and sections
- **Foreground (charcoal):** `#1A1A1A` — primary text
- **Muted text:** `#6B6560` — secondary/body text
- **Accent (gold):** `#B8860B` — warm dark gold for CTAs, links, accents
- **Accent hover:** `#9A7209` — darker gold on hover
- **Accent light:** `#D4A843` — lighter gold for subtle highlights
- **Border:** `#E8E2D9` — warm hairline dividers
- **Dark section:** `#1A1A1A` — for contrast sections (newsletter, footer)
- **Dark muted:** `#A39E98` — muted text on dark backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — weights 400, 500, 600, 700
- **Body / UI:** `Inter`, sans-serif — weights 300, 400, 500
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Section headings:** Normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Heading: `font-serif text-foreground`
- Body: `font-sans text-muted`
- Accent button: `bg-accent text-white hover:bg-accent-hover`
- Outlined button: `border border-accent text-accent hover:bg-accent hover:text-white`
- Card: `bg-surface border border-border`
- Divider: `border-t border-border`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers (1px, border-border color)
- Subtle hover transitions (duration-300, ease-in-out)
- Soft shadows on cards (shadow-sm)
- Premium button feel (solid accent or outlined)

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
