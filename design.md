# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette

### Primary Colors
- `brand-navy`: `#0D1B2A` — Deep navy, primary background for dark sections
- `brand-steel`: `#1C3A5E` — Steel blue, secondary dark surface
- `brand-gold`: `#C9A84C` — Warm gold, primary accent / CTA
- `brand-gold-light`: `#E8C96A` — Lighter gold for hover states

### Neutral Colors
- `brand-white`: `#F8F9FA` — Off-white, light section backgrounds
- `brand-gray`: `#6B7280` — Body text on light backgrounds
- `brand-light`: `#EEF1F5` — Very light gray for alternating sections
- `brand-dark-text`: `#1A2332` — Dark text on light backgrounds

## Typography

### Fonts
- **Headings:** `Playfair Display` — Elegant serif for titles (Google Fonts)
- **Body / UI:** `Inter` — Clean sans-serif for body text and UI elements

### Scale
- Hero title: `text-5xl md:text-7xl font-bold` (Playfair Display)
- Section title: `text-3xl md:text-4xl font-bold` (Playfair Display)
- Card title: `text-xl font-semibold` (Inter)
- Body: `text-base` (Inter)
- Caption/label: `text-sm text-brand-gray` (Inter)

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-12`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Primary Button (CTA)
```
bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full
hover:bg-brand-gold-light transition-all duration-300
```

### Secondary Button (Outline)
```
border-2 border-brand-gold text-brand-gold font-semibold px-8 py-3 rounded-full
hover:bg-brand-gold hover:text-brand-navy transition-all duration-300
```

### Cards
```
bg-white rounded-2xl shadow-lg p-8 border border-gray-100
hover:shadow-xl transition-shadow duration-300
```

### Dark Section Cards
```
bg-brand-steel rounded-2xl p-8 border border-white/10
```

## Do's
- Use Playfair Display for all headings to maintain elegance
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace between sections
- Use subtle gradients on dark sections (navy to steel)
- Use uppercase tracking for section labels/eyebrows

## Don'ts
- Don't use pure black backgrounds — use brand-navy instead
- Don't use more than 2 accent colors per section
- Don't crowd elements — spacing is key to elegance
- Don't use low-contrast text combinations
