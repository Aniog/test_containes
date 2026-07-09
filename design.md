# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` — #FAF7F2 (warm off-white, main page bg)
- **Surface (ivory):** `ivory` — #F5F0E8 (cards, sections with slight contrast)
- **Foreground (charcoal):** `charcoal` — #1A1A1A (primary text)
- **Muted text:** `stone` — #6B5E54 (secondary text, descriptions)
- **Accent (gold):** `gold` — #B8860B (CTA buttons, links, highlights)
- **Accent hover:** `gold-dark` — #8B6508 (button hover states)
- **Accent light:** `gold-light` — #D4A843 (subtle gold accents)
- **Border:** `border` — #E8E0D6 (hairline dividers, card borders)
- **Dark surface:** `espresso` — #2C2420 (footer, dark sections)

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weights 400–600
- **Body / UI:** Inter (sans-serif), weights 300–500
- **Product names:** UPPERCASE, letter-spacing: 0.15em
- **Heading sizes:** text-4xl to text-6xl for hero, text-2xl to text-3xl for sections
- **Body:** text-sm to text-base

## Tailwind Classes (common patterns)
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-stone`
- Product name: `font-serif uppercase tracking-[0.15em] text-charcoal`
- CTA button: `bg-gold text-cream hover:bg-gold-dark transition-colors duration-300 px-8 py-3 text-sm uppercase tracking-widest`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-cream transition-colors duration-300 px-8 py-3 text-sm uppercase tracking-widest`
- Card: `bg-white border border-border`
- Divider: `border-t border-border`
- Section spacing: `py-16 md:py-24 px-6 md:px-12 lg:px-20`

## Do's
- Use generous whitespace between sections
- Large editorial imagery
- Thin hairline dividers (1px, border-border color)
- Subtle hover transitions (duration-300)
- Soft shadows on cards (shadow-sm)
- Restrained use of gold accent — only for CTAs and key highlights

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-none or rounded-sm)
- No cluttered layouts
- No discount/sale-style badges
- No dark mode (this is a light, warm brand)
