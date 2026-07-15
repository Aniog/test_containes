# Velmora Fine Jewelry — Design System

## Visual Identity
- Mood: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- Target: Women 25–45, gifting and self-purchase, $30–$120 price point.

## Color Palette
- **Background**: `#FAF7F2` (brand-cream) — warm off-white, primary page background
- **Warm Surface**: `#F5EDE3` (brand-warm) — cards, secondary surfaces
- **Sand**: `#E8DDD0` (brand-sand) — borders, dividers, subtle backgrounds
- **Gold Accent**: `#C9A96E` (brand-gold) — primary accent, CTAs, highlights
- **Gold Light**: `#D4BA8A` (brand-gold-light) — hover states, secondary gold
- **Gold Dark**: `#A8863F` (brand-gold-dark) — pressed states, emphasis
- **Charcoal**: `#2C2C2C` (brand-charcoal) — primary text, dark surfaces
- **Espresso**: `#1A1612` (brand-espresso) — hero overlays, darkest elements
- **Warm Gray**: `#8A8279` (brand-warm-gray) — secondary text, captions
- **Soft Gray**: `#B5AFA8` (brand-soft-gray) — placeholders, disabled states
- **Pale**: `#FDFBF8` (brand-pale) — lightest surface, newsletter bg

## Typography
- **Headings**: `font-serif` (Cormorant Garamond) — elegant, editorial
- **Body/UI**: `font-sans` (Inter) — clean, readable
- **Product names**: UPPERCASE, `tracking-ultra-wide` (0.25em), `font-serif`
- **Section headings**: `font-serif`, large sizes, normal case
- **Nav links**: `font-sans`, `tracking-extra-wide`, uppercase, `text-xs`

## Spacing & Layout
- Generous whitespace throughout — never cramped
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl` with `px-4 md:px-8`
- Hairline dividers: `border-t border-brand-sand`
- Card gaps: `gap-6 md:gap-8`

## Component Styles
- **Buttons (Primary)**: `bg-brand-gold text-white font-sans tracking-extra-wide uppercase text-xs px-8 py-3.5 hover:bg-brand-gold-dark transition-colors duration-300`
- **Buttons (Secondary)**: `border border-brand-charcoal text-brand-charcoal font-sans tracking-extra-wide uppercase text-xs px-8 py-3.5 hover:bg-brand-charcoal hover:text-white transition-colors duration-300`
- **Cards**: Clean, minimal. No heavy shadows. `hover:shadow-lg transition-shadow duration-500`
- **Product cards**: Image with hover second-image reveal. Name in serif uppercase. Price in sans.
- **Accordions**: Hairline borders, serif headings, clean expand/collapse

## Do's
- Use warm, golden tones throughout
- Keep whitespace generous
- Use serif for emotional/editorial moments
- Use subtle transitions (300ms ease)
- Ensure text contrast meets WCAG AA on all surfaces

## Don'ts
- Never use bright/saturated colors
- Never use heavy drop shadows
- Never use rounded/bubbly UI elements
- Never use generic e-commerce patterns (badges, countdown timers)
- Never place light text on light backgrounds without sufficient contrast
