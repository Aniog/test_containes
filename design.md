# SSourcing China — Visual Design System

A clean, trustworthy, international B2B identity for a China-based sourcing agency. Inspired by globally recognized trade and logistics brands. Focus on clarity, professional photography, and confident typography.

## Brand Tone
- Professional, factual, practical.
- No exaggerated marketing claims.
- International English audience (importers, brand owners, e‑commerce sellers, distributors).

## Color Palette (use as Tailwind utilities)
- Primary navy: `bg-slate-900`, `text-slate-900` — headings, footer, primary surfaces.
- Deep brand blue (accent / CTA): `bg-blue-700`, `hover:bg-blue-800`, `text-blue-700` — buttons, links, focus.
- Soft accent (highlights): `bg-blue-50`, `text-blue-700`, `border-blue-100`.
- Neutral surface: `bg-white`, `bg-slate-50`.
- Neutral text: `text-slate-700` body, `text-slate-500` muted, `text-slate-900` headings.
- Borders: `border-slate-200`.
- Success/trust: `text-emerald-600`, `bg-emerald-50`.

Do NOT use: bright/saturated reds, purples, pinks, gradients with neon, or playful colors.

## Typography
- Font: Inter (already loaded). Optional: `font-semibold` / `font-bold` for headings.
- Headings: tracking-tight. H1 `text-4xl md:text-5xl lg:text-6xl font-bold`, H2 `text-3xl md:text-4xl font-bold`, H3 `text-xl md:text-2xl font-semibold`.
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`.
- Eyebrow labels: `text-xs font-semibold uppercase tracking-widest text-blue-700`.

## Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical spacing: `py-16 md:py-24`.
- Grid gaps: `gap-6` or `gap-8`.
- Cards: `rounded-xl bg-white border border-slate-200 shadow-sm` and on hover `hover:shadow-md transition-shadow`.
- Buttons primary: `inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700`.
- Buttons secondary: `inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50`.

## Imagery
- Realistic photography: Chinese factories, QC inspection on production lines, shipping containers, ports, warehouses, product samples.
- Use `data-strk-img` and `data-strk-bg` tagging with neighboring text context.
- Avoid stylized 3D illustrations.

## Do / Don't
- Do: keep visible text high-contrast against backgrounds (e.g. white text on `bg-slate-900`, slate-900 text on white).
- Do: use icons from `lucide-react` to support trust/services sections.
- Don't: use single-column stacked layouts on desktop.
- Don't: hardcode hex codes in className strings. Stay within the Tailwind palette above.
- Don't: invent neon gradients or playful illustrations.

## Components Conventions
- Header: white, sticky, with thin border-bottom `border-slate-200`.
- Footer: `bg-slate-900 text-slate-300` with `text-white` headings.
- Hero: white background, large headline, subhead, primary + secondary CTA, supporting photograph or factory image on the right.
- Trust badges: small grid of icons with short labels (e.g. "10+ Years Experience", "Factory Audited").
- Forms: labels above inputs, generous spacing, clear error/success states with `text-emerald-700` and `text-rose-700`.
