# Velmora Fine Jewelry — Design System

A high-end DTC jewelry storefront. Mood: **quiet luxury, warm, editorial**.

## Color Palette
The palette is built on warm, refined neutrals that flatter gold jewelry. Accent gold is muted and brushed — never garish.

| Token | Hex | Usage |
| --- | --- | --- |
| `cream` | `#F7F2E9` | Main canvas (page background) |
| `ivory` | `#FBF7F0` | Cards, soft sections |
| `espresso` | `#1A140F` | Dark editorial sections, hero backdrop, footer |
| `espresso-soft` | `#231B14` | Elevated dark surfaces |
| `charcoal` | `#2A241D` | Primary text on light |
| `ink` | `#15110C` | Headings on light |
| `gold` | `#B8924A` | Brand accent, CTAs, hairlines on dark |
| `gold-soft` | `#D6B680` | Hover gold, muted gold |
| `taupe` | `#A89B8C` | Secondary / muted text |
| `hairline` | `#E6DDC9` | Borders on light |
| `bone` | `#EFE6D3` | Subtle alt sections |

**Contrast & accessibility:** body text uses `charcoal` on `cream` (≈13:1) — well above WCAG AA. Muted text uses `taupe` only when paired with strong hierarchy; never for actionable UI. Accent gold `B8924A` is used as background for buttons with `cream` foreground (≈4.7:1) and for hairlines/icons only — never for primary text on white.

## Typography
Two-family system — editorial but readable.

- **Display / Headings / Product names:** Cormorant Garamond (serif, 300–600). Product names set in **UPPERCASE** with `tracking-[0.2em]` and `font-light`.
- **Body / UI:** Inter (sans, 300–500). 14–15px body, 12–13px small.

Weights used: `300 light`, `400 regular`, `500 medium`. **Never bold** (no `font-bold`) — keep quiet luxury.

## Spacing & Layout
- Generous whitespace. Section vertical rhythm: `py-20 md:py-28 lg:py-32` for editorial sections, `py-12 md:py-16` for tighter sections.
- Max content width: `max-w-7xl` for grids, `max-w-4xl` for editorial text.
- Container horizontal: `px-6 md:px-10 lg:px-16`.

## Hairlines & Dividers
- All dividers are 1px (`border-hairline` / `border-espresso/15` on light, `border-cream/15` on dark).
- Use `border-t border-hairline` for section breaks — never heavy 2-4px borders.

## Buttons
- **Primary (accent):** solid `bg-espresso text-cream` (or `bg-gold text-espresso` for emphasis), uppercase, `tracking-[0.2em]`, `text-xs`, `py-4`, hover: subtle color shift with `transition-colors duration-300`. No drop shadow.
- **Outlined:** transparent with `border` in current text color, fills on hover.
- **No rounded-pill buttons** — corners are `rounded-none` (or very subtle `rounded-sm`).
- Add to Cart buttons stretch full-width on PDP.

## Cards & Shadows
- Product cards: no box shadow by default. On hover, image scale to 1.04 (transform), secondary image cross-fades in.
- Soft shadow reserved for floating elements (cart drawer, image popups): `shadow-[0_20px_60px_-30px_rgba(26,20,15,0.4)]`.

## Imagery
- Editorial close-ups, warm-lit gold jewelry on dark/neutral/ivory backdrops.
- Always 4:5 portrait for product cards, 3:4 for category tiles, 9:16 for UGC reels, 16:9 for editorial sections.

## Motion
- Subtle, never bouncy. Default duration `300–500ms` with `ease-out`.
- Image cross-fade: 400ms. Nav scroll: 200ms. Hover image scale: 500ms.

## Do
- Use Cormorant Garamond for product names and any serif moment.
- Keep product names UPPERCASE with wide letter-spacing.
- Use thin hairlines, not heavy borders.
- Show generous whitespace around editorial imagery.
- Use warm-gold accent only — never blue/red discount colors.

## Don't
- No discount badges, no percentage tags, no loud sale colors.
- No "bold" weights, no `font-extrabold` — quiet luxury.
- No emoji in the UI copy.
- No pure black (#000) — use `ink`/`espresso` for warmth.
- No stock photos of generic smiling women — use editorial jewelry imagery.
- No blue links — interactive text is `underline underline-offset-4` or accent-gold.
