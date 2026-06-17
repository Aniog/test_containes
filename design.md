# ARTITECT MACHINERY — Visual Design System

A precision-industrial brand built around metalwork. The feel is **elegant, architectural, and trustworthy**, but the layout patterns stay simple, generous, and easy to scan so any operator, plant manager, or distributor can navigate without friction.

## Brand Voice
- Engineered. Premium. Calm.
- Speaks to industry professionals: fabrication shops, HVAC, roofing, signage, sheet-metal workshops.
- Avoid loud marketing language. Prefer specs, capability, and clarity.

## Color Palette
Use these as named Tailwind colors (configured in `tailwind.config.js`).

| Token | Hex | Usage |
|---|---|---|
| `ink` | `#0E1116` | Primary text, dark backgrounds, footer |
| `graphite` | `#1F242C` | Secondary dark surface |
| `steel` | `#3A4250` | Body text on light, secondary buttons |
| `silver` | `#A7B0BD` | Borders, dividers, muted text |
| `mist`   | `#E6E9EE` | Subtle section backgrounds |
| `bone`   | `#F6F7F9` | Page background |
| `paper`  | `#FFFFFF` | Cards, primary surface |
| `ember`  | `#C8842A` | Accent (precision/heat). Buttons, highlights |
| `ember-soft` | `#E9C99A` | Hover/tint variants |

Do:
- Use `bg-bone` for page bg, `bg-paper` for cards, `text-ink` for headings, `text-steel` for body.
- Reserve `ember` for primary CTAs, key numbers, and underlines on hover.

Don't:
- Don't put `text-silver` on `bg-mist` (low contrast).
- Don't use `ember` as a large background fill — it's an accent only.

## Typography
- Headings: **Cormorant Garamond** (serif) — gives the elegant edge.
- Body / UI: **Inter** (sans) — clear, technical, readable.
- Loaded via Google Fonts in `index.html`.

Scale (Tailwind utilities):
- Display: `text-5xl md:text-6xl lg:text-7xl font-light tracking-tight` (serif)
- H1: `text-4xl md:text-5xl font-light` (serif)
- H2: `text-3xl md:text-4xl font-light` (serif)
- H3: `text-xl md:text-2xl font-medium` (sans)
- Eyebrow: `text-xs uppercase tracking-[0.2em] text-ember font-medium`
- Body: `text-base md:text-lg text-steel leading-relaxed`
- Caption: `text-sm text-silver`

## Layout
- Container: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid: 12-col on desktop, single column under `md:`.
- Generous whitespace; thin hairline dividers (`border-silver/40`).

## Components
- **Buttons**:
  - Primary: `bg-ink text-paper hover:bg-graphite px-6 py-3 rounded-none tracking-wide text-sm uppercase`
  - Accent: `bg-ember text-paper hover:bg-ember/90 ...`
  - Ghost: `border border-ink text-ink hover:bg-ink hover:text-paper ...`
- **Cards**: `bg-paper border border-silver/40 hover:border-ink transition-colors`. No big shadows — keep architectural.
- **Inputs**: `bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink rounded-none`.
- **Eyebrow line**: small horizontal `ember` line `w-10 h-px` next to eyebrow text.

## Imagery
- Use stock images via `data-strk-img` / `data-strk-bg`. Subjects: precision sheet metal folders, brushed steel, factory-floor architecture, close-ups of bent metal edges.
- Prefer wide cinematic ratios (`16x9`, `3x2`) for hero, `4x3` for product cards.
- Imagery should feel cool-toned (steel, slate); avoid cartoonish renders.

## Interaction
- Subtle: hover transitions `duration-300`. No bouncy animation.
- Underline accents grow from left on link hover (`after:` pseudo, ember color).

## Don'ts
- No drop shadows on cards in main grid.
- No gradients besides a single dark hero overlay (`from-ink/80 to-ink/20`).
- No emoji in UI. No bright primary colors outside `ember`.
- Never put white text on `mist` or `bone`.
