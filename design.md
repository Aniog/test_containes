# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount-looking, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm champagne gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid state text-on-dark
- `ink`: `#2A2420` — primary dark text
- `champagne` (accent / gold): `#B08D57` — warm metallic gold accent for buttons, links, highlights
- `champagne-deep`: `#8A6D3E` — hover / pressed state of accent
- `ivory`: `#F7F2EA` — page background, warm off-white
- `cream`: `#FBF8F2` — card / panel background
- `sand`: `#E8DFD2` — subtle borders, dividers, muted surfaces
- `taupe`: `#9C8B78` — muted secondary text
- `stone`: `#6B5F52` — body text on light

All text must have strong contrast. On espresso/ink backgrounds use `ivory`/`cream` text. On ivory/cream backgrounds use `ink`/`stone` text. Never use `taupe` on `sand` or `champagne` text on `ivory` without sufficient contrast.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels / nav: Inter, UPPERCASE, `tracking-[0.2em]`, small size (`text-xs`), muted.
- Hero headline: Cormorant Garamond, large (`text-5xl`–`text-7xl`), tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container max width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-t`.
- Card gaps: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-champagne text-ivory`, hover `bg-champagne-deep`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, rounded-none (sharp editorial) or `rounded-sm`.
- Secondary (outline): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark sections: outline `border-ivory/40 text-ivory`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.

## Do's
- Use serif for all headings and product names.
- Keep accent (champagne) restrained — buttons, small highlights, links.
- Use hairline borders and soft shadows (`shadow-sm`, `shadow-md`).
- Generous whitespace.

## Don'ts
- No loud gradients, no discount badges, no neon colors.
- No rounded-full buttons (keep editorial sharpness; pills only for variant selectors).
- No low-contrast text (e.g. champagne on ivory, taupe on sand).
- No generic e-commerce clutter.
