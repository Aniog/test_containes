# Velmora Fine Jewelry — Visual System

## Brand mood
Quiet luxury. Warm, editorial, premium-but-accessible. Demure and confident — never loud,
never discount-looking, never generic e-commerce. The visual system should make a $42 pair
of huggies feel like a $420 piece of fine jewelry.

## Color palette — "Warm Noir + Champagne Gold"
A refined, warm, editorial scheme: deep warm-black on warm ivory with a single champagne
gold accent. Inspired by Mejuri / AUrate / Mejuri editorial campaigns.

| Token             | Hex       | Usage                                                 |
|-------------------|-----------|-------------------------------------------------------|
| `bg-canvas`       | `#F4EFE7` | Page background — warm ivory                          |
| `bg-surface`      | `#FAF6EF` | Cards, product tiles, newsletter block               |
| `bg-elevated`     | `#FFFFFF` | Cart drawer, modals, popovers                         |
| `ink`             | `#1A1310` | Primary text on light — warm near-black               |
| `ink-soft`        | `#6B5E52` | Secondary text, meta, descriptions                    |
| `gold`            | `#B89968` | Primary accent — champagne gold (CTAs, links, icons)  |
| `gold-deep`       | `#8A7048` | Accent hover / active                                |
| `gold-pale`       | `#E8D9BE` | Accent backgrounds, hairline highlights               |
| `hairline`        | `#E5DDD0` | Dividers, borders, card strokes                       |
| `night`           | `#1A1310` | Dark surfaces (footer, hero overlay)                  |
| `night-soft`      | `#2A211B` | Dark elevated surface                                |
| `on-night`        | `#F4EFE7` | Text on dark surfaces                                |
| `danger`          | `#9B3B2E` | Errors, sale badges (used sparingly)                  |
| `success`         | `#4F6A4A` | Confirmations (used sparingly)                        |

Contrast: `ink` on `bg-canvas` ≈ 13.8:1 (AAA). `gold` is never used for body text — only
for accents, icons, links, and CTAs. On `bg-canvas`, `gold` is used at size ≥ 16px and
weight ≥ 500, or in a 1px hairline. On dark, `gold` reads at full weight.

## Typography
- **Headings / product names / display**: `Cormorant Garamond` — light & regular, tight
  tracking, large size. Product names are rendered in UPPERCASE using `Inter` for
  readability against the serif display type.
- **Body / UI / nav / buttons / meta**: `Inter` — 300, 400, 500, 600.

| Role               | Family              | Size (desktop → mobile) | Weight | Tracking |
|--------------------|---------------------|-------------------------|--------|----------|
| Hero display       | Cormorant Garamond  | 88 → 56                 | 300    | -0.02em  |
| Section heading    | Cormorant Garamond  | 56 → 36                 | 400    | -0.01em  |
| Product name       | Inter               | 14                      | 500    | 0.18em   |
| Price              | Inter               | 15                      | 500    | normal   |
| Body               | Inter               | 16                      | 400    | normal   |
| Small / meta       | Inter               | 12                      | 500    | 0.12em   |
| Button             | Inter               | 13                      | 600    | 0.18em   |
| Nav link           | Inter               | 13                      | 500    | 0.16em   |

## Layout & spacing
- Max content width: 1440px. Generous outer padding: `px-6 md:px-10 lg:px-16`.
- Section vertical rhythm: `py-20 md:py-28 lg:py-36` for major sections,
  `py-12 md:py-16` for tighter clusters.
- Hairline dividers: `1px solid hairline` between sections on light, `1px solid
  rgba(244,239,231,0.12)` on dark.
- Grid: product grid is 2 cols on mobile, 3 on tablet, 4 on desktop, with `gap-x-6
  gap-y-14`. Bestsellers uses 2 / 3 / 5.

## Imagery
- Editorial, warm-lit, neutral / dark / skin-tone backgrounds — never bright white.
- Product images are 4:5 (portrait) on the home and shop grid; 1:1 thumbnails in the
  product gallery; 9:16 vertical for the UGC reels row; 16:9 for the hero; 4:5 for the
  brand-story split.
- All product imagery comes from the stock image system via `data-strk-img`. Image
  queries are anchored to nearby headlines/descriptions to keep results on-brand.

## Components
- **Buttons** feel premium. Primary = solid `ink` on light, solid `gold` on dark.
  Outlined = 1px `ink` (light) / 1px `gold-pale` (dark). All caps, wide tracking, 13px.
  Padding: `px-7 py-3.5`. Radius: 0 (sharp corners reinforce the editorial mood).
- **Inputs** are flat with a 1px hairline bottom border only. No boxed fields.
- **Cards** have no border, just generous whitespace and a hover image swap.
- **Badges** are pill-shaped with 1px hairline, used sparingly (e.g. "New", "Bestseller").

## Motion
- Default `transition` duration: 350ms, ease: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Image hover cross-fade: 600ms.
- Cart drawer: slide from right, 400ms.
- Subtle: no bouncy, no overshoot. Quiet confidence.

## Do
- Commit fully to the warm-neutral + gold system across every page.
- Use serif for display copy, sans for product names and UI.
- Use hairline dividers instead of boxed cards.
- Leave generous breathing room around everything.
- Show products on warm/neutral/skin backgrounds only.

## Don't
- No bright white, neon, or sale-red overload.
- No drop shadows on cards (use whitespace and hairlines).
- No emoji in copy.
- No "BUY NOW!" or discount shouts.
- No boxed input fields.
- No more than one accent color at a time.
