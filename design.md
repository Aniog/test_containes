# SSourcing China — Design System

A professional B2B sourcing-agent website. Clean, trustworthy, international, practical.

## Brand
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: professional, clear, practical, no exaggerated claims.

## Typography
- Font family: Inter (Google Fonts), weights 300–800.
- Headings: Inter, semibold/bold, tight tracking.
- Body: Inter 400, 1.6 line-height for readability.
- Example classes: `font-sans`, `text-4xl font-bold tracking-tight`.

## Color Palette (Tailwind tokens)
Use semantic tokens defined in tailwind.config.js. Primary = deep trustworthy blue.

- `primary` #1d4ed8 (blue-700) — CTAs, links, accents
- `primary-dark` #1e3a8a (blue-900) — hover, dark sections
- `accent` #f59e0b (amber-500) — sparing highlights, trust badges
- `ink` #0f172a (slate-900) — primary text
- `muted` #475569 (slate-600) — secondary text
- `line` #e2e8f0 (slate-200) — borders, dividers
- `surface` #ffffff — cards
- `bg` #f8fafc (slate-50) — page background
- `bg-alt` #f1f5f9 (slate-100) — alternating sections

Always pair text with readable foreground. Never light text on light surface.

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card radius: `rounded-xl` / `rounded-2xl`
- Card border: `border border-slate-200`
- Card shadow: `shadow-sm` default, `shadow-lg` on hover
- Consistent grid gaps: `gap-6` / `gap-8`

## Components
- Buttons: primary `bg-primary text-white hover:bg-primary-dark rounded-lg px-6 py-3 font-semibold`; secondary outline variant.
- Cards: white surface, border, rounded-xl, p-6/p-8, hover lift.
- Badges: small pill `rounded-full bg-blue-50 text-primary px-3 py-1 text-xs font-semibold`.
- Section headers: small uppercase eyebrow + bold H2 + muted subtitle, centered or left.

## Visuals
- Use realistic factory / QC / shipping / warehouse stock imagery via the strk image system.
- Hero uses a background image of a Chinese factory / port.
- Avoid generic stock-photo clichés; prefer industrial, logistics, inspection visuals.

## Do's
- Keep generous whitespace.
- Use icons (lucide-react) for service/process steps.
- Keep contrast high; all text clearly readable.
- Responsive: mobile single column, desktop multi-column grids.

## Don'ts
- No exaggerated claims ("#1", "guaranteed cheapest").
- No low-contrast text.
- No hardcoded hex in JSX outside the defined tokens.
- No mobile-style stacked layouts on desktop.
