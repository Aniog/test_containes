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
- **Dark:** `brand-dark` (#2C2C2C) — secondary text
- **Muted:** `brand-muted` (#6B6B6B) — body text, descriptions
- **Light Muted:** `brand-light-muted` (#9A9A9A) — captions, placeholders

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–700
- **Product names:** uppercase, `tracking-product` (0.15em), font-serif
- **Section headings:** `text-3xl md:text-5xl font-serif font-light`
- **Body text:** `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`

## Borders & Dividers
- Hairline dividers: `border-t border-brand-warm`
- Card borders: none (use subtle shadow or background contrast)

## Shadows
- Cards: `shadow-sm` or no shadow (rely on background contrast)
- Elevated elements: `shadow-md`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-dark` — solid, premium
- Accent: `bg-brand-gold text-white hover:bg-brand-gold-light`
- Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream`
- Pill shape for variants: `rounded-full px-4 py-2`

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover image zoom: `hover:scale-105 transition-transform duration-500`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use sans-serif for functional UI
- Maintain warm, golden tones throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on cards (use `rounded-none` or very subtle `rounded-sm`)
- No cluttered layouts
- No discount/sale-style badges
