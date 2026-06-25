# MicroCosmos Design System

## Theme
A dark, scientific yet wondrous aesthetic that mimics looking through a microscope at a hidden universe. Deep navy/black backgrounds with luminous teal, cyan, and violet accents create a "bioluminescent" mood. Imagery dominates; text is precise and minimal.

## Color Palette (Tailwind classes)
- Background base: `bg-slate-950` (#020617)
- Background panels: `bg-slate-900/70`, `bg-slate-900`
- Surface highlight: `bg-slate-800/60`
- Primary accent (bioluminescent teal): `text-teal-300`, `bg-teal-400`, `from-teal-400`
- Secondary accent (deep cyan): `text-cyan-300`, `from-cyan-500`
- Tertiary accent (violet/specimen-stain): `text-violet-300`, `from-violet-500`, `to-fuchsia-500`
- Body text: `text-slate-200`
- Muted text: `text-slate-400`
- Subtle borders: `border-white/5`, `border-teal-400/20`

## Typography
- Global font: Inter (already set)
- Display headings: `font-extrabold tracking-tight` with sizes `text-5xl md:text-6xl lg:text-7xl`
- Section headings: `text-3xl md:text-4xl font-bold tracking-tight`
- Eyebrow labels: `text-xs uppercase tracking-[0.3em] text-teal-300`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`
- Captions / specimen labels: `text-xs uppercase tracking-widest text-slate-400`

## Spacing & Layout
- Sections: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Card padding: `p-6 md:p-8`
- Grid gutters: `gap-6 md:gap-8`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Imagery
- Use lots of images. Most cards contain a stock image.
- Image containers: rounded `rounded-2xl`, with subtle border `ring-1 ring-white/10`, slight overlays `bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent` for caption legibility.
- Aspect ratios: hero 16x9, gallery cards 4x3 or 1x1, feature cards 3x2.

## Components
- Buttons primary: `bg-teal-400 text-slate-950 hover:bg-teal-300 rounded-full px-6 py-3 font-semibold`
- Buttons ghost: `border border-white/15 text-slate-100 hover:bg-white/5 rounded-full px-6 py-3`
- Chips/badges: `inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/10`
- Cards: `bg-slate-900/60 ring-1 ring-white/10 rounded-2xl backdrop-blur-sm`

## Do's
- Always set explicit foreground colors on dark backgrounds (e.g. `text-slate-100` on `bg-slate-900`).
- Use gradient text sparingly for hero only: `bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300`.
- Pair every image with a readable caption.

## Don'ts
- No light-text-on-light surfaces or dark-text-on-dark surfaces.
- No magic hex codes inline; use Tailwind tokens above.
- No mobile stacking on desktop where multi-column is more appropriate.
