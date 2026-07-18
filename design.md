# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — near-black for text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs, highlights
- **Gold light:** `gold-light` → `#D4A853` — lighter gold for hover states
- **Muted:** `muted` → `#F0EBE3` — subtle warm gray for cards, sections
- **Muted foreground:** `muted-fg` → `#6B6560` — secondary text
- **Border:** `border` → `#E8E2D9` — hairline dividers

## Typography
- **Headings / Product names:** `Cormorant Garamond`, serif — elegant, editorial
- **Body / UI:** `Inter`, sans-serif — clean, modern
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Heading sizes:** Hero: text-5xl md:text-7xl, Section: text-3xl md:text-4xl, Card: text-lg

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Hairline dividers: border-t border-border

## Components
- **Buttons:** Primary: bg-gold text-white px-8 py-3 tracking-wider uppercase text-sm font-medium hover:bg-gold-light transition-colors. Outlined: border border-gold text-gold hover:bg-gold hover:text-white
- **Cards:** No border-radius, subtle shadow-sm on hover, transition-all duration-300
- **Images:** object-cover, aspect ratios maintained
- **Hover:** scale-[1.02] on cards, opacity transitions on overlays

## Do's
- Use generous whitespace
- Keep typography hierarchy clear
- Use gold accent sparingly — CTAs, stars, highlights
- Thin hairline dividers between sections
- Large editorial imagery
- Subtle hover transitions (300ms)

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce feel
- No discount badges or sale stickers
