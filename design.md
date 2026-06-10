# ARTITECT MACHINERY — Visual Style Guide

A precise, industrial-elegant design system for a premium sheet metal folding machinery brand. The visual tone is engineered, calm, and confident — refined typography, generous whitespace, subtle metal-inspired surfaces, and crisp geometry.

## Brand Personality
- Engineered, precise, premium
- Industrial elegance — not loud, not flashy
- Trustworthy, technical, modern

## Color Palette
Add these to `tailwind.config.js` under `theme.extend.colors`:

- `ink` (primary near-black): `#0E1014` — main text and dark surfaces
- `graphite` (deep neutral): `#1B1F26` — section backgrounds for inverted sections
- `steel` (mid neutral): `#5B6473` — secondary text, lines
- `silver` (cool light gray): `#D7DBE0` — borders, subtle dividers
- `mist` (page surface): `#F4F5F7` — light section background
- `bone` (paper): `#FAFAF8` — soft warm white surface
- `accent` (brand gold): `#B8924A` — accent rule, hover states, small highlights
- `accentSoft`: `#E7DBC1` — light accent backgrounds, badges

Do's:
- Use `ink` for primary text on light surfaces.
- Use `bone` text on `graphite`/`ink` surfaces.
- Use `accent` sparingly for emphasis (single underline rule, hover, key CTA detail).

Don'ts:
- Do not put `accent` on large blocks; it should feel like brushed brass detail, not a button color block.
- Do not use pure black or pure white.

## Typography
- Headings: `Cormorant Garamond` (serif, 500/600) — elegant, editorial
- Body: `Inter` (sans, 300/400/500) — technical clarity
- Mono accents (specs, model codes): `JetBrains Mono` 400

Sizes (Tailwind):
- Display: `text-5xl md:text-7xl tracking-tight font-light` for hero
- H2: `text-3xl md:text-5xl font-light tracking-tight`
- H3: `text-xl md:text-2xl font-medium`
- Body: `text-base md:text-[17px] leading-relaxed text-steel`
- Eyebrow label: `text-xs uppercase tracking-[0.2em] text-accent font-medium`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical rhythm: `py-20 md:py-32`
- Grid gap: `gap-8 md:gap-12`
- Cards radius: `rounded-none` or `rounded-sm` only — keep edges crisp
- Borders: `border border-silver` on light, `border-white/10` on dark

## Components
- Buttons:
  - Primary: `bg-ink text-bone hover:bg-graphite px-7 py-3.5 text-sm uppercase tracking-[0.18em]`
  - Secondary: `border border-ink text-ink hover:bg-ink hover:text-bone` same padding
  - Tertiary (text link): `text-ink hover:text-accent inline-flex items-center gap-2 group` with arrow icon
- Eyebrow rule: short horizontal `<span className="h-px w-10 bg-accent" />` before label
- Section header pattern: eyebrow → H2 → short subhead in `text-steel`

## Imagery
- Use real industrial photography via the stock image system.
- Prefer wide aspect ratios (16x9, 3x2) for hero/feature images.
- Apply soft black overlay `bg-ink/40` on hero image for text contrast.

## Motion
- Subtle only. `transition-colors`, `transition-transform duration-500 ease-out`
- Hover: image `scale-[1.03]`, link underline expands.

## Visibility Rules
- All body text on light backgrounds: `text-ink` or `text-steel`.
- All body text on dark backgrounds: `text-bone` or `text-silver`.
- Never rely on inherited color in cards — always set foreground explicitly.
