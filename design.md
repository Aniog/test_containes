# SSourcing China — Visual Style Guide

## Brand personality
Professional, trustworthy, international B2B. Practical and clear — no exaggerated
claims, no hype. The look should feel like a reliable operations partner: calm,
structured, precise.

## Color palette (registered in tailwind.config.js, never use raw hex in class strings)

| Token            | Value     | Usage |
|------------------|-----------|-------|
| `brand` (50–950) | Blue scale (primary 600 = #2563eb, deep 900 = #1e3a8a) | Primary buttons, links, icons, highlights, section accents |
| `accent` (400–600, 500 = #f59e0b) | Warm amber | Secondary CTA, small highlights, badges (use sparingly) |
| `ink`            | #0f172a   | Main headings, high-emphasis text |
| `slate-body`     | #475569   | Body copy on light surfaces |
| `paper`          | #f8fafc   | Page background / light section background |
| `line`           | #e2e8f0   | Borders and dividers |

- Dark sections use `bg-ink` (or `bg-brand-950`) with `text-slate-300` body copy
  and white headings.
- Light sections alternate between `bg-white` and `bg-paper` to create rhythm.
- NEVER place light grey text on light backgrounds or white text on mid-tone blue.
  On `bg-brand-600` buttons text is always white. On dark hero, body copy minimum
  contrast is `text-slate-300`.

## Typography
- Font: Inter (loaded in index.html), applied globally in index.css.
- H1 (hero): `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
- H2 (section titles): `text-3xl md:text-4xl font-bold tracking-tight text-ink`
- H3 (cards): `text-lg md:text-xl font-semibold text-ink`
- Eyebrow labels: `text-sm font-semibold uppercase tracking-wider text-brand-600`
- Body: `text-base md:text-lg text-slate-body leading-relaxed`
- Small/caption: `text-sm text-slate-500`

## Layout & spacing
- Page container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card grids: `grid gap-6 md:gap-8` with `sm:grid-cols-2 lg:grid-cols-3`
- Desktop uses multi-column layouts; single-column stacking only below `md`.

## Surfaces & components
- Cards: `rounded-xl border border-line bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow`
- Buttons:
  - Primary: `rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors`
  - Secondary (on dark): `rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10`
  - Accent CTA: `bg-accent-500 text-ink hover:bg-accent-400`
- Badges/pills: `inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700`
- Stat numbers: `text-3xl md:text-4xl font-bold text-white` (dark) or `text-brand-600` (light)
- Forms: labels `text-sm font-medium text-ink`; inputs `rounded-lg border border-line bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20`

## Imagery
- Realistic factory floors, QC inspectors at work, container ports / logistics,
  warehouses, product close-ups. Use the strk-img tagging system.
- Hero uses a dark overlay (`bg-ink/70`) over a background image so white text
  stays readable.
- Cards with images use `aspect-[4/3]` or `aspect-[16/9]` crops with `object-cover`.

## Iconography
- Lucide icons only. Default size `h-6 w-6`, in `text-brand-600` on light
  surfaces, inside `rounded-lg bg-brand-50 p-3` icon tiles for feature cards.

## Do's and Don'ts
- DO keep generous white space; sections must breathe.
- DO use factual, measured copy ("verified supplier shortlist in 7–10 days", not
  "the best suppliers in China").
- DON'T use gradients everywhere; at most a subtle `from-ink to-brand-950` on the
  hero/footer.
- DON'T use accent amber for large surfaces — it is a highlight color only.
- DON'T hardcode hex values in class strings; use the named tokens above.
