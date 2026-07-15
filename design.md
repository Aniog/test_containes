# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant, never loud or discount-looking.

## Color Palette
A deep refined base with warm metallic gold accents.

- `ink` (base dark): `#1A1714` — warm near-black for text and dark sections
- `cream` (page background): `#F7F3EC` — warm off-white
- `sand`: `#EDE6DA` — soft neutral for cards / dividers
- `gold`: `#B08D57` — primary accent (warm metallic gold)
- `gold-deep`: `#8A6A3B` — hover / pressed gold
- `champagne`: `#D9C3A0` — soft gold tint for subtle backgrounds
- `stone`: `#6B6258` — muted body text on light
- `stone-light`: `#9A9089` — secondary / placeholder text

Semantic token pairs (light scheme):
- foreground `ink` / background `cream`
- card-foreground `ink` / card `#FFFFFF`
- muted-foreground `stone` / muted `sand`
- primary `gold` / primary-foreground `#FFFFFF`
- border `#E2D9CB` (hairline)

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-[#E2D9CB]`.
- Soft shadows: `shadow-[0_10px_40px_-15px_rgba(26,23,20,0.25)]`.

## Buttons
- Primary (accent): solid `bg-gold text-white`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`, subtle transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- No rounded corners (sharp/editorial) or very subtle `rounded-none`.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` stock image system.
- Product cards: hover reveals second image.

## Do's
- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Maintain strong contrast (ink on cream, white on gold).
- Subtle hover transitions (`duration-300 ease-out`).

## Don'ts
- No loud gradients, no neon, no discount badges.
- No rounded-full buttons (keep editorial sharp edges).
- No low-contrast text (always explicit foreground colors).
- No hardcoded image URLs — use the stock image system.
