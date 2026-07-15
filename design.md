# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Industry:** Industrial sheet metal folding machinery
- **Tone:** Elegant, professional, trustworthy, user-friendly

---

## Color Palette

### Primary Colors
- `steel-900`: #0D1117 — Deep charcoal black (primary background)
- `steel-800`: #161B22 — Dark surface (cards, sections)
- `steel-700`: #21262D — Elevated surface (nav, modals)
- `steel-600`: #30363D — Borders, dividers
- `steel-400`: #8B949E — Muted text, secondary labels
- `steel-200`: #C9D1D9 — Body text on dark backgrounds
- `steel-100`: #E6EDF3 — Headings on dark backgrounds

### Accent Colors
- `gold-500`: #C9A84C — Primary accent (CTA buttons, highlights)
- `gold-400`: #D4B96A — Hover state for gold
- `gold-300`: #E0CC8A — Light gold tint
- `gold-100`: #F5EDD0 — Very light gold (subtle backgrounds)

### Semantic Colors
- `success`: #3FB950
- `error`: #F85149
- `warning`: #D29922

---

## Typography

### Font Family
- **Primary:** Inter (Google Fonts) — used for all UI text
- **Display:** Inter with tight tracking for headings

### Scale
- `text-xs`: 0.75rem — Labels, captions
- `text-sm`: 0.875rem — Secondary body, metadata
- `text-base`: 1rem — Primary body text
- `text-lg`: 1.125rem — Lead paragraphs
- `text-xl`: 1.25rem — Card titles
- `text-2xl`: 1.5rem — Section subtitles
- `text-3xl`: 1.875rem — Section headings
- `text-4xl`: 2.25rem — Page headings
- `text-5xl`: 3rem — Hero headings
- `text-6xl`: 3.75rem — Display headings

### Weights
- `font-light`: 300 — Decorative, large display
- `font-normal`: 400 — Body text
- `font-medium`: 500 — UI labels, nav items
- `font-semibold`: 600 — Card titles, subheadings
- `font-bold`: 700 — Section headings
- `font-extrabold`: 800 — Hero display text

---

## Spacing & Layout

### Container
- Max width: `max-w-7xl` (1280px)
- Horizontal padding: `px-6 md:px-10 lg:px-16`

### Section Spacing
- Vertical padding: `py-20 md:py-28`
- Section gap: `gap-16`

### Component Spacing
- Card padding: `p-8`
- Button padding: `px-8 py-3`
- Input padding: `px-4 py-3`

---

## Components

### Buttons

**Primary (Gold CTA):**
```
bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-8 py-3 rounded-sm tracking-wide uppercase text-sm transition-all duration-200
```

**Secondary (Outline):**
```
border border-steel-600 hover:border-gold-500 text-steel-200 hover:text-gold-500 font-medium px-8 py-3 rounded-sm tracking-wide uppercase text-sm transition-all duration-200
```

**Ghost:**
```
text-steel-400 hover:text-gold-500 font-medium text-sm transition-colors duration-200
```

### Cards
```
bg-steel-800 border border-steel-600 hover:border-gold-500 rounded-sm p-8 transition-all duration-300
```

### Navigation
- Background: `bg-steel-900/95 backdrop-blur-sm`
- Height: `h-16 md:h-20`
- Logo: Gold accent color
- Links: `text-steel-200 hover:text-gold-500`

### Section Dividers
- Use thin gold lines: `border-t border-gold-500/20`
- Or subtle gradient separators

---

## Visual Style

### Aesthetic
- Industrial elegance: clean lines, precise geometry
- Dark theme with gold accents — premium machinery feel
- Generous whitespace for readability
- Subtle grid/mesh backgrounds for depth

### Borders & Radius
- Prefer `rounded-sm` (2px) for industrial precision feel
- Use `rounded` (4px) for softer UI elements
- Avoid large border radii — keep it sharp and precise

### Shadows
- Cards: `shadow-lg shadow-black/40`
- Elevated: `shadow-xl shadow-black/60`
- Gold glow: `shadow-gold-500/20`

### Imagery
- Industrial machinery photography
- Clean studio shots on dark backgrounds
- Technical precision imagery

---

## Do's and Don'ts

### Do's
- Use gold (#C9A84C) sparingly as a true accent
- Maintain high contrast between text and backgrounds
- Use uppercase tracking for labels and CTAs
- Keep layouts clean and grid-based
- Use subtle animations (200-300ms transitions)

### Don'ts
- Don't use rounded-full on rectangular UI elements
- Don't use bright/saturated colors other than gold accents
- Don't crowd sections — use generous padding
- Don't use light backgrounds for main sections
- Don't mix font weights randomly — follow the scale
