# MicroCosmos Design System

## Theme
Dark, immersive, scientific aesthetic inspired by microscopy and bioluminescence.
Deep navy/black backgrounds with vibrant teal, cyan, and purple accents.

## Colors
- Background primary: `#050d1a` (deep navy black) → Tailwind: `bg-[#050d1a]`
- Background secondary: `#0a1628` (dark navy) → Tailwind: `bg-[#0a1628]`
- Background card: `#0f1f3d` (navy card) → Tailwind: `bg-[#0f1f3d]`
- Accent primary (teal/cyan): `#00d4ff` → Tailwind: `text-[#00d4ff]`, `border-[#00d4ff]`
- Accent secondary (purple): `#7c3aed` → Tailwind: `text-purple-600`
- Accent glow (green): `#00ff88` → Tailwind: `text-[#00ff88]`
- Text primary: `#f0f8ff` (alice blue white) → Tailwind: `text-[#f0f8ff]`
- Text secondary: `#94a3b8` → Tailwind: `text-slate-400`
- Text muted: `#64748b` → Tailwind: `text-slate-500`

## Typography
- Font family: 'Space Grotesk' for headings, 'Inter' for body
- Heading XL: `text-5xl md:text-7xl font-bold tracking-tight`
- Heading L: `text-3xl md:text-4xl font-bold`
- Heading M: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption: `text-sm text-slate-400`

## Borders & Shadows
- Card border: `border border-[#00d4ff]/20`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`
- Rounded cards: `rounded-2xl`
- Rounded images: `rounded-xl`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Components
- Navbar: fixed top, dark bg with blur, teal accent links
- Buttons primary: `bg-[#00d4ff] text-[#050d1a] font-semibold px-6 py-3 rounded-full hover:bg-[#00b8d9]`
- Buttons outline: `border border-[#00d4ff] text-[#00d4ff] px-6 py-3 rounded-full hover:bg-[#00d4ff]/10`
- Image cards: dark bg, teal border, hover scale + glow
- Section dividers: subtle gradient lines using `border-t border-[#00d4ff]/10`

## Do's
- Use dark backgrounds throughout
- Use teal/cyan as the primary accent color
- Add subtle glow effects on interactive elements
- Use high-quality microscopy images
- Use grid layouts for image galleries
- Animate on hover (scale, glow)

## Don'ts
- Don't use white or light backgrounds
- Don't use warm colors (orange, red) as primary accents
- Don't use flat, unstyled cards
- Don't use small font sizes for headings
- Don't use low-contrast text on dark backgrounds
