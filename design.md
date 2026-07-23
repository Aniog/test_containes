# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry brand for women 25–45.

## Color Palette

### Base Colors (added to Tailwind config)
- `ivory`: `#FAF8F4` — primary background, warm off-white
- `ivory-dark`: `#F2EDE5` — secondary background, section alternates
- `obsidian`: `#1A1714` — primary text, deep warm black
- `obsidian-light`: `#2E2A26` — secondary dark surface
- `stone`: `#6B6560` — muted body text, captions
- `stone-light`: `#9C9490` — placeholder, disabled
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E8D5A8` — hover states, soft accents
- `gold-dark`: `#A07840` — pressed states, borders
- `blush`: `#E8D5C4` — warm highlight, trust bar bg

### Usage
- Page background: `ivory`
- Section alternates: `ivory-dark`
- Primary text: `obsidian`
- Body/caption text: `stone`
- Accent/CTA: `gold`
- Hover accent: `gold-light`
- Dark surfaces (nav solid, footer): `obsidian`

## Typography

### Fonts
- Serif: Cormorant Garamond (headings, product names, editorial)
- Sans: Manrope (body, UI, labels, prices)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm text-stone leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-lg font-medium text-obsidian`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace throughout

## Borders & Dividers
- Hairline divider: `border-t border-gold/20`
- Card border: `border border-gold/15`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(201,169,110,0.12)]`
- Drawer: `shadow-[-4px_0_40px_rgba(26,23,20,0.15)]`

## Buttons
- Primary (solid): `bg-gold text-ivory font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-obsidian font-manrope text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Generous padding and whitespace
- Warm gold accents sparingly — let ivory/obsidian breathe
- Hairline borders (1px, low opacity gold)
- Large editorial imagery

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial elements
- No generic e-commerce blue/green CTAs
- No tight spacing or crowded layouts
- No bold/heavy serif weights (keep it light/medium)
