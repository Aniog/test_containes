# SSourcing China — Visual Design System

A clean, trustworthy, international B2B aesthetic. Think industrial reliability + modern SaaS clarity. No flashy gradients, no exaggerated marketing visuals.

## Brand Personality
- Professional, practical, calm, confident.
- International English audience, decision-makers (procurement, founders, importers).
- Inspired by sober B2B sites: Stripe, Linear, Maersk, Flexport.

## Color Palette
Use these named Tailwind colors (configured in `tailwind.config.js`):

- `brand` (deep navy, primary surface for headings, footer, CTAs):
  - 50 `#f1f5f9` 100 `#e2e8f0` 500 `#1e3a5f` 600 `#16304d` 700 `#11253a` 800 `#0c1c2c` 900 `#08131f`
- `accent` (signal red-orange, used sparingly for CTAs, highlights):
  - 500 `#d94f1e` 600 `#bf3f12`
- `ink` (text on light bg): 900 `#0f1722` 700 `#334155` 500 `#64748b` 400 `#94a3b8`
- `surface` (light backgrounds): `#ffffff`, `#f8fafc` (slate-50), `#eef2f7` (subtle)
- `line` (borders, dividers): `#e2e8f0`
- Semantic: success `#0f766e` (teal-700), warning `#b45309`, danger `#b91c1c`

## Typography
- Display / headings: `Inter`, weights 600/700, tight tracking on H1/H2.
- Body: `Inter`, 400/500.
- Sizes (Tailwind):
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - H2: `text-3xl md:text-4xl font-semibold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
  - Body: `text-base leading-relaxed text-ink-700`
  - Small/labels: `text-sm uppercase tracking-wider font-semibold text-brand-500`

## Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-16 md:py-24`.
- Grid gaps: `gap-6` (cards), `gap-8` (sections).
- Use a subtle 1px hairline `border border-line` for cards instead of heavy shadows.
- Cards: `rounded-xl bg-white border border-line p-6` (optional `hover:shadow-sm transition`).

## Buttons
- Primary CTA: `inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 transition`.
- Secondary: `inline-flex items-center gap-2 rounded-md border border-line bg-white hover:bg-surface-50 text-brand-700 font-semibold px-5 py-3 transition`.
- Dark CTA on light bg: `bg-brand-700 hover:bg-brand-800 text-white`.

## Iconography
- Use `lucide-react`. 1.5px stroke, sized `w-5 h-5` inline, `w-6 h-6` for feature icons. Color matches surrounding text or `text-brand-500`.

## Imagery
- Use real-feeling factory, QC, shipping, container, warehouse photos via `data-strk-img` / `data-strk-bg`.
- Ratios: hero `16x9`, feature cards `3x2` or `4x3`, case study `3x2`.
- Always pair imagery with on-page text references for the query.

## Do
- Keep generous whitespace.
- Keep all body text on white/`surface-50` with `text-ink-700` for legibility.
- Use the navy `brand-700`/`brand-800` for the header/footer/dark sections, with white text.
- Use `accent-500` only for primary CTAs and the most important highlights.

## Don't
- No gradients except very subtle navy-to-darker-navy in hero overlays.
- No emoji icons.
- No bright/saturated mixed colors. No purple/pink.
- No light gray text on white (contrast must remain high).
- No centered single-column layouts on desktop for content-heavy sections.
