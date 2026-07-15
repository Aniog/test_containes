# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| ivory         | #F7F3EE   | Page background, card backgrounds          |
| cream         | #EDE7DC   | Section alternates, trust bar              |
| espresso      | #1A1208   | Primary text, nav, footer background       |
| warm-brown    | #3D2B1F   | Secondary headings, dark section text      |
| taupe         | #8C7B6B   | Body text, captions, muted labels          |
| gold           | #C9A96E   | Accent color — CTAs, borders, highlights   |
| gold-light    | #E2C99A   | Hover states, soft accents                 |
| gold-dark     | #A07840   | Active states, pressed buttons             |
| divider       | #DDD5C8   | Hairline dividers, borders                 |
| overlay       | rgba(26,18,8,0.45) | Image overlays                   |

## Typography

### Fonts
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide text-espresso`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light tracking-wide text-espresso`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] text-espresso`
- Price: `font-inter text-base font-medium text-espresso`
- Body: `font-inter text-sm text-taupe leading-relaxed`
- Caption: `font-inter text-xs text-taupe tracking-wide uppercase`
- Nav links: `font-inter text-xs uppercase tracking-[0.12em] text-espresso`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-divider border-t`
- Card border: `border border-divider`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Buttons
- Primary (solid): `bg-espresso text-ivory px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter hover:bg-warm-brown transition-colors`
- Accent (gold outline): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter hover:bg-gold hover:text-espresso transition-colors`
- Ghost: `text-espresso text-xs uppercase tracking-[0.12em] underline-offset-4 hover:underline`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,18,8,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,18,8,0.12)]`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image scale on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-bleed)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep square/rectangular)
- No generic e-commerce blue buttons
- No tight spacing or cluttered layouts
- No bold/heavy font weights for headings (use light/regular)
