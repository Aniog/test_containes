# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `ivory-dark`: `#F2EDE4` — secondary background, section alternates
- `charcoal`: `#1C1917` — primary text, near-black warm
- `charcoal-soft`: `#3D3935` — secondary text
- `stone`: `#8C8278` — muted text, captions, labels
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A8` — hover states, subtle accents
- `gold-dark`: `#A07840` — pressed states, deep accent
- `blush`: `#E8D5C4` — soft warm tint for backgrounds
- `cream`: `#F5EFE6` — card backgrounds

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — `font-serif`
- **Sans-serif (body, UI, labels):** Inter — `font-sans`

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light tracking-wide`
- Section headline: `text-3xl md:text-4xl font-serif font-light`
- Product name: `text-xl font-serif uppercase tracking-widest`
- Body: `text-sm font-sans text-charcoal-soft leading-relaxed`
- Label/caption: `text-xs font-sans uppercase tracking-widest text-stone`
- Price: `text-lg font-sans font-medium text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-gold/20`
- Card border: `border border-gold/15`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(201,169,110,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(28,25,23,0.15)]`

## Buttons
- Primary (CTA): `bg-charcoal text-ivory px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-300`
- Outlined: `border border-charcoal text-charcoal px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-charcoal hover:text-ivory transition-colors duration-300`
- Gold accent: `bg-gold text-charcoal px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold tones for accents only — not overused

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial/square)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
