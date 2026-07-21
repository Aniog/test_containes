# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)

| Token | Hex | Usage |
| --- | --- | --- |
| `espresso` (base dark) | `#1C1714` | Dark sections, footer, hero overlay text on light |
| `ink` (near-black text) | `#211B16` | Primary body text on light |
| `ivory` (page bg) | `#F7F2EA` | Page background, light sections |
| `cream` (card bg) | `#FBF8F2` | Cards, panels |
| `sand` (muted border) | `#E7DDCC` | Hairline dividers, borders |
| `taupe` (muted text) | `#8A7C6B` | Secondary / muted text |
| `gold` (accent) | `#B08A4F` | Primary accent — buttons, links, price emphasis |
| `gold-deep` (hover) | `#94703B` | Button hover, pressed states |
| `champagne` (soft accent bg) | `#EFE3CE` | Newsletter block, subtle accent fills |

Contrast: ink (#211B16) on ivory (#F7F2EA) = strong. Gold (#B08A4F) used for accents on dark espresso backgrounds reads well. On light backgrounds gold is used for small accents/links, not body text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase, `tracking-[0.2em]`, text-xs, sans.
- Hero headline: serif, large, light weight, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-sand`.
- Generous gaps in grids: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-gold text-ivory`, hover `bg-gold-deep`, `tracking-[0.18em] uppercase text-xs`, `px-8 py-4`, rounded-none (sharp editorial) or `rounded-sm`.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Minimal text link: uppercase tracking-wide, underline-on-hover.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4:3 or 1:1, hover reveals second image.
- Reels: 9:16 vertical.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, price.
- Use hairline `border-sand` dividers between sections.
- Soft shadows: `shadow-sm`, `shadow-md` only.
- Subtle transitions: `transition-all duration-300 ease-out`.

## Don'ts
- No bright/saturated colors. No neon. No pure black on pure white.
- No rounded-full buttons (except small pills like variant selectors).
- No heavy shadows or gradients.
- No generic e-commerce clutter — keep whitespace generous.
- Don't use gold for body text on light backgrounds (low contrast).
