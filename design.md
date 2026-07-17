# ARTITECT MACHINERY — Visual Style Guide

Elegant industrial design for a premium sheet metal folding machinery manufacturer.
The brand sells heavy precision equipment (double folding machines, metal folders),
so the look must feel **engineered**: precise, confident, refined — yet friendly and
easy to navigate for non-technical buyers.

## Mood
Elegant, precise, industrial-luxury. Dark steel surfaces contrasted with warm amber
accents (like machined brass / hot metal). Generous whitespace, thin divider lines,
large confident typography. Never busy, never playful.

## Colors (all named in tailwind.config.js — no raw hex in class strings)

| Token | Usage | Tailwind class examples |
| --- | --- | --- |
| `ink` (#0B0E13) | Deepest background, footer, dark sections | `bg-ink`, `text-ink` |
| `steel` (#12161D) | Primary dark surface, cards on dark | `bg-steel` |
| `graphite` (#1B212B) | Raised dark surface, borders on dark | `bg-graphite`, `border-graphite` |
| `line` (#E2E6EC) | Hairline borders on light surfaces | `border-line` |
| `paper` (#F7F8FA) | Light section background | `bg-paper` |
| `amber` (#F59E0B) | Primary accent — CTAs, highlights, active states | `bg-amber`, `text-amber` |
| `amber-deep` (#B45309) | Accent hover / darker accent text on light | `hover:bg-amber-deep` |
| `mist` (#98A2B3) | Muted text on dark surfaces | `text-mist` |
| `slate-body` (#47515F) | Body text on light surfaces | `text-slate-body` |
| `white` | Headings on dark, card surfaces on light | `text-white`, `bg-white` |

Rules:
- Dark sections: `bg-ink` or `bg-steel` with `text-white` headings and `text-mist` body.
- Light sections: `bg-paper` or `bg-white` with `text-ink` headings and `text-slate-body` body.
- Accent amber is used sparingly: primary buttons, small overline labels, icon chips, active nav.
- Never put light text on light backgrounds or dark text on dark backgrounds.

## Typography
- Display/headings: **Cormorant Garamond** would be too soft for machinery — instead use
  **"Archivo"** (600/700/800, tight tracking) for an engineered editorial feel.
- Body/UI: **"Inter"** (400/500/600).
- Overline labels: `text-xs font-semibold tracking-[0.25em] uppercase text-amber`.
- H1 hero: `text-5xl md:text-7xl font-extrabold tracking-tight text-white`.
- H2 section: `text-3xl md:text-5xl font-bold tracking-tight`.
- Body: `text-base md:text-lg leading-relaxed`.

## Spacing & Layout
- Page container: `mx-auto max-w-7xl px-6 lg:px-8`.
- Section padding: `py-20 md:py-28`.
- Cards: `rounded-2xl`, light shadow on light bg, `border border-graphite` on dark bg.
- Grids: 1 col mobile, 2–3 col desktop (`md:grid-cols-2 lg:grid-cols-3`).
- Hairline dividers: `border-t border-line` (light) or `border-white/10` (dark).

## Components
- Primary button: `bg-amber text-ink font-semibold rounded-full px-7 py-3 hover:bg-amber-deep hover:text-white transition`.
- Secondary button (dark bg): `border border-white/30 text-white rounded-full px-7 py-3 hover:border-amber hover:text-amber transition`.
- Secondary button (light bg): `border border-ink/20 text-ink rounded-full px-7 py-3 hover:border-ink transition`.
- Spec chips: small uppercase labels with values, separated by hairlines.
- Navbar: fixed, transparent over hero → `bg-ink/90 backdrop-blur` after scroll, `text-white`.
- Footer: `bg-ink text-mist`, headings `text-white`, top hairline `border-white/10`.

## Imagery
- Use the strk-img tagging system for all photos (machinery, factory, metalwork).
- Images sit inside `rounded-2xl overflow-hidden` frames; hero uses a full-bleed
  `data-strk-bg` background with a dark gradient overlay for text legibility.

## Do / Don't
- DO keep generous whitespace and thin lines — elegance comes from restraint.
- DO use amber only for emphasis moments (max 1–2 per viewport).
- DON'T use gradients of many colors, playful illustrations, or rounded "blob" shapes.
- DON'T use pure black text on saturated color, or gray text under 4.5:1 contrast.
- DON'T stack everything in one column on desktop — use multi-column grids.
