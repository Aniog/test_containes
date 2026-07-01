# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.

## Color Palette
- **Obsidian** `#1A1714` — primary dark background, nav solid state
- **Parchment** `#F5F0E8` — warm off-white, page background
- **Champagne** `#C9A96E` — primary accent (gold), CTAs, highlights
- **Champagne Light** `#E8D5A3` — hover states, subtle accents
- **Champagne Dark** `#A07840` — pressed states, borders
- **Warm Stone** `#8C7B6B` — secondary text, muted labels
- **Blush** `#F0E8E0` — card backgrounds, section alternates
- **Ivory** `#FAF7F2` — lightest surface

## Typography
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI labels, navigation links
- Product names: UPPERCASE, letter-spacing: 0.15em
- Section headings: sentence case, light weight (300–400)

## Tailwind Classes Reference
- Accent bg: `bg-champagne`
- Accent text: `text-champagne`
- Dark bg: `bg-obsidian`
- Page bg: `bg-parchment`
- Card bg: `bg-blush`
- Muted text: `text-stone`
- Serif font: `font-serif`
- Sans font: `font-sans`
- Product name: `font-serif uppercase tracking-widest`

## Spacing & Layout
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Grid gaps: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-champagne/20`
- Divider: `h-px bg-champagne/20`

## Buttons
- Primary: `bg-champagne text-obsidian hover:bg-champagne-dark font-sans uppercase tracking-widest text-xs px-8 py-3`
- Outlined: `border border-champagne text-champagne hover:bg-champagne hover:text-obsidian`
- Ghost: `text-champagne hover:text-champagne-light`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline borders, never thick
- Serif for anything emotional/brand; sans for functional UI
- Warm, slightly desaturated photography tones

## Don'ts
- No bright white (#FFFFFF) backgrounds — use parchment/ivory
- No harsh black — use obsidian
- No generic blue links
- No rounded pill buttons (use subtle radius: rounded-sm or rounded)
- No busy patterns or gradients
