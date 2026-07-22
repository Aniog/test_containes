# Velmora Fine Jewelry — Design System

## Visual Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.

## Color Palette
- **Cream (bg):** `brand-cream` (#FAF7F2) — primary background
- **Ivory:** `brand-ivory` (#F5F0E8) — secondary surfaces, cards
- **Warm:** `brand-warm` (#EDE6DA) — tertiary, hover states
- **Gold:** `brand-gold` (#B8860B) — primary accent, CTAs
- **Gold Light:** `brand-gold-light` (#D4A843) — hover accent
- **Gold Dark:** `brand-gold-dark` (#8B6914) — pressed states
- **Charcoal:** `brand-charcoal` (#1A1A1A) — primary text
- **Graphite:** `brand-graphite` (#2D2D2D) — secondary text
- **Muted:** `brand-muted` (#6B6B6B) — body text, descriptions
- **Muted Light:** `brand-muted-light` (#9A9A9A) — captions, placeholders

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weight 300–600, sizes 2xl–6xl
- **Body/UI:** `font-sans` (Inter) — weight 300–600, sizes xs–base
- **Product names:** UPPERCASE, `tracking-product` (0.15em), font-serif
- **Section headings:** font-serif, text-3xl md:text-5xl, font-light

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, subtle shadows `shadow-sm`, rounded-none or rounded-sm
- Dividers: `border-brand-warm` or `border-brand-gold/20`, hairline (border-t)

## Components
- **Buttons (primary):** `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-graphite transition-colors`
- **Buttons (accent):** `bg-brand-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- **Buttons (outline):** `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-brand-cream transition-colors`
- **Cards:** `bg-white` or `bg-brand-ivory`, no heavy borders, subtle hover lift `hover:-translate-y-1 transition-transform`
- **Inputs:** `border-b border-brand-muted-light bg-transparent py-2 text-sm focus:border-brand-gold outline-none transition-colors`

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Subtle hover transitions (0.3s ease)
- Product names always uppercase with letter-spacing

## Don'ts
- No heavy drop shadows
- No rounded corners larger than rounded-sm
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
