# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base with warm metallic accents. One confident direction, sitewide.

- `ink` (base background, deep warm near-black): `#14110F`
- `espresso` (secondary surface): `#1E1A17`
- `cream` (light editorial surface): `#F6F1EA`
- `sand` (soft neutral): `#E8DFD3`
- `gold` (primary accent / metallic): `#C9A24B`
- `gold-soft` (hover/lighter gold): `#D8B968`
- `champagne` (muted gold tint): `#E4D2A8`
- `stone` (muted body text on light): `#6B6258`
- `stone-light` (muted text on dark): `#A89F92`

Contrast rules:
- On `ink`/`espresso` backgrounds use `cream`/`champagne`/`gold` text. Never use `stone` on dark.
- On `cream`/`sand` backgrounds use `ink`/`stone` text. Never use `stone-light` on light.
- Gold accent is used sparingly: CTAs, hairline dividers, price emphasis, active states.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Nav links: uppercase, `tracking-[0.18em]`, small size (`text-xs`/`text-sm`).
- Hero headline: large serif, `text-5xl`–`text-7xl`, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-t border-white/10` (on dark) or `border-ink/10` (on light).
- Card gaps: `gap-6 md:gap-8`.

## Components
- Buttons: solid gold (`bg-gold text-ink hover:bg-gold-soft`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none or `rounded-sm`. Uppercase, tracked label. Subtle transition `transition-colors duration-300`.
- Product cards: image with hover second-image reveal, name uppercase serif, price in gold/ink. Soft shadow on hover.
- Pills (variant selector): `rounded-full border`, active = `bg-ink text-cream border-ink`.
- Inputs: underline or thin border, no heavy fills.

## Do's
- Use generous whitespace.
- Keep accent gold restrained.
- Use serif for emotional/editorial moments, sans for utility.
- Ensure strong contrast on every surface.

## Don'ts
- No loud gradients, no discount badges, no neon.
- No generic blue/purple. No `text-white/40` on light backgrounds.
- No heavy drop shadows; use soft, subtle shadows only.
- Do not mix serif and sans for the same role.
