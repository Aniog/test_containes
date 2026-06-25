# ARTITECT MACHINERY — Visual Design Guide

A precision-engineered brand for industrial sheet metal folding machinery.
Style: elegant, refined, and user-friendly — quietly premium, never loud.

## Brand Voice

- Confident, technical, calm
- Short sentences. Real numbers. No marketing fluff.
- Speak to engineers, fabricators, and procurement managers.

## Color Palette

Use these named Tailwind tokens (configured in `index.css` via `@theme`).

| Token         | Hex       | Usage                                    |
|---------------|-----------|------------------------------------------|
| `ink`         | `#0E1116` | Primary text, headings, dark surfaces    |
| `steel`       | `#1F2937` | Secondary dark surface                   |
| `graphite`    | `#3A4150` | Muted body text on light backgrounds     |
| `ash`         | `#6B7280` | Tertiary text, captions                  |
| `mist`        | `#E5E7EB` | Hairline borders                         |
| `fog`         | `#F4F5F7` | Section alt background                   |
| `paper`       | `#FAFAF7` | Default background, slightly warm        |
| `accent`      | `#B68A35` | Brand accent (warm brass), CTAs, lines   |
| `accent-soft` | `#D9B36C` | Hover/lighter accent                     |

Do:
- Use `text-ink` on `bg-paper` or `bg-white`. Use `text-paper` on `bg-ink`.
- Use `text-accent` sparingly for emphasis, numerals, and underlines.
- Pair `border-mist` with `bg-paper` for cards.

Don't:
- Don't use pure black (`#000`) or pure white (`#FFF`).
- Don't put `text-ash` on `bg-fog` (too low contrast).
- Don't use accent for large background fills.

## Typography

- Display / Headings: `Cormorant Garamond`, serif — for elegance.
- UI / Body: `Inter`, sans-serif — for clarity.
- Mono (specs/numerals optional): `JetBrains Mono`.

Sizes (Tailwind):
- Hero H1: `text-5xl md:text-7xl font-light tracking-tight font-serif`
- Section H2: `text-3xl md:text-5xl font-light tracking-tight font-serif`
- Subhead: `text-sm uppercase tracking-[0.25em] text-accent`
- Body: `text-base md:text-lg leading-relaxed text-graphite`

Always use `font-serif` for headlines and `font-sans` for body and UI.

## Layout & Spacing

- Container: `max-w-7xl mx-auto px-6 lg:px-10`
- Section vertical rhythm: `py-20 md:py-28`
- Generous whitespace; do not crowd content.
- Use 12-column grid via `md:grid-cols-12`.
- Editorial alignment: titles often left-aligned with thin accent rule above.

## Components

- Buttons:
  - Primary: `bg-ink text-paper hover:bg-steel rounded-none px-6 py-3 text-sm tracking-widest uppercase`
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-paper rounded-none px-6 py-3 text-sm tracking-widest uppercase`
- Cards: `bg-paper border border-mist hover:border-accent transition-colors duration-300`
- Dividers: `h-px w-12 bg-accent` used as eyebrow accent
- Inputs: bottom-border only on light bg — `border-0 border-b border-mist focus:border-ink bg-transparent`

## Imagery

- Industrial, calm, well-lit photographs of machinery, metal, and workshops.
- Prefer neutral tones; avoid oversaturated stock images.
- Use 16x9 or 4x3 ratios for product imagery; 3x2 for editorial shots.

## Motion

- Subtle. `transition-colors`, `transition-transform duration-300 ease-out`.
- No bouncy animations.
