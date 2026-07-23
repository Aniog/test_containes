# Velmora Fine Jewelry — Design Specification

## Visual Identity
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `warm-black` | `#1C1917` | Primary background for dark sections, nav solid state |
| `warm-charcoal` | `#292524` | Card backgrounds on dark sections, footer |
| `warm-cream` | `#FAF7F2` | Main page background, light sections |
| `warm-ivory` | `#F5F0E8` | Alternate light background, newsletter block |
| `warm-sand` | `#E8DFD0` | Borders, dividers, subtle backgrounds |
| `gold` | `#C9A96E` | Primary accent — buttons, links, highlights, CTA |
| `gold-light` | `#D4BA8A` | Hover state for gold, secondary accent |
| `gold-dark` | `#A8894E` | Active/pressed state for gold |
| `text-primary` | `#1C1917` | Main body text on light backgrounds |
| `text-secondary` | `#57534E` | Secondary/muted text on light backgrounds |
| `text-light` | `#FAF7F2` | Text on dark backgrounds |
| `text-muted-light` | `#A8A29E` | Muted text on dark backgrounds |

## Typography

- **Headings & Product Names:** Cormorant Garamond (serif), weight 400–600
  - Product names: UPPERCASE, `letter-spacing: 0.15em`
  - Section headings: UPPERCASE, `letter-spacing: 0.12em`
  - Hero headline: weight 300, large scale
- **Body & UI:** Inter (sans-serif), weight 400–500
  - Navigation: weight 500, `letter-spacing: 0.08em`, uppercase
  - Buttons: weight 500, `letter-spacing: 0.05em`, uppercase
  - Body text: weight 400, normal tracking
  - Prices: weight 600, normal case

## Spacing & Layout

- Generous whitespace: section padding `py-20 md:py-28`
- Content max-width: `max-w-7xl` (80rem)
- Product grid gap: `gap-6 md:gap-8`
- Hairline dividers: `border-t` with `border-warm-sand` or `border-white/10`
- Card padding: `p-6 md:p-8`

## Component Styles

### Buttons
- **Primary CTA:** Solid gold background (`bg-gold`), warm-black text, uppercase, `tracking-wider`, `px-8 py-3`, rounded-none or `rounded-sm`, hover: `bg-gold-light`
- **Secondary:** Outlined — `border border-gold text-gold`, hover fills gold
- **Pill buttons (variant selector):** `rounded-full`, `border border-warm-sand`, selected: `bg-gold text-warm-black`

### Cards
- Product cards: minimal, white/cream bg, thin border or shadow-none, image dominant
- Hover: second image fade-in, subtle scale or shadow lift
- Quick "Add to Cart" appears on hover overlay

### Navigation
- Sticky, transparent over hero → solid `bg-warm-black/95 backdrop-blur` on scroll
- Logo: serif, uppercase, `tracking-[0.2em]`
- Links: sans-serif, uppercase, `tracking-wider`, `text-sm`
- Mobile: hamburger menu, slide-in drawer

### Images
- Editorial, warm-lit, large format
- Product images: square or 4:3, warm neutral backgrounds
- UGC cards: 9:16 vertical, soft caption overlay

### Animations
- Subtle, smooth: `transition-all duration-300 ease-out`
- Hover lifts: `hover:-translate-y-1`
- Image crossfade on hover
- Cart drawer: slide from right
- No flashy or bouncy animations

## Do's
- Use generous whitespace between sections
- Keep product names in uppercase serif with wide letter-spacing
- Use gold as the single accent color consistently
- Ensure strong text contrast on all backgrounds
- Use hairline dividers between sections
- Keep hover transitions subtle and smooth

## Don'ts
- Don't use bright/saturated colors — stay warm and muted
- Don't use rounded/bubbly UI elements — keep edges sharp or minimally rounded
- Don't overcrowd sections — let imagery breathe
- Don't use generic e-commerce patterns (badges, loud sales banners)
- Don't mix serif and sans-serif randomly — serif for display, sans for UI
- Don't use low-contrast text (ensure all text is clearly readable)
