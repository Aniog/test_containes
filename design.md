# Velmora Fine Jewelry — Design System

Mood: quiet luxury, warm, editorial. Demi-fine gold jewelry for women 25–45.
One confident direction: a soft, warm ivory editorial canvas with deep espresso
ink and a single restrained brushed-gold accent. Never loud, never discount-looking.

## Palette (Tailwind tokens — never hardcode hex values in components)

| Token           | Hex       | Usage |
|-----------------|-----------|-------|
| `cream`         | `#FAF6F0` | Page background — warm ivory |
| `sand`          | `#F1E9DC` | Alternating section backgrounds, chips |
| `sand-deep`     | `#E7DAC7` | Hover fills, image well tint |
| `ink`           | `#221B14` | Deep espresso — headings, solid buttons, footer bg |
| `ink-soft`      | `#4A4036` | Strong body text |
| `ink-muted`     | `#8A7E6F` | Captions, eyebrow labels, meta text |
| `gold`          | `#A98548` | Brushed gold — links on hover, rules, icons |
| `gold-deep`     | `#96742F` | Primary accent: CTAs, active states (pairs with `cream` text) |
| `gold-soft`     | `#C9A96B` | Star ratings, subtle highlights |
| `line`          | `#E4DACB` | Hairline dividers and borders |

Contrast: body text is always `ink-soft`/`ink` on `cream`/`sand` (AA+).
Buttons are `bg-ink text-cream` (default) or `bg-gold-deep text-cream` (accent).

## Typography

- Serif (headings, product names, pull quotes): **Cormorant Garamond** → `font-serif`
- Sans (UI, body, nav, buttons): **Manrope** → `font-sans`
- Eyebrow labels: `text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-muted`
- Product names: serif, UPPERCASE, wide tracking → `font-serif uppercase tracking-[0.14em]`
- Buttons: `text-[11px] font-semibold uppercase tracking-[0.2em]`
- Headline scale: hero `text-5xl md:text-6xl lg:text-7xl`, section titles `text-3xl md:text-5xl`

## Spacing & Layout

- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Section padding: `py-16 md:py-24 lg:py-28`
- Generous whitespace; sections separated by hairlines `border-t border-line` rather than heavy bands.
- Grids: bestsellers `grid-cols-2 lg:grid-cols-5`, shop `sm:grid-cols-2 lg:grid-cols-3`, tiles `md:grid-cols-3`.

## Components

- Buttons: sharp corners (`rounded-none`), tall (`h-12 px-8`), solid ink default, gold-deep accent, outlined ink secondary. Hover: subtle bg shift + tiny translate, `transition-all duration-300`.
- Product card: flat, no card chrome. Image on `bg-sand` well, hairline-free, name serif uppercase, price sans. Hover: second image crossfade + "Add to Cart" bar slides up.
- Reveal animation: `.reveal` starts `opacity-0 translate-y-6`, becomes visible via IntersectionObserver with `transition duration-700 ease-out` and stagger delay `reveal-delay-N`.
- Hairlines: `border-line`, dividers `border-t border-line`.
- Stars: filled `Star` lucide icons in `gold-soft`.
- Accordions: hairline-separated rows, serif title, `Plus/Minus` icon, grid-rows transition.
- Drawer/modal overlays: `bg-ink/40 backdrop-blur-[2px]`.

## Do / Don't

- DO use warm ivory + espresso + one gold accent everywhere. DON'T introduce other hues.
- DO use hairline dividers and whitespace. DON'T use heavy borders, badges, or bright sale colors.
- DO keep imagery warm-lit gold jewelry on dark/neutral backgrounds (data-strk-img system).
- DON'T use rounded-pill cards or drop-shadow-heavy e-commerce clichés; shadows are rare and soft (`shadow-[0_24px_60px_-24px_rgba(34,27,20,0.25)]` only on the cart drawer).
- DON'T hardcode hex/pixel values in class strings — use the tokens above.
