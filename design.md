# Design System — Animal World

## Visual Style
Nature-inspired, warm, and immersive. The site evokes the beauty of the wild with rich earthy tones, lush greens, and warm ambers. Clean typography keeps content readable against rich imagery.

## Colors
- Primary background: deep forest green `#1a2e1a` (Tailwind: `bg-[#1a2e1a]`)
- Secondary background: dark earth `#2d1f0e` (Tailwind: `bg-[#2d1f0e]`)
- Accent: warm amber `#f59e0b` (Tailwind: `text-amber-400`, `bg-amber-400`)
- Accent secondary: leaf green `#4ade80` (Tailwind: `text-green-400`)
- Text primary: warm white `#f5f0e8` (Tailwind: `text-[#f5f0e8]`)
- Text muted: `#a8a090` (Tailwind: `text-[#a8a090]`)
- Card background: `rgba(255,255,255,0.06)` (Tailwind: `bg-white/5`)
- Overlay: `rgba(0,0,0,0.45)` (Tailwind: `bg-black/45`)

## Typography
- Font: "Playfair Display" for headings (serif, elegant), "Inter" for body
- Heading sizes: `text-5xl md:text-7xl` (hero), `text-3xl md:text-4xl` (section), `text-xl` (card)
- Body: `text-base` or `text-lg`, line-height relaxed

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card gap: `gap-6`
- Container max-width: `max-w-7xl mx-auto`

## Borders & Shadows
- Cards: `rounded-2xl overflow-hidden`
- Hover lift: `hover:-translate-y-1 transition-transform duration-300`
- Image overlay gradient: `bg-gradient-to-t from-black/70 to-transparent`

## Do's
- Use full-bleed images with gradient overlays for text legibility
- Use amber accents for CTAs and highlights
- Keep text on images always white with a shadow or overlay
- Use grid layouts for galleries: 2 cols mobile, 3-4 cols desktop

## Don'ts
- Don't use light backgrounds without sufficient contrast
- Don't use small font sizes on image overlays
- Don't use blue or cold tones as primary accents
