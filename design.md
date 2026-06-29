# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with warm editorial restraint. The site should feel like a premium demi-fine jewelry campaign: soft cream surfaces, deep cocoa ink, warm metallic accents, generous whitespace, fine dividers, and large warm-lit imagery.

## Color palette
Use one cohesive palette throughout:
- `velmora-ink` (`#241914`) for primary text and deep surfaces.
- `velmora-cocoa` (`#4A3328`) for secondary dark panels and subdued UI text.
- `velmora-cream` (`#F7F1E8`) for the page background.
- `velmora-porcelain` (`#FFFCF7`) for cards and elevated areas.
- `velmora-champagne` (`#D6B071`) for primary accents and premium buttons.
- `velmora-antique` (`#9A6A32`) for hover accents and subtle metallic details.
- `velmora-blush` (`#E8D4C5`) for newsletter and soft editorial panels.
- `velmora-line` (`#DDD0BF`) for thin dividers and card borders.

Do:
- Pair dark text with cream or porcelain backgrounds.
- Pair cream text with ink/cocoa backgrounds.
- Use champagne sparingly for CTAs, icons, ratings, and small accents.

Don't:
- Use bright discount colors, loud gradients, or low-contrast beige-on-beige text.
- Use arbitrary one-off colors in JSX; use the named theme tokens.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase with the `tracking-luxury` utility.
- Buttons and small labels: uppercase, compact, letter-spaced.

## Layout and spacing
- Mobile-first layouts with comfortable vertical rhythm.
- Desktop should use editorial two-column and multi-column layouts, not mobile stacking.
- Use generous section padding (`py-16`, `lg:py-24`) and centered max-width containers.
- Use hairline borders with `border-velmora-line`.

## Components
- Buttons: premium solid champagne or outlined dark/line styles with subtle hover transitions.
- Cards: porcelain or transparent surfaces, soft shadow only on hover.
- Navigation: transparent over hero, then porcelain/blurred when scrolled.
- Cart drawer: porcelain panel with readable ink text and clear controls.
- Imagery: warm-lit gold jewelry and editorial model imagery using Strikingly image tags, never hardcoded external image URLs.
