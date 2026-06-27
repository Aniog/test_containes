# Velmora Fine Jewelry — Design System

Editorial, quiet-luxury demi-fine jewelry storefront. Warm, restrained, premium.
Never discount-looking, never generic e-commerce.

## Palette

Commit to a warm cream + deep espresso + champagne gold scheme. Gold-on-gold should
always sit on warm neutrals or rich dark surfaces (never on bright white).

| Token              | Hex      | Tailwind class             | Use                                              |
|--------------------|----------|----------------------------|--------------------------------------------------|
| `cream`            | #F6F1EA  | `bg-cream` / `text-cream`  | Primary page background, light surfaces          |
| `cream-soft`       | #EFE7DC  | `bg-cream-soft`            | Subtle cards, alt rows, accent blocks            |
| `espresso`         | #1B1714  | `text-espresso` / `bg-…`   | Primary body text on cream                       |
| `ink`              | #0F0D0B  | `bg-ink`                   | Dark hero/footer surfaces                        |
| `gold`             | #B8945F  | `text-gold` / `bg-gold`    | Accent: prices, hairlines, buttons, hover        |
| `gold-deep`        | #8E6F44  | `text-gold-deep`           | Gold on cream when contrast required             |
| `muted`            | #7A6E63  | `text-muted`               | Captions, helper text                            |
| `hairline`         | #D9CDBD  | `border-hairline`          | Thin dividers, input borders                     |
| `hairline-ink`     | #2A241F  | `border-hairline-ink`      | Dividers on dark surfaces                        |

Do:
- Use `bg-cream` as the default page background.
- Use `bg-ink` for hero, footer, and one feature section to anchor the page.
- Use `text-gold` only for accents (prices, single keywords, hover states, icons).
- Always pair text with explicit `text-espresso` / `text-cream` / `text-muted`.

Don't:
- Use pure white (`#fff`) or pure black backgrounds.
- Use gold for large blocks of body text — contrast is too low.
- Use bright/saturated colors. Stay within warm neutrals + champagne gold.

## Typography

- Serif (headings, product names, editorial): **Cormorant Garamond** (300/400/500)
- Sans (body, UI, buttons, nav): **Inter** (300/400/500/600)

Classes:
- `font-serif` → Cormorant
- `font-sans` → Inter (default)

Scale:
- Hero / display: `font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tight`
- Section heading: `font-serif font-light text-3xl md:text-5xl`
- Product card name: `font-sans text-xs md:text-sm uppercase tracking-[0.22em] text-espresso`
- Body: `font-sans text-sm md:text-base text-espresso/80 leading-relaxed`
- Eyebrow / meta: `font-sans text-[11px] uppercase tracking-[0.3em] text-muted`

Product names are ALWAYS uppercase with `tracking-[0.18em]` to `tracking-[0.24em]`.

## Layout

- Generous whitespace. Section vertical padding: `py-20 md:py-28 lg:py-32`.
- Page max width: `max-w-[1400px] mx-auto px-5 md:px-10`.
- Editorial imagery: large, full-bleed where possible, 4:5 or 3:4 portraits for product, 16:9 for hero.
- Thin hairline dividers (`border-t border-hairline`) rather than heavy blocks.

## Components

Buttons:
- Primary (accent): `bg-gold text-cream hover:bg-gold-deep` with `px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium`.
- Outline (on cream): `border border-espresso text-espresso hover:bg-espresso hover:text-cream`.
- Outline (on dark): `border border-cream/40 text-cream hover:bg-cream hover:text-espresso`.
- Ghost link: `text-espresso hover:text-gold-deep underline-offset-8 hover:underline`.

Cards:
- Product card: no card chrome — let the image breathe; image on `bg-cream-soft` with a 1px hairline only on hover for the quick-add button.
- Shadows: avoid. Use restraint. Only soft shadow on the cart drawer / sticky elements.

Transitions:
- All interactive: `transition-all duration-500 ease-out`.
- Image hover swap: opacity crossfade 500ms.
- Buttons: 300ms color transition.

Iconography:
- Lucide. Stroke `1.25` to `1.5`. Size `w-5 h-5` default.

## Accessibility

- Body text always ≥ AA contrast: espresso on cream passes easily.
- Never use gold for body paragraphs.
- Buttons clearly visible — gold (#B8945F) on cream passes for large text/UI.
- Focus rings: `focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2`.
