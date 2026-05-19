# MicroCosmos Design System

## Theme
Strict black and white monochrome UI. All text, backgrounds, borders, and UI elements use only black, white, and shades of gray. Images and photos are the only color elements on the page.

## Colors
- Background (primary): `bg-black` (#000000)
- Background (secondary): `bg-neutral-950` (#0a0a0a)
- Background (card/section): `bg-neutral-900` (#171717)
- Background (subtle): `bg-neutral-800` (#262626)
- Border: `border-neutral-700` (#404040) or `border-white/10`
- Text (primary): `text-white`
- Text (secondary): `text-neutral-300`
- Text (muted): `text-neutral-500`
- Accent line/divider: `border-white` or `bg-white`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-6xl md:text-8xl font-black tracking-tighter text-white`
- Section heading: `text-4xl md:text-5xl font-bold text-white`
- Subheading: `text-xl md:text-2xl font-semibold text-neutral-300`
- Body: `text-base text-neutral-400`
- Caption: `text-sm text-neutral-500`
- Label/tag: `text-xs font-semibold uppercase tracking-widest text-neutral-400`

## Spacing
- Section padding: `py-24 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-neutral-800`
- Hover border: `hover:border-neutral-600`
- No colored shadows — use `shadow-black/50` only

## Images
- Images are always in full color (no grayscale filter)
- Images use rounded corners: `rounded-lg` or `rounded-xl`
- Images may have a subtle white border: `ring-1 ring-white/10`
- Hero image: full-width, aspect ratio 16x9 or 3x2
- Gallery images: aspect ratio 4x3 or 1x1

## Buttons
- Primary: `bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200`
- Secondary/outline: `border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black`

## Do's
- Use stark contrast between black backgrounds and white text
- Let colorful images "pop" against the monochrome UI
- Use generous whitespace to create a premium feel
- Use thin horizontal rules (`<hr className="border-neutral-800">`) to separate sections

## Don'ts
- Never use any color for text, backgrounds, or borders (no blue, red, green, etc.)
- Never apply grayscale filter to images
- Never use colored shadows or glows
- Avoid low-contrast text (e.g., dark gray on black)
