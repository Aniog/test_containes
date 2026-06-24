# MicroCosmos — Visual Style

A scientific yet poetic design that evokes the wonder of looking through a microscope.
Inspired by deep ocean blues, bioluminescent glow, and clean lab aesthetics.

## Palette

- Background base: deep navy / near-black `bg-slate-950`
- Surface panels: `bg-slate-900/70` with `backdrop-blur` and `border border-white/10`
- Primary accent (bio-glow cyan): `text-cyan-300`, `bg-cyan-400`, `from-cyan-400`
- Secondary accent (plasma violet): `text-fuchsia-300`, `from-fuchsia-500`
- Tertiary accent (algae green): `text-emerald-300`
- Foreground text on dark: `text-slate-100` (primary) and `text-slate-300/400` (secondary)
- Foreground text on light surfaces (rare): `text-slate-900`
- Use gradients sparingly: `bg-gradient-to-br from-cyan-500/20 via-slate-900 to-fuchsia-500/20`

## Typography

- Global font: Inter, system-ui (set in `index.css`)
- Display headings: `font-extrabold tracking-tight` with sizes `text-5xl md:text-7xl`
- Section titles: `text-3xl md:text-5xl font-bold`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`
- Eyebrow labels: `text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80`

## Layout & Spacing

- Container: `max-w-6xl mx-auto px-6 md:px-10`
- Section vertical padding: `py-20 md:py-28`
- Grid gaps: `gap-6 md:gap-10`
- Cards: `rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5`
- Soft shadow: `shadow-[0_0_60px_-20px_rgba(34,211,238,0.35)]`

## Motion / Decorative

- Subtle ambient glows using absolutely positioned blurred radial divs:
  `absolute -z-10 blur-3xl opacity-40 rounded-full`
- Hover: `transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40`

## Do's

- Keep generous negative space around hero text.
- Use cyan as the single dominant accent; use violet/green as supporting accents only.
- Prefer thin hairline borders `border-white/10` over heavy strokes.
- All text on dark surfaces must be `text-slate-100` or lighter for primary content.

## Don'ts

- No pure black `#000` or pure white `#fff` blocks.
- Do not place light gray text on light backgrounds (contrast issue).
- Do not mix more than 3 accent colors in a single section.
- Avoid drop shadows on dark surfaces; prefer colored glow shadows.
