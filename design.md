# Velmora Fine Jewelry — Design System

A high-end DTC storefront for demi-fine gold jewelry. Quiet luxury, warm, editorial. NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette (single confident direction: warm editorial)

- **Background — Parchment Ivory `#F6F1E8`** — the primary canvas, warm, editorial, never stark white. Use for `bg-canvas` and most section surfaces.
- **Surface — Soft Linen `#FBF7F0`** — slightly lighter than canvas, for cards and gentle elevation.
- **Ink — Espresso `#1B1611`** — primary text and dark actions, warmer than black, complements gold.
- **Ink soft — Warm Taupe `#7A6B5A`** — secondary text, captions, metadata.
- **Hairline — Dune `#E0D5C0`** — thin dividers, borders, subtle separators.
- **Accent — Brushed Gold `#A8804B`** — restrained metallic accent, used for highlights, underline links, badges. Never as a full-bleed background.
- **Accent deep — Burnished Gold `#8A6938`** — hover state for gold accents.
- **Subtle blush — Petal `#EAD9C2`** — very subtle hover surface, banner backgrounds.

Foreground/background pairs (always explicit):
- `text-espresso` on `bg-canvas`, `bg-surface`
- `text-canvas` on `bg-espresso`
- `text-gold` accent on `bg-canvas`, `bg-espresso`
- `text-taupe` for metadata on `bg-canvas`, `bg-surface`

## Typography

- **Headings & product names — Cormorant Garamond** (Google Fonts), serif, elegant, editorial.
  - Hero headline: `font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight`
  - Section title: `font-serif text-3xl md:text-5xl tracking-tight`
  - Product name: `font-serif text-base md:text-lg uppercase tracking-[0.18em]`
- **Body & UI — Inter** (Google Fonts), clean, neutral sans.
  - Body: `font-sans text-sm md:text-base leading-relaxed text-espresso/80`
  - UI: `font-sans text-xs uppercase tracking-[0.2em] font-medium` for small caps UI labels.
- **Accent script (occasional, optional)** — Cormorant Garamond Italic for editorial pull-quotes.

## Spacing & Layout

- Generous whitespace. Section vertical padding: `py-20 md:py-28 lg:py-32`.
- Content max-width: `max-w-7xl`, centered with `px-6 md:px-10`.
- Hairline dividers: `border-t border-dune` (1px). Never thick rules.
- Grids: 12-col desktop, 4-col tablet, 2-col mobile with consistent gap-6 md:gap-8.

## Buttons

- **Primary** — solid Espresso `bg-espresso text-canvas hover:bg-espresso/90`, uppercase tracking-[0.2em] text-xs, rounded-none, `h-12 px-8`. Premium solid.
- **Secondary** — outlined, `border border-espresso text-espresso hover:bg-espresso hover:text-canvas`, rounded-none, uppercase tracking.
- **Ghost / link** — small caps with underline-on-hover in `text-gold`.

Never use rounded-full for primary CTAs. Soft 0px radius (rounded-none) reads as more editorial.

## Cards (Product Cards)

- Soft surface `bg-surface` over `bg-canvas`. No hard border by default; on hover a subtle `shadow-[0_20px_60px_-30px_rgba(27,22,17,0.25)]`.
- Image aspect `4/5` for product photos. On hover, swap to second image with crossfade.
- Quick add button slides up from bottom on hover, full width, `bg-espresso text-canvas`.

## Imagery

- Warm-lit, editorial. Gold jewelry on warm dark or neutral backgrounds. Avoid bright white seamless backdrops.
- Hero: extreme close-up of gold on skin or warm linen, soft directional light.
- UGC reel: 9:16 vertical, lifestyle on body.

## Icons

- Lucide React only. `stroke-width` 1.25 for editorial feel. Icon size `h-4 w-4` for UI, `h-5 w-5` for emphasis.

## Do's

- Always set explicit foreground color on any colored background.
- Use uppercase + wide letter-spacing for product names, button labels, section eyebrows.
- Use Cormorant Garamond for any editorial moment (hero, section titles, product names, pull quotes).
- Keep one accent (brushed gold) used sparingly — for underlines, eyebrow labels, price highlights, hover states. Never for a wall of color.
- Subtle motion: `transition-all duration-500 ease-out` on hover; never bouncy or fast.

## Don'ts

- No bright primary colors (no red/blue/green branding). No "sale red" badges.
- No discount badges, no countdown timers, no "limited time" overlays.
- No "FREE!" shouty banners. Trust is communicated quietly in a thin strip.
- No neon, no harsh black `#000`, no pure white `#FFF`.
- No emoji, no icons larger than the type. No rounded-2xl product cards.
- No stock image of models staring at the camera — editorial and candid only.
