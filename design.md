# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet-luxury editorial look for premium-but-accessible demi-fine jewelry. The site should feel warm, refined, tactile, and spacious. Avoid loud sales language, bright discount colors, heavy borders, or generic marketplace layouts.

## Color palette
Use one consistent warm editorial palette that flatters gold jewelry:

- Deep ink base: `velmora-ink` / `#1C1814` for primary text and dark surfaces.
- Espresso: `velmora-espresso` / `#2A211C` for rich panels, nav, and footer.
- Ivory: `velmora-ivory` / `#F8F3EA` for the main page background.
- Pearl: `velmora-pearl` / `#FFFDF8` for cards and elevated surfaces.
- Bone: `velmora-bone` / `#EFE4D4` for soft blocks and input fills.
- Champagne: `velmora-champagne` / `#C6A064` for premium accent buttons and lines.
- Antique gold: `velmora-gold` / `#A97832` for active states and subtle emphasis.
- Taupe: `velmora-taupe` / `#8C7E70` for secondary text.
- Hairline: `velmora-line` / `#D8C9B4` for thin dividers.

Use strong foreground/background pairings: ink on ivory/pearl, ivory on espresso/ink, and ink on champagne.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, generous line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names should be uppercase with wide tracking.
- CTAs and small labels should be sans-serif, uppercase, and letter-spaced.

Example Tailwind classes:
- Hero headline: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Section heading: `font-serif text-4xl md:text-6xl leading-tight`
- Product title: `font-serif uppercase tracking-[0.22em]`
- UI label: `font-sans uppercase tracking-[0.22em] text-xs`

## Layout and spacing
- Mobile-first, with comfortable stacked spacing on phones and editorial split/grid layouts on desktop.
- Use generous whitespace: `py-16 md:py-24`, `px-5 sm:px-8 lg:px-12`.
- Keep content widths restrained: `max-w-7xl mx-auto`.
- Use thin hairline dividers: `border-velmora-line`.

## Components
- Buttons: refined solid champagne buttons or outline buttons with thin borders. Use subtle transitions, no loud colors.
- Cards: pearl or transparent backgrounds, soft shadows only on hover, hairline borders.
- Product imagery: editorial, warm gold jewelry on neutral or dark backgrounds. Use the Strikingly stock image tagging system rather than hardcoded external image URLs.
- Cart drawer: dark or pearl surface with clearly readable text and strong action buttons.

## Do
- Use restraint, whitespace, warm neutral contrast, and editorial imagery.
- Keep hover animations subtle: opacity, translate, soft shadow, image crossfade.
- Keep all visible text clearly readable.

## Do not
- Do not use neon accents, red sale badges, loud gradients, thick borders, or marketplace-style clutter.
- Do not use low-contrast taupe text for important prices, form labels, buttons, or cart details.
- Do not hardcode arbitrary hex values in JSX class strings; use named Tailwind colors from this palette.
