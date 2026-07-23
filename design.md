# Velmora Fine Jewelry — Design System

## Mood & Direction
Quiet luxury. Warm, editorial, refined. Demi-fine gold jewelry presented like a
premium magazine — never loud, never discount-looking, never generic e-commerce.
Deep espresso-near-black surfaces, warm ivory/cream, and a restrained antique-gold
metallic accent. Generous whitespace, hairline dividers, soft shadows, subtle motion.

## Color Palette (Tailwind tokens — use these, never raw hex in markup)
- `espresso`  #211A15  — primary deep base (footer, dark sections, primary buttons)
- `cocoa`     #3A2E24  — secondary deep surface, hover on espresso
- `cream`     #FAF6EF  — primary page background (light sections)
- `sand`      #F1EADD  — alternate light surface, subtle panels
- `ivory`     #FFFDF9  — card surfaces, light text on dark backgrounds
- `gold`      #B98A2F  — primary metallic accent (CTAs, links, icons, price emphasis)
- `gold-deep` #96701F  — gold hover / pressed state
- `bronze`    #8A6A3B  — muted metallic for secondary details, star ratings
- `line`      #E6DCCB  — hairline dividers on light surfaces
- `line-dark` #4A3B2D  — hairline dividers on dark surfaces

### Contrast rules
- Body text on light surfaces: `espresso` (or `cocoa` for secondary).
- Body text on dark surfaces: `ivory` (or `cream` / gold tints for accents).
- Never place `gold` body text on `cream` (too low contrast) — use `gold-deep`
  or `espresso` for readable text; reserve `gold` for large display, borders,
  icons, and button fills where the label is `espresso`/`ivory`.
- Muted text must stay legible: use `cocoa/70` on light, `ivory/70` on dark.

## Typography
- Display / headings / product names: **Cormorant Garamond** (serif), weight 500–600.
  Loaded via Google Fonts in `index.html`. Tailwind: `font-display`.
- Body / UI / labels: **Manrope** (sans), weight 400–700. Tailwind: `font-body`.
- Product names & eyebrows: UPPERCASE, wide letter-spacing (`tracking-[0.18em]`
  to `tracking-[0.32em]`), small size for eyebrows.
- Headline scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`.
- Eyebrow labels: `text-[11px] tracking-[0.32em] uppercase` in `gold-deep` or `bronze`.

## Shape, Border, Shadow
- Corners: mostly sharp / minimal radius (`rounded-sm` max on cards & buttons).
  Editorial luxury favors clean edges. Pills (`rounded-full`) only for variant
  swatches and small tags.
- Borders: hairline `border border-line` (light) / `border-line-dark` (dark).
- Shadows: soft and low — `shadow-[0_18px_40px_-24px_rgba(33,26,21,0.35)]`.

## Buttons
- Primary (accent): solid `gold` bg, `espresso` text, uppercase tracking, hover
  darkens to `gold-deep` with `ivory` text. Sharp corners, comfortable padding.
- Secondary: outlined `border border-espresso text-espresso` (light) or
  `border-ivory text-ivory` (dark), transparent bg, hover fills subtly.
- Ghost/link: serif or small-caps with an animated underline.
- All buttons: `transition-colors duration-300`, no heavy radius, no gradients.

## Imagery
- Large editorial imagery; warm-lit gold jewelry on dark/neutral backgrounds.
- Stock via `data-strk-img` / `data-strk-bg` tags referencing nearby text ids.
- Reel/UGC cards use 9:16 vertical; product imagery 4:5 or 1:1; hero 16:9 full-bleed.

## Motion
- Subtle only: fade/slide-up reveals on scroll (IntersectionObserver), gentle
  image scale on hover (`scale-[1.03]`), soft color transitions.
- Durations 300–700ms, easing `ease-out` / cubic-bezier. No bouncy or flashy motion.

## Layout & Spacing
- Mobile-first. Max content width `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.
- Section vertical rhythm: `py-16 md:py-24 lg:py-28`.
- Hairline divider between major sections where useful (`border-t border-line`).
- Desktop: multi-column grids; do not stack single-column on wide screens.

## Do / Don't
- DO keep generous whitespace and restrained accent use.
- DO use uppercase wide-tracking for product names and eyebrows.
- DO keep every text readable against its background (explicit fg colors).
- DON'T use bright/saturated accent colors, gradients, or heavy shadows.
- DON'T hardcode hex values in components — use the Tailwind tokens above.
- DON'T use large border radius or playful shapes.
- DON'T crowd mobile layouts; preserve breathing room.
