# Velmora Fine Jewelry — Visual Design System

## Direction
"Modern heirloom" — warm ivory editorial canvas, deep espresso (near-black warm brown) ink, and brushed antique-gold metallic accents. Quiet luxury, warm, editorial. Never loud, never discount-looking.

## Palette (Tailwind theme colors)
| Token | Hex | Usage |
|---|---|---|
| `cream` | #FAF5EB | Page background, light surfaces |
| `sand` | #F3EBDC | Alt section background, subtle fills |
| `espresso` | #221910 | Primary text, dark footer/nav-solid, buttons |
| `mocha` | #5C4A37 | Secondary text |
| `taupe` | #97887A | Muted captions, meta text |
| `gold` | #A9814B | Primary accent: CTAs, hover states, stars, links |
| `gold-deep` | #8C6A38 | Accent hover / darker gold |
| `champagne` | #E9DBC2 | Hairline borders, dividers |
| `blush` | #E7D7CB | Rare soft accent (newsletter tint) |

## Typography
- Display serif: **Cormorant Garamond** — `font-display`. Headlines, logo, product names, pull quotes.
- Body sans: **Manrope** — `font-body`. UI, prices, buttons, body copy.
- Product names: uppercase, tracking `[0.18em]–[0.25em]`, serif, medium.
- UI labels/eyebrows: sans, uppercase, `text-[11px] tracking-[0.3em]`.
- Body copy: `text-sm–base`, relaxed leading, `text-mocha`.

## Surfaces & Structure
- Hairline dividers: `border-champagne`, 1px.
- Cards: no heavy boxes — image-forward, text below on cream. Soft shadow only on hover: `shadow-[0_24px_60px_-24px_rgba(34,25,16,0.25)]`.
- Buttons: solid gold (`bg-gold hover:bg-gold-deep text-cream`) or hairline outline (`border-espresso/30 hover:border-espresso`). Sharp corners or `rounded-full` for pills — no default 8px radius on premium buttons.
- Generous whitespace: sections `py-20 md:py-28`, container `max-w-7xl px-5 md:px-8`.

## Motion
- Subtle only: `transition-all duration-300/500 ease-out`.
- Image hover: `scale-[1.04]`, second-image crossfade on product cards.
- Reveal on scroll: fade + 24px rise, staggered.
- Nav: transparent over hero → solid cream + hairline border after 40px scroll.

## Do's
- Pair gold text only on espresso or cream backgrounds with strong contrast.
- Use champagne hairlines to separate sections instead of big background shifts.
- Keep imagery warm: gold jewelry on espresso/neutral backdrops, skin tones.

## Don'ts
- No pure black (#000) or pure white (#fff) surfaces — use espresso/cream.
- No bright saturated accent colors, no red sale badges.
- No default browser-blue links, no heavy drop shadows, no gradients on text.
- No magic hex values in class strings — always use the named tokens above.
