# Velmora Fine Jewelry — Visual System

A quiet-luxury, editorial DTC jewelry storefront. Premium demi-fine gold pieces.
Aesthetic = warm neutral palette + restrained gold accent + serif/sans pairing.
NOT loud, NOT discount-y, NOT generic e-commerce.

## Palette (committed direction: warm ivory + ink + gold)

Named in tailwind.config equivalents via arbitrary values. Use these tokens, do not invent new hexes.

- `velmora-ivory`   #F7F2EA  → primary page background (soft warm cream)
- `velmora-bone`    #EFE7DA  → secondary surface, banner strips, alt sections
- `velmora-sand`    #E2D4BE  → hairline dividers, muted surface
- `velmora-ink`     #1A1410  → primary text, deep accent (almost-black warm brown)
- `velmora-graphite`#3D332A  → secondary text
- `velmora-mute`    #8B7D6B  → tertiary text, captions, helpers
- `velmora-gold`    #B8924A  → accent (buttons, links, stars, focus)
- `velmora-goldDeep`#8E6E33  → hover state for gold accent
- `velmora-goldSoft`#D9BE85  → soft gold highlight on dark backgrounds

Tailwind usage examples (arbitrary values keep tokens self-documenting):
- background: `bg-[#F7F2EA]`, `bg-[#EFE7DA]`, `bg-[#1A1410]`
- text: `text-[#1A1410]`, `text-[#3D332A]`, `text-[#8B7D6B]`, `text-[#B8924A]`
- borders: `border-[#E2D4BE]`, `border-[#1A1410]/10`

Contrast rules:
- On ivory/bone surfaces → use ink for primary text, graphite for secondary, mute for captions.
- On ink (dark) surfaces → use ivory `#F7F2EA` for primary text, `#D9BE85` for accent text.
- Never put gold `#B8924A` text on ivory backgrounds at small sizes — only headlines, CTA labels, or icons.
- Hover-only color shifts must remain readable.

## Typography

- Serif (display & product names): **Cormorant Garamond** — `font-serif`
  - Headlines: `font-serif font-light tracking-tight`
  - Product names: `font-serif uppercase tracking-[0.18em]`
- Sans (body & UI): **Inter** — default `font-sans`
  - Body: `text-[15px] leading-relaxed`
  - UI labels / micro-copy: `uppercase tracking-[0.22em] text-xs`

Type scale (do not hardcode random sizes):
- Hero headline: `text-5xl md:text-7xl lg:text-8xl font-serif font-light`
- Section title: `text-3xl md:text-5xl font-serif font-light`
- Product name (card): `text-sm uppercase tracking-[0.18em]`
- Product name (PDP): `text-2xl md:text-3xl uppercase tracking-[0.18em] font-serif`
- Price: `text-base tracking-wide`
- Eyebrow: `text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B]`

## Spacing & layout

- Generous whitespace. Section vertical padding: `py-20 md:py-28 lg:py-32`.
- Container: `max-w-7xl mx-auto px-5 md:px-10`.
- Hairline dividers: `border-t border-[#1A1410]/10` (light) or `border-[#F7F2EA]/15` (on dark).
- Grid gaps: `gap-6 md:gap-10`. Never tight.

## Components

Buttons:
- Primary (gold solid): `bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-8 transition-colors duration-300`
- Primary on dark: same gold accent.
- Outline (ink): `border border-[#1A1410] text-[#1A1410] hover:bg-[#1A1410] hover:text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-8 transition-colors duration-300`
- Ghost link: `text-[#1A1410] underline-offset-8 hover:underline tracking-wider`

Cards:
- No heavy shadows. Soft on hover only: `hover:shadow-[0_10px_40px_-15px_rgba(26,20,16,0.25)] transition-all duration-500`
- Image ratio: `aspect-[4/5]` for product cards, `aspect-[9/16]` for UGC reels, `aspect-[3/4]` for category tiles.
- Hover: scale image `group-hover:scale-105 transition-transform duration-[1200ms] ease-out`.

Inputs:
- `bg-transparent border-b border-[#1A1410]/30 focus:border-[#1A1410] py-3 placeholder:text-[#8B7D6B] outline-none transition-colors`

Dividers / accents:
- Thin hairline rule between sections: `<div className="h-px bg-[#1A1410]/10" />`

Animation:
- Default transitions: `duration-300` ease for state, `duration-700`+ for images.
- Page-load fade: subtle `opacity` + `translate-y-2` on mount, no bouncy springs.

## Do's

- DO use serif + uppercase + wide tracking for product names.
- DO use one warm gold accent only; rest neutral.
- DO leave breathing room around hero text and images.
- DO use editorial full-bleed imagery.

## Don'ts

- DON'T use bright reds/oranges for "Sale" badges.
- DON'T use gradients except very subtle warm vignettes on hero.
- DON'T use rounded-2xl chunky cards. Use small radii (`rounded-none` or `rounded-sm`) for a more editorial feel.
- DON'T use neon focus rings; use `ring-1 ring-[#B8924A]/60`.
- DON'T use multiple accent colors. One gold only.
