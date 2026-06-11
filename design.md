# SSourcing China — Visual Style Guide

A clean, trustworthy, international B2B style. Conveys reliability, manufacturing scale, and operational rigor without flashy or consumer-style aesthetics.

## Brand Personality
Professional, practical, transparent, factual. No exaggerated claims. Reads like a serious sourcing/QC partner, not a marketplace.

## Color Palette
Primary dark navy (trust, industrial seriousness):
- `bg-slate-900` (#0f172a)
- `bg-slate-800` (#1e293b)
- text on dark: `text-white`, `text-slate-200`, `text-slate-300`

Accent (CTA, links, highlights — controlled use):
- Amber/orange for CTA: `bg-amber-500` / hover `bg-amber-600`, text on amber: `text-slate-900`
- Sky blue for secondary highlights / icons / trust badges: `text-sky-600`, `bg-sky-50`, border `border-sky-200`

Neutrals (page backgrounds, cards, dividers):
- Page backgrounds: `bg-white`, alternating `bg-slate-50`
- Cards: `bg-white` with `border border-slate-200` and `shadow-sm`
- Body text: `text-slate-700`
- Muted/secondary text: `text-slate-500`
- Headings: `text-slate-900`
- Borders/dividers: `border-slate-200`

Status colors (for case study metrics, badges):
- Success: `text-emerald-600`, `bg-emerald-50`, `border-emerald-200`
- Warning: `text-amber-600`, `bg-amber-50`

## Typography
- Font family: Inter (Google Fonts), already loaded via index.html.
- Display headings: `font-semibold` or `font-bold`, tight tracking `tracking-tight`.
- Body: `font-normal`, comfortable line height `leading-relaxed`.

Scale (Tailwind):
- Hero headline: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- Section heading H2: `text-3xl md:text-4xl font-bold tracking-tight`
- Sub heading H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-slate-700`
- Small/meta: `text-sm text-slate-500`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Borders & Radius
- Cards/buttons: `rounded-xl` (or `rounded-2xl` for hero panels)
- Inputs: `rounded-lg`
- Subtle shadow: `shadow-sm`, hero/CTA `shadow-md` only when needed.

## Buttons
Primary CTA:
```
inline-flex items-center justify-center rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 py-3 transition-colors
```
Secondary:
```
inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3
```
Ghost on dark:
```
inline-flex items-center justify-center rounded-lg border border-white/30 text-white hover:bg-white/10 font-medium px-5 py-2.5
```

## Cards
```
rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow
```

## Navigation
- White background, slim, sticky: `bg-white/90 backdrop-blur border-b border-slate-200`.
- Active link: `text-slate-900 font-semibold`. Inactive: `text-slate-600 hover:text-slate-900`.

## Imagery
- Realistic factory floors, QC inspections, shipping/containers, port and warehouse scenes.
- Use `data-strk-img` / `data-strk-bg` tags. Avoid stock-cliché business handshake photos.
- Hero imagery should imply manufacturing scale and operational rigor (containers, factory aisles, QC checklists).

## Do
- Use generous whitespace and clear hierarchy.
- Always pair amber CTAs with dark text (`text-slate-900`) for legibility.
- Use subtle dividers and consistent border colors.
- Use icons (Lucide) at `w-5 h-5` to `w-6 h-6` for inline, `w-8 h-8` for feature cards inside a tinted square.

## Don't
- Don't use bright/neon gradients.
- Don't put light text on light backgrounds.
- Don't combine more than two accent colors per page.
- Don't use playful/consumer typography.
- Don't make unverifiable claims (e.g. "Best in China"). Stick to factual capability statements.
