# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm editorial. Demi-fine 18K gold-plated jewelry.
Inspired by the editorial restraint of Mejuri, Aurate, Catbird.
NOT loud, NOT discount-y, NOT generic e-commerce.

## Palette (committed)
A warm cream-and-espresso editorial scheme that flatters gold.

- `--ivory` `#FAF7F2` — page background, the canvas
- `--cream` `#F2EDE5` — section accents, cards
- `--taupe` `#E5DCCD` — hairlines, soft surfaces
- `--mocha` `#8A7A66` — tertiary muted text
- `--espresso` `#2A211B` — primary text, strong contrast
- `--ink` `#13100E` — true near-black for headlines
- `--gold` `#B8935C` — accent, links, primary CTA fill, price emphasis
- `--gold-deep` `#9A7A45` — gold hover
- `--white` `#FFFFFF`

Tailwind utility shorthand:
- bg: `bg-[#FAF7F2]`, `bg-[#F2EDE5]`, `bg-[#13100E]`, `bg-[#B8935C]`
- text: `text-[#13100E]`, `text-[#2A211B]`, `text-[#8A7A66]`, `text-[#B8935C]`
- border: `border-[#E5DCCD]`, `border-[#B8935C]`

Contrast: espresso/ink on ivory passes AA easily. Gold (#B8935C) on
ivory is for accents, dividers, small icons, button fills with white
text — never small body text. White on ink/espresso passes. White on
gold passes for headline-sized text and large buttons (≥16px bold).

## Typography
- Headings & product names: **Cormorant Garamond** (serif) — 400/500/600
- Body/UI: **Inter** (sans) — 400/500/600
- Product names: UPPERCASE, tracking `tracking-[0.2em]`, font-weight 500

Scale:
- Display (hero): clamp(40px, 6vw, 72px), serif 400, line-height 1.05
- H1: 40–56px serif 400
- H2 section: 32–44px serif 400
- H3: 22–28px serif 500
- Eyebrow: 11px Inter 500 uppercase tracking-[0.3em] gold
- Body: 15px Inter 400 line-height 1.6
- UI/labels: 13px Inter 500 uppercase tracking-[0.15em]

## Spacing
Multiples of 4. Sections: py-20 to py-32 desktop, py-14 to py-20 mobile.
Max content width 1280px (max-w-7xl).

## Components

### Buttons
- Primary: solid gold `bg-[#B8935C]` with white text, hover deepens to
  `#9A7A45`. UPPERCASE Inter 500 tracking-[0.18em], 14px, padding
  `px-8 py-4`. No border-radius (square) or `rounded-none` for a sharp
  editorial look.
- Outline: 1px solid espresso text, transparent bg, hover fills espresso
  with white text.
- Ghost on dark hero: 1px white border, white text, transparent bg.

### Cards
- Product: white bg or no bg, 1px hairline `border-[#E5DCCD]` only on
  hover/focus or in shop grid. On homepage bestsellers, no border —
  rely on whitespace.
- Image area aspect-[4/5], object-cover, hover swap to second image with
  300ms fade.
- Quick add fades in on hover.

### Hairlines
1px `border-[#E5DCCD]` for dividers. Trust bar uses `border-y`.

### Hover transitions
- Image fade: 400ms ease-out
- Color/border: 200ms ease-out
- Subtle translate-y: -2px on cards
- Soft shadow: `shadow-[0_8px_30px_-12px_rgba(42,33,27,0.15)]`

### Forms
- Inputs: transparent bg, 1px bottom border `#E5DCCD`, focus border
  `#B8935C`, no rounded corners. UPPERCASE label above.

### Don'ts
- Don't use bright accent colors. Keep saturation low.
- Don't use heavy shadows. Keep elevation soft and warm.
- Don't use Inter for product names. Always Cormorant + uppercase.
- Don't use rounded-full on product cards. Keep rectangular and sharp.
- Don't use stock-photo emojis or starbursts. Keep ornament minimal.
