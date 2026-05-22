# Microuniverse Design System

## Theme
Black and white monochrome UI with vivid color photography as the visual focal point.

## Colors
- Background (primary): `bg-black` (#000000)
- Background (secondary): `bg-neutral-950` (#0a0a0a)
- Background (card/section): `bg-neutral-900` (#171717)
- Surface border: `border-neutral-800` (#262626)
- Text (primary): `text-white` (#ffffff)
- Text (secondary): `text-neutral-400` (#a3a3a3)
- Text (muted): `text-neutral-600` (#525252)
- Accent (white): `text-white`, `border-white`
- No colored UI elements — color lives only in photography

## Typography
- Font: Inter (Google Fonts)
- Display headings: `font-thin tracking-widest uppercase text-white` (e.g. `text-6xl lg:text-8xl`)
- Section headings: `font-light tracking-[0.2em] uppercase text-white` (e.g. `text-3xl lg:text-4xl`)
- Body: `font-light text-neutral-400 leading-relaxed` (e.g. `text-base lg:text-lg`)
- Labels/captions: `text-xs tracking-widest uppercase text-neutral-500`
- Do NOT use bold weights for headings — use thin/light for elegance

## Spacing
- Section padding: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-4 lg:gap-6`

## Borders & Dividers
- Use `border-neutral-800` for subtle dividers
- Use `border-white` for accent borders (e.g. active nav, featured items)
- Thin 1px borders only: `border` (not `border-2`)

## Images
- All images are color photography — they provide the only color on the page
- Images use `object-cover` and fill their containers
- Hover effects: `scale-105 transition-transform duration-700`
- Overlay on hover: `bg-black/40` fading to `bg-black/0`

## Navigation
- Fixed top nav: `bg-black/90 backdrop-blur-sm border-b border-neutral-800`
- Logo: `font-thin tracking-[0.3em] uppercase text-white text-lg`
- Nav links: `text-xs tracking-widest uppercase text-neutral-400 hover:text-white transition-colors`
- Active link: `text-white border-b border-white pb-0.5`

## Buttons
- Primary: `border border-white text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300`
- Ghost: `border border-neutral-700 text-neutral-400 px-8 py-3 text-xs tracking-widest uppercase hover:border-white hover:text-white transition-all duration-300`

## Do's
- Use generous whitespace to let images breathe
- Mix portrait and landscape image ratios in grids
- Use thin/light font weights throughout
- Keep all UI elements black, white, or neutral gray
- Use `tracking-widest` on all uppercase labels

## Don'ts
- No colored buttons, badges, or UI elements
- No bold or heavy font weights
- No rounded corners on images (use `rounded-none`)
- No drop shadows (use borders instead)
- No gradients except black overlays on images
