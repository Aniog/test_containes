# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and natural patterns invisible to the naked eye. The visual language is deep, rich, and awe-inspiring.

## Color Palette
- Background: Deep navy/black `bg-[#050a14]`
- Surface: Dark blue-gray `bg-[#0d1b2e]`
- Card surface: `bg-[#0f2035]`
- Accent primary: Teal/cyan `text-cyan-400`, `border-cyan-400`
- Accent secondary: Violet/purple `text-violet-400`
- Accent glow: `text-emerald-400`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-500`

## Typography
- Font: Inter (loaded via Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption: `text-sm text-slate-500`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6`
- Grid: 2-col on md, 3-col on lg for image grids

## Borders & Shadows
- Card border: `border border-cyan-900/40`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(34,211,238,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]`

## Images
- Use `data-strk-img` and `data-strk-bg` for all imagery
- Hero: full-width background, 16x9 ratio
- Gallery cards: 4x3 or 1x1 ratio
- Feature images: 3x2 ratio

## Do's
- Use dark backgrounds with glowing accents
- Layer subtle gradients over images for text legibility
- Use cyan/teal as the primary accent color
- Add hover transitions on cards and images
- Use `backdrop-blur` for overlays

## Don'ts
- No white or light backgrounds
- No flat, colorless layouts
- No small or hard-to-read text on dark backgrounds
- No plain unstyled images without rounded corners or overlays
