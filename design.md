# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (deep espresso base): `#1C1714` — primary dark surface / text on light
- `ink-soft`: `#2A2320`
- `ivory` (page background): `#F7F3EC` — warm off-white
- `cream`: `#EFE7DA` — secondary surface
- `sand`: `#E2D6C3` — borders / dividers
- `stone` (muted text): `#7A6F62`
- `gold` (accent): `#B08D57` — primary accent (buttons, links, highlights)
- `gold-deep`: `#8A6A3B` — hover / pressed accent
- `champagne`: `#D9BE8E` — soft metallic highlight

Use `ink` text on `ivory`/`cream` backgrounds. Use `ivory`/`champagne` text on `ink` backgrounds. Ensure strong contrast (gold on ink is fine for accents; never use gold text on ivory for body copy — use ink/stone instead).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Display hero headline: Cormorant Garamond, large, light weight, tight leading.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, stone/gold color.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-6 md:px-10`.
- Hairline dividers: `border-sand` / `border-ink/10`, `border-t`.
- Cards: subtle shadow `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`, rounded-none or `rounded-sm`.

## Buttons (premium)
- Primary (accent): `bg-gold text-ink` (dark text on gold for contrast) OR `bg-ink text-ivory`. Hover: `bg-gold-deep` / `bg-ink-soft`. Uppercase, `tracking-[0.15em]`, `text-xs`, `py-4 px-8`, `rounded-none`.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Pill variant buttons (variant selector): `rounded-full border`, active = `bg-ink text-ivory border-ink`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups. 9:16 vertical for UGC reel. 4:3 / 3x2 for product cards. 16:9 for hero.
- Subtle hover: product card reveals second image with crossfade; quick "Add to Cart" slides up.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, eyebrow labels.
- Use hairline dividers and whitespace to create editorial calm.
- Mobile-first; stack gracefully, keep desktop multi-column.

## Don'ts
- No bright/discount reds, no neon, no generic blue links.
- No rounded chunky buttons; keep edges crisp (`rounded-none` / `rounded-sm`).
- No low-contrast text (gold body text on ivory, stone-on-sand for important content).
- No loud badges or sale stickers.
