# Design System — SSourcing China

A professional, trustworthy, international B2B sourcing-agent website.
Visual style is clean, corporate, and confident. No exaggerated claims.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter 700/800, tight tracking, large sizes.
- Body: Inter 400/500, line-height 1.6 for readability.
- Eyebrow / labels: Inter 600, uppercase, wide tracking, small size.

## Color Palette (semantic tokens)
- Primary (brand blue): `#1d4ed8` (blue-700). Used for CTAs, links, accents.
- Primary dark: `#1e3a8a` (blue-900). Used for hero overlays, footer.
- Accent (amber): `#f59e0b` (amber-500). Used sparingly for highlights/CTA secondary.
- Neutral background: `#f8fafc` (slate-50) for light sections.
- Surface / cards: white `#ffffff` with subtle border `#e2e8f0` (slate-200) and soft shadow.
- Text primary: `#0f172a` (slate-900).
- Text muted: `#475569` (slate-600).
- Success: `#16a34a` (green-600). Warning: `#d97706`. Danger: `#dc2626`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Card padding: `p-6 md:p-8`.
- Consistent gap scales: `gap-4`, `gap-6`, `gap-8`.

## Borders & Shadows
- Cards: `rounded-2xl border border-slate-200 shadow-sm`.
- Buttons: `rounded-lg`.
- Hover lift: `transition hover:shadow-md hover:-translate-y-0.5`.

## Buttons
- Primary: `bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold`.
- Secondary/outline: `border border-slate-300 text-slate-800 hover:bg-slate-50`.
- Amber CTA: `bg-amber-500 text-white hover:bg-amber-600`.

## Imagery
- Realistic factory, QC inspection, warehouse, shipping container visuals.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive queries.
- Aspect ratios: hero 16x9, cards 4x3 or 3x2, gallery 3x2.

## Do's
- Keep generous whitespace.
- Use clear, scannable headings and short paragraphs.
- Use icons (Lucide) paired with concise labels.
- Ensure high text contrast on every surface.

## Don'ts
- No garish gradients or neon colors.
- No low-contrast gray-on-gray text for important content.
- No exaggerated marketing superlatives ("#1 in the world", "guaranteed cheapest").
- No hardcoded hex codes in JSX beyond the palette above; prefer Tailwind classes.
