# SSourcing China — Design System

## Brand voice
Professional, clear, practical. No exaggerated claims. International B2B tone.

## Color palette
Use semantic Tailwind utility classes only. No hardcoded hex inside JSX.

- Primary navy: `bg-slate-900`, text on dark: `text-white`
- Deep blue accent: `bg-blue-700` / hover `bg-blue-800`, foreground `text-white`
- Subtle accent (links, highlights): `text-blue-700`
- Success/trust accent: `text-emerald-600`, `bg-emerald-50`
- Surface: `bg-white`
- Soft surface / sections: `bg-slate-50`
- Dark surface (footer / hero overlay): `bg-slate-900` with `text-slate-100`
- Borders: `border-slate-200`
- Body text: `text-slate-700`
- Muted text: `text-slate-500`
- Headings: `text-slate-900`

Do: pair `bg-white` with `text-slate-900`, `bg-slate-50` with `text-slate-700`, `bg-slate-900` with `text-slate-100`.
Don't: place `text-slate-300` on `bg-white`, or `text-slate-700` on `bg-slate-900`.

## Typography
- Global font: Inter, set in `index.html` Google Fonts.
- Headings use `font-semibold` or `font-bold`, `tracking-tight`.
- Body uses default weight, `leading-relaxed` on long paragraphs.
- Sizes:
  - Hero H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - Section H2: `text-3xl md:text-4xl font-bold tracking-tight`
  - Card H3: `text-lg md:text-xl font-semibold`
  - Body: `text-base text-slate-700 leading-relaxed`
  - Small / labels: `text-sm text-slate-500`

## Spacing & layout
- Page container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Buttons:
  - Primary: `inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition`
  - Secondary: `inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition`
  - Ghost on dark: `inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition`
- Cards: `rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition`
- Inputs: `w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20`
- Badges: `inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700`

## Iconography
Use `lucide-react`. Keep icons `w-5 h-5` inline, `w-6 h-6` for feature cards.

## Imagery
Use Strikingly stock image tags (`data-strk-img`, `data-strk-bg`). Subjects: Chinese factory floors, QC inspectors with clipboards, shipping containers, port logistics, sourcing meetings, product samples.

## Do's
- Always pair foreground colors with backgrounds explicitly.
- Use rounded-md / rounded-xl consistently.
- Keep CTAs visible, never low-contrast.
- Use icons sparingly to support trust and clarity.

## Don'ts
- No bright/saturated gradients.
- No emoji.
- No low-contrast text (e.g. `text-slate-400` on `bg-slate-50` for important content).
- No hardcoded hex colors inside JSX.
