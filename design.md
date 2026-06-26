# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.
The visual goal is professional credibility: calm blues, generous whitespace,
clear typography, and realistic factory / QC / shipping imagery.

## Brand
- Name: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: professional, clear, practical. No exaggerated claims.

## Typography
- Font family: Inter (loaded via Google Fonts in index.html), weights 400–800.
- Headings: tight leading (leading-tight), weight 700–800.
- Body: leading-relaxed, weight 400, muted slate for secondary text.
- Example classes: `font-bold tracking-tight`, `text-slate-600 leading-relaxed`.

## Color Palette (Tailwind v4 @theme tokens)
- Primary (brand blue): `#1d4ed8` (blue-700) for buttons, links, accents.
- Primary dark hover: `#1e3a8a` (blue-900).
- Accent (deep navy): `#0f172a` (slate-900) for headers / dark sections.
- Surface / background: `#f8fafc` (slate-50) and white cards.
- Text: `#0f172a` (slate-900) primary, `#475569` (slate-600) secondary, `#64748b` (slate-500) muted.
- Success / trust green: `#15803d` (green-700) for checkmarks and trust points.
- Borders: `#e2e8f0` (slate-200).

Do NOT use light text on light backgrounds. Every card, table, and section has
explicit readable foreground colors. Dark sections use slate-50 / white text.

## Layout & Spacing
- Max content width: `max-w-7xl` for full sections, `max-w-3xl` for prose/FAQ.
- Section vertical padding: `py-16 md:py-24`.
- Container horizontal padding: `px-4 sm:px-6 lg:px-8`.
- Cards: `rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm`.
- Grid gaps: `gap-6 md:gap-8`.

## Components
- Buttons: primary `bg-blue-700 hover:bg-blue-800 text-white rounded-lg px-6 py-3 font-semibold`,
  secondary `border border-slate-300 bg-white text-slate-800 hover:bg-slate-50`.
- Badges: `inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium`.
- Section eyebrow: `text-sm font-semibold uppercase tracking-wider text-blue-700`.

## Imagery
- Use the strk stock image system (data-strk-img / data-strk-bg) for realistic
  factory, quality control, warehouse, and shipping visuals.
- Hero uses a background image. Cards use content images with 4x3 or 3x2 ratios.

## Do's
- Keep generous whitespace and clear hierarchy.
- Use semantic token color pairs (foreground/background).
- Make all text readable on its background.
- Responsive: single column on mobile, multi-column on md+.

## Don'ts
- No exaggerated marketing claims ("#1 in the world", "guaranteed lowest price").
- No low-contrast text. No hardcoded arbitrary hex outside the palette tokens.
- No mobile-style stacked single column on desktop.
