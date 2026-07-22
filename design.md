# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry that feels collected,
not catalogued. Restrained, confident, feminine. Inspired by editorial
fashion magazines, fine jewelry boutiques, and quiet Sunday mornings.

## Color Palette
A warm, refined ivory + espresso + champagne gold system. No pure black,
no pure white, no neon. All colors are slightly desaturated and warm.

| Token                | Hex      | Usage                                       |
|----------------------|----------|---------------------------------------------|
| `ivory`              | #F7F1E8  | Primary page background                     |
| `ivory-soft`         | #FAF6EE  | Subtle alt background, card sections        |
| `cream`              | #EFE6D6  | Borders, dividers, badge bg                 |
| `espresso`           | #1F1611  | Primary text, dark surfaces                 |
| `espresso-soft`      | #3A2C22  | Secondary text on light                     |
| `muted`              | #8A7A66  | Tertiary text, captions, helper             |
| `gold`               | #B89968  | Brand accent, primary CTA, links            |
| `gold-deep`          | #8A6E3F  | CTA hover, strong gold                     |
| `gold-soft`          | #D9C9A8  | Soft gold tint, accent panels               |
| `white`              | #FFFFFF  | Cards on ivory, drawer background           |

Contrast rules:
- `espresso` on `ivory`  ->  AAA
- `white` on `espresso`  ->  AAA
- `espresso` on `white`  ->  AAA
- `gold` is decorative only; never used for body text or essential UI.
- `muted` only for captions/secondary meta; never for product names or prices.

## Typography
Two families. Serif for editorial/headings, sans for everything else.

### Headings — `Cormorant Garamond` (300, 400, 500, 600, 700)
- Italic available and used liberally for editorial feel.
- H1 (hero):  56–96px, weight 400, tracking tight, line-height 1.02.
- H2 (section): 40–56px, weight 400, line-height 1.08.
- H3 (card): 22–28px, weight 500.
- Product names: UPPERCASE, weight 500, tracking 0.18em (very wide).

### Body / UI — `Inter` (300, 400, 500, 600, 700)
- Body: 15–16px, weight 400, line-height 1.65.
- UI: 13–14px, weight 500, tracking 0.06em for uppercase labels.
- Prices: 15px, weight 500, tabular-nums.

## Spacing
Generous, editorial whitespace.
- Section vertical padding: 96–160px desktop, 64–96px mobile.
- Card padding: 24–40px.
- Gap between products: 24–40px.
- Container max-width: 1440px, side padding 24px mobile / 48px tablet / 80px desktop.

## Borders & Dividers
- Hairline 1px dividers in `cream` (#EFE6D6) or `muted/40`.
- No heavy borders or boxes. Cards rely on whitespace and subtle shadows.

## Shadows
- `shadow-soft`:   0 4px 20px rgba(31, 22, 17, 0.06)
- `shadow-soft-lg`: 0 12px 40px rgba(31, 22, 17, 0.08)
- `shadow-drawer`:  -20px 0 60px rgba(31, 22, 17, 0.12)

No bright drop shadows, no neon glows.

## Buttons
- **Primary**: solid `espresso` bg, `ivory` text, uppercase, tracking 0.2em, 13px, py 4 px 10. Hover: lift 1px + `espresso-soft` bg.
- **Accent**:  solid `gold` bg, `white` text. Hover: `gold-deep`.
- **Ghost/outline**: transparent bg, 1px `espresso` border, `espresso` text. Hover: `espresso` bg + `ivory` text.
- **Text link**: underline-on-hover, `gold` color.
- All buttons: subtle 0.2s ease, no bouncy springs.

## Motion
- Subtle, restrained, editorial. No big bouncy springs.
- Hover transitions: 200–300ms ease-out.
- Image fade/swap on product card hover: opacity + small translate.
- Section reveals on scroll: simple opacity 0→1 + translateY 12px→0, 600ms ease-out.
- Drawer slide-in: 350ms cubic-bezier(0.32, 0.72, 0, 1).
- Hero/carousel: very slow fade, 5–6s per slide.

## Imagery
- Warm, low-key lighting. Gold jewelry on dark espresso / warm taupe / cream linen backdrops.
- Models with soft natural skin, never cold studio white.
- Lifestyle context: marble, linen, soft daylight, hands holding jewelry, ear/neck close-ups.
- No gray neutral backgrounds, no e-commerce white-box aesthetic.

## Do
- Use serif italic in headlines for editorial lift.
- Use UPPERCASE + wide tracking for product names and section labels.
- Lean on whitespace; let the imagery breathe.
- Pair warm `gold` accent with deep `espresso` for richness.
- Use hairline dividers instead of boxes.
- Use 9:16 vertical aspect for UGC/reel cards.

## Don't
- Don't use bright/electric colors, discount red, or neon.
- Don't use pure black `#000` or pure white `#FFF` for body text.
- Don't use Tailwind's default cool blue for links.
- Don't use stocky sans-serif for product names.
- Don't use large drop shadows or glassmorphism.
- Don't use emoji icons — Lucide line icons only.
- Don't show a "sale!" badge or discount language anywhere.
