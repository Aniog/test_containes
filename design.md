# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, candle-lit. Premium demi-fine gold jewelry for women 25–45. Never loud, never discount-looking, never generic e-commerce. Generous whitespace, large imagery, hairline dividers, restrained metallic accents.

## Color direction: "Warm Ivory Editorial"
A warm ivory/cream canvas with deep espresso-brown ink and burnished antique-gold accents. This flatters gold jewelry (warm-on-warm) while staying light, editorial, and accessible. Dark espresso is used sparingly for dramatic sections (newsletter, footer).

### Palette (Tailwind config `theme.extend.colors`)
- `ivory`  #FAF6EF — page background
- `cream`  #F3EDE1 — alt section background / cards
- `sand`   #E9E0CF — deeper neutral panel / image placeholders
- `linen`  #DFD3BE — hairline-adjacent fills
- `ink`    #2B2118 — primary text (deep espresso brown)
- `cocoa`  #4A3A2C — secondary headings
- `taupe`  #8A7A66 — muted body text
- `bronze` #9C7C3C — primary accent (antique gold, buttons/links)
- `bronze-deep` #7D6229 — accent hover state
- `gold`   #C4A265 — metallic highlights (stars, icons, details)
- `espresso` #1E150D — dark sections (newsletter, footer, hero overlay)
- `hairline` #E3D9C6 — hairline dividers

### Contrast rules
- Body text: `ink` or `taupe` on `ivory`/`cream` — always readable.
- On `espresso` surfaces: text `ivory`, secondary text `ivory/70`, accent `gold`.
- Accent buttons: `bronze` bg + `ivory` text; hover `bronze-deep`.
- Never gold/tan text on light backgrounds for anything but large display type; small UI text on accent blocks must be `ivory`.

## Typography (loaded in index.html)
- Display/serif: **Cormorant Garamond** (300–600, italic) → `font-serif`. Headlines, product names, pull quotes.
- UI/body sans: **Manrope** (300–700) → `font-sans`. Body copy, buttons, prices, forms, nav.

### Type rules
- H1 hero: `font-serif text-5xl md:text-7xl`, `font-light`, `tracking-tight` or normal.
- Section titles: `font-serif text-3xl md:text-5xl font-light`.
- Product names: serif OR sans, UPPERCASE, `tracking-[0.18em]`–`[0.25em]`.
- Eyebrow/kicker labels: sans, `text-[11px] uppercase tracking-[0.3em] text-bronze`.
- Body: `text-sm md:text-base leading-relaxed text-taupe`.
- Buttons: `text-[11px] md:text-xs uppercase tracking-[0.25em]`.

## Spacing & layout
- Page sections: `py-16 md:py-24 lg:py-32`.
- Container: `mx-auto max-w-7xl px-5 md:px-8`.
- Hairline dividers: `border-t border-hairline`.
- Grids: bestsellers `grid-cols-2 lg:grid-cols-5`, shop `grid-cols-2 lg:grid-cols-3`, category tiles `md:grid-cols-3`.

## Components
- Buttons (solid): `bg-bronze text-ivory hover:bg-bronze-deep transition-colors duration-300 px-8 py-4 text-[11px] uppercase tracking-[0.25em]`.
- Buttons (outline): `border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-ivory transition-all duration-300`.
- Buttons on dark: `bg-gold text-espresso hover:bg-ivory`.
- Product card: image on `sand` bg, hairline-separated meta, hover reveals second image (crossfade/scale) + "Add to Cart" bar sliding up.
- Inputs: `bg-transparent border-b border-ink/25 focus:border-bronze outline-none py-3 text-sm placeholder:text-taupe/70`.
- Badges: `text-[10px] uppercase tracking-[0.2em] bg-espresso/85 text-ivory px-3 py-1`.
- Stars: `fill-gold text-gold` (lucide Star, size 14).
- Hairline dividers between sections; no heavy cards, no drop shadows except `shadow-[0_20px_60px_-20px_rgba(30,21,13,0.25)]` on drawer/modal.

## Motion
- `transition-all duration-300/500 ease-out`; image hover `scale-105 duration-700`.
- Reveal-on-scroll: fade + translate-y-6, staggered, once. Subtle only.
- Drawer/toast slide-in from right. No bouncy or flashy animations.

## Do's
- Keep every text/background pair high-contrast per palette rules.
- Use hairlines + whitespace instead of boxes/borders everywhere.
- Keep accent (bronze/gold) for CTAs, prices-on-dark, icons, eyebrows only.

## Don'ts
- No bright saturated colors, no pure black (#000) or pure white (#fff) surfaces.
- No gray default Tailwind palette (slate/gray/zinc) — use the warm palette.
- No heavy borders, no loud badges like "SALE -50%", no generic e-commerce red.
- No lowercase buttons; CTAs are uppercase tracked-out.
