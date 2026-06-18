# Velmora Fine Jewelry — Design System

A quiet-luxury, editorial demi-fine jewelry storefront. Warm, hushed, premium.

## Mood
Quiet luxury. Warm-lit. Editorial magazine pacing. Not loud, not discount-y.
Generous whitespace. Hairline dividers. Restrained accent. Soft hover transitions.

## Color palette (committed)
A warm neutral / cream base with a deep "ink" foreground and a brand champagne-gold accent.

- `cream` — `#F6F1E8` — primary page background, softer than pure white
- `bone` — `#EDE6D8` — secondary surface (cards, alt sections)
- `ink` — `#1B1714` — primary text, deep warm near-black
- `mocha` — `#3A3027` — secondary heading / dark surfaces
- `taupe` — `#8A7A66` — body muted / labels / hairline-darker
- `champagne` — `#B89968` — primary accent (warm gold) for CTAs, links, hover
- `gilt` — `#D9B97D` — secondary accent / decorative
- `hairline` — `#D9CFBE` — dividers, borders

Tailwind named colors are configured in `tailwind.config.js` so we never inline hex codes.
Use `bg-cream`, `text-ink`, `border-hairline`, `bg-champagne text-cream`, `text-taupe`, etc.

## Typography
- Headings & product names: `font-serif` → Cormorant Garamond (400/500/600)
- Body & UI: `font-sans` → Inter (300/400/500/600)
- Loaded via `<link>` in `index.html`.

Conventions:
- Page hero headlines: serif, large (clamp 2.5rem–4.5rem), tight leading, normal tracking.
- Section headings: serif, ~`text-3xl md:text-4xl`, normal tracking.
- Product names: serif, UPPERCASE, `tracking-[0.18em]`, weight 500.
- Body copy: sans `text-base text-ink/80` or `text-mocha`.
- Eyebrow labels: sans, UPPERCASE, `text-xs tracking-[0.28em] text-taupe`.

## Spacing & layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace around editorial imagery.
- Hairline dividers: `border-t border-hairline` (NOT heavy black lines).
- Mobile-first: stack to single column under `md`. Above `md`, multi-column editorial grids.

## Components
- Buttons:
  - Primary: `bg-ink text-cream hover:bg-mocha` with `tracking-[0.2em] uppercase text-xs px-7 py-4`.
  - Accent: `bg-champagne text-cream hover:bg-mocha`.
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- Cards (product): no harsh shadow, just `rounded-none` editorial frame; reveal second image on hover; "Quick add" surfaces on hover.
- Inputs: minimal, hairline border bottom, focus ring `focus:border-champagne`.
- Hover transitions: `transition-all duration-500 ease-out`.

## Imagery
- Use stock-image system (`data-strk-img` / `data-strk-bg`).
- Subjects: warm gold jewelry on warm-lit, dark or neutral backdrops; close-up editorial portraits.
- Ratios: hero `16x9`, product `3x4`, UGC reel `9x16`, category tiles `3x4`.

## Do / Don't
- DO use `font-serif` for headings and product names.
- DO keep the page mostly cream/bone, with deep ink text and one champagne accent.
- DO use UPPERCASE serif product names with wide letter spacing.
- DO use thin hairline dividers between sections.
- DON'T use bright reds, neon, or "Shop NOW!" discount styling.
- DON'T use heavy drop shadows or chunky rounded corners.
- DON'T mix more than one accent color.
- DON'T put light text on light backgrounds, or dark text on dark surfaces.
