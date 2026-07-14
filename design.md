# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base (espresso/ink) with warm metallic gold accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` #14110F — deepest base (footer, hero overlays, dark sections)
- `espresso` #2A2420 — dark warm panels
- `cocoa` #4A3F37 — muted warm text on light
- `champagne` #C9A86A — primary warm metallic accent (buttons, links, dividers)
- `gold` #B8924A — deeper gold for hover / active
- `ivory` #F7F2EA — page background, light sections
- `cream` #FBF8F2 — cards / raised surfaces
- `stone` #8A7F73 — muted secondary text
- `line` #E4DBCE — hairline dividers / borders

Tailwind tokens (see tailwind.config.js): `ink`, `espresso`, `cocoa`, `champagne`, `gold`, `ivory`, `cream`, `stone`, `line`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Hero headline: large serif, tight leading.
- Body: relaxed leading, muted cocoa/stone on ivory.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-line` 1px.
- Soft shadows: `shadow-[0_10px_40px_-12px_rgba(20,17,15,0.18)]`.

## Buttons
- Primary (accent): solid `bg-ink text-ivory`, hover `bg-espresso`, uppercase tracking, subtle transition. On dark sections use `bg-champagne text-ink`.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Pill variant selectors: `border border-line`, active `bg-ink text-ivory border-ink`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Editorial close-ups, soft warm lighting.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive queries referencing nearby text.

## Do's
- Keep one confident warm-neutral + gold direction sitewide.
- Use serif for all headings and product names.
- Maintain strong text contrast (ink on ivory, ivory on ink).
- Use hairline dividers and generous whitespace.

## Don'ts
- No loud discount colors (no reds, no neon).
- No generic e-commerce clutter.
- No low-contrast text (no stone on cream for body copy).
- No hardcoded hex in JSX — use Tailwind tokens.
