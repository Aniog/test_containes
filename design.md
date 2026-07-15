# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream (background):** `brand-cream` (#FAF7F2) — primary page background
- **Ivory:** `brand-ivory` (#F5F0E8) — card backgrounds, subtle sections
- **Warm:** `brand-warm` (#EDE6DA) — hover states, secondary backgrounds
- **Gold (accent):** `brand-gold` (#B8860B) — primary accent, CTAs, highlights
- **Gold Light:** `brand-gold-light` (#D4A843) — hover states on gold
- **Gold Dark:** `brand-gold-dark` (#8B6914) — pressed states
- **Charcoal (text):** `brand-charcoal` (#1A1A1A) — primary text, headings
- **Graphite:** `brand-graphite` (#2D2D2D) — secondary text
- **Muted:** `brand-muted` (#6B6B6B) — body text, descriptions
- **Soft Gray:** `brand-soft-gray` (#9A9A9A) — captions, placeholders

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–700
- **Product names:** UPPERCASE, `tracking-product` (0.2em letter-spacing), font-serif
- **Section headings:** font-serif, text-3xl to text-5xl, font-light or font-normal
- **Body text:** font-sans, text-sm to text-base, text-brand-muted

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, subtle shadows (`shadow-sm`), rounded-none or rounded-sm
- Dividers: thin hairlines `border-t border-brand-warm`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-graphite transition-colors`
- Accent: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-light transition-colors`
- Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-brand-cream transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow-hidden container
- Links: no underline, opacity change on hover `hover:opacity-70`
- Buttons: color shift on hover

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners larger than rounded-sm
- No busy patterns or gradients
- No discount/sale-style badges or banners
- No generic stock photo feel — keep editorial warmth
