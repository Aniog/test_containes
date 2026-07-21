# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso text, and restrained champagne-gold accents. The mood is premium, intimate, and polished without feeling loud or discount-driven.

## Palette
- `velmora-ivory` (`#F8F3EA`): primary page background.
- `velmora-porcelain` (`#FFFBF5`): cards, elevated panels, navigation solid state.
- `velmora-espresso` (`#241812`): main foreground for strong contrast.
- `velmora-cacao` (`#5B4134`): secondary text and borders on light surfaces.
- `velmora-champagne` (`#C49A5A`): refined metallic accent for CTAs and details.
- `velmora-antique` (`#8A5E2A`): darker gold hover/accent state.
- `velmora-rose` (`#E8D8C7`): soft blush-neutral blocks.
- `velmora-onyx` (`#120D0A`): deep editorial hero/footer surfaces.

## Typography
- Headings and product names use Cormorant Garamond, elegant serif.
- Body and UI use Manrope, clean sans-serif.
- Product names are uppercase with wide tracking, usually `tracking-[0.22em]` or `tracking-[0.18em]`.

## Layout and spacing
- Use generous whitespace: `py-16 md:py-24`, section containers `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use thin hairline dividers: `border-velmora-cacao/15` or `border-velmora-champagne/25`.
- Keep product grids airy and editorial, never crowded.

## Components
- Primary buttons: champagne background with espresso text, uppercase Manrope, wide letter spacing, subtle hover to antique.
- Secondary buttons: transparent or porcelain with thin cacao/champagne border.
- Cards: porcelain surface, soft shadow, clear espresso foreground, image-first.
- Navigation: transparent over hero, solid porcelain with readable espresso text after scroll.

## Do
- Pair every custom background with explicit readable foreground color.
- Use subtle opacity overlays on imagery to protect text contrast.
- Use warm editorial stock imagery for jewelry, model close-ups, gift boxes, and atelier details.

## Don’t
- Do not use bright sale colors, heavy gradients, neon accents, or generic marketplace styling.
- Do not use low-contrast beige text on beige backgrounds.
- Do not hardcode arbitrary colors in JSX; use Tailwind named palette tokens.
