# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Deep charcoal base with champagne gold accents. Think: candlelit editorial shoot, not a discount banner.

## Color Palette
| Token       | Hex       | Usage                                      |
|-------------|-----------|---------------------------------------------|
| `velvet`    | #1A1612   | Primary text, nav, headings                 |
| `obsidian`  | #0F0D0B   | Deepest backgrounds (hero overlay)          |
| `charcoal`  | #2C2520   | Dark card surfaces, footer                  |
| `mink`      | #4A3F38   | Borders, dividers on dark surfaces          |
| `stone`     | #8A7D74   | Secondary/muted text                        |
| `parchment` | #F5F0E8   | Light section backgrounds                   |
| `cream`     | #FAF7F2   | Page background                             |
| `champagne` | #C9A96E   | Primary accent — CTAs, highlights, icons    |
| `gold`      | #B8922A   | Deeper gold for hover states                |
| `blush`     | #E8D5B7   | Soft warm highlight, badge backgrounds      |
| `ivory`     | #FFFDF8   | Near-white text on dark backgrounds         |

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond) — weights 300–500
- **Body / UI**: `font-sans` (Manrope) — weights 300–600
- **Product names**: UPPERCASE, `tracking-widest2` (0.25em letter-spacing)
- **Section labels**: UPPERCASE, `tracking-widest` (0.1em), `text-stone`, `text-xs`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-6` internal padding

## Borders & Dividers
- Hairline dividers: `border-mink/30` or `border-champagne/20`
- Card borders: `border border-mink/20`
- Use `hairline` utility class for 0.5px borders

## Buttons
- **Primary (CTA)**: `bg-champagne text-velvet font-sans font-semibold tracking-widest uppercase text-xs px-8 py-3.5 hover:bg-gold transition-colors`
- **Outlined**: `border border-champagne text-champagne hover:bg-champagne hover:text-velvet`
- **Ghost**: `text-stone hover:text-velvet`
- No border-radius on primary buttons (sharp edges feel more premium) — use `rounded-none`

## Shadows
- Subtle: `shadow-sm` with warm tint
- Cards on hover: `shadow-lg shadow-velvet/10`

## Animations
- All transitions: `transition-all duration-400 ease-in-out`
- Hover image scale: `group-hover:scale-105`
- Cart drawer: slide in from right

## Do's
- Large editorial imagery (full-bleed hero, tall product cards)
- Thin hairline dividers between sections
- Serif for all emotional/brand copy
- Champagne gold as the ONLY accent color
- Generous negative space

## Don'ts
- No bright whites (#FFFFFF) — use ivory/cream instead
- No blue links or generic e-commerce styling
- No rounded pill buttons on primary CTAs
- No more than 2 font families
- No busy patterns or gradients (except subtle overlays on hero)
