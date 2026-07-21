# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
One confident direction: deep warm espresso base + warm metallic gold accent + soft ivory neutrals. Editorial and warm, flatters gold jewelry.

- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2A2420` — warm near-black for body text on light
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents, hairlines
- `gold-soft`: `#C9A876` — lighter gold for hover/secondary
- `ivory` (page background): `#F7F3EE` — warm soft ivory
- `cream` (card/section alt): `#EFE8DF` — slightly deeper warm neutral
- `sand` (muted text): `#8A7E72` — warm muted brown-gray for secondary text
- `line` (hairline): `#E2D9CE` — warm hairline divider

### Contrast rules
- On `ivory`/`cream`: use `ink` for text (strong contrast). Use `sand` only for secondary/labels.
- On `espresso`: use `ivory`/`gold` for text. Never use `sand` on `espresso` (too low contrast).
- Accent buttons: `gold` background with `espresso` or `ivory` text (gold is mid-tone; use `espresso` text for max contrast on solid gold buttons).
- Outlined buttons: `ink` border + `ink` text on ivory; hover fills `ink` with `ivory` text.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif). Weights 400–600.
- Body & UI: **Inter** (clean sans-serif). Weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase, `tracking-[0.14em]`, small (`text-xs`), sans-serif.
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-6 md:px-10`.
- Hairline dividers: `border-t border-line`.
- Cards: subtle `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`, no heavy borders.

## Buttons
- Primary (accent): `bg-gold text-espresso`, uppercase tracking, `px-8 py-3.5`, hover `bg-gold-soft`, subtle transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark sections: `bg-gold text-espresso` or `border border-ivory/70 text-ivory`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive queries referencing nearby text.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small labels, hairline highlights.
- Use generous whitespace and hairline dividers.
- Ensure strong text contrast everywhere.

## Don'ts
- No loud/discount reds, no generic blue e-commerce colors.
- No heavy shadows or thick borders.
- No low-contrast text (sand on espresso, gold on ivory for body text).
- No all-caps sans-serif for product names (use serif uppercase).
