# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: warm, editorial, refined, and confident. The experience should feel premium-but-accessible, never loud, never discount-driven, and never visually cluttered.

## Color palette
Use named theme colors only.

- `velmora-ink` — deep espresso-charcoal base for strong contrast surfaces and text accents. Example: `bg-velmora-ink`, `text-velmora-ink`
- `velmora-pearl` — warm editorial ivory for primary page backgrounds. Example: `bg-velmora-pearl`
- `velmora-sand` — soft neutral for cards, dividers, and subtle panels. Example: `bg-velmora-sand`, `border-velmora-sand`
- `velmora-gold` — restrained metallic accent for buttons, highlights, and badges. Example: `bg-velmora-gold`, `text-velmora-gold`
- `velmora-rose` — muted blush accent for soft overlays and newsletter blocks. Example: `bg-velmora-rose`
- `velmora-mist` — elevated pale surface for layered sections and product cards. Example: `bg-velmora-mist`

## Typography
- Headings and product names: `font-heading` using Cormorant Garamond.
- Body, UI, filters, forms: `font-sans` using Inter.
- Product names should be uppercase with wide tracking. Example: `tracking-product uppercase`.

## Spacing and layout
- Prefer generous whitespace with roomy vertical rhythm. Example: `py-16 md:py-24`
- Use wide containers. Example: `mx-auto max-w-7xl px-5 md:px-8`
- Use thin dividers. Example: `border-b border-velmora-sand/70`

## Surfaces and treatments
- Editorial sections should alternate between `bg-velmora-pearl`, `bg-velmora-mist`, and `bg-velmora-ink`.
- Cards should use soft shadows. Example: `shadow-soft`
- Hover transitions should be subtle. Example: `transition-all duration-500 ease-out`

## Buttons
- Primary CTA: warm metallic fill with dark text. Example: `bg-velmora-gold text-velmora-ink`
- Secondary CTA: hairline outlined. Example: `border border-velmora-ink/20 bg-transparent text-velmora-ink`
- Buttons should feel elevated, never oversized or playful.

## Do
- Keep contrast strong and text always readable.
- Let imagery breathe.
- Use serif typography for emotional emphasis only.
- Keep interactions smooth and understated.

## Don't
- Do not use bright promo colors or discount-style banners.
- Do not use heavy borders, loud gradients, or cramped layouts.
- Do not use arbitrary hex colors in class strings.
- Do not hide essential text inside low-contrast overlays.
