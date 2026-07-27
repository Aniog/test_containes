# SSourcing China — Design System

A professional B2B sourcing-agent website. Clean, trustworthy, international, practical.

## Brand Voice
- Professional, clear, practical. No exaggerated claims ("#1", "best", "guaranteed").
- Confident but factual. Numbers are illustrative and labeled as such.

## Typography
- Font family: **Inter** (Google Fonts), weights 300–800.
- Headings: tight tracking, weight 700–800.
- Body: weight 400, line-height 1.6–1.7.
- Example classes: `font-sans`, `tracking-tight`, `leading-relaxed`.

## Color Palette (Tailwind tokens)
Defined as CSS variables in `tailwind.config.js` → `theme.extend.colors`.

- `brand` (deep navy / trust): `#0B2A4A`  — primary brand color, headers, footer
- `brand-600`: `#0E3A66`
- `brand-700`: `#0B2A4A`
- `accent` (industrial amber / energy): `#E08A1E` — CTAs, highlights
- `accent-600`: `#C7760F`
- `ink` (near-black text): `#0F172A`
- `slate` scale for muted text and borders (Tailwind default slate)
- `surface` (page background): `#F7F9FC`
- `card`: `#FFFFFF`

Semantic pairs:
- `text-ink` on `bg-surface` / `bg-card`
- `text-white` on `bg-brand`
- `text-brand` on `bg-white` for links
- `text-slate-500` for secondary/muted text (always readable on light surfaces)

## Layout & Spacing
- Max content width: `max-w-7xl` (1280px), centered with `px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Cards: `rounded-xl border border-slate-200 bg-white p-6 shadow-sm`.
- Consistent gaps: `gap-6`, `gap-8` for grids.

## Components
- Buttons:
  - Primary CTA: `bg-accent text-white hover:bg-accent-600 rounded-lg px-6 py-3 font-semibold`
  - Secondary: `bg-brand text-white hover:bg-brand-600 rounded-lg px-6 py-3 font-semibold`
  - Ghost/outline: `border border-slate-300 text-ink hover:bg-slate-50 rounded-lg px-6 py-3 font-semibold`
- Cards with icon + title + description.
- Section headers: small uppercase eyebrow (`text-accent font-semibold tracking-wider uppercase text-sm`), then `h2` heading.

## Imagery
- Realistic factory, QC inspection, shipping/port, warehouse visuals via `data-strk-img` / `data-strk-bg`.
- No generic stock-photo clichés of handshakes; prefer machinery, inspection tables, containers, production lines.

## Do's
- Use generous whitespace.
- Keep contrast high (dark text on light backgrounds).
- Use the accent color sparingly for CTAs and key highlights.
- Mobile-first responsive with `md:` and `lg:` breakpoints.

## Don'ts
- No light text on light backgrounds.
- No hardcoded arbitrary hex codes in JSX (use tokens).
- No exaggerated superlatives in copy.
- No single-column stacking on desktop.
