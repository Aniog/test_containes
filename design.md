# Velmora Fine Jewelry — Visual Identity

## Brand direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry that feels refined and accessible. No loud sales language, no discount styling.

## Color palette
- **Base dark**: `#1c1917` (warm charcoal) — primary text, nav solid fill, footer.
- **Base light**: `#f8f5f2` (warm ivory) — page background.
- **Surface**: `#ffffff` — cards, drawer, modal surfaces.
- **Accent / Gold**: `#8f6b2f` — CTAs, stars, highlights on light surfaces.
- **Accent hover**: `#7a5c29` — button hover.
- **Accent light**: `#c5a065` — hover states on dark surfaces (footer, social icons).
- **Muted**: `#8c857d` (warm taupe) — secondary text, captions, dividers.
- **Hairline**: `#e8e3de` — borders, dividers.

Use solid, accessible contrast. Light text on dark surfaces; dark text on light surfaces.

## Typography
- **Headings / logo / product names**: Cormorant Garamond (Google Fonts), 300–700. Product names in uppercase with wide letter-spacing (`tracking-[0.2em]`).
- **Body / UI**: Inter, 300–600.
- Scale: hero headline `text-5xl md:text-7xl`, section titles `text-3xl md:text-4xl`, body `text-sm md:text-base`.

## Spacing
- Generous whitespace. Section padding `py-16 md:py-24`.
- Container max-width `max-w-7xl`, centered, padding `px-4 sm:px-6 lg:px-8`.
- Cards and grids use `gap-4 md:gap-6`.

## Components
- **Buttons**:
  - Primary: solid `#8f6b2f`, white text, no border-radius (square), uppercase tracking-wide, hover darken.
  - Secondary / outlined: transparent with `#1c1917` border, dark text, hover fills dark background and light text.
- **Cards**: white background, no border or `border hairline`, subtle shadow `shadow-sm`, hover lift `-translate-y-1`.
- **Dividers**: 1px `#e8e3de` hairlines.
- **Icons**: thin 1.5px stroke, neutral dark.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial crops, soft lighting.
- Product cards show primary image; secondary image revealed on hover.
- UGC strip: vertical 9:16 cards, rounded corners, serif caption overlay.

## Motion
- Subtle hover transitions `duration-300 ease-out`.
- Staggered fade-ins on scroll using Framer Motion.
- Cart drawer slides in from right.
- Smooth page transitions optional.

## Do's and don'ts
- DO keep plenty of whitespace.
- DO use uppercase tracking for product names and CTAs.
- DO ensure all text has strong contrast.
- DON'T use bright primary colors.
- DON'T use heavy drop shadows or cluttered borders.
- DON'T use generic e-commerce badges or countdown timers.
