# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and structures invisible to the naked eye. The visual language is deep, rich, and cinematic.

## Color Palette
- Background: `#050a0f` (near-black deep ocean)
- Surface: `#0d1a26` (dark navy)
- Card: `#0f2030` (dark teal-navy)
- Accent Primary: `#00d4ff` (electric cyan) — Tailwind: use `[#00d4ff]`
- Accent Secondary: `#7c3aed` (deep violet) — Tailwind: use `[#7c3aed]`
- Accent Glow: `#00ffcc` (bioluminescent green) — Tailwind: use `[#00ffcc]`
- Text Primary: `#e8f4f8` (near-white cool)
- Text Secondary: `#8ab4c8` (muted blue-grey)
- Text Muted: `#4a7a94` (dim teal)
- Border: `#1a3a50` (subtle dark border)

## Typography
- Font: `Inter` (loaded via Google Fonts in index.html)
- Hero Title: `text-6xl md:text-8xl font-black tracking-tight`
- Section Title: `text-4xl md:text-5xl font-bold`
- Card Title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-[#8ab4c8]`
- Label/Tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl border border-[#1a3a50]`
- Buttons: `rounded-full`
- Images: `rounded-xl` or `rounded-2xl`

## Shadows & Glow
- Card hover: `hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Accent glow: `shadow-[0_0_60px_rgba(0,212,255,0.2)]`

## Imagery
- Use stock images extensively throughout all sections
- Images should depict microscopic subjects: cells, bacteria, crystals, pollen, diatoms, neurons, fungi, water droplets, insect eyes, etc.
- Use `data-strk-img` and `data-strk-bg` for all images
- Hero: full-width background image
- Gallery: dense grid of images
- Feature cards: each card has an image

## Do's
- Dark backgrounds everywhere
- Cyan/violet accent colors for highlights and CTAs
- Large, full-bleed hero with background image
- Dense image grids to showcase microscopic photography
- Subtle gradient overlays on images
- Glowing borders on hover

## Don'ts
- No white or light backgrounds
- No light-mode styling
- No sparse layouts — fill with imagery
- No low-contrast text
