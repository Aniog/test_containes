# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery

## Color Palette

### Primary Colors
- `steel-900`: #0D1117 — Deep charcoal black (primary background)
- `steel-800`: #161B22 — Dark navy-black (card backgrounds)
- `steel-700`: #21262D — Muted dark (borders, dividers)
- `steel-600`: #30363D — Medium dark (secondary surfaces)
- `steel-400`: #8B949E — Muted text, captions
- `steel-200`: #C9D1D9 — Body text on dark
- `steel-100`: #E6EDF3 — Light text, headings on dark

### Accent Colors
- `gold-500`: #C9A84C — Premium gold accent (CTAs, highlights)
- `gold-400`: #D4B96A — Lighter gold (hover states)
- `gold-300`: #E0CC8A — Subtle gold tint

### Neutral / Light Mode
- `white`: #FFFFFF
- `gray-50`: #F6F8FA — Light section backgrounds
- `gray-100`: #EAEEF2 — Borders on light

## Typography

### Font Family
- **Primary:** "Barlow", sans-serif — headings, brand name (geometric, industrial feel)
- **Secondary:** "Inter", sans-serif — body text, UI elements

### Scale
- Display: `text-5xl` to `text-7xl`, font-weight 700–800, tracking-tight
- H1: `text-4xl md:text-5xl`, font-weight 700
- H2: `text-3xl md:text-4xl`, font-weight 600
- H3: `text-xl md:text-2xl`, font-weight 600
- Body: `text-base`, font-weight 400, leading-relaxed
- Caption: `text-sm`, font-weight 400, text-steel-400

### Do's
- Use Barlow for all headings and the brand name
- Use Inter for body copy, labels, and UI text
- Keep headings tight with `tracking-tight`
- Use uppercase sparingly for labels and badges

### Don'ts
- Don't use more than 2 font families
- Don't use light font weights on dark backgrounds

## Spacing & Layout
- Max content width: `max-w-7xl`
- Section padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Border radius: `rounded-xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Primary Button (Gold CTA)
```
bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg
```

### Secondary Button (Outline)
```
border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-steel-900 font-semibold px-8 py-3 rounded-full transition-all duration-200
```

### Card (Dark)
```
bg-steel-800 border border-steel-700 rounded-xl p-6 md:p-8 hover:border-gold-500 transition-all duration-300
```

### Section Label / Badge
```
text-gold-500 text-sm font-semibold uppercase tracking-widest
```

## Visual Style
- **Aesthetic:** Industrial elegance — dark steel tones with gold accents
- **Imagery:** High-quality machinery photography, clean workshop environments
- **Icons:** Lucide React, stroke-based, consistent 24px size
- **Shadows:** Subtle, dark-toned (`shadow-xl shadow-black/30`)
- **Borders:** Thin, `border-steel-700`, accent with `border-gold-500` on hover/active
- **Gradients:** Dark-to-darker for hero sections, subtle gold gradient for accents

## Navigation
- Sticky top nav, dark background with blur backdrop
- Logo: Brand name in Barlow, gold accent on "ARTITECT"
- Links: `text-steel-200 hover:text-gold-500 transition-colors`
- CTA button in nav: gold filled

## Sections Order (Single Page)
1. Navigation
2. Hero
3. Products
4. Why Choose Us (Features)
5. About
6. Contact
7. Footer
