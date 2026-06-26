# ARTITECT MACHINERY — Design System

## Brand
ARTITECT MACHINERY — a manufacturer of sheet-metal folding machines
(double folding machine, double folder, sheet metal folder, sheet metal
folding machine, metal folder, metal folder machine, metal folding machine).

## Visual Style
Elegant but user-friendly. Industrial precision meets refined minimalism.
Clean, confident, trustworthy. Generous whitespace, strong typographic
hierarchy, subtle borders, and a single confident accent color.

## Typography
- Headings: "Inter", weights 700–800, tight tracking, large sizes.
- Body: "Inter", weight 400–500, relaxed line-height.
- Eyebrow / labels: uppercase, letter-spacing wide, small size, muted color.

## Color Palette (Tailwind tokens)
- Background base: `bg-slate-50` (page) / `bg-white` (cards)
- Dark surfaces: `bg-slate-900` (footer, hero overlay)
- Primary accent: amber/industrial gold — use `amber-500` / `amber-600`
  for CTAs, highlights, and active states. Text on accent: `text-slate-950`.
- Foreground text: `text-slate-900` (headings), `text-slate-600` (body)
- Borders: `border-slate-200` (light), `border-slate-800` (dark)
- Muted: `text-slate-500`, `bg-slate-100`

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card radius: `rounded-2xl`
- Card border: `border border-slate-200`
- Card shadow: `shadow-sm hover:shadow-lg` with `transition-shadow`

## Components
- Buttons: primary = `bg-amber-500 text-slate-950 hover:bg-amber-600`,
  rounded-lg, font-semibold, px-6 py-3. Secondary = outline slate.
- Cards: white bg, rounded-2xl, border, hover lift.
- Badges: small uppercase amber/slate pills.
- Section headers: eyebrow + big heading + supporting paragraph, centered or left.

## Do's
- Use Inter font everywhere.
- Keep contrast high: dark text on light, light text on dark.
- Use amber sparingly as the single accent.
- Generous whitespace between sections.

## Don'ts
- No clashing colors or rainbow palettes.
- No low-contrast text (e.g. light gray on white).
- No hardcoded arbitrary hex codes in JSX — use Tailwind tokens.
- No cramped mobile layouts — stack columns on small screens.
