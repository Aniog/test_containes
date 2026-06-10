# MicroCosmos Design System

## Concept
A dark, immersive science/nature website exploring the microscopic world. The aesthetic is deep, mysterious, and awe-inspiring — like peering through a microscope into an alien universe.

## Color Palette
- Background: `#050a0f` (near-black deep ocean)
- Surface: `#0a1628` (dark navy)
- Card: `#0d1f3c` (deep blue-navy)
- Accent Primary: `#00d4ff` (electric cyan)
- Accent Secondary: `#7c3aed` (deep violet)
- Accent Glow: `#06b6d4` (teal)
- Text Primary: `#f0f9ff` (near-white)
- Text Secondary: `#94a3b8` (slate-400)
- Text Muted: `#475569` (slate-600)
- Border: `#1e3a5f` (dark blue border)

## Typography
- Font: `Space Grotesk` (headings) + `Inter` (body) from Google Fonts
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Visual Style
- Dark background with subtle gradient overlays
- Glowing cyan/violet accent borders and highlights
- Cards with `backdrop-blur` and semi-transparent backgrounds
- Images with rounded corners (`rounded-2xl`) and subtle glow shadows
- Smooth hover transitions on cards and images
- Section dividers using gradient lines

## Do's
- Use `bg-gradient-to-br from-[#050a0f] to-[#0a1628]` for page background
- Use `border border-[#1e3a5f]` for card borders
- Use `text-[#00d4ff]` for accent text and labels
- Use `shadow-[0_0_30px_rgba(0,212,255,0.15)]` for glowing card effects
- Use `rounded-2xl` for all image containers
- Use `object-cover w-full h-full` for all images

## Don'ts
- No white backgrounds
- No light-mode color schemes
- No flat/plain card styles without depth
- No small images — prefer large, full-bleed or grid imagery
