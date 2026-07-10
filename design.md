# Velmora Fine Jewelry — Design System

## Brand mood
Quiet luxury. Editorial. Warm. Premium demi-fine jewelry. Calm, not loud.
Never discount-feeling. Never generic e-commerce.

## Color palette
Commit to ONE confident direction: a warm, deep, refined base with soft
metallic champagne accents that flatter gold jewelry.

- `ink-950`  #15110D  — primary surface, deep warm near-black (hero, dark sections, footer)
- `ink-900`  #1F1812  — alternate deep surface
- `ink-800`  #2A2118  — raised surface on dark
- `ink-700`  #3A2E22  — hairlines on dark
- `sand-50`  #FBF7F1  — primary light surface (page background)
- `sand-100` #F4ECDF  — secondary light surface
- `sand-200` #E9DCC6  — soft borders on light
- `sand-300` #D6C2A0  — muted accents
- `champagne-500` #C9A875 — primary accent (warm gold/champagne)
- `champagne-600` #B08E55 — hover/active accent
- `champagne-300` #E2CBA2 — subtle gold tint
- `bone`     #FFFFFF  — pure white for product cards
- `text-ink` #2A2118  — body text on light
- `text-mute-ink` #6B5A48  — secondary text on light
- `text-on-dark` #F4ECDF — body text on dark
- `text-mute-on-dark` #B5A48C — secondary text on dark

Contrast: body text on light always uses `text-ink` (>= 12:1 on `sand-50`).
On `ink-950` always use `text-on-dark` for paragraphs, `champagne-300`
for captions and meta.

## Typography
- Headings & product names: `Cormorant Garamond` (serif), light/regular.
  - Hero h1: 4xl–6xl, leading tight, font-light.
  - Section h2: 3xl–5xl, font-light, tracking-tight.
  - Product name: 2xl, font-light, UPPERCASE, tracking-[0.18em] (wide).
- Body & UI: `Inter` sans-serif, 400/500.
- Caption / label / nav: Inter, 11–12px, UPPERCASE, tracking-[0.2em].
- Buttons: Inter, 12–13px, UPPERCASE, tracking-[0.2em], medium.

Loaded via Google Fonts in `index.html` (preconnect + display=swap).

## Spacing & layout
- Generous whitespace. Section vertical padding: 80–112px desktop, 56–72px mobile.
- Max content width: 1280px, side padding: 24px mobile, 40px tablet, 64px desktop.
- Hairline dividers: 1px `sand-200` on light, `ink-700` on dark.

## Imagery
- Warm gold jewelry on dark/cream backgrounds. Use `data-strk-img` tags.
- Aspect ratios: hero 4x5 portrait, product cards 4x5, story split 1x1.

## Components
- Buttons:
  - Primary: solid `ink-950` background, `text-on-dark` label, no rounding (or 2px max).
    Hover: subtle `champagne-500` background, ~250ms ease.
  - Accent: solid `champagne-500`, `ink-950` label, uppercase tracked.
    Hover: `champagne-600`.
  - Outline: 1px `ink-950` border, transparent fill, `ink-950` label.
    Hover: `ink-950` background, `text-on-dark`.
  - All buttons: uppercase, tracking-[0.2em], no rounded-full, py-3.5 px-8.
- Inputs: 1px bottom border only (or thin surrounding), no rounded, generous height.
- Cards: no drop shadow, no border on light, hover lifts image to second image and shows "Quick add" pill.
- Shadows: only soft, low-opacity on overlays. Never on cards.
- Animations: 250–400ms cubic-bezier(0.22, 1, 0.36, 1). No bouncy. No parallax.

## Do
- Use the gold/champagne accent sparingly — one or two elements per section.
- Let imagery breathe.
- Keep product names UPPERCASE with wide letter-spacing.
- Use thin hairlines to divide, never heavy borders or boxes.

## Don't
- No purple, no neon, no gradient rainbow.
- No Tailwind `rounded-full` on cards or buttons.
- No drop shadows on cards.
- No emoji.
- No Tailwind `bg-gradient-to-*` rainbow.
- No placeholder lorem text. Use real-sounding copy.
- No more than 2 font families total.
