# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking.

## Color Palette
A deep warm espresso base with soft ivory and warm metallic gold accents.

- `espresso` (base dark): `#1F1A15` — deep warm near-black, used for footer, dark sections
- `ink` (text dark): `#2B2520` — primary body text on light
- `cream` (page bg): `#F7F3EC` — warm ivory page background
- `sand` (secondary surface): `#EFE7DA` — cards, subtle surfaces
- `stone` (muted text): `#8A7F72` — secondary/muted text
- `gold` (accent): `#B08A4F` — primary accent, buttons, links, metallic
- `gold-soft` (hover): `#9A763E` — hover state for gold
- `line` (hairline): `#E2D8C8` — thin dividers

Tailwind tokens: map these as named colors in tailwind.config.js (espresso, ink, cream, sand, stone, gold, gold-soft, line).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600.
- Hero headline: serif, large, tight leading.
- Eyebrow/labels: Inter uppercase, `tracking-[0.25em]`, `text-xs`, muted.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-line`.

## Components
- Buttons: solid gold (`bg-gold text-cream hover:bg-gold-soft`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none or `rounded-sm`. Uppercase, tracked, `text-xs md:text-sm`, `px-8 py-4`.
- Cards: `bg-cream` or `bg-sand`, soft shadow `shadow-sm`, hairline border on hover.
- Product card hover: reveal second image, show "Add to Cart" overlay button.
- Inputs: underline style or thin border, `bg-transparent border-b border-line`.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small icons, links.
- Use hairline dividers between sections.
- Ensure strong contrast: dark text on cream, cream text on espresso.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons. No heavy shadows. No gradients except subtle.
- No generic e-commerce blue. No discount-red badges.
