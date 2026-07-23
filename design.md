# Velmora Fine Jewelry Design System

## Brand Direction
Velmora Fine Jewelry uses a quiet-luxury editorial aesthetic. The experience should feel warm, elevated, intimate, and premium-but-accessible. Avoid loud promotional visuals, harsh contrasts that feel techy, candy colors, oversized badges, and discount-store patterns.

## Palette
Commit to a deep editorial espresso base with warm champagne-gold accents and soft porcelain neutrals.

- velmora-noir: deep espresso base for hero overlays, footer, and premium surfaces
- velmora-truffle: warm charcoal-brown for cards and elevated panels
- velmora-porcelain: soft warm neutral for page background
- velmora-ivory: bright text-on-dark and clean content surface
- velmora-champagne: warm metallic accent for buttons, icons, borders, ratings, and highlights
- velmora-mist: muted neutral for helper text and dividers
- velmora-rosewood: restrained accent for editorial chips and subtle hover moments

Suggested Tailwind usage:
- background: `bg-velmora-porcelain`, `bg-velmora-noir`, `bg-velmora-truffle`
- text: `text-velmora-noir`, `text-velmora-ivory`, `text-velmora-mist`
- accent: `bg-velmora-champagne`, `text-velmora-champagne`, `border-velmora-champagne`
- dividers: `border-velmora-mist/40`

## Typography
- Headings and product names: Cormorant Garamond
- Body and UI: Inter
- Product names must be uppercase with generous tracking: `uppercase tracking-[0.28em]` equivalent using Tailwind tracking classes or reusable class names.
- Use serif display type for hero, section headings, and story blocks.
- Keep body text calm and readable; avoid dense paragraphs.

## Layout & Spacing
- Use generous vertical spacing: `py-16 md:py-24`, `gap-6 md:gap-10`, `px-5 md:px-8 lg:px-12`
- Max content width: `max-w-7xl`
- Prefer editorial asymmetry on desktop, simple stacked layouts on mobile
- Use thin hairline borders and soft shadows

## Components
- Buttons feel refined and substantial, never flashy
- Primary CTA: warm gold surface with dark text
- Secondary CTA: transparent or dark filled with fine border
- Cards: rounded but restrained, soft shadow, explicit readable foreground colors
- Sticky header starts transparent over hero and becomes solid on scroll
- Cart drawer should feel premium, dark, and uncluttered

## Imagery
- Favor warm-lit close-ups of gold jewelry on skin, editorial flatlays, giftable packaging, and quiet interior settings
- Use dark or neutral backdrops that flatter gold jewelry
- UGC row should mimic elegant reels, not noisy social content
- Do not overfill the page with images; let whitespace breathe

## Motion
- Keep transitions subtle: opacity, translate, and shadow changes only
- Avoid bouncy animations or anything that feels playful instead of refined

## Do
- Keep the site cohesive and restrained
- Preserve strong contrast and readability everywhere
- Use elegant uppercase product naming
- Let whitespace and typography carry the luxury feel

## Don’t
- Do not use bright sale colors, loud gradients, or discount messaging
- Do not use overly rounded toy-like controls
- Do not crowd mobile layouts
- Do not leave text color implicit on custom surfaces
