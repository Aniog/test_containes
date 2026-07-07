# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial point of view. The site should feel like a premium jewelry lookbook first and a shop second: refined, generous, tactile, and never discount-led.

## Palette
Use one consistent warm neutral palette that flatters gold jewelry:
- `velmora-ink` / `#17130F`: deep espresso-black for premium text and dark surfaces.
- `velmora-ivory` / `#F8F3EA`: warm editorial page background.
- `velmora-pearl` / `#EFE5D6`: soft section/card surface.
- `velmora-linen` / `#D9CBB8`: hairlines, borders, quiet dividers.
- `velmora-gold` / `#B98945`: restrained metallic accent for CTAs and highlights.
- `velmora-bronze` / `#6E4C2F`: warm secondary text and hover states.
- `velmora-blush` / `#B98D7A`: soft romantic accent blocks.

Do: pair dark text with ivory/pearl backgrounds and ivory text with dark backgrounds. Use gold as an accent, not a large background unless paired with ink text.

Do not: use loud sale colors, bright blues, neon gradients, or low-contrast muted text.

## Typography
- Headings and product names: elegant serif, `Cormorant Garamond`, with generous line-height.
- Body and UI: clean sans-serif, `Manrope`.
- Product names: uppercase, wide tracking, refined small caps feeling.

Example Tailwind classes:
- Hero headings: `font-serif text-5xl md:text-7xl lg:text-8xl leading-none`.
- Section headings: `font-serif text-4xl md:text-6xl leading-tight`.
- Product names: `font-serif uppercase tracking-[0.22em] text-sm`.
- UI labels: `font-sans uppercase tracking-[0.18em] text-xs`.

## Layout & Spacing
- Mobile-first, with airy spacing even on small screens.
- Use full-bleed editorial hero imagery, split sections, and generous max-width containers.
- Prefer thin hairline dividers: `border-velmora-linen/70`.
- Cards should feel quiet and premium with soft shadows and simple hover motion.

## Components
- Buttons: solid `velmora-gold` with ink text for primary CTAs; outlined ivory/gold for dark hero overlays.
- Navigation: transparent over hero, then solid ivory with a soft shadow after scroll.
- Product cards: image-led, minimal text, hover reveal for secondary image and quick add.
- Cart drawer: ivory surface, strong ink text, clear quantity controls.

## Motion
Use subtle transitions only: opacity, transform, color, and shadow. Keep motion under 300ms and avoid bouncy effects.
