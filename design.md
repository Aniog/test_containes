# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary
- **Deep Charcoal** `#1C1917` — main text, nav solid bg, footer bg (stone-900)
- **Warm Cream** `#FAF7F2` — page background, card backgrounds (custom)
- **Champagne Gold** `#C9A96E` — accent color, CTAs, highlights, hover states
- **Champagne Gold Dark** `#B08D4F` — accent hover/active state

### Neutral
- **Stone-800** `#292524` — secondary text on light
- **Stone-500** `#78716C` — muted text, placeholders
- **Stone-300** `#D6D3D1` — hairline dividers, borders
- **Stone-100** `#F5F5F4` — subtle section backgrounds
- **White** `#FFFFFF` — card surfaces, modals

### Semantic
- **Success** `#4A7C59` — confirmation messages
- **Error** `#B44B4B` — error states

## Typography

### Headings & Product Names
- Font: **Cormorant Garamond** (Google Fonts, weights 400, 500, 600, 700)
- Style: Uppercase with wide letter-spacing for product names
- Sizes: h1 3rem/48px, h2 2rem/32px, h3 1.5rem/24px, h4 1.25rem/20px

### Body & UI
- Font: **Inter** (Google Fonts, weights 300, 400, 500, 600)
- Sizes: base 1rem/16px, sm 0.875rem/14px, xs 0.75rem/12px

### Letter Spacing
- Product names: `tracking-[0.2em]` uppercase
- Nav links: `tracking-[0.15em]` uppercase
- Section headings: `tracking-[0.1em]` uppercase
- Body: default

## Spacing & Layout
- Generous whitespace throughout
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl` (1280px)
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-stone-300`

## Buttons
- **Primary (accent)**: bg-champagne, text-white, hover:bg-champagne-dark, tracking-wide uppercase, font-medium, px-8 py-3, transition-all duration-300
- **Secondary (outlined)**: border-champagne, text-champagne, hover:bg-champagne hover:text-white, tracking-wide uppercase
- **Subtle**: text-stone-800 underline-offset-4 hover:underline, tracking-wide uppercase

## Cards
- Product cards: bg-white, subtle shadow on hover, rounded-none (sharp corners for editorial feel)
- Image aspect ratio: 4x5 for product shots
- Hover: second image fade-in, "Add to Cart" overlay slide-up

## Shadows
- `shadow-sm` — default card shadow
- `shadow-md` — hover card shadow
- No heavy drop shadows anywhere

## Transitions
- All transitions: `transition-all duration-300 ease-in-out`
- Hover effects: subtle, refined
- Image crossfade on product hover

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names and nav
- Keep accent color restrained — use for CTAs and small highlights only
- Ensure strong text contrast on all backgrounds

## Don'ts
- Don't use rounded corners on cards or buttons (keep editorial/sharp)
- Don't use bright or saturated colors
- Don't use heavy shadows or gradients
- Don't mix too many font styles
- Don't use emoji in UI
- Don't use discount/sale visual language
