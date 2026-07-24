# Velmora Fine Jewelry Design System

## Brand direction
Velmora should feel like quiet luxury: editorial, warm, feminine, and elevated. The site should look premium-but-accessible, never loud, flashy, or discount-driven.

## Typography
- Headings and product names: `Cormorant Garamond` with elegant sizing and airy line-height.
- Body, UI, navigation, and supporting copy: `Inter`.
- Product names should be uppercase with generous tracking, for example `tracking-[0.28em]` in Tailwind where needed.

## Color system
Use a deep plum-charcoal base paired with warm champagne gold and soft ivory neutrals.

Named colors to add to Tailwind config:
- `velvet`: `#221c23`
- `velvet-soft`: `#362c35`
- `ivory`: `#f7f1ea`
- `ivory-deep`: `#eadfce`
- `gold`: `#c7a36a`
- `gold-deep`: `#9f7f4f`
- `rose-mist`: `#c8b5b3`
- `sage-smoke`: `#8f9a93`

## Surfaces and borders
- Main background: `bg-ivory`
- Dark premium panels and footer: `bg-velvet`
- Cards: `bg-white` or `bg-ivory`
- Hairlines: `border-velvet/10`, `border-gold/25`, `border-white/15`
- Shadows: soft and diffused, for example `shadow-[0_18px_60px_rgba(34,28,35,0.08)]`

## Buttons
- Primary CTA: solid champagne gold with dark text.
- Secondary CTA: transparent or ivory background with thin border.
- Keep radius refined and not too round: `rounded-full` for pills and `rounded-none` or `rounded-sm` for editorial buttons.

## Layout and spacing
- Generous whitespace.
- Desktop sections should breathe with large vertical padding.
- Use strong content width constraints like `max-w-7xl`.
- Prefer asymmetrical editorial compositions over generic card grids.

## Imagery
- Warm-lit gold jewelry, close crop product shots, neutral backdrops, elegant portraits.
- Images should feel polished and magazine-like.
- Use subtle overlay gradients when text sits on photography.

## Do
- Use thin dividers and subtle transitions.
- Maintain strong text contrast on every surface.
- Keep product cards clean and premium.
- Use a restrained accent palette.

## Don't
- Do not use bright sale colors or discount styling.
- Do not use chunky borders, loud gradients, or neon accents.
- Do not let text rely on inherited colors on custom surfaces.
