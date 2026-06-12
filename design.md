# SSourcing China — Visual Design System

A clean, trustworthy, international B2B aesthetic. Think modern logistics / industrial-software brand: confident, calm, factual. No flashy gradients, no cartoony illustrations, no exaggerated marketing tropes.

## Brand mood
- Clean, crisp, professional.
- Industrial photography (factories, QC inspectors, containers, ports) used as supporting visuals — not as decoration.
- Lots of white space, strong typographic hierarchy, restrained color usage.
- Clear data-style components (numbered steps, tables, comparison cards, FAQs).

## Color palette

Primary navy (brand, headers, primary CTAs):
- `bg-slate-900` / `text-slate-900`
- Hover/strong: `bg-slate-800`

Accent blue (links, key stats, secondary buttons):
- `text-blue-700`, `bg-blue-600`, hover `bg-blue-700`
- Soft tint: `bg-blue-50`, `text-blue-900`

Neutrals (most of the UI):
- Page background: `bg-white`
- Section alt background: `bg-slate-50`
- Subtle dividers: `border-slate-200`
- Body text: `text-slate-700`
- Secondary text: `text-slate-500`
- Heading text: `text-slate-900`

Trust/success accents (used sparingly):
- Success/quality: `text-emerald-600`, `bg-emerald-50`
- Warning/risk: `text-amber-600`
- Do NOT use red except for true errors.

Don'ts:
- No purple / pink / vivid gradient backgrounds.
- No black backgrounds with neon text.
- No more than 2 accent colors on a single section.

## Typography
- Global font: Inter (loaded from Google Fonts in `index.html`).
- Headings: `font-semibold` or `font-bold`, `tracking-tight`, `text-slate-900`.
  - H1 hero: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight`
  - H2 section: `text-3xl md:text-4xl font-bold tracking-tight`
  - H3 card: `text-xl font-semibold`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Eyebrow / kicker labels: `text-sm font-semibold uppercase tracking-wider text-blue-700`
- Numbers / stats: `text-4xl md:text-5xl font-bold text-slate-900`

## Spacing & layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical rhythm: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Desktop must use multi-column layouts (`md:grid-cols-2`, `lg:grid-cols-3`, etc.). Do not collapse desktop into a single stacked column.

## Components

Primary CTA button:
- `inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition`

Secondary button:
- `inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition`

Card:
- `rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition`

Stat card:
- `rounded-xl border border-slate-200 bg-slate-50 p-6 text-center`

Form input:
- `block w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200`

Badge / pill:
- `inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700`

## Imagery rules
- Use realistic stock images of factories, production lines, QC inspectors with checklists, shipping containers, ports, warehouses.
- No people in suits shaking hands stock photos. No stylized 3D illustrations.
- All imagery uses the `data-strk-img` / `data-strk-bg` system.
- Hero uses a darkened factory/port photo as background with white text overlay.

## Accessibility / contrast
- White text only on `bg-slate-900`, `bg-slate-800`, `bg-blue-700`, or darkened image overlays.
- Never light gray text on white. Body text minimum is `text-slate-600`.
- All form labels are visible (no placeholder-only labels).

## Tone of UI copy
- Practical, direct, factual. No "world's #1", no "guaranteed lowest price".
- Use specific concrete words: "factory audit", "pre-shipment inspection (AQL 2.5)", "FOB Shenzhen".
- Numbers are realistic (e.g. "500+ verified suppliers", not "millions").
