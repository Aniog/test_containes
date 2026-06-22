# MicroCosmos — Visual Design Guide

A single-page editorial science website exploring the unseen world of microscopic life. The aesthetic is dark, scientific, and luminous — like looking through a microscope late at night.

## Theme

- Mood: cinematic, scientific, awe-inspiring
- Tone: deep cosmic dark with vibrant bio-luminescent accents
- Palette inspiration: deep ocean blue, lab-glass emerald, neon cyan, soft white

## Color System (Tailwind)

- Primary background: `bg-slate-950` (page), `bg-slate-900` (sections), `bg-slate-900/60` (cards on image overlays)
- Surface / cards: `bg-slate-900` with `border border-slate-800`
- Foreground text: `text-slate-100` (primary), `text-slate-300` (body), `text-slate-400` (muted)
- Accent (bio-luminescent): `text-emerald-400`, `bg-emerald-500`, `text-cyan-300`, `bg-cyan-500`
- Gradient accents: `bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500`
- On-accent foreground: `text-slate-950` for buttons on emerald/cyan

Do
- Always set explicit foreground on dark surfaces (e.g. `text-slate-100`).
- Use accent gradients sparingly on headings, buttons, and dividers.

Don't
- Don't use light gray text on light gray backgrounds.
- Don't use pure black; prefer `slate-950`.
- Don't mix neon green and neon pink — keep accents to emerald/cyan/sky family.

## Typography

- Headings: Inter, weight 700–800, tight tracking (`tracking-tight`)
- Display headings: very large, e.g. `text-5xl md:text-7xl font-extrabold`
- Body: Inter, weight 400, `text-base md:text-lg leading-relaxed`
- Eyebrow / label: uppercase, `text-xs tracking-[0.25em] text-emerald-400`
- Numbers / stats: `text-4xl md:text-5xl font-bold`

## Layout & Spacing

- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`
- Section vertical padding: `py-20 md:py-28`
- Grid gaps: `gap-6 md:gap-8`
- Rounded corners: `rounded-2xl` for media, `rounded-full` for pills
- Borders: `border border-slate-800`
- Shadows: `shadow-2xl shadow-emerald-500/10` on hero/feature cards

## Components Patterns

- Buttons primary: `bg-emerald-400 text-slate-950 hover:bg-emerald-300 rounded-full px-6 py-3 font-semibold`
- Buttons ghost: `border border-slate-700 text-slate-100 hover:border-emerald-400 hover:text-emerald-400 rounded-full px-6 py-3`
- Image cards: `relative overflow-hidden rounded-2xl border border-slate-800` with hover `scale-[1.02]` and gradient overlay
- Stat blocks: large number + small uppercase label

## Imagery

- This is a photo-rich site: heavy use of `data-strk-img` with ratios `1x1`, `4x3`, `3x4`, `16x9`, `3x2`.
- Hero uses a full-bleed `data-strk-bg` background with dark overlay (`bg-slate-950/70`) to keep text legible.
- Gallery uses asymmetric grids (bento layout) for visual interest.

## Motion

- Subtle hover transitions: `transition-transform duration-500`
- Scaling images on hover: `group-hover:scale-110`
- No aggressive animations.

## Accessibility

- All text on dark backgrounds must remain at least slate-300 contrast.
- All images must have meaningful `alt` attributes.
- Buttons and links must have visible focus states (`focus-visible:ring-2 focus-visible:ring-emerald-400`).
