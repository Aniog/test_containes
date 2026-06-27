# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle hover motion.

## Color Palette
A deep, refined espresso base with warm metallic gold accents and soft ivory
text. One confident direction, sitewide.

- `espresso` (base background): `#1A1410` — deep warm near-black
- `espresso-soft` (raised surfaces): `#241C16`
- `ivory` (primary text on dark): `#F5EFE6` — warm off-white
- `ivory-muted` (secondary text on dark): `#C9BBA9`
- `gold` (accent / CTAs / metallic): `#C9A24B` — warm antique gold
- `gold-soft` (hover / fills): `#D8B865`
- `stone` (light page sections): `#F7F3EC` — warm cream
- `stone-deep` (text on light): `#2A211A`
- `stone-muted` (secondary text on light): `#6B5E50`
- `hairline` (dividers): `rgba(201, 162, 75, 0.25)` on dark, `rgba(42, 33, 26, 0.12)` on light

Contrast: ivory on espresso and stone-deep on stone both pass WCAG AA.
Gold is used for accents and CTAs on dark backgrounds (sufficient contrast
for large text / buttons); never for small body text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`.

Font sizes: large editorial display headings (`text-4xl`–`text-6xl`), generous
line-height on serif headings (`leading-[1.1]`).

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-[hairline]`.
- Card gaps: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid gold bg, espresso text, `tracking-[0.15em]`,
  uppercase, `text-xs`, `px-8 py-4`, subtle hover lift + gold-soft.
- Secondary (outlined): transparent bg, 1px gold border, gold text, same
  tracking. Hover: gold bg + espresso text.
- Transitions: `transition-all duration-300`.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
Use the `data-strk-img` / `data-strk-bg` system with warm, specific queries.

## Do's
- Use serif for all headings and product names.
- Keep generous whitespace; let imagery breathe.
- Use hairline gold dividers between sections.
- Subtle, slow transitions (300ms).

## Don'ts
- No bright/discount reds or generic e-commerce blues.
- No heavy drop shadows; use soft, low-opacity shadows only.
- No loud gradients.
- Don't use gold for small body text (contrast).
- Don't stack single-column layouts on desktop.
