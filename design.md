# Velmora Fine Jewelry — Visual Style Guide

Quiet luxury. Warm, editorial, restrained. Premium demi-fine jewelry — never loud, never discount-looking.

## Palette (named in tailwind.config via index.css @theme)

- `ink` — `#1A1614`  near-black warm brown, base text and dark sections
- `ink-soft` — `#2B2421` warm charcoal, secondary surfaces
- `bone` — `#F6F1EA`  warm off-white, primary background
- `cream` — `#EDE5DA`  soft cream, alt section background
- `parchment` — `#E2D6C5` muted warm beige, subtle blocks
- `gold` — `#B8915A`  brand accent (warm antique gold)
- `gold-deep` — `#8E6A3A` hover/pressed accent
- `gold-soft` — `#D9BE8E` highlights, hairlines on dark
- `mute` — `#7A6E62` muted warm gray, secondary text
- `hairline` — `#D8CFC2` 1px hairline dividers on light
- `hairline-dark` — `#3A322C` hairline dividers on dark

Use `ink` text on `bone`/`cream`. Use `bone` text on `ink`/`ink-soft`. Never light-on-light or dark-on-dark.

## Typography

- Display / Headings / Product names: **Cormorant Garamond** (serif), weights 300/400/500. Loaded via Google Fonts.
- Body / UI / Labels: **Inter** (sans-serif), weights 300/400/500/600.
- Product names render in UPPERCASE with `tracking-[0.2em]`.
- Editorial section titles: `font-serif` `text-4xl md:text-6xl` `font-light`.
- Body copy: `font-sans` `text-[15px]` `leading-relaxed` `text-ink/80`.
- Tiny labels (trust bar, footer columns): `tracking-[0.2em]` `uppercase` `text-xs`.

## Spacing & Layout

- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-6 md:px-10`.
- Hairline dividers: `border-hairline` 1px, never bold.
- Grid gap: `gap-6 md:gap-10`.

## Buttons

- Primary: solid `bg-ink text-bone` with `hover:bg-gold-deep` OR `bg-gold text-bone` for accent CTAs. Rounded `rounded-none` (square) for editorial feel; small radius `rounded-sm` allowed on dense UI.
- Secondary / outlined: `border border-ink text-ink hover:bg-ink hover:text-bone`.
- Padding: `px-8 py-4`, `tracking-[0.2em] uppercase text-xs font-medium`.
- Transitions: `transition-colors duration-300`.

## Cards & Imagery

- Product cards: no heavy borders, subtle hover image swap, name UPPERCASE with wide tracking, price `font-sans` `text-sm`.
- Images use ratio 4:5 for products, 3:4 for editorial, 9:16 for reel UGC.
- Background hover swap with `transition-opacity duration-700`.
- Soft shadows `shadow-[0_20px_60px_-30px_rgba(26,22,20,0.25)]` only on lifted elements (cart drawer, modals).

## Hover & Animation

- Subtle. `transition-all duration-300 ease-out`.
- Underline links: animated underline from left.
- Image zoom on hover: `scale-[1.03]` over 700ms.

## Do's
- Use ink-on-bone or bone-on-ink for primary contrast.
- Use gold accent sparingly — single CTA per section, hairline highlights.
- Keep type tracking wide on labels and product names.
- Leave breathing room around hero imagery.

## Don'ts
- No drop-shadows on text.
- No bright pure red sale badges. If a badge is needed, use `gold` chip.
- No gradient buttons. No neon. No fully rounded pills on primary CTAs.
- No stacked single-column desktop layouts; reserve stacking for mobile.

## Tailwind v4 theme tokens

These are declared with `@theme` inside `src/index.css`. Use named utilities like `bg-bone`, `text-ink`, `border-hairline`, `font-serif`, `font-sans`.
