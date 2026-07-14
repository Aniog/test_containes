# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, refined, and premium without looking inaccessible. The visual tone should flatter gold jewelry with soft contrast, elegant typography, and restrained motion.

## Color system
Use named colors only.

- `bg-velmora-cream` / `text-velmora-ink`: main page background and primary text
- `bg-velmora-panel` / `text-velmora-cream`: hero, footer, and dark editorial surfaces
- `text-velmora-gold`, `border-velmora-gold`, `bg-velmora-gold`: warm metallic accent for CTAs and premium details
- `bg-velmora-blush`: soft accent blocks like newsletter and pills
- `text-velmora-muted`, `border-velmora-line`: secondary copy and hairline dividers
- `bg-velmora-soft`: elevated neutral surface for cards and filters

Suggested palette mapping in Tailwind config:
- velmora-cream: `#f6f1ea`
- velmora-panel: `#221b18`
- velmora-ink: `#241d1a`
- velmora-gold: `#b58a54`
- velmora-blush: `#e8ddd2`
- velmora-soft: `#efe6dd`
- velmora-line: `#d7c8b9`
- velmora-muted: `#6c5f55`

## Typography
- Headings and product names: `Cormorant Garamond`
- Body and UI: `Inter`
- Product names should be uppercase with wide letter-spacing.
- Use serif typography generously for editorial hierarchy, but keep supporting copy clean and modern.

## Layout and spacing
- Favor roomy vertical spacing: `py-16`, `py-20`, `py-24`.
- Use max widths around `max-w-7xl` with generous horizontal padding.
- Cards should feel airy and premium with thin borders, soft shadows, and rounded corners.
- Use thin dividers (`border-velmora-line`) rather than heavy separators.

## Buttons and interactions
- Primary buttons: warm gold fill with dark text.
- Secondary buttons: transparent or cream with gold/ink border.
- Hover states should be subtle: slight lift, shadow, color deepening, or opacity change.
- Motion should feel smooth and understated, around `duration-300`.

## Imagery
- Use large editorial imagery with warm lighting and neutral or dark backdrops.
- UGC and category imagery should remain polished and cohesive.
- Avoid cluttered or overly commercial visuals.

## Do
- Keep contrast high and text readable on every surface.
- Use editorial rhythm with whitespace and asymmetry where helpful.
- Keep the storefront premium, clean, and focused on the product.

## Don't
- Do not use loud sale styling, bright promotional reds, or discount-banner visuals.
- Do not mix multiple accent colors.
- Do not use cramped layouts or overly dense product cards.
