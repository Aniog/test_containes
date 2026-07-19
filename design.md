# Velmora Fine Jewelry Design System

Visual direction: quiet luxury, warm editorial, premium demi-fine jewelry. The site should feel calm, spacious, and tactile rather than promotional.

## Palette
- Base: deep espresso black (`velmora-espresso`, example `bg-velmora-espresso text-velmora-ivory`) for hero, footer, overlays, and premium panels.
- Surface: warm ivory (`velmora-ivory`) and soft champagne (`velmora-champagne`) for page backgrounds and cards.
- Accent: antique gold (`velmora-gold`) for primary buttons, icons, ratings, and fine dividers.
- Secondary accent: muted rose clay (`velmora-rose`) for newsletter and editorial highlights.
- Text: refined charcoal (`velmora-ink`) for body text on light surfaces; taupe (`velmora-taupe`) for supporting text.

## Typography
- Headings and editorial text: Cormorant Garamond, elegant serif; use generous line-height and weight 500–700.
- Body/UI: Manrope, clean sans-serif; use balanced tracking and medium weights for controls.
- Product names: uppercase, wide letter spacing, serif, compact but readable.

## Layout and spacing
- Use generous whitespace, centered max-width containers, and clear section rhythm.
- Desktop layouts may use multi-column editorial grids; mobile stacks gracefully with strong spacing.
- Use thin hairline dividers (`border-velmora-line`) rather than heavy borders.

## Components
- Buttons: premium, restrained; solid antique gold for main actions, transparent outlined style for secondary actions.
- Cards: soft champagne/ivory surfaces, rounded-xl or rounded-2xl, subtle shadow only on hover.
- Imagery: large editorial jewelry/model imagery, warm gold on dark or neutral backgrounds.
- Navigation: transparent over hero, solid ivory/espresso on scroll with subtle blur.

## Do
- Keep contrast high and text readable on every surface.
- Use slow, subtle hover transitions and small transforms.
- Keep promotional language understated.

## Don't
- Do not use loud sale colors, generic blue links, heavy boxes, or discount-style badges.
- Do not overcrowd product cards or mobile views.
- Do not use arbitrary hex values inside JSX class strings; use named Tailwind colors.
