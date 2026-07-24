# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, highlights, hover states
- **Accent hover:** `gold-dark` → `#996F09` — button hover
- **Muted:** `taupe` → `#E8E2DA` — borders, dividers, subtle backgrounds
- **Muted foreground:** `stone` → `#78716C` — secondary text, captions

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (400, 500, 600)
- **Body / UI:** `font-sans` → Inter (300, 400, 500, 600)
- **Product names:** UPPERCASE, `tracking-[0.2em]`
- **Section headings:** Serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle `shadow-sm` or `border border-taupe`
- Hairline dividers: `border-t border-taupe`

## Buttons
- Primary: `bg-gold text-cream hover:bg-gold-dark` — solid accent
- Outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Pill variant selectors: `border border-taupe rounded-full px-4 py-1.5`
- Transitions: `transition-all duration-300`

## Imagery
- Large editorial photos, warm-lit gold jewelry on dark/neutral backgrounds
- Aspect ratios: hero 16x9, product cards 3x4, UGC 9x16, category tiles 4x3

## Do's
- Use `font-serif` for all headings and product names
- Use generous letter-spacing on product names (`tracking-[0.2em]`)
- Keep backgrounds warm (cream, not pure white)
- Use gold accent sparingly for CTAs and highlights
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, scale)

## Don'ts
- No pure black backgrounds (use charcoal `#1C1917`)
- No heavy drop shadows
- No rounded corners larger than `rounded-sm` on cards
- No bright/saturated colors
- No discount-style badges or loud sale banners
- No generic e-commerce blue/green CTAs
