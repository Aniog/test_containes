# Microcosm Website Design System

## Theme
Dark, immersive, scientific-wonder aesthetic. Evokes the feeling of peering through a microscope into an unseen world.

## Colors
- Background primary: `#050a0f` (near-black deep blue)
- Background secondary: `#0d1b2a` (dark navy)
- Background card: `#0f1f30` (dark blue-gray)
- Accent primary: `#00d4ff` (cyan/teal — microscope light)
- Accent secondary: `#7c3aed` (violet — bioluminescence)
- Accent glow: `#00ffcc` (neon green — organic life)
- Text primary: `#f0f4f8` (near-white)
- Text secondary: `#94a3b8` (muted slate)
- Text muted: `#475569`
- Border subtle: `rgba(0, 212, 255, 0.15)`

Add to Tailwind config as named colors:
- `deep`: `#050a0f`
- `navy`: `#0d1b2a`
- `card-dark`: `#0f1f30`
- `cyan-glow`: `#00d4ff`
- `violet-glow`: `#7c3aed`
- `neon-green`: `#00ffcc`

## Typography
- Font family: "Playfair Display" for headings (elegant, scientific), "Inter" for body
- Hero heading: `text-6xl md:text-8xl font-bold tracking-tight`
- Section heading: `text-4xl md:text-5xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-cyan-glow/15 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Image border: `rounded-xl overflow-hidden`

## Do's
- Use full-bleed background images for hero and feature sections
- Use image grids with hover zoom effects
- Use subtle cyan/violet gradient overlays on images
- Use glowing text for key terms
- Maintain dark backgrounds throughout for contrast

## Don'ts
- No white or light backgrounds
- No flat, colorless sections
- No small or cramped image layouts
- No light text on light backgrounds
