# ARTITECT MACHINERY — Visual Design Guide

A confident, elegant industrial brand. The visual language pairs precision-engineered restraint with warm, premium accents so the experience feels both serious and approachable.

## Brand Voice
- Elegant, precise, confident, human.
- Speaks to professional sheet-metal fabricators without being cold or technical-only.
- Short, clear copy. No jargon walls.

## Color Palette
Define the following as named Tailwind colors in `tailwind.config` (via CSS @theme) or use the Tailwind utility names below.

- Ink / primary text: `slate-900` (#0f172a)
- Body text: `slate-700`
- Muted text: `slate-500`
- Soft surface / background: `stone-50` (#fafaf9)
- Card surface: `white`
- Section alt surface: `slate-50`
- Accent (premium brass/amber): `amber-500` (#f59e0b) — use sparingly for highlights, underlines, icon accents, hover states
- Accent dark (hover): `amber-600`
- Deep brand surface (dark sections, footer): `slate-900`
- Border subtle: `slate-200`
- Border strong: `slate-300`

Do not invent random hex values inline. Stick to the tokens above.

## Typography
- Headings: `Playfair Display`, serif. Weights 500–700. Used for h1/h2/h3.
- Body & UI: `Inter`, sans-serif. Weights 400/500/600.
- Headlines should feel editorial: generous line-height (`leading-tight` on h1, `leading-snug` on h2), wide tracking only on small all-caps eyebrows.
- Eyebrow labels: `text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold`.

Example classes:
- h1: `font-serif text-4xl md:text-6xl font-medium text-slate-900 leading-tight`
- h2: `font-serif text-3xl md:text-4xl font-medium text-slate-900 leading-snug`
- h3: `font-serif text-xl md:text-2xl font-medium text-slate-900`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Small: `text-sm text-slate-500`

## Layout & Spacing
- Page max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-10`.
- Generous whitespace, never cramped.

## Components
- Buttons:
  - Primary: `inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition`.
  - Accent: `inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-600 transition`.
  - Ghost: `inline-flex items-center gap-2 text-slate-900 px-6 py-3 rounded-full text-sm font-medium border border-slate-300 hover:border-slate-900 transition`.
- Cards: `bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition`.
- Inputs: `w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none`.
- Dividers: thin amber line `h-px w-12 bg-amber-500`.

## Iconography
- Lucide React icons only.
- Stroke width 1.5 for elegance: `strokeWidth={1.5}`.
- Icon sizes: 20px inline, 28–36px in feature cards.

## Imagery
- Industrial sheet-metal machinery, factory shots, close-ups of bent steel.
- Always use the `data-strk-*` tagging system; never hardcode image URLs.
- Prefer 16x9 or 3x2 ratios for hero/product visuals.

## Do's
- Use plenty of whitespace.
- Pair serif headlines with crisp sans-serif body.
- Use amber accents sparingly — eyebrows, underlines, single hover states.
- Keep dark surfaces deep and matte (slate-900), not pure black.

## Don'ts
- No neon, no gradients of more than 2 stops, no drop shadows on text.
- No multiple competing accent colors (only amber).
- No tightly stacked columns on desktop — keep generous gaps.
- No all-caps body text; only short eyebrows.
- Never put light text on light backgrounds. Always check contrast.
