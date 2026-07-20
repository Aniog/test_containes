# Velmora Fine Jewelry — Visual Identity

## Brand
- Mood: quiet luxury, warm, editorial, premium-but-accessible.
- Not loud, not discount, not generic e-commerce.
- Demographic: women 25–45, gifting + self-purchase.

## Color Palette (one confident direction: "Warm Editorial")
- **ivory** `#F6F0E6` — primary background, the "page"
- **bone** `#FAF6EE` — surface (cards, drawers)
- **sand** `#E5DCC9` — soft sections, dividers
- **taupe** `#B8A78A` — muted UI text on dark
- **brass** `#B08D5A` — restrained gold accent (buttons, hairlines, logo)
- **espresso** `#1F1A14` — primary text / deep base
- **noir** `#100D09` — deepest, for footer and high-contrast

Contrast targets (WCAG AA+):
- `#1F1A14` on `#F6F0E6` ≥ 12:1 (AAA)
- `#F6F0E6` on `#1F1A14` ≥ 12:1 (AAA)
- `#B08D5A` on `#F6F0E6` ≈ 3.5:1 — use only for non-text accents or large bold labels
- Body text never uses brass on ivory. Use espresso for text.

## Typography
- **Cormorant Garamond** (Google Fonts) — display + product names.
- **Inter** (Google Fonts) — body, UI, navigation.
- Product names: UPPERCASE, letter-spacing `0.18em` to `0.28em`.
- Hero headline: 4xl–7xl, weight 400 (serif default), leading tight.
- Body: text-sm to text-base, leading-relaxed, color `espresso/80`.

## Layout & Spacing
- Generous whitespace. Section padding: `py-20 md:py-28 lg:py-32`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: 1px, color `sand`, no boxy borders.
- Cards: no heavy borders. Use whitespace + subtle shadow on hover only.

## Buttons
- **Primary (Accent)**: solid `espresso` text on `ivory`, or `ivory` text on `espresso`. Thin border. `px-7 py-3.5`. Tracking `0.18em`. UPPERCASE. Hover: subtle darken + lift 1px.
- **Outlined**: transparent with `1px border-espresso/40`, hover fills `espresso` with `ivory` text.
- **Text link**: underline-offset-4, hover underline.

## Motion
- Default easing: 300–500ms, `cubic-bezier(0.4, 0, 0.2, 1)`.
- Hover: opacity / transform only. Never layout-shifting.
- Cart drawer: translate-x slide 400ms.
- Nav: background-color fade 200ms on scroll.
- Image card hover: scale second image 1.04, fade in 400ms.

## Do
- Use Cormorant Garamond for all product names and editorial headings.
- Use uppercase + wide tracking for product names and CTAs.
- Let images breathe (large, no crop on warm backgrounds).
- Keep accents restrained — brass is a punctuation, not a flood.

## Don't
- No bright primary blues / reds / saturated yellows.
- No drop shadows on text.
- No bright discount badges or "SALE" red text.
- No emoji icons in product copy.
- No neon, no gradients with multiple stops, no busy textures.
