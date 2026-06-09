# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Formed.
- **Tone:** Professional, trustworthy, industrial yet refined

## Color Palette

### Primary Colors
- `steel-900`: #0f1923 — Deep navy/charcoal (primary dark background)
- `steel-800`: #1a2535 — Dark navy (secondary background, cards)
- `steel-700`: #243044 — Mid navy (borders, dividers)
- `steel-600`: #2e3d56 — Lighter navy (hover states)
- `steel-100`: #e8ecf2 — Light silver (light backgrounds)
- `steel-50`: #f4f6f9 — Near white (page background)

### Accent Colors
- `gold-500`: #c9a84c — Warm gold (primary CTA, highlights)
- `gold-400`: #d4b86a — Lighter gold (hover states)
- `gold-300`: #dfc98a — Pale gold (subtle accents)

### Neutral Colors
- `slate-text`: #334155 — Body text on light backgrounds
- `muted-text`: #64748b — Secondary/muted text

## Typography

### Font Family
- **Headings:** 'Playfair Display', serif — elegant, authoritative
- **Body:** 'Inter', sans-serif — clean, readable

### Scale
- `text-xs`: 0.75rem — labels, badges
- `text-sm`: 0.875rem — captions, metadata
- `text-base`: 1rem — body text
- `text-lg`: 1.125rem — lead text
- `text-xl`: 1.25rem — card titles
- `text-2xl`: 1.5rem — section subtitles
- `text-3xl`: 1.875rem — section titles (mobile)
- `text-4xl`: 2.25rem — section titles (desktop)
- `text-5xl`: 3rem — hero subtitle
- `text-6xl`: 3.75rem — hero title (desktop)

### Font Weights
- `font-normal`: 400 — body
- `font-medium`: 500 — UI labels
- `font-semibold`: 600 — card titles
- `font-bold`: 700 — section headings
- `font-extrabold`: 800 — hero headline

## Spacing
- Use Tailwind spacing scale consistently
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-steel-700/30`
- Card shadow: `shadow-lg`
- Hover shadow: `shadow-xl`
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons, `rounded-full` for badges
- Divider: `border-t border-steel-700/20`

## Buttons
- **Primary CTA:** `bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold rounded-lg px-6 py-3 transition-all`
- **Secondary:** `border border-gold-500 text-gold-500 hover:bg-gold-500/10 rounded-lg px-6 py-3 transition-all`
- **Ghost/Nav:** `text-steel-100 hover:text-gold-500 transition-colors`

## Component Patterns

### Navigation
- Sticky top nav with dark background (`bg-steel-900/95 backdrop-blur`)
- Logo left, links center/right
- Gold accent on active/hover links
- Mobile hamburger menu

### Hero Section
- Full-viewport height
- Dark overlay on background image
- Large serif headline + sans-serif subtext
- Two CTA buttons (primary + secondary)
- Subtle animated gradient or particle overlay

### Product Cards
- Dark card background (`bg-steel-800`)
- Gold accent top border on hover
- Product image top, content below
- Tag/badge for product category
- "Learn More" link with arrow

### Feature/Stats Row
- Light background section
- Icon + number + label layout
- Gold icons

### Contact Section
- Dark background
- Simple form with gold-accented inputs
- Map or address block alongside

## Do's
- Use Playfair Display for all headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace
- Use subtle hover transitions (200–300ms)
- Keep text contrast high (WCAG AA minimum)

## Don'ts
- Don't use bright/neon colors
- Don't crowd elements — breathe
- Don't use more than 2 font families
- Don't use pure black (#000) — use steel-900 instead
- Don't use white text on gold backgrounds
