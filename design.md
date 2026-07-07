# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, soft champagne accents, generous whitespace, fine hairline borders, and restrained motion. The storefront should feel premium and intimate rather than promotional or loud.

## Color palette
Use only the named Tailwind colors below after adding them to `tailwind.config.js`.

- `velmora-ivory` (`#F8F3EA`): primary page background.
- `velmora-cream` (`#EFE5D6`): warm section blocks and cards.
- `velmora-linen` (`#E4D2BC`): dividers and soft surfaces.
- `velmora-espresso` (`#241A16`): primary text and deep UI surfaces.
- `velmora-cocoa` (`#4A372F`): secondary text and solid buttons.
- `velmora-bronze` (`#A8733A`): metallic accent, CTAs, focus states.
- `velmora-champagne` (`#D7B37A`): highlights, stars, subtle accents.
- `velmora-blush` (`#C8A39A`): soft editorial accent.
- `velmora-mist` (`#FBF8F3`): elevated card backgrounds.

## Typography
- Headings and product names: `font-serifDisplay` using Cormorant Garamond. Use elegant scale, relaxed line-height, and editorial letterforms.
- Body and UI: `font-sans` using Manrope. Keep labels small, crisp, and letter-spaced.
- Product names: uppercase with wide tracking, e.g. `uppercase tracking-[0.22em]`.

## Layout and spacing
- Use generous vertical rhythm: section padding commonly `py-16`, `md:py-24`, or `lg:py-28`.
- Keep content widths refined with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use thin dividers with `border-velmora-linen/70` and avoid heavy boxes.
- Desktop layouts should feel editorial and expansive; mobile should stack clearly with enough breathing room.

## Components
- Buttons: premium solid espresso or bronze accents, pill or soft-rounded, subtle hover lift.
- Cards: warm mist backgrounds, hairline borders, soft shadows only on hover.
- Navigation: transparent over hero, solid ivory on scroll with readable espresso text.
- Cart drawer: ivory surface, espresso text, strong readable labels and accessible controls.

## Do
- Use large editorial imagery with warm gold jewelry context.
- Keep copy short, warm, and confident.
- Use subtle transitions: opacity, transform, border color, background color.
- Ensure every text surface has explicit readable foreground colors.

## Don’t
- Do not use discount colors, bright red sale badges, loud gradients, or generic marketplace styling.
- Do not place low-contrast text over imagery without a dark overlay.
- Do not introduce unrelated colors or arbitrary hex values in JSX/CSS.
