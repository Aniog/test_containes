# SSourcing China — Visual Design System

A clean, trustworthy, international B2B style for a China sourcing agent.
Inspired by modern logistics / industrial brands (Maersk, DHL, Flexport).
Calm navy + confident red accent, lots of white space, sharp typography.

## Colors (Tailwind tokens)

Primary navy (trust, infrastructure):
- `bg-slate-900` / `text-slate-900` — primary brand surface, headings
- `bg-slate-800` — alternate dark sections
- `text-slate-700` — body on light
- `text-slate-600` — muted body
- `text-slate-500` — captions, helper text

Accent red (CTA, China-rooted, energy) — use sparingly:
- `bg-red-600` / `hover:bg-red-700` — primary CTA button
- `text-red-600` — inline accents

Surfaces:
- `bg-white` — main canvas
- `bg-slate-50` — alternating sections
- `bg-slate-100` — cards on dark, soft chips
- `border-slate-200` — default borders
- `border-slate-800` — borders on dark

Status / supporting:
- `text-emerald-600` / `bg-emerald-50` — verified / trust ticks
- `text-amber-600` — warnings (avoid heavy use)

## Typography

Font: Inter (loaded via Google Fonts in index.html).

- Display H1: `text-4xl md:text-6xl font-semibold tracking-tight`
- H2 section: `text-3xl md:text-4xl font-semibold tracking-tight`
- H3 card: `text-xl font-semibold`
- Eyebrow: `text-sm font-medium uppercase tracking-widest text-red-600`
- Body: `text-base md:text-lg text-slate-700 leading-relaxed`
- Small: `text-sm text-slate-500`

## Layout

- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for chips

## Components

Primary button:
`inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white hover:bg-red-700 transition shadow-sm`

Secondary button (on light):
`inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition`

Ghost button (on dark):
`inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition`

Card:
`rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition`

Input / textarea:
`w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 focus:outline-none`

Chip / tag:
`inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700`

## Imagery

- Real factory floors, QC inspectors with checklists, container ports, shipping containers, production lines.
- Neutral palette in photos preferred (cool steel, soft daylight).
- Always set explicit text color in cards/sections — never rely on inherited.

## Do / Don't

Do:
- Keep navy + white as the dominant pair, red strictly for CTA and small accents.
- Use sharp dividers (1px slate-200) and confident typography.
- Show concrete numbers (lead times, MOQs, days) — buyer trust.

Don't:
- No gradients beyond a subtle navy-to-slate hero overlay.
- No emojis in copy.
- No exaggerated marketing claims ("#1", "best in the world").
- No light text on light backgrounds; always set explicit `text-*` on cards.
