# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` — #FAF7F2 (warm off-white, main page bg)
- **Surface (ivory):** `ivory` — #F5F0E8 (cards, sections with slight warmth)
- **Foreground (charcoal):** `charcoal` — #1A1A1A (primary text)
- **Muted text:** `muted` — #6B6358 (secondary text, captions)
- **Accent (gold):** `gold` — #B8860B (CTA buttons, links, highlights)
- **Accent hover:** `gold-dark` — #8B6508 (button hover states)
- **Accent light:** `gold-light` — #D4A843 (subtle gold tints)
- **Border:** `border` — #E8E2D9 (hairline dividers, card borders)
- **Dark (espresso):** `espresso` — #2C2420 (nav solid bg, footer bg, dark sections)

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- Product names: UPPERCASE, letter-spacing: 0.15em (tracking-[0.15em])
- Headings: normal case or uppercase depending on context

## Tailwind Classes (common)
- Heading serif: `font-serif` (mapped to Cormorant Garamond)
- Body sans: `font-sans` (mapped to Inter)
- Product name: `font-serif uppercase tracking-[0.15em]`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Max content width: `max-w-7xl mx-auto`
- Card border: `border border-border`
- Hairline divider: `border-t border-border`
- CTA button: `bg-gold text-cream hover:bg-gold-dark px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium transition-colors`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-cream px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium transition-colors`

## Spacing
- Generous whitespace between sections
- Cards: p-4 to p-6
- Grid gaps: gap-6 to gap-8

## Do's
- Use thin hairline dividers (1px, border-border color)
- Generous whitespace
- Large editorial imagery
- Subtle hover transitions (transition-all duration-300)
- Soft shadows on cards (shadow-sm)
- Restrained use of gold accent

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-none or rounded-sm)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
