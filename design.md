# MicroCosmos — Visual Design System

A scientific yet wonder-filled aesthetic that evokes the unseen world under the microscope.
Dark, deep navy/teal backgrounds; bioluminescent cyan and emerald accents; clean typography.

## Theme
- Mood: scientific, mysterious, awe-inspiring, modern editorial.
- Inspiration: deep-sea bioluminescence, cellular microscopy, scientific journals.

## Colors (use these Tailwind classes)
- Background base: `bg-slate-950`, secondary surface `bg-slate-900`, raised cards `bg-slate-900/70` with `backdrop-blur`.
- Primary accent (bioluminescent): `text-cyan-400`, `bg-cyan-500`, gradient `from-cyan-400 to-emerald-400`.
- Secondary accent: `text-emerald-400`, `bg-emerald-500`.
- Tertiary accent (warm contrast): `text-fuchsia-400`, `text-amber-300` for highlights.
- Text on dark: primary `text-slate-100`, secondary `text-slate-300`, muted `text-slate-400`.
- Borders/dividers: `border-slate-800`, hover `border-cyan-500/40`.

## Typography
- Display headings: `font-serif` (Playfair Display) tracking-tight, weights 600-800.
- Body / UI: Inter sans-serif, weights 400-600.
- Scale (desktop): hero `text-6xl md:text-7xl lg:text-8xl`, section title `text-4xl md:text-5xl`, eyebrow `text-sm uppercase tracking-[0.3em]`.

## Spacing & layout
- Sections: `py-20 md:py-28` vertical, `px-6 md:px-10` horizontal.
- Container: `max-w-7xl mx-auto`.
- Grid gaps: `gap-6 md:gap-8`.
- Cards: rounded `rounded-2xl`, subtle border `border border-slate-800`, hover lift `hover:-translate-y-1 transition`.

## Imagery
- Heavy use of imagery — this site is image-led.
- Use `data-strk-img` and `data-strk-bg` patterns. Default ratios: hero `16x9`, gallery `4x3` and `3x4` mixed for masonry, portraits `1x1`.
- Apply subtle overlays on hero/cta backgrounds: `bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950`.

## Component patterns
- Buttons primary: `bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full px-6 py-3`.
- Buttons ghost: `border border-slate-700 hover:border-cyan-400 text-slate-100 rounded-full px-6 py-3`.
- Eyebrow label: `<span className="text-xs uppercase tracking-[0.3em] text-cyan-400">`
- Number/stat: huge serif numerals in gradient text `bg-gradient-to-br from-cyan-300 to-emerald-400 bg-clip-text text-transparent`.
- Image card: rounded image, gradient caption overlay at bottom.

## Do
- Keep contrast high — light text on dark surfaces.
- Layer images, use mixed aspect ratios and asymmetric grids for editorial feel.
- Use thin gradient hairlines or radial glows behind hero/feature blocks.

## Don't
- Don't use pure black or pure white surfaces.
- Don't use low-contrast text such as slate-500 on slate-900 for body copy.
- Don't crowd layouts; let imagery breathe.
- Don't hardcode arbitrary hex codes; rely on Tailwind tokens above.
