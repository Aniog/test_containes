# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **cream** `#FDFBF7` — Primary background (warm ivory)
- **cream-dark** `#F5F0EA` — Secondary background / cards
- **charcoal** `#1C1917` — Primary text (stone-900)
- **stone** `#57534E` — Secondary text (stone-600)
- **gold** `#B08D57` — Primary accent (warm muted gold)
- **gold-dark** `#8B6F3A` — Accent hover state
- **gold-light** `#D4B896` — Light gold for borders/subtle accents
- **border** `#E7E0D8` — Warm gray dividers/borders

## Typography
- **Headings / Product Names**: `font-family: 'Cormorant Garamond', serif`
  - Product names: UPPERCASE, letter-spacing: 0.1em–0.15em
  - Hero headlines: font-weight 300–400, large sizes
- **Body / UI**: `font-family: 'Inter', sans-serif`
  - font-weight 300–500
  - Body text: text-sm to text-base

## Tailwind Classes (Do's)
- Backgrounds: `bg-cream`, `bg-cream-dark`, `bg-charcoal`
- Text: `text-charcoal`, `text-stone`, `text-gold`
- Borders: `border-border`, `border-gold-light`
- Buttons: `bg-gold text-white hover:bg-gold-dark` (primary), `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream` (outlined)
- Spacing: generous — `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`
- Transitions: `transition-all duration-300 ease-in-out`

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No heavy drop shadows (use shadow-sm or none)
- No thick borders (use border or border-[0.5px])
- No generic blue links
- No cramped spacing
