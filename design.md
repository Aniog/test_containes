# Velmora Fine Jewelry — Design System

Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)

- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2A2420` — warm near-black for body text on light
- `gold` (accent): `#B08D57` — refined warm metallic gold; buttons, links, hairline accents, price emphasis
- `gold-deep`: `#8A6A3B` — hover / pressed gold
- `ivory` (page bg): `#F7F3EE` — soft warm ivory background
- `cream`: `#EFE7DC` — secondary surface, cards on ivory
- `sand`: `#E3D8C8` — borders, dividers, muted surfaces
- `stone` (muted text): `#7A6F63` — secondary text, captions
- `champagne`: `#D9C7A8` — soft gold tint for accent blocks / newsletter

Contrast: ink on ivory = strong. gold on espresso = strong. stone on ivory = readable for secondary text. Never use gold text on ivory for body (too low contrast) — use ink; reserve gold for accents/headlines on dark, or as solid fills.

## Typography

- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans), weights 300–600.
- Hero headline: Cormorant Garamond, large, light weight, generous line-height.
- Eyebrow / labels: Inter, uppercase, `tracking-[0.2em]`, `text-xs`, stone color.

## Spacing & Layout

- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand`, `border-t`.
- Cards: soft shadow `shadow-sm`, rounded-none or `rounded-sm` (sharp editorial feel), thin border `border-sand`.

## Buttons (premium)

- Primary (accent): solid `bg-gold text-ivory`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`. Square or slightly rounded (`rounded-sm`).
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark sections: outlined ivory `border-ivory/40 text-ivory`, hover `bg-ivory text-espresso`.

## Imagery

- Warm gold jewelry on dark/neutral backgrounds. Large editorial imagery. Full-bleed hero.
- Use `data-strk-img` / `data-strk-bg` stock image system with text-reference queries.

## Motion

- Subtle, slow transitions (`duration-500`, `ease-out`). Hover reveals second product image. Soft fade-ups on scroll where appropriate. No bouncy/loud animation.

## Do's

- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Generous whitespace, hairline dividers.
- Mobile-first responsive.

## Don'ts

- No bright/discount reds, no generic blue links.
- No rounded-full chunky buttons.
- No low-contrast gold text on ivory body.
- No cluttered layouts on mobile.
