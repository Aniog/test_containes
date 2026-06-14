# ARTITECT MACHINERY — Design Language

Brand: ARTITECT MACHINERY (art + architect). Industrial machinery for
sheet-metal folding. Tone: elegant, considered, user-friendly, modern.

## Palette

| Token            | Hex      | Usage                                         |
| ---------------- | -------- | --------------------------------------------- |
| `bg`             | `#F6F2EB` | Page background — warm off-white              |
| `surface`        | `#FFFFFF` | Cards, elevated surfaces                      |
| `ink`            | `#0E1A2B` | Primary text, deep navy                       |
| `ink-soft`       | `#1F2A40` | Secondary headings                            |
| `muted`          | `#5B6478` | Body / supporting copy                        |
| `line`           | `#E2D9CC` | Hairline dividers, card borders               |
| `accent`         | `#B07A3B` | Bronze — primary brand accent (CTA, badges)   |
| `accent-strong`  | `#8C5A21` | Hover state for accent                        |
| `accent-soft`    | `#E9D4B5` | Tinted backgrounds                            |
| `slate`          | `#0E1A2B` | Hero / footer dark surface                    |
| `slate-soft`     | `#16243B` | Section card on dark                          |

Rules:
- Do not place white/light text on `bg` / `surface` / `accent-soft` without
  forcing the `text-ink` class on the container.
- Do not place dark text on `slate` / `slate-soft` / `accent` without
  explicit `text-white` / `text-bg` overrides.
- Always keep `text-ink` on `bg` / `surface` / `accent-soft`.

## Typography

- Display / Headings: `Fraunces` (Google Fonts), optical sizing enabled.
  Use weight 400-500 with `font-light` and tight `tracking-tight`.
  Italic for emphasis words.
- Body / UI: `Inter` (Google Fonts). Weights 400, 500, 600.
- Numerics & specs: tabular-nums via `tabular-nums`.

Sizes (Tailwind):
- `text-5xl md:text-7xl` for hero h1
- `text-3xl md:text-4xl` for section h2
- `text-xl md:text-2xl` for card titles
- `text-base` for body, `text-sm` for meta

## Layout

- Max content width: `max-w-7xl` (1280px), side gutter `px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Cards: `rounded-2xl`, border `border-line`, padding `p-6 md:p-8`.
- Buttons: `rounded-full` for primary, `rounded-md` for ghost/secondary.

## Components

- Buttons:
  - Primary: `bg-ink text-bg hover:bg-ink-soft`, pill.
  - Accent: `bg-accent text-bg hover:bg-accent-strong`, pill.
  - Ghost: `border border-line text-ink hover:bg-bg`, pill.
- Cards: white surface, `border border-line`, soft shadow on hover.
- Badges: small pill, `bg-accent-soft text-accent-strong`.
- Section labels: `text-xs uppercase tracking-[0.2em] text-accent-strong`.

## Imagery

- Always use `data-strk-img` / `data-strk-bg` with interpolated text IDs.
- Hero background and product card images use ratios 16x9 / 3x2.
- All tagged images scanned via a single `ImageHelper.loadImages` call
  from `<main ref={containerRef}>`.

## Don'ts

- No pure black `#000`. Always `ink` or `slate`.
- No saturated neon colors.
- No emoji in user-facing copy or icons (use Lucide instead).
- No hardcoded hex inside JSX — use Tailwind tokens.
- No `bg-white` for page; page is `bg-bg`.
