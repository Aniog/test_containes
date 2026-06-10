# ARTITECT MACHINERY — Visual Design System

A precise, industrial yet refined visual language for an elegant, user‑friendly
machinery brand. Think: Bauhaus precision meets premium product showcase.

## Design Principles
- Elegant, calm, confident. Plenty of whitespace.
- Strong industrial typography paired with generous serif/sans hierarchy.
- Monochrome base with a single warm accent (amber).
- Sharp 1px lines and thin dividers convey precision engineering.
- Soft shadows, subtle depth — never glossy or playful.

## Color Palette
Hex codes are added to Tailwind config as named colors. Use those tokens, not raw hex in JSX.

- ink (near-black):     `#0E0F12`  — primary text, headlines, dark sections
- graphite:             `#2A2D33`  — secondary text, dark surfaces
- steel:                `#6B7280`  — muted text, captions
- mist:                 `#E6E8EC`  — subtle borders, dividers
- bone (off-white):     `#F6F4EE`  — page background, soft surfaces
- canvas (white):       `#FFFFFF`  — cards, hero base
- amber (accent):       `#C9892F`  — CTA, accent rules, hover highlights
- amber-dark:           `#A86F1F`  — accent hover

Tailwind tokens to use: `bg-bone`, `bg-canvas`, `bg-ink`, `text-ink`,
`text-steel`, `text-amber-brand`, `border-mist`, etc.

## Typography
- Headings: `Cormorant Garamond` (serif) — elegant, editorial. `font-serif`.
- Body / UI: `Inter` (sans-serif). `font-sans`.
- Eyebrow / labels: Inter, uppercase, tracking-[0.2em], text-xs.

Scale (do):
- Display: `text-5xl md:text-7xl font-serif font-light leading-[1.05]`
- H1:      `text-4xl md:text-6xl font-serif font-light`
- H2:      `text-3xl md:text-5xl font-serif font-light`
- H3:      `text-xl md:text-2xl font-medium`
- Body:    `text-base md:text-lg leading-relaxed text-graphite`
- Caption: `text-sm text-steel`

Don't:
- Don't bold serif headings (use `font-light` or `font-normal`).
- Don't use more than 2 fonts on a page.

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Card padding: `p-8 md:p-10`.
- Use `gap-8` to `gap-12` between major elements.

## Borders & Surfaces
- Borders: `border-mist`, `border` (1px). Avoid heavy 2px+ borders.
- Cards: `bg-canvas border border-mist` or `bg-bone`.
- Dividers: thin amber accent rule `h-px w-12 bg-amber-brand` for eyebrow blocks.
- Radius: prefer sharp — `rounded-none` for hero/feature cards,
  `rounded-sm` for inputs/buttons. Avoid pill shapes.

## Buttons
- Primary: `bg-ink text-canvas hover:bg-graphite px-7 py-3 rounded-sm tracking-wide text-sm uppercase`
- Secondary: `border border-ink text-ink hover:bg-ink hover:text-canvas`
- Tertiary/link: `text-ink underline-offset-4 hover:text-amber-brand`
- Always include an arrow icon for primary CTAs (`ArrowRight` from lucide).

## Imagery
- Use real machinery / industrial / sheet-metal-fabrication photography.
- Prefer 3x2 or 4x3 ratios for product cards, 16x9 for hero.
- Avoid filters — let raw industrial textures show.

## Iconography
- Lucide React, `stroke-width={1.5}`, size `w-6 h-6` typically.
- Icons should never carry color other than ink/graphite/amber.

## Do / Don't
Do:
- Use whitespace generously. The page should breathe.
- Mix serif headlines with sans body for editorial feel.
- Keep contrast strong: `text-ink` on `bg-bone`/`bg-canvas`.

Don't:
- Don't use neon, gradients, or playful color combinations.
- Don't use text colors that blend (no `text-steel` on `bg-mist`).
- Don't stack components without breathing room.
