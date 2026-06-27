# Velmora Fine Jewelry — Design System

Quiet-luxury, warm editorial. Premium demi-fine jewelry. Restrained, generous whitespace, never loud or discount-looking.

## Palette (committed direction)

A warm editorial neutral scheme with deep espresso ink, ivory/champagne backgrounds, and an antique-gold accent. This is the only palette used sitewide.

- Ink (primary text, footer bg): `#1F1A14` — Tailwind: `bg-ink` / `text-ink`
- Ink-soft (secondary text): `#5A4F44` — `text-ink-soft`
- Ivory (page bg): `#FAF6F0` — `bg-ivory`
- Cream (cards / alt bg): `#F1E9DC` — `bg-cream`
- Champagne (subtle surfaces): `#E8DCC5` — `bg-champagne`
- Gold (accent, CTAs, links on dark): `#B08642` — `bg-gold` / `text-gold`
- Gold-deep (hover / borders): `#8C6A2F` — `bg-gold-deep`
- Hairline (1px dividers): `#E2D7C3` — `border-hairline`

Contrast rules:
- Ink on Ivory/Cream → primary body text.
- Gold on Ink → accent only, never small body text on dark.
- White (`#FFFFFF`) on Ink or Gold-deep → buttons / nav-solid state.
- Never light text on light, never gold on ivory for body copy.

## Typography

- Serif display: **Cormorant Garamond** (400/500/600) — used for H1–H3, product names, hero, brand voice.
- Sans body/UI: **Inter** (300/400/500/600) — body, nav links, buttons, prices, forms.
- Product names: UPPERCASE, `tracking-[0.18em]` to `tracking-[0.25em]`, serif.
- Section eyebrows: UPPERCASE sans, `text-xs tracking-[0.3em] text-ink-soft`.

Tailwind classes:
- `font-serif` → Cormorant Garamond
- `font-sans` → Inter (default)

## Spacing & layout

- Page max width: `max-w-[1320px]` centered, `px-6 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28` for major sections, `py-12 md:py-16` for compact strips.
- Generous gutters; never crowd. Mobile-first: collapse 4-col → 2-col → 1-col gracefully.

## Lines, shadows, radii

- Hairline dividers: `border-t border-hairline` (1px).
- Radii: cards & buttons `rounded-none` to `rounded-sm` (max). No pill chrome except variant pill buttons.
- Shadows: very soft. `shadow-[0_8px_30px_rgba(31,26,20,0.06)]` for hover lifts. No big drop shadows.

## Components

- **Buttons (primary)**: `bg-ink text-ivory hover:bg-gold-deep` OR `bg-gold text-ink hover:bg-gold-deep hover:text-ivory`, `px-7 py-3.5 text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300`.
- **Buttons (ghost/outline)**: `border border-ink text-ink hover:bg-ink hover:text-ivory` same sizing.
- **Inputs**: transparent bg, `border-b border-ink/30 focus:border-gold`, no rounded box.
- **Product card**: image w/ aspect 4/5, second image fades in on hover, product name uppercase serif, price sans. Hover shows "Add to bag".
- **Nav**: transparent over hero (white text), turns `bg-ivory/95 backdrop-blur` with `text-ink` on scroll, hairline bottom border in scrolled state.
- **Hover transitions**: 300–500ms, ease-out, opacity/transform only. No jarring scale jumps.

## Imagery

- Warm-lit gold jewelry on dark or neutral backgrounds.
- Editorial close-ups, soft shadows, low saturation.
- Use `data-strk-*` tags for stock image resolution with descriptive queries derived from nearby copy.

## Do / Don't

- Do: generous whitespace, hairline dividers, restrained gold accents, serif headlines paired with airy sans body.
- Do: uppercase product names with wide tracking.
- Don't: gradients, neon, multi-color CTAs, drop shadows on text, emoji decorations, rounded-full buttons (except small variant pills), big "SALE" stickers.
- Don't: gold text on ivory for paragraph copy (contrast fails). Use ink for body.
