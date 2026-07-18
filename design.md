# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `#FAF7F2` — warm off-white for page backgrounds
- **Foreground (charcoal):** `#1A1A1A` — near-black for body text
- **Brand accent (deep bronze):** `#8B6914` — warm gold-bronze for CTAs, links, accents
- **Brand accent hover:** `#6B5010` — darker bronze on hover
- **Muted (warm gray):** `#6B6560` — secondary text, captions
- **Border (hairline):** `#E8E2DA` — subtle warm dividers
- **Surface (card):** `#FFFFFF` — white cards on cream background
- **Dark surface:** `#1A1A1A` — footer, dark sections
- **Dark muted:** `#A39E98` — muted text on dark backgrounds

Tailwind config names: `cream`, `charcoal`, `bronze`, `bronze-dark`, `muted`, `hairline`, `surface`, `dark`, `dark-muted`

## Typography
- **Headings / Product names:** `Cormorant Garamond` (serif), weights 300–600
- **Body / UI:** `Inter` (sans-serif), weights 300–500
- **Product names:** UPPERCASE, letter-spacing `0.15em`
- **Section headings:** Serif, normal case or uppercase depending on context

### Scale (Tailwind)
- Hero headline: `text-4xl md:text-6xl lg:text-7xl font-light`
- Section title: `text-3xl md:text-4xl font-light`
- Product name: `text-sm md:text-base font-normal uppercase tracking-widest`
- Body: `text-sm md:text-base font-light`
- Caption/small: `text-xs font-normal`

## Spacing
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Content max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gaps: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline dividers: `border-hairline` (1px)
- No heavy borders. Subtle separation only.

## Buttons
- Primary: `bg-bronze text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-bronze-dark transition-colors`
- Secondary/outlined: `border border-charcoal text-charcoal px-8 py-3 text-sm uppercase tracking-widest hover:bg-charcoal hover:text-white transition-colors`
- Rounded: no rounding or very subtle `rounded-none` for editorial feel

## Shadows
- Cards: `shadow-sm` or none. Minimal.
- Hover: subtle `shadow-md` transition

## Animations
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105`
- Opacity reveals: `opacity-0 group-hover:opacity-100`

## Do's
- Use generous whitespace
- Keep layouts clean and editorial
- Use serif for emotional/brand moments
- Use thin hairline dividers
- Let images breathe

## Don'ts
- No rounded corners on buttons (keep square/editorial)
- No heavy drop shadows
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
