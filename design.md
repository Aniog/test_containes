# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury editorial storefront for premium-but-accessible demi-fine jewelry. The atmosphere is warm, refined, tactile, and intentionally restrained. The site should feel like a jewelry lookbook with commerce woven in, not a discount catalog.

## Palette
Use a deep espresso base with warm parchment surfaces and soft gold accents. Keep contrast strong and never place low-contrast beige text on pale surfaces.

- Espresso base: `velmora-espresso` (`#221A16`) for primary text, solid nav, footer, dark panels.
- Deep cocoa: `velmora-cocoa` (`#372820`) for elevated dark cards and drawer surfaces.
- Parchment: `velmora-parchment` (`#F6F0E7`) for page backgrounds.
- Ivory: `velmora-ivory` (`#FFFDF8`) for product cards and form surfaces.
- Champagne: `velmora-champagne` (`#D8B878`) for premium accents, CTAs, stars, and hairlines.
- Antique gold: `velmora-gold` (`#A57932`) for hover states and secondary accents.
- Warm taupe: `velmora-taupe` (`#8D7766`) for muted body text on light backgrounds.
- Blush clay: `velmora-blush` (`#CFAE9E`) for soft editorial blocks.

## Typography
- Headings and logo: Cormorant Garamond, elegant serif. Use generous line-height and refined tracking.
- Body and UI: Manrope, clean sans-serif.
- Product names: Cormorant Garamond, uppercase, wide letter-spacing (`tracking-luxury`, `tracking-luxe`, or `tracking-widest`).
- Buttons and nav: Manrope, uppercase or small caps, letter-spaced.

## Layout & Spacing
- Mobile-first, with generous vertical rhythm: `py-16`, `md:py-24`, `lg:py-28`.
- Use max-width containers (`max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`).
- Hairline dividers: `border-velmora-champagne/30` or `border-velmora-espresso/10`.
- Prefer editorial split layouts on desktop and stacked sections on mobile.

## Components
- Primary button: espresso or champagne fill, crisp border, subtle hover lift, letter-spaced label.
- Secondary button: transparent with hairline border and refined hover fill.
- Cards: ivory or parchment surfaces, thin borders, soft shadows only on hover.
- Cart drawer: deep espresso/cocoa surface with ivory text for clear readability.
- Inputs: ivory surface, espresso text, champagne focus ring.

## Imagery
Use warm gold jewelry imagery on model skin, parchment, taupe, or dark espresso backgrounds. Prefer large editorial crops and vertical UGC/reel cards. Avoid generic white-background catalog-only presentation.

## Do's
- Do use large images, whitespace, hairline dividers, and restrained motion.
- Do keep all text explicit and readable on its surface.
- Do make mobile product browsing easy with simple controls and a clear cart drawer.

## Don'ts
- Do not use bright sale colors, loud gradients, countdowns, or discount-heavy styling.
- Do not introduce unrelated palettes or hardcoded arbitrary colors in JSX.
- Do not make the desktop layout look like a stretched mobile stack.
