# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #3D3835 — muted dark surface

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `cream`: #FAF7F2 — card/section background
- `linen`: #EDE8DF — subtle dividers, hover states

### Gold Accent (the brand accent)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active state

### Text
- `ink`: #1A1714 — primary body text on light
- `mist`: #6B6460 — secondary/muted text
- `whisper`: #9C9490 — placeholder, captions

### Utility
- `white`: #FFFFFF
- `divider`: #E8E3DA — hairline dividers

## Typography

### Fonts
- **Serif (headings, product names, logo):** Cormorant Garamond — `font-serif`
- **Sans (body, UI, labels):** Manrope — `font-sans`

### Scale
- Display: `text-5xl` to `text-7xl`, `font-light`, `tracking-wide`, serif
- H1: `text-4xl`, `font-light`, serif
- H2: `text-3xl`, `font-light`, serif
- H3: `text-xl`, `font-normal`, serif
- Product Name: `text-sm` to `text-base`, `uppercase`, `tracking-[0.2em]`, serif
- Body: `text-sm` to `text-base`, `font-normal`, sans
- Label/Caption: `text-xs`, `uppercase`, `tracking-[0.15em]`, sans
- Price: `text-lg`, `font-medium`, sans

## Spacing
- Section padding: `py-20` to `py-28`
- Container max-width: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-6` to `gap-8`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-divider` (1px)
- Card borders: none (use shadow or background contrast)
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Subtle: `shadow-sm` with warm tint
- Card hover: `shadow-md` transition

## Buttons
- Primary (CTA): `bg-gold text-white px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold-light transition-all`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all`
- Ghost: `text-ink text-xs uppercase tracking-[0.15em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Fade in: `opacity-0 → opacity-100`
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (parchment, cream) or deep (obsidian)
- Use gold accent sparingly — it should feel precious
- Large editorial imagery, full-bleed sections
- Thin hairline dividers between sections

## Don'ts
- No bright/cool colors (no blue, no green, no purple)
- No rounded-full buttons (too casual)
- No heavy drop shadows
- No generic stock photo vibes — warm, editorial, intimate
- No cluttered layouts — generous whitespace always
