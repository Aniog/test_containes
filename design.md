# Velmora Fine Jewelry Visual Design Guide

## Direction
Quiet luxury with a warm editorial feel. The storefront should feel premium and intimate, like a modern demi-fine jewelry campaign rather than a discount marketplace.

## Palette
Use one cohesive warm-neutral palette that flatters gold jewelry:

- `velmora-ink` `#201A17`: primary deep text and dark editorial surfaces.
- `velmora-espresso` `#3A2A21`: secondary dark surface and nav/footer tone.
- `velmora-ivory` `#FBF7EF`: main page background.
- `velmora-mist` `#F5EEE4`: soft section background.
- `velmora-sand` `#EEE5D8`: hairline borders and cards.
- `velmora-champagne` `#D9B86F`: restrained metallic accent and primary CTA.
- `velmora-gold` `#B88935`: hover/accent depth.
- `velmora-clay` `#9A6B52`: muted warm body text.
- `velmora-rouge` `#7A3832`: small editorial emphasis only.

Use `velmora-ivory` or `velmora-mist` for most light sections, `velmora-ink` for high-contrast editorial blocks, and `velmora-champagne` sparingly for premium CTAs and details.

## Typography
- Headings and logo: Cormorant Garamond, elegant serif, high contrast.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide letter spacing, serif, refined.
- Keep copy airy with generous line-height.

Example classes:
- Hero headline: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Section eyebrow: `font-sans text-xs uppercase tracking-widest`
- Product name: `font-serif uppercase tracking-widest`

## Layout and Spacing
- Mobile-first layouts that expand to generous desktop grids.
- Use large whitespace, thin dividers, and editorial image scale.
- Desktop should not feel like a stacked mobile layout; use multi-column grids and split sections.
- Use rounded `rounded-sm` to `rounded-3xl` selectively; jewelry cards should feel soft but not bubbly.

## Components
- Buttons: solid champagne on dark or ink text, outlined ink/champagne on light. Use subtle transitions.
- Cards: soft ivory/mist backgrounds, thin sand borders, gentle shadows on hover.
- Navigation: transparent over hero, solid ivory after scroll with a hairline sand border.
- Cart drawer: ivory panel, strong readable ink text, clear quantity controls.

## Do's
- Use warm gold-focused imagery with neutral/dark backgrounds.
- Keep animations subtle: fade, lift, image crossfade.
- Keep all text high-contrast and readable.
- Use hairline borders instead of heavy boxes.

## Don'ts
- Do not use loud sale colors, badges, discount-style copy, or generic marketplace patterns.
- Do not overuse gold; keep it as a restrained accent.
- Do not place muted text on low-contrast backgrounds.
