# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette
- **Base (Dark)**: `#1C1917` — warm charcoal/stone-black (primary background for hero, nav, footer)
- **Surface**: `#292524` — slightly lighter warm dark (cards, sections)
- **Cream**: `#F5F0EB` — warm off-white (alternate sections, body background)
- **Gold Accent**: `#C9A96E` — warm muted gold (CTAs, accents, highlights)
- **Gold Light**: `#D4B87A` — lighter gold for hover states
- **Text Primary (on dark)**: `#F5F0EB` — cream for readability on dark backgrounds
- **Text Primary (on light)**: `#1C1917` — stone-black for readability on cream
- **Text Muted (on dark)**: `#A8A29E` — warm gray for secondary text on dark
- **Text Muted (on light)**: `#78716C` — warm gray for secondary text on cream
- **Divider**: `#44403C` — warm medium gray for hairline dividers on dark
- **Divider Light**: `#D6D3D1` — for dividers on cream backgrounds

## Typography
- **Headings / Product Names**: Cormorant Garamond (serif), uppercase, wide letter-spacing (0.15em)
- **Body / UI**: Inter (sans-serif), regular weight
- **Font Sizes**:
  - Hero headline: `text-4xl md:text-6xl lg:text-7xl`
  - Section headings: `text-2xl md:text-3xl`
  - Product names: `text-base md:text-lg` uppercase tracking-widest
  - Body: `text-sm md:text-base`
  - Small/caption: `text-xs md:text-sm`

## Spacing & Layout
- Generous whitespace: `py-16 md:py-24 lg:py-32` for sections
- Hairline dividers: `border-t border-stone-700` (1px)
- Max content width: `max-w-7xl mx-auto`
- Product grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6`

## Buttons
- **Primary CTA**: Solid gold background (`bg-gold text-stone-900`), uppercase, tracking-widest, serif font, hover: `bg-gold-light`
- **Secondary**: Outlined (`border border-gold text-gold`), hover fills gold
- **Pill buttons** (variant selector): `border border-stone-600 text-stone-300` active: `border-gold text-gold bg-gold/10`

## Cards & Shadows
- Product cards: minimal, no visible border on dark bg, subtle `shadow-lg shadow-stone-900/50` on cream bg
- Hover: second image fade-in, soft scale `hover:scale-[1.02]`
- Transitions: `transition-all duration-500 ease-out`

## Images
- Large editorial imagery, full-bleed hero
- Product images: warm gold jewelry on dark/neutral backgrounds
- UGC: vertical 9:16 cards
- Placeholder: use `data-strk-img` system with warm jewelry queries

## Do's
- Use Cormorant Garamond for ALL headings and product names
- Use uppercase + tracking-widest for product names
- Keep generous whitespace between sections
- Use hairline dividers between sections
- Use gold accent sparingly — CTAs, highlights, active states only
- Ensure strong contrast: cream text on dark, dark text on cream

## Don'ts
- Don't use bright/saturated colors
- Don't use generic e-commerce blue/purple
- Don't crowd sections with too much content
- Don't use sans-serif for headings
- Don't use lowercase for product names
- Don't add heavy borders or box shadows on dark backgrounds
