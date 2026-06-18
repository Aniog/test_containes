# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury. Editorial. Warm, inviting, never loud. Premium demi-fine jewelry brand — closer to a magazine spread than a typical e-commerce store. Generous whitespace, restrained accent color, hairline dividers, subtle shadows, soft fades.

Do NOT make it look like:
- A discount/coupon site
- A generic Shopify template
- A dark "tech" UI
- A flashy crystal/costume jewelry brand

## Palette (warm editorial — flatters gold imagery)

| Token        | Hex       | Tailwind class            | Use                                     |
|--------------|-----------|---------------------------|-----------------------------------------|
| ivory        | `#F5F1EA` | `bg-ivory`, `text-ivory`  | Default page background                 |
| bone         | `#EAE3D5` | `bg-bone`                 | Section background, soft surface        |
| sand         | `#D9CFBE` | `border-sand`, `bg-sand`  | Hairline rules, dividers, muted surface |
| ink          | `#1F1A14` | `bg-ink`, `text-ink`      | Primary text on light, dark hero base   |
| espresso     | `#2A241D` | `text-espresso`           | Deep body text                          |
| muted        | `#7A6F60` | `text-muted`              | Secondary text, helper                  |
| gold         | `#B8893E` | `text-gold`, `bg-gold`    | THE accent — buttons, links, hover      |
| goldDeep     | `#946C2C` | `bg-goldDeep`             | Button hover, deeper accent             |
| goldSoft     | `#E2C994` | `text-goldSoft`           | Subtle accents on dark surfaces         |

Always use named tokens. Never hardcode hex in JSX.

## Contrast rules
- Body text on ivory: `text-espresso` or `text-ink`.
- On `bg-ink` (dark surfaces): `text-ivory` for body, `text-goldSoft` for accents.
- Muted helper text: `text-muted` — only on light surfaces, never on dark.
- Buttons: solid `bg-ink text-ivory hover:bg-goldDeep` OR outlined `border-ink text-ink hover:bg-ink hover:text-ivory`.
- Accent button: `bg-gold text-ivory hover:bg-goldDeep`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif, weights 400/500/600).
  - `font-serif` (mapped in tailwind config).
  - Product names: `uppercase tracking-[0.18em] text-sm` to `text-base` — wide letter-spacing.
- Body / UI: **Inter** (sans-serif).
  - `font-sans` (default).
- Editorial hero: serif, `text-5xl md:text-7xl`, normal weight, generous leading.

## Spacing & layout
- Page max width: `max-w-[1440px]`.
- Section padding: `py-20 md:py-28` for editorial sections, `py-12 md:py-16` for tighter ones.
- Horizontal padding: `px-5 md:px-10 lg:px-16`.
- Gutters between cards: `gap-6 md:gap-8`.
- Generous whitespace — never cram.

## Hairlines & dividers
- Use `border-sand` for thin rules. `border-t border-sand` strips between sections.
- Avoid heavy borders. Avoid box shadows unless very soft (`shadow-[0_8px_24px_rgba(31,26,20,0.06)]`).

## Motion
- Hover transitions: `transition duration-300 ease-out`.
- Image hover: subtle scale `group-hover:scale-[1.03]`.
- Underline links: animate width `transition-[width] duration-300`.
- No flashy animations. Everything subtle.

## Buttons
- Primary: `bg-ink text-ivory px-7 py-3.5 tracking-[0.18em] uppercase text-xs hover:bg-goldDeep transition`.
- Accent: `bg-gold text-ivory px-7 py-3.5 tracking-[0.18em] uppercase text-xs hover:bg-goldDeep transition`.
- Ghost/outlined: `border border-ink text-ink px-7 py-3.5 tracking-[0.18em] uppercase text-xs hover:bg-ink hover:text-ivory transition`.

## Imagery
- Warm-lit gold jewelry on dark/neutral editorial backgrounds.
- Use `data-strk-img` references — never hardcode URLs.
- Aspect ratios: hero `16x9` or `3x2`; product cards `3x4`; UGC reels `9x16`.

## Do / Don't
- DO use whitespace and silence as design.
- DO let imagery breathe.
- DON'T mix more than one accent color besides gold.
- DON'T use rounded-xl/2xl on everything — prefer `rounded-none` or `rounded-sm` for editorial feel.
- DON'T use drop-shadows on text.
