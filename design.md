# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm editorial, premium demi-fine jewelry. The storefront should feel refined and aspirational without appearing inaccessible. Avoid loud promotions, heavy gradients, bright discount colors, and crowded layouts.

## Palette
Use a dark espresso base with warm parchment surfaces and muted gold accents.

- `velmora-ink`: deep espresso for hero, footer, and high-contrast surfaces. Example Tailwind: `bg-velmora-ink text-velmora-cream`
- `velmora-cream`: warm parchment for page backgrounds. Example Tailwind: `bg-velmora-cream text-velmora-ink`
- `velmora-panel`: soft editorial neutral for cards and section panels. Example Tailwind: `bg-velmora-panel text-velmora-ink`
- `velmora-gold`: restrained metallic accent for buttons, links, borders, and highlights. Example Tailwind: `bg-velmora-gold text-velmora-ink`
- `velmora-mist`: muted beige-gray for dividers, tags, secondary borders. Example Tailwind: `border-velmora-mist`
- `velmora-muted`: subdued text for supporting copy. Example Tailwind: `text-velmora-muted`

## Typography
- Headings and product names: Cormorant Garamond. Example Tailwind: `font-display`
- Body, UI, nav, labels: Inter. Example Tailwind: `font-sans`
- Product names must appear uppercase with wide letter spacing. Example Tailwind: `uppercase tracking-[0.28em]`

## Spacing and layout
- Prefer airy sections with generous top and bottom padding. Example Tailwind: `py-16 md:py-24`
- Main content width should feel editorial, not cramped. Example Tailwind: `mx-auto max-w-7xl px-5 md:px-8`
- Use thin dividers instead of heavy borders. Example Tailwind: `border-b border-velmora-mist/60`

## Components
- Buttons: premium and restrained. Use either a solid gold accent or transparent button with gold border.
- Cards: soft shadows, subtle border, minimal chrome. Example Tailwind: `rounded-3xl border border-velmora-mist/60 bg-velmora-panel shadow-soft`
- Inputs: light surface with visible border and readable placeholder text.
- Navigation: transparent over hero, solid cream background after scroll.

## Motion
- Keep animation subtle: fade, lift, slight scale. Example Tailwind: `transition-all duration-300 ease-out`
- Product cards may reveal secondary imagery or action on hover, but avoid flashy effects.

## Imagery
- Use warm-lit close-ups of gold jewelry on models or refined still-life styling.
- Prefer dark or neutral backgrounds that flatter gold tones.
- Avoid generic bright ecommerce cutouts where possible.

## Do
- Keep text contrast strong on every surface.
- Use hairline dividers, elegant serif headings, and warm accent moments.
- Preserve consistent spacing and visual rhythm across all pages.

## Don't
- Do not use neon accents, sale stickers, or discount-store styling.
- Do not overload pages with too many colors or dense controls.
- Do not leave important text on implicit colors; always ensure readable foreground/background pairing.
