# MicroCosmos Design System

## Theme
Dark, immersive, scientific-wonder aesthetic. Deep blacks and dark teals evoke the feeling of peering through a microscope into an unknown world. Accent colors are vivid cyan and emerald to suggest bioluminescence and life.

## Colors
- Background (primary): `bg-gray-950` (#030712)
- Background (secondary): `bg-gray-900` (#111827)
- Background (card): `bg-gray-800` (#1f2937)
- Accent primary (cyan): `text-cyan-400` / `bg-cyan-400` (#22d3ee)
- Accent secondary (emerald): `text-emerald-400` / `bg-emerald-400` (#34d399)
- Text primary: `text-white`
- Text secondary: `text-gray-300`
- Text muted: `text-gray-500`
- Border: `border-gray-700`

Do NOT use: light backgrounds with dark text in main sections. Keep the dark theme consistent.

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Page title / Hero: `text-6xl md:text-8xl font-black tracking-tight`
- Section headings: `text-3xl md:text-4xl font-bold`
- Sub-headings: `text-xl font-semibold`
- Body: `text-base text-gray-300 leading-relaxed`
- Caption / label: `text-sm text-gray-500 uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28 px-6`
- Card padding: `p-6`
- Gap between grid items: `gap-4 md:gap-6`

## Borders & Radius
- Cards: `rounded-2xl`
- Images: `rounded-xl` or `rounded-2xl`
- Buttons: `rounded-full`
- Subtle borders: `border border-gray-700`

## Shadows & Effects
- Cards: `shadow-xl`
- Hover lift: `hover:-translate-y-1 transition-transform duration-300`
- Image overlay gradient: `bg-gradient-to-t from-black/70 to-transparent`
- Hero overlay: `bg-gradient-to-b from-black/60 via-black/30 to-gray-950`

## Buttons
- Primary: `bg-cyan-400 text-gray-950 font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition`
- Outline: `border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400/10 transition`

## Layout
- Max content width: `max-w-7xl mx-auto`
- Grid for gallery: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Grid for categories: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Do's
- Use large, full-bleed hero images
- Use image grids with hover effects
- Use subtle gradient overlays on images
- Use cyan/emerald accents sparingly for highlights
- Keep text readable against dark backgrounds

## Don'ts
- No white or light backgrounds
- No low-contrast text (e.g. gray-600 on gray-900)
- No magic hex values — use Tailwind named colors only
- No cluttered layouts — give images room to breathe
