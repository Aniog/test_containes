# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet-luxury editorial aesthetic with warm neutrals, deep espresso text, muted olive accents, brushed-gold highlights, and generous whitespace. The experience should feel premium, calm, and giftable rather than trendy or discount-driven.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast feel
- Body and UI: Inter, clean sans-serif
- Product names: uppercase with wide letter-spacing

## Color Tokens
- Background: `bg-stone-50`
- Soft surface: `bg-stone-100`
- Elevated card: `bg-[#f8f3ec]` should be avoided directly in code; instead use `bg-amber-50` or `bg-stone-100`
- Primary text: `text-stone-900`
- Secondary text: `text-stone-600`
- Hairline border: `border-stone-300/70`
- Accent fill: `bg-amber-700`
- Accent hover: `bg-amber-800`
- Accent text: `text-stone-50`
- Deep premium band: `bg-stone-900`
- Warm muted accent: `text-amber-700`

## Spacing
- Use generous vertical rhythm: `py-16 md:py-24`, `space-y-6`, `gap-8 md:gap-12`
- Constrain reading content with `max-w-2xl` to `max-w-3xl`
- Use wide section containers: `max-w-7xl mx-auto px-5 sm:px-6 lg:px-8`

## Surfaces
- Cards should use light neutral surfaces with explicit foreground colors
- Use thin dividers: `border-stone-300/60`
- Shadows should be soft and diffused: `shadow-[0_18px_45px_rgba(28,25,23,0.08)]`

## Buttons
- Premium buttons should use either:
  - filled accent: `bg-amber-700 text-stone-50 hover:bg-amber-800`
  - quiet outline: `border border-stone-400 text-stone-900 hover:bg-stone-100`
- Rounded shapes should be subtle, usually `rounded-full` or `rounded-2xl`

## Do
- Keep imagery large and editorial
- Maintain strong contrast on every text surface
- Use subtle transitions only
- Keep layouts airy on desktop while remaining mobile-first

## Don't
- Do not use loud discount colors
- Do not use crowded card grids with tiny content
- Do not rely on low-contrast text for captions or metadata
- Do not hardcode random hex colors in JSX class strings
