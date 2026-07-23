# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, unhurried. Demi-fine gold jewelry presented like a
fashion-magazine spread: generous whitespace, thin hairline dividers, soft light,
restrained color. Never loud, never discount-looking.

## Color Direction: "Warm Ivory Editorial + Deep Espresso + Muted Gold"
A soft neutral editorial scheme that flatters gold jewelry.

- `ivory`  #FAF7F2 — primary page background (warm paper white)
- `cream`  #F3EEE6 — alternating section background
- `sand`   #E8DFD2 — deeper neutral band / hover fills
- `espresso` #201914 — primary text + footer/solid blocks (deep warm brown-black)
- `umber`  #4A3F35 — secondary dark surface
- `bronze` #A97E3F — accent: buttons, stars, fine details (muted antique gold)
- `bronze-dark` #8F6832 — accent hover state
- `mink`   #7A6E60 — muted body text on light backgrounds
- `linen`  #E4DCD0 — hairline borders on light
- `ash`    #9C9284 — placeholder / subtle captions
- On espresso surfaces: text is `ivory`; muted text is `#B8AC9C` (espresso-300 token range).

Contrast: espresso on ivory ≈ 14:1. mink on ivory ≈ 4.6:1 (body copy only, 14px+).
Bronze is used for large accents, icons, borders, and buttons with ivory text (3:1+ at bold sizes).

## Typography
- Headings / logo / product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names & labels: UPPERCASE with wide tracking (`tracking-[0.18em]`+).
- Body / UI / prices / buttons: **Inter** (sans), weights 400–600.
- Eyebrow labels: Inter, 11–12px, uppercase, `tracking-[0.25em]`, bronze or mink.

## Layout & Spacing
- Max content width `max-w-7xl`, horizontal padding `px-5 md:px-10`.
- Section vertical rhythm `py-16 md:py-24`; hero is full-bleed.
- Hairline dividers: `border-t border-linen` (1px), never heavy rules.
- Grid gutters `gap-4 md:gap-6`; product grids 2 cols mobile → 3–4 cols desktop.

## Surfaces & Depth
- No heavy cards: images sit directly on ivory/cream, separated by whitespace.
- Soft shadow only for floating UI (drawer, nav-on-scroll, dropdowns):
  `shadow-[0_8px_30px_rgba(32,25,20,0.08)]`.
- Buttons: solid bronze (ivory text) or outlined espresso (1px border), square-ish
  (`rounded-none`), uppercase 12px tracking-wide, generous padding `px-8 py-3.5`.
  Hover: background deepens / fills, 300ms ease.

## Motion
- Subtle only: image scale `hover:scale-[1.03]` (700ms), fade/slide-up reveals,
  drawer slide 300ms, accordion height ease. No bounce, no flashy easing.

## Do / Don't
- DO use uppercase serif product names with wide tracking.
- DO keep imagery warm-toned (gold on skin, linen, stone, espresso backdrops).
- DON'T use pure black (#000) or pure white (#FFF) — always warm-tinted.
- DON'T use bright/saturated colors, gradients, or sale-badge red.
- DON'T crowd: when in doubt, add whitespace.
