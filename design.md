# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry should feel like quiet luxury: warm, editorial, calm, and premium without looking intimidating. The visual language should flatter gold jewelry and create a sense of gifting, keepsakes, and personal ritual.

## Palette
Use one consistent palette across the storefront:
- `espresso` `#241915` — primary deep background, hero overlay, footer
- `mocha` `#4b3a30` — supporting dark surfaces and borders
- `parchment` `#f4ede4` — main page background
- `ivory` `#fbf7f2` — elevated cards and light surfaces
- `gold` `#c8a06a` — primary accent, buttons, links, highlights
- `champagne` `#e3d3bf` — soft accent backgrounds and dividers
- `taupe` `#a28b76` — muted text and secondary borders
- `olive` `#6a6b55` — restrained editorial accent for subtle highlights only

## Typography
- Headings and product names: `Cormorant Garamond`
- Body and UI: `Inter`
- Product names must be uppercase with wide tracking using the named Tailwind tracking token `tracking-product`

## Surfaces and borders
- Prefer `bg-parchment` for the main canvas and `bg-ivory` for cards
- Use hairline borders such as `border border-champagne/70`
- Use subtle shadows only: soft, diffused, never heavy or glossy

## Spacing
- Use generous spacing with Tailwind scale values such as `py-16`, `py-24`, `gap-8`, `gap-12`
- Keep section widths restrained with `max-w-7xl` or `max-w-6xl`

## Buttons
- Primary buttons: `bg-gold text-espresso hover:bg-champagne`
- Secondary buttons: `border border-gold text-espresso hover:bg-gold/10`
- Avoid loud gradients, glow effects, or discount-style badges

## Imagery
- Use warm-lit jewelry photography with soft contrast and editorial framing
- Backgrounds should feel refined and tactile, not flashy
- Use the Strikingly stock image tags instead of hardcoded URLs whenever possible

## Do
- Keep text contrast strong and explicit on every surface
- Use thin dividers and restrained transitions
- Let whitespace create the premium feeling
- Keep cards clean and content-focused

## Don't
- Do not use neon colors, bright sale red, or harsh black-and-white contrast
- Do not use cramped grids or oversized badges
- Do not make the store look like fast fashion or marketplace UI
- Do not rely on inherited text color for important content areas
