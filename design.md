# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine gold jewelry. No loud discount signals, no generic marketplace styling. Generous whitespace, large editorial imagery, refined typography, thin hairline dividers.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--velmora-base` | `#2A2420` | Primary text, footer background, dark surfaces |
| `--velmora-cream` | `#F9F6F2` | Page background, cards, light surfaces |
| `--velmora-gold` | `#B48F58` | CTA buttons, accents, hover states, star icons |
| `--velmora-gold-dark` | `#8F7144` | Gold hover/darken |
| `--velmora-taupe` | `#6E6259` | Secondary/muted text |
| `--velmora-stone` | `#A89A8E` | Subtle icons, disabled states |
| `--velmora-hairline` | `#E8E0D8` | Borders, dividers, hairlines |
| `--velmora-sand` | `#EDE8E2` | Alternate section background |
| `--velmora-white` | `#FFFFFF` | Pure white for cards/input backgrounds |

### Accessibility
- Body text on cream: `#2A2420` on `#F9F6F2` passes WCAG AA.
- White text on dark/base passes WCAG AA.
- Gold `#B48F58` is used only as a background for white text after darkening on hover.

## Typography

- **Serif headings / product names:** `Playfair Display`, weights 400, 500, 600, 700.
- **Sans-serif body / UI:** `Manrope`, weights 300, 400, 500, 600.
- Product names are **UPPERCASE** with wide `tracking-[0.18em]` letter-spacing.

### Type scale
- Hero H1: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl`, leading tight.
- Section H2: `text-3xl md:text-4xl`, Playfair Display, tracking-wide.
- Product name: `text-xs md:text-sm`, uppercase, tracking-[0.18em].
- Body: `text-sm md:text-base`, Manrope, leading-relaxed.
- UI labels / nav: `text-xs md:text-sm`, uppercase, tracking-wide.

## Spacing
- Page horizontal padding: `px-4 sm:px-6 lg:px-8 xl:px-12`.
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`.

## Components

### Buttons
- Primary solid: `bg-velmora-gold text-white hover:bg-velmora-gold-dark`.
- Primary outline: `border border-velmora-base text-velmora-base hover:bg-velmora-base hover:text-white`.
- Pill variant selector: `rounded-full border-velmora-hairline`, selected has gold border + text.
- Quick-add product card: absolute bottom, full-width, slides up on hover.

### Cards
- Product card: no border, subtle hover shadow, image aspect `3x4` or `4x5`.
- Transition: `transition-all duration-300 ease-out`.

### Dividers
- Thin 1px hairline: `bg-velmora-hairline`.

## Image Treatment
- Warm gold jewelry on dark/neutral backgrounds.
- Use stock image tagging system (`data-strk-img`) with placeholder SVG src.
- Editorial hero and UGC use full-bleed / large frames.

## Animation
- Subtle hover lifts (`-translate-y-0.5`), opacity fades.
- Cart drawer slides in from right.
- Smooth scroll behavior.
