# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, unhurried. Premium demi-fine gold jewelry for women 25–45. Nothing loud, nothing discount-looking. Generous whitespace, thin hairline dividers, soft shadows, restrained gold accents.

## Color Palette (single confident direction: warm editorial ivory + deep espresso + antique gold)

| Token | Hex | Tailwind name | Usage |
|---|---|---|---|
| Ivory | #FAF7F2 | `ivory` | Primary page background |
| Cream | #F3EEE5 | `cream` | Alternating section backgrounds, cards |
| Sand | #E8E0D2 | `sand` | Subtle fills, hover states, image placeholders |
| Espresso | #2B2118 | `espresso` | Primary text, footer background, solid buttons |
| Cocoa | #4A3C2E | `cocoa` | Secondary headings, strong body text |
| Mocha | #6E5D4B | `mocha` | Muted body text |
| Taupe | #A3937F | `taupe` | Captions, meta text, placeholders |
| Gold | #A9814B | `gold` | Primary accent — CTAs, stars, active states |
| Gold Deep | #8A6A3C | `gold-deep` | Accent hover state |
| Gold Soft | #C9B08A | `gold-soft` | Hairlines on dark, subtle accents |
| Line | #E3DACB | `line` | Hairline dividers/borders on light |

Do's:
- Always pair `bg-espresso` with `text-ivory`, `bg-gold` with `text-ivory` (or `text-espresso` for small text), light surfaces with `text-espresso`/`text-cocoa`.
- Hairline dividers: `border-line` on light, `border-white/10` on dark.
- Accent gold is used sparingly: CTAs, stars, price emphasis, active filters.

Don'ts:
- Never pure black (#000) or pure white (#FFF) as main surfaces.
- Never bright/saturated colors, no gradients with loud hues.
- Never low-contrast text: no taupe on cream for body copy, no gold text on ivory below 14px semibold.

## Typography
- Display serif: **Cormorant Garamond** (`font-display`) — headlines, product names, editorial pull-quotes. Product names in UPPERCASE with `tracking-[0.18em]` (sans) or elegant serif caps.
- Body/UI sans: **Inter** (`font-sans`) — body copy, buttons, nav, prices, forms.
- Scale: hero `text-5xl md:text-7xl` display light; section titles `text-3xl md:text-4xl`; product names `text-xs md:text-sm tracking-[0.2em] uppercase` (sans, medium); body `text-sm md:text-base` relaxed.
- Eyebrow labels: `text-[11px] uppercase tracking-[0.3em] text-gold`.

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-5 md:px-10`.
- Section rhythm: `py-16 md:py-28`.
- Generous whitespace; never crowd cards — grids `gap-6 md:gap-10`.

## Components
- Buttons: `rounded-none` (sharp, editorial) or pill for variants. Solid: `bg-espresso text-ivory hover:bg-gold-deep`. Accent: `bg-gold text-ivory hover:bg-gold-deep`. Outline: `border border-espresso/30 hover:border-espresso`. Uppercase `tracking-[0.2em] text-[11px] md:text-xs`, padding `px-8 py-4`.
- Cards: no heavy borders; soft shadow `shadow-[0_20px_40px_-24px_rgba(43,33,24,0.25)]`; images with `bg-sand` placeholder.
- Hairlines: `border-t border-line`.
- Hover: subtle `transition-all duration-500`, image `scale-[1.03]`, underline reveals for nav.
- Ratings: gold stars (Lucide `Star`, filled).

## Imagery
- Warm-lit gold jewelry on skin, dark/neutral editorial backgrounds. Vertical 9:16 for reels, 3x4 or 4x5 for products, 16x9/21x9 for hero.
- All stock images via `data-strk-img` / `data-strk-bg` tagging system.
