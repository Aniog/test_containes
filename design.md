# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Built to Last.
- **Tone:** Authoritative, precise, trustworthy, modern industrial

## Color Palette

### Primary Colors
- `brand-navy`: `#0D1B2A` — Deep navy, primary background for dark sections
- `brand-steel`: `#1C3A5E` — Steel blue, secondary dark surface
- `brand-accent`: `#C8922A` — Warm gold/amber, primary accent (CTAs, highlights)
- `brand-accent-light`: `#E8B04A` — Lighter gold for hover states

### Neutral Colors
- `brand-white`: `#F8F9FA` — Off-white, light backgrounds
- `brand-light`: `#EEF1F5` — Very light grey, section backgrounds
- `brand-mid`: `#8A9BB0` — Mid grey, secondary text
- `brand-dark`: `#1A2535` — Near-black, body text on light backgrounds

### Semantic
- Success: `#2E7D32`
- Error: `#C62828`

## Typography

### Font Family
- **Headings:** `Playfair Display` — Elegant serif for brand authority
- **Body / UI:** `Inter` — Clean sans-serif for readability

### Scale
- `text-xs`: 12px — Labels, captions
- `text-sm`: 14px — Secondary text, metadata
- `text-base`: 16px — Body text
- `text-lg`: 18px — Lead text, card descriptions
- `text-xl`: 20px — Section subtitles
- `text-2xl`: 24px — Card headings
- `text-3xl`: 30px — Section headings
- `text-4xl`: 36px — Page headings
- `text-5xl`: 48px — Hero headings
- `text-6xl`: 60px — Hero display

### Font Weights
- Regular: 400 — Body text
- Medium: 500 — UI labels, nav links
- Semibold: 600 — Card titles, subheadings
- Bold: 700 — Section headings
- Extrabold: 800 — Hero headings

## Spacing
- Use Tailwind's default spacing scale
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Container max-width: `max-w-7xl mx-auto px-6`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full` (primary), `rounded-lg` (secondary)
- Inputs: `rounded-lg`
- Dividers: `border-brand-steel/30`

## Shadows
- Cards: `shadow-lg hover:shadow-2xl transition-shadow`
- Hero overlay: `bg-gradient-to-r from-brand-navy/90 to-brand-steel/70`
- Navbar: `shadow-md`

## Component Styles

### Primary Button
```
bg-brand-accent text-white font-semibold px-8 py-3 rounded-full
hover:bg-brand-accent-light transition-all duration-200
```

### Secondary Button (Outline)
```
border-2 border-brand-accent text-brand-accent font-semibold px-8 py-3 rounded-full
hover:bg-brand-accent hover:text-white transition-all duration-200
```

### Ghost Button (on dark bg)
```
border-2 border-white text-white font-semibold px-8 py-3 rounded-full
hover:bg-white hover:text-brand-navy transition-all duration-200
```

### Product Card
```
bg-white rounded-2xl shadow-lg overflow-hidden
hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
```

### Section Heading
```
font-playfair text-3xl md:text-4xl font-bold text-brand-navy
```

### Section Subtitle
```
text-brand-mid text-lg max-w-2xl mx-auto
```

## Layout Patterns

### Dark Section (navy bg)
- Background: `bg-brand-navy`
- Text: `text-white`
- Subtext: `text-brand-mid`

### Light Section
- Background: `bg-brand-white` or `bg-brand-light`
- Text: `text-brand-dark`
- Subtext: `text-brand-mid`

### Hero
- Full-viewport height: `min-h-screen`
- Background image with dark overlay
- Centered or left-aligned content

## Do's
- Use Playfair Display for all headings to convey elegance
- Use gold accent sparingly for maximum impact
- Maintain generous whitespace between sections
- Use high-quality industrial imagery
- Keep navigation clean and minimal

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — whitespace is key
- Don't use more than 2 font families
- Don't use low-contrast text combinations
- Don't use rounded corners on images (use overflow-hidden on containers instead)
