# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — never loud, never discount-looking. A DTC storefront for women 25–45 buying for themselves or gifting.

## Color Palette

Primary base:
- `ink` — #1C1917 (near-black, warm charcoal; headings, footer)
- `cream` — #F9F7F4 (warm off-white; primary backgrounds)
- `taupe` — #D7CFC5 (muted warm gray; dividers, secondary backgrounds)

Accent / metallic:
- `gold` — #B8944A (warm antique gold; CTAs, links, badges, hover accents)
- `gold-hover` — #9C7A3A
- `gold-light` — #F3EAD6 (subtle gold tint backgrounds)

Supporting neutrals:
- `stone` — #8C8179 (body text, secondary text)
- `stone-light` — #A8A09A (muted labels)
- `warm-gray` — #EBE7E2 (subtle borders, hairlines)
- `rose-tint` — #F4EBE4 (warm editorial background option)

## Typography

Headings & product names:
- Font: Cormorant Garamond (Google Fonts)
- Weights: 400, 500, 600
- Product names: uppercase, `tracking-[0.18em]`, `text-sm` / `text-base`

Body & UI:
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600

## Spacing & Layout

- Max content width: `max-w-7xl` (1280px)
- Section vertical padding: `py-16 md:py-24`
- Horizontal page padding: `px-4 sm:px-6 lg:px-8`
- Hairline dividers: `border-warm-gray` at `border-b`
- Cards: subtle shadow `shadow-sm`, hover `shadow-md`, transition `duration-500`

## Components

Buttons:
- Primary: `bg-gold text-white uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-gold-hover transition`
- Secondary / outline: `border border-ink text-ink uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-ink hover:text-cream transition`
- Ghost link: underline offset, gold underline on hover.

Cards:
- Product card: image aspect 4:5, rounded-none or `rounded-sm`, hidden secondary image revealed on hover, quick-add overlay.
- Category tile: full-bleed image, label appears on hover with subtle overlay.

Forms:
- Inputs: `bg-white border border-warm-gray px-4 py-3 text-sm placeholder:text-stone-light focus:border-gold focus:outline-none`

## Imagery

Warm-lit gold jewelry on dark charcoal or warm neutral backgrounds. Editorial close-ups, soft shadows, shallow depth of field. Use `data-strk-img` tags referencing nearby copy; ratio 4:5 for products, 9:16 for UGC, 16:9 for hero.
