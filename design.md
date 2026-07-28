# SSourcing China — Design System

A professional, trustworthy B2B website for a China-based sourcing agent. The
visual language communicates reliability, international scope, and operational
precision. No exaggerated claims, no gimmicks — clean, clear, practical.

## Brand Personality
- Trustworthy, international, B2B, operational, precise.
- Tone of voice: professional, clear, practical.

## Color Palette
Use semantic Tailwind tokens backed by these brand colors.

| Token | Hex | Usage |
|---|---|---|
| `brand` (primary) | `#0F4C81` | Deep international blue — trust, stability. CTAs, links, key accents. |
| `brand-dark` | `#0A3A63` | Hover / pressed states, dark sections. |
| `brand-light` | `#E8F1F9` | Tinted backgrounds, soft section bands. |
| `accent` | `#F5A623` | Warm amber — sparingly for highlights, badges, key numbers. |
| `ink` (foreground) | `#0F1B2D` | Primary text on light backgrounds. |
| `slate-ink` | `#3B4A60` | Secondary / body text. |
| `surface` | `#FFFFFF` | Cards, panels, nav. |
| `bg` | `#F6F8FB` | Page background. |
| `border` | `#E2E8F0` | Hairline borders, dividers. |

Do NOT use pure black for text; use `ink`. Do NOT use light gray text on white
for important content — keep body text at `slate-ink` or darker.

## Typography
- Font family: **Inter** (Google Fonts), weights 400/500/600/700/800.
- Headings: 700–800, tight tracking, `ink` color.
- Body: 400–500, `slate-ink`, line-height 1.6–1.7.
- Eyebrow / label: 600, uppercase, `brand`, letter-spacing wide.
- Display H1 (hero): `text-4xl md:text-6xl`, leading-tight.

## Spacing & Layout
- Section vertical padding: `py-16 md:py-24`.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Card padding: `p-6 md:p-8`.
- Consistent gap scale: `gap-4`, `gap-6`, `gap-8`.

## Borders, Shadows, Radius
- Radius: `rounded-lg` (cards), `rounded-xl` (hero/feature panels), `rounded-full` (pills/badges).
- Borders: `border border-border`.
- Shadows: `shadow-sm` default on cards, `shadow-lg` on hover / hero.
- Hover lift: `transition hover:-translate-y-1 hover:shadow-lg`.

## Components
- Buttons: solid `brand` primary, white/outline secondary, `accent` reserved for high-emphasis CTA only.
- Cards: white surface, hairline border, subtle shadow, hover lift.
- Badges/pills: `brand-light` bg with `brand` text, or `accent` for emphasis.
- Section headers: eyebrow + H2 + supporting paragraph, centered or left-aligned.

## Imagery
- Realistic factory, QC inspection, shipping/port, warehouse, product photography.
- Use the `data-strk-img` / `data-strk-bg` stock image system with descriptive
  queries referencing nearby text. No decorative stock photos that don't relate.

## Do's
- Keep generous whitespace.
- Use the brand blue for trust signals and CTAs.
- Ensure every text element has strong contrast against its background.
- Use responsive grids (1 col mobile, 2–3 col desktop).

## Don'ts
- No exaggerated marketing claims ("#1", "guaranteed", "cheapest").
- No low-contrast gray-on-white body text.
- No hardcoded arbitrary hex codes in JSX — use Tailwind tokens / config colors.
- No mobile-stacked single-column layouts on desktop.
