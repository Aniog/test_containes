# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` — #FAF7F2 (warm off-white, main page bg)
- **Surface (ivory):** `ivory` — #F5F0E8 (cards, sections with slight contrast)
- **Foreground (charcoal):** `charcoal` — #1A1A1A (primary text)
- **Muted text:** `muted` — #6B6358 (secondary text, captions)
- **Accent (gold):** `gold` — #B8860B (CTA buttons, links, highlights)
- **Accent hover:** `gold-dark` — #8B6508 (button hover states)
- **Accent light:** `gold-light` — #D4A843 (subtle gold accents)
- **Border:** `border` — #E8E0D4 (hairline dividers, card borders)
- **Dark (espresso):** `espresso` — #2C2420 (nav solid bg, footer bg, dark sections)

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing: 0.12em
- **Section headings:** Cormorant Garamond, normal case or uppercase depending on context

## Tailwind Classes (common patterns)
- Heading: `font-serif text-charcoal`
- Body: `font-sans text-charcoal`
- Muted: `text-muted`
- CTA button: `bg-gold text-white hover:bg-gold-dark transition-colors`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-white transition-colors`
- Card: `bg-white border border-border`
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Container: `max-w-7xl mx-auto`

## Spacing
- Generous whitespace between sections (py-16 to py-24)
- Cards: p-4 to p-6
- Grid gaps: gap-4 to gap-8

## Borders & Dividers
- Hairline: `border-b border-border` (1px)
- Card borders: `border border-border rounded-none` (sharp corners for editorial feel)

## Shadows
- Subtle: `shadow-sm` only on hover states
- No heavy drop shadows

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover image zoom: `hover:scale-105 transition-transform duration-500`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Buttons feel premium (solid gold or outlined)
- Subtle hover transitions
- Product names always uppercase with letter-spacing

## Don'ts
- No rounded corners on cards (use rounded-none or no rounding)
- No heavy shadows
- No bright/neon colors
- No discount-style badges or loud CTAs
- No generic e-commerce feel
