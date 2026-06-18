# Velmora Fine Jewelry — Visual Design System

Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45.
Single confident direction: deep refined ink base + warm champagne gold accent + soft cream neutrals.

## Color palette (Tailwind named colors)

- `ink` (deep base, near-black warm charcoal): `#1A1714` → `bg-ink`, `text-ink`
- `ink-soft` (lighter warm charcoal for body): `#3A332D` → `text-ink-soft`
- `cream` (page surface, warm off-white): `#F6F1EA` → `bg-cream`
- `cream-deep` (cards / muted bands): `#EDE5D9` → `bg-cream-deep`
- `champagne` (accent gold, restrained): `#B89254` → `bg-champagne`, `text-champagne`
- `champagne-deep` (hover gold): `#9A7838`
- `hairline` (thin borders, 12% warm): `#D9CFC0` → `border-hairline`
- `mute` (helper text, low emphasis but still readable): `#7A6E60` → `text-mute`
- `bone` (cards over ink): `#F1E9DC`

Contrast rules:
- `text-ink` on `bg-cream` / `bg-cream-deep` / `bg-bone` — primary readable.
- `text-cream` on `bg-ink` — primary inverse.
- Never use `text-mute` on `bg-cream-deep` for important data — only for helper text.
- `text-champagne` on `bg-ink` is decorative only; do not use it for body copy.

## Typography

- Headings + product names: **Cormorant Garamond** (serif), weight 400/500.
- Body + UI: **Inter** (sans), weight 400/500/600.
- Product names: `font-serif uppercase tracking-[0.18em]`.
- Editorial display: `font-serif font-light` with generous leading.

Type scale (don't hardcode pixel sizes; use Tailwind):
- Display hero: `text-5xl md:text-7xl font-serif font-light`
- Section heading: `text-3xl md:text-5xl font-serif font-light`
- Product name (card): `text-sm tracking-[0.18em] uppercase font-serif`
- Body: `text-base text-ink-soft leading-relaxed`
- Eyebrow/label: `text-xs tracking-[0.3em] uppercase text-mute`

## Layout & spacing

- Generous whitespace. Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-hairline`. No heavy borders.
- Cards: `bg-bone` or `bg-cream-deep`, no shadow by default; subtle `shadow-[0_1px_0_rgba(26,23,20,0.04)]` only when needed.
- Hover: gentle, `transition-all duration-500 ease-out`.

## Buttons

- Primary (accent solid): `bg-champagne text-cream hover:bg-champagne-deep px-7 py-3 text-xs tracking-[0.25em] uppercase`.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- Ghost link: `text-ink underline-offset-8 hover:underline`.
- Pill (variant selectors): rounded-full, hairline border, selected = `bg-ink text-cream`.

## Imagery

- Warm-lit, editorial, product on warm neutrals or model close-ups.
- Use `data-strk-*` tagging system for stock images.
- Aspect ratios: hero `16x9`, product cards `3x4`, lifestyle `4x3`, reels `9x16`.

## Dos
- Commit to the cream + ink + champagne palette; keep accent rare and intentional.
- Use serif uppercase wide-tracked for product names and small labels.
- Use thin hairlines instead of boxes/heavy dividers.
- Mobile-first: stack with generous padding; use `md:` and `lg:` to expand to grids.

## Don'ts
- No neon or sale-red. No discount-store yellows.
- No multi-shadow card stacks. No drop shadows on text.
- No mixing more than two heading weights/styles per page.
- No hardcoded hex values in JSX — use Tailwind tokens.
