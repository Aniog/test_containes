# Velmora Fine Jewelry Design System

## Direction
Velmora is quiet luxury for demi-fine gold jewelry: warm, editorial, refined, and premium-but-accessible. The storefront should feel like a boutique lookbook with commerce functionality, not a discount marketplace.

## Palette
Use one consistent warm editorial palette:
- `velmora-ink` `#17120E`: refined dark espresso for primary text and deep surfaces.
- `velmora-brown` `#30231A`: warm dark brown for overlays and footer surfaces.
- `velmora-cream` `#F7F0E7`: soft cream page background.
- `velmora-stone` `#E8DDD0`: neutral dividers, cards, and subtle panels.
- `velmora-champagne` `#C7A46B`: restrained metallic accent for CTAs, stars, key borders, and hover states.
- `velmora-gold` `#A9793A`: deeper gold accent for active states.
- `velmora-blush` `#EFE1D6`: warm accent block background.
- `velmora-muted` `#776A5F`: legible muted copy.

Do:
- Use cream or stone backgrounds with ink text for readability.
- Use champagne/gold accents sparingly for premium emphasis.
- Use dark espresso/brown sections with cream text where editorial impact is needed.

Don't:
- Use bright sale colors, neon accents, loud gradients, or generic ecommerce blues.
- Put low-contrast beige text on cream backgrounds.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif. Example Tailwind: `font-serif`.
- Body and UI: Manrope, clean sans-serif. Example Tailwind: `font-sans`.
- Product names: uppercase, wide letter spacing. Example Tailwind: `uppercase tracking-[0.22em]` only where a deliberate editorial label style is needed.

## Layout & Spacing
- Mobile-first with generous whitespace and calm rhythm.
- Desktop sections should use wide editorial grids rather than stacked mobile layouts.
- Use thin hairline dividers: `border-velmora-stone` or `border-white/15` on dark surfaces.
- Use rounded corners intentionally: soft product/image cards (`rounded-2xl`, `rounded-3xl`) but keep buttons crisp and refined.

## Components
- Buttons: solid champagne on dark/cream surfaces or outlined ink/champagne. Use subtle hover transitions.
- Product cards: large imagery, serif uppercase names, quick add revealed on hover/focus.
- Cart drawer: cream panel with ink text, strong dividers, and clear quantity controls.
- Forms: cream/stone inputs with ink text, champagne focus border.

## Motion
Use subtle transitions only: opacity, transform, background, border color. Avoid bouncy or loud animation.
