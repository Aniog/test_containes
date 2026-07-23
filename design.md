# Velmora Fine Jewelry Design System

## Direction
Velmora is quiet luxury for demi-fine gold jewelry: warm, editorial, refined, and premium-but-accessible. The visual system should feel like an intimate jewelry atelier rather than a discount storefront.

## Palette
Use one confident warm editorial palette throughout:
- `velmora-ivory` (`#F7F1E8`): primary page background and soft surfaces.
- `velmora-champagne` (`#E8D8BE`): elevated neutral panels and subtle fills.
- `velmora-onyx` (`#15110D`): primary text and dark luxury sections.
- `velmora-espresso` (`#2A211A`): navigation, deep section backgrounds, drawer surfaces.
- `velmora-gold` (`#B88945`): primary metallic accent for CTAs, icons, ratings, and focus details.
- `velmora-antique` (`#8A642D`): darker gold hover states and smaller accents.
- `velmora-clay` (`#A67058`): restrained warm editorial accent.
- `velmora-mist` (`#EFE6DA`): hairline dividers and muted cards.
- `velmora-stone` (`#756A60`): secondary copy.

Always pair dark backgrounds with ivory text. Always pair ivory/champagne backgrounds with onyx or espresso text.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast, generous line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide letter spacing, serif, restrained size.
- Navigation and buttons: uppercase or small caps with tracking.

Example Tailwind usage:
- Headline: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Product name: `font-serif uppercase tracking-[0.24em] text-sm text-velmora-onyx`
- Body: `font-sans text-sm md:text-base leading-7 text-velmora-stone`

## Layout & Spacing
- Use generous whitespace and full-width editorial sections.
- Keep desktop layouts composed and spacious; use responsive grids that collapse elegantly on mobile.
- Use thin hairline dividers: `border-velmora-mist` or `border-white/15` on dark sections.
- Cards should feel airy with soft shadows and rounded corners only where needed.

## Components
- Buttons: premium, restrained, solid gold or outlined gold with subtle hover transitions.
- Product cards: large imagery, minimal information, quick add revealed on hover/focus.
- Cart drawer: dark espresso/ivory contrast, clear quantities, readable controls.
- Forms: warm ivory inputs with clear dark text and gold focus rings.

## Motion
Use subtle transitions only: fade, translate, scale on hover. Avoid bouncy, loud, or gamified animations.

## Do's
- Use editorial imagery with warm gold jewelry, model close-ups, neutral/dark backgrounds.
- Keep copy short, luxurious, and calm.
- Ensure all text is explicitly readable against its background.

## Don'ts
- Do not use bright sale colors, large discount badges, loud gradients, or generic marketplace UI.
- Do not use hardcoded arbitrary colors in JSX classes; use the named palette.
- Do not crowd product grids or reduce contrast for aesthetic reasons.
