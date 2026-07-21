# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, restrained. Premium demi-fine jewelry — never loud, never discount-looking, never generic. Generous whitespace, thin hairline dividers, soft shadows, subtle motion.

## Color Palette (Tailwind tokens)
One confident direction: **deep espresso noir + warm ivory + muted gold**.

| Token | Hex | Usage |
|---|---|---|
| `noir` | #171310 | Primary text, dark sections, solid buttons |
| `espresso` | #241C16 | Dark surfaces (footer, newsletter block) |
| `ivory` | #FAF6F0 | Page background |
| `cream` | #F3EDE3 | Alternating section background |
| `sand` | #E7DDCE | Subtle fills, hover states |
| `gold` | #A8842C | Primary accent (CTAs, stars, details) |
| `goldlight` | #C9A44C | Hover accent, gradient pairing |
| `bronze` | #8A6D3B | Secondary accent / links on dark |
| `taupe` | #6E6156 | Muted body text |
| `stone` | #B8AB98 | Placeholder / meta text on dark |
| `line` | #E2D8C8 | Hairline dividers, borders |
| `linedark` | #3A2F26 | Hairline dividers on dark surfaces |

Contrast rules: body text on light surfaces = `noir` or `taupe` (never lighter). Text on dark surfaces = `ivory` / `sand`. Gold text only on `noir`/`espresso` or used at `gold` on `ivory` for small labels (AA large-text contrast or better). Never place light text on light backgrounds or gold text on cream at small sizes.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), loaded via Google Fonts in index.html. Use `font-serif`.
- Body / UI: **Manrope** (sans-serif), `font-sans`.
- Product names: UPPERCASE serif, `tracking-[0.14em]` or wider, font-medium.
- Eyebrow labels: sans, uppercase, `text-[11px] tracking-[0.28em] text-gold`.
- Headline scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, card titles `text-base md:text-lg`.
- Body: `text-sm md:text-base leading-relaxed text-taupe`.

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-5 md:px-10`.
- Section vertical padding: `py-16 md:py-28`.
- Hairline dividers: `border-t border-line` (or `border-linedark` on dark).
- Cards: no heavy borders — image-forward, hairline `border-line` where needed, `shadow-[0_18px_50px_-20px_rgba(23,19,16,0.25)]` for elevated surfaces only.

## Buttons
- Primary: solid `bg-noir text-ivory hover:bg-espresso`, `rounded-none`, uppercase `text-xs tracking-[0.22em]`, `px-8 py-4`.
- Accent: solid `bg-gold text-ivory hover:bg-goldlight` (same shape/type).
- Outline: `border border-noir text-noir hover:bg-noir hover:text-ivory`.
- Never use rounded-full for buttons; pill shape only for variant selectors and filter chips.

## Motion
- Hover transitions: `transition-all duration-500 ease-out`.
- Image hover: slow zoom `group-hover:scale-105 duration-700`.
- Fade-up reveals on scroll (IntersectionObserver, once, 600ms, translate-y-6 → 0).
- No bouncy easing. Keep everything slow and quiet.

## Imagery
- Large editorial photography: warm-lit gold jewelry on dark/neutral backgrounds, close crops on ear/neck/hands.
- Use the data-strk-img / data-strk-bg tagging system with placeholder SVG src for content images.
- Ratios: product cards `3x4`, UGC reels `9x16`, hero backgrounds `16x9`, category tiles `4x3` (mobile) / `3x4` (desktop), brand story `4x3`.

## Do's
- Do keep layouts airy with generous whitespace.
- Do use hairline dividers between major sections.
- Do keep accent gold restrained — small labels, stars, CTA, fine rules.
- Do uppercase product names with wide letter-spacing.

## Don'ts
- Don't use bright saturated colors, gradients everywhere, or rounded bubbly cards.
- Don't use drop shadows on every element — only elevated drawers/modals.
- Don't mix more than the two brand fonts.
- Don't show sale badges, discount ribbons, or loud promotional stickers (except the single newsletter 10% message).
