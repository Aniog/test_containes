# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury with a warm editorial tone. The experience should feel elevated, intimate, and premium-but-accessible. Avoid loud promotional styling, crowded layouts, oversized badges, or discount-store visual language.

## Color direction
Commit to one confident palette that flatters gold jewelry.

- `obsidian` — deep refined base for hero overlays, header states, and footer. Example: `bg-obsidian`, `text-porcelain`
- `espresso` — primary body text and dark UI copy. Example: `text-espresso`
- `porcelain` — core page background for softness and warmth. Example: `bg-porcelain`
- `sand` — secondary neutral surface for cards and filter panels. Example: `bg-sand`
- `mist` — hairline borders and dividers. Example: `border-mist`
- `champagne` — restrained metallic accent for buttons, highlights, and icons. Example: `bg-champagne`, `text-champagne`
- `rose` — muted supporting accent for captions and subtle editorial notes. Example: `text-rose`

Use strong contrast at all times. Dark surfaces must use `text-porcelain` or `text-porcelain/90`. Light surfaces must use `text-espresso`.

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond
- Body, UI, filters, forms, buttons: `font-sans` using Inter
- Product names must be uppercase with wide spacing. Prefer `uppercase tracking-widest`
- Editorial supporting labels use compact uppercase serif or sans with restrained opacity

## Layout and spacing
- Use generous whitespace with roomy section padding. Example: `py-16 sm:py-20 lg:py-24`
- Keep content width elegant and controlled. Example: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Use thin dividers instead of heavy borders. Example: `border-b border-mist/70`
- Mobile first, but desktop should feel expansive and editorial rather than stacked like a mobile layout

## Surfaces and imagery
- Hero and story imagery should feel warm-lit, close, and luxurious
- Product cards sit on soft neutral surfaces with subtle shadows. Example: `bg-sand shadow-lg shadow-obsidian/5`
- Use gentle overlays, gradients, and blur only when they reinforce elegance
- Keep image corners softly rounded, never overly playful

## Buttons and forms
- Primary CTA: `bg-champagne text-obsidian hover:bg-champagne/90`
- Secondary CTA: `border border-obsidian text-obsidian hover:bg-obsidian hover:text-porcelain`
- Inputs: warm light surfaces with visible borders. Example: `bg-porcelain border border-mist text-espresso`

## Motion
- Use subtle transitions only. Example: `transition duration-300 ease-out`
- Hover states should feel polished, not animated for attention
- Product image swaps, drawer entrances, and tile overlays should be soft and controlled

## Do
- Keep the palette warm and consistent sitewide
- Use hairline dividers and elegant spacing
- Make product imagery the star
- Preserve readability in every card, overlay, and filter control

## Do not
- Do not use neon colors, sales-red accents, or discount banners
- Do not mix multiple palette directions
- Do not use low-contrast beige-on-cream or gold-on-gold text
- Do not crowd layouts or overuse shadows
