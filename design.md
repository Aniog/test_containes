# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount cues. No generic e-commerce clutter. The experience should feel like flipping through a beautifully art-directed lookbook.

## Color Palette
- **Background:** `#F7F3ED` — warm ivory
- **Foreground/Text:** `#1F1A17` — deep espresso
- **Card / Surface:** `#FFFBF5` — soft cream
- **Muted:** `#E8E0D5` — warm stone
- **Muted Foreground:** `#6B5E53` — taupe
- **Accent:** `#B8860B` — antique gold
- **Accent Foreground:** `#FAF7F2` — cream
- **Border:** `#DDD5C7` — hairline divider

## Typography
- **Headings / Product names / Editorial quotes:** Cormorant Garamond (serif)
- **Body / UI / Buttons / Navigation:** Manrope (sans-serif)
- Product names are uppercase with wide letter-spacing (`tracking-[0.12em]`).
- H1 large display (3–4rem mobile, 5–6rem desktop), light weight 300–400.
- Body 400–500, line-height 1.6.

## Spacing & Layout
- Generous whitespace. Section padding `py-16 md:py-24`.
- Container max width `max-w-7xl` centered.
- Hairline dividers with `border-border`.
- Cards with subtle shadow `shadow-sm` and rounded `rounded-lg`.

## Components
- **Buttons:** premium solid or outlined. Primary uses espresso bg with cream text; accent uses antique gold bg with cream text. Hover slight lift and background darken.
- **Inputs:** minimal bottom border or full bordered with cream bg, focus ring on accent.
- **Product Cards:** image aspect 3:4, hover reveals alternate image, quick Add to Cart appears on desktop hover, always visible on mobile.
- **Accordions:** hairline dividers, chevron rotation.
- **Pills:** rounded-full border, selected state filled accent.

## Imagery
- Warm gold jewelry on dark, neutral, or skin-tone backgrounds.
- Use `data-strk-img` and `data-strk-bg` tags with descriptive text IDs for stock images.
- Use a 1x1 SVG placeholder as `src` until images load.

## Motion
- Subtle hover transitions `transition-all duration-300`.
- Image fades handled by `ImageHelper`.
- Page-level scroll smooth.

## Do's and Don'ts
- DO keep text contrast high.
- DO reserve the accent color for CTAs and highlights.
- DON'T use neon, bright sales red, or heavy drop shadows.
- DON'T crowd the layout on desktop.
