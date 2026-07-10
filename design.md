# Velmora Fine Jewelry — Design System

## Brand Voice
Quiet luxury. Editorial. Warm. Premium demi-fine — never loud, never
discount-looking. The site should feel like a slow, considered browse through
a curated jewelry atelier: generous whitespace, hairline dividers, large
imagery, restrained gold accents, and serif-led typography.

## Direction
**Ivory + Espresso + Champagne.** A warm, editorial, light-leaning scheme
that flatters gold jewelry. Pages breathe on a cream/ivory canvas; deep
espresso sections (hero overlay, story split, newsletter) anchor the
experience; champagne gold is reserved for emphasis only.

## Color Tokens
| Token              | Hex       | Use                                           |
| ------------------ | --------- | --------------------------------------------- |
| `ivory`            | `#F7F1E8` | Primary page background                       |
| `ivory-soft`       | `#EFE7D9` | Card / alt section background                 |
| `espresso`         | `#1A120C` | Dark sections, hero overlay, footer           |
| `espresso-soft`    | `#2A1F1A` | Dark surface raised                           |
| `cocoa`            | `#3A2A1F` | Dark text on light, dark hover state          |
| `ink`              | `#2A1F1A` | Primary text on light                         |
| `muted`            | `#8A7B6F` | Secondary / helper text                       |
| `hairline`         | `#E5D8C7` | Borders, dividers                             |
| `champagne`        | `#B89466` | Accent — buttons, badges, key lines           |
| `champagne-soft`   | `#D9B888` | Hover / gold gradient mid                     |
| `champagne-deep`   | `#8C6E48` | Pressed / darker accent                       |
| `cream-glow`       | `#FBF7F0` | Highlights, gradients                         |

Always set an explicit foreground token for any custom surface.
- On `ivory` / `ivory-soft` → text must be `ink` or `cocoa`.
- On `espresso` / `espresso-soft` → text must be `ivory` or `cream-glow`.
- `muted` is for helper/secondary copy only and must stay above 4.5:1 contrast.

## Typography
- **Headings & display:** `Cormorant Garamond` (serif, weight 300/400/500).
- **Body & UI:** `Inter` (sans, weight 300/400/500/600).
- **Product names:** Inter, UPPERCASE, tracking `[0.18em]`, weight 500.
- **Eyebrow / small caps:** Inter, UPPERCASE, tracking `[0.22em]`, size 11–12px.
- **Body:** 15–16px / 1.6.
- **Display sizes:** H1 56–80px, H2 36–48px, H3 22–28px.
- Letter spacing is wide and intentional — never use tight tracking on
  display type. Product names feel like a fashion house: spaced out,
  uppercase, restrained.

## Spacing & Layout
- Max content width: `1280px` with `px-6 md:px-10 lg:px-16`.
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`.
- Hairlines: 1px `hairline` on light, `rgba(229,216,199,0.12)` on dark.
- Grid gaps: `gap-6 md:gap-8`.
- Use only the project palette — no random hex, no rainbow accents.

## Buttons
- **Primary (accent):** `bg-champagne text-espresso` with thin `1px`
  champagne border. Hover: deepen to `champagne-deep`. Uppercase eyebrow
  style label.
- **Secondary (outline):** `border border-ink/20 text-ink` on light,
  `border-ivory/30 text-ivory` on dark. Hover: fill `ink` / `ivory` and
  invert text.
- **Ghost / text link:** underline appears on hover from left, 1px
  `champagne` line.
- All buttons: `text-[11px] tracking-[0.22em] uppercase font-medium`,
  `px-7 py-4` desktop / `px-6 py-3.5` mobile. Subtle 200ms ease transitions.

## Imagery
- Warm gold jewelry on deep neutrals (espresso, taupe, smoke).
- Editorial framing — generous negative space, no busy patterns.
- Product placeholders are warm gradient SVGs that mimic museum lighting.
- All imagery treated as the hero; never crop aggressively on mobile.

## Do / Don't
**Do**
- Let pages breathe. Whitespace is luxury.
- Use hairline dividers between sections, not heavy borders.
- Animate subtly (200–400ms ease, opacity/transform only).
- Lean on the serif for emotion, the sans for utility.

**Don't**
- No neon colors, no gradients with rainbow stops, no glassmorphism.
- No big drop shadows on cards (only a 1px hairline + soft `0 1px 0`).
- No "BUY NOW" / discount badges / star-spangled banners.
- No emoji as UI elements.
