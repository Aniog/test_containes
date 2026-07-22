# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep warm neutrals, gold accents, generous whitespace.

## Color Palette

### Base Colors (added to Tailwind config)
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `stone`: #8C7B6B — muted body text, captions
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — hover states, subtle accents
- `gold-dark`: #A07840 — pressed states, borders

### Usage
- Page background: `parchment` (#F5F0E8)
- Primary text: `obsidian` (#1A1714)
- Secondary/muted text: `stone` (#8C7B6B)
- Accent/CTA: `gold` (#C9A96E)
- Nav (transparent → solid): transparent → `obsidian`
- Footer: `espresso`
- Cards: `cream`

## Typography

### Fonts
- Serif: **Cormorant Garamond** — headings, product names, hero text, brand name
- Sans: **Manrope** — body, UI labels, nav links, prices, buttons

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond, font-light, tracking-wide
- Section title: `text-3xl md:text-4xl` Cormorant Garamond, font-light
- Product name: `text-xl` Cormorant Garamond, UPPERCASE, `tracking-[0.15em]`
- Body: `text-sm md:text-base` Manrope, font-normal, `text-stone`
- Price: `text-lg` Manrope, font-medium, `text-obsidian`
- Nav links: `text-xs` Manrope, UPPERCASE, `tracking-[0.12em]`
- Button: `text-xs` Manrope, UPPERCASE, `tracking-[0.15em]`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Hairline dividers: `border-t border-gold/20`

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian hover:bg-gold-dark px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300`
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300`
- Ghost: `text-obsidian hover:text-gold text-xs uppercase tracking-[0.12em] transition-colors duration-200`

### Cards
- Product card: `bg-cream overflow-hidden group cursor-pointer`
- Soft shadow on hover: `hover:shadow-lg transition-shadow duration-300`
- Image aspect: `aspect-[3/4]` for product images

### Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use gold accent sparingly — it should feel precious
- Generous whitespace between sections
- Thin hairline dividers (1px, gold at 20% opacity)
- Warm, editorial image treatments

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp edges feel more premium)
- No heavy drop shadows
- No generic e-commerce blue/red color schemes
- No tight spacing or cluttered layouts
