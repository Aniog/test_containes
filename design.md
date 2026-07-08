# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry brand for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — Deep warm black (primary background for hero/dark sections)
- `charcoal`: #2C2825 — Slightly lighter dark (secondary dark surfaces)
- `ivory`: #FAF7F2 — Warm off-white (primary light background)
- `cream`: #F2EDE4 — Slightly deeper warm cream (section alternates)
- `stone`: #E8E0D4 — Warm light gray (borders, dividers)

### Accent Colors
- `gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `gold-light`: #DFC08A — Lighter gold (hover states)
- `gold-dark`: #A8854A — Deeper gold (pressed states)

### Text Colors
- `ink`: #1A1714 — Primary text on light backgrounds
- `muted`: #7A6E63 — Secondary/muted text
- `whisper`: #B5A99A — Placeholder, captions

## Typography

### Fonts
- Headings: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Inter" (sans-serif) — clean, readable

### Scale
- Display: `text-5xl` to `text-7xl`, `font-light`, `tracking-wide` (Cormorant)
- H1: `text-4xl md:text-5xl`, `font-light`, `tracking-widest` (Cormorant)
- H2: `text-3xl md:text-4xl`, `font-light`, `tracking-wide` (Cormorant)
- H3: `text-xl md:text-2xl`, `font-light`, `tracking-wide` (Cormorant)
- Product Name: `text-lg`, `font-medium`, `uppercase`, `tracking-[0.2em]` (Cormorant)
- Body: `text-sm md:text-base`, `font-normal` (Inter)
- Caption: `text-xs`, `tracking-wider`, `uppercase` (Inter)
- Label: `text-xs`, `font-medium`, `uppercase`, `tracking-[0.15em]` (Inter)

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-stone/50` (1px)
- Card borders: `border border-stone/30`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Soft card shadow: `shadow-[0_4px_24px_rgba(26,23,20,0.06)]`
- Hover shadow: `shadow-[0_8px_32px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid): `bg-gold text-ivory hover:bg-gold-light` — full-width on mobile
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-ivory`
- Ghost: `text-ink hover:text-gold underline-offset-4 hover:underline`
- All buttons: `uppercase tracking-[0.15em] text-xs font-medium py-3 px-8 transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names
- Use generous whitespace — let the jewelry breathe
- Use warm tones (ivory, cream, gold) for light sections
- Use obsidian/charcoal for dark hero sections
- Hairline borders only — never thick borders
- Subtle hover effects — scale, shadow, color shift

## Don'ts
- No bright/neon colors
- No thick borders or heavy shadows
- No rounded corners on editorial images
- No generic blue/purple CTA buttons
- No crowded layouts
- No Comic Sans or system fonts for headings
