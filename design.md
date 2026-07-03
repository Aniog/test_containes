# Velmora — Design System

Single source of truth for visual decisions across the storefront. All
spacing, type, and color choices on the site must derive from this file.

## Direction
**Quiet luxury. Warm noir.** A confident, editorial, premium direction
inspired by fine-jewelry houses (Cartier, Pomellato, Mejuri editorial).
Deep warm base, brushed-gold metallic accents, ivory typography. The
opposite of generic Shopify and discount e-commerce.

We never look "loud". No big red sale badges, no rainbow gradients, no
emoji. Restraint is the brand.

## Palette (Tailwind tokens)

| Token            | Hex       | Role                                             |
|------------------|-----------|--------------------------------------------------|
| `ink.950`        | `#0E0B08` | Deepest page background, hero base                |
| `ink.900`        | `#16120E` | Primary section background                       |
| `ink.800`        | `#1F1A14` | Cards, soft elevated surfaces                    |
| `ink.700`        | `#2A241C` | Hairline dividers, subtle borders                |
| `ink.500`        | `#5A5044` | Disabled / faint labels                          |
| `ink.300`        | `#C7BBA8` | Muted body text on dark                          |
| `ink.200`        | `#E8DFD0` | Secondary text on dark                           |
| `ink.100`        | `#F5EFE6` | Primary text on dark (warm ivory)                |
| `gold.200`       | `#F0D9A8` | Subtle gold highlights                           |
| `gold.300`       | `#E8C68A` | Light gold text/icon                             |
| `gold.400`       | `#D4A857` | **Primary metallic accent** — buttons, links     |
| `gold.500`       | `#B8893E` | Hover state of gold-400, borders                 |
| `gold.600`       | `#8E6924` | Pressed / strong border                          |
| `rose.500`       | `#C97B6B` | Reserved secondary accent — used very rarely     |

Pairings to enforce for legibility:
- Text on `ink.950/900/800` → `ink.100` or `gold.300/400`
- Accent CTA background → `gold.400`; CTA text → `ink.950`
- Outline CTA border → `gold.500/600`; text → `gold.300/400`
- Hairline dividers → `ink.700` on dark, `ink.200` on light

## Typography

- **Display / headings / product names:** Cormorant Garamond
  (weights 300, 400, 500, 600). The serif voice. Used for h1, hero
  headline, section titles, product names, brand story quotes.
- **Body / UI:** Inter (weights 300, 400, 500, 600). Used for
  paragraphs, nav, buttons, prices, form labels.
- **Product name convention:** always `UPPERCASE` with `tracking-[0.18em]`,
  set in serif 500, size 18–22px.
- **Eyebrow / micro labels:** Inter 11–12px, uppercase, tracking
  `0.24em`, color `ink.300` or `gold.300`.

## Spacing & layout

- Page max-width: 1440px; content max-width: 1280px.
- Generous vertical rhythm: sections separated by 96–160px on desktop,
  64–96px on mobile.
- Editorial image aspect ratios: hero 16:9, category tiles 4:5,
  product cards 4:5, UGC reel 9:16.
- Use `px-6 md:px-10 lg:px-16` for page gutters.

## Buttons

| Variant     | Background | Text      | Border          | Hover                       |
|-------------|------------|-----------|-----------------|-----------------------------|
| `primary`   | `gold.400` | `ink.950` | none            | bg `gold.300`               |
| `outline`   | transparent| `gold.300`| 1px `gold.600`  | bg `ink.800`                |
| `ghost`     | transparent| `ink.100` | none            | text `gold.300`             |
| `dark`      | `ink.950`  | `ink.100` | 1px `ink.700`   | border `gold.500`           |

All buttons: `uppercase`, `tracking-[0.18em]`, `text-[11–12px]`, h ≈ 44px,
radius `9999px` (pill) for primary actions, radius `2px` (hairline) for
secondary. Subtle `transition-all duration-300 ease-out`.

## Hairlines & dividers
- Use 1px lines in `ink.700` on dark, `ink.200` on light. Never use heavy
  borders. No double borders, no dashed lines.

## Shadows
- `shadow-soft`: `0 30px 60px -30px rgba(0,0,0,0.6)` for elevated
  product cards.
- Avoid hard drop shadows elsewhere. Cards rely on hairline borders.

## Motion
- Default: `transition-all duration-300 ease-out`.
- Slow editorial: `duration-700 ease-out` for image crossfades.
- No bouncing, no springs, no playful easing.

## Imagery
- Always warm, low-key, editorial. Models with gold jewelry on warm
  skin tones, dark/neutral backdrops. Never white seamless, never
  stock-collage feel.
- Use the `data-strk-img` stock system. Query strings reference nearby
  text ids (e.g. `[hero-headline] [hero-subhead]`).

## Do
- Keep type on a clear hierarchy: huge serif headline → small sans
  eyebrow → sans body.
- Let imagery breathe. Never crowd a card.
- Use a single accent (gold) and one reserve (rose, rarely).
- Use thin hairlines to separate, not boxes around things.

## Don't
- No bright primary colors. No red/orange sale badges.
- No emoji.
- No `font-bold` over 600. No all-caps body text.
- No "Add to cart" looking like Amazon. No big colored CTAs other
  than `gold.400`.
- No carousels with auto-advance inside the hero. No popups on entry.
- No light-grey "Shopify default" backgrounds.
