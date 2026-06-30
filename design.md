# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Deep Charcoal** (#1A1714) — Main background for dark sections, nav solid state, footer. Tailwind: `charcoal`
- **Warm Cream** (#FAF7F2) — Light background for content sections, product cards. Tailwind: `cream`
- **Rich Gold** (#C9A96E) — Primary accent, CTAs, highlights, links. Tailwind: `gold`
- **Soft Gold** (#D4B87A) — Hover state for gold, lighter accents. Tailwind: `gold-light`

### Neutral Colors
- **Warm Gray 900** (#2C2825) — Dark text on light backgrounds. Tailwind: `warm-900`
- **Warm Gray 700** (#5C554E) — Secondary text. Tailwind: `warm-700`
- **Warm Gray 400** (#9C948B) — Muted text, placeholders. Tailwind: `warm-400`
- **Warm Gray 200** (#D9D3CC) — Borders, dividers. Tailwind: `warm-200`
- **Warm Gray 100** (#EDE8E2) — Light borders, subtle backgrounds. Tailwind: `warm-100`

### Semantic Colors
- **Error** (#C45B5B) — Validation errors
- **Success** (#6B9B6E) — Confirmation messages

## Typography

### Headings — Cormorant Garamond (serif)
- H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide`
- H2: `text-3xl md:text-4xl font-light tracking-wide`
- H3: `text-2xl md:text-3xl font-light`
- Product names: `font-serif uppercase tracking-[0.2em] text-sm md:text-base`

### Body — Inter (sans-serif)
- Body: `text-base font-normal leading-relaxed`
- Small: `text-sm`
- Caption: `text-xs tracking-wider uppercase`

### Font Loading
- Cormorant Garamond: weights 300, 400, 500, 600
- Inter: weights 300, 400, 500, 600

## Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Card padding: `p-4 md:p-6`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline dividers: `border-t border-warm-200` or `h-px bg-warm-200`
- Card borders: subtle or none, rely on shadow
- Button borders: `border border-gold` for outlined buttons

## Shadows
- Cards: `shadow-sm` or custom `shadow-[0_2px_8px_rgba(26,23,20,0.06)]`
- Hover: `shadow-[0_4px_16px_rgba(26,23,20,0.1)]`

## Buttons
- **Primary (solid)**: `bg-gold text-charcoal hover:bg-gold-light tracking-[0.15em] uppercase text-xs font-medium px-8 py-3 transition-all duration-300`
- **Secondary (outlined)**: `border border-gold text-gold hover:bg-gold hover:text-charcoal tracking-[0.15em] uppercase text-xs font-medium px-8 py-3 transition-all duration-300`
- Rounded: `rounded-none` (sharp corners for premium feel)

## Hover Transitions
- All interactive elements: `transition-all duration-300`
- Product cards: subtle scale on image `hover:scale-[1.02]`
- Links: underline reveal on hover

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase + wide letter-spacing for product names
- Use thin hairline dividers between sections
- Keep accent color (gold) restrained — for CTAs and highlights only
- Ensure strong contrast on all text

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons (premium = sharp corners)
- Don't use heavy shadows
- Don't mix too many font styles
- Don't use generic e-commerce patterns (badges, countdown timers, aggressive sales messaging)
- Don't use low-contrast text
