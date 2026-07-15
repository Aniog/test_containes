# Velmora Fine Jewelry Visual Style

## Direction
Quiet luxury with warm editorial restraint. The storefront should feel like a high-end demi-fine jewelry atelier: generous whitespace, refined contrast, tactile neutrals, warm metallic accents, large imagery, and thin hairline dividers. Avoid loud sale language, bright discount colors, generic marketplace cards, or heavy chrome.

## Palette
Use one cohesive warm-neutral palette that flatters gold jewelry:
- `velmora-ink` `#17110D`: primary text and deep editorial surfaces.
- `velmora-espresso` `#2A1C15`: rich dark panels and footer.
- `velmora-cream` `#F8F1E7`: main page background.
- `velmora-pearl` `#FFFDF8`: card and input surfaces.
- `velmora-linen` `#E9DCC9`: hairlines, muted blocks, soft borders.
- `velmora-champagne` `#C69B5C`: metallic accent and primary buttons.
- `velmora-bronze` `#8C6239`: hover accent and secondary emphasis.
- `velmora-mist` `#766D64`: readable muted body copy.
- `velmora-rose` `#D8B8A8`: soft editorial highlight blocks.

## Typography
- Headings and brand/product names: Cormorant Garamond, elegant serif, high contrast, graceful line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase with wide letter spacing, serif, never cramped.
- Navigation and small labels: uppercase or title case with subtle tracking.

## Layout and Spacing
- Mobile-first with calm stacked sections and large tap targets.
- Desktop should use editorial grids, split sections, and spacious gutters; do not keep a mobile single-column layout on large screens.
- Use generous vertical rhythm: section padding around `py-16 md:py-24`, content width `max-w-7xl`, inner card padding `p-5 md:p-7`.
- Use thin dividers with `border-velmora-linen`; avoid thick borders.

## Components
- Buttons: premium, restrained, rounded-full or soft pill shapes. Primary buttons use champagne background with ink text; secondary buttons use transparent/outline champagne or linen borders.
- Cards: pearl/cream surfaces, subtle shadow, thin linen border, soft image scale on hover.
- Product cards: editorial image dominant, uppercase names, muted description, champagne price. Hover reveals alternate image feel and a refined quick add button.
- Navigation: transparent over hero, solid cream/pearl with blur and hairline after scroll.
- Cart drawer and overlays: pearl surface, ink text, readable muted labels, clear quantities.

## Imagery
Warm-lit gold jewelry on model skin, neutral silk, stone, or deep editorial backgrounds. Use stock image data attributes with nearby static text references. Prefer large, editorial crops rather than cluttered product cutouts.

## Do's
- Maintain strong contrast for every text element.
- Pair dark surfaces with cream/champagne text and light surfaces with ink/mist text.
- Use subtle transitions: opacity, transform, shadow, border color.
- Keep CTAs confident and minimal.

## Don'ts
- No neon colors, bright sale red, or generic blue ecommerce links.
- No dense product grids without whitespace.
- No unreadable muted text or low-contrast overlays.
- No arbitrary one-off hex values in JSX class strings; use named Tailwind colors from this guide.
