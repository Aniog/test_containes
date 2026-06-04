# MicroCosmos Design System

## Concept
A dark, immersive website exploring the microscopic world. The aesthetic is scientific yet beautiful — deep space-like darkness with vivid bioluminescent accent colors.

## Color Palette
- Background (deep dark): `#050a0f` — `bg-[#050a0f]`
- Surface (dark card): `#0d1a24` — `bg-[#0d1a24]`
- Surface elevated: `#112233` — `bg-[#112233]`
- Accent cyan: `#00d4ff` — `text-[#00d4ff]`
- Accent teal: `#00b894` — `text-[#00b894]`
- Accent purple: `#a855f7` — `text-purple-500`
- Accent amber: `#f59e0b` — `text-amber-400`
- Text primary: `#e2f0fb` — `text-[#e2f0fb]`
- Text secondary: `#7fb3cc` — `text-[#7fb3cc]`
- Text muted: `#4a7a96` — `text-[#4a7a96]`
- Border subtle: `rgba(0,212,255,0.15)` — `border-[rgba(0,212,255,0.15)]`

## Typography
- Font: Inter (Google Fonts)
- Hero title: `text-5xl md:text-7xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-[#7fb3cc]`
- Label/tag: `text-xs font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`
- Section gap: `gap-12`

## Borders & Shadows
- Card border: `border border-[rgba(0,212,255,0.12)] rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`

## Components
- **Hero**: Full-viewport dark background image, centered text, glowing headline
- **Section titles**: Cyan accent color, uppercase label above, bold title
- **Gallery cards**: Dark surface, image top, text below, subtle cyan border, hover glow
- **Stat cards**: Large number in cyan, label in muted text
- **Tags/badges**: Small pill with semi-transparent cyan background

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use cyan/teal as the primary accent for headings and highlights
- Images should fill their containers with `object-cover`
- Add subtle glow/border effects to cards on hover
- Use generous whitespace between sections

## Don'ts
- No white backgrounds
- No light-mode color schemes
- No flat, colorless designs
- No small or cramped image grids
