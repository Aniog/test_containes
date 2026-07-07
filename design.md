# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/ink) paired with warm metallic gold accents and soft neutral/editorial cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, hero overlays, footer
- `espresso`: `#2A2520` — slightly lighter warm dark for cards on dark
- `cream`: `#F7F2EA` — warm editorial off-white, primary page background
- `sand`: `#EDE4D6` — soft neutral for alternating sections / tiles
- `champagne`: `#C9A86A` — warm metallic gold accent (buttons, links, dividers, highlights)
- `gold-deep`: `#A8854A` — deeper gold for hover / pressed states
- `stone`: `#8A8074` — muted warm gray for secondary text
- `stone-light`: `#B8AFA3` — lighter muted text on dark

Text contrast rules:
- On `cream`/`sand`: use `ink` for headings/body, `stone` for secondary.
- On `ink`/`espresso`: use `cream` for headings/body, `stone-light` for secondary, `champagne` for accents/links.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif). Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (clean sans-serif).
- Display hero headline: Cormorant Garamond, large, light/medium weight, tight leading.

Font classes:
- `.font-serif` → Cormorant Garamond
- `.font-sans` → Inter (default body)

## Spacing & Layout
- Generous vertical rhythm: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-ink/10` (1px, low opacity).
- Soft shadows: `shadow-[0_10px_40px_-12px_rgba(26,23,20,0.18)]`.

## Buttons
- Primary (accent): solid `champagne` bg, `ink` text, uppercase, wide tracking, `px-8 py-3.5`, hover → `gold-deep`, text stays `ink`.
- Outline: `border border-ink/30`, `ink` text, hover → `bg-ink text-cream`.
- On dark backgrounds: outline uses `border-cream/30` + `cream` text, hover → `bg-cream text-ink`.

## Components
- Product cards: image area `aspect-[4/5]`, hover reveals second image (opacity crossfade), quick "Add to Cart" button slides up on hover. Name uppercase serif, price sans.
- Pills (variant selector): rounded-full, `border`, selected → `bg-ink text-cream`.
- Accordions: hairline borders, plus/minus icon, smooth expand.

## Do's
- Use `cream` as the default page background.
- Keep accent `champagne` restrained — buttons, small highlights, dividers only.
- Uppercase wide-tracked serif for product names and section eyebrows.
- Soft, slow transitions (`duration-500`, `ease-out`).

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows or thick borders.
- No generic e-commerce clutter (badges, countdowns, loud CTAs).
- No low-contrast text (always pair foreground with its surface).
