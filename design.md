# Velmora Fine Jewelry Design System

## Direction
Velmora uses a warm editorial luxury direction: deep espresso and ink foundations, champagne-gold accents, ivory surfaces, refined borders, and generous whitespace. The site should feel quiet, polished, and premium without looking flashy or discount-oriented.

## Palette
Use named Tailwind colors from `tailwind.config.js` rather than hardcoded hex values in JSX.

- `velmora-ink` (`#171412`): primary dark text and deep surfaces.
- `velmora-espresso` (`#2A211C`): navigation, footer, rich panels.
- `velmora-ivory` (`#F8F3EA`): main page background.
- `velmora-pearl` (`#FFFDF8`): cards and elevated surfaces.
- `velmora-sand` (`#E7D8C3`): subtle backgrounds and dividers.
- `velmora-champagne` (`#C6A15B`): primary metallic accent and buttons.
- `velmora-bronze` (`#8A6637`): hover accent and secondary text.
- `velmora-rose` (`#D9B8A8`): soft editorial highlight.

## Typography
- Headings, brand marks, hero copy, and product names use `font-serif` with Playfair Display.
- Body, UI, forms, and navigation use `font-sans` with Inter.
- Product names are uppercase with wide tracking: `uppercase tracking-[0.22em]` or named utility `tracking-[0.22em]` when appropriate.
- Keep line heights open and elegant. Avoid cramped blocks of text.

## Components
- Buttons: refined, thin borders or solid champagne fills, rounded-full, subtle transitions.
- Cards: pearl surfaces, thin sand borders, soft shadows only on hover.
- Dividers: use hairline borders with `border-velmora-sand` or translucent ivory on dark surfaces.
- Imagery: editorial crops, warm gold jewelry on skin, neutral backgrounds, vertical UGC cards.
- Hover states: subtle opacity, image scale, reveal overlays, and champagne/bronze color shifts.

## Layout
- Mobile-first with generous spacing and readable type.
- Desktop should use multi-column layouts for grids, product pages, split story sections, and footer.
- Use full-bleed hero imagery, editorial whitespace, and restrained accent blocks.

## Do
- Keep text readable with explicit foreground colors on every custom surface.
- Use stock image attributes for jewelry imagery and descriptive nearby text references.
- Preserve a premium, editorial rhythm with generous padding.

## Don’t
- Do not use loud sale colors, bright discount badges, or generic marketplace styling.
- Do not hardcode arbitrary hex colors in JSX class names.
- Do not overcrowd mobile layouts or rely on low-contrast muted text.
