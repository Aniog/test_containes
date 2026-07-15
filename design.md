# Velmora Fine Jewelry — Design System

## Visual Identity
- Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Backgrounds**: Cream (#fefcf5) — warm off-white for page backgrounds. Dark sections use velvet-950 (#2c2520).
- **Text**: ink (#1a1a1a) for body, ink-light (#2d2d2d) for secondary, ink-muted (#a3a3a3) for subtle.
- **Accent**: gold-500 (#d48e1f) for CTAs, hover states, accent details.
- **Borders & Dividers**: ink-border (#e5e5e5) — thin, hairline.
- **Cards / Surfaces**: white (#ffffff) with subtle shadow.
- **Stars**: gold-400 (#e6aa2f).

## Typography
- **Headings**: Playfair Display (serif). Product names in UPPERCASE with tracking-widest.
- **Body / UI**: Inter (sans-serif), 400/500 weight.
- **Scale**: h1 ~3.5rem, h2 ~2.5rem, h3 ~1.5rem, body 0.938rem, small 0.813rem.

## Spacing
- Generous whitespace: section padding py-20 md:py-28, max-w-7xl mx-auto px-6.
- Product cards: gap-6 md:gap-8.
- Whitespace between sections: my-16 md:my-24.

## Components

### Buttons
- **Primary**: bg-gold-500 text-white, hover:bg-gold-600, px-8 py-3, tracking-wider uppercase text-sm font-medium. Rounded-none.
- **Outline**: border border-ink text-ink, hover:bg-ink hover:text-white. Rounded-none.
- Transition: all 0.3s ease.

### Navbar
- Transparent initially, bg-white/95 backdrop-blur on scroll.
- Logo: Playfair Display, tracking-widest, uppercase.
- Links: Inter, uppercase, text-sm tracking-wider.

### Product Cards
- White bg, subtle shadow on hover.
- Image aspect-ratio 4:5.
- Product name: uppercase tracking-widest text-sm.
- Price: Inter text-sm font-medium.
- Hover: second image reveal + "Add to Cart" overlay.

### Dividers
- Thin hairline: border-t border-ink-border, my-8.

### Animations
- Subtle fade-up on scroll (opacity + translateY).
- Smooth hover transitions on buttons and cards (300ms).
- Cart drawer slides in from right.

## Do's
- Use uppercase with wide letter-spacing for product names.
- Use generous whitespace.
- Use thin, elegant dividers.
- Keep CTAs restrained — one per section.

## Don'ts
- Don't use loud colors or heavy shadows.
- Don't overcrowd layouts.
- Don't use generic e-commerce patterns (no huge sale banners).
- Don't use images that don't match warm gold jewelry aesthetic.