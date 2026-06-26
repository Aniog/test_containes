# SSourcing China — Design System

## Brand
SSourcing China is a China-based sourcing agent for global B2B buyers. The visual
style must feel clean, trustworthy, international, and professional — the kind of
site an overseas procurement manager trusts with a six-figure order.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter 700/800, tight tracking, large sizes.
- Body: Inter 400/500, 1.6 line-height for readability.
- Eyebrow / labels: Inter 600, uppercase, wide tracking, small size.

## Color Palette (Tailwind tokens)
- Primary (brand blue): `#0B5FFF` — used for CTAs, links, active states.
- Primary dark: `#0A4FD1`.
- Ink (near-black text): `#0B1B2B`.
- Slate body text: `#3B4A5A`.
- Muted text: `#6B7785`.
- Background page: `#F6F8FB` (very light cool gray).
- Surface / cards: `#FFFFFF`.
- Border: `#E3E8EF`.
- Accent (trust / success green): `#0E9F6E`.
- Accent warm (warning amber): `#E08A00`.

Do NOT use arbitrary hex codes in JSX. Map these into the Tailwind theme via
`@theme` in `src/index.css` and reference them as `bg-brand`, `text-ink`, etc.

## Spacing & Layout
- Max content width: `max-w-7xl` (1280px) for sections, `max-w-3xl` for prose.
- Section vertical padding: `py-20 md:py-28`.
- Card padding: `p-6 md:p-8`.
- Consistent gap scale: `gap-4`, `gap-6`, `gap-8`.

## Borders & Shadows
- Cards: `rounded-2xl border border-border bg-surface shadow-sm`.
- Hover lift: `transition hover:shadow-md hover:-translate-y-0.5`.
- Buttons: `rounded-lg`.
- No heavy drop shadows; keep it crisp and corporate.

## Buttons
- Primary: `bg-brand text-white hover:bg-brand-dark` — solid blue.
- Secondary: `bg-white text-ink border border-border hover:border-brand`.
- Ghost: `text-brand hover:bg-brand/5`.

## Imagery
- Use realistic factory, QC inspection, warehouse, and shipping visuals via the
  `data-strk-img` / `data-strk-bg` stock image system.
- Hero uses a background image. Section cards use content images.
- Always include explicit readable foreground colors over image overlays.

## Do's
- Use generous whitespace, clear hierarchy, and consistent alignment.
- Keep contrast high — every value must be readable.
- Use a 12-column responsive grid; stack to single column on mobile.

## Don'ts
- No exaggerated marketing claims or hype language.
- No low-contrast text on light or image backgrounds.
- No arbitrary magic pixel/hex values in JSX.
- No mobile-style single-column stacking on desktop widths.
