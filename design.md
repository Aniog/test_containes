# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm champagne gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2A2420` — warm dark brown-black for body text on light
- `champagne` (accent / gold): `#B08D57` — warm metallic gold for buttons, links, accents, price
- `champagne-deep`: `#8A6D3F` — hover / pressed state for accent
- `ivory` (page background): `#F7F3EC` — warm soft cream
- `cream` (card / alt surface): `#FBF8F2`
- `sand` (muted borders / dividers): `#E4DCCF`
- `stone` (muted text): `#8A7F73` — secondary text, captions
- `rose` (soft accent for UGC overlays): `#C9A98C`

All text on ivory/cream uses `ink` or `stone` for strong contrast. Accent text (champagne) only used on dark backgrounds or as small accents on light — never large body text on light. On espresso backgrounds, text is `ivory` or `champagne`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.15em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero headline: Cormorant Garamond, large, light weight, tight leading.
- Eyebrow / labels: Inter, UPPERCASE, `text-xs tracking-[0.25em]`, `stone` color.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28` for editorial sections.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand`, `border-t`.
- Cards: `bg-cream`, soft shadow `shadow-[0_8px_30px_rgba(28,23,20,0.06)]`, rounded-none (sharp editorial) or `rounded-sm`.

## Buttons
- Primary (accent): `bg-champagne text-ivory`, uppercase, `tracking-[0.2em] text-xs`, `px-8 py-4`, hover `bg-champagne-deep`, transition 300ms.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- No rounded pill buttons; keep refined (slight radius `rounded-sm` or square).

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent (champagne) restrained — buttons, small highlights, prices.
- Uppercase serif product names with wide tracking.
- Soft, slow transitions (300–500ms ease).

## Don'ts
- No bright/saturated colors. No discount-red badges. No generic blue links.
- No large champagne text on ivory (low contrast).
- No heavy shadows or thick borders.
- No pill/rounded-full buttons (except tiny quantity controls if needed).
- No emoji in UI.
