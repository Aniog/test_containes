# Velmora Fine Jewelry — Design System

## Brand mood
Quiet luxury. Warm. Editorial. Premium demi-fine — not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accents. Subtle hover transitions, soft shadows.

## Color palette (commit to ONE direction)

**Direction: warm cocoa + cream + champagne gold**

| Token | Hex | Use |
|---|---|---|
| `cocoa-900` | `#1A140F` | Deepest background, hero/footer dark |
| `cocoa-800` | `#241A14` | Primary dark surface (cards on dark) |
| `cocoa-700` | `#3A2A20` | Hairline on dark, dark borders |
| `cocoa-600` | `#5A4438` | Muted text on cream |
| `cream-50`  | `#FBF7F1` | Page background (light surface) |
| `cream-100` | `#F5EFE6` | Card/elevated surface, soft sections |
| `cream-200` | `#E8DFD2` | Hairline on light, borders, dividers |
| `cream-300` | `#D6C9B5` | Stronger hairline / disabled |
| `ink-900`   | `#1F1A14` | Primary text on cream |
| `ink-700`   | `#4A3F35` | Secondary text on cream |
| `gold-500`  | `#C9A86A` | Primary accent — champagne gold |
| `gold-600`  | `#B89256` | Accent hover |
| `gold-300`  | `#E5D4A8` | Soft gold tint / gold card backgrounds |
| `white`     | `#FFFFFF` | Pure white (rare, mostly for high contrast on dark) |

**Contrast rules**
- Headings & body text on `cream-50` / `cream-100`: `ink-900` (passes AA large & body)
- Text on dark surfaces (`cocoa-800/900`): `cream-50` (passes AA)
- Accent text/buttons: `gold-500` is decorative only. Buttons using gold must have dark text (`ink-900`) for legibility.
- Hairlines: `cream-200` on light, `cocoa-700` on dark. Never grey.

## Typography

- **Headings (display + serif):** `Cormorant Garamond` (300 Light, 400 Regular, 500 Medium). Hero headlines use 300 with tight tracking.
- **Body / UI:** `Inter` (300, 400, 500, 600).
- **Product names:** Inter, UPPERCASE, letter-spacing `0.16em`, weight 500, size ~12–13px.
- **Section titles (editorial):** Cormorant 300, 40–64px desktop, with 0.01em letter-spacing.
- **Buttons:** Inter 500, UPPERCASE, letter-spacing `0.18em`, size 11–12px.
- **No more than 2 fonts.** No italics in UI chrome. Italics only in editorial pull-quotes.

## Spacing
- Section vertical padding: 96–128px desktop, 64–80px mobile.
- Container max width: 1440px, side padding 32px desktop, 20px mobile.
- Generous gap between hero & next section: 96px+.
- Card aspect ratios: product cards `4/5`, category tiles `1/1`, UGC vertical `9/16`, hero full-bleed `16/9` to `21/9`.

## Components

- **Buttons (premium feel)**
  - Primary (gold solid): `bg-gold-500` text `ink-900`, hover `bg-gold-600`, transition 250ms ease.
  - Outline: 1px `ink-900` border, transparent bg, hover fill `ink-900` text `cream-50`.
  - Ghost / link: underlined, `ink-900` text, `gold-500` underline on hover.
  - All buttons: `tracking-[0.18em]`, UPPERCASE, no border-radius > 2px (rounded-none or rounded-sm only — luxury is sharp).
  - Padding: `px-7 py-4` desktop, `px-6 py-3.5` mobile.

- **Hairlines**: 1px solid `cream-200` on light, `cocoa-700` on dark. Use `<div>` with `h-px` not borders on container.

- **Shadows**: very soft, never heavy. `shadow-[0_2px_24px_rgba(26,20,15,0.06)]` for cards on cream. Never drop shadows on dark surfaces — use subtle inner highlights instead.

- **Product cards**:
  - Image area `aspect-[4/5]`, soft cream background, gold jewelry on warm dark gradient SVG.
  - On hover: reveal second product image (cross-fade 400ms), show "Quick Add" pill button.
  - Below image: product name (UPPERCASE Inter), price (`ink-700`).
  - Card itself: no border, no shadow, just whitespace.

- **Navbar**:
  - Default: transparent over hero, `backdrop-blur` on scroll, transitions to `bg-cream-50/95` once scrolled past 80px.
  - Height 72px desktop, 64px mobile.
  - Logo "VELMORA" in Cormorant 500, letter-spacing 0.3em, size 22px.

- **Inputs**:
  - Underline-only style: 1px bottom border `ink-900`, no other borders.
  - Padding 12px 0. Placeholder `ink-700/50`.
  - Focus: bottom border `gold-500`, no glow.

## Imagery
- Hero/UGC/category tiles: stock via `data-strk-img` (editorial close-ups of women wearing gold jewelry on warm/neutral backgrounds).
- Product images: hand-drawn SVG mockups (warm dark gradient + gold geometric jewelry silhouettes) so we never depend on broken URLs and visuals stay cohesive.

## Do
- Commit to warm dark + cream + champagne gold. No other accent colors.
- Use hairlines, not borders.
- Use generous whitespace, large type, and editorial layout.
- Animate subtly (250–400ms ease-out).
- Keep product cards clean and typographic.

## Don't
- No neon, no bright pastels, no harsh shadows.
- No rounded pill buttons.
- No emoji, no playful illustrations.
- No "BUY NOW" red, no urgency gimmicks.
- No multi-color gradients (only warm dark gradient on product images).
- No generic stock-photo smiley models — editorial close-ups only.
