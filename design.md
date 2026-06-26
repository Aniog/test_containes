# SSourcing China — Visual Design System

A clean, trustworthy, international B2B style for a China sourcing agency.
Aesthetic: corporate, modern, practical. No exaggeration, no flashy gradients.

## Brand Tone

- Professional, clear, practical.
- Trust-driven: emphasize verification, transparency, quality control.
- International B2B audience (English).
- Avoid marketing hype; speak in concrete capabilities and steps.

## Color Palette

Primary navy (trust, corporate):
- navy-50  `#f1f5fb`
- navy-100 `#dde7f3`
- navy-500 `#1f4a82`
- navy-600 `#173d6e`
- navy-700 `#0f2f57`  ← primary brand
- navy-900 `#081a33`

Accent amber (action, highlight):
- amber-500 `#e8a13a`
- amber-600 `#c98520`  ← CTA accent

Neutrals:
- slate-50 `#f7f9fc` (page background)
- slate-100 `#eef2f7`
- slate-200 `#e2e8f0`
- slate-500 `#64748b`
- slate-700 `#334155`
- slate-900 `#0f172a` (primary text)

Status:
- green-600 `#16a34a` (verified, success)
- red-600 `#dc2626` (problem indicators)

## Typography

- Font family: Inter (Google Fonts), system fallback.
- Headings: semibold/bold, tight tracking.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - H2: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-slate-700 leading-relaxed`
- Eyebrow label: `text-xs font-semibold uppercase tracking-[0.18em] text-amber-600`

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components

Buttons:
- Primary CTA: `bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md px-6 py-3 shadow-sm transition`
- Secondary: `bg-white text-navy-700 border border-slate-200 hover:border-navy-700 rounded-md px-6 py-3 font-semibold`
- Ghost on dark: `bg-white/10 hover:bg-white/20 text-white border border-white/20`

Cards:
- Base: `bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition`
- Feature card: white card + small icon badge `bg-navy-50 text-navy-700 rounded-lg p-2`

Forms:
- Inputs: `w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-navy-700 focus:ring-2 focus:ring-navy-700/20 outline-none`
- Labels: `text-sm font-medium text-slate-700`
- Helper / error: `text-sm text-red-600`

Badges:
- Verified: `inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-1`
- Neutral: `inline-flex items-center text-xs font-medium text-slate-600 bg-slate-100 rounded-full px-2.5 py-1`

Navigation:
- Header: `bg-white/95 backdrop-blur border-b border-slate-200`
- Active link: `text-navy-700 font-semibold`
- Default link: `text-slate-700 hover:text-navy-700 font-medium`

Footer:
- `bg-navy-900 text-slate-300`
- Headings: `text-white font-semibold`

## Do's

- Use the navy-700 primary for headings, header bar accents, and trust elements.
- Use amber-600 for the single dominant CTA on each section.
- Pair every photo with semantic text references for image queries.
- Keep ample whitespace; use subtle borders rather than heavy shadows.
- Use Lucide icons in `text-navy-700` or `text-amber-600`.

## Don'ts

- No neon gradients or rainbow accents.
- No light grey text on white (contrast must remain readable).
- No multiple CTAs of equal weight competing in the same section.
- No emoji in product copy or headlines.
- No hardcoded image URLs; use the stock image tagging system.

## Image Style

- Real factory floors, QC inspectors with checklists, container loading, shipping ports, product close-ups, meetings between buyers and suppliers.
- Wide / cinematic ratios for hero (`16x9`) and section banners.
- `4x3` or `3x2` for case studies and service cards.
- Avoid stylized illustrations and clip art.
