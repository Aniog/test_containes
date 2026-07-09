# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry — NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette (Defined in tailwind.config.js)
| Token | Hex | Usage |
|-------|-----|-------|
| brand-charcoal | #1a1a1a | Primary text, nav bg, dark backgrounds |
| brand-gold | #c9a96e | Accents, CTAs, hover states, category labels |
| brand-gold-light | #d4b97a | Button hover |
| brand-cream | #faf8f4 | Page background, card backgrounds |
| brand-warm-gray | #6b6b6b | Body text, secondary text |
| brand-mid-gray | #b0b0b0 | Borders, dividers, placeholder states |
| brand-light-gray | #f5f3ef | Section alternation, category tile backgrounds |

## Typography
- **Headings/Logo:** Playfair Display (serif) — `font-serif`
- **Body/UI:** Inter (sans-serif) — `font-sans`
- **Product Names:** UPPERCASE with `tracking-wide` or `tracking-ultra-wide`
- **Micro Labels:** 10-11px, uppercase, `tracking-mega-wide` or `tracking-ultra-wide`

## Spacing
- Section padding: `section-padding` (px-5 sm:px-8 lg:px-12)
- Section vertical padding: py-20 md:py-28
- Max content width: max-w-7xl
- Card gaps: gap-6 md:gap-8

## Components
- **Buttons:** `btn-primary` (gold bg, dark text), `btn-outline` (border-charcoal, charcoal text)
- **Cards:** White bg, subtle shadow on hover, image with overflow-hidden
- **Dividers:** h-px bg-brand-mid-gray/40
- **Trust signals:** 10px uppercase, icon + text, gold icon color

## Animations
- Hover scale on product images: `transition-transform duration-500 group-hover:scale-105`
- Fade-in on scroll: `useScrollReveal` hook with IntersectionObserver
- Cart drawer: translate-x transition
- Navbar: bg transition on scroll (transparent → solid)

## Image System
Uses `@strikingly/sdk` ImageHelper with `data-strk-img` and `data-strk-bg` attributes for stock image integration. Config at `src/strk-img-config.json`.
