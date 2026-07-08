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
- `champagne-pale`: #F5ECD7 — very pale gold, warm tint backgrounds
- `ivory`: #FAF7F2 — near-white warm background (main page bg)
- `stone`: #8C7B6E — muted warm gray-brown, body text on light
- `stone-light`: #B5A89A — lighter muted, captions, secondary text
- `cream`: #F0EAE0 — card backgrounds, section fills

## Typography

### Fonts
- Headings / Product Names: **Cormorant Garamond** (serif) — elegant, editorial
- Body / UI: **Manrope** (sans-serif) — clean, modern, readable

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section title: `text-3xl md:text-4xl font-cormorant font-light tracking-wide`
- Product name: `text-xl font-cormorant uppercase tracking-widest`
- Body: `text-sm font-manrope text-stone`
- Caption: `text-xs font-manrope text-stone-light tracking-wider uppercase`
- Price: `text-lg font-manrope font-medium text-charcoal`
- Nav links: `text-xs font-manrope uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-mink/20`
- Card border: `border border-champagne-pale`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Buttons
- Primary (CTA): `bg-champagne text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-manrope hover:bg-champagne-light transition-colors`
- Outlined: `border border-champagne text-champagne px-8 py-3 text-xs tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors`
- Ghost: `text-stone text-xs tracking-widest uppercase hover:text-charcoal transition-colors`

## Shadows
- Card hover: `shadow-lg shadow-mink/10`
- Drawer: `shadow-2xl shadow-obsidian/30`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and nav links
- Use champagne gold as the single accent color
- Keep whitespace generous — let the jewelry breathe
- Use warm ivory/cream backgrounds, never pure white or cold gray
- Hairline borders only — never thick borders

## Don'ts
- No bright colors, no neon, no blue/purple accents
- No rounded corners on editorial image containers
- No drop shadows on text
- No generic e-commerce blue buttons
- No tight spacing or cluttered layouts
