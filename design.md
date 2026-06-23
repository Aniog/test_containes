# MicroCosmos — Visual Style Guide

A single-page, image-rich exhibition site exploring the unseen world: cells, microbes, crystals, water droplets, insects, and microscopic textures.

## Mood

- Scientific yet poetic.
- Dark, deep-space backgrounds with luminous accent colors that evoke fluorescent stains and bioluminescence.
- Generous full-bleed imagery, gallery-first layout, slow elegant transitions.

## Color Palette

Use the named Tailwind colors below (configured in `tailwind.config.js`).

- `cosmos-bg` — `#0a0d14` — primary page background (deep ink black-blue).
- `cosmos-surface` — `#11151f` — cards, panels, sections.
- `cosmos-surface-2` — `#171c2a` — elevated surface, hover states.
- `cosmos-line` — `#222a3d` — subtle borders, dividers.
- `cosmos-text` — `#e7ecf5` — primary readable text on dark.
- `cosmos-muted` — `#9aa3b8` — secondary text, captions.
- `cosmos-accent` — `#7df9c6` — primary accent (bioluminescent mint).
- `cosmos-accent-2` — `#8ab4ff` — secondary accent (microscope blue).
- `cosmos-accent-3` — `#f4a8ff` — tertiary accent (fluorescent magenta).

Do's:
- Use `bg-cosmos-bg text-cosmos-text` as the global base.
- Use `text-cosmos-muted` for captions and small helper text.
- Use accent colors sparingly for highlights, links, numbers, hover states.
- Always keep text legible: light text on dark surfaces only.

Don'ts:
- Don't use light backgrounds for sections — keep the dark gallery feel.
- Don't put accent color text directly on accent color backgrounds.
- Don't hardcode hex values in JSX — always use the named Tailwind classes.

## Typography

- Display / Headings: `Fraunces` (serif) — elegant, editorial.
  - Tailwind class: `font-display`
  - Use weight 500–700, tracking tight on huge headings (`tracking-tight`).
- Body / UI: `Inter` (sans-serif).
  - Tailwind class: `font-sans` (default)
- Mono / numeric labels: `JetBrains Mono`.
  - Tailwind class: `font-mono`

Heading sizes:
- Hero: `text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight`
- Section title: `text-3xl md:text-5xl font-display font-medium tracking-tight`
- Card title: `text-xl md:text-2xl font-display font-medium`
- Eyebrow / kicker: `text-xs md:text-sm uppercase tracking-[0.25em] font-mono text-cosmos-accent`
- Body: `text-base md:text-lg leading-relaxed text-cosmos-muted`

## Spacing & Layout

- Page max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-32`.
- Grid gaps: `gap-6 md:gap-8`.
- Round corners: `rounded-2xl` for cards, `rounded-3xl` for hero/feature panels.
- Borders: `border border-cosmos-line` on cards.
- Subtle elevation: `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]`.

## Imagery

- Image-first design. Large, full-bleed where appropriate.
- All images use the `data-strk-img` / `data-strk-bg` system.
- Common ratios: `16x9` for hero & wide banners, `4x3` for feature cards, `1x1` for mosaic tiles, `3x4` for portrait specimens.
- Treat images with subtle effects: `grayscale-[10%] hover:grayscale-0 transition-all duration-700`, or scale on hover `hover:scale-[1.03]` inside `overflow-hidden`.

## Buttons

- Primary: `bg-cosmos-accent text-cosmos-bg hover:bg-cosmos-accent/90 rounded-full px-6 py-3 font-medium`.
- Secondary: `border border-cosmos-line text-cosmos-text hover:border-cosmos-accent rounded-full px-6 py-3`.

## Motion

- Default transitions: `transition-all duration-500 ease-out`.
- Hover scale on tiles: `hover:scale-[1.02]`.
- Avoid bouncy or playful animations — keep things smooth and editorial.
