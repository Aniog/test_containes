# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
warm, confident. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
A deep refined base (warm near-black) with warm metallic gold accents and soft
cream neutrals. Strong contrast for accessibility.

- `ink`        #14110F  — primary dark base (warm near-black), used for nav-solid bg, footer, text on cream
- `ink-soft`   #2A2420  — secondary dark surface
- `cream`      #F7F2EA  — primary light background (warm off-white)
- `cream-deep` #EFE7DA  — subtle section divider / card surface
- `sand`       #E3D7C4  — borders, hairline dividers, muted surfaces
- `gold`       #B08D57  — primary accent (warm metallic gold), buttons, links, price
- `gold-deep`  #8C6E3F  — hover / pressed accent
- `gold-soft`  #D9C29A  — soft accent fills, badges
- `muted`      #8A8074  — secondary text on cream
- `muted-dark` #A99C8B  — secondary text on dark

Semantic token pairs:
- text on cream: `ink` / `muted`
- text on ink:   `cream` / `muted-dark`
- accent:        `gold` (on ink or cream), `gold-deep` on hover

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names UPPERCASE with wide letter-spacing (tracking).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Display hero headline: Cormorant Garamond, large, light weight, tight leading.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-sand` 1px.
- Soft shadows: `shadow-[0_10px_40px_-12px_rgba(20,17,15,0.18)]`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`. Rounded-full,
  uppercase, wide tracking, `px-8 py-3.5`, text-sm.
- Secondary (outlined): `border border-ink text-ink` on cream, hover `bg-ink text-cream`.
- On dark sections: outlined `border border-cream/40 text-cream`.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` tagging system. Warm gold jewelry close-ups.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, prices, small highlights.
- Use hairline dividers and generous whitespace.
- Subtle hover transitions (duration-300, ease-out).

## Don'ts
- No loud gradients, no neon colors, no discount badges.
- No generic blue/purple. No black-on-pure-white.
- Don't mix many accent colors — gold is the only accent.
- Don't use sans-serif for headings.
