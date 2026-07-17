# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. No loud discount cues, no generic e-commerce.

## Color palette
- Background: `#F7F3EE` (warm ivory / unbleached linen)
- Surface: `#FFFFFF` (clean white)
- Primary text: `#1A1714` (almost-black espresso)
- Secondary text: `#6B6258` (warm taupe)
- Muted text: `#9E958B` (sand)
- Accent: `#A15D4E` (terracotta rose — sophisticated, flattering to gold)
- Accent hover: `#8A4E41`
- Metallic gold hint: `#C9A86C` (use sparingly for dividers / hover states)
- Hairline: `#E7E0D7` (warm stone)
- Overlay: `rgba(26, 23, 20, 0.35)` for image overlays

## Typography
- Serif headings / product names: `Cormorant Garamond`, weight 400–500, uppercase for product names, letter-spacing wide (`tracking-[0.2em]`).
- Sans-serif body / UI: `Manrope`, weight 400–600.
- Base size: 16px / 1rem. Body leading: 1.7.

## Spacing
- Generous whitespace. Page horizontal padding: `px-5 md:px-8 lg:px-12 xl:px-16`.
- Section vertical spacing: `py-16 md:py-24`.
- Grid gap: `gap-6 md:gap-8`.

## Components
- Buttons: solid accent background with white text; subtle `shadow-sm`; hover lifts slightly.
- Outlined buttons: `1px` accent border, accent text, white fill; hover fills accent.
- Pills (variant selector): rounded-full, `1px` hairline border, uppercase sans text; active state has accent border + subtle tint.
- Cards: no border-radius (editorial), thin hairline border, subtle hover shadow.
- Hairline dividers: `border-hairline`.

## Motion
- Default transition: `transition-all duration-300 ease-out`.
- Hover image crossfade: `opacity` transition.
- Sticky nav: `transition-colors duration-300` on scroll.
- Cart drawer: `translate-x` slide.

## Do's
- Use uppercase serif product names with wide tracking.
- Keep backgrounds warm and light, text dark and legible.
- Use the terracotta accent sparingly for CTAs and key highlights.
- Ensure strong contrast for all text.

## Don'ts
- No pure black (#000000).
- No bright gold gradients.
- No discount-style red or neon.
- No generic placeholder UI; all text must be readable.
