# Velmora Fine Jewelry — Design System

## Brand Mood
**Quiet luxury · warm · editorial · premium-but-accessible.**
Halfway between a Parisian atelier and a modern DTC brand. The site should feel like a *magazine spread* — generous whitespace, soft warm light, hairlines, and one confident accent (gold). Never loud, never discount-looking, never generic e-commerce.

## Color Palette
A warm, editorial neutral scheme. The base is bone/cream, not stark white. Text is a warm near-black. The single accent is a muted antique gold that flatters actual gold jewelry.

| Token              | Hex       | Role                                                        |
| ------------------ | --------- | ----------------------------------------------------------- |
| `bone`             | `#F6F1EA` | Primary background. Warm, soft, editorial.                  |
| `bone-2`           | `#EFE7DC` | Alternate surface (cards, hover, sections).                 |
| `ink`              | `#1B1815` | Primary text, footer, dark sections. Near-black with warmth.|
| `ink-soft`         | `#2B2520` | Body text on light surfaces.                               |
| `muted`            | `#6B6259` | Secondary / helper text on light surfaces.                  |
| `muted-2`          | `#8B8377` | Tertiary text, placeholders.                               |
| `gold`             | `#B08A52` | Brand accent. Antique, muted, flatters real gold.           |
| `gold-deep`        | `#8C6B3D` | Hover state for gold, deeper accent on dark backgrounds.    |
| `terracotta`       | `#A35F3F` | Secondary warm accent (newsletter, badges).                 |
| `line`             | `#D9CFC0` | Hairline dividers, borders, very subtle.                    |
| `line-strong`      | `#1B1815` | Strong dividers on light surfaces, used very sparingly.     |
| `success`          | `#4F6B4A` | Muted sage for success states.                              |

**Rules:**
- Do not use pure white or pure black. Always use `bone` or `ink`.
- The accent `gold` is used *sparingly* — buttons, hairlines, price, active states, small caps labels. Never as a background fill of large areas.
- Contrast: `ink` on `bone` = 13.2:1. `bone` on `ink` = 13.2:1. `gold` is decorative only — never used for body text.
- Light sections sit on `bone`. Dark sections (footer, possibly one editorial split) sit on `ink`. Newsletter section uses `terracotta` for the only bold color block.

## Typography
- **Headings & product names:** `Cormorant Garamond` (Google Fonts). Light to medium weights, generous tracking on display sizes. Variable weight available.
- **Body & UI:** `Inter` (Google Fonts). System fallback.
- **Product names:** Always UPPERCASE with `letter-spacing: 0.18em` (small-caps elegance).
- **Section labels / kickers:** UPPERCASE, `Inter`, weight 500, tracking `0.2em`, `0.75rem`, color `muted` or `gold`.
- **Editorial pull-quotes & story text:** Cormorant, light weight, larger size (1.25–1.5rem), generous line-height (1.7).

### Type scale (Tailwind)
- `text-display` (hero h1): `text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.05]`
- `text-h2`: `text-4xl sm:text-5xl font-light tracking-tight`
- `text-h3`: `text-2xl sm:text-3xl font-light`
- `text-eyebrow`: `text-[0.7rem] uppercase tracking-[0.25em] font-medium`
- `text-product`: `text-[0.78rem] uppercase tracking-[0.18em] font-medium`

## Spacing
Use Tailwind defaults but lean into larger gaps. Editorial feel comes from breathing room. Common patterns:
- Section vertical padding: `py-20 md:py-28 lg:py-32`
- Container: `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`
- Hairline divider: `1px` line using `bg-line` on `bone`, `bg-line-strong` or `border-white/15` on `ink`.

## Components

### Buttons
- **Primary (accent)**: solid `ink` background, `bone` text. `h-12 px-8`. Tracking `0.18em`, uppercase, weight 500. Hover: bg `#2B2520` + soft scale 1.01. Transition 250ms.
- **Secondary (outline)**: transparent, 1px `ink` border, `ink` text. Hover: fill `ink`, text → `bone`.
- **Gold accent (used sparingly, e.g. newsletter, "view product")**: 1px `gold` border, `ink` text, hover: bg `gold` + `bone` text. Reserved for moments of emphasis.
- **Ghost (nav, links)**: underline-on-hover using `gold` 1px line, 200ms.

### Product Card
- `bg-bone`, no border by default, subtle shadow `0 1px 2px rgba(27,24,21,0.04)`.
- Image area: aspect-square, soft warm gradient on the bottom edge.
- Default image → second image crossfade on hover (300ms).
- Quick-add button slides up from bottom of image on hover (translateY 100% → 0).
- Product name UPPERCASE, price in `ink`, rating as 5 small gold stars + count.
- No badges except an "Editorial pick" / "Bestseller" gold hairline tag (very rare).

### Navbar
- Sticky top, transparent over hero, becomes solid `bone/95` with backdrop-blur once `scrollY > 40`.
- Left: serif logo "VELMORA" in `text-xl tracking-[0.35em]`.
- Center: `Shop · Collections · About · Journal` in Inter, `text-xs uppercase tracking-[0.2em]`.
- Right: search + cart (with item count badge in `gold`).
- Mobile: hamburger → full-screen overlay menu.

### Cart Drawer
- Slides in from right, 420px wide on desktop, full on mobile.
- Backdrop: `ink/40` with blur.
- Cart icon shows live count.
- Items list: 80px thumb, name, variant pill, qty stepper, price, remove (×).
- Footer: subtotal, "Checkout" primary button, "View cart" link.

## Imagery Rules
- Always warm. Always soft. Gold jewelry on warm bone, taupe, deep ink, or terracotta.
- For lifestyle/UGC: warm-lit, natural light, low-saturation, "Instagram aesthetic" but editorial.
- Use `data-strk-img` with contextual text references (e.g. `[product-name] [product-category]`) — never hardcoded plain English queries.
- Place a stable `containerRef` on the page or section root for `ImageHelper.loadImages` and re-run on state changes (active tab, drawer, modal).

## Motion
- All transitions: 200–400ms, `ease-out`.
- Hover: subtle scale 1.01 on cards, image crossfade 300ms.
- Nav: solid background fade in 250ms.
- Drawer: slide 300ms.
- Section reveals: 1px translateY + opacity, staggered 80ms, only on first viewport. Reduce via `prefers-reduced-motion`.

## Accessibility
- All interactive elements ≥ 44px touch target.
- Color contrast verified: all body text ≥ 4.5:1, all large text ≥ 3:1.
- Focus rings: 2px `gold` outline, 2px offset, never removed.
- Cart drawer: focus trap, ESC to close, `aria-modal`, `role="dialog"`.
- All images have meaningful `alt` text.

## Do's
- Use the serif for emotion, the sans for clarity.
- Let elements breathe. Don't crowd.
- Use hairlines instead of heavy borders.
- Use one strong image per section, not five.
- Keep CTAs obvious but understated.

## Don'ts
- No drop-shadows on text.
- No bright primary colors (red/blue/green) anywhere.
- No emoji.
- No "Sale" badges, no countdown timers, no urgency language.
- No more than 2 weights of one font in a single view.
- No pure white, no pure black.
