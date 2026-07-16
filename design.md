# Velmora Fine Jewelry Design System

## Brand mood
Quiet luxury, warm editorial, premium but approachable. The experience should feel refined and giftable, never loud, overly trendy, or discount-driven.

## Typography
- Display / headings: Cormorant Garamond
- Body / UI: Inter
- Product names: uppercase with generous tracking (`uppercase tracking-[0.28em]` or nearest Tailwind equivalent)

## Color direction
A warm editorial palette that flatters gold jewelry and keeps contrast strong.

### Named colors
- `velmora-ink`: deep espresso text and primary dark surfaces
- `velmora-cocoa`: softened dark brown for layered surfaces
- `velmora-accent`: muted champagne gold for buttons, highlights, and ratings
- `velmora-accent-deep`: darker gold for hover states
- `velmora-ivory`: main page background
- `velmora-paper`: elevated cards and panels
- `velmora-mist`: soft neutral section backgrounds
- `velmora-sand`: subtle highlights and form backgrounds
- `velmora-line`: hairline borders and dividers
- `velmora-olive`: muted supporting text

## Tailwind translation
- Page background: `bg-velmora-ivory`
- Card surface: `bg-velmora-paper text-velmora-ink`
- Dark hero / footer surface: `bg-velmora-ink text-velmora-paper`
- Accent button: `bg-velmora-accent text-velmora-ink hover:bg-velmora-accent-deep`
- Hairline divider: `border-velmora-line`
- Muted copy: `text-velmora-olive`

## Layout and spacing
- Generous vertical rhythm with large section padding (`py-16`, `py-20`, `lg:py-24`)
- Constrained editorial content width (`max-w-7xl` page shell, narrower text blocks where needed)
- Thin borders instead of heavy outlines
- Soft shadows only on elevated cards and drawers

## Motion
- Subtle opacity, transform, and color transitions only
- Product image hover can crossfade and lift slightly
- Cart drawer and mobile menu should feel smooth and restrained

## Do
- Keep plenty of whitespace
- Use high-contrast readable text on every surface
- Let imagery feel large and atmospheric
- Keep CTAs premium and confident

## Don’t
- No bright promotional reds or neon accents
- No crowded layouts
- No heavy gradients or glossy effects
- No low-contrast beige-on-beige text
