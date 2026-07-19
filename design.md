# Velmora — Design System

A high-end DTC demi-fine jewelry storefront. Quiet luxury, editorial, warm.

## Brand voice
- Confident, restrained, editorial. NEVER shouty, NEVER discount-coded.
- Headlines feel like a magazine; body copy is calm and clear.
- Product names are uppercase with wide letter-spacing — the spacing IS the luxury signal.

## Color palette
The base is a deep, warm near-black ink (like strong coffee) against a warm bone canvas. A single warm muted-gold accent carries the brand. A taupe and a hairline tone support structure.

| Token | Hex | Role |
|---|---|---|
| `ink` | `#1A1410` | Primary text, dark surfaces, deep sections |
| `ink-soft` | `#2A221B` | Hover dark, secondary dark |
| `bone` | `#F5F0E8` | Default page background (warm off-white) |
| `cream` | `#EBE3D5` | Soft section background, cards |
| `sand` | `#D9CFBE` | Subtle dividers, muted backgrounds |
| `line` | `#D9D0C0` | Hairline dividers, very subtle borders |
| `taupe` | `#8B7E6E` | Secondary text, captions |
| `gold` | `#B08855` | Primary accent (warm, muted, never brassy) |
| `gold-deep` | `#8A6A3E` | Hover/active accent |
| `ivory` | `#FBF8F3` | Lightest highlight |
| `white` | `#FFFFFF` | Pure white for true contrast |

Tailwind class examples:
- Page bg: `bg-bone text-ink`
- Section bg: `bg-cream`
- Dark section: `bg-ink text-bone`
- Accent button: `bg-gold text-white hover:bg-gold-deep`
- Hairline: `border-line` (1px) or `border-t border-line/60`

### Contrast & accessibility
- Body text on `bone`: `ink` (AA+).
- Body text on `ink`: `bone` (AA+).
- Accent on white: prefer `ink` text with `gold` border, or `gold-deep` text. Reserve `gold` for icons/dots/decorative use on light backgrounds. Never use `gold` text on `bone`.
- Muted text: `taupe` on `bone` for captions/labels only (not for primary info).

## Typography
- Headings (display): **Cormorant Garamond** (serif). Weights 400/500/600. Tight tracking on hero, normal elsewhere.
- Body / UI: **Inter** (sans). 400/500/600.
- Product names: `font-sans uppercase tracking-[0.18em] text-[11px] sm:text-xs font-medium`.
- Eyebrow / section labels: `font-sans uppercase tracking-[0.28em] text-[10px] text-taupe`.
- Hero headline: `font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]`.
- Section headline: `font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1]`.
- Body: `font-sans text-sm sm:text-base leading-relaxed`.

## Layout & spacing
- Generous whitespace. Page horizontal padding: `px-5 sm:px-8 lg:px-12`.
- Section vertical rhythm: `py-16 sm:py-20 lg:py-28`.
- Hairline dividers are 1px, color `line`, used liberally to separate sections in lieu of heavy borders.
- Max content width for prose: ~720px. For grids: 1280–1440px.

## Imagery
- Warm, intimate close-ups of gold jewelry on skin or neutral backdrops.
- Reel/UGC: vertical 9:16 crops, soft serif caption overlay.
- Use the stock image system (`data-strk-img` / `data-strk-bg`) for all product and editorial photos.

## Buttons
- **Primary (solid)**: `bg-ink text-bone hover:bg-ink-soft` OR `bg-gold text-white hover:bg-gold-deep`. Uppercase, tracking-widest, small. Height ~48–52px. Full-width in product detail.
- **Secondary (outline)**: `border border-ink text-ink hover:bg-ink hover:text-bone`.
- **Pill (variants/filters)**: `rounded-full border border-line px-5 py-2 text-xs uppercase tracking-widest`; selected state `bg-ink text-bone border-ink`.
- Icon buttons: 40–44px square, ghost, with hover bg `bg-ink/5` (on light) or `bg-bone/10` (on dark).

## Motion
- Subtle, never bouncy. Duration: 200–400ms. Easing: `ease-out` or `cubic-bezier(0.22, 1, 0.36, 1)`.
- Hover transitions on cards: image swap (200ms opacity), label underline grow, button bg swap.
- Drawer slide: 320ms `cubic-bezier(0.22, 1, 0.36, 1)`.
- Page reveal: gentle fade-up on first paint (one-time).

## Don'ts
- ❌ Bright yellow / "sale red" — never.
- ❌ Big discount badges or "SALE!" stickers.
- ❌ Drop shadows heavier than `shadow-[0_8px_30px_rgb(0,0,0,0.06)]`.
- ❌ Saturated rainbow gradients.
- ❌ Tailwind default blue links.
- ❌ Generic stock "shopping" feel.
- ❌ Centering all body text.
- ❌ Loud emojis as UI icons.

## Do's
- ✅ Uppercase, wide-tracked labels for product names and section eyebrows.
- ✅ Hairline dividers between editorial sections.
- ✅ Editorial grid (asymmetric, off-center) for "Shop by category" and "Bestsellers".
- ✅ Hover image swap on product cards.
- ✅ Scroll-triggered gentle fade-ins on hero subhead and section titles.
