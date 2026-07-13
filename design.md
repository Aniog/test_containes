# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Authoritative, precise, trustworthy, modern

## Color Palette

### Primary Colors
- `brand-navy`: `#0D1B2A` — Deep navy, primary background for dark sections
- `brand-steel`: `#1C3A5E` — Steel blue, secondary dark surface
- `brand-accent`: `#C8922A` — Warm gold/amber, primary accent (CTAs, highlights)
- `brand-accent-light`: `#E8B84B` — Lighter gold for hover states

### Neutral Colors
- `brand-white`: `#F8F9FA` — Off-white, light backgrounds
- `brand-light`: `#EEF1F5` — Very light gray, section backgrounds
- `brand-mid`: `#8A9BB0` — Mid gray-blue, muted text
- `brand-dark`: `#1A2535` — Near-black for text on light backgrounds

## Typography

### Fonts
- **Headings:** `Playfair Display` — Elegant serif for authority and prestige
- **Body / UI:** `Inter` — Clean sans-serif for readability

### Scale
- Hero heading: `text-5xl md:text-7xl font-bold` (Playfair Display)
- Section heading: `text-3xl md:text-4xl font-bold` (Playfair Display)
- Card heading: `text-xl font-semibold` (Inter)
- Body: `text-base` (Inter)
- Caption/label: `text-sm text-brand-mid` (Inter)

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- **Primary CTA:** `bg-brand-accent text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-accent-light transition-all`
- **Secondary/Outline:** `border-2 border-brand-accent text-brand-accent px-8 py-3 rounded-full hover:bg-brand-accent hover:text-brand-navy transition-all`
- **Ghost (dark bg):** `text-white border border-white/30 px-8 py-3 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all`

### Cards
- Light surface: `bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- Dark surface: `bg-brand-steel rounded-2xl`
- Border accent: `border-t-4 border-brand-accent`

### Navigation
- Sticky, dark background: `bg-brand-navy/95 backdrop-blur`
- Logo: Playfair Display, white
- Links: Inter, `text-brand-mid hover:text-white`
- Active: `text-brand-accent`

### Sections
- Dark sections: `bg-brand-navy text-white`
- Light sections: `bg-brand-white text-brand-dark`
- Alternate: `bg-brand-light text-brand-dark`

## Do's
- Use gold accent sparingly for maximum impact (CTAs, highlights, borders)
- Maintain generous whitespace for an upscale feel
- Use subtle gradients on dark sections for depth
- Use uppercase tracking for labels and category tags: `uppercase tracking-widest text-xs`

## Don'ts
- Don't use pure black backgrounds — use `brand-navy` instead
- Don't use bright/neon colors
- Don't crowd elements — keep breathing room
- Don't use more than 2 font families
