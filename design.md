# Velmora Fine Jewelry — Visual System

## Mood
Quiet luxury. Warm, editorial. Premium demi-fine. Restrained, never discount-looking, never generic e-commerce. Closer to a magazine spread than a marketplace.

## Color Palette (commit to ONE direction)
A warm, ivory-and-bronze editorial palette. Never pure white. Never pure black. Everything has a warm undertone to flatter gold metal and skin.

| Token | Hex | Usage |
|---|---|---|
| `bg` (ivory) | `#F4ECDF` | Page background, soft sections |
| `bg-soft` (cream) | `#EDE3D2` | Cards, product surfaces, soft contrast |
| `bg-deep` (espresso) | `#1B140E` | Footer, dark editorial split, dark UGC overlays |
| `ink` (text) | `#1B140E` | All primary text |
| `ink-soft` (muted) | `#7A6B59` | Secondary text, captions, helper |
| `gold` (primary) | `#A07A4A` | Brand accent, CTA fills, links, icon strokes |
| `gold-hover` | `#835F33` | Hover state for gold CTAs |
| `hairline` | `#DCCFB8` | Borders, dividers, separators |
| `surface` | `#FAF6EE` | Slightly lighter ivory for elevated cards |

Do not introduce secondary brand colors. Restrained accent color is non-negotiable. Never use bright red, bright blue, or any saturated hue outside this palette.

## Typography
- **Display / Headings / Product names**: Cormorant Garamond (serif) — Google Fonts. Light (300) for hero, Regular (400) for section titles, Medium (500) for product names.
- **UI / Body**: Inter (sans-serif). Regular 400 for body, Medium 500 for buttons, Uppercase with `tracking-[0.2em]` for nav, product names, eyebrows, labels.
- Product names always UPPERCASE with wide letter spacing.

## Spacing & Layout
- Generous whitespace. Sections have `py-20 md:py-28` minimum.
- Max content width `max-w-7xl mx-auto` for grids; `max-w-3xl` for prose.
- Mobile-first; mobile is the primary traffic source.
- Hairline dividers 1px in `hairline` color; never use heavy borders.

## Components
- **Buttons**: solid gold for primary CTA, outlined (1px gold border, transparent fill) for secondary. No drop shadows. Rounded `rounded-none` or very subtle `rounded-sm`. Padding `px-8 py-3.5`. Uppercase label, `tracking-[0.2em]`, font-size 11-12px.
- **Inputs**: 1px hairline border, focus → 1px gold border. No rounded corners. No drop shadows.
- **Cards**: white/ivory surface, no shadow, hairline border, 1px padding, very subtle. Hover: subtle background shift.
- **Icons**: 1.25px stroke, ink or gold. Lucide React.

## Imagery
- Editorial warm-lit photography. Dark/moody backgrounds OK for hero and product cards. Lifestyle for UGC.
- Use `data-strk-img` tagging system. Always reference a nearby `id` for the search query.

## Animation
- Subtle. 200-400ms ease transitions. Hover image swaps, smooth scroll, fade-up on section entry (subtle). No bouncy springs, no parallax.

## Don'ts
- No bright colors, no discount red, no "SALE!" shouting.
- No emoji, no "100% guaranteed" yellow stars.
- No drop shadows on cards.
- No rounded-pill buttons.
- No generic stock product photography vibe.
