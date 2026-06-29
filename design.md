# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Target**: Women 25–45, gifting and self-purchase, $30–$120 price point.

## Color Palette
- **Background**: `#FAF7F2` — warm off-white (main page bg)
- **Surface**: `#FFFFFF` — white (cards, modals)
- **Deep**: `#1A1612` — near-black warm (nav, footer, text)
- **Accent**: `#B8860B` — dark goldenrod (CTAs, highlights, links)
- **Accent Hover**: `#9A7209` — deeper gold
- **Muted**: `#8C8279` — warm gray (secondary text, dividers)
- **Muted Light**: `#E8E2DA` — warm light gray (borders, backgrounds)
- **Cream**: `#F5F0E8` — warm cream (alternate sections)

## Typography
- **Headings**: Cormorant Garamond, serif. Uppercase with wide letter-spacing for product names.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide`
  - H2: `text-3xl md:text-4xl font-light tracking-wide`
  - H3: `text-xl md:text-2xl font-light tracking-wider uppercase` (product names)
- **Body**: Inter, sans-serif. Clean and legible.
  - Body: `text-sm md:text-base font-normal`
  - Small: `text-xs font-medium tracking-wider uppercase`
- **Font Weights**: Light (300) for headings, Regular (400) for body, Medium (500) for UI elements

## Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Card padding: `p-4 md:p-6`
- Gap between grid items: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline dividers: `border-t border-[#E8E2DA]`
- Card borders: `border border-[#E8E2DA]` or none with shadow
- Button borders: `border border-[#B8860B]`

## Shadows
- Subtle: `shadow-sm` or `shadow-[0_1px_3px_rgba(0,0,0,0.06)]`
- Cards: `shadow-[0_2px_8px_rgba(0,0,0,0.04)]`
- Hover: `shadow-[0_4px_16px_rgba(0,0,0,0.08)]`

## Buttons
- **Primary (Accent)**: `bg-[#B8860B] text-white hover:bg-[#9A7209]` — solid gold
- **Secondary (Outlined)**: `border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white`
- **Ghost**: `text-[#1A1612] hover:text-[#B8860B]`
- All buttons: `px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-300`

## Transitions
- Default: `transition-all duration-300`
- Hover lifts: `hover:-translate-y-0.5`
- Image reveals: `opacity-0 group-hover:opacity-100 transition-opacity duration-500`

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide letter-spacing for product names
- Use warm, golden tones throughout
- Keep imagery large and editorial
- Use subtle, refined animations

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy shadows or thick borders
- Don't use sans-serif for headings
- Don't use discount/sale visual language
- Don't crowd elements — let them breathe
- Don't use pure black (#000) — use warm dark (#1A1612) instead
