# Velmora Fine Jewelry — Design System

## Color Palette
- **Ivory (Background):** `#FAF8F5` — Primary page background, warm and luxurious
- **Cream (Surface Alt):** `#F5F0EA` — Section backgrounds, card backgrounds
- **Warm Black (Text):** `#1A1613` — Primary text, headings, dark UI elements
- **Gold (Accent):** `#C6A355` — Primary accent, CTAs, highlights
- **Gold Light:** `#D4B96A` — Hover states on gold elements
- **Gold Dark:** `#A88B3D` — Active states, secondary gold
- **Gold Muted:** `#8B7355` — Subtle gold accents
- **Surface (White):** `#FFFFFF` — Cards, elevated surfaces
- **Border:** `#E8E2DA` — Dividers, input borders, subtle lines
- **Muted Text:** `#6B6560` — Secondary text, descriptions
- **Warm Gray:** `#9B9488` — Tertiary text, placeholders

## Typography
- **Headings:** Cormorant Garamond (serif) — elegant, editorial, luxury feel
- **Body/UI:** Inter (sans-serif) — clean, readable, modern
- **Product Names:** Uppercase, letter-spacing: 0.15em, font-family: serif
- **Section Labels:** Uppercase, letter-spacing: 0.25em, font-size: 12px, color: gold

## Spacing
- Generous whitespace between sections (py-16 to py-24 on desktop)
- Consistent max-width container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section headers always centered with gold divider line (w-12 h-px bg-gold mx-auto)

## Components
- **Buttons:** 
  - Primary: `bg-warm-black text-white` with hover `bg-gold-dark`
  - Secondary: `border border-warm-black` with hover `bg-warm-black text-white`
  - Accent: `bg-gold text-warm-black` with hover `bg-gold-light`
  - All: uppercase, tracking-[0.12em], text-xs, font-semibold
- **Cards:** White bg, subtle border, hover shadow transition
- **Inputs:** Border-border, focus:border-gold, clean minimal style
- **Dividers:** `h-px bg-border` — thin hairline separators

## Animations
- `animate-fade-in`: 0.6s ease-out opacity transition
- `animate-slide-up`: 0.5s ease-out with translateY
- `animate-slide-in-right`: 0.3s ease-out from right (cart drawer)
- Hover: smooth scale on images (duration-700), color transitions (300ms)

## Image Treatment
- Use stock images via data-strk-img/data-strk-bg system
- Warm gold jewelry on dark/neutral backgrounds
- Generous aspect ratios: 1:1 for products, 3:4 for categories, 9:16 for UGC, 16:9 for hero

## Don'ts
- No bright/bold accent colors beyond gold
- No rounded corners on product cards (keep sharp/editorial)
- No heavy shadows or drop shadows
- No busy backgrounds or patterns
- No discount/sale badges that look cheap
- No generic e-commerce feel — keep it editorial/luxury
