# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
warm, never loud or discount-looking. Generous whitespace, hairline dividers,
soft shadows, subtle hover transitions.

## Color Palette
A deep warm espresso base with warm metallic gold accents and soft ivory
surfaces. Strong contrast for accessibility.

- `espresso`  `#1C1714`  — deep warm near-black (primary dark surface, footer, hero overlay)
- `ink`       `#2A2320`  — warm charcoal (body text on light)
- `ivory`     `#F7F2EA`  — warm off-white (page background)
- `cream`     `#FBF8F2`  — lightest surface (cards)
- `sand`      `#E8DECF`  — warm neutral (borders, dividers, muted fills)
- `taupe`     `#8A7C6B`  — muted warm gray (secondary text)
- `gold`      `#B08D57`  — refined metallic gold (accent, buttons, links)
- `gold-deep` `#8C6E3F`  — deeper gold (hover, pressed)
- `champagne` `#D9C3A2`  — soft champagne (hover fills, highlights)

Tailwind tokens are defined via `@theme` in `src/index.css`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, small, wide tracking.

Fonts loaded via Google Fonts in `index.html`.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container max width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand/60`.

## Components
- Buttons: solid gold (`bg-gold text-ivory`) with hover to `gold-deep`;
  outlined variant `border border-ink text-ink` hover `bg-ink text-ivory`.
  Rounded-none or slightly rounded (`rounded-sm`). Uppercase, tracked.
- Cards: `bg-cream`, hairline border, soft shadow on hover.
- Inputs: underline or thin border, no heavy fills.

## Do's
- Use serif for headlines and product names.
- Keep accent gold restrained — buttons, small details, links.
- Large editorial imagery with warm tones.
- Subtle transitions (`transition duration-300`).

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No heavy shadows or thick borders.
- No generic e-commerce clutter; keep whitespace generous.
- No rounded-full buttons (except small icon chips).
