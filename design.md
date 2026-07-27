# SSourcing China — Design System

A clean, trustworthy, international B2B website for a China-based sourcing agent.
Visual style conveys reliability, professionalism, and practical expertise — no exaggerated claims.

## Brand Colors

- **Primary (deep navy/blue):** `#0F2A47` — trust, authority, B2B. Use for headers, primary buttons, dark sections.
  - Tailwind token: `brand` / `brand-900`
- **Primary accent (steel blue):** `#1E5A8E` — links, hover, secondary accents.
  - Tailwind token: `brand-700`
- **Accent (amber/gold):** `#E8A33D` — sparingly for CTAs highlights, badges, key stats. Conveys value without being flashy.
  - Tailwind token: `accent` / `accent-500`
- **Neutral surface (light):** `#F7F9FC` — page background, light sections.
- **Card surface:** `#FFFFFF`
- **Border:** `#E2E8F0` (slate-200)
- **Text primary:** `#0F2A47` (brand-900) on light; `#F8FAFC` (slate-50) on dark.
- **Text muted:** `#475569` (slate-600)

## Typography

- Font family: **Inter** (loaded via Google Fonts in index.html), weights 400/500/600/700/800.
- Headings: font-weight 700/800, tight tracking, brand-900 color.
- H1: `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`
- H2 (section): `text-3xl md:text-4xl font-bold tracking-tight`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-slate-600 leading-relaxed`
- Eyebrow / overline: `text-sm font-semibold uppercase tracking-wider text-brand-700`

## Spacing & Layout

- Section vertical padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Consistent gap in grids: `gap-6 md:gap-8`

## Borders & Shadows

- Cards: `rounded-2xl border border-slate-200 bg-white shadow-sm`
- Hover lift: `transition hover:shadow-md hover:-translate-y-0.5`
- Buttons: `rounded-lg`
- Section dividers: subtle, use `border-slate-200`

## Buttons

- Primary: `bg-brand-900 text-white hover:bg-brand-700 px-6 py-3 rounded-lg font-semibold`
- Accent CTA: `bg-accent-500 text-brand-900 hover:bg-accent-400 px-6 py-3 rounded-lg font-semibold`
- Secondary/outline: `border border-slate-300 text-brand-900 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold`

## Visual Style Do's

- Use realistic factory / QC / shipping / warehouse imagery via the strk-img system.
- Generous whitespace, clear hierarchy, scannable sections.
- Iconography from lucide-react, consistent stroke, brand-700 or accent-500 color.
- Trust signals: stats, certifications, process steps with numbers.
- Professional, calm tone. Numbers and facts over hype.

## Visual Style Don'ts

- No neon colors, no gradients beyond subtle dark hero overlays.
- No exaggerated claims ("#1", "guaranteed cheapest").
- No low-contrast text. Always pair foreground with explicit readable color.
- No cluttered mobile layouts — stack to single column on small screens.
- Do not hardcode arbitrary hex codes in components; use Tailwind tokens defined in config.
