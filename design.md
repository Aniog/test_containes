# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- `obsidian`: #1A1714 — Deep warm black, primary background for hero/dark sections
- `charcoal`: #2C2825 — Secondary dark surface
- `ivory`: #FAF7F2 — Warm off-white, primary light background
- `cream`: #F2EDE4 — Slightly deeper warm cream, card backgrounds
- `parchment`: #E8E0D4 — Dividers, subtle borders

### Accent Colors
- `gold`: #C9A96E — Warm antique gold, primary accent (CTAs, highlights)
- `gold-light`: #DFC08A — Lighter gold for hover states
- `gold-dark`: #A8854A — Darker gold for pressed states

### Text Colors
- `ink`: #1A1714 — Primary text on light backgrounds
- `muted`: #6B6560 — Secondary/muted text
- `whisper`: #9E9690 — Placeholder, captions

### Semantic
- `surface`: #FAF7F2 — Page background (light mode)
- `surface-alt`: #F2EDE4 — Card/section alternate background

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — `font-serif`
- **Sans-serif (body, UI, labels)**: Inter — `font-sans`

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light tracking-wide`
- Section headline: `text-3xl md:text-4xl font-serif font-light`
- Product name: `text-xl font-serif uppercase tracking-widest`
- Body: `text-sm font-sans text-muted`
- Label/UI: `text-xs font-sans uppercase tracking-widest`
- Price: `text-lg font-sans font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between elements

## Borders & Dividers
- Hairline divider: `border-parchment` (1px)
- Card border: `border border-parchment`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-obsidian/5`
- Drawer/modal: `shadow-2xl shadow-obsidian/20`

## Buttons
- Primary (CTA): `bg-gold text-ivory px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-ink text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-300`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Generous whitespace — let the jewelry breathe
- Warm gold (#C9A96E) as the single accent color
- Hairline borders (1px) for dividers
- Large editorial imagery
- Subtle hover states, never jarring

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (too casual)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
- No bold/heavy font weights for headings (use light/regular)
