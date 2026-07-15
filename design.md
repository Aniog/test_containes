# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `ivory` (#FDFBF7) — warm off-white
- **Surface**: `cream` (#F7F3ED) — slightly darker warm neutral for cards/sections
- **Foreground / Text**: `charcoal` (#1C1917) — warm near-black
- **Muted text**: `stone` (#78716C) — warm gray for secondary text
- **Accent**: `gold` (#B8860B) — dark goldenrod for CTAs, links, highlights
- **Accent hover**: `gold-dark` (#96700A) — deeper gold for hover states
- **Accent light**: `gold-light` (#D4A843) — lighter gold for subtle accents
- **Border**: `border` (#E7E0D6) — warm light border

## Typography
- **Headings / Product names**: `Cormorant Garamond` (serif), weights 400/500/600
- **Body / UI**: `Inter` (sans-serif), weights 300/400/500/600
- **Product names**: UPPERCASE, letter-spacing: 0.12em
- **Section headings**: Normal case or uppercase depending on context

### Scale (Tailwind)
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section title: `text-3xl md:text-4xl font-serif font-normal`
- Product name: `text-sm font-sans uppercase tracking-widest`
- Body: `text-base font-sans font-normal`
- Small/caption: `text-xs font-sans tracking-wide uppercase`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy shadows, use `border border-border` or subtle `shadow-sm`
- Hairline dividers: `border-t border-border`

## Components
- **Buttons (primary)**: `bg-gold text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors`
- **Buttons (outline)**: `border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-colors`
- **Links**: `text-gold hover:text-gold-dark underline-offset-4`
- **Cards**: minimal border, generous padding, hover scale/shadow transition

## Do's
- Use warm tones throughout
- Keep layouts airy with generous whitespace
- Use serif for emotional/brand moments, sans for functional UI
- Subtle hover transitions (opacity, translateY, scale)
- Thin hairline borders as dividers

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No generic e-commerce blue/green CTAs
