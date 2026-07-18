# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)

| Token | Hex | Usage |
|---|---|---|
| `espresso` (base dark) | `#1C1714` | Footer, dark sections, hero overlays |
| `ink` (near-black text) | `#211C18` | Primary body text on light |
| `truffle` (warm dark brown) | `#3A2E26` | Secondary dark surfaces |
| `ivory` (page background) | `#F7F2EC` | Main page background |
| `cream` (card surface) | `#FBF8F3` | Cards, panels |
| `sand` (muted neutral) | `#E8DFD3` | Borders, dividers, muted backgrounds |
| `taupe` (muted text) | `#8A7A6B` | Secondary / muted text |
| `gold` (primary accent) | `#B08A4F` | Buttons, links, accents, price |
| `gold-deep` (hover) | `#947039` | Button hover, active states |
| `champagne` (soft accent bg) | `#EFE3CE` | Newsletter block, soft accent fills |

Contrast: ink on ivory passes AAA. gold on espresso passes AA for large text / UI. Never use taupe on sand for important text — use ink.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, `tracking-[0.2em]`, `text-xs`.
- Section eyebrows: UPPERCASE, `text-xs tracking-[0.3em] text-gold`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-t`.
- Card radius: `rounded-none` (sharp editorial) or `rounded-sm` max. Avoid large rounded corners.
- Soft shadows: `shadow-[0_10px_40px_-20px_rgba(33,28,24,0.25)]`.

## Buttons
- Primary (accent): `bg-gold text-ivory` uppercase tracking-wide, hover `bg-gold-deep`, subtle transition.
- Outlined: `border border-ink text-ink` hover `bg-ink text-ivory`.
- Full-width CTA on PDP: solid gold.
- No harsh shadows on buttons; flat premium feel.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed).
- Product cards: 4:3 or 1:1, hover reveals second image.
- UGC reel: vertical 9:16 cards.

## Do's
- Use generous whitespace.
- Keep accent (gold) restrained — buttons, eyebrows, prices, small icons.
- Use hairline dividers between sections.
- Uppercase wide-tracked labels for nav and product names.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No large rounded corners or pill-heavy generic e-commerce look.
- No low-contrast text (taupe on sand, gold on champagne for body).
- No hardcoded arbitrary hex outside the palette above.
