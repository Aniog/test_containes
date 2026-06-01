# MicroCosmos Design System

## Theme
Dark, immersive scientific aesthetic inspired by microscopy and bioluminescence.
Deep navy/black backgrounds with vibrant teal, cyan, and purple accent colors.

## Colors
- Background primary: `#050d1a` (deep navy black)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f3d` (navy card)
- Accent primary: `#00d4ff` (cyan/teal) — Tailwind: use `[#00d4ff]`
- Accent secondary: `#7c3aed` (purple) — Tailwind: `purple-700`
- Accent glow: `#00ffcc` (bioluminescent green-teal)
- Text primary: `#f0f9ff` (near white)
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Border subtle: `rgba(0,212,255,0.15)`

## Typography
- Font family: `'Inter'` for body, `'Space Grotesk'` for headings (Google Fonts)
- Heading XL: `text-5xl md:text-7xl font-bold tracking-tight`
- Heading L: `text-3xl md:text-4xl font-bold`
- Heading M: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-slate-300`
- Caption: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-[rgba(0,212,255,0.15)] rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`

## Components
- Navbar: fixed top, dark glass blur background `bg-[#050d1a]/80 backdrop-blur-md`
- Buttons primary: `bg-[#00d4ff] text-[#050d1a] font-semibold rounded-full px-6 py-3 hover:bg-[#00ffcc]`
- Buttons outline: `border border-[#00d4ff] text-[#00d4ff] rounded-full px-6 py-3 hover:bg-[#00d4ff]/10`
- Image cards: `rounded-2xl overflow-hidden` with hover scale transform
- Section dividers: subtle gradient lines using `border-t border-[rgba(0,212,255,0.1)]`

## Do's
- Use dark backgrounds throughout
- Use cyan/teal as the primary accent color
- Add subtle glow effects on interactive elements
- Use large, full-bleed images for visual impact
- Use grid layouts for image galleries (2-4 columns)
- Animate on hover (scale, glow)

## Don'ts
- No white or light backgrounds
- No harsh borders
- No flat, colorless designs
- No small or cramped images
