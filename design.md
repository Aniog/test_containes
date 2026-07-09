# MicroCosmos Design System

## Concept
A dark, immersive, science-inspired aesthetic evoking the wonder of the microscopic world — cells, organisms, crystals, and natural patterns at extreme magnification.

## Color Palette
- Background (deep dark): `#050a0f` → Tailwind: `bg-[#050a0f]`
- Surface / card: `#0d1a24` → Tailwind: `bg-[#0d1a24]`
- Surface elevated: `#112233` → Tailwind: `bg-[#112233]`
- Accent teal: `#00d4c8` → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent violet: `#7c3aed` → Tailwind: `text-violet-600`
- Accent amber: `#f59e0b` → Tailwind: `text-amber-400`
- Text primary: `#e8f4f8` → Tailwind: `text-[#e8f4f8]`
- Text secondary: `#7fb3c8` → Tailwind: `text-[#7fb3c8]`
- Text muted: `#4a7a8a` → Tailwind: `text-[#4a7a8a]`
- Border subtle: `rgba(0,212,200,0.15)` → Tailwind: `border-[#00d4c8]/15`

## Typography
- Font family: `'Inter'` (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption / label: `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Visual Style
- Dark mode only
- Subtle glowing borders: `border border-[#00d4c8]/20`
- Glow effects via box-shadow: `shadow-[0_0_30px_rgba(0,212,200,0.1)]`
- Image overlays: gradient from transparent to `#050a0f` at bottom
- Hover transitions: `transition-all duration-300`
- Backdrop blur on nav: `backdrop-blur-md bg-[#050a0f]/80`

## Do's
- Use rich, full-bleed images for hero and gallery sections
- Use teal accent for interactive elements and highlights
- Keep text contrast high against dark backgrounds
- Use grid layouts for image galleries (2-4 columns)
- Add subtle glow/shimmer to section headings

## Don'ts
- No light backgrounds
- No flat, colorless designs
- No small or cramped image thumbnails
- No generic stock-photo aesthetics — prefer scientific/macro imagery
