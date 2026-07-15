# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/charcoal) with warm metallic gold accents and soft neutral editorial backgrounds.

- `ink` (base dark): `#1C1714` — warm near-black espresso, used for text, footer, dark sections
- `ink-soft`: `#2A2320` — slightly lifted dark surface
- `cream` (page background): `#F7F2EC` — warm editorial cream
- `sand`: `#EDE4D8` — soft neutral panel / card background
- `champagne`: `#E8D9C4` — muted warm divider / hover surface
- `gold` (primary accent): `#B08D57` — warm metallic gold for buttons, links, accents
- `gold-deep`: `#9A7544` — hover / pressed state of gold
- `stone` (muted text): `#7A6F64` — secondary text on light backgrounds
- `stone-light`: `#A99C8E` — tertiary text / placeholders

### Semantic token pairs (light theme, default)
- background: `cream` / foreground: `ink`
- card: `#FFFFFF` / card-foreground: `ink`
- muted: `sand` / muted-foreground: `stone`
- primary: `gold` / primary-foreground: `#FFFFFF`
- border: `champagne`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Headlines: large serif, tight leading (`leading-[1.05]`).

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-champagne`.

## Buttons
- Primary (accent): solid `bg-gold text-white`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`, subtle transition.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- No rounded corners (sharp/editorial) or very subtle `rounded-none`. Keep premium and architectural.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4:3 or 1:1, hover reveals second image.
- Reels: 9:16 vertical.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, links.
- Use hairline dividers and whitespace to create editorial rhythm.
- Ensure strong contrast: ink text on cream, white text on gold/ink.

## Don'ts
- No loud discount badges, no neon colors, no generic blue/purple.
- No rounded pill buttons (keep architectural / sharp).
- No low-contrast text (e.g. stone on sand without checking contrast).
- Do not hardcode arbitrary hex values in components — use Tailwind named tokens.
