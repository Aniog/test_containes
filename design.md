# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. The store should feel like a tasteful boutique, not a discount marketplace. Generous whitespace, large editorial imagery, thin hairline dividers, restrained gold accents.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#FAF8F5` | Primary background (warm off-white / editorial cream) |
| `--bg-elevated` | `#FFFFFF` | Cards, cart drawer, elevated surfaces |
| `--ink` | `#1E1C1A` | Primary text, headings, dark UI |
| `--ink-muted` | `#6B6560` | Body secondary text, captions, placeholders |
| `--ink-subtle` | `#A39E98` | Disabled, dividers, tertiary text |
| `--gold` | `#C5A059` | Primary accent: buttons, links, stars, highlights |
| `--gold-dark` | `#A8843D` | Hover/active state for gold |
| `--gold-soft` | `#F2E9D6` | Subtle gold tints, star fills, accent backgrounds |
| `--hairline` | `#E3DDD4` | Borders, dividers, subtle rules |

- High contrast: dark ink on warm cream, gold accent on dark or cream.
- No bright/discount reds; no neon; no loud gradients.

## Typography

- **Headings / product names / editorial quotes**: `Cormorant Garamond`, serif, 300–600.
- **Body / UI / navigation / buttons / prices**: `Inter`, sans-serif, 300–600.
- Product names are set in **UPPERCASE** with `letter-spacing: 0.12em`.
- Body text: `text-sm` to `text-base`, leading-relaxed (`1.65`).
- Headings: tight to moderate line-height (`leading-[1.15]` to `leading-tight`).

## Spacing & Layout

- Section vertical spacing: `py-16 md:py-24 lg:py-32`.
- Container max-width: `max-w-[1440px]` with `px-4 md:px-8 lg:px-12`.
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`.
- Generous whitespace around product cards and images.

## Components

### Buttons
- **Primary (gold)**: solid `bg-gold text-white` with `hover:bg-gold-dark`, no radius or very subtle `rounded-sm`. Uppercase text, tracking-widest, text-xs.
- **Secondary (outline)**: border `border-ink text-ink`, hover fills ink and text becomes cream.
- **Ghost**: text-only with underline on hover.

### Cards
- Product cards: no visible border, subtle hover lift (`shadow-sm` to `shadow-md`), image swap on hover.
- Inputs: minimal bottom border or full bordered with `border-hairline`, focus `ring-gold`.

### Dividers
- Hairline `border-hairline` `border-t` with opacity.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use stock-image tags with descriptive queries; avoid hardcoded URLs.
- Maintain consistent aspect ratios: 4:5 product cards, 16:9 hero, 9:16 UGC cards, 1:1 category tiles.

## Motion
- Subtle transitions: `duration-300 ease-out`.
- Hover: opacity/image swap, slight translate-y on cards.
- Cart drawer slides in from right with overlay fade.
- Nav transitions from transparent to solid on scroll.

## Accessibility
- Minimum 4.5:1 contrast for body text.
- Gold on cream only used for large text or UI accents; avoid small gold-on-cream text.
- Focus rings visible, interactive elements clearly labeled.
