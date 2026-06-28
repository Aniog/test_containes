# Velmora Fine Jewelry — Visual Design System

Quiet luxury, editorial, warm. Premium demi-fine jewelry feel. Never loud, never discounty.

## Palette (named Tailwind colors)

Defined in `index.css` via `@theme`:

- `velmora-ink` `#0F0E0C` — primary dark (hero, footer, headlines on light)
- `velmora-charcoal` `#1A1714` — secondary dark
- `velmora-cream` `#F6F1E8` — page background
- `velmora-ivory` `#FBF8F2` — card surfaces, secondary background
- `velmora-bone` `#EFE7D9` — subtle warm tint
- `velmora-gold` `#B89B6E` — primary accent (muted antique gold, NOT bright)
- `velmora-gold-deep` `#8E7448` — accent hover / borders
- `velmora-taupe` `#8A8478` — muted body text on light
- `velmora-mist` `#C9C2B4` — hairline dividers, disabled
- `velmora-pearl` `#E6DFD0` — input borders on cream

Backgrounds:
- Light surfaces use `bg-velmora-cream` or `bg-velmora-ivory`.
- Dark surfaces use `bg-velmora-ink`.

## Typography

- Headings & product names: **Cormorant Garamond** (`font-serif`) — weights 400/500/600.
- UI / body: **Inter** (`font-sans`) — weights 300/400/500/600.

Style rules:
- Hero headlines: `font-serif font-light` with `tracking-tight`, italic accents allowed sparingly.
- Section eyebrows: `font-sans uppercase text-[11px] tracking-[0.28em] text-velmora-taupe`.
- Product names: ALWAYS uppercase, `font-sans font-medium tracking-[0.18em] text-[13px]`.
- Body copy: `font-sans text-[15px] leading-relaxed text-velmora-charcoal/80`.
- Prices: `font-sans font-normal tracking-wide text-velmora-ink`.

## Spacing & rhythm

- Generous whitespace. Sections vertical padding: `py-20 md:py-28 lg:py-36`.
- Page horizontal padding: `px-5 md:px-10 lg:px-16`.
- Max content width: `max-w-[1440px]`.
- Hairline divider: `h-px bg-velmora-ink/10` (light surfaces) or `bg-white/10` (dark).

## Buttons

- Primary (solid): `bg-velmora-ink text-velmora-cream hover:bg-velmora-charcoal px-7 py-3.5 text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-300` — no border radius beyond `rounded-none`. Optional `rounded-full` only for chip pills.
- Accent (gold): `bg-velmora-gold text-velmora-ink hover:bg-velmora-gold-deep hover:text-velmora-cream`.
- Outlined: `border border-velmora-ink text-velmora-ink hover:bg-velmora-ink hover:text-velmora-cream`.
- Ghost icon button: subtle hover `hover:text-velmora-gold-deep`.

Do NOT use bright primary blues, neon greens, or stock e-commerce reds for sales/discount badges.

## Imagery

- Warm-lit close-ups, gold jewelry on neutral/dark backgrounds.
- Use `data-strk-img` / `data-strk-bg` with descriptive nearby IDs.
- Product card aspect: `4x5` (portrait) for editorial feel.
- Hero: `16x9` desktop, taller on mobile via `object-cover`.

## Hover & transitions

- Cards: subtle image zoom `group-hover:scale-105 transition-transform duration-[800ms] ease-out`.
- Buttons: color transition 300ms.
- Hairline underline on links: animated gold underline from left.

## Don'ts

- ❌ Bright/saturated gold (#FFD700). Use muted antique gold only.
- ❌ Heavy borders or shadows. Prefer hairlines and very soft shadows.
- ❌ Generic "SALE!" badges, exclamation marks, multi-color promo banners.
- ❌ Rounded-2xl bubbly UI. Keep corners minimal (rounded-none or rounded-sm only).
- ❌ Low-contrast text on cream (e.g. light gold on cream). Always check contrast.
