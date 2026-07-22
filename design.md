# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (in tailwind.config.js)
- `obsidian`: #1A1714 — deep warm black, primary background for hero/dark sections
- `charcoal`: #2C2825 — secondary dark surface
- `mink`: #4A3F38 — warm dark brown, borders, dividers
- `champagne`: #C9A96E — warm gold accent, CTAs, highlights
- `champagne-light`: #DFC08A — lighter gold for hover states
- `champagne-pale`: #F5EDD8 — very pale gold, warm off-white backgrounds
- `ivory`: #FAF7F2 — near-white page background
- `stone`: #8C7B6E — muted warm gray, secondary text
- `parchment`: #EDE4D4 — warm light surface for cards/sections

### Usage
- Page background: `ivory` (#FAF7F2)
- Primary text: `obsidian` (#1A1714)
- Secondary text: `stone` (#8C7B6E)
- Accent / CTA: `champagne` (#C9A96E)
- Dark sections: `obsidian` (#1A1714) with `ivory` text
- Dividers: `parchment` (#EDE4D4) or `mink` (#4A3F38) on dark

## Typography

### Fonts
- Serif: Cormorant Garamond (headings, product names, editorial text)
- Sans: Manrope (body, UI, labels, nav links)

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em]`
- Price: `font-manrope text-lg font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label/nav: `font-manrope text-xs uppercase tracking-[0.12em]`
- Caption: `font-manrope text-xs text-stone`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between elements

## Borders & Dividers
- Hairline divider: `border-t border-parchment` or `border-t border-mink` on dark
- Card border: `border border-parchment`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for buttons

## Buttons
- Primary (accent): `bg-champagne text-obsidian px-8 py-3 text-xs uppercase tracking-[0.15em] font-manrope font-medium hover:bg-champagne-light transition-colors`
- Outlined: `border border-obsidian text-obsidian px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-obsidian hover:text-ivory transition-colors`
- Outlined light (on dark): `border border-ivory text-ivory px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-ivory hover:text-obsidian transition-colors`

## Shadows
- Card hover: `shadow-md shadow-mink/10`
- Drawer: `shadow-2xl`

## Animations
- Transitions: `transition-all duration-300 ease-in-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Nav scroll: smooth opacity + background transition

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Generous padding and whitespace
- Warm gold (#C9A96E) as the single accent color
- Thin hairline borders
- Large editorial imagery

## Don'ts
- No bright colors, no neon, no generic blue CTAs
- No tight spacing or cramped layouts
- No rounded-full buttons (too casual)
- No drop shadows that look heavy or cheap
- No generic stock photo vibes — warm, editorial, jewelry-focused
