# MicroCosmos Design System

## Theme
Dark, immersive, scientific-wonder aesthetic inspired by the microscopic world — bioluminescent organisms, electron microscopy, and the hidden universe beneath our feet.

## Colors
- Background primary: `#050810` (near-black deep space)
- Background secondary: `#0d1424` (dark navy)
- Background card: `#0f1a2e` (deep blue-black)
- Accent cyan: `#00e5ff` (bioluminescent cyan) — add to Tailwind as `accent-cyan`
- Accent teal: `#00bfa5` (deep teal)
- Accent purple: `#7c3aed` (microscope purple)
- Accent magenta: `#e040fb` (fluorescent magenta)
- Text primary: `#e8f4f8` (near-white with cool tint)
- Text secondary: `#8ab4c8` (muted blue-grey)
- Text muted: `#4a6a7a`
- Border subtle: `rgba(0, 229, 255, 0.15)`

## Typography
- Font: `Inter` (loaded via Google Fonts in index.html)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-3xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-[#8ab4c8]`

## Spacing
- Section padding: `py-20 md:py-28 px-4 md:px-8`
- Card padding: `p-5 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-[rgba(0,229,255,0.15)] rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,229,255,0.12)]`
- Hover glow: `hover:shadow-[0_0_50px_rgba(0,229,255,0.25)]`

## Do's
- Use dark backgrounds throughout — never white or light grey
- Use cyan/teal accents for highlights, borders, and interactive elements
- Images should have rounded corners (`rounded-xl` or `rounded-2xl`)
- Use subtle gradient overlays on images for text legibility
- Animate elements with `transition-all duration-300`

## Don'ts
- No white or light backgrounds
- No warm color palettes (orange, yellow, red as primary)
- No flat, unstyled cards
- No small or hard-to-read text on dark backgrounds
