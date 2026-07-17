# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury. Warm, editorial, intimate. Demi-fine gold jewelry presented like a fashion magazine spread — generous whitespace, thin hairline rules, soft shadows, no loud promo styling, no discount clutter.

## Color Palette (Tailwind token → hex)
All colors are named tokens in `tailwind.config.js`. Never hardcode hex values in class strings.

- `ink` `#211D19` — primary text, deep espresso-black
- `espresso` `#2E2823` — dark section background (rich warm near-black)
- `espresso-deep` `#231F1B` — darkest background (newsletter, footer base)
- `cream` `#FAF6EF` — primary light background
- `sand` `#F3EDE1` — secondary light background / tinted panels
- `stone-warm` `#E7DDCA` — borders on dark, image placeholder tint
- `gold` `#B08D57` — primary accent (buttons, links, stars)
- `gold-deep` `#96742F` — accent hover state
- `gold-soft` `#D9C29A` — light metallic accent on dark surfaces
- `bronze` `#8A6A45` — secondary metallic detail
- `taupe` `#8B8177` — muted body text on light
- `taupe-dark` `#6E655B` — muted text needing stronger contrast
- `line` `#E3DACB` — hairline dividers on light
- `line-dark` `#453E36` — hairline dividers on dark

### Usage rules
- Light surfaces: `bg-cream` / `bg-sand` with `text-ink` or `text-taupe-dark` secondary.
- Dark surfaces: `bg-espresso` / `bg-espresso-deep` with `text-cream` primary and `text-stone-warm/80` secondary.
- Accent CTA: solid `bg-gold` with `text-cream`, hover `bg-gold-deep`.
- Secondary CTA: outlined hairline (`border border-ink/25` on light, `border-cream/30` on dark).
- Stars: `text-gold`. Badges: uppercase micro-type, `text-gold-deep` on light, `text-gold-soft` on dark.
- Never use pure black `#000` or pure white `#fff` — always warm-tinted.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Loaded in `index.html`, applied via `font-serif` token.
- Body & UI: **Inter** (sans), via `font-sans` token.
- Product names in cards/PDP: UPPERCASE, wide tracking (`tracking-[0.18em]`+), serif.
- Eyebrow labels: sans, uppercase, `text-[11px] tracking-[0.25em]`, gold.
- Headline scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, card names `text-sm md:text-base`.
- Editorial serif italic allowed for short accents (captions, pull quotes).

## Surfaces & Dividers
- Thin hairline dividers: `border-line` (light) / `border-line-dark` (dark), always 1px.
- Cards: no heavy borders — soft shadow `shadow-soft` (custom token), subtle lift on hover.
- Rounded corners minimal: `rounded-sm` (2px) or none. Premium = restraint.

## Motion
- Hover transitions 300–500ms, `ease-out`. Image zoom on card hover (`scale-105 duration-700`).
- Reveal-on-scroll: fade + translate-y 16px, staggered 80ms per item.
- Drawer (cart): slide from right, 400ms ease; overlay fade.
- No bouncy/spring animations. No autoplay carousels.

## Buttons
- Primary: `bg-gold text-cream uppercase tracking-[0.2em] text-xs px-8 py-4` hover `bg-gold-deep`.
- Outline: transparent bg, 1px border, same typography; hover fills subtly.
- Icon buttons: 40px hit area, `hover:text-gold` transition.

## Imagery
- Warm-lit gold jewelry photography on neutral/dark backgrounds via stock tagging system.
- Product images: 4x5 portrait ratio. Hero: full-bleed 16x9 (bg). UGC reels: 9x16. Category tiles: 3x4.
- Images get `object-cover`, slight `bg-stone-warm` placeholder tint while loading.

## Don'ts
- No pure black/white, no saturated reds/blues, no pill-shaped rainbow badges.
- No discount slashes or "SALE" shouting. Price shown plainly, serif optional.
- No heavy drop shadows, no gradients except subtle dark overlay on imagery for text legibility.
- No cramped mobile stacking on desktop — desktop uses generous multi-column grids.
