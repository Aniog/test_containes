# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page background
- **Surface (ivory):** `ivory` → `#F5F0E8` — card/section backgrounds
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — primary text
- **Muted text:** `muted` → `#6B6358` — secondary/body text
- **Accent (gold):** `gold` → `#B8860B` — CTAs, highlights, hover states
- **Accent hover:** `gold-dark` → `#8B6508` — darker gold for hover
- **Accent light:** `gold-light` → `#D4A843` — lighter gold for subtle accents
- **Border:** `border` → `#E8E2D9` — hairline dividers, card borders
- **Dark surface:** `espresso` → `#2C2420` — dark sections (newsletter, footer)
- **Dark muted:** `espresso-light` → `#4A3F38` — text on dark backgrounds

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 300–700
- **Body / UI:** `Inter` (sans-serif), weights 300–500
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Normal case or Title Case, serif, font-weight 300–400

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`

## Borders & Dividers
- Hairline dividers: `border-t border-border` (1px)
- Card borders: `border border-border`
- Rounded corners: `rounded-none` or `rounded-sm` (minimal rounding)

## Buttons
- Primary: `bg-gold text-cream hover:bg-gold-dark` — solid gold
- Secondary/Outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Pill variant selectors: `border border-border px-4 py-2 text-sm`
- Transitions: `transition-all duration-300`

## Shadows
- Subtle: `shadow-sm` only on hover for cards
- No heavy drop shadows

## Hover & Animations
- Image scale on hover: `hover:scale-105 transition-transform duration-500`
- Opacity reveals: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`
- Button hover: color shift with `duration-300`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, golden tones throughout
- Use serif for elegance, sans-serif for clarity

## Don'ts
- No heavy borders or thick outlines
- No bright/neon colors
- No rounded-lg or rounded-xl (too casual)
- No heavy shadows
- No cluttered layouts
- No discount/sale-style badges
