# ARTITECT MACHINERY — Design System

## Brand
- **Name:** ARTITECT MACHINERY
- **Personality:** Precision engineering, refined craftsmanship, trustworthy industrial partner.
- **Voice:** Confident, clear, professional.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-navy` | `#0f172a` | Primary headings, footer, key surfaces |
| `--color-slate` | `#334155` | Body text, secondary surfaces |
| `--color-steel` | `#64748b` | Muted text, borders |
| `--color-cloud` | `#f8fafc` | Page background, alternate sections |
| `--color-white` | `#ffffff` | Cards, hero text on dark overlays |
| `--color-gold` | `#d4af37` | Accent: CTAs, highlights, underlines |
| `--color-gold-dark` | `#b5952f` | Hover state for gold elements |

## Typography
- **Font family:** Inter (Google Fonts), system-ui fallback.
- **Headings:** `font-weight: 700–800`, tight line-height (`1.1–1.2`).
- **Body:** `font-weight: 400–500`, line-height `1.6–1.7`.
- **Labels / buttons:** `font-weight: 600`, uppercase tracking (`tracking-wide`).

## Spacing & Layout
- Max content width: `1280px` (`max-w-7xl`).
- Section vertical padding: `py-20 md:py-28`.
- Container horizontal padding: `px-4 sm:px-6 lg:px-8`.
- Card radius: `rounded-2xl`.
- Button radius: `rounded-lg`.
- Grid gaps: `gap-6 md:gap-8`.

## Components

### Buttons
- **Primary:** navy background, white text, gold underline accent on hover.
- **Accent (CTA):** gold background, navy text, darken on hover.
- Padding: `px-6 py-3`.
- Always visible, readable foreground.

### Cards
- White background, subtle shadow (`shadow-sm`), `rounded-2xl`, `border border-slate-100`.
- Hover lift: `-translate-y-1 shadow-md` transition.

### Forms
- Inputs: white bg, slate border, rounded-lg, focus ring in gold.
- Labels: small, slate, font-medium.

## Imagery
- Industrial machinery photography, clean factory floors, close-ups of folded sheet metal.
- Use stock-image tags with descriptive IDs and contextual queries.
- Hero: full-width background, dark overlay for text legibility.

## Do's & Don'ts
- DO keep contrast high: navy/white or white/navy pairings.
- DO use generous whitespace; industrial products need room to breathe.
- DO use gold sparingly as an accent.
- DON'T use low-contrast text on medium backgrounds.
- DON'T clutter cards with too many details.
