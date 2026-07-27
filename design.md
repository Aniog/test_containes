# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking.
Inspired by high-end editorial fashion photography and luxury boutique aesthetics.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| cream | #FAF7F2 | bg-cream | Page background |
| parchment | #F0EAE0 | bg-parchment | Surface, cards |
| stone | #E8E0D4 | border-stone | Hairline dividers |
| muted | #C4B8A8 | text-muted | Placeholder, secondary |
| taupe | #7A6A58 | text-taupe | Body text secondary |
| espresso | #2C2420 | text-espresso | Primary text |
| obsidian | #1A1614 | bg-obsidian | Hero, dark sections, nav scrolled |
| gold | #B8965A | text-gold, bg-gold | Accent, CTA, highlights |
| gold-light | #D4AF7A | text-gold-light | Hover states, subtle accents |
| gold-pale | #F0E6D3 | bg-gold-pale | Soft gold tint backgrounds |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — elegant, editorial
- **Body / UI**: Inter (sans-serif) — clean, readable

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em]`
- Body: `font-inter text-sm text-taupe leading-relaxed`
- UI labels: `font-inter text-xs uppercase tracking-[0.1em]`
- Price: `font-inter text-base font-medium text-espresso`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace is a design feature — do not compress

## Borders & Dividers
- Hairline divider: `border-t border-stone`
- Card border: `border border-stone`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-espresso/5`
- Drawer: `shadow-2xl`

## Buttons
- Primary CTA: `bg-gold text-cream px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter hover:bg-gold-light transition-colors`
- Outlined: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-espresso hover:text-cream transition-colors`
- Ghost: `text-espresso text-xs uppercase tracking-[0.1em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right `translate-x-full → translate-x-0`

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE with wide letter-spacing
- Use thin hairline borders (1px) for dividers
- Warm gold (#B8965A) only for key CTAs and accents — don't overuse
- Large editorial imagery — let photos breathe
- Serif for all emotional/brand copy, sans-serif for functional UI

## Don'ts
- No bright/saturated colors
- No rounded corners on images (editorial = square/rectangular)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No tight spacing or cramped layouts
- Never use white text on cream background (low contrast)
- Never use espresso text on obsidian without checking contrast
