# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. No loud discounts, no generic e-commerce feel.

## Color Palette
- **Base / Dark**: `#1C1917` (warm stone black) — primary text, nav solid bg
- **Surface / Paper**: `#FAF9F6` (warm off-white) — page background
- **Accent / Gold**: `#C49A5C` (warm antique gold) — CTAs, highlights, stars
- **Muted**: `#A8A29E` (warm gray) — secondary text, disabled
- **Divider**: `#E7E5E4` (warm stone border)
- **Card**: `#FFFFFF` — cards on paper surface
- **Overlay**: `rgba(28,25,23,0.55)` — hero overlay

## Typography
- **Headings / Serif**: `Cormorant Garamond`, weight 400/500/600. Product names UPPERCASE with `tracking-[0.2em]`.
- **Body / UI**: `Inter`, weight 300/400/500/600.
- Scale: Hero heading 48–64px, section headings 28–36px, body 14–16px.

## Spacing & Layout
- Generous whitespace: section padding `py-20 md:py-28`
- Max container: `max-w-7xl mx-auto px-4 md:px-8`
- Thin hairline dividers: `border-b border-stone-200`
- Subtle shadows: `shadow-sm`, `shadow-md` on cards
- Border radius: `rounded-none` for buttons (premium sharp edges), `rounded-sm` for pills

## Component Patterns
- Buttons: sharp corners, uppercase, tracking-wide. Solid accent for primary, outline dark for secondary.
- Cards: white bg, subtle shadow, hover lifts slightly.
- Inputs: minimal border-bottom only, no full border boxes.
- Nav: transparent over hero, solid `bg-[#1C1917]` on scroll.

## Motion
- Transitions: `duration-300 ease-out`
- Hover: scale images `1.03`, opacity overlays fade in
- Page transitions: fade + slight Y translate

## Do's & Don'ts
- DO use serif for ALL headings and product names.
- DO keep backgrounds warm off-white, never pure #fff for large areas.
- DON'T use bright yellow gold — keep it muted antique.
- DON'T use rounded-full pill buttons for primary CTAs.
- DON'T clutter. One focal point per section.
