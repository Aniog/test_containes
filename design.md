# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, hero overlays, dark sections
- `ink` (primary text): `#2A2520` — warm near-black for body text on light
- `gold` (accent): `#B08A4F` — refined warm metallic gold for buttons, links, accents, stars
- `gold-soft`: `#C9A86A` — lighter gold for hover states
- `ivory` (page background): `#F7F3EC` — warm soft cream
- `cream` (card/section alt): `#EFE8DC` — slightly deeper warm neutral
- `sand` (muted text / borders): `#A89B89` — warm muted taupe for secondary text
- `hairline` (dividers): `#E2D9CB` — warm hairline border

Tailwind tokens: map these as named colors in tailwind.config.js (espresso, ink, gold, goldSoft, ivory, cream, sand, hairline).

Accessibility: ink on ivory = strong contrast. gold on espresso = strong contrast. Never use sand text on ivory for important content (use ink). sand is for secondary/muted only and still legible.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Large editorial sizes.
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase, `text-xs tracking-[0.2em]`, sans.
- Buttons: uppercase, `text-xs tracking-[0.2em]`, sans, medium weight.

Load fonts via Google Fonts in index.html.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28` (generous).
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-hairline`.
- Card spacing: `gap-6 md:gap-8`.

## Components
- Buttons:
  - Primary (solid): `bg-gold text-ivory hover:bg-goldSoft` , uppercase tracking, `px-8 py-4`, no border-radius (sharp/editorial) or `rounded-none`.
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-ivory`.
  - On dark: `border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso`.
- Product cards: ivory background, image square (4x3 or 1x1), name uppercase serif, price sans. Hover: subtle image crossfade to second image, "Add to Cart" reveal slides up.
- Inputs: `border border-hairline bg-transparent`, underline-style or thin border, focus ring gold.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, stars, small accents only.
- Use hairline dividers between sections.
- Generous whitespace; let imagery breathe.
- Soft shadows: `shadow-sm` or custom `shadow-[0_10px_40px_-15px_rgba(28,23,20,0.25)]`.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons (pill variant selectors are the exception).
- No heavy shadows or gradients.
- No generic e-commerce clutter (badges, sale tags) unless subtle.
- Don't use sand-on-ivory for primary text.
