# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors (added to Tailwind config as named tokens)
- `obsidian`: #1A1714 — deep warm black, primary background for hero/dark sections
- `espresso`: #2C2420 — slightly lighter dark, card backgrounds on dark
- `parchment`: #F7F3EE — warm off-white, primary light background
- `linen`: #EDE8E1 — slightly darker warm white, section alternates
- `stone`: #C4B9AD — warm mid-tone, borders, dividers
- `driftwood`: #8C7B6E — muted warm brown, secondary text on light
- `gold`: #C9A96E — warm gold accent, primary brand accent
- `gold-light`: #E2C98A — lighter gold for hover states
- `gold-dark`: #A8854A — darker gold for pressed states
- `ivory`: #FAF7F2 — near-white for text on dark backgrounds

## Typography

### Fonts
- **Serif (headings, product names, logo):** Cormorant Garamond — `font-serif`
- **Sans (body, UI, labels):** Inter — `font-sans`

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light tracking-wide`
- Section headline: `text-3xl md:text-4xl font-serif font-light`
- Product name: `text-xl font-serif uppercase tracking-widest`
- Body: `text-sm font-sans font-normal leading-relaxed`
- Label/UI: `text-xs font-sans uppercase tracking-widest`
- Price: `text-lg font-sans font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-stone/30` (1px)
- Card borders: `border border-stone/20`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Subtle card shadow: `shadow-sm` with warm tint
- Hover elevation: `shadow-md transition-shadow duration-300`

## Buttons
- Primary (CTA): `bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-driftwood hover:text-obsidian text-xs uppercase tracking-widest`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- No jarring motion — everything subtle and smooth

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (parchment, linen, obsidian) — never cold white or pure black
- Use gold accent sparingly — it should feel precious, not garish
- Generous padding around all content
- Thin hairline borders only

## Don'ts
- No bright/saturated colors
- No rounded-full on rectangular buttons
- No generic blue links
- No tight spacing or cramped layouts
- No cold grays or pure whites
- No bold/heavy serif weights (keep it light/regular)
