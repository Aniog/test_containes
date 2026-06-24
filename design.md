# MicroCosmos — Visual Design System

A scientific, awe-inspired visual language inspired by deep microscopy: dark cosmic backgrounds, glowing cellular highlights, and crisp scientific typography.

## Color Palette

Primary palette (dark, cosmic, microscopic):
- Deep void: `#05060d` (page background)
- Nebula navy: `#0b1226` (section alt background)
- Plasma cyan: `#22d3ee` (primary accent — `text-cyan-400`)
- Bio violet: `#a855f7` (secondary accent — `text-purple-500`)
- Specimen lime: `#84cc16` (tertiary accent for organism tags — `text-lime-500`)
- Mist: `#e2e8f0` (body text — `text-slate-200`)
- Muted mist: `#94a3b8` (secondary text — `text-slate-400`)
- Hairline: `rgba(148,163,184,0.15)` (borders — `border-white/10`)

Use gradients sparingly: `from-cyan-400 via-purple-500 to-fuchsia-500` for hero accents and headings.

## Typography

- Display / headings: `Inter`, weights 700–800, tight tracking (`tracking-tight`).
- Body: `Inter`, weight 400–500, `text-base` to `text-lg`.
- Labels/eyebrows: uppercase, `tracking-[0.25em]`, `text-xs`, often cyan.

Sizes:
- Hero h1: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section h2: `text-3xl md:text-5xl font-bold tracking-tight`
- Card h3: `text-xl font-semibold`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`

## Spacing & Layout

- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components

Cards:
- `rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur`
- Hover: `hover:border-cyan-400/40 hover:bg-white/[0.05] transition`

Buttons (primary):
- `inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold`
- Background: `bg-cyan-400 text-slate-950 hover:bg-cyan-300`

Buttons (secondary):
- `border border-white/15 text-slate-100 hover:border-cyan-400/60 hover:text-cyan-300`

Badges / tags:
- `inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-slate-300`

## Visual Effects

- Subtle radial gradient glow behind hero: cyan/purple at 15% opacity.
- Grain/noise: optional, low intensity.
- Connector lines or dotted grids OK at very low opacity (`text-white/5`).

## Do's

- Keep contrast high — light text on deep backgrounds.
- Use accent colors purposefully (one accent per component).
- Use the gradient sparingly (hero word, single decorative line).
- Use generous whitespace between sections.

## Don'ts

- Don't use light backgrounds for whole sections — keep the cosmic feel.
- Don't use text colors that blend (e.g., `text-slate-500` on `bg-slate-900`). Prefer `text-slate-300/400`.
- Don't use multiple competing accent colors in the same component.
- Don't use drop shadows on text — use glow via `text-shadow` only on hero accent if needed.
