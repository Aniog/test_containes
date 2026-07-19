# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. The site should feel like a glossy lookbook, not a discount marketplace. Confidence comes from restraint: large imagery, generous whitespace, refined typography, and a single warm metallic accent.

## Color palette
One confident direction — warm ivory & burnished gold on a deep espresso base.

- **Background primary**: `#FAF8F5` (warm ivory) — page canvas, cards, sections.
- **Background secondary**: `#F5F0EA` (soft cream) — subtle section alternation, hover surfaces.
- **Background dark**: `#1A1714` (espresso) — hero, footer, newsletter, dark sections.
- **Text primary**: `#1A1714` (espresso) — body copy, headings on light surfaces.
- **Text secondary**: `#6B6258` (warm taupe) — captions, meta, descriptions.
- **Text muted**: `#9A9086` (pale taupe) — placeholders, disabled states.
- **Accent**: `#B8860B` (burnished gold) — CTAs, links, stars, focus.
- **Accent hover**: `#9A7009` (deeper gold) — button hover.
- **Accent light**: `#E6C875` (champagne gold) — highlights, star fills.
- **Hairline**: `#E2DCD3` (warm stone) — 1px dividers.
- **Surface overlay**: `rgba(26,23,20,0.45)` — dark scrims over imagery.

**Accessibility**: all text must maintain WCAG AA contrast. Espresso on ivory passes. Ivory/espresso on dark backgrounds passes. Gold accent `#B8860B` is only used for large text, UI borders, or icons, never small body copy.

## Typography
- **Headings / logo / product names**: `Cormorant Garamond`, serif. Elegant, high contrast, slightly editorial.
- **Body / UI / navigation / buttons**: `Inter`, sans-serif. Clean, legible, modern.
- **Product names**: UPPERCASE, `tracking-[0.22em]`, `font-medium`.
- **Logo**: UPPERCASE, `tracking-[0.3em]`, Cormorant Garamond.

### Scale
- Display hero: `text-5xl md:text-7xl lg:text-8xl`, leading `leading-[0.95]`.
- Section title: `text-3xl md:text-4xl lg:text-5xl`.
- Product name: `text-sm md:text-base`.
- Body: `text-base md:text-lg`, `leading-relaxed`.
- Caption / UI: `text-xs md:text-sm`, `uppercase tracking-widest`.

## Spacing & layout
- Page horizontal padding: `px-5 md:px-8 lg:px-12 xl:px-16`.
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Grid gap: `gap-4 md:gap-6 lg:gap-8`.
- Hairline dividers: `border-t border-stone-200`.
- Max content width: `max-w-7xl mx-auto`.

## Components

### Buttons
- **Primary (solid accent)**: bg-gold text-white, uppercase tracking-widest text-xs, py-3.5 px-8, hover:bg-gold-dark, transition-colors duration-300.
- **Secondary (outline)**: border border-espresso text-espresso, uppercase tracking-widest text-xs, hover:bg-espresso hover:text-ivory, transition.
- **Ghost (on dark)**: text-ivory border-ivory, hover:bg-ivory hover:text-espresso.

### Cards
- Product card: bg-ivory, no border, subtle shadow only on hover (`shadow-lg`), image aspect `4x5`, hover reveals alternate image and quick-add bar.
- Category tile: aspect `3x4` or `4x5`, dark scrim, label appears on hover with underline.

### Forms
- Inputs: bg-transparent, border-b border-stone-300, focus:border-gold, rounded-none, placeholder text-muted.

### Icons
- Use `lucide-react`. Stroke width 1.25–1.5 for a refined look.

## Motion
- Hover transitions: `transition-all duration-300 ease-out`.
- Image scale on hover: `group-hover:scale-105`, duration 700.
- Quick-add slide: translate-y on product card hover.
- Scroll nav: background transitions from transparent to `bg-ivory/95 backdrop-blur`.

## Imagery
Warm gold jewelry on dark chocolate, warm taupe, or soft cream backgrounds. Editorial close-ups of ear/neck/hands. Use the stock image system (`data-strk-img`, `data-strk-bg`) with descriptive, contextual queries. Placeholder SVG used until images load.

## Do's and don'ts
- DO keep backgrounds light and airy with one dark hero moment.
- DO use uppercase product names with wide tracking.
- DO use hairline dividers for quiet separation.
- DON'T use loud sale banners, red, or countdown timers.
- DON'T use generic ecommerce clutter — keep layouts minimal.
- DON'T use low-contrast text on any surface.
