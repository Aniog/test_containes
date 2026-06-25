# MicroCosmos Design System

A single-page editorial website that takes the viewer on a journey into the microscopic world. The tone is scientific, contemplative, and a little awe-struck — think planetarium meets biology lab.

## Visual Personality

- Deep, dark cosmic backgrounds contrasted with luminous specimen imagery
- Generous whitespace and slow vertical rhythm
- Mixed typography: a refined serif for headlines, a clean sans for body
- Subtle glow / aurora gradients rather than flat colors
- Soft, organic motion (gentle floating, slow fades) — never bouncy or playful

## Color Palette

Use Tailwind arbitrary values or the existing palette. Recommended class mapping:

- Background base: `bg-slate-950` (#020617) — primary canvas
- Background elevated: `bg-slate-900` (#0f172a) — cards and sections
- Surface panel: `bg-slate-900/60` with `backdrop-blur` for floating glass cards
- Primary text: `text-slate-100`
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400`
- Accent emerald (life / cells): `text-emerald-300`, `bg-emerald-500/10`, `border-emerald-400/30`
- Accent cyan (water / fluid): `text-cyan-300`, `bg-cyan-500/10`
- Accent violet (deep / mystery): `text-violet-300`, `from-violet-500/30`
- Highlight gradient: `bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500`

Do NOT use pure white on pure black. Always use slate-50/100 on slate-950 for softer contrast.

## Typography

- Headlines (h1, h2): `font-serif` + `tracking-tight` + `text-slate-50`
  - h1: `text-5xl md:text-7xl font-light`
  - h2: `text-3xl md:text-5xl font-light`
- Sub-eyebrow labels: `text-xs uppercase tracking-[0.3em] text-emerald-300/80`
- Body: `text-base md:text-lg leading-relaxed text-slate-300 font-light`
- Captions: `text-sm text-slate-400`

Google fonts used: `Cormorant Garamond` (serif) and `Inter` (sans).

## Layout & Spacing

- Section vertical padding: `py-24 md:py-32`
- Max content width: `max-w-6xl mx-auto px-6 md:px-10`
- Grids: prefer 2- or 3-column on `md+`, single column on mobile
- Card padding: `p-8 md:p-10`
- Card radius: `rounded-2xl`
- Card border: `border border-white/5`

## Components

- Buttons primary: `inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-slate-950 hover:bg-emerald-300 font-medium tracking-wide`
- Buttons ghost: `inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-slate-100 hover:bg-white/5`
- Stat block: large serif number `text-5xl font-serif text-slate-50`, label `text-xs uppercase tracking-[0.25em] text-slate-400`
- Section eyebrow + headline + lead paragraph stacked, left aligned

## Imagery

- All photographic imagery uses `data-strk-img` / `data-strk-bg`
- Prefer high-detail micro-photography subjects (diatoms, neurons, pollen, plankton)
- Hero background uses `data-strk-bg` with cinematic 16x9 widescreen aspect

## Do's

- Do use generous negative space
- Do use slow, subtle animation only
- Do keep text highly legible on dark surfaces
- Do use serif for headlines, sans for body

## Don'ts

- Don't use neon-pure colors (#00ff00 etc.) — keep accents desaturated
- Don't stack large blocks of pure white text on pure black
- Don't use playful/rounded UI patterns (no big rounded cartoon corners, no emoji icons)
- Don't use more than 3 accent colors in one section
