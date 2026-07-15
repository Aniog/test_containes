# Velmora Fine Jewelry — Design System

A quiet, warm, editorial direct-to-consumer storefront for demi-fine gold jewelry. The aesthetic is "expensive, but not loud." The palette flatters gold metal; type pairs an elegant serif with a clean humanist sans; spacing is generous; motion is restrained.

## 1. Brand & Mood
- Quiet luxury, warm, editorial.
- Premium demi-fine — never discount-looking, never generic e-commerce.
- Imagery: warm-lit gold jewelry on dark/neutral skin tones, soft shadows, low saturation.
- Voice: confident, calm, sensory ("Crafted to be Treasured", "Heirloom in the making").

## 2. Color Palette (single confident direction: warm ivory + deep cocoa + brushed gold)
Use Tailwind tokens (defined in `tailwind.config.js`) — never raw hex in components.

| Token            | Role                                  | Value         |
|------------------|---------------------------------------|---------------|
| `ivory`          | Page background, soft panels          | `#F6F1EA`     |
| `parchment`      | Slightly deeper surface, alt section  | `#EFE7DC`     |
| `cocoa`          | Deep text, dark sections, hero text   | `#1F1A14`     |
| `cocoa-soft`     | Secondary dark surface                | `#2A241B`     |
| `gold`           | Primary accent (metallic, restrained) | `#B89968`     |
| `gold-deep`      | Hover/active gold, hairline borders   | `#8E7344`     |
| `gold-pale`      | Tinted gold backgrounds               | `#E9DCC2`     |
| `ink`            | Primary text on light                 | `#1F1A14`     |
| `muted`          | Secondary text                        | `#6E655A`     |
| `line`           | Hairline divider                      | `#D9CFBE`     |
| `success`        | Toasts, in-stock                      | `#5C7A4A`     |

Contrast: all body text on `ivory` is `ink` (≥ 13:1). All text on `cocoa` is `ivory` or `gold-pale` (≥ 10:1). Gold is used as **accent only** (buttons, dividers, prices, hover) — never as body text on light surfaces.

## 3. Typography
Two families, set via `index.html` Google Fonts link.

- **Serif** — `Cormorant Garamond` (weights 300, 400, 500, 600, 700). Use for:
  - Logo `VELMORA`
  - H1 / H2 / H3 page headings
  - Product names (uppercase, wide tracking)
  - Editorial pull-quotes
- **Sans** — `Inter` (300, 400, 500, 600). Use for body, nav, buttons, UI, captions.

### Type scale (Tailwind classes)
- `text-display` → 5xl/6xl/7xl serif (hero headline)
- `text-h2` → 4xl/5xl serif (section titles)
- `text-h3` → 2xl/3xl serif (product titles in cards)
- `eyebrow` → xs uppercase sans, tracking-[0.25em], muted color (small labels above sections)
- `product-name` → xs/sm sans uppercase, tracking-[0.22em], font-medium (product cards/PDF)
- `body` → base sans, leading-relaxed
- `meta` → sm sans, muted

## 4. Spacing, Sizing & Layout
- Mobile-first. Max content width `max-w-[1440px]`.
- Generous vertical rhythm: section padding `py-20 md:py-28 lg:py-32`.
- Container padding `px-5 sm:px-8 lg:px-16`.
- Hairline dividers: `border-t border-line/70` or `border-line`.
- Rounded corners kept minimal: `rounded-sm` for buttons, `rounded-none` for cards.

## 5. Components

### Buttons
- **Primary**: solid `cocoa` background, `ivory` text, hover → `cocoa-soft`. Square corners, `rounded-sm`, uppercase tracking, px-8 py-3.5.
- **Accent**: solid `gold` background, `cocoa` text, hover → `gold-deep`. For "Add to Cart" and key CTAs.
- **Outline**: 1px `ink` border, transparent, hover → fills `ink` with `ivory` text.
- **Ghost**: no border, underline-on-hover.

### Cards (product)
- Image square, warm neutral background.
- Hover: second image fades in, gold "Quick Add" slides up over image.
- Product name uppercase, wide tracking; price below in serif.

### Navbar
- Transparent over hero, on scroll adds `bg-ivory/95 backdrop-blur border-b border-line/60` and `text-ink`.
- On hero: text `ivory`. Logo serif uppercase.

### Forms / Inputs
- Newsletter input: 1px `ink` border, no rounding, focus ring in `gold`.
- Pill toggle (gold/silver tone): rounded-full, 1px border, selected fills `ink` text `ivory`.

## 6. Imagery
- All editorial photography loads through `data-strk-img` via `ImageHelper.loadImages`.
- Tags reference nearby text IDs (specific → general).
- Backgrounds (UGC reels, hero, brand-story) use `data-strk-bg`.
- Fallback placeholder: warm dark gradient (no broken icons).

## 7. Motion
- Subtle, slow, considered. Never bouncy.
- Hover image fade: 500ms ease-out.
- Drawer slide: 320ms cubic-bezier.
- Navbar state crossfade: 250ms.
- Scroll-reveal: 600ms opacity + 12px translate-y, once.

## 8. Don'ts
- No bright primaries (no red/blue/green for UI accents).
- No emoji. No icons that look "shopify-default".
- No drop-shadows on body text. Soft shadows on cards only.
- No more than one accent color visible at a time.
- No hardcoded hex in JSX — always use Tailwind tokens.
- No "SALE" or "discount" red badges.
