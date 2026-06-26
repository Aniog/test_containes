# SSourcing China — Design System

Professional, trustworthy, international B2B aesthetic. Inspired by global trade and logistics
brands. Clean, content-forward, with strong typographic hierarchy and disciplined whitespace.

## Brand voice
- Practical, clear, professional. No exaggerated claims.
- Numbers, processes, and proof points over marketing fluff.

## Color palette
Use these Tailwind classes consistently.

- Primary navy (brand): `bg-slate-900`, `text-slate-900`, `border-slate-900`
- Deep accent (CTA, links): `bg-blue-700`, `hover:bg-blue-800`, `text-blue-700`
- Soft accent (highlights/borders): `bg-blue-50`, `border-blue-100`, `text-blue-600`
- Neutral surfaces: `bg-white`, `bg-slate-50`, `bg-slate-100`
- Body text: `text-slate-700`
- Muted text: `text-slate-500`
- Headings: `text-slate-900`
- Success/trust accent: `text-emerald-600`, `bg-emerald-50`
- Dividers/borders: `border-slate-200`

Do NOT use raw hex values inline. Always use Tailwind tokens.

## Typography
- Global font: Inter (loaded via Google Fonts in index.html).
- Display headings (h1): `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900`
- h2: `text-3xl md:text-4xl font-semibold tracking-tight text-slate-900`
- h3: `text-xl md:text-2xl font-semibold text-slate-900`
- Eyebrow label: `text-sm font-medium uppercase tracking-wider text-blue-700`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Small/caption: `text-sm text-slate-500`

## Spacing & layout
- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Use 12-column responsive grids. Avoid stacking everything on desktop.

## Components
- Buttons (primary): `inline-flex items-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition`
- Buttons (secondary): `inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition`
- Cards: `rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition`
- Inputs: `w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100`
- Section eyebrow + heading pattern used on every section for consistency.

## Imagery
- Realistic factory floors, QC inspectors with checklists, shipping containers, port logistics,
  manufacturing close-ups. No abstract gradients as hero.
- All images use the `data-strk-img` / `data-strk-bg` system (never raw URLs).
- Use 16x9 for hero/full-width, 4x3 for cards, 1x1 for thumbnails.

## Do
- Use stable semantic foreground/background pairs.
- Keep navigation aligned and consistent across pages.
- Use icons (lucide-react) sparingly with consistent stroke width.

## Don't
- No neon/gradient marketing colors.
- No emojis in UI copy.
- No hardcoded hex values, font sizes, or px values in classNames.
- No low-contrast text (e.g., light gray on white for body copy).
