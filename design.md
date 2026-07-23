# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with warm editorial restraint. The storefront should feel like a premium demi-fine jewelry lookbook: generous whitespace, close-up imagery, refined contrast, thin dividers, and understated motion. Avoid discount cues, loud badges, saturated sale colors, or generic marketplace layouts.

## Color palette
Use one cohesive warm neutral palette that flatters gold jewelry.

- `velmora-ink` — deep espresso-black base for navigation, footer, overlays, and high-contrast text. Example: `text-velmora-ink`, `bg-velmora-ink`.
- `velmora-cream` — warm ivory page background. Example: `bg-velmora-cream`.
- `velmora-pearl` — soft card surface and subtle section contrast. Example: `bg-velmora-pearl`.
- `velmora-linen` — warm beige secondary surface. Example: `bg-velmora-linen`.
- `velmora-gold` — restrained metallic accent for CTAs, lines, stars, and focus states. Example: `bg-velmora-gold`, `text-velmora-gold`.
- `velmora-brass` — deeper gold hover/accent tone. Example: `hover:bg-velmora-brass`.
- `velmora-clay` — muted rose-brown editorial accent. Example: `text-velmora-clay`.

Always pair dark text on light neutral backgrounds and ivory text on dark espresso surfaces. Accent gold must be used sparingly and with readable foreground colors.

## Typography
- Headings and product names: elegant serif using Cormorant Garamond. Example classes: `font-serif`, `tracking-wide`, `leading-none`.
- Body and UI: Inter. Example classes: `font-sans`, `tracking-[0.18em]` only for short labels.
- Product names must be uppercase with wide letter spacing: `uppercase tracking-[0.18em]`.

## Layout and spacing
- Mobile-first, but desktop should use editorial multi-column layouts where appropriate.
- Use generous vertical rhythm: section padding such as `py-16 md:py-24`.
- Use constrained content widths: `max-w-7xl mx-auto px-5 sm:px-8`.
- Use thin hairline dividers: `border-velmora-ink/10`, `border-velmora-gold/30`.

## Components
- Buttons: premium solid gold or outlined espresso/gold styles with subtle hover transitions.
- Cards: soft ivory/pearl surfaces, fine borders, gentle shadows only on hover.
- Navigation: transparent over hero, solid warm ivory when scrolled or on inner pages.
- Cart drawer: dark overlay with warm ivory panel, clearly readable text and controls.

## Do
- Let imagery breathe.
- Use restrained editorial copy and short labels.
- Keep text contrast strong and explicit.
- Use soft transitions: `transition-all duration-300`.

## Don’t
- Do not use loud sale colors, heavy gradients, neon tones, or chunky shadows.
- Do not crowd mobile screens.
- Do not make gold text too small on pale backgrounds.
- Do not use hardcoded image URLs; use the Strikingly stock image attributes.
