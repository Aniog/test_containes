# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by microscopy imagery — deep blacks, glowing teals, electric blues, and bioluminescent purples. The aesthetic evokes the feeling of peering through a microscope into an unseen world.

## Colors
- Background primary: `#050a0f` (near-black deep ocean)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0d1f35` (dark blue-slate)
- Accent teal: `#00d4c8` — Tailwind custom: `teal-glow`
- Accent blue: `#3b82f6` — Tailwind `blue-500`
- Accent purple: `#a855f7` — Tailwind `purple-500`
- Accent cyan: `#06b6d4` — Tailwind `cyan-500`
- Text primary: `#f0f9ff` (near-white, sky-50)
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Border subtle: `rgba(0, 212, 200, 0.15)`

## Typography
- Font family: Inter (loaded via Google Fonts)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-slate-400`
- Label/tag: `text-xs font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`
- Section gap between heading and content: `mt-12 md:mt-16`

## Borders & Shadows
- Card border: `border border-cyan-900/30`
- Card hover: `hover:border-cyan-500/50`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Image overlay: gradient from transparent to `#050a0f`

## Components

### Cards
- Background: `bg-[#0d1f35]`
- Border: `border border-cyan-900/30 rounded-2xl`
- Hover: `hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400`
- Outline: `border border-cyan-500/50 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-500/10`

### Tags / Badges
- `bg-cyan-500/10 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-500/20`

### Section Dividers
- Subtle gradient line: `h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent`

## Do's
- Use dark backgrounds throughout — never white or light gray backgrounds
- Use glowing teal/cyan as the primary accent color
- Use large, full-bleed images with dark overlays
- Use generous whitespace between sections
- Use grid layouts for image galleries (3-4 columns on desktop, 2 on tablet, 1 on mobile)
- Animate subtle hover effects on cards and images

## Don'ts
- Don't use white or light backgrounds
- Don't use red or orange as accent colors
- Don't use small, cramped layouts
- Don't use serif fonts
- Don't use hard borders without rounded corners
