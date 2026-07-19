# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT
discount-looking, NOT generic e-commerce. Generous whitespace, large editorial
imagery, thin hairline dividers, restrained accent color, subtle hover
transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)

| Token              | Hex       | Usage                                            |
|--------------------|-----------|--------------------------------------------------|
| `espresso`         | `#1C1714` | Deep base background (footer, hero overlays)     |
| `ink`              | `#2A2420` | Primary dark text on light surfaces             |
| `ivory`            | `#F7F2EC` | Page background, warm off-white                  |
| `cream`            | `#FBF8F3` | Card / panel background                          |
| `sand`             | `#E8DECF` | Hairline dividers, soft borders, muted fills     |
| `taupe`            | `#8A7E6E` | Secondary / muted text                           |
| `gold`             | `#B08D57` | Primary accent — buttons, links, highlights      |
| `gold-deep`        | `#8C6A3E` | Hover / pressed accent                           |
| `champagne`        | `#D9C3A0` | Soft accent fills, badges                        |

Contrast: `ink` on `ivory`/`cream` for body text (strong). `ivory`/`cream` on
`espresso` for dark sections. `gold` used sparingly on `espresso` and `ivory`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, `tracking-[0.2em]`, `text-xs`.
- Hero headline: serif, large (`text-5xl` → `text-7xl`), tight leading.

Loaded via Google Fonts in `index.html`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace between elements; avoid cramped grids.
- Hairline dividers: `border-sand` / `border-t`.

## Components
- Buttons: solid `gold` with `ivory` text, or outlined `ink`/`gold` with
  transparent bg. Rounded-none or `rounded-sm` (sharp, editorial). Hover:
  darken to `gold-deep` / fill.
- Cards: `bg-cream`, subtle `shadow-sm`, hairline `border-sand`. Hover lifts
  image (scale 1.03) and reveals second image + quick add.
- Pills (variant selector): `rounded-full`, `border-sand`, active = `border-ink bg-ink text-ivory`.
- Inputs: underline style or thin border, `bg-transparent`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed, 16:9 or taller on mobile).
- Product cards: 4:3 or 1:1, two images for hover swap.
- Reels strip: vertical 9:16 cards.

## Do's
- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Maintain strong text contrast.
- Use subtle transitions (`duration-300`, `ease-out`).

## Don'ts
- No bright/saturated colors. No neon. No discount-red badges.
- No rounded-full buttons (except pills). No heavy drop shadows.
- No generic e-commerce blue. No emoji in UI.
- Don't place low-contrast text on imagery without an overlay.
