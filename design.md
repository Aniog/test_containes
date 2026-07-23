# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream (background):** `brand-cream` (#FAF7F2) — primary page background
- **Ivory:** `brand-ivory` (#F5F0E8) — card backgrounds, subtle sections
- **Warm:** `brand-warm` (#EDE6DA) — hover states, dividers
- **Gold (accent):** `brand-gold` (#B8860B) — primary accent, CTAs, highlights
- **Gold Light:** `brand-gold-light` (#D4A843) — hover states on gold
- **Gold Dark:** `brand-gold-dark` (#8B6914) — pressed states
- **Charcoal (text):** `brand-charcoal` (#1C1C1C) — primary text
- **Graphite:** `brand-graphite` (#2D2D2D) — secondary text, nav
- **Muted:** `brand-muted` (#6B6B6B) — body text, descriptions
- **Muted Light:** `brand-muted-light` (#9A9A9A) — placeholders, captions

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–700
- **Product names:** uppercase, `tracking-product` (0.15em), font-serif
- **Section headings:** `text-3xl md:text-4xl lg:text-5xl font-serif font-light`
- **Body text:** `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`

## Borders & Dividers
- Hairline dividers: `border-t border-brand-warm`
- Card borders: none (rely on subtle background difference)
- Accent borders: `border-brand-gold`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-graphite px-8 py-3 text-sm tracking-wider uppercase font-sans transition-colors duration-300`
- Accent: `bg-brand-gold text-white hover:bg-brand-gold-light px-8 py-3 text-sm tracking-wider uppercase font-sans transition-colors duration-300`
- Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream px-8 py-3 text-sm tracking-wider uppercase font-sans transition-all duration-300`

## Shadows & Effects
- Soft shadow on hover: `hover:shadow-lg transition-shadow duration-300`
- Image hover zoom: `hover:scale-105 transition-transform duration-500`
- Overlay on hover: `bg-black/10`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (300–500ms)
- Product names always uppercase with letter-spacing

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product cards (use sharp or very subtle rounding)
- No discount badges or sale stickers
- No cluttered layouts
