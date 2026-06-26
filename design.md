# SSourcing China — Visual Design System

A clean, trustworthy, international B2B style for a China-based sourcing agent.
The goal is to communicate reliability, professionalism and global trade competence.

## Brand Tone
- Professional, clear, practical. No hype. No exaggerated claims.
- Confident but understated; closer to a logistics / industrial brand than a flashy startup.

## Colors (Tailwind utility classes)
- Brand primary (deep navy): `bg-slate-900`, `text-slate-900`
- Brand accent (industrial red, used sparingly for CTAs and highlights): `bg-red-600 hover:bg-red-700`, `text-red-600`
- Neutral surfaces: `bg-white`, `bg-slate-50`, `bg-slate-100`
- Borders / dividers: `border-slate-200`
- Body text: `text-slate-700`, headings `text-slate-900`
- Muted text: `text-slate-500`
- Success: `text-emerald-600`, info: `text-sky-600`

Do NOT use light gray on white for important text. Do NOT use yellow/green
brand accents — keep accent strictly red.

## Typography
- Primary font: Inter (loaded via Google Fonts in `index.html`).
- Display headings: `font-semibold tracking-tight`
- H1 sizes: `text-4xl md:text-5xl lg:text-6xl font-semibold`
- H2 sizes: `text-3xl md:text-4xl font-semibold`
- H3 sizes: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Eyebrow / label: `text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-red-600`

## Layout & Spacing
- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Grid gaps: `gap-6 md:gap-8`
- Cards: `rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow`
- Soft section background: `bg-slate-50`
- Dark section background: `bg-slate-900 text-white`

## Buttons
- Primary CTA: `inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-red-700 transition-colors`
- Secondary CTA: `inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm md:text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors`
- On dark backgrounds, secondary uses `border-white/30 text-white hover:bg-white/10`

## Visual Style Rules
- Imagery: real-world factory, QC inspection, shipping container, port and product photography.
- Avoid stock illustrations and 3D blobs.
- Generous whitespace; no cluttered card grids.
- Borders thin (`border`), corners moderate (`rounded-xl` / `rounded-2xl`).
- Subtle shadows only (`shadow-sm`, `shadow-md`); never glow.

## Do's and Don'ts
- DO keep all interactive elements with clearly visible focus and hover states.
- DO use uppercase tracking eyebrows above section headlines.
- DO use icons from `lucide-react` at `w-5 h-5` to `w-6 h-6`, color inherited or `text-red-600`.
- DON'T use gradients except very subtle linear gradients on hero (`from-slate-900 via-slate-900 to-slate-800`).
- DON'T use emojis in UI.
- DON'T put low-contrast text (e.g. `text-slate-400` on white for body copy).
