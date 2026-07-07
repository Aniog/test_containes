# VELMORA Fine Jewelry - Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry - NOT loud, NOT discount-looking.
- **Target**: Women 25-45, gifting and self-purchase, premium-but-accessible ($30-$120).

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| brand-cream | #FAF7F2 | Page background, main surface |
| brand-warm | #F5EDE3 | Alternate section backgrounds, image placeholders |
| brand-sand | #E8DDD0 | Borders, dividers, subtle separators |
| brand-gold | #C9A96E | Primary accent, CTAs, active states, highlights |
| brand-gold-light | #D4BA8A | Hover states for gold elements |
| brand-gold-dark | #A88B52 | Active/pressed states for gold buttons |
| brand-charcoal | #2C2C2C | Primary text, headings |
| brand-charcoal-light | #3D3D3D | Secondary text emphasis |
| brand-espresso | #1A1612 | Dark sections (footer, hero overlay, newsletter) |
| brand-warm-gray | #8A8279 | Muted text, placeholders |
| brand-muted | #6B6560 | Body text, descriptions |

## Typography

- **Headings**: Cormorant Garamond (serif) - light/regular weight, wide letter-spacing
- **Body / UI**: Inter (sans-serif) - regular/medium weight
- **Product names**: UPPERCASE, tracking-super-wide (0.2em), serif
- **Section labels / CTAs**: UPPERCASE, tracking-ultra-wide (0.25em), sans-serif, font-semibold
- **Body text**: 14-16px, text-brand-muted, leading-relaxed

## Spacing and Layout

- Max content width: max-w-7xl (1280px)
- Section padding: py-16 md:py-24
- Content padding: px-4 sm:px-6 lg:px-8
- Gold hairline dividers: w-12 h-px bg-brand-gold mx-auto
- Generous whitespace between sections

## Buttons

- **Primary CTA**: bg-brand-gold text-white, uppercase, tracking-ultra-wide, hover:bg-brand-gold-dark
- **Outlined CTA**: border border-brand-gold text-brand-gold, hover:bg-brand-gold hover:text-white
- **Quick Add**: Dark overlay bar on hover, white text, gold on hover

## Images

- Product cards: square aspect ratio, hover reveals second image
- Category tiles: aspect-[4/3], dark overlay with label
- UGC reel: aspect-[9/16], vertical cards, horizontal scroll
- Brand story: aspect-[3/4], portrait image
- All images use object-cover

## Animations

- Scroll reveal: fade-in + slide-up (opacity 0 to 1, translateY 8 to 0, duration 700ms)
- Cart drawer: slide-in from right (translateX, duration 300ms, ease-out)
- Mobile menu: fade + slide-down (duration 300ms)
- Product hover: opacity swap between images (duration 500ms), scale on hover (duration 500-700ms)
- Button hover: color transitions (duration 200ms)
- Navbar: transparent to solid on scroll (duration 300ms)

## Dos

- Use serif for all headings and product names
- Use generous whitespace and thin gold dividers
- Keep accent color (gold) restrained - only for CTAs, active states, and decorative lines
- Ensure strong text contrast on all backgrounds
- Use smooth, subtle transitions (200-700ms)

## Donts

- Do not use bright/saturated colors outside the gold accent
- Do not use heavy shadows or thick borders
- Do not use sans-serif for headings or product names
- Do not crowd sections - maintain breathing room
- Do not use generic e-commerce patterns (badges, aggressive sales banners)
- Do not use dark text on gold backgrounds (use white instead)
