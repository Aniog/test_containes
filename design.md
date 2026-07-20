# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary
- `bg-deep`: #0B0B0B — deep black, main background
- `bg-warm`: #1A1714 — warm dark brown-black, card/section backgrounds  
- `bg-ivory`: #F5F0E8 — warm ivory, light backgrounds
- `bg-cream`: #FAF7F2 — soft cream, newsletter/CTA blocks

### Accent
- `gold`: #C4975B — warm 18K gold accent, CTAs, highlights
- `gold-light`: #D4AD78 — lighter gold, hover states
- `gold-muted`: #A07D4F — muted gold for subtle accents

### Text
- `text-primary`: #F5F0E8 — ivory text on dark backgrounds
- `text-secondary`: #B0A898 — muted warm gray for secondary text
- `text-dark`: #1A1714 — dark text on light backgrounds
- `text-dark-secondary`: #6B6560 — muted dark text

### Borders & Dividers
- `border-subtle`: rgba(196, 151, 91, 0.15) — gold-tinted hairline dividers
- `border-light`: rgba(245, 240, 232, 0.12) — light border on dark backgrounds

## Typography

### Headings (Serif)
- Font: Cormorant Garamond (Google Fonts)
- Product names: UPPERCASE, tracking-[0.25em], font-medium
- Section titles: tracking-[0.15em], font-semibold
- Hero headline: font-light, tracking-[0.08em]

### Body (Sans-serif)  
- Font: Inter (Google Fonts)
- Body: font-normal, text-sm to text-base
- Labels: font-medium, uppercase, tracking-widest, text-xs

## Spacing & Layout
- Section padding: py-20 md:py-28 lg:py-36
- Container max: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Generous whitespace between sections
- Grid gaps: gap-6 md:gap-8

## Component Styles

### Buttons
- Primary: bg-gold text-bg-deep hover:bg-gold-light, uppercase, tracking-widest, text-xs, py-3.5 px-8
- Secondary: border border-gold text-gold hover:bg-gold hover:text-bg-deep, same letter-spacing
- All buttons: transition-all duration-300 ease-out

### Cards
- Background: bg-warm or transparent
- Border: 1px solid border-subtle
- Hover: subtle scale(1.02) or shadow lift
- Image: overflow-hidden with hover zoom effect

### Dividers
- Thin hairline: border-t border-border-subtle
- 1px height, gold-tinted

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-xl on cards (use rounded-sm or rounded-none)
- No busy backgrounds or patterns
- No discount badges or "SALE" labels
- No harsh borders or thick outlines
