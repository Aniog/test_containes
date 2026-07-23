# Velmora Fine Jewelry Design System

## Brand direction
Velmora Fine Jewelry uses a quiet-luxury editorial aesthetic. The brand should feel warm, premium, feminine, and composed. Avoid loud promotions, flashy gradients, oversized badges, or discount-store visual language.

## Visual mood
- Warm editorial photography
- Deep espresso-charcoal surfaces that flatter gold jewelry
- Soft parchment neutrals for breathable contrast
- Hairline dividers and restrained glow instead of heavy borders
- Generous whitespace and elegant proportions

## Typography
- Headings and product names: Cormorant Garamond
- Body and UI: Inter
- Product names should appear uppercase with generous tracking
- Use serif typography for major headlines, collection names, and editorial quotes only

## Tailwind style tokens
- Page background: `bg-parchment`
- Elevated dark sections: `bg-ink`
- Cards and surfaces: `bg-surface`
- Gold accent: `text-gold`, `border-gold/40`, `bg-gold`
- Supporting copy: `text-mist`, `text-muted`
- Dividers: `border-line`

## Component rules
- Buttons should feel premium: either solid gold on dark, or transparent with a fine border
- Use `rounded-full` for pills and CTAs, `rounded-[2rem]` for large content cards, and subtle shadows
- Hover states should be subtle: lift by a few pixels, soften opacity, or reveal secondary imagery
- Avoid hard black or stark white when a warmer token is available

## Layout rules
- Mobile-first with generous vertical rhythm
- Desktop layouts should remain editorial and spacious, not stacked like mobile
- Product grids should preserve image quality and spacing
- Sticky navigation should begin transparent over the hero and transition to a solid surface on scroll

## Do
- Use explicit readable text color on every tinted or dark surface
- Keep forms minimal and elegant
- Let imagery lead with copy supporting it
- Maintain consistent gold accent usage across buttons, links, and ratings

## Don’t
- Don’t use bright sale reds, neon tones, or coupon styling
- Don’t crowd sections with dense text or too many badges
- Don’t mix multiple color directions
- Don’t rely on low-contrast text for captions or metadata
