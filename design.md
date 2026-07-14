# Velmora Fine Jewelry Design System

## Direction
Quiet luxury editorial storefront for premium-but-accessible demi-fine jewelry. The feeling is warm, calm, refined, and image-led. Avoid loud sale language, clutter, heavy borders, bright colors, or generic marketplace patterns.

## Palette
Use one consistent deep-neutral and warm-metal palette that flatters gold jewelry:
- `velmora-espresso` `#211A16`: primary text and deep sections.
- `velmora-ink` `#2F2722`: secondary deep surfaces.
- `velmora-cream` `#F7F1E8`: main page background.
- `velmora-ivory` `#FFFDF8`: cards and elevated panels.
- `velmora-sand` `#E8DCCB`: quiet dividers and soft blocks.
- `velmora-taupe` `#B69E86`: muted editorial text and borders.
- `velmora-gold` `#B98343`: restrained metallic accent and primary buttons.
- `velmora-champagne` `#D8B984`: soft highlight accents.
- `velmora-blush` `#E9D8CF`: newsletter and gentle accent backgrounds.

## Typography
- Headings and product names: Playfair Display, elegant serif.
- Body and UI: Inter, clean sans-serif.
- Product names are uppercase with wide letter spacing.
- Use generous line-height and avoid dense copy blocks.

## Layout & Spacing
- Mobile-first responsive layouts.
- Desktop sections use generous whitespace, centered max-width containers, and editorial grids.
- Use thin hairline dividers (`border-velmora-sand`) and restrained shadows.
- Full-bleed hero and large image cards should feel calm and premium.

## Components
- Buttons: solid `velmora-gold` with `velmora-ivory` text, or outlined espresso/gold styles. Subtle hover transitions only.
- Cards: ivory backgrounds, soft rounded corners where appropriate, thin sand borders, no heavy shadows.
- Navigation: transparent over hero on homepage, solid cream on scroll and on inner pages.
- Cart drawer: ivory panel, clear readable text, premium but simple controls.

## Do
- Use warm editorial images of gold jewelry on skin, velvet, stone, or neutral backgrounds.
- Keep contrast strong and text readable on every surface.
- Use uppercase microcopy and letter spacing sparingly for labels.

## Don’t
- Do not use discount banners, loud badges, neon colors, or dense marketplace UI.
- Do not use low-contrast muted text on pale backgrounds.
- Do not hardcode raw hex values in JSX class strings; use Tailwind tokens from this system.
