# ARTITECT MACHINERY — Visual Style Guide

Brand voice: precise, industrial, refined. Elegant but user-friendly: spacious layouts, restrained palette, confident typography, subtle motion.

## Colors (Tailwind named tokens)

Add to tailwind.config.js as named colors so we never use raw hex in JSX.

- `ink` — `#0E1116` (primary text, dark surfaces)
- `graphite` — `#1B1F25` (secondary dark, footer)
- `steel` — `#5A6473` (muted text, captions)
- `mist` — `#E5E8EE` (page background, dividers)
- `paper` — `#FAFAF7` (card / section background)
- `bone` — `#F2EFE8` (warm neutral accent surface)
- `accent` — `#B8894B` (brushed-bronze accent for CTAs / lines)
- `accent-dark` — `#8E6731`

Do:
- Pair `ink` text on `paper`/`mist`/`bone`.
- Pair `paper` text on `ink`/`graphite`.
- Use `accent` only for CTAs, thin underlines, hover states.

Don't:
- Don't use pure black or pure white as background.
- Don't put `steel` text on `mist` (low contrast). Use `ink` for body.
- Don't use accent as large background blocks.

## Typography

- Display / Headings: `Cormorant Garamond` (serif, weight 500–600). Use for H1/H2 hero headings and section titles.
- Body / UI: `Inter` (sans, weight 300–600). Default for paragraphs, nav, buttons.
- Tracking: headings use slight tightening (`tracking-tight`); eyebrow labels use `tracking-[0.25em] uppercase text-xs`.
- Sizes: hero `text-5xl md:text-7xl`, section title `text-3xl md:text-5xl`, body `text-base md:text-lg`.

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Grid gaps: `gap-8 md:gap-10`.
- Borders: 1px `border-mist` for cards on light, 1px `border-white/10` on dark.
- Radius: cards `rounded-none` or `rounded-sm` (industrial, not playful).
- Shadows: very subtle, e.g. `shadow-[0_1px_0_0_rgba(14,17,22,0.06)]`. Avoid heavy drop-shadows.

## Components

- Buttons primary: `bg-ink text-paper hover:bg-accent` transition 200ms.
- Buttons secondary: `border border-ink text-ink hover:bg-ink hover:text-paper`.
- Eyebrow label: small uppercase tracked text in `text-accent` above section titles.
- Thin gold rule (1px `bg-accent w-12`) used as section divider mark.

## Imagery

- Industrial product photography: clean, well-lit, neutral backgrounds.
- Hero uses a wide cinematic background image with a dark overlay for legibility.
- Avoid stock-feeling people shots; favor machinery, steel, workshop detail.

## Don'ts

- No neon gradients, no glassmorphism, no rounded-full hero blobs.
- No emoji in product or marketing copy.
- No low-contrast pairings (e.g., `steel`-on-`mist`).
