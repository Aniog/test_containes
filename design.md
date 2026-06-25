# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm. Editorial. Demi-fine gold jewelry presented with restraint, generous whitespace, and confident typography. Never loud, never discounted-looking, never generic e-commerce.

## Color Palette (single committed direction: warm editorial cream + deep ink + champagne gold)

Named tokens — registered in `index.css` via `@theme` and mapped to Tailwind classes.

| Token            | Hex      | Tailwind class            | Use                                  |
|------------------|----------|---------------------------|--------------------------------------|
| `cream`          | #F6F1E7  | `bg-cream`, `text-cream`  | Primary page background, soft surfaces |
| `ivory`          | #FBF8F1  | `bg-ivory`                | Card/feature backgrounds              |
| `ink`            | #1C1A17  | `bg-ink`, `text-ink`      | Primary text, dark sections, footer   |
| `ink-soft`       | #2A2620  | `bg-ink-soft`             | Slightly softer dark surface          |
| `mocha`          | #6B5C49  | `text-mocha`              | Secondary text, muted body            |
| `champagne`      | #C9A66B  | `bg-champagne`, `text-champagne` | Primary accent (CTA, links)    |
| `champagne-deep` | #A8884F  | `bg-champagne-deep`       | Hover state for accent                |
| `hairline`       | #E4DCCB  | `border-hairline`         | Thin dividers, borders                |

Contrast rules:
- On `cream`/`ivory`: use `ink` or `mocha`. Never use `champagne` for body text on cream (low contrast).
- On `ink`: use `cream` text or `champagne` for accents only.
- Buttons: solid `ink` w/ `cream` text OR outlined `ink` border w/ `ink` text. Accent CTAs: solid `champagne` w/ `ink` text.
- Stars/ratings: `champagne`.

## Typography
- Headings + product names: **Cormorant Garamond** (serif). `font-serif`.
- Body, UI, labels: **Inter** (sans). `font-sans` (default).
- Product names always **UPPERCASE** with tracking `tracking-[0.18em]` or `tracking-widest`.
- Section eyebrows: uppercase, 11–12px, `tracking-[0.3em]`, `text-mocha`.
- H1 hero: serif, 48–80px, light/regular weight, tight leading.
- H2 section title: serif, 32–48px.
- Body: 15–16px, leading-relaxed, `text-ink/80` or `text-mocha`.

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-28 lg:py-32`.
- Container: max-w-[1400px], px-6 md:px-10.
- Grid gaps: gap-6 md:gap-10.
- Hairline dividers: `border-t border-hairline` (1px).

## Components
- Buttons:
  - Primary: `bg-ink text-cream hover:bg-ink-soft`, px-8 py-4, tracking-widest uppercase text-xs.
  - Accent: `bg-champagne text-ink hover:bg-champagne-deep`, px-8 py-4, tracking-widest uppercase text-xs.
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- Product card: ivory/cream bg, no heavy borders, image first, name uppercase serif below, price in sans. Hover: second image fade-in + subtle quick-add button slide-up.
- Inputs: transparent bg, `border-b border-ink/30 focus:border-ink`, no rounded corners.

## Motion
- Transitions: `transition-all duration-500 ease-out` for hover/state.
- Image hover: 700ms cross-fade.
- No bouncy animations. Subtle and slow.

## Do / Don't
- DO: lots of whitespace, large editorial images, restrained accent use.
- DO: uppercase product names with wide tracking.
- DON'T: drop shadows that look web 2.0, neon colors, multiple competing accents.
- DON'T: place champagne text on cream (low contrast). Use ink instead.
- DON'T: bright red SALE badges or aggressive discount styling.
