# ARTITECT MACHINERY — Visual Style Guide

A precise, elegant, industrial brand for a premium sheet metal folding machine manufacturer. The mood is confident, refined, and engineered — like reading a high-end architecture magazine in a clean machine workshop. Editorial typography, generous whitespace, and exact alignment communicate craftsmanship; the muted steel palette communicates industry.

## Voice
- Precise, calm, confident. Never loud or salesy.
- Talk in capabilities, materials, tolerances — not adjectives.

## Color Palette (named tokens added in `tailwind.config.js`)
- `ink` `#0E1116` — primary text, headings, dark sections
- `graphite` `#1F2329` — secondary dark surfaces
- `steel` `#5A6573` — supporting body text, captions
- `mist` `#A9B0BB` — borders, dividers, muted icons
- `bone` `#F5F2EC` — primary page background (warm off-white, "blueprint paper" feel)
- `paper` `#FFFFFF` — cards, modals, contrast surfaces
- `accent` `#B8884B` — single brass/bronze accent for CTAs, highlights, underlines

Allowed combinations:
- Headings: `text-ink` on `bg-bone` or `bg-paper`
- Dark sections: `text-bone` on `bg-ink`
- Accent: `text-accent` for small marks; `bg-accent text-ink` for primary buttons

Disallowed: never put light text on `bg-bone`, never `text-mist` on `bg-paper` for body copy.

## Typography
- Display: `Playfair Display` (serif) — page titles, section titles. Use weights 500–700, tight tracking.
- Body / UI: `Inter` (sans) — body, nav, buttons, labels. 400/500/600.
- Eyebrow labels: Inter, `text-xs uppercase tracking-[0.2em] text-steel`.

Examples:
- Hero title: `font-serif text-5xl md:text-7xl font-medium leading-[1.05] tracking-tight text-ink`
- Section title: `font-serif text-3xl md:text-4xl font-medium text-ink`
- Body: `text-base md:text-lg leading-relaxed text-steel`
- Eyebrow: `text-xs uppercase tracking-[0.2em] text-steel`

## Layout & Spacing
- Container: `max-w-7xl mx-auto px-6 md:px-10`
- Section vertical rhythm: `py-20 md:py-28`
- Cards: subtle 1px hairline borders `border border-mist/50`, `rounded-none` or `rounded-sm` only — no large radii
- Generous whitespace; align everything to a clear baseline grid.

## Components
- Buttons (primary): `inline-flex items-center gap-2 bg-ink text-bone px-6 py-3 text-sm tracking-wide hover:bg-graphite transition`
- Buttons (accent): `bg-accent text-ink hover:bg-accent/90`
- Buttons (ghost): `border border-ink text-ink hover:bg-ink hover:text-bone`
- Hairline divider: `h-px w-full bg-mist/60`
- Eyebrow + serif title is the canonical section header pattern.

## Imagery
- Photography is industrial, clean, well-lit: machinery details, sheet metal forms, workshop scenes.
- Always use the `data-strk-*` tagging system. No hardcoded image URLs.

## Do / Don't
- Do: hairline borders, square corners, generous padding, serif display + sans body.
- Do: keep accent color rare so it remains meaningful.
- Don't: gradients, drop shadows beyond `shadow-sm`, neon colors, emoji.
- Don't: low-contrast text. Always confirm body copy is readable on its surface.
