# ARTITECT MACHINERY — Design System

## Brand Personality
Industrial precision meets modern elegance. The site should feel like a high-end
manufacturing brand — confident, refined, technical — but never cold. Visitors
should immediately sense that this is a serious machinery maker, yet feel
welcome to explore and request a quote without intimidation.

## Color Palette
Defined as CSS custom properties so Tailwind tokens can map to them.

| Token              | Hex       | Use                                            |
|--------------------|-----------|------------------------------------------------|
| `ink-900`          | `#0B1A2A` | Deep midnight — primary brand, hero bg, headings|
| `ink-800`          | `#11253A` | Section alt bg                                 |
| `ink-700`          | `#1B3551` | Card / surface on dark                         |
| `ink-50`           | `#F4F1EA` | Warm cream — page bg, light surfaces           |
| `paper`            | `#FFFFFF` | Pure white cards                               |
| `copper-500`       | `#C8A45D` | Brand accent, CTAs, key highlights (premium)   |
| `copper-600`       | `#A8863F` | Hover / pressed accent                         |
| `copper-100`       | `#F0E5C9` | Soft accent fills, badges                      |
| `steel-500`        | `#5A6B7D` | Secondary copy on light surfaces                |
| `steel-700`        | `#324050` | Body copy on cream                             |
| `line`             | `#E2DCCD` | Hairline borders on cream                      |
| `line-dark`        | `#1F3854` | Hairline borders on dark                       |

Foregrounds are always paired explicitly: `ink-50` text on `ink-900` / `ink-800`,
`steel-700` text on `ink-50` / `paper`. Never leave text color inherited.

## Typography
- **Display / Hero**: "Playfair Display", serif — used sparingly for the brand
  mark and hero headline accents. Conveys heritage and craftsmanship.
- **UI / body**: "Inter", sans-serif — primary typeface. Weights 300, 400, 500,
  600, 700.
- Google Fonts embed loads `Inter (300–700)` and `Playfair Display (500, 700)`.

Hierarchy:
- `text-6xl / 5xl` display headlines (`font-display`, `font-light`, tracking tight)
- `text-4xl / 3xl` section titles
- `text-lg` lead paragraphs
- `text-base` body
- `text-sm` labels / metadata (uppercase, tracking-widest for eyebrows)

## Spacing & Layout
- Container max width `max-w-7xl mx-auto px-6 lg:px-10`.
- Vertical section rhythm: `py-20 md:py-28 lg:py-32` between major sections.
- Generous internal padding on cards: `p-8` or `p-10`.

## Components & Do's/Don'ts
**Do**
- Use the warm cream (`ink-50`) as the main page background and reserve dark
  navy (`ink-900`) for hero, callouts, and footer.
- Pair every background color with an explicit text color (use semantic pairs).
- Use `copper-500` only for high-value actions and one accent element per
  section (badge, underline, key number). Never paint large surfaces copper.
- Use thin (`border` 1px) `line` borders, soft shadows (`shadow-sm`/`shadow-md`),
  and `rounded-md` (6px) — not pills — for that engineered feel.
- Use the `data-strk-img` / `data-strk-bg` stock image system for hero &
  product visuals. Interpolation IDs match the static IDs in the JSX.
- Reveal sections gently on scroll via simple CSS transitions; keep animation
  purposeful, never decorative noise.

**Don't**
- Don't use blue/purple gradients on the brand — they conflict with the navy
  palette and read as "generic SaaS".
- Don't use emoji icons — use `lucide-react` line icons sized at `w-5 h-5` or
  `w-6 h-6` with `strokeWidth={1.5}` for an engineered, premium feel.
- Don't rely on default placeholder gray — every surface has an explicit token.
- Don't crowd headings against the next element: always leave at least
  `mt-4` between a heading and the following paragraph.
- Don't use placeholder copy in production UI. Every label and paragraph is
  authored for the brand voice.

## Imagery
- Stock queries focus on: precision metalwork, sheet metal fabrication,
  industrial CNC press brake, factory floor, engineering blueprint,
  brushed steel, copper-toned machinery.
- Hero background: wide industrial floor / press brake scene, 16:9.
- Product card images: 4:3, tighter on machine detail.
- Industry photos: 3:2.
