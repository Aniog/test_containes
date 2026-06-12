# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Professional, authoritative, trustworthy, yet approachable

## Color Palette

### Primary Colors
- `brand-navy`: `#0D1B2A` — Deep navy, primary backgrounds, headers
- `brand-steel`: `#1C3A5E` — Steel blue, secondary backgrounds, cards
- `brand-accent`: `#C8922A` — Warm gold/amber, CTAs, highlights, accents
- `brand-accent-light`: `#E8B84B` — Lighter gold for hover states

### Neutral Colors
- `brand-white`: `#FFFFFF`
- `brand-offwhite`: `#F5F7FA` — Light page backgrounds
- `brand-light`: `#E8ECF2` — Borders, dividers
- `brand-muted`: `#8A9BB0` — Muted text, captions
- `brand-dark`: `#1A2535` — Body text on light backgrounds

## Typography

### Fonts
- **Headings:** `Playfair Display` — Elegant serif for titles (Google Fonts)
- **Body / UI:** `Inter` — Clean sans-serif for readability

### Scale
- Display: `text-5xl` to `text-7xl`, `font-bold`, Playfair Display
- H1: `text-4xl md:text-5xl`, `font-bold`, Playfair Display
- H2: `text-3xl md:text-4xl`, `font-semibold`, Playfair Display
- H3: `text-xl md:text-2xl`, `font-semibold`, Inter
- Body: `text-base`, `font-normal`, Inter, `leading-relaxed`
- Caption/Label: `text-sm`, `font-medium`, Inter, `text-brand-muted`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-lg` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary CTA:** `bg-brand-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent-light transition-all`
- **Secondary:** `border-2 border-brand-accent text-brand-accent px-8 py-3 rounded-lg font-semibold hover:bg-brand-accent hover:text-white transition-all`
- **Ghost (on dark):** `border border-white/30 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-all`

### Cards
- Light: `bg-white rounded-xl shadow-md border border-brand-light p-6 hover:shadow-xl transition-shadow`
- Dark: `bg-brand-steel rounded-xl p-6 border border-white/10`

### Navigation
- Background: `bg-brand-navy/95 backdrop-blur-sm`
- Links: `text-white/80 hover:text-brand-accent transition-colors`
- Active: `text-brand-accent`

### Dividers / Accents
- Gold accent line: `w-16 h-1 bg-brand-accent rounded-full`
- Section labels: uppercase, `text-brand-accent text-sm font-semibold tracking-widest`

## Do's
- Use Playfair Display for all section headings
- Use gold accent (`brand-accent`) sparingly for maximum impact
- Maintain generous whitespace between sections
- Use subtle gradients on dark sections: `from-brand-navy to-brand-steel`
- Use `shadow-xl` on hover for interactive cards

## Don'ts
- Don't use pure black backgrounds — use `brand-navy` instead
- Don't use more than 2 accent colors per section
- Don't use small font sizes below `text-sm` for body content
- Don't crowd elements — maintain at least `gap-6` in grids
