# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/charcoal) paired with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1C1916` — warm near-black for text, dark sections, footer
- `espresso`: `#2A2520` — secondary dark surface
- `cream`: `#F7F2EA` — primary light background, warm off-white
- `sand`: `#EDE4D6` — soft neutral surface, cards on light
- `champagne`: `#E8D9C0` — muted warm accent surface
- `gold`: `#B08D57` — primary accent (warm metallic gold) for buttons, links, highlights
- `gold-deep`: `#9A7544` — hover / pressed state of gold
- `stone`: `#8A8178` — muted secondary text on light
- `stone-light`: `#A89F94` — muted text on dark

Semantic token pairs (foreground/background):
- ink text on cream/sand backgrounds
- cream text on ink/espresso backgrounds
- gold accent on ink or cream

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif). Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (clean sans-serif). UI labels uppercase, tracked.
- Display hero sizes: `text-5xl`–`text-7xl` serif, tight leading.
- Body: `text-sm`–`text-base`, relaxed leading, muted stone for secondary.

Load fonts via Google Fonts in `index.html`.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-ink/10`.
- Soft shadows: `shadow-[0_10px_40px_-12px_rgba(28,25,22,0.18)]`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`, uppercase tracked label, `px-8 py-3.5`, subtle transition.
- Outlined: `border border-ink/30 text-ink`, hover `border-gold text-gold`.
- Minimal text link: uppercase tracked, underline-on-hover.

## Components
- Product cards: image with hover second-image reveal, name uppercase serif, price sans, quick "Add to Cart" overlay button.
- Pills (variant selector): rounded-full, `border`, active = `bg-ink text-cream`.
- Accordions: hairline borders, plus/minus icon, smooth expand.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, dividers.
- Maintain strong contrast (ink on cream, cream on ink).
- Generous whitespace; let imagery breathe.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No generic e-commerce clutter (badges, loud sale tags).
- No low-contrast text. No magic hex values outside this palette.
- Don't stack single-column layouts on desktop.
