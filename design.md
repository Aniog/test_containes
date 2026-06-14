# SSourcing China — Design System

This is the single source of truth for visual style across the SSourcing China website. Every page, section, and component must follow these rules. When in doubt, match what is described here rather than improvising.

## Brand Identity

SSourcing China is a B2B China-sourcing agent serving overseas buyers. The site must feel:
- Professional and trustworthy (think: corporate B2B, not consumer marketplace)
- International and neutral (no "Made in China" cheesiness, no obvious Asian styling tropes)
- Practical and operations-focused (lots of real-feeling process detail, factory, QC, shipping imagery)
- Calm and confident (generous spacing, restrained color, clear typography hierarchy)

## Color Palette

We use a navy + steel + warm accent palette. All colors are exposed as Tailwind tokens. Never use raw hex in components.

- `primary` (Brand Navy): `#0F2A44` — used for top nav, dark hero, primary buttons, headlines
- `primary-700` (Hover): `#163A60`
- `accent` (Warm Action Orange): `#E36A2C` — used for primary CTAs ("Get a Free Sourcing Quote"), highlight badges, key icon accents
- `accent-600` (Hover): `#C95A20`
- `steel` (Mid Blue-Gray): `#4A5A6B` — body text, secondary headings
- `muted` (Background tint): `#F4F6F8` — section background, card surface
- `border` (Line): `#E2E6EB`
- `ink` (Text on light): `#0F1A26`
- `ink-soft` (Secondary text): `#4A5A6B`
- `success`: `#1F8A55`
- `warning`: `#B07A1A`

White is the default page background. Dark sections use `primary` directly.

## Typography

- Font: `Inter` (Google Fonts, weights 400/500/600/700/800). Imported in `index.html`.
- Headlines: tight tracking, semibold to bold, color `ink` (or white on dark).
- Body: regular, color `ink-soft` (or `#E5EAF0` on dark navy).
- No display fonts, no script, no italics for emphasis.

Type scale (Tailwind classes):
- H1 page hero: `text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]`
- H2 section title: `text-3xl md:text-4xl font-bold tracking-tight`
- H3 card title: `text-xl md:text-2xl font-semibold`
- Eyebrow label: `text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-accent`
- Body: `text-base leading-7 text-ink-soft`
- Small: `text-sm text-ink-soft`

## Layout

- Max content width: `max-w-7xl` for section containers, `max-w-3xl` for prose.
- Horizontal padding: `px-5 md:px-8 lg:px-10`.
- Section vertical padding: `py-16 md:py-24`.
- Use a 12-column grid for product/category grids: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.

## Spacing & Radii

- Spacing scale follows Tailwind default.
- Radii: `rounded-md` (4px) for small UI, `rounded-lg` (8px) for cards, `rounded-xl` (12px) for hero CTAs / large feature cards. Avoid fully rounded `rounded-full` except for badges.

## Buttons

- Primary CTA (orange): `bg-accent hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-md shadow-sm transition`
- Secondary (navy outline): `border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-md transition`
- Ghost link: `text-primary hover:text-accent font-semibold`

## Cards

- Background: `bg-white` on `bg-muted` section, or `bg-white` on white section with a `border border-border` and `shadow-sm`.
- Padding: `p-6` for compact, `p-8` for feature cards.
- Icons in cards: 40x40 rounded-md, `bg-accent/10 text-accent`, with a 1.5px stroke lucide-react icon inside.

## Icons

Use `lucide-react` only. Stroke width 1.75. Icon containers are tinted squares, not loose colored icons.

## Imagery

- Always render real photographic content (factory floor, container port, QC inspector, product on a desk) via the `data-strk-img` system. Never use generic abstract gradient or geometric placeholders as the only visual.
- Imagery ratio: prefer `16x9` for hero, `4x3` for case studies, `1x1` for category icons, `3x2` for product showcases.
- Overlay: dark navy with `bg-primary/70` for text legibility on top of photos.

## Trust Signals

- Stats are rendered as three large numbers (`text-4xl font-bold text-primary`).
- "Trusted by" logo row uses grayscale monogram placeholders, evenly spaced, with a `text-ink-soft` caption.

## Do's

- Use specific, factual copy: "Free Quote within 24 hours", "Inspections before 30% deposit release", not hype.
- Show real-world process: timeline, deliverables, accountability.
- Lead with services, then process, then proof.

## Don'ts

- No "Cheapest!" or "Best in China!" superlatives.
- No stock-photo lifestyle scenes of smiling Western shoppers.
- No emoji in headings or body copy.
- No bright blue / SaaS-purple gradients.
- No hardcoded hex values in components. Use Tailwind tokens.
- No light gray text on white without `text-ink-soft` class.
