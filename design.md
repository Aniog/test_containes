# Velmora Fine Jewelry — Design System

A quiet-luxury, editorial DTC jewelry storefront. Warm, restrained, premium. Inspired by Mejuri, Aurate, and high-end editorial fashion books.

## Direction
Warm editorial neutrals with a deep espresso/ink ground accent and brushed champagne-gold details. Backgrounds skew creamy and soft; text is deep ink. The gold accent is reserved for headlines, dividers and interactive hover states — never as flat fills on large surfaces.

## Color palette (named Tailwind colors, defined in `index.css` via `@theme`)
- `cream` `#F6F1EA` — primary page background
- `bone` `#EDE5D8` — secondary surfaces, alt rows, soft tiles
- `ink` `#1C1714` — primary text, footer background, hero overlay
- `espresso` `#2A211C` — secondary dark surface
- `mist` `#B9AE9F` — muted text, dividers, hairlines
- `gold` `#B08A4B` — accent (links hover, micro-detail, badges)
- `gold-soft` `#C9A878` — soft gold for hover backgrounds and underlines
- `wine` `#6E2D2A` — rarely used, sale tag accent (avoid by default)
- `white` standard white for product cards on darker pages

Do:
- Use `bg-cream text-ink` as the default page surface.
- Use `bg-ink text-cream` for the footer and overlays.
- Use thin `border-mist/40` hairline rules between sections.
- Reserve `text-gold` for small labels, eyebrow text, hover states.

Don't:
- Don't use bright primary colors, neon, or gradients.
- Don't put white text on cream or gold on cream — contrast is too weak.
- Don't put `text-mist` on `bg-cream` for body copy — only for fine print.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weight 400–500. Available as `font-serif` (default fallback) via the body font config and explicit `font-[\"Cormorant_Garamond\"]` where needed. Use class `font-serif`.
- Body & UI: **Inter** (sans), weight 300–600. Default body font via `font-sans`.
- Product names: UPPERCASE, `tracking-[0.2em]`, `font-sans` weight 500, small size (`text-xs` or `text-sm`).
- Section eyebrows: UPPERCASE, `tracking-[0.3em]`, `text-[11px]`, `text-gold`.
- Display headlines: `font-serif font-light` with `tracking-tight` and generous leading (`leading-[1.05]`).

## Spacing & layout
- Page sections: `py-20 md:py-28` vertical rhythm.
- Container: `max-w-7xl mx-auto px-5 md:px-10`.
- Cards: no heavy borders; rely on whitespace + a soft hover lift (`hover:shadow-[0_20px_40px_-20px_rgba(28,23,20,0.18)]`).
- Hairline dividers: `border-t border-mist/30`.

## Components
- Buttons:
  - Primary: `bg-ink text-cream hover:bg-espresso px-7 py-3.5 text-[12px] tracking-[0.25em] uppercase`
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-cream`
  - Gold link: small uppercase text, gold underline on hover.
- Product card: image (4:5 ratio), uppercase name below, price in body sans. Hover swaps to a second image; quick add appears as a thin pill at bottom of image.
- Inputs: `bg-transparent border-b border-ink/40 focus:border-gold py-3` — no boxy form fields on the marketing surfaces.

## Motion
- Transitions: `transition-all duration-500 ease-out` for hover image swaps and reveals.
- Avoid bouncy or fast spring motion. Stay elegant and slow.

## Imagery
- Warm-lit gold jewelry on cream, dusk, or soft skin tones. Editorial framing, lots of negative space. No harsh white box-shots on the marketing pages.
