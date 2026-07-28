# SSourcing China — Design System

A professional, trustworthy, international B2B website for a China-based sourcing agent. The visual goal is to feel like a credible trade-services company: clean, structured, calm, and confident. No exaggerated marketing language, no neon colors.

## Brand personality
- Trustworthy, practical, international, B2B.
- Calm and structured. Generous whitespace. Clear hierarchy.
- Realistic factory / QC / shipping / warehouse visuals.

## Typography
- Font family: **Inter** (loaded via Google Fonts in index.html), weights 300–800.
- Headings: Inter 600–800, tight tracking, dark slate.
- Body: Inter 400, 1.6 line-height, muted slate.
- Eyebrow / labels: Inter 600, uppercase, wide tracking, small size, brand blue.

## Color palette (Tailwind tokens)
Use semantic token pairs. Primary brand color is a confident deep blue.

- `brand` (primary): `#1d4ed8` (blue-700) — used for primary buttons, links, accents.
- `brand-dark`: `#1e3a8a` (blue-900) — deep navy for headers/footers.
- `brand-light`: `#3b82f6` (blue-500) — hover / secondary accents.
- `accent`: `#f59e0b` (amber-500) — sparingly for highlights / CTA emphasis only.
- `ink` (foreground): `#0f172a` (slate-900).
- `muted`: `#64748b` (slate-500) for secondary text.
- `surface`: `#ffffff` cards on `#f8fafc` (slate-50) page background.
- `border`: `#e2e8f0` (slate-200).

Map these as named colors in `tailwind.config.js` (`brand`, `brand-dark`, `brand-light`, `accent`, `ink`, `muted`).

## Layout & spacing
- Max content width: `max-w-7xl` (1280px), centered, `px-4 sm:px-6 lg:px-8`.
- Section vertical rhythm: `py-16 md:py-24`.
- Cards: `rounded-2xl`, `border border-slate-200`, `bg-white`, subtle shadow `shadow-sm`.
- Buttons: `rounded-lg`, primary = `bg-brand text-white hover:bg-brand-dark`.
- Consistent 8px spacing scale via Tailwind.

## Components
- Header: white, sticky, border-bottom, logo left, nav center/right, CTA button right. Mobile: hamburger menu.
- Footer: dark navy (`bg-brand-dark text-slate-300`), multi-column, with contact info and inquiry CTA.
- Hero: large headline, subcopy, primary CTA + secondary link, realistic factory/shipping background image (data-strk-bg).
- Section heading pattern: eyebrow label + h2 + supporting paragraph, left-aligned or centered.
- Feature/service cards: icon (lucide) + title + description, 3 or 4 per row on desktop.
- Process steps: numbered horizontal stepper on desktop, vertical on mobile.
- Stats / trust points: row of metric cards.
- FAQ: accordion.
- Inquiry form: clean two-column (info + form), inputs with labels, primary submit button.

## Imagery
Use the `data-strk-img` / `data-strk-bg` system with realistic queries referencing nearby text:
- Hero background: factory / shipping port / warehouse.
- Service cards: factory inspection, QC, shipping containers.
- Case study / product images: relevant manufactured goods.
Always use the SVG placeholder `src` for `<img>` tags.

## Do's
- Use semantic token pairs (foreground/background) for readable text.
- Keep contrast high: dark slate text on white/light surfaces; white text on brand-dark.
- Use generous whitespace and consistent alignment.
- Mobile-first responsive with `md:` / `lg:` breakpoints.

## Don'ts
- No neon or overly saturated colors.
- No exaggerated claims ("#1 best in the world").
- No low-contrast text (e.g. slate-400 on white for important content).
- No hardcoded arbitrary hex values in JSX — use Tailwind tokens.
- No single-column stacked layouts on desktop.
