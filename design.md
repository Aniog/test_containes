# ARTITECT MACHINERY — Visual Design Guide

Elegant, industrial, refined. The brand sells precision sheet-metal folding machines.
Think: premium German engineering meets modern editorial design. Generous whitespace,
confident typography, restrained color, sharp lines, soft shadows.

## Color Palette

Use these Tailwind v4 named colors (configured in `src/index.css` via `@theme`).

- Primary (Graphite): `#1a1f2c` — main text, headers, dark sections
- Accent (Steel Amber): `#b88b4a` — primary CTAs, highlights, dividers
- Surface (Bone): `#f7f5f0` — page background, light panels
- Surface Alt (Cloud): `#ffffff` — cards, contrast surfaces
- Muted Ink: `#5a6072` — secondary text
- Border Hairline: `#e3dfd5` — subtle dividers
- Steel Cool: `#2b3242` — section blocks, footer

Tailwind usage (after theme tokens are registered):
- `bg-bone`, `bg-graphite`, `bg-steel`, `bg-cloud`
- `text-graphite`, `text-muted-ink`, `text-accent`
- `border-hairline`

## Typography

- Headings: "Cormorant Garamond" serif — elegant, editorial, high contrast.
  Tailwind: `font-serif`. Heavy weights: `font-light` or `font-medium` for
  larger sizes (we want airy headlines).
- Body / UI: "Inter" sans-serif. Tailwind: `font-sans`.
- Eyebrow labels: uppercase, tracking-widest, text-xs, text-accent.

Headline scale examples:
- Hero h1: `text-5xl md:text-7xl font-serif font-light tracking-tight`
- Section h2: `text-3xl md:text-5xl font-serif font-light tracking-tight`
- Card title: `text-xl font-serif font-medium`

## Spacing & Layout

- Page container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical padding: `py-20 md:py-28`
- Grid gaps: `gap-8 md:gap-12`
- Use generous whitespace. Don't overcrowd.

## Visual Style

- Borders: thin, hairline (`border border-hairline`). No heavy borders.
- Corners: mostly square or `rounded-sm` / `rounded-md`. Avoid pillowy `rounded-2xl` on big surfaces; reserve gentle rounding for chips/buttons.
- Shadows: very soft, e.g. `shadow-[0_8px_30px_rgb(0,0,0,0.06)]`. Avoid colored shadows.
- Lines & dividers: thin accent line `h-px w-12 bg-accent` as a section eyebrow underline.
- Buttons:
  - Primary: `bg-graphite text-bone hover:bg-steel` square corners `rounded-sm` px-7 py-3
  - Accent: `bg-accent text-graphite hover:bg-[#a87a3d]`
  - Ghost: `border border-graphite text-graphite hover:bg-graphite hover:text-bone`
- Images: use sharp rectangles with subtle hairline border, no heavy rounding.

## Do / Don't

Do:
- Use serif for everything that's a heading or display.
- Keep the page calm; let imagery breathe.
- Use the amber accent sparingly — eyebrows, key CTAs, hairlines.
- Maintain strong contrast: dark text on bone, bone text on graphite/steel.

Don't:
- Use neon colors, gradients, or playful icons.
- Use playful rounded shapes or blob shapes.
- Stack on desktop — use multi-column grids for desktop sizes.
- Use low-contrast combinations (light gray on bone).
