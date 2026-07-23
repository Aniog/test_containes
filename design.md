# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors
- `cream`: `#FAF7F2` — primary background, warm ivory
- `parchment`: `#F2EDE4` — secondary background, section alternates
- `espresso`: `#1C1410` — primary text, deep warm black
- `charcoal`: `#3D3530` — secondary text
- `stone`: `#8C7B6E` — muted/tertiary text, captions

### Accent Colors
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A3` — hover states, subtle fills
- `gold-dark`: `#A07840` — pressed states, borders

### UI Colors
- `divider`: `#E8E0D5` — hairline dividers
- `card`: `#FFFFFF` — product cards
- `overlay`: `rgba(28, 20, 16, 0.45)` — image overlays

## Typography

### Fonts
- **Serif (headings, product names)**: Cormorant Garamond — `font-serif`
- **Sans-serif (body, UI, labels)**: Inter — `font-sans`

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-serif font-light`
- Product name: `text-lg font-serif uppercase tracking-widest`
- Body: `text-sm font-sans text-charcoal leading-relaxed`
- Label/caption: `text-xs font-sans uppercase tracking-widest text-stone`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-divider` or `divide-divider`
- Card: no border, soft shadow `shadow-sm`
- Accent border: `border border-gold`

## Shadows
- Card hover: `shadow-md`
- Drawer: `shadow-2xl`
- Subtle: `shadow-sm`

## Buttons
- Primary (solid): `bg-espresso text-cream px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-charcoal transition-colors`
- Accent (gold): `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors`
- Outlined: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-espresso hover:text-cream transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names in UPPERCASE with wide letter-spacing
- Warm, consistent color temperature throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic stock photo aesthetics
- No cluttered layouts
