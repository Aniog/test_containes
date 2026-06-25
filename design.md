# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name:** ARTITECT MACHINERY
- **Tagline:** Precision Engineered. Perfectly Folded.
- **Tone:** Elegant, professional, trustworthy, industrial yet refined

## Color Palette

### Primary Colors
- `steel-900`: #0D1117 — Deep near-black for backgrounds and headers
- `steel-800`: #161B22 — Dark surface for cards and sections
- `steel-700`: #21262D — Slightly lighter dark surface
- `steel-600`: #30363D — Border and divider color
- `steel-400`: #8B949E — Muted text, secondary labels
- `steel-200`: #C9D1D9 — Body text on dark backgrounds
- `steel-100`: #E6EDF3 — Light text, headings on dark

### Accent Colors
- `gold-500`: #C9A84C — Primary accent, CTAs, highlights (elegant gold)
- `gold-400`: #D4B96A — Hover state for gold elements
- `gold-300`: #E0CC8A — Light gold tint

### Neutral / Light
- `slate-50`: #F8FAFC — Light section backgrounds
- `slate-100`: #F1F5F9 — Alternate light backgrounds
- `slate-200`: #E2E8F0 — Borders on light backgrounds
- `slate-600`: #475569 — Body text on light backgrounds
- `slate-800`: #1E293B — Headings on light backgrounds
- `slate-900`: #0F172A — Deep text on light backgrounds

## Typography

### Font Family
- **Primary:** "Playfair Display" — elegant serif for headings
- **Secondary:** "Inter" — clean sans-serif for body text and UI

### Scale
- Display: `text-5xl` to `text-7xl`, font-weight 700, Playfair Display
- H1: `text-4xl md:text-5xl`, font-weight 700, Playfair Display
- H2: `text-3xl md:text-4xl`, font-weight 600, Playfair Display
- H3: `text-xl md:text-2xl`, font-weight 600, Inter
- Body: `text-base`, font-weight 400, Inter
- Small/Caption: `text-sm`, font-weight 400, Inter, muted color

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Component Styles

### Buttons
- **Primary CTA:** `bg-gold-500 text-steel-900 hover:bg-gold-400 font-semibold px-8 py-3 rounded-sm tracking-wide uppercase text-sm`
- **Secondary/Outline:** `border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-steel-900 px-8 py-3 rounded-sm tracking-wide uppercase text-sm`
- **Ghost:** `text-steel-200 hover:text-gold-500 transition-colors`

### Cards
- Dark variant: `bg-steel-800 border border-steel-600 rounded-sm p-6`
- Light variant: `bg-white border border-slate-200 rounded-sm p-6 shadow-sm`

### Navigation
- Background: `bg-steel-900/95 backdrop-blur-sm`
- Logo: Playfair Display, gold accent on "ARTITECT"
- Links: `text-steel-200 hover:text-gold-500 transition-colors text-sm tracking-widest uppercase`

### Section Dividers
- Use thin gold horizontal rules: `border-t border-gold-500/30`
- Alternate section backgrounds: dark (`bg-steel-900`) and light (`bg-slate-50`)

## Visual Style
- **Aesthetic:** Industrial elegance — dark steel tones with warm gold accents
- **Borders:** Prefer `rounded-sm` (very slight rounding) for an industrial feel
- **Shadows:** Subtle, use `shadow-lg` sparingly on cards
- **Images:** Full-bleed hero images with dark overlay; product images on clean backgrounds
- **Icons:** Lucide React, stroke-width 1.5, sized `w-6 h-6` or `w-8 h-8`
- **Animations:** Subtle — `transition-all duration-300` for hovers

## Do's
- Use Playfair Display for all headings to convey elegance
- Use gold accents sparingly for maximum impact
- Maintain high contrast between text and backgrounds
- Use uppercase tracking-widest for labels and nav items
- Keep layouts clean with generous whitespace

## Don'ts
- Don't use rounded-full or pill shapes — keep industrial feel
- Don't use bright/neon colors
- Don't crowd elements — whitespace is key
- Don't use light text on light backgrounds or dark text on dark backgrounds
- Don't mix too many font weights
