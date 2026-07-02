# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury: warm, editorial, premium, and calm. The site should feel elevated and giftable, not loud, trend-chasing, or discount-oriented.

## Visual palette
Use one consistent refined direction across the site.

- Background base: deep espresso brown for hero and high-contrast premium sections. Tailwind target: `bg-stone-950` or `bg-neutral-950`
- Surface: warm ivory and soft champagne for cards and body backgrounds. Tailwind target: `bg-stone-50`, `bg-[#f5efe6]` should be avoided directly in classes; instead prefer configured semantic colors or existing stone shades such as `bg-stone-100`
- Accent: muted brushed gold for buttons, borders, highlights. Tailwind target: `bg-amber-300`, `border-amber-200`, `text-amber-200`
- Supporting text: warm taupe and soft stone neutrals. Tailwind target: `text-stone-600`, `text-stone-700`
- Dividers: thin hairlines in translucent stone/gold. Tailwind target: `border-stone-200/70`, `border-white/10`

## Typography
- Headings and product names: elegant serif feel using Playfair Display or Cormorant Garamond.
- Body and interface text: Inter.
- Product names: uppercase with wide tracking, e.g. `uppercase tracking-[0.28em]`.
- Headline rhythm: large editorial serif sizes with generous line-height and space.

## Layout
- Generous whitespace with wide section padding.
- Mobile-first layouts, but desktop should feel editorial with multi-column balance.
- Avoid cramped cards and dense grids.
- Use max-width containers around `max-w-7xl`.

## Components
- Buttons: premium feel, either solid muted gold with dark text or subtle outlined ivory/stone variants.
- Cards: soft shadows, thin borders, large image areas, restrained hover movement.
- Navigation: transparent over hero, then solid warm surface on scroll.
- Footer: rich dark base with light text and clean column structure.

## Motion
- Keep animations subtle: fade, slight translate, image scale on hover, smooth color transitions.
- Avoid bouncy or playful motion.

## Do
- Keep text contrast strong on every surface.
- Use explicit foreground colors on cards, forms, drawers, overlays, and product tiles.
- Maintain a premium DTC editorial tone.
- Use warm jewelry imagery on neutral or dark backgrounds.

## Don’t
- Do not use neon, harsh gradients, loud sale styling, or crowded layouts.
- Do not use invisible or low-contrast text.
- Do not make desktop feel like a stretched mobile page.
