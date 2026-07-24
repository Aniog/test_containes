# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (espresso near-black, warm): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `gold` (warm metallic accent): `#B08D57` — primary accent, buttons, hairlines, price emphasis
- `gold-deep`: `#8A6D3B` — hover/active states for gold
- `ivory` (page background): `#F7F3EC` — main background, warm off-white
- `cream`: `#EFE8DC` — card / section alt background
- `sand`: `#E4D9C8` — borders, dividers, muted surfaces
- `stone` (muted text): `#8A8077` — placeholder, meta text
- `white`: `#FFFFFF` — cards, drawer

Contrast: ink text on ivory/cream/white passes AA. Gold (#B08D57) is used for accents and small UI; gold text only on dark ink backgrounds (passes AA). On light backgrounds gold is used for fills/borders, not body text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), smaller size.
- Hero headline: serif, large, tight leading.
- Body: 15–16px, relaxed leading, muted ink-soft.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand`, 1px.
- Card radius: minimal — `rounded-none` or `rounded-sm` for editorial feel; buttons `rounded-none`.
- Soft shadows: `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`.

## Buttons
- Primary (accent): solid gold bg, white/ink text, uppercase, wide tracking, `px-8 py-3.5`, hover gold-deep.
- Secondary (outlined): transparent bg, ink or gold border, ink text, hover fills.
- Subtle transitions: `transition-all duration-300`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial hero. Product cards 3:4. Reels 9:16. Category tiles 4:5.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent gold restrained — buttons, small labels, prices emphasis.
- Uppercase wide-tracked labels for eyebrows and product names.
- Soft, slow hover transitions (300ms).

## Don'ts
- No bright/saturated colors. No discount-red badges. No heavy drop shadows.
- No rounded-full chunky buttons. No generic e-commerce blue.
- Don't use gold for body text on light backgrounds (low contrast).
- Don't crowd mobile layouts — single column where needed, readable type.
