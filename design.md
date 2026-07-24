# Velmora Fine Jewelry — Visual System

Brand: **Velmora Fine Jewelry**. Mood: *quiet luxury, warm, editorial, premium-but-accessible*.
Direction: warm-neutral base (ivory/cream) + antique gold accent + deep warm-ink text. Single confident direction, used consistently site-wide.

## Typography
- **Display / headings / product names**: Cormorant Garamond (serif). Use weight 400–500, italics for editorial captions.
- **Body / UI**: Inter, weight 300–500.
- **Product names**: UPPERCASE + `tracking-widest2` (0.22em), Inter 12–13px. Always.
- **Eyebrows / micro UI**: UPPERCASE + `tracking-widest2`, Inter 11px, `text-ink-500`.

Tailwind: `font-serif`, `font-sans`. Helpers: `.product-name`, `.eyebrow`, `.btn-*`, `.link-underline`.

## Color tokens (use Tailwind names — never raw hex in components)
- **Surfaces**
  - `bg-ivory-50` `#FBF8F2` — page base (warm cream)
  - `bg-ivory-100` `#F6F1E8` — soft section backgrounds
  - `bg-ivory-200` `#EFE7D6` — sand block (newsletter, story)
  - `bg-ink-800` `#1B1612` — dark editorial blocks (footer, dark CTA)
  - `bg-ink-900` `#0F0C09` — deepest
- **Text**
  - `text-ink-800` `#1B1612` — primary text on light
  - `text-ink-500` `#5A4A3D` — secondary text / eyebrows
  - `text-ivory-50` / `text-ivory-100` — text on dark
  - Never use mid-gray on cream — readability collapses. Use `text-ink-500` minimum.
- **Accent (gold)**
  - `bg-gold-400` `#B08D57` — primary accent (CTA solid, links hover, focus ring)
  - `bg-gold-500` `#9A7541` — accent hover
  - `text-gold-500` for accent links on light backgrounds
  - Reserve `gold-200/300` for soft borders, dividers on dark, decorative hairlines
- **Hairlines**: `bg-ink-800/15` for dividers on light, `bg-ivory-100/15` on dark.

## Layout & spacing
- Generous whitespace. Sections typically `py-20 md:py-28` on desktop, `py-12` on mobile.
- Container max-width `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.
- Hairline `1px` dividers only — no thick rules.

## Imagery
- Editorial jewelry photography: warm gold pieces on dark or warm-neutral backgrounds.
- All editorial product imagery comes from the `strk-img` tag system (`data-strk-img`, `data-strk-bg`). Never paste external image URLs.
- Product cards use square (1:1) thumbnails; hero uses 4:5 or 16:9 vertical.

## Buttons
- **Primary CTA** (dark on light, "Shop the Collection"): `btn-primary` — `bg-ink-800 text-ivory-50`, hover `bg-gold-500`.
- **Accent CTA** (gold): `btn-accent` — `bg-gold-400 text-ink-900`, hover `bg-gold-500 text-ivory-50`. Use sparingly (one per viewport).
- **Outline** (`btn-outline`) for secondary actions.
- All buttons: UPPERCASE, `tracking-widest2`, 11px, padded `px-7 py-4`. Soft focus ring in gold.

## Motion
- Transitions: 300–500ms `ease-luxe` (cubic-bezier(0.22, 1, 0.36, 1)).
- Hover on cards: image swap, image zoom (1.04), reveal "Add to Cart" overlay.
- Drawer: slide from right 400ms `ease-luxe`.
- No bouncy springs, no parallax.

## Do
- Use serif for *any* editorial headline, every product name, every section H2.
- Keep one accent (gold) per viewport for restraint.
- Use `tracking-widest2` for all-caps; never `tracking-wide` or `tracking-wider`.
- Maintain `text-balance` on hero/feature copy.

## Don't
- No raw hex in component class strings.
- No stock blue/teal/pink — would clash with warm palette.
- No discount badges, "SALE" tags, or "50% OFF" colors. (Brand is premium, never bargain.)
- No emoji icons; use `lucide-react`.
- No centered all-caps body copy (eyebrows only).
