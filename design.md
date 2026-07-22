# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (in tailwind.config.js)
- `ivory`: #FAF7F2 — primary light background, page base
- `cream`: #F2EDE4 — secondary background, card surfaces
- `parchment`: #E8E0D4 — borders, dividers, subtle fills
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold
- `obsidian`: #1A1714 — primary text, dark backgrounds
- `charcoal`: #2D2926 — secondary dark, nav solid bg
- `stone`: #6B6259 — muted body text, captions
- `blush`: #D4B8A8 — soft warm accent for testimonials/UGC

### Usage Rules
- Page background: `ivory` (#FAF7F2)
- Primary text: `obsidian` (#1A1714)
- Body/secondary text: `stone` (#6B6259)
- Accent/CTA: `gold` (#C9A96E)
- Borders/dividers: `parchment` (#E8E0D4)
- Dark sections (hero overlay, footer): `obsidian` (#1A1714)
- Cards: `cream` (#F2EDE4) or white

### DO NOT
- Use pure white (#FFFFFF) as page background — use `ivory` instead
- Use pure black — use `obsidian`
- Use blue, purple, or cool-toned accents
- Use low-contrast text (stone on cream is fine; stone on ivory is fine; never stone on parchment)

## Typography

### Fonts
- Heading/Display: Cormorant Garamond (serif) — loaded via Google Fonts
- Body/UI: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Nav logo: `font-cormorant text-2xl tracking-[0.2em] uppercase`
- Nav links: `font-inter text-xs tracking-[0.12em] uppercase`
- Body: `font-inter text-sm leading-relaxed`
- Price: `font-inter text-base font-medium`
- Button: `font-inter text-xs tracking-[0.15em] uppercase`
- Caption/label: `font-inter text-xs tracking-[0.1em] uppercase text-stone`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline divider: `border-t border-parchment`
- Card border: `border border-parchment`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-obsidian/5`
- Drawer/modal: `shadow-2xl shadow-obsidian/20`

## Buttons
- Primary (CTA): `bg-gold text-obsidian hover:bg-gold-light px-8 py-3 text-xs tracking-[0.15em] uppercase font-inter transition-colors duration-300`
- Outlined: `border border-obsidian text-obsidian hover:bg-obsidian hover:text-ivory px-8 py-3 text-xs tracking-[0.15em] uppercase transition-colors duration-300`
- Ghost/text: `text-stone hover:text-obsidian text-xs tracking-[0.1em] uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Subtle — never flashy

## Component Patterns
- Product card: image (aspect-[3/4]), product name uppercase serif, price sans-serif, hover reveals second image
- Section headers: centered, serif, with thin hairline above/below or just generous spacing
- Trust bar: thin strip, small caps, centered, `bg-obsidian text-ivory`
- UGC strip: horizontal scroll, 9:16 cards, serif caption overlay
