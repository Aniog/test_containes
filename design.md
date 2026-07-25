# Velmora Fine Jewelry — Design System

## Mood & Direction
Quiet luxury. Warm, editorial, restrained. Demi-fine gold jewelry presented like an
editorial magazine: generous whitespace, thin hairline dividers, large imagery,
no loud sale colors, no generic e-commerce chrome.

## Color Palette (named Tailwind colors — never use raw hex in components)
- `ink` — #1C1710 — near-black warm brown. Primary text, footer background, primary buttons.
- `cream` — #FAF7F1 — page background.
- `sand` — #F2EBE0 — alternating section background, image backdrops.
- `gold` — #A9824B — muted antique gold. Accent: CTAs, stars, small labels, links on dark.
- `gold-deep` — #8C6A38 — accent hover state.
- `bronze` — #6E5B40 — secondary text on dark surfaces.
- `mocha` — #6B5D4F — muted body text on light surfaces.
- `line` — #E5DCCC — hairline borders/dividers on light surfaces.
- `white` — pure white for cards and inputs.

Do: cream/ink text pairs, gold used sparingly as accent.
Don't: pure black (#000), gray text on sand, gold body text on cream, saturated red sale badges.

## Typography
- Serif (headings, product names, pull quotes): **Cormorant Garamond** (`font-serif`).
  Product names in UPPERCASE with wide letter-spacing (`tracking-[0.12em]`+).
  Headline weights 500, sizes 3xl–6xl. Use italic sparingly for editorial accents.
- Sans (body, UI, buttons, prices): **Manrope** (`font-sans`). Body 14–16px, relaxed leading.
- Buttons/labels: sans, uppercase, `text-xs`, `tracking-[0.2em]`.

## Layout & Spacing
- Max content width `max-w-7xl`, horizontal padding `px-5 sm:px-8 lg:px-12`.
- Section vertical rhythm `py-16 sm:py-24 lg:py-28`.
- Hairline dividers `border-t border-line` between major sections.
- Grid gutters `gap-4 sm:gap-6 lg:gap-8`.

## Shape, Shadow, Motion
- Sharp corners (no rounded cards) except pill buttons/inputs where noted. Luxury = straight edges.
- Shadows soft and rare: `shadow-[0_24px_60px_-24px_rgba(28,23,16,0.25)]` for drawers/modals only.
- Transitions `duration-300`–`duration-700`, `ease-out`. Hover: gentle image scale (`scale-105`),
  underline reveals, button fills. All animation subtle — no bounce.

## Buttons
- Primary: solid `bg-ink text-cream` (or `bg-gold text-ink`), uppercase tracking, `px-8 py-4`,
  hover swaps to `bg-gold`. Full-width on PDP.
- Secondary: `border border-ink/30` outline, hover `border-gold text-gold-deep`.

## Imagery
- Warm-lit gold jewelry photography on dark or neutral backgrounds, via the strk image system.
- Product tiles `3x4`, hero `16x9`, editorial/story `4x3` or `3x4`, UGC reels `9x16`.
- Images sit on `bg-sand` backdrops with `object-cover`.

## Iconography
- Lucide icons only, thin strokes (`strokeWidth={1.5}`), sized 18–22px.
- Payment marks in footer are text-based (no heavy brand SVGs).

## Accessibility
- Minimum body contrast: ink/mocha on cream, cream/sand on ink.
- Focus states visible (gold outline). Buttons have aria-labels when icon-only.
