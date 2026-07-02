# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and biological structures. The visual language is deep, rich, and cinematic.

## Color Palette
- Background: `#050a0f` (near-black deep ocean)
- Surface: `#0d1a24` (dark navy)
- Card: `#0f2030` (dark teal-navy)
- Accent Primary: `#00d4ff` (electric cyan) — Tailwind: use `text-cyan-400`, `border-cyan-400`
- Accent Secondary: `#7c3aed` (deep violet) — Tailwind: use `text-violet-500`, `bg-violet-600`
- Accent Glow: `#00ffcc` (bioluminescent green-cyan) — Tailwind: use `text-emerald-300`
- Text Primary: `#e8f4f8` (near-white with cool tint)
- Text Secondary: `#7fb3c8` (muted blue-grey)
- Text Muted: `#4a7a8a`
- Border: `rgba(0, 212, 255, 0.15)`

## Typography
- Font: `Raleway` (headings) + `Inter` (body) from Google Fonts
- H1: `text-5xl md:text-7xl font-black tracking-tight`
- H2: `text-3xl md:text-5xl font-bold tracking-tight`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-[#7fb3c8]`
- Label/Tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-cyan-900/40`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_50px_rgba(0,212,255,0.3)]`
- Rounded: `rounded-2xl` for cards, `rounded-full` for tags/badges

## Images
- Use `data-strk-img` and `data-strk-bg` for all imagery
- Images should be microscopy, biology, cells, crystals, microorganisms, nature macro
- Aspect ratios: hero `16x9`, gallery `3x2` or `1x1`, feature `4x3`
- All images have a subtle dark overlay for text legibility

## Components
- **Nav**: Fixed top, blurred glass background `backdrop-blur-md bg-[#050a0f]/80`
- **Hero**: Full-screen with background image, centered text, glowing headline
- **Section Cards**: Dark cards with image + text, hover lift effect
- **Gallery Grid**: Masonry-style or uniform grid, 3-4 columns on desktop
- **Stats Bar**: Horizontal strip with large numbers and labels
- **Quote/Feature**: Full-width dark section with large italic text
- **Footer**: Dark, minimal, centered

## Do's
- Use glowing cyan/violet accents on dark backgrounds
- Use large, full-bleed images with overlays
- Use generous whitespace between sections
- Use subtle gradient overlays on images
- Use `backdrop-blur` for glass effects

## Don'ts
- Never use white backgrounds
- Never use light text on light backgrounds
- Never use harsh borders without glow
- Never use more than 3 accent colors at once
