# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, generous whitespace, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
- **Base / Ink (deep espresso-charcoal):** `#1C1714` — primary dark surface, nav solid, footer
- **Cream (warm off-white):** `#F7F2EA` — page background, light sections
- **Sand (warm neutral):** `#EDE4D3` — secondary surfaces, dividers tint
- **Gold (refined metallic accent):** `#B08D57` — primary accent, buttons, links, hairlines
- **Gold-soft (lighter metallic):** `#C9A876` — hover states, subtle accents
- **Muted text:** `#6B5D4F` — secondary text on cream
- **Hairline:** `rgba(176,141,87,0.25)` — thin dividers

Tailwind named colors (added to config):
- `ink: #1C1714`
- `cream: #F7F2EA`
- `sand: #EDE4D3`
- `gold: #B08D57`
- `gold-soft: #C9A876`
- `muted: #6B5D4F`

## Typography
- **Headings / product names:** Cormorant Garamond (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- **Body / UI:** Inter (sans-serif), weights 300–600.
- Hero headline: serif, large, light weight, generous line-height.

## Buttons
- **Primary (accent):** solid `bg-gold text-cream`, hover `bg-gold-soft`, subtle transition, slight letter-spacing, uppercase small text.
- **Outline:** `border border-gold text-gold`, hover `bg-gold text-cream`.
- Rounded-none or minimal radius for editorial feel. Padding generous.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6`.
- Hairline dividers: `border-t border-gold/20`.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — mostly for CTAs, links, hairlines.
- Ensure strong contrast: cream text on ink, ink text on cream.
- Large editorial imagery, soft shadows (`shadow-sm`, `shadow-md`).
- Subtle transitions (`transition duration-300`).

## Don'ts
- No loud discount-style badges or bright reds.
- No generic e-commerce blue.
- No heavy shadows or rounded chunky buttons.
- No low-contrast text (e.g. gold text on cream without enough weight).
