# ARTITECT MACHINERY — Visual Design Language

## Brand Personality
Industrial elegance. Precision engineered. Confident, premium, technical.
The site should feel like the product itself: solid, considered, and built to last.

## Color Palette

### Core Surfaces
- `ink` (#070B14) — deep near-black, primary background
- `slate-950` (#0B1220) — main page background
- `slate-900` (#10182A) — section/alternating background
- `slate-850` (#141C2E) — card / panel surface
- `slate-800` (#1B2440) — elevated card / hover state
- `line` (#1F2A40) — 1px borders, dividers

### Accent
- `copper-500` (#D4A24C) — primary accent (warm metallic)
- `copper-400` (#E2BC73) — accent hover / highlight
- `copper-600` (#B98A3A) — accent pressed
- `steel-400` (#7B8FA8) — secondary cool accent, used for icons / details

### Text
- `text` (#E6EBF2) — primary text on dark
- `text-muted` (#9AA5B8) — secondary text
- `text-dim` (#5E6A82) — labels, captions

## Typography
- Primary font: **Inter** (Google Fonts) — system fallback allowed
- Headlines: weight 600–700, tight tracking (-0.02em)
- Eyebrow labels: uppercase, tracking 0.18em, weight 500, 12px
- Body: 16–18px, line-height 1.6
- Numerical stats: tabular-nums

## Spacing & Layout
- Page max width: 1280px
- Section vertical padding: 96px desktop / 64px mobile
- Generous whitespace between elements
- 12-column grid for product listings

## Visual Style
- 1px borders in `line` color, never shadows as the only elevation cue
- Subtle gradient washes on hero / section dividers (copper-500 → transparent, 6% opacity)
- 4px corner radius for cards, 6px for buttons, full radius for circular icons
- 1px solid border-bottom underline on links (copper-500)
- Industrial accent: thin horizontal copper rule under section eyebrows

## Component Patterns
- Cards: `bg-slate-850` + `border border-line` + `rounded-md` + 24px padding
- Buttons primary: `bg-copper-500 text-ink hover:bg-copper-400`
- Buttons secondary: `border border-line text-text hover:border-copper-500`
- Inputs: `bg-ink border border-line text-text placeholder:text-text-dim focus:border-copper-500`

## Imagery
- Dark, moody industrial photography (machinery, metalwork, sparks, factories)
- Aspect ratios: 16x9 for hero, 4x3 for product cards, 3x2 for capability cards
- Always overlay a 30–60% black gradient on imagery for text legibility

## Don'ts
- Never use bright primary colors (no red, no pure blue)
- Never use drop shadows alone for elevation — pair with borders
- Never center-align body text in long paragraphs
- Never use more than 2 font sizes per row of content
- Never let body text fall below 4.5:1 contrast on its background
- Never use emoji icons — only Lucide line icons at 1.5px stroke
