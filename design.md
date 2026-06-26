# ARTITECT MACHINERY — Design System

## Brand
ARTITECT MACHINERY — a manufacturer of precision sheet-metal folding machines
(double folding machines, double folders, sheet metal folders, sheet metal
folding machines, metal folders, metal folder machines, metal folding machines).

## Visual Style
Elegant but user-friendly. Industrial precision meets refined minimalism.
Clean, confident, premium engineering feel. Generous whitespace, strong
typographic hierarchy, subtle metallic accents.

## Typography
- Headings: "Inter", weights 700–800, tight tracking, large sizes.
- Body: "Inter", weights 400–500, relaxed line-height (1.6).
- Eyebrow / labels: "Inter", weight 600, uppercase, wide letter-spacing.
- Example classes: `font-bold tracking-tight`, `text-sm font-semibold uppercase tracking-[0.2em]`

## Color Palette (Tailwind v4 @theme tokens)
- `--color-ink: #0b1220`        (near-black, primary text / dark sections)
- `--color-steel: #1f2a3a`      (dark slate, footer / dark panels)
- `--color-graphite: #3b4656`   (secondary text on light)
- `--color-silver: #8a94a6`     (muted text)
- `--color-mist: #eef1f6`       (light section background)
- `--color-cloud: #f7f9fc`      (page background)
- `--color-accent: #c8a24a`     (refined gold accent — premium industrial)
- `--color-accent-dark: #a8842f`
- `--color-line: #e2e7ef`       (hairline borders)

Semantic pairs:
- Dark sections: `bg-ink text-white` / `bg-steel text-white`
- Light sections: `bg-cloud text-ink` / `bg-mist text-ink`
- Accent: `bg-accent text-ink` / `text-accent`

## Borders & Shadows
- Hairline borders: `border border-line`
- Cards: `rounded-xl border border-line bg-white shadow-sm`
- Elevated cards on hover: `hover:shadow-lg transition-shadow`
- Buttons: `rounded-md` (sharp-ish, industrial)

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid gaps: `gap-8` / `gap-6`

## Components
- Buttons: solid accent (`bg-accent text-ink hover:bg-accent-dark hover:text-white`),
  outline (`border border-ink text-ink hover:bg-ink hover:text-white`),
  ghost-on-dark (`border border-white/30 text-white hover:bg-white hover:text-ink`).
- Eyebrow label with a short gold rule before it.
- Section title large, with a muted supporting paragraph beneath.

## Do's
- Use generous whitespace and strong hierarchy.
- Keep contrast high (dark text on light, white text on dark).
- Use the gold accent sparingly for emphasis (rules, CTAs, icons).
- Use Inter font consistently.

## Don'ts
- No low-contrast text (e.g. light gray on white).
- No arbitrary hex codes in JSX — use the theme tokens.
- No cluttered mobile layouts — stack to single column on small screens.
- No rounded-full buttons (keep industrial `rounded-md`).
