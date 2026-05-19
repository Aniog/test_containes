# MicroCosmos Design System

## Theme
Strict black and white UI — all backgrounds, text, borders, and UI elements use only black, white, and shades of gray. Color appears exclusively in photographs/images.

## Colors
- Background primary: `#000000` (black)
- Background secondary: `#0a0a0a`, `#111111`, `#1a1a1a`
- Surface / card: `#111111`, `#1c1c1c`
- Border: `#2a2a2a`, `#333333`
- Text primary: `#ffffff`
- Text secondary: `#a0a0a0`, `#888888`
- Text muted: `#555555`
- Accent (hover/active): `#ffffff` on dark, `#000000` on light
- No color accents — no blues, reds, greens, etc. in UI

## Typography
- Font family: "Playfair Display" (headings), "Inter" (body)
- Heading sizes: `text-6xl` / `text-5xl` / `text-4xl` / `text-3xl` / `text-2xl`
- Body: `text-base` / `text-sm`
- Letter spacing: `tracking-widest` for labels and nav items
- Line height: `leading-relaxed` for body text

## Spacing
- Section padding: `py-24 px-6` or `py-32 px-8`
- Card gap: `gap-4` to `gap-8`
- Container max width: `max-w-7xl mx-auto`

## Borders & Dividers
- Thin borders: `border border-white/10` or `border-[#2a2a2a]`
- Dividers: `border-t border-white/10`

## Images
- All images are in full color — no filters applied
- Images use `object-cover` and defined aspect ratios
- Images may have subtle hover scale: `hover:scale-105 transition-transform duration-700`

## Buttons
- Primary: `bg-white text-black px-8 py-3 text-sm tracking-widest uppercase hover:bg-gray-200`
- Ghost: `border border-white text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black`

## Do's
- Use stark contrast: pure white text on black backgrounds
- Use generous whitespace to let images breathe
- Use uppercase tracking-widest for section labels and nav
- Use thin borders and subtle dividers

## Don'ts
- Never use colored text, colored backgrounds, or colored borders in UI
- Never apply grayscale or desaturation filters to images
- Never use colored shadows or glows
