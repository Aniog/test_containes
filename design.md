# SSourcing China — Design System

## Brand character
Clean, trustworthy, international B2B. Think: an experienced trade partner you can
hand your supplier risk to. Understated, factual, practical. No exaggerated claims,
no flashy gradients, no gimmicks.

## Color palette (Tailwind)
- Primary / ink: `slate-900` (#0F172A) — headings, dark sections, footer
- Body text: `slate-600` (#475569), secondary: `slate-500`
- Brand accent: `blue-800` (#1E40AF) — buttons, links, active states, icon accents
- Accent hover: `blue-900`
- Page background: `white` alternating with `slate-50` sections
- Borders: `slate-200` (cards, dividers)
- Success/verified marks: `emerald-600` (sparingly, e.g. check marks)
- Dark hero/footer background: `slate-900` with `slate-300`/`slate-400` text and white headings

## Typography
- Font: Inter (Google Fonts), weights 400–800
- Page H1: `text-4xl md:text-5xl font-bold tracking-tight text-slate-900`
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
- Eyebrow label: `text-sm font-semibold uppercase tracking-wider text-blue-800`
- Body: `text-base md:text-lg leading-relaxed text-slate-600`
- Card titles: `text-lg font-semibold text-slate-900`

## Spacing & layout
- Section padding: `py-16 md:py-24`
- Container: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`
- Grids: `grid gap-6 md:grid-cols-2 lg:grid-cols-3` (cards), `lg:grid-cols-2` for split sections

## Components
- Cards: `rounded-xl border border-slate-200 bg-white p-6 shadow-sm` (hover: `hover:shadow-md transition-shadow`)
- Primary button: `rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900`
- Secondary button: `rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50`
- Badges/chips: `rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800`
- Numbered steps: circle `h-10 w-10 rounded-full bg-blue-800 text-white font-semibold`
- Form inputs: `rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-800 focus:ring-1 focus:ring-blue-800`

## Imagery
- Realistic stock photography only: factories, production lines, QC inspectors,
  container ports, warehouses, sourcing meetings. No illustrations, no icons-as-images.
- Hero imagery slightly darkened with `bg-slate-900/60` overlays for text contrast.

## Do's
- Use generous white space; left-aligned professional layouts
- Use real numbers and concrete scope descriptions in case studies
- Keep icon use to Lucide line icons in blue-800 or slate-700
- Alternate white / slate-50 sections for rhythm

## Don'ts
- No purple/pink gradients, no neon, no playful rounded-blob shapes
- No exaggerated marketing claims ("#1", "guaranteed lowest price")
- No invisible or low-contrast text (slate-400 on slate-100, white on light blue)
- No stock photos of handshakes-only clichés without factory/QC context
