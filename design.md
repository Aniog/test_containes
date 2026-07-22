# Velmora Fine Jewelry — Design System

## Direction
**"Gilded Noir"** — a deep, warm near-black base paired with soft champagne surfaces and brushed-gold accents. Quiet luxury: warm, editorial, restrained. Gold jewelry glows against the deep base; the scheme never feels like discount e-commerce. One confident direction, used consistently sitewide.

## Palette (Tailwind config names — never raw hex in class strings)
| Token | Hex | Usage |
|---|---|---|
| `noir` | #171310 | Page background (dark sections), primary text on light surfaces |
| `noir-soft` | #211B16 | Raised dark surfaces (cards, drawer, footer) |
| `noir-line` | #332A21 | Hairline borders on dark |
| `cream` | #F5EFE5 | Page background (light sections), primary text on dark surfaces |
| `cream-soft` | #EFE7D9 | Alt light surface (bands, chips) |
| `sand` | #A79B87 | Muted body text on dark |
| `taupe` | #6E6254 | Muted body text on light |
| `gold` | #C9A35C | Primary accent: CTAs, links on hover, stars, keylines |
| `gold-deep` | #A9823F | Accent hover / pressed |
| `gold-soft` | #E6D3AE | Soft accent washes, badge bg |

## Typography
- **Serif**: `Cormorant Garamond` (font-serif) — all headings, logo, product names, pull quotes, editorial captions. Weights 400–600, often italic for accents.
- **Sans**: `Manrope` (font-sans) — body copy, UI, buttons, prices, nav links.
- **Product names / nav / labels**: sans, UPPERCASE, wide tracking (`tracking-[0.18em]`–`[0.3em]`), small size (`text-xs`–`text-sm`).
- Headline scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, card titles `text-sm tracking widest uppercase`.

## Surfaces & rhythm
- Generous whitespace: section padding `py-20 md:py-28`; container `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-noir-line` (dark) or `border-noir/10` (light).
- Buttons: solid `bg-gold text-noir hover:bg-gold-deep` (uppercase, tracking wide, no rounded corners or `rounded-full` only for pills), or outlined `border border-gold text-gold hover:bg-gold hover:text-noir`. Transitions `duration-300`.
- Cards: no heavy shadow on dark; use hairline border + subtle `hover: -translate-y-1` and image zoom `scale-105 duration-700`.
- Rounded: minimal. `rounded-sm` max on cards; pill selectors `rounded-full`.
- Icons: Lucide, `w-4 h-4` / `w-5 h-5`, stroke as-is.

## Do / Don't
- Do: large editorial imagery, thin dividers, italic serif accents, muted micro-copy in uppercase tracking.
- Don't: bright saturated colors, loud sale badges, heavy drop shadows, gradients, default Tailwind palette colors (no `gray-*`, `amber-*` etc.), rounded bubbly cards.
- Don't put dark text on `gold` buttons without checking — always `text-noir` on `bg-gold`.
- Stars/ratings always `text-gold`. Muted text `text-sand` on dark, `text-taupe` on light — never lower contrast than that for readable copy.
