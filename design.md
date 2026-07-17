# Velmora Fine Jewelry — Design System

## Brand Overview
High-end DTC demi-fine gold jewelry e-commerce. Target: women 25–45, premium-but-accessible ($30–$120). Mood: quiet luxury, warm, editorial.

## Colors

### Primary palette
- **Ink** (`ink-950` → `ink-50`): Deep charcoal-to-warm-gray scale. Base for text and dark backgrounds.
  - `ink-900`: `#2d2a26` — body text
  - `ink-950`: `#1a1816` — near-black (hero bg, footer bg, button fills)
  - `ink-800`: `#585148` — secondary text / medium emphasis
  - `ink-100`: `#e8e6e1` — hairline dividers, borders
  - `ink-50`: `#f6f5f3` — near-white surface variant

- **Gold** (`gold-500`): `#d48d1a` — accent color for CTAs, active states, star fills, decorative lines.
  - `gold-400`: `#e6aa2e` — lighter gold (star fills, decorative use)
  - `gold-600`: `#b86e15` — darker gold (hover, emphasis)

- **Cream** (`cream-50`): `#fefcf7` — page background, light surfaces, card bg. Warm off-white.
  - `cream-100`: `#fcf6e8` — subtle warm tint for accent cards

### Usage rules
- Never use pure white (`#ffffff`) or pure black (`#000000`). Warm all neutrals.
- Text must always pass WCAG AA contrast against its background.
- `cream-50` bg → `ink-900` text (primary), `ink-600` (secondary), `ink-400` (muted)
- `ink-950` bg → `cream-50` text (primary), `cream-50/60` (secondary), `cream-50/40` (muted)
- Gold is accent only — never use for body text or large background fills.

## Typography

### Font stack
- **Headings / Product Names / Logo**: `Cormorant Garamond` (Google Fonts), serif, font-weight 300–700
- **Body / UI / Labels**: `Inter` (Google Fonts), sans-serif, font-weight 300–600

### Type scale (px)
- Logo: 30px (desktop), 24px (mobile) — serif semibold
- Hero headline: 56px / 40px — serif light
- Section titles: 36px / 30px — serif light
- Product names (cards): 11px uppercase — sans-serif medium
- Body: 14px / 16px — sans-serif light/regular
- Labels / UI: 10–12px uppercase — sans-serif medium
- Price: 14–18px — sans-serif medium

### Letter spacing
- `tracking-wider`: `0.05em` — standard for uppercase UI
- `tracking-widestplus` (custom): `0.15em` — dramatic uppercase (labels, badges)
- UPPERCASE + wide letter-spacing for product names, section labels, nav links

## Layout
- Max content width: `1280px` (`max-w-7xl`)
- Page surface: `cream-50` (`#fefcf7`)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Generous vertical spacing: `py-16 lg:py-24` for sections
- Section title centered with thin gold hairline divider below

## Borders & Dividers
- Thin hairline: `h-px bg-ink-100` or `h-px bg-gold-400/50`
- Card borders: `border border-cream-50/10` (on dark bg)
- No heavy borders or box shadows. Subtle `shadow-sm` only on sticky nav.

## Buttons
- **Primary (CTA)**: `bg-ink-900 text-cream-50` → hover `bg-ink-800`. Uppercase, small text, wide tracking. No rounded corners.
- **Ghost / Outline**: `border border-ink-200 text-ink-700` → hover `border-ink-400`. Same typography.
- **Add to cart (on cards)**: `bg-cream-50 text-ink-900` → hover `bg-gold-500 text-ink-950`. Slides up on hover.

## Interactions
- Hover transitions: `duration-300` / `duration-500` ease
- Image zoom: `group-hover:scale-105` with `duration-700`
- Fade-in on scroll: optional `fade-in` class with keyframe animation
- Cart drawer slides in from right with backdrop overlay

## Do's & Don'ts
- DO use warm off-white backgrounds (cream tones)
- DO use ample whitespace between sections
- DO use serif for elegance / editorial feel
- DO keep gold as accent only (buttons, stars, lines)
- DON'T use pure white or pure black
- DON'T use loud gradients or bright colors
- DON'T use heavy shadows or rounded corners on buttons
- DON'T use standard e-commerce patterns (no "SALE" badges, no countdown timers)
- DON'T mix warm and cool tones — stay consistently warm
- DON'T over-accessorize the UI — let the product imagery breathe