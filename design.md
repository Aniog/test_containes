# Velmora Fine Jewelry — Design System

## Brand Essence
**Quiet luxury, warm, editorial.** Premium demi-fine jewelry for women 25–45. The brand feels like stepping into a softly lit boutique — intimate, unhurried, and curated. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Role | Name | Hex |
|---|---|---|
| Background | Ivory | `#FAF7F2` |
| Background alt | Cream | `#F5F0E8` |
| Background warm | Warm Stone | `#E8E0D5` |
| Accent / Gold | Gold | `#D4A853` |
| Text primary | Charcoal | `#1A1714` |
| Text on dark | Ivory | `#FAF7F2` |
| Deep dark bg | Rich Black | `#0F0D0B` |
| Neutral | Warm Gray 400 | `#B8A99A` |

**Decision:** Warm ivory base + deep charcoal text — feels like linen and aged brass. Gold accent throughout for CTAs, underlines, ratings. Dark hero sections use rich black with ivory text for editorial drama.

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings / Brand | Cormorant Garamond | 300–600 | Italic for subheadings, optical size large |
| Product names | Cormorant Garamond | 500 | UPPERCASE, letter-spacing 0.2em |
| Body / UI | Manrope | 300–600 | 15px base, generous line-height |

**Letter-spacing:** Product names get `0.2em` tracking. Nav links get `0.1em`. Buttons uppercase with `0.15em`.

## Spacing & Layout
- Section vertical padding: `6rem` (desktop) / `4rem` (mobile)
- Container max-width: `1280px`, centered with `px-6` gutter
- Grid gap: `1.5rem` standard, `2rem` generous
- Hairline dividers: `1px solid warmGray-200`

## Component Style Guide

### Buttons
- **Primary (filled):** `bg-charcoal text-ivory hover:bg-gold hover:text-charcoal`, `px-8 py-3`, uppercase, tracking-wide, transition 300ms
- **Secondary (outlined):** `border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory`, same sizing
- **Ghost:** `text-charcoal hover:text-gold`, no border
- **Disabled:** `opacity-40 cursor-not-allowed`

### Cards
- White/ivory background, subtle shadow `0 2px 12px rgba(0,0,0,0.06)`
- Hover: shadow deepens, image scale 1.03, 400ms ease

### Product Grid
- 5 products per row (desktop), 2 (tablet), 1-2 (mobile)
- Product image aspect ratio: `4/5` (portrait, jewelry-standard)
- Image hover: second image cross-fades in

### Navigation
- Transparent on hero, transitions to solid `bg-ivory/95 backdrop-blur-sm` on scroll
- Logo: serif, 24px, charcoal
- Links: Manrope 400, 13px, uppercase tracking-wide, charcoal
- Hover: gold underline from left, 300ms

### Form Elements
- Input: `border-b border-warmGray-300`, focus `border-charcoal`, no full border
- Placeholder: warmGray-400, italic

## Motion Philosophy
- Entrance: `opacity 0→1` + `translateY 20px→0`, 600ms ease-out, staggered 80ms between items
- Hover transitions: 300–400ms, ease-out curves
- Cart drawer: slide from right, 400ms cubic-bezier(0.16, 1, 0.3, 1)
- Scroll-reveal: Intersection Observer triggers fade-up on enter

## Image Strategy
- Hero: warm-lit close-up, editorial, dark or neutral background
- Product: clean studio or lifestyle, `4/5` ratio, warm stone or charcoal backdrop
- UGC: `9/16` vertical portrait cards, worn jewelry lifestyle
- Placeholder strategy: warm-toned abstract or jewelry-adjacent imagery via Unsplash

## Avoid
- Generic stock photo aesthetic
- Bright saturated colors clashing with gold
- Hard drop shadows or thick borders
- Mobile-unfriendly dense layouts
- Overly technical or clinical feel
