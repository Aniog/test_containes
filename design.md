# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind tokens under `brand-*`)
- `brand-cream` (#FAF7F2) — page background
- `brand-ivory` (#F5F0E8) — card/section backgrounds
- `brand-warm` (#EDE6DA) — hairline dividers, subtle borders
- `brand-gold` (#B8860B) — primary accent (CTAs, highlights)
- `brand-gold-light` (#D4A843) — hover state for gold
- `brand-gold-dark` (#8B6914) — pressed/active gold
- `brand-charcoal` (#1A1A1A) — primary text, dark backgrounds
- `brand-graphite` (#2D2D2D) — secondary dark
- `brand-muted` (#6B6B6B) — body text, descriptions
- `brand-muted-light` (#9A9A9A) — captions, placeholders

## Typography
- Headings: `font-serif` (Cormorant Garamond), weight 400–600, sizes 2xl–6xl
- Product names: `font-serif uppercase tracking-product` (0.15em letter-spacing)
- Body/UI: `font-sans` (Inter), weight 300–500, sizes sm–base
- Navigation links: `font-sans text-sm tracking-wide uppercase font-medium`

## Spacing & Layout
- Generous whitespace: sections use `section-padding` (px-5 md:px-10 lg:px-20 py-16 md:py-24)
- Max content width: `max-w-7xl mx-auto`
- Hairline dividers: `hairline` utility (1px border-brand-warm)

## Components
- Buttons: `bg-brand-charcoal text-brand-cream` (primary) or `border border-brand-charcoal text-brand-charcoal` (outlined). Rounded: `rounded-none` for editorial feel. Padding: `px-8 py-3`.
- Cards: no border, subtle `shadow-sm hover:shadow-md` transition. Background `bg-white`.
- Hover transitions: `transition-all duration-300 ease-in-out`
- Accent CTA: `bg-brand-gold text-white hover:bg-brand-gold-light`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, shadow, translate)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded buttons (use sharp corners or very slight rounding max rounded-sm)
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
