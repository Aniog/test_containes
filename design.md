# MicroCosmos — Visual Design Guide

A single-page site that takes the visitor on a journey into the microscopic universe.
The mood is scientific, cinematic, and slightly futuristic — like peering through a
high-powered microscope at midnight.

## Palette

- Deep space background: `bg-slate-950` (#020617)
- Surface / card: `bg-slate-900` (#0f172a)
- Subtle border: `border-slate-800`
- Primary accent (bio-luminescent teal): `text-teal-300` / `bg-teal-400`
- Secondary accent (electric violet): `text-violet-300` / `bg-violet-500`
- Tertiary accent (warm amber for highlights): `text-amber-300`
- Text on dark: `text-slate-100`
- Muted text on dark: `text-slate-400`

Do: pair light text on the deep slate background.
Don't: use light text on light surfaces or dark text on slate.

## Typography

- Font family: Inter (already loaded by index.css)
- Display headings: `text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-5xl font-semibold tracking-tight`
- Eyebrow / label: `text-xs uppercase tracking-[0.25em] text-teal-300`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`

## Spacing & Layout

- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Grid gaps: `gap-6 md:gap-8`
- Rounded corners: `rounded-2xl` for cards, `rounded-3xl` for hero panels

## Imagery

- Imagery is the centerpiece. Use generous photo grids, full-bleed backgrounds,
  and image-led cards.
- Always pair an image with explanatory text — never an unlabeled image.
- Use the `data-strk-img` / `data-strk-bg` system with stable referenced IDs.

## Effects

- Subtle gradients: `bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950`
- Accent gradients on headings: `bg-gradient-to-r from-teal-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent`
- Card hover: `hover:-translate-y-1 hover:border-teal-400/40 transition`
- Image zoom on hover: `group-hover:scale-105 transition duration-700`

## Do / Don't

- Do keep the background dark and let images glow.
- Do use the teal accent sparingly for emphasis — eyebrows, underlines, key numbers.
- Don't crowd hero text on top of busy images without an overlay.
- Don't mix more than two accent colors in the same component.
