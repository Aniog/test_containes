# Velmora Fine Jewelry — Design System

## Brand mood
Quiet luxury. Warm, editorial, demi-fine. Premium-but-accessible. Generous whitespace, hairline dividers, refined gold accents. NEVER loud, NEVER discount-feeling, NEVER generic e-commerce.

## Color palette (committed)
Warm cognac + champagne gold on cream. Single direction, used sitewide.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1A1410` | Primary text, dark sections, deep warm near-black (flatters gold) |
| `ink-soft` | `#3A2E25` | Secondary text on light bg |
| `cream` | `#F4ECE0` | Primary page background — soft editorial warm off-white |
| `ivory` | `#FAF6EF` | Card / inset surface |
| `gold` | `#C9A875` | Primary accent — warm champagne gold |
| `gold-deep` | `#A88756` | Hover / pressed accent |
| `gold-soft` | `#E8D5B0` | Tinted accent backgrounds, badges |
| `muted` | `#8A7A6B` | Muted text, helper copy |
| `line` | `#E2D7C7` | Hairline dividers on cream |
| `line-dark` | `#3A2E25` | Hairline dividers on dark |

Dark hero/feature sections use `ink` background with `cream` text and `gold` accent.

## Typography
- **Serif (display)**: `Cormorant Garamond` — headlines, product names, brand wordmark. Weights 400 / 500 / 600. Italic 400 for editorial captions.
- **Sans (UI/body)**: `Inter` — body copy, navigation, buttons, UI labels. Weights 300 / 400 / 500 / 600.
- **Product names**: serif, UPPERCASE, `tracking-[0.18em]`, `text-xs` to `text-sm`.
- **Editorial captions**: serif italic, `font-light`.

## Spacing & layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-5 md:px-8`.
- Hairline dividers: `border-line` (1px) or `border-ink/10` on dark.
- Page background default: `bg-cream` with `text-ink`.

## Buttons
- **Primary (accent)**: solid `bg-ink text-cream` on light, or `bg-cream text-ink` on dark. Pill-ish (`rounded-full`), `px-8 py-3.5`, `tracking-[0.2em]`, `text-[11px] uppercase`. Hover: subtle 1px translate + bg darken, no harsh flash.
- **Outline**: `border border-ink text-ink bg-transparent` — same shape.
- **Quick add (product card)**: hairline outline, fades in on hover.
- No drop shadows on buttons; depth comes from contrast, not shadow.

## Cards / product cards
- `bg-ivory` with `border border-line/70`.
- Hover: subtle image crossfade to second image, "Quick add" button slides up.
- No heavy drop shadows; a single soft `0 1px 0 rgba(0,0,0,0.04)` if any.

## Imagery
- Warm gold jewelry on deep `ink` or soft cream backdrops. Editorial, close-up, model lifestyle.
- Use the `data-strk-img` system for stock placeholders (warm-lit jewelry photography queries).

## Iconography
- Lucide React, `strokeWidth={1.25}` (thin, editorial). Default size 18–20px.

## Motion
- Subtle only. `transition-all duration-300 ease-out`. No bounce. No spinners > 1s.
- Underline links: width animates from 0 to 100% on hover.
- Image crossfades: 500ms.

## Do
- Use the cream/ink/gold trio everywhere; do not introduce a competing accent.
- Use serif for emotional/headline copy, sans for functional UI.
- Keep product names UPPERCASE with wide tracking.
- Keep at least 24px between primary buttons and surrounding copy.

## Don't
- Don't use bright primary colors, neon, or saturated marketing reds.
- Don't use more than one accent color.
- Don't use thick borders or heavy drop shadows.
- Don't center body copy; left-align paragraphs.
- Don't use stock-looking generic fashion imagery.
