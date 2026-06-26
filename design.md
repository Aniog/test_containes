# ARTITECT MACHINERY — Design System

## Brand
ARTITECT MACHINERY is a precision manufacturer of sheet metal folding machines
(double folding machines, double folders, metal folders, metal folding machines).
The visual style is **elegant but user-friendly**: industrial precision conveyed
through refined typography, generous whitespace, and a calm, confident palette.

## Typography
- Display / Headings: **Inter**, weights 600–800, tight letter-spacing on large headings.
- Body: **Inter**, weight 400–500, line-height 1.6.
- Eyebrow / labels: Inter 600, uppercase, wide tracking (`tracking-widest`), small size.

## Color Palette (Tailwind tokens)
- `ink` (primary dark): `#0E1116` — deep charcoal, used for text and dark sections.
- `steel` (secondary): `#1F2A37` — slate steel for cards/footers.
- `accent` (brand): `#B8862F` — refined brass/gold, used sparingly for CTAs, rules, highlights.
- `accent-soft`: `#C9A24B` — lighter brass for hover states.
- `mist` (page background): `#F5F6F8` — soft neutral.
- `paper` (card surface): `#FFFFFF`.
- `muted` (secondary text): `#5B6470`.

Map these as named colors in Tailwind via `@theme` in `index.css`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 lg:px-8`.
- Card radius: `rounded-xl` (12px). Buttons: `rounded-md`.
- Borders: `border border-slate-200` on light cards; subtle `shadow-sm`.

## Visual Style
- Elegant: thin gold rules under eyebrows, generous whitespace, restrained color.
- User-friendly: clear hierarchy, large readable text, obvious CTAs, responsive grids.
- Use brass accent for primary buttons and key highlights only.
- Dark sections (ink/steel) for hero and footer; light sections (mist/paper) for content.

## Do's
- Use semantic token pairs (text-ink on bg-mist, text-white on bg-ink).
- Keep contrast high — never light text on light surfaces.
- Use `data-strk-img` / `data-strk-bg` for all imagery.

## Don'ts
- No arbitrary hex codes in JSX class strings — use the named tokens.
- No low-contrast placeholder text.
- No cluttered mobile layouts — stack to single column on small screens.
