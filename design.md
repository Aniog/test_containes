# Velmora Fine Jewelry — Visual Identity

## Direction
"Quiet luxury, warm editorial." A deep, refined espresso-noir base paired with warm
champagne-gold metallic accents and soft ivory surfaces. Dark-first design that
flatters gold jewelry photography. Restrained, confident, never loud, never
discount-looking.

## Color Tokens (Tailwind theme extension)
All hex values live in `tailwind.config.js` as named colors — no arbitrary hex in class strings.

- `noir` — #12100C — page background, deep espresso-black (warm, not blue-black)
- `onyx` — #1B1813 — raised surfaces: cards, drawer, footer
- `umber` — #2A241B — borders/dividers on dark, subtle fills
- `ivory` — #F7F2EA — primary text on dark; also light section backgrounds
- `cream` — #EFE7D9 — secondary light surfaces (newsletter inputs, light cards)
- `sand` — #C9BBA6 — muted text on dark (still AA-legible on noir)
- `taupe` — #6B6154 — muted text on light backgrounds
- `gold` — #C9A24B — primary accent: CTAs, stars, active states, prices
- `goldlight` — #E4C87F — accent hover / highlights / hairline gradient
- `golddeep` — #9C7A2E — accent on light backgrounds (AA contrast on ivory)
- `blush` — #B08D7A — rare tertiary accent (UGC captions, tiny labels only)

## Typography
- Headings / logo / product names: **Cormorant Garamond** (serif), weights 400–600.
  - Product names: UPPERCASE, `tracking-[0.18em]`–`[0.25em]`, medium weight.
  - Editorial headlines: normal case, light/medium weight, generous size, italic accents allowed.
- Body / UI / prices / buttons: **Inter**, 400–600.
  - UI labels & eyebrows: UPPERCASE, `text-[11px] tracking-[0.22em]`.
- Fonts loaded via Google Fonts in `index.html` only.

## Layout & Spacing
- Max content width `max-w-7xl` (1280px), padded `px-5 md:px-10`.
- Section rhythm: `py-16 md:py-24 lg:py-28`. Generous whitespace everywhere.
- Hairline dividers: `border-umber` on dark, `border-gold/30` or `#E5DACA`-like sand on light.
- Grids: products `grid-cols-2 lg:grid-cols-4`, tiles `grid-cols-1 md:grid-cols-3`.

## Components
- **Buttons (primary)**: solid `bg-gold text-noir`, uppercase `text-xs tracking-[0.2em]`,
  `px-8 py-3.5`, no radius or `rounded-none` (sharp editorial), hover `bg-goldlight`.
- **Buttons (outline)**: `border border-gold/60 text-gold` hover fill `hover:bg-gold hover:text-noir`.
- **Nav**: fixed, transparent over hero (ivory text) → solid `bg-noir/95 backdrop-blur` + hairline
  bottom border on scroll.
- **Cards**: image flush, thin `border-umber`, subtle zoom on image hover (`scale-105 duration-700`),
  quick-add bar slides up from bottom of image.
- **Accordions**: hairline top borders, serif question, plus/minus icon, smooth height transition.
- **Inputs**: transparent bg, `border-umber`, focus `border-gold`, ivory text.
- **Badges**: tiny uppercase pills `bg-gold/15 text-gold` (e.g. "Bestseller", "Gift Set").

## Imagery
- Warm-lit macro/editorial gold jewelry photography on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` tagging; ratios: hero 16x9, product 1x1 & 3x4,
  UGC reels 9x16, category tiles 3x4, story split 4x3.
- Never use cool/blue-toned or clinical white-background packshots.

## Motion
- Subtle only: `transition-all duration-300/500/700`, fade-up on scroll (IntersectionObserver),
  drawer slide `duration-500`, image zoom on hover. No bouncy easings, no autoplay carousels.

## Do / Don't
- DO keep contrast high: ivory text on noir, gold for accents only, sand only for secondary text.
- DO use hairlines and whitespace instead of heavy boxes.
- DON'T use bright saturated colors, drop shadows heavier than `shadow-[0_8px_30px_rgba(0,0,0,0.35)]`,
  rounded-full cards, or sale/discount badge spam (single "10% off" newsletter mention only).
- DON'T stack single-column on desktop — mobile stacking only.
