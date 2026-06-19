# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, editorial, warm. Premium demi-fine jewelry that feels personal, considered, and hand-finished. Never loud, never discount, never generic. Photography is warm-lit, intimate, on a model or in soft still-life.

## Color Palette
One confident direction: deep espresso + warm cream + soft brushed gold.

| Token | Hex | Role |
| --- | --- | --- |
| `ink` | `#1A1612` | Primary text, deep surfaces, dark sections |
| `ink-soft` | `#2A241D` | Card backgrounds on dark sections |
| `cream` | `#F5F0E6` | Light surface (page background) |
| `cream-warm` | `#EFE7D6` | Slightly deeper cream, alternating sections |
| `ivory` | `#FAF7F0` | Card background on light |
| `gold` | `#B8965A` | Primary accent (warm brushed gold) |
| `gold-deep` | `#8C6F3F` | Pressed/active gold |
| `gold-soft` | `#D9C49A` | Pale gold, hairlines on dark, hover washes |
| `mushroom` | `#8A7E70` | Muted secondary text on light |
| `mushroom-dark` | `#5C5246` | Muted secondary text on dark |
| `line` | `#E2D9C6` | Hairline dividers on light |
| `line-dark` | `#3A3128` | Hairline dividers on dark |

Forbidden combinations:
- Pure black `#000` or pure white `#FFF` (use ink/cream instead — keeps warmth)
- Cool/neutral grays — everything tints warm
- Saturated reds, electric blues, neon accents — never

Contrast rules:
- `ink` on `cream`: AAA for body, AA for fine print
- `cream` on `ink`: AAA
- `gold` is for accents, hairlines, and CTAs on dark; never as small body text on light. For text on light, use `ink`.

## Typography
- **Display / headings / product names**: Cormorant Garamond (serif, weights 300, 400, 500, 600)
- **Body / UI / buttons / nav**: Inter (sans, weights 300, 400, 500, 600)
- **Product card titles & section labels**: Inter, UPPERCASE, `tracking-[0.22em]`, small size, weight 500

Scale:
- Hero headline: text-5xl md:text-7xl lg:text-[5.5rem], leading-[0.95], Cormorant
- Section title: text-3xl md:text-5xl, Cormorant
- Product name: text-xs, Inter, UPPERCASE, tracking-[0.22em]
- Body: text-sm md:text-base, Inter, leading-relaxed
- Small caps labels: text-[11px], tracking-[0.28em], Inter

## Layout & Spacing
- Mobile-first, single-column at <768
- Desktop: max-width ~1440, generous gutters, sections separated by ~96–120px vertical space
- Hairline `1px` dividers in `line` color; never use heavy borders
- Cards have no visible border, just `bg-ivory` and a barely-there `shadow-[0_2px_20px_rgba(26,22,18,0.04)]`
- Rounded corners: `2px` max on images, `9999px` on pill variant buttons only

## Imagery
- Warm-lit gold jewelry on deep neutral or cream backgrounds
- Lifestyle model shots for hero, story, UGC
- Slight desaturation; never clinical / e-commerce-white
- Image aspect ratios: 3:2 for category tiles, 4:5 for product cards, 9:16 for UGC reels, 16:9 for story

## Motion
- Default duration: 400ms
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (soft editorial)
- Hover: image swap on product cards (200ms), color shift on links (300ms), button background fill (400ms)
- Never bouncy, never springy

## Buttons
- **Primary (on dark or as accent)**: solid `bg-gold` text `ink`, hover `bg-gold-deep` text `ivory`, no border, letter-spaced
- **Secondary**: outlined `border-gold text-gold` on light, outlined `border-gold-soft text-gold-soft` on dark, hover fills
- **Ghost**: underlined text link with offset, animates underline width

## Iconography
- Lucide React. 18px default, 1.5 stroke. Never decorative-heavy.

## Do's and Don'ts
- DO use serif for any editorial moment
- DO commit to the warm gold — no cool tones anywhere
- DO use hairline dividers between editorial sections
- DO leave generous whitespace
- DON'T use Tailwind's default blue/gray
- DON'T show prices in red, don't show "SALE" badges
- DON'T use emoji or playful icons
- DON'T use multi-color gradients
