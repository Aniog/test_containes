# SSourcing China — Visual Design System

A clean, trustworthy, international B2B aesthetic. Think professional sourcing
agency: industrial yet refined, factory-floor confident, with clear typography
and strong information hierarchy. No exaggerated marketing flourishes.

## Brand voice (visual)
- Calm, confident, factual.
- Lots of white space, strong section rhythm.
- Photography-led: real factory, QC inspection, container shipping imagery.
- Subtle use of brand color; neutral grays do most of the work.

## Color palette
Use Tailwind's default palette via these semantic mappings:

- Brand primary: `slate-900` (deep navy/charcoal — used for headings, primary buttons, header)
- Brand accent: `red-600` (CTA accent, highlights — used sparingly, China-inspired)
- Accent hover: `red-700`
- Page background: `white`
- Muted surface: `slate-50`
- Section divider surface: `slate-100`
- Body text: `slate-700`
- Muted/secondary text: `slate-500`
- Borders: `slate-200`
- Success: `emerald-600`

Do NOT introduce custom hex codes; rely on the Tailwind palette above.

## Typography
- Font family: Inter (loaded via Google Fonts in `index.html`).
- Display headings (h1 hero): `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900`
- Section title (h2): `text-3xl md:text-4xl font-semibold tracking-tight text-slate-900`
- Card title (h3): `text-xl font-semibold text-slate-900`
- Eyebrow / label: `text-sm font-semibold uppercase tracking-wider text-red-600`
- Body: `text-base leading-relaxed text-slate-700`
- Small / meta: `text-sm text-slate-500`

## Spacing
- Section vertical padding: `py-16 md:py-24`
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Buttons (primary): `inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors`
- Buttons (secondary): `inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors`
- Cards: `rounded-xl border border-slate-200 bg-white shadow-sm`
- Stat card: `rounded-xl border border-slate-200 bg-white p-6`
- Form inputs: `w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10`

## Imagery
- Use stock-tagged `<img>` and `data-strk-bg` patterns.
- Prefer photography of: container shipping, factory production lines, QC
  inspectors with clipboards, world maps, warehouses, samples on workbenches.
- Aspect ratios: hero `16x9`, feature cards `4x3`, gallery thumbs `3x2`.

## Do
- Keep claims factual (e.g. "we visit factories" rather than "best in China").
- Use lots of slate neutrals; let red be the accent only.
- Keep CTAs consistent in wording: "Get a Free Sourcing Quote".
- Make all body text high-contrast against its surface.

## Don't
- Don't use neon/saturated colors.
- Don't stack everything in a single column on desktop — use responsive grids.
- Don't put low-contrast gray-on-gray text. Verify legibility on every surface.
- Don't hardcode hex values in JSX.
