# MicroCosmos Visual Design

A scientific, awe-inspiring single-page experience exploring the unseen world of microscopic life. The design blends a deep cosmic palette with bioluminescent accents, mixing precision typography with organic imagery.

## Theme

- Mood: scientific, mysterious, vivid, premium
- Inspiration: deep-space photography meets electron-microscope imagery
- Light/Dark: dark-first; the entire site uses a dark canvas

## Color Palette

Primary (named tokens defined in `tailwind.config.js`):

- `cosmos-bg` (#05070d) - page background, near-black with a hint of blue
- `cosmos-surface` (#0b1020) - cards, panels
- `cosmos-surface-2` (#111934) - elevated cards / hovered states
- `cosmos-border` (#1f2a4a) - subtle borders
- `cosmos-fg` (#e6ecff) - primary text
- `cosmos-muted` (#94a3c4) - secondary text
- `cosmos-accent` (#7cf9d8) - bioluminescent teal, primary accent
- `cosmos-accent-2` (#a78bfa) - violet, secondary accent
- `cosmos-accent-3` (#f472b6) - magenta highlight, used sparingly

Accent gradients:

- Primary gradient: `from-cosmos-accent via-cosmos-accent-2 to-cosmos-accent-3`
- Background glows: radial gradients of accent colors at low opacity

Do:
- Use `text-cosmos-fg` on `bg-cosmos-bg` or `bg-cosmos-surface`.
- Use `text-cosmos-muted` for secondary descriptive text.
- Use the gradient for short headline accent words and key buttons only.

Don't:
- Don't put `text-cosmos-muted` on `bg-cosmos-bg` for important data — use `text-cosmos-fg`.
- Don't use the magenta accent on large surfaces; reserve for highlights.
- Don't render text directly on top of full-color photos without an overlay.

## Typography

- Display font: `Space Grotesk` (headings), 600/700
- Body font: `Inter` (paragraphs/UI), 400/500
- Mono font: `JetBrains Mono` (small labels, eyebrow tags), 500

Sizes:
- Hero headline: `text-5xl md:text-7xl`, `font-display`, `tracking-tight`
- Section headline: `text-3xl md:text-5xl`, `font-display`
- Subheading: `text-base md:text-lg`, `text-cosmos-muted`
- Eyebrow tag: `text-xs uppercase tracking-[0.25em] font-mono text-cosmos-accent`
- Body: `text-base leading-relaxed text-cosmos-fg/90`

## Layout

- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`
- Section vertical rhythm: `py-20 md:py-28`
- Grid gaps: `gap-6 md:gap-8`
- Cards: `rounded-2xl border border-cosmos-border bg-cosmos-surface/70 backdrop-blur-sm p-6 md:p-8`
- Mobile: stack to one column. Desktop: 2–4 column grids depending on section.

## Imagery

- Use `data-strk-img` and `data-strk-bg` for all photographic imagery.
- Subjects: microscope photography, cells, diatoms, microorganisms, water-drop life, pollen, neurons, mycelium, phytoplankton.
- Always pair photo elements with a subtle dark gradient overlay for legibility.

## Components & Effects

- Glow orbs: absolutely-positioned blurred radial gradients behind hero and section corners.
- Glass cards: `bg-cosmos-surface/60 backdrop-blur` with `border border-cosmos-border`.
- Buttons:
  - Primary: gradient background, `text-cosmos-bg`, `font-medium`, `rounded-full px-6 py-3`
  - Secondary: `border border-cosmos-border text-cosmos-fg hover:bg-cosmos-surface-2 rounded-full`
- Number stat: large gradient text (`bg-clip-text text-transparent`) with mono caption below.
- Dividers: 1px hairline with `bg-cosmos-border` or accent gradient line.

## Accessibility

- Maintain WCAG AA contrast: `cosmos-fg` on `cosmos-bg` exceeds 12:1.
- Never put `cosmos-muted` text on accent-color backgrounds.
- Keep buttons with strong contrast (gradient bg + dark text).
