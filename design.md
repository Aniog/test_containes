# Velmora Fine Jewelry — Design System

## Brand mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Never loud, never discount, never generic e-commerce.

## Color palette
- `ink` (#0F0E0C) — primary text, deep contrast, hairline-strong typography
- `ivory` (#F8F4EE) — base page background, warm off-white
- `champagne` (#B89060) — primary metallic accent, CTAs, links
- `champagne-deep` (#8A6A3F) — hover/active state for accent
- `sand` (#E8DCC9) — secondary surface, cards on ivory
- `rose-gold` (#C9A18B) — subtle secondary accent, dividers
- `hairline` (#D8D2C7) — thin dividers, borders
- `muted` (#6B6457) — secondary text, captions

Use ivory as page base, sand for product card surfaces, champagne for primary actions. Avoid stark black/white; keep warmth throughout.

## Typography
- Headings & product names: **Cormorant Garamond** (serif)
- Body & UI: **Inter** (sans-serif)
- Product names: UPPERCASE + `tracking-[0.18em]` + smaller font size
- Headlines: serif italic for editorial flourishes ("Crafted to be Treasured")

## Spacing & layout
- Generous whitespace. Section padding: `py-20 md:py-28 lg:py-32`
- Container max width: `max-w-[1280px]`, side padding `px-5 md:px-10`
- Hairline dividers: `border-t border-hairline`

## Buttons
- Primary: solid champagne background, ivory text, no radius (rounded-none) or very small radius, generous horizontal padding `px-8 py-3.5`, tracking-wide uppercase
- Secondary: outlined, ink border, ink text, transparent bg
- Icon buttons: ghost, no background unless hover

## Imagery
- Full-bleed editorial hero
- Product cards: portrait 4:5 ratio
- UGC: vertical 9:16
- All images should have soft warm gold or neutral dark backgrounds to flatter the jewelry

## Motion
- Subtle. `transition-all duration-300 ease-out` for hovers
- Image scale on hover: `hover:scale-105`
- Navbar transitions: 200ms ease-in-out
- No bouncy animations. Restrained.

## Do's
- Use serif for editorial headlines and product names
- Use uppercase with wide tracking for product names and CTAs
- Let products breathe — large padding around product imagery
- Keep one accent color (champagne) — never compete with it
- Use hairline dividers, not heavy borders

## Don'ts
- Never use bright primary colors (no blue, no red, no neon)
- Never use generic sans-serif for product names
- Never use heavy shadows
- Never use rounded-full buttons (keep them rectangular for editorial feel)
- Never crowd sections — whitespace is the design
