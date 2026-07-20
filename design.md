# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `brand-cream` (#FAF7F2) — warm off-white base
- **Secondary bg**: `brand-ivory` (#F5F0E8) — slightly deeper warm tone for sections
- **Accent surface**: `brand-sand` (#E8DFD3) — muted warm for cards/dividers
- **Primary accent**: `brand-gold` (#B8956A) — warm gold for CTAs, highlights
- **Gold light**: `brand-gold-light` (#D4B896) — hover states, subtle accents
- **Gold dark**: `brand-gold-dark` (#8B6914) — active states
- **Text primary**: `brand-charcoal` (#1A1A1A) — headings, body
- **Text secondary**: `brand-graphite` (#2D2D2D) — subheadings
- **Text muted**: `brand-muted` (#6B6B6B) — captions, meta
- **Text warm gray**: `brand-warm-gray` (#9A9490) — placeholders, dividers

## Typography
- **Headings**: `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI**: `font-sans` (Inter) — weights 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.2em), font-serif, font-medium
- **Section titles**: font-serif, text-3xl to text-5xl, font-light or font-normal
- **Body text**: font-sans, text-sm to text-base, font-normal, text-brand-muted

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, subtle shadows (`shadow-sm`), rounded-none or rounded-sm
- Dividers: `border-brand-sand` or `border-brand-gold/20`, hairline (border-t)

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-graphite` — solid dark
- Accent: `bg-brand-gold text-white hover:bg-brand-gold-dark` — gold CTA
- Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream`
- Pill variant selectors: `border border-brand-sand rounded-full px-4 py-2`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow-hidden container
- Links: no underline, opacity or color shift on hover
- Buttons: smooth background/color transitions

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, cohesive tone throughout
- Product names always uppercase with wide letter-spacing

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners larger than rounded-sm (except pills)
- No cluttered layouts
- No discount/sale-style badges or loud callouts
