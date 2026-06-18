# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with warm editorial restraint. The store should feel premium, intimate, and direct-to-consumer without discount cues. Favor generous whitespace, large warm imagery, thin dividers, refined typography, and subtle motion.

## Palette
Use one cohesive warm-neutral palette that flatters gold jewelry:
- Ink espresso: `velmora-ink` (`#211C18`) for primary text and dark editorial surfaces.
- Bark brown: `velmora-bark` (`#3A2F28`) for secondary dark surfaces.
- Cream: `velmora-cream` (`#F7F1E8`) for the main page background.
- Linen: `velmora-linen` (`#EFE4D4`) for soft cards and section backgrounds.
- Champagne: `velmora-champagne` (`#C7A66A`) for premium accents, borders, stars, and CTAs.
- Brass: `velmora-brass` (`#A77D3E`) for CTA hover states and refined emphasis.
- Blush: `velmora-blush` (`#E5CFC0`) for newsletter and soft editorial blocks.
- Pearl: `velmora-pearl` (`#FFFDF8`) for card surfaces and text on dark backgrounds.

Use strong contrast: dark text on cream/linen/pearl, pearl text on ink/bark, and champagne only as an accent paired with readable foreground text.

## Typography
- Headings and product names: Playfair Display, elegant serif. Product names are uppercase with wide tracking.
- Body and UI: Manrope, clean sans-serif.
- Use airy line heights and restrained capitalization.

Example Tailwind classes:
- Page body: `bg-velmora-cream text-velmora-ink font-sans`
- Editorial heading: `font-serif text-4xl md:text-6xl leading-tight`
- Product name: `font-serif uppercase tracking-[0.22em]` (tracking utility is allowed for brand-specific typography)
- Small UI label: `text-xs uppercase tracking-[0.2em] font-semibold`

## Components
- Buttons: solid champagne with ink text, or outlined champagne/ink with subtle hover fill. Rounded-full for premium pill feel.
- Cards: pearl or transparent surfaces, thin `border-velmora-champagne/25`, soft shadow only on hover.
- Dividers: thin hairlines using `border-velmora-champagne/20`.
- Images: warm, editorial crops with rounded corners only where appropriate; hero can be full-bleed.
- Cart drawer: pearl surface, clear foreground, thin dividers, fixed overlay.

## Motion
Use subtle transitions: opacity, translate, border color, and background color over 200–500ms. Avoid bouncy or loud animations.

## Do
- Keep layouts spacious and editorial.
- Use restrained gold accents.
- Make all text explicitly readable on custom backgrounds.
- Use mobile-first responsive layouts.

## Don't
- Do not use bright sale colors, large discount badges, or generic marketplace styling.
- Do not use low-contrast beige-on-beige text.
- Do not overcrowd product cards or nav.
