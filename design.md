# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Restrained, confident, never loud or discount-feeling.

## Color Palette
Commit to one warm, editorial direction across the entire site.

| Token | Hex | Use |
| --- | --- | --- |
| `cream` (base) | `#F6F0E6` | Primary page background, hero overlay panels |
| `cream-deep` | `#EFE6D6` | Subtle alternating section background |
| `sand` | `#E2D5BF` | Soft surface for cards / hover state |
| `taupe` (border) | `#D5C7B0` | Hairline borders, dividers |
| `espresso` (text) | `#1B130C` | Primary text, body |
| `espresso-soft` | `#3B2D21` | Secondary text on cream |
| `mink` | `#6B5B49` | Muted captions, helper text |
| `noir` (deep surface) | `#1B130C` | Dark hero, newsletter, footer |
| `noir-soft` | `#2A1F18` | Slightly lighter dark section |
| `champagne` (accent) | `#B69960` | CTA buttons, icons, links on cream |
| `champagne-soft` | `#D4B988` | Hover state for accent |
| `bone` (text on dark) | `#F1E8D8` | Headings on dark surfaces |
| `bone-soft` | `#C7B89D` | Body text on dark surfaces |

Never use blue, neon, or saturated colors. Never use pure white or pure black.

## Typography
- **Headings & product names**: Cormorant Garamond (serif, weights 400/500/600)
- **Body & UI**: Inter (sans-serif, weights 300/400/500/600)
- **Product names**: UPPERCASE, letter-spacing 0.18em, weight 500
- **Section labels (kicker)**: Inter, 11px, UPPERCASE, letter-spacing 0.3em, weight 500
- **Editorial body**: Cormorant Garamond 400, line-height 1.7

## Buttons
- **Primary (on cream)**: bg `champagne`, text `#FFFFFF`, hover `champagne-soft`. Pill, generous padding (px-9 py-4), tracking-wide, 12–13px text.
- **Primary (on dark)**: bg `bone`, text `espresso`, hover `#FFFFFF`.
- **Outlined**: 1px border `espresso` (or `bone` on dark), transparent bg, hover bg ~6% of border color.
- **Underline link**: thin 1px underline with offset, hover expands to thicker underline.

## Spacing
- Generous. Section padding 96–128px desktop, 64–80px mobile.
- Inner max-width 1280px, with horizontal padding 24px mobile / 48px tablet / 64px desktop.
- Product grid gap 24–32px.

## Borders & Shadows
- Hairline 1px borders in `taupe` for cards, dividers, accordions.
- Soft shadows: `0 8px 30px -12px rgba(27, 19, 12, 0.18)` (premium, not harsh).
- No thick borders. No drop shadows on hover (use subtle scale/translate instead).

## Imagery
- Editorial gold jewelry photography: warm-lit close-ups on deep neutral or dark backgrounds.
- Soft natural skin tones. 9:16 vertical for UGC reel cards.
- Square (1:1) for product cards, 3:4 for category tiles, 16:9 for hero.
- Always warm: never cool blue or pure white backgrounds.

## Motion
- Subtle: 200–400ms ease-out.
- Hover transitions: opacity, transform (translate-y -2px), color. No bouncy springs.
- Cart drawer slides in 320ms ease-out. Cart count badge scales on update.
- Scroll-triggered nav background fade.

## Do
- Use serif for ALL product names and large editorial headlines.
- Use wide letter-spacing on UPPERCASE labels.
- Pair champagne accents with cream or espresso, not with bright colors.
- Reference IDs exactly: every `data-strk-img` `[id]` must match the rendered DOM `id`.

## Don't
- Don't use blue links, neon, or saturated colors.
- Don't use emojis.
- Don't use discount/red price colors, badges, or "SALE" feel.
- Don't center product card text — left align names + price.
- Don't use shadows that look like the floating 2010s e-commerce template.
- Don't mix more than 2 font families.
