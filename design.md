# Velmora Fine Jewelry — Design System

## Brand Identity
- **Brand**: Velmora Fine Jewelry — premium DTC demi-fine gold jewelry
- **Tone**: Quiet luxury, warm, editorial, refined
- **Target**: Women 25–45, gifting and self-purchase, $30–$120 range

## Colors
- **Ink** (deep refined base): `ink-900` (#1a1a1a), `ink-800` (#2a2a2a), `ink-700` (#3a3a3a), `ink-600` (#5a5a5a), `ink-500` (#7a7a7a), `ink-400` (#9a9a9a), `ink-300` (#b0b0b0), `ink-200` (#d0d0d0), `ink-100` (#e8e8e8), `ink-50` (#f5f5f5)
- **Gold** (warm metallic accent): `gold-700` (#8a6e3d), `gold-600` (#a8883d), `gold-500` (#c9a84e), `gold-400` (#d4b96a), `gold-300` (#e0cd8a)
- **Cream** (light background): `cream` (#f5f0eb), `cream/90`, `cream/80`, etc.
- **Charcoal** (dark text): `charcoal` (#2c2c2c)

## Typography
- **Headings & Product Names**: Cormorant Garamond (serif), light weight (300), uppercase, wide letter-spacing (0.1–0.2em)
- **Body & UI**: Inter (sans-serif), light weight, clean
- **Product names**: UPPERCASE with `tracking-widest`
- **Section labels**: Uppercase, tiny, wide tracking, e.g. `text-xs uppercase tracking-[0.25em]`

## Spacing & Layout
- **Generous whitespace**: `py-16 lg:py-24` for sections
- **Max width**: `max-w-7xl mx-auto` with `px-4 sm:px-6 lg:px-8`
- **Thin hairline dividers**: `h-[1px] bg-gold-400` or `border-t border-ink-100`

## Borders & Dividers
- Thin hairline separators (`w-12 h-[1px]`)
- Subtle borders (`border-ink-100`, `border-ink-200`)
- No rounded corners on cards/buttons (keeps editorial feel)

## Buttons
- **Primary**: `bg-ink-900 text-cream hover:bg-ink-800` — solid, uppercase, tracking-widest, text-xs, px-10 py-4
- **Outline**: `border border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-cream` — uppercase, tracking-widest, text-xs, px-8 py-3
- **Accent** (newsletter): `bg-gold-600 text-cream hover:bg-gold-700`

## Transitions & Animations
- `transition-all duration-300` for interactive elements
- `transition-all duration-700` for image hover scales
- `group-hover:scale-105` for product image zoom
- `animate-slide-down` for mobile drawer
- Smooth scroll behavior

## Product Cards
- `aspect-[3/4]` ratio
- Image on hover overlay effect
- Badge (Bestseller, New, Most Popular) in top-left corner
- Quick-add cart button bottom-right on hover
- Star rating below price

## Image Guidelines
- Editorial jewelry photography — warm-lit, gold jewelry on dark or neutral backgrounds
- Use Unsplash images as placeholders (jewelry-focused)
- Hero: full-bleed, close-up of jewelry on model
- Category tiles: product-focused with warm lighting

## DO
- Use warm, editorial imagery
- Keep generous whitespace
- Use thin dividers between sections
- Keep text readable with high contrast
- Use uppercase for product names
- Use subtle hover transitions
- Responsive, mobile-first design

## DON'T
- Use loud, discount-looking colors or badges
- Overcrowd sections
- Use rounded corners (keep sharp/editorial)
- Use generic e-commerce styling
- Use low-contrast text that blends into backgrounds