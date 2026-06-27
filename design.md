# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `velmora-obsidian`: `#1A1714` — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: `#2C2825` — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: `#3D3733` — Warm dark stone (borders, dividers)

### Accent Colors
- `velmora-gold`: `#C9A96E` — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: `#E2C98A` — Light gold (hover states, shimmer)
- `velmora-gold-muted`: `#A8895A` — Muted gold (secondary accents)

### Neutral / Surface Colors
- `velmora-cream`: `#F7F3EE` — Warm off-white (light backgrounds, cards on light)
- `velmora-linen`: `#EDE8E1` — Warm linen (section backgrounds)
- `velmora-sand`: `#D4C9B8` — Warm sand (borders on light, muted text on dark)
- `velmora-mist`: `#B8AFA4` — Warm mist (placeholder text, secondary text)

### Text Colors
- `velmora-text-dark`: `#1A1714` — Primary text on light backgrounds
- `velmora-text-light`: `#F7F3EE` — Primary text on dark backgrounds
- `velmora-text-muted`: `#8A7F74` — Muted/secondary text

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI, labels)**: Manrope — clean, modern, readable

### Scale
- Display: `text-6xl` to `text-8xl`, Cormorant Garamond, `font-light` or `font-normal`
- H1: `text-4xl md:text-5xl lg:text-6xl`, Cormorant Garamond
- H2: `text-3xl md:text-4xl`, Cormorant Garamond
- H3: `text-xl md:text-2xl`, Cormorant Garamond
- Product names: `text-lg md:text-xl`, Cormorant Garamond, `uppercase tracking-widest`
- Body: `text-sm md:text-base`, Manrope, `font-normal`
- Labels/UI: `text-xs`, Manrope, `uppercase tracking-wider`
- Prices: `text-base md:text-lg`, Manrope, `font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px)
- Section padding: `py-16 md:py-24 px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border-velmora-stone/30` (on dark) or `border-velmora-sand/50` (on light)
- Card borders: `border border-velmora-stone/20`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for subtle softness

## Shadows
- Soft card shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.08)]`
- Hover shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.14)]`
- Dark card shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.3)]`

## Buttons

### Primary (Accent CTA)
- Background: `bg-velmora-gold`
- Text: `text-velmora-obsidian`
- Hover: `bg-velmora-gold-light`
- Padding: `px-8 py-3`
- Font: Manrope, `text-xs uppercase tracking-widest font-semibold`
- No border radius (editorial): `rounded-none`

### Outlined
- Border: `border border-velmora-gold`
- Text: `text-velmora-gold`
- Hover: `bg-velmora-gold text-velmora-obsidian`
- Same padding and font as primary

### Ghost (on dark)
- Text: `text-velmora-cream`
- Hover: `text-velmora-gold`
- Underline on hover

## Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover image scale: `hover:scale-105`
- Opacity fade: `transition-opacity duration-200`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and section labels
- Keep backgrounds warm (obsidian, charcoal, cream, linen) — never cold gray
- Use gold accent sparingly but confidently
- Generous padding and whitespace
- Thin hairline borders, not thick borders
- Large editorial imagery

## Don'ts
- No cold grays or blues
- No rounded pill buttons (use square/minimal radius)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce patterns (no rainbow sale banners, no "BUY NOW" in red)
- No small cramped text
