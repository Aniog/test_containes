# MicroCosmos Visual Design Guide

## Theme
Nature, biology, molecular, mysterious, vibrant, and highly visual. Exploring the unseen microscopic world.

## Typography
- **Headings**: Inter, bold and clean (e.g. `font-sans font-bold`)
- **Body**: Inter, readable and elegant (`font-sans font-normal`)
- **Accents**: Sans-serif, uppercase with tracking (`tracking-widest uppercase text-sm`)

## Colors
- **Primary**: Deep teal/blue-green (e.g., `#0f766e`, Tailwind: `teal-600` to `teal-900`)
- **Secondary**: Vibrant chartreuse or bio-green (`#84cc16`, Tailwind: `lime-500`)
- **Background**: Very dark, almost black, mimicking deep water or space (`#09090b`, Tailwind: `zinc-950`)
- **Surfaces**: Dark transparent cards (`bg-zinc-900/80` or `bg-teal-950/30`)
- **Text**: Off-white for high contrast (`text-zinc-100`, `text-zinc-300`)

## Styling Rules
- Use dark mode by default.
- Heavy reliance on full-width images, grids, and background images.
- Elements should feel organic: subtle backdrop blurs, slight rounded corners for cards (`rounded-2xl`).
- Generous padding and margins to let imagery breathe.
- Text on images must always be visible: use overlays, gradients (`bg-gradient-to-t from-black/80 to-transparent`), or solid dark backgrounds.

## Do's and Don'ts
- **DO**: Use large, bold hero sections with `data-strk-bg`.
- **DO**: Utilize Masonry or Grid layouts for images.
- **DO**: Keep text contrast high (white text on dark backgrounds).
- **DON'T**: Use light mode themes unless specifically requested.
- **DON'T**: Overcrowd the text; let the visuals speak.
