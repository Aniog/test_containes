# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black espresso, used for footer, dark sections, primary text on light
- `cream` (light surface): `#F7F2EA` — warm off-white page background
- `sand` (secondary surface): `#EFE7DA` — slightly deeper warm neutral for cards/strips
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents, dividers
- `gold-soft` (hover/light accent): `#C9A876`
- `stone` (muted text): `#6B6258` — warm gray for secondary text
- `line` (hairline): `#E2D8C8` — warm hairline divider on light surfaces

Tailwind tokens (added to config):
- `ink`: #1A1714
- `cream`: #F7F2EA
- `sand`: #EFE7DA
- `gold`: #B08D57
- `gold-soft`: #C9A876
- `stone`: #6B6258
- `line`: #E2D8C8

Text contrast rules:
- On `cream`/`sand`: use `ink` for headings/body, `stone` for muted.
- On `ink`: use `cream` for headings/body, `gold-soft` for accents.
- Never use `stone` on `ink` (too low contrast) — use `cream/70` for muted on dark.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- Nav links: uppercase, tracking-wide, small (text-xs/sm).
- Buttons: uppercase, tracking-widest, text-xs/sm.

Font sizes (editorial scale):
- Hero headline: `text-5xl md:text-7xl` serif
- Section titles: `text-3xl md:text-4xl` serif
- Product names: `text-sm md:text-base` serif uppercase tracking-wide
- Body: `text-sm md:text-base` sans, leading-relaxed

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Generous gaps between grid items: `gap-6 md:gap-8`
- Hairline dividers: `border-line` `border-t`

## Buttons
- Primary (accent): solid `bg-ink text-cream` OR `bg-gold text-cream`, uppercase, tracking-widest, text-xs, py-4 px-8, hover opacity/translate.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- On dark sections: `bg-gold text-cream` or `border-cream text-cream`.
- Rounded: none or very subtle (`rounded-none` / `rounded-sm`) — premium, sharp editorial feel.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed).
- Product cards: 3x4 or 4x5 portrait, hover reveals second image.
- Reels: 9:16 vertical.
- Soft shadows only on cards/drawers: `shadow-sm`, `shadow-md`.

## Animations
- Subtle, slow transitions: `transition-all duration-500 ease-out`.
- Hover: image crossfade, slight scale on images (`hover:scale-105`), underline reveal on links.
- Drawer: slide-in from right.
- No bouncy/loud animations.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, dividers.
- Use hairline dividers between sections.
- Generous whitespace.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons (except small icon badges).
- No drop shadows on text.
- No generic e-commerce clutter (badges, sale tags everywhere).
- No low-contrast text (always verify foreground on background).
