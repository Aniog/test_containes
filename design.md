# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **brand-cream** `#FAF7F2` — page background, light surfaces
- **brand-ivory** `#F5F0E8` — card backgrounds, subtle sections
- **brand-warm** `#EDE6DA` — hairline dividers, borders
- **brand-gold** `#B8860B` — primary accent, CTAs on hover, metallic highlights
- **brand-gold-light** `#D4A843` — hover states, secondary gold
- **brand-gold-dark** `#8B6914` — pressed states
- **brand-charcoal** `#1C1C1C` — primary text, buttons
- **brand-graphite** `#2D2D2D` — secondary text
- **brand-muted** `#6B6B6B` — body text, descriptions
- **brand-muted-light** `#9A9A9A` — captions, placeholders

## Typography
- **Headings**: Cormorant Garamond (serif), weight 400–600, line-height 1.2
- **Body/UI**: Inter (sans-serif), weight 300–600, line-height 1.6
- **Product names**: UPPERCASE, letter-spacing `0.15em`, font-serif
- **Section titles**: font-serif, text-3xl to text-5xl
- **Body text**: font-sans, text-sm to text-base, text-brand-muted

## Spacing & Layout
- Generous whitespace: `py-16 md:py-24` for sections
- Page padding: `px-5 md:px-10 lg:px-20`
- Card gaps: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Components
- **Buttons**: `.btn-accent` (solid charcoal, gold on hover) or `.btn-outline` (outlined)
- **Dividers**: `.hairline` — thin `border-t border-brand-warm`
- **Cards**: `bg-brand-ivory` or `bg-white`, no border-radius or very subtle `rounded-sm`
- **Shadows**: `shadow-sm` only, very restrained
- **Hover transitions**: `transition-all duration-300`, subtle opacity/transform changes

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Thin hairline dividers between sections
- Subtle hover animations (opacity, translateY)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded corners on product cards (keep editorial/sharp)
- No bright/saturated colors outside the gold accent
- No heavy drop shadows
- No discount badges or sale stickers
- No generic e-commerce patterns (cluttered grids, loud banners)
- No dark mode — this is a warm, light brand
