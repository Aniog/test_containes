# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant, never loud or discount-looking.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1F1A15` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2B2520` — warm dark brown-black for body text on light
- `gold` (accent): `#B08A4F` — refined warm metallic gold for buttons, links, accents, stars
- `gold-soft`: `#C9A86A` — lighter gold for hover / highlights
- `ivory` (page background): `#F7F3EC` — warm soft cream
- `sand` (secondary surface): `#EDE6DA` — slightly deeper warm neutral for cards/strips
- `stone` (muted text): `#8A8074` — warm gray for secondary text
- `line` (hairline): `#E2D9CB` — warm hairline dividers

Contrast: ink on ivory is high contrast. gold on espresso is high contrast. Never use gold text on ivory (low contrast) — use ink for text, gold only for accents/buttons/stars on light backgrounds.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase, `tracking-[0.15em]`, small (text-xs/sm), sans.
- Hero headline: serif, large, light weight, tight leading.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Cards: subtle, `bg-ivory` or `bg-sand`, soft shadow `shadow-[0_10px_40px_-20px_rgba(43,37,32,0.25)]`.

## Buttons
- Primary (accent): `bg-gold text-ivory`, uppercase tracking, hover `bg-gold-soft`, transition 300ms.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- No rounded-full chunky buttons; use `rounded-none` or subtle `rounded-sm` for editorial feel.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive queries referencing nearby text.

## Animations
- Subtle, slow transitions (300–500ms). Hover reveals second product image. Soft fade-ins. No bouncy/loud motion.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, stars, small labels, hairline accents.
- Ensure strong text contrast everywhere.

## Don'ts
- No bright/discount reds, no neon, no generic blue e-commerce palette.
- No gold text on light backgrounds for body copy.
- No heavy drop shadows or chunky rounded buttons.
