# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not
discount-looking, not generic e-commerce. Generous whitespace, large editorial
imagery, thin hairline dividers, restrained accent color, subtle hover
transitions, soft shadows.

## Color Palette
A deep, refined warm base with a soft champagne/cream surface and a warm gold
accent. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — near-black warm brown, used for text on light surfaces and as dark section backgrounds.
- `cream` (light surface): `#F7F3EC` — warm off-white, primary page background.
- `sand` (secondary surface): `#EFE7DA` — slightly deeper warm neutral for cards/strips.
- `champagne` (accent gold): `#B08D57` — warm metallic gold accent for buttons, links, highlights.
- `champagne-deep`: `#8A6D3F` — hover/pressed state for accent.
- `stone` (muted text): `#6B6258` — secondary text on light surfaces.
- `line` (hairline): `#E2D9CB` — thin dividers on light surfaces.
- `cream-text` (text on dark): `#F7F3EC` — text on ink/champagne backgrounds.

Tailwind tokens (see tailwind.config.js):
- `ink`, `cream`, `sand`, `champagne`, `champagne-deep`, `stone`, `line`

Semantic pairs:
- Light surface: `text-ink` on `bg-cream` / `bg-sand`
- Dark surface: `text-cream` on `bg-ink`
- Accent: `text-cream` on `bg-champagne` (buttons), `text-champagne` on `bg-cream` (links)

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Eyebrow / labels: UPPERCASE sans, `tracking-[0.25em]`, `text-xs`, `text-stone`.

Font classes:
- `.font-serif` → Cormorant Garamond
- `.font-sans` → Inter (default body)

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Generous whitespace between elements; avoid crowding.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): `bg-champagne text-cream` solid, `hover:bg-champagne-deep`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, subtle transition.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- On dark backgrounds: `border border-cream/40 text-cream hover:bg-cream hover:text-ink`.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` stock image system.
- Soft shadows: `shadow-sm`, `shadow-md` only where needed.

## Do's
- Keep one confident warm-neutral + gold direction sitewide.
- Use serif for all headings and product names.
- Maintain strong text contrast (ink on cream, cream on ink).
- Use hairline dividers and whitespace to create editorial calm.

## Don'ts
- No loud/discount colors (no pure reds, neon, bright sale tags).
- No generic e-commerce gray-on-white.
- No low-contrast text (no stone text on sand without checking contrast).
- No heavy drop shadows or rounded chunky buttons.
- Do not mix multiple accent colors.
