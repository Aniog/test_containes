# MicroCosmos Design System

## Theme
Dark, immersive, scientific-wonder aesthetic. Deep space / microscopic world feel.
Rich imagery is central — every section should feature large, vivid visuals.

## Colors
- Background: `#050a0f` (near-black deep blue)
- Surface: `#0d1b2a` (dark navy)
- Card: `#0f2236` (dark teal-navy)
- Accent primary: `#00d4ff` (electric cyan) — Tailwind: use `[#00d4ff]`
- Accent secondary: `#7c3aed` (vivid violet) — Tailwind: use `[#7c3aed]`
- Accent glow: `#00ffcc` (bioluminescent green) — Tailwind: use `[#00ffcc]`
- Text primary: `#f0f8ff` (alice white)
- Text muted: `#8bafc7` (steel blue-gray)
- Border: `rgba(0,212,255,0.15)`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-[#00d4ff]/20 rounded-2xl`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_50px_rgba(0,212,255,0.3)]`

## Images
- Hero: full-width, 16x9 or 3x2, large (1600px wide)
- Section feature images: 4x3 or 3x2, 800–1200px wide
- Gallery grid images: 1x1 or 4x3, 600px wide
- All images use `object-cover` and `rounded-xl` or `rounded-2xl`

## Do's
- Use large, full-bleed images in hero and feature sections
- Use gradient overlays on images for text legibility
- Use cyan/violet accent colors for highlights, borders, and CTAs
- Use `backdrop-blur` and semi-transparent surfaces for cards
- Animate subtle glows and fades on hover

## Don'ts
- No white or light backgrounds
- No small or decorative-only images — every image should be large and meaningful
- No low-contrast text (never dark text on dark bg without sufficient contrast)
- No flat, plain card backgrounds without any depth
