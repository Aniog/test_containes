# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FDFBF7` — warm ivory page background
- **Surface (card):** `#FFFFFF` — pure white for cards/modals
- **Dark (text):** `#1C1917` — near-black warm charcoal for headings
- **Body text:** `#44403C` — stone-700 for body copy
- **Muted text:** `#78716C` — stone-500 for captions/secondary
- **Gold accent:** `#C9A96E` — warm muted gold for CTAs, highlights
- **Gold hover:** `#B8943D` — deeper gold on hover
- **Divider:** `#E7E5E4` — stone-200 hairline dividers
- **Dark section:** `#1C1917` — for footer, dark blocks

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif, weight 300–600
- **Body / UI:** `Inter`, sans-serif, weight 300–500
- **Product names:** UPPERCASE, letter-spacing 0.15em–0.2em
- **Section headings:** Serif, normal case or uppercase with wide tracking

## Tailwind Custom Classes
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter
- `text-brand-dark` → #1C1917
- `text-brand-body` → #44403C
- `text-brand-muted` → #78716C
- `bg-brand-cream` → #FDFBF7
- `bg-brand-gold` → #C9A96E
- `text-brand-gold` → #C9A96E
- `border-brand-divider` → #E7E5E4

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Max content width: max-w-7xl (1280px)
- Product grid gaps: gap-6 md:gap-8
- Thin hairline dividers: border-t border-brand-divider

## Components
- **Buttons:** Solid gold bg with dark text, or outlined with gold border. Rounded-none (sharp edges). Uppercase tracking-widest text-xs font-sans font-medium. Hover: darken gold.
- **Cards:** No border, subtle shadow-sm on hover. Rounded-none.
- **Inputs:** Border-bottom only or thin full border, bg transparent.

## Do's
- Use generous whitespace
- Large editorial imagery
- Subtle hover transitions (duration-300)
- Thin hairline dividers between sections
- Restrained use of gold accent

## Don'ts
- No rounded corners on buttons/cards (use sharp edges)
- No bright/saturated colors
- No heavy shadows
- No cluttered layouts
- No discount/sale-style badges
