# Velmora Fine Jewelry Design System

## Direction
Quiet luxury editorial storefront for demi-fine gold jewelry. The design should feel warm, refined, and premium-but-accessible: generous whitespace, restrained ornament, hairline dividers, soft shadows, and elegant imagery. Avoid discount cues, heavy gradients, loud colors, or generic marketplace patterns.

## Palette
Use one consistent warm neutral direction that flatters gold jewelry:
- `velmora-ink` (`#201916`) for primary text and deep surfaces.
- `velmora-espresso` (`#33241d`) for navigation overlays and rich panels.
- `velmora-cream` (`#fbf6ee`) for the main page background.
- `velmora-linen` (`#f1e7d8`) for soft section backgrounds.
- `velmora-parchment` (`#fffaf3`) for cards and elevated surfaces.
- `velmora-gold` (`#b8864b`) as the primary accent and button color.
- `velmora-champagne` (`#dfc59d`) for subtle metallic highlights.
- `velmora-clay` (`#8b6652`) for muted supporting text.
- `velmora-hairline` (`#ded0bd`) for thin borders and dividers.

Do: pair dark surfaces with cream/champagne text and light surfaces with ink/clay text. Use gold sparingly for CTAs, icons, stars, and active states.
Don't: use bright yellow, stark white product cards, neon colors, heavy black blocks, or low-contrast beige text on beige backgrounds.

## Typography
- Headings and brand moments: Cormorant Garamond, elegant serif, light-to-semibold weights.
- Body/UI: Manrope, clean sans-serif with practical readability.
- Product names: uppercase, wide letter spacing, serif, controlled line height.
- Buttons and navigation: small uppercase labels with letter spacing.

## Layout & Spacing
- Mobile-first with breathing room; desktop uses strong editorial two-column layouts.
- Use wide gutters and max-width containers (`max-w-7xl`, `px-5`, `sm:px-8`, `lg:px-12`).
- Use thin hairline borders (`border-velmora-hairline`) and rounded shapes only where soft and premium.
- Prefer `py-16`, `py-20`, and `py-24` for major sections.

## Components
- Buttons: solid gold with dark text for primary CTAs; outlined hairline buttons for secondary actions. Hover should subtly lift or deepen color.
- Cards: parchment/cream surfaces, hairline border, soft shadow on hover, no heavy outlines.
- Navigation: transparent over hero, solid cream after scroll; mobile menu should feel editorial and uncluttered.
- Cart drawer: parchment panel with clear text contrast and premium dividers.

## Motion
Use subtle transitions only: opacity, small translate, and image scale on hover. No bounce, no loud reveal effects.
