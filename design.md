# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `obsidian`: #1A1714 — Deep warm black, primary background for hero/dark sections
- `charcoal`: #2C2825 — Secondary dark surface
- `ivory`: #FAF7F2 — Warm off-white, primary light background
- `cream`: #F2EDE4 — Slightly deeper warm cream, card backgrounds
- `parchment`: #E8E0D4 — Dividers, subtle borders

### Accent Colors
- `gold`: #C9A96E — Warm gold, primary accent (CTAs, highlights, icons)
- `gold-light`: #DFC08A — Lighter gold for hover states
- `gold-dark`: #A8854A — Darker gold for pressed states

### Text Colors
- `ink`: #1A1714 — Primary text on light backgrounds
- `mist`: #6B6560 — Secondary/muted text
- `whisper`: #9E9690 — Placeholder, disabled text

### Tailwind Config Names
```js
colors: {
  obsidian: '#1A1714',
  charcoal: '#2C2825',
  ivory: '#FAF7F2',
  cream: '#F2EDE4',
  parchment: '#E8E0D4',
  gold: '#C9A96E',
  'gold-light': '#DFC08A',
  'gold-dark': '#A8854A',
  ink: '#1A1714',
  mist: '#6B6560',
  whisper: '#9E9690',
}
```

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600, 700
- **Sans-serif (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-normal`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed text-mist`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em] font-medium`
- Price: `font-manrope text-base font-semibold text-ink`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-parchment` (1px)
- Card border: `border border-parchment`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (CTA): `bg-gold text-ivory font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Outlined: `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-ivory transition-all duration-300`
- Ghost: `text-ink font-manrope text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights
- Warm ivory/cream backgrounds for most sections

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No bold/heavy serif weights for body text
