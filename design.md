# Microuniverse Design System

## Theme
Black and white monochrome UI with vivid color photography as the visual focal point.

## Colors
- Background primary: `#000000` (black) — `bg-black`
- Background secondary: `#0a0a0a` — `bg-[#0a0a0a]`
- Background card/section: `#111111` — `bg-[#111]`
- Background light section: `#ffffff` (white) — `bg-white`
- Text primary on dark: `#ffffff` — `text-white`
- Text secondary on dark: `#a3a3a3` — `text-neutral-400`
- Text muted on dark: `#525252` — `text-neutral-600`
- Text primary on light: `#000000` — `text-black`
- Text secondary on light: `#404040` — `text-neutral-700`
- Border: `#262626` — `border-neutral-800`
- Border light: `#e5e5e5` — `border-neutral-200`
- Accent: `#ffffff` — white text/borders used as accent on dark backgrounds

## Typography
- Font family: Inter (Google Fonts)
- Display/Hero heading: `text-6xl md:text-8xl font-black tracking-tighter`
- Section heading: `text-4xl md:text-5xl font-bold tracking-tight`
- Sub-heading: `text-2xl md:text-3xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/Label: `text-sm font-medium tracking-widest uppercase`
- Micro: `text-xs text-neutral-400`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-4 md:gap-6`

## Borders & Shapes
- Cards: `rounded-none` (sharp edges for editorial feel)
- Buttons: `rounded-none`
- Image containers: `overflow-hidden`

## Buttons
- Primary: `bg-white text-black px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-neutral-200 transition-colors rounded-none`
- Secondary (outline): `border border-white text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors rounded-none`
- On white bg: `bg-black text-white px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors rounded-none`

## Images
- All images are color photography — they provide the only color on the page
- Images use the `data-strk-img` / `data-strk-bg` system
- Images should have `object-cover w-full h-full` classes
- Image containers use `overflow-hidden` to clip

## Navigation
- Fixed top nav: `fixed top-0 left-0 right-0 z-50 bg-black border-b border-neutral-800`
- Logo: `text-white font-black text-xl tracking-widest uppercase`
- Nav links: `text-neutral-400 hover:text-white text-sm tracking-widest uppercase transition-colors`

## Do's
- Use stark black backgrounds with white text for most sections
- Use white sections sparingly for contrast
- Let color images "pop" against the monochrome UI
- Use generous whitespace
- Use uppercase tracking-widest for labels and nav items
- Use thin borders (border-neutral-800) to separate sections subtly

## Don'ts
- No colored UI elements (buttons, backgrounds, text) — only black, white, and grays
- No rounded corners on cards or buttons
- No drop shadows (use borders instead)
- No gradients on UI elements
