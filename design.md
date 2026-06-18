# Velmora Fine Jewelry — Visual Design System

A quiet-luxury, warm, editorial DTC jewelry storefront. Premium demi-fine gold.
Restrained, never loud. Generous whitespace, hairline dividers, refined hover states.

## Palette

Committed warm-editorial direction. Gold flatters against cream + espresso.

| Token         | Hex      | Tailwind name | Use                                                    |
|---------------|----------|---------------|--------------------------------------------------------|
| Porcelain     | #F6F1EA  | porcelain     | Page background                                        |
| Linen         | #EDE5D8  | linen         | Section surfaces, product card alt                     |
| Hairline      | #D9CDB8  | hairline      | Dividers, thin borders                                 |
| Gold          | #B08D57  | gold          | Accent — CTAs, links, focus rings, price highlights    |
| Gold-deep     | #8E6F3F  | gold-deep     | Hover state for gold                                   |
| Espresso      | #1F1A14  | espresso      | Body text, dark editorial sections                     |
| Espresso-soft | #2B241B  | espresso-soft | Dark section secondary surface                         |
| Mute          | #6B5E50  | mute          | Subhead, helper text                                   |
| Cream         | #F9F4EC  | cream         | Text/icons on dark sections                            |

Do NOT use Tailwind raw `gray-*`, `slate-*`, or generic palettes. Use the brand
tokens above. No hex literals in JSX — only the Tailwind names.

## Contrast rules

- Body text on porcelain/linen: `text-espresso` (always).
- Mute text on porcelain: `text-mute` (still readable, do not go lighter).
- Text on dark espresso section: `text-cream`. Mute on dark: `text-hairline`.
- Gold accent text on light: `text-gold` ok for small accent labels; for
  primary CTA text on gold buttons, use `text-cream` for readable contrast.
- Never put `text-hairline` on `bg-porcelain` (too low contrast).

## Typography

- Serif: **Cormorant Garamond** (`font-serif`). Used for h1/h2/h3, hero headline,
  brand wordmark, product names. Product names: `uppercase tracking-[0.2em]`.
- Sans: **Inter** (`font-sans`). Used for body, nav, buttons, UI, prices.
- Editorial scale:
  - Hero: `text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05]`
  - Section title: `text-3xl md:text-5xl font-serif font-light`
  - Product card title: `text-xs md:text-sm font-sans uppercase tracking-[0.2em]`
  - Body: `text-base leading-relaxed`
  - Eyebrow: `text-[11px] uppercase tracking-[0.3em] text-mute`

## Spacing & layout

- Section vertical rhythm: `py-20 md:py-28 lg:py-32`.
- Container: `max-w-7xl mx-auto px-5 md:px-8 lg:px-12`.
- Generous whitespace. Editorial — let elements breathe.
- Grids: `gap-6 md:gap-8 lg:gap-10`.

## Borders, dividers, shadows

- Hairline divider: `border-t border-hairline` (1px, never thicker for dividers).
- Card: NO heavy borders. Use subtle hover lift only.
- Shadow: `shadow-[0_1px_30px_-12px_rgba(31,26,20,0.18)]` for soft floating.
- Radius: keep tight — `rounded-none` for editorial cards, `rounded-full` for pills/buttons, `rounded-sm` for inputs.

## Buttons

Primary (gold, solid):
`bg-gold text-cream hover:bg-gold-deep transition-colors duration-300 px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium`

Outline (espresso):
`border border-espresso text-espresso hover:bg-espresso hover:text-cream transition-colors duration-300 px-8 py-3.5 text-xs uppercase tracking-[0.25em] font-medium`

Outline on dark:
`border border-cream text-cream hover:bg-cream hover:text-espresso transition-colors duration-300 ...`

## Hover & motion

- Image hover: scale `1.03` over 700ms ease-out, or cross-fade to alt image.
- Link hover: `text-gold` from `text-espresso`, 200ms.
- Add-to-cart reveal on card: fades in + slides up on hover (`opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0`).
- All transitions: `duration-300` or `duration-500`, easing default.

## Don'ts

- Don't use heavy gradients, drop-shadows, or "glassmorphism".
- Don't use bright reds, blues, or greens. Stay in the warm/neutral system.
- Don't use sale-style striped pricing or aggressive discount badges.
- Don't put low-contrast cream text on porcelain — always check legibility.
- Don't use generic stock graphics. All imagery is editorial gold-jewelry.
