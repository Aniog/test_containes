# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- **Audience**: Women 25–45, gifting and self-purchase, $30–$120 price point.
- **Voice**: Elegant, understated, confident. Never loud or discount-looking.

## Color Palette

### Primary Backgrounds
- `brand-warm-white` (#faf8f5) — Main page background, light sections
- `brand-ivory` (#f8f5f0) — Secondary light background, cards
- `brand-cream` (#f0ece4) — Hover states, subtle highlights

### Dark / Contrast
- `brand-black` (#0f0f0f) — Hero backgrounds, dark sections, nav
- `brand-charcoal` (#1a1a1a) — Primary text on light backgrounds
- `brand-dark-gray` (#2a2a2a) — Secondary dark backgrounds

### Accent — Gold
- `brand-gold` (#c4a265) — Primary accent, buttons, links, highlights
- `brand-gold-light` (#d4b67a) — Hover states on gold elements
- `brand-gold-dark` (#a68a4e) — Active/pressed gold states
- `brand-gold-muted` (#b89b5c) — Subtle gold accents

### Borders & Dividers
- `brand-divider-light` (#e8e0d4) — Light section dividers, card borders
- `brand-divider-dark` (#333333) — Dark section dividers

### Text
- `brand-text-dark` (#1a1a1a) — Primary text on light backgrounds
- `brand-text-light` (#f0ece4) — Primary text on dark backgrounds
- `brand-muted-light` (#8a8278) — Secondary/muted text on light
- `brand-muted-dark` (#a0998f) — Secondary/muted text on dark

## Typography

### Fonts
- **Headings / Display**: Cormorant Garamond (serif) — elegant, editorial
- **Body / UI**: Inter (sans-serif) — clean, readable

### Treatments
- Product names: UPPERCASE, tracking-widest-xl (0.2em letter-spacing)
- Section headings: Cormorant Garamond, 500-600 weight, large sizes
- Body text: Inter, 400 weight, 1rem/1.6 line-height
- Nav links: Inter, 500 weight, tracking-wide, uppercase

### Sizes
- Display: 4rem (responsive)
- H1: 2.75rem
- H2: 2rem
- H3: 1.5rem
- Body: 1rem
- Small/caption: 0.875rem

## Spacing
- Section padding: 5rem vertical (py-20) on desktop, 3rem (py-12) on mobile
- Container max-width: 1280px (max-w-7xl), centered with padding
- Card gap: 1.5rem (gap-6) on mobile, 2rem (gap-8) on desktop

## Components

### Buttons
- Primary: Solid gold background, dark text, uppercase tracking-wide
- Secondary: Outlined gold border, transparent bg, gold text
- Hover: slight darken/lighten transition, 300ms ease
- Padding: py-3 px-8 (standard), py-4 px-10 (large)

### Cards
- Clean white/ivory background, subtle border (divider-light)
- Soft shadow on hover, slight scale transition
- Image ratio: 4:5 or 3:4 for products

### Dividers
- Thin 1px lines using brand-divider-light or brand-divider-dark
- Can be full-width or contained

### Animations
- Transitions: 300ms ease for most hover effects
- Subtle fade-in for sections (IntersectionObserver)
- Smooth scroll for navigation
- Cart drawer: slide in from right

## Layout Principles
- Generous whitespace — never crowded
- Large editorial imagery
- Thin hairline dividers between sections
- Responsive: mobile-first, stack on mobile, grid on desktop
- Max content width: 1280px centered

## Don'ts
- Never use bright/neon colors
- Never use heavy borders or boxy designs
- Never use generic e-commerce layouts without editorial flair
- Never use low-contrast text (ensure WCAG AA minimum)
- Never use Comic Sans, Papyrus, or decorative fonts for body text
