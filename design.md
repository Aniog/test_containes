# MicroCosmos — Visual Style Guide

## Theme
A scientific, editorial, slightly futuristic aesthetic. Dark background evoking the depth of a microscope's field of view, with clean typography and vivid biological accent colors. Imagery is the hero — most of the layout serves to frame photographs of microscopic life.

## Colors (Tailwind utility names)
- Background base: `bg-slate-950`, surface `bg-slate-900`, raised `bg-slate-900/60`
- Foreground primary: `text-slate-100`, secondary `text-slate-300`, muted `text-slate-400`
- Accent (cellular cyan): `text-cyan-400`, `bg-cyan-500`, hover `bg-cyan-400`
- Accent secondary (organic emerald): `text-emerald-400`, `bg-emerald-500`
- Accent tertiary (specimen amber): `text-amber-400`
- Borders / dividers: `border-slate-800`, hover `border-cyan-500/40`

## Typography
- Headings: Inter, bold, tight tracking. Hero title `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section title: `text-3xl md:text-5xl font-bold tracking-tight`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`
- Eyebrow / labels: `text-xs uppercase tracking-[0.25em] text-cyan-400`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6`
- Grid gaps: `gap-4 md:gap-6`

## Visual Style
- Rounded corners: `rounded-2xl` for image cards, `rounded-full` for pill buttons.
- Shadows: subtle, e.g. `shadow-2xl shadow-cyan-500/10`.
- Borders: thin `border border-slate-800` on cards.
- Image cards use `overflow-hidden` with hover `scale-105` zoom transition `transition-transform duration-700 ease-out`.
- Use thin top/bottom hairlines `border-t border-slate-800` for section breaks.

## Do's
- Use lots of imagery; let images breathe with consistent gaps.
- Maintain high contrast between text and background.
- Use cyan/emerald/amber sparingly as accent, not as dominant.
- Use uppercase tracked-out eyebrows above section titles.

## Don'ts
- Do not use light-on-light or dark-on-dark text combinations.
- Do not hardcode hex color values inside JSX class strings.
- Do not crowd images; always keep gap and rounded corners.
- Do not use mobile single-column stacking on desktop layouts where grids work better.
