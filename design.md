# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, restrained. Demi-fine gold jewelry presented like a
magazine spread — generous whitespace, hairline dividers, soft shadows, no loud
discount aesthetics. Every accent is used sparingly.

## Color Palette (Tailwind tokens — use these, never raw hex in components)
- `ivory` (#FAF6EF) — primary page background. Soft warm white.
- `cream` (#F2EBDF) — alternating section background, image placeholder backdrop.
- `sand` (#E9DFCE) — deeper neutral for subtle fills.
- `ink` (#26201A) — primary text, solid buttons. Deep warm espresso-brown, never pure black.
- `ink-soft` (#6E6357) — secondary text, eyebrows, metadata.
- `espresso` (#1D1712) — dark sections (newsletter, footer), image overlays.
- `bronze` (#A87E4F) — THE single accent. CTAs, links on hover, stars, small highlights.
- `bronze-dark` (#8F6B3F) — accent hover state.
- `bronze-light` (#C8A878) — soft accent on dark backgrounds.
- `line` (#E3D9C8) — hairline borders/dividers.

Rules:
- Dark text on ivory/cream; ivory text on espresso. Never ivory text on cream.
- Bronze is for actions and tiny highlights only — never large fills except CTA buttons.
- Overlays on imagery: espresso gradient at 40–70% so overlaid text is always readable.

## Typography
- Serif: "Cormorant Garamond" (`font-serif`) — headlines, product names, pull quotes.
  - Product names: UPPERCASE with wide tracking, e.g. `font-serif uppercase tracking-[0.18em]`.
  - Headlines: `font-serif text-4xl md:text-6xl`, weight 500, tight leading.
  - Italic serif for editorial captions/testimonials.
- Sans: "Manrope" (`font-sans`) — body copy, UI, buttons.
  - Buttons/labels/eyebrows: `text-[11px] uppercase tracking-[0.2em] font-medium`.
  - Body: `text-sm md:text-base leading-relaxed text-ink-soft`.

## Spacing & Layout
- Page container: `container` (max 1280px, px-5).
- Section rhythm: `py-16 md:py-24`. Hairline `border-t border-line` to separate.
- Grids: product grids `grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10` style.
- Generous whitespace beats density. When in doubt, add space.

## Components
- Buttons: sharp/subtle radius (`rounded-sm`), uppercase micro-type.
  - Primary: `bg-bronze text-ivory hover:bg-bronze-dark`.
  - Outline: `border border-ink/30 hover:border-ink` (light) or `border-ivory/40` (dark).
- Cards: no heavy shadows; `border border-line` or bare imagery with `bg-cream` placeholders.
- Images: product aspect 3:4, reels 9:16, journal 3:2. Hover: slow `scale-105` over 700ms.
- Icons: Lucide only, thin stroke, `w-4 h-4` / `w-5 h-5`.

## Motion
- Subtle only: 300–700ms ease-out. Fade-up on scroll (Reveal), image scale on hover,
  nav transparency transition. No bouncy or flashy animation.

## Don'ts
- No pure black (#000) or pure white (#FFF) surfaces.
- No bright saturated colors, no gradients other than espresso image overlays.
- No heavy drop shadows; prefer hairline borders.
- No cramped mobile stacking on desktop — desktop gets real multi-column grids.
