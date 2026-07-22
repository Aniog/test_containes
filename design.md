# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| cream         | #FAF6F0   | Main page background                       |
| cream-dark    | #F2EBE0   | Subtle section alternation                 |
| charcoal      | #1C1917   | Primary text, dark sections bg             |
| charcoal-soft | #2D2926   | Secondary dark bg                          |
| warm-gray     | #7A7068   | Body text, captions, muted labels          |
| warm-gray-lt  | #B5AFA8   | Placeholder, disabled, hairline dividers   |
| gold          | #C4973A   | Primary accent — CTAs, highlights, stars   |
| gold-light    | #D4AA5A   | Hover state of gold accent                 |
| gold-pale     | #EDD9A3   | Subtle gold tint backgrounds               |
| ivory         | #FFFDF9   | Card backgrounds, nav solid bg             |

## Typography
- **Headings / Product names**: Cormorant Garamond (serif), loaded via Google Fonts
  - Hero H1: font-cormorant text-5xl md:text-7xl font-light tracking-wide
  - Section titles: font-cormorant text-3xl md:text-4xl font-light tracking-wide
  - Product names: font-cormorant text-xl uppercase tracking-[0.15em] font-medium
- **Body / UI**: Inter (sans-serif)
  - Body: text-sm text-warm-gray leading-relaxed
  - Nav links: text-xs uppercase tracking-[0.12em] font-medium
  - Buttons: text-xs uppercase tracking-[0.15em] font-medium

## Spacing
- Section vertical padding: py-20 md:py-28
- Container max width: max-w-7xl mx-auto px-4 md:px-8
- Card gap: gap-4 md:gap-6
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: border-warm-gray-lt (1px)
- Card borders: border border-warm-gray-lt/40
- Rounded corners: rounded-none (sharp, editorial) or rounded-sm for pills

## Shadows
- Card hover: shadow-md (soft, warm)
- Nav solid: shadow-sm

## Buttons
- Primary (filled): bg-charcoal text-ivory hover:bg-charcoal-soft px-8 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300
- Accent (gold): bg-gold text-ivory hover:bg-gold-light px-8 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300
- Outlined: border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory px-8 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300

## Animations
- Hover transitions: duration-300 ease-out
- Image scale on hover: hover:scale-105 transition-transform duration-500
- Nav background: transition-all duration-300

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names
- Keep generous whitespace — don't crowd elements
- Use hairline dividers (1px) not thick borders
- Gold accent sparingly — stars, CTAs, highlights only
- Warm cream backgrounds, not pure white

## Don'ts
- No bright/neon colors
- No rounded-full on rectangular buttons
- No heavy drop shadows
- No generic blue links
- No tight spacing
- No pure white (#FFFFFF) backgrounds — use ivory/cream
