# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial style: warm ivory surfaces, deep espresso contrast, restrained antique-gold accents, generous whitespace, thin hairline dividers, and soft photographic cards. The experience should feel premium and calm, never loud, sale-driven, or generic.

## Palette
All color values are registered as named Tailwind colors in `tailwind.config.js`.

- `velmora-ivory` `#F8F3EA`: primary page background.
- `velmora-pearl` `#FFFDF8`: cards, form surfaces, drawer background.
- `velmora-espresso` `#241A16`: primary text and dark editorial panels.
- `velmora-cocoa` `#5E4A3F`: secondary body text.
- `velmora-taupe` `#CDBFAE`: hairlines, borders, quiet separators.
- `velmora-champagne` `#D6AA63`: premium metallic accent and primary CTA.
- `velmora-gold` `#B98232`: hover accent and small UI details.
- `velmora-blush` `#E9D9CC`: soft editorial accent blocks.
- `velmora-sage` `#586052`: muted contrast for trust/status details.

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond. Use elegant scale, light-to-medium weights, and relaxed line-height.
- Body and interface: `font-sans` using Manrope. Keep UI clear and understated.
- Product names: uppercase with wide tracking (`uppercase tracking-[0.24em]` or `tracking-widest`).

## Layout and spacing
- Mobile-first with strong responsive behavior using `md:` and `lg:` breakpoints.
- Generous vertical rhythm: section padding of `py-16`, `md:py-24`, or larger for editorial sections.
- Use max-width containers (`max-w-7xl mx-auto px-5 sm:px-8`) to keep content refined.
- Use thin borders (`border-velmora-taupe/60`) and subtle shadows only.

## Components
- Buttons: premium solid champagne or outlined espresso/champagne. Use pill shapes, uppercase labels, wide letter spacing, and subtle hover transitions.
- Product cards: clean pearl/ivory surfaces, image-first, second image reveal on hover, quick add overlay.
- Navigation: transparent over the hero, solid ivory/pearl on scroll with hairline border.
- Forms: pearl surfaces, espresso text, taupe borders, champagne focus states.

## Do
- Use warm editorial imagery for gold jewelry, skin, silk, marble, and neutral backdrops.
- Keep text contrast explicit and readable on every surface.
- Preserve whitespace and let product imagery breathe.

## Don't
- Do not use bright discount colors, heavy gradients, neon accents, or crowded sale badges.
- Do not use low-contrast text on image overlays; add a dark overlay where needed.
- Do not hardcode arbitrary colors in JSX class strings; use the named Tailwind palette.
