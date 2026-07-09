# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background (cream):** `brand-cream` (#FAF7F2) — primary page background
- **Secondary background (ivory):** `brand-ivory` (#F5F0E8) — cards, sections
- **Primary text (charcoal):** `brand-charcoal` (#1A1A1A) — headings, body
- **Warm dark:** `brand-warm` (#2C2420) — nav, footer, hero overlays
- **Gold accent:** `brand-gold` (#B8860B) — CTAs, accent elements, hover states
- **Gold light:** `brand-gold-light` (#D4A843) — hover states, highlights
- **Gold muted:** `brand-gold-muted` (#C9A96E) — subtle accents, borders
- **Taupe:** `brand-taupe` (#8B7D6B) — secondary text, muted labels
- **Stone:** `brand-stone` (#6B5E50) — tertiary text

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–600, elegant and editorial
- **Body/UI:** `font-sans` (Inter) — weights 300–600, clean and readable
- **Product names:** UPPERCASE with `tracking-widest-plus` (0.2em letter-spacing)
- **Section headings:** `text-3xl md:text-4xl lg:text-5xl font-serif font-light`
- **Body text:** `text-sm md:text-base font-sans text-brand-charcoal`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, soft shadows `shadow-sm`, rounded `rounded-sm`
- Hairline dividers: `border-t border-brand-gold-muted/30`

## Buttons
- **Primary CTA:** `bg-brand-charcoal text-brand-cream hover:bg-brand-warm px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300`
- **Secondary/Outlined:** `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300`
- **Gold accent:** `bg-brand-gold text-white hover:bg-brand-gold-light px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium transition-all duration-300`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Links: underline on hover with gold color
- Cards: lift on hover `hover:-translate-y-1 hover:shadow-md`

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges or banners
- No dark mode (this is a warm, light brand)
