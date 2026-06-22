# MicroCosmos — Design System

A scientific-yet-poetic single-page experience that celebrates the unseen world of microscopic life. Visual style mixes deep cosmic darks, biolab teal/cyan glows, and warm organic ambers.

## Typography
- Display headings: `font-serif` (using Google "Cormorant Garamond" via index.html link) for an editorial, cinematic feel.
- Body and UI: `Inter` (default).
- Display sizes:
  - Hero: `text-5xl md:text-7xl lg:text-8xl`, `tracking-tight`, `font-light`.
  - Section title: `text-4xl md:text-5xl`, `font-light`, `tracking-tight`.
  - Eyebrow label: `text-xs md:text-sm`, `uppercase`, `tracking-[0.3em]`, `text-cyan-300/80`.
  - Body: `text-base md:text-lg`, `leading-relaxed`, `text-slate-300`.

## Colors (use Tailwind utility classes)
- Background base: `bg-slate-950` (near-black with blue tint).
- Surface card: `bg-slate-900/60` with `backdrop-blur` and `border border-white/5`.
- Primary accent (bio-cyan): `text-cyan-300`, `bg-cyan-400`.
- Secondary accent (amber organic): `text-amber-300`.
- Subtle text: `text-slate-400`.
- Strong text on dark: `text-slate-100`.
- Do NOT use light text on light surfaces. All cards on dark must have `text-slate-100/200/300`.

## Spacing & Layout
- Section vertical padding: `py-24 md:py-32`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Card padding: `p-6 md:p-8`.
- Gaps in grids: `gap-6 md:gap-8`.

## Borders & Radii
- Cards/images: `rounded-2xl` or `rounded-3xl`.
- Buttons: `rounded-full`.
- Hairlines: `border border-white/10`.

## Imagery
- Use `data-strk-img` and `data-strk-bg` attributes for stock images.
- Prefer macro/microscopy aesthetics: cells, bacteria, plankton, fungi, crystals, neurons.
- Image aspect ratios: hero `16x9`, gallery cards `1x1`, `3x4`, `4x3` mixed for visual rhythm.

## Effects
- Use soft radial glows: `bg-[radial-gradient(...)]` for atmospheric depth.
- Subtle hover: `hover:scale-[1.02] transition-transform duration-500`.
- Image overlays for legibility: `bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent`.

## Don'ts
- No flat solid bright backgrounds for the page.
- No light gray text on white.
- No magic hex codes inline; rely on Tailwind tokens.
- Don't crowd hero with multiple competing CTAs.
