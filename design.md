# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by microscopy imagery — deep blacks, glowing teals, and bioluminescent greens. The aesthetic evokes looking through a microscope into an unseen world.

## Colors
- Background primary: `#050d12` (near-black deep ocean)
- Background secondary: `#0a1a24` (dark navy)
- Background card: `#0f2233` (dark blue-slate)
- Accent teal: `#00c9b1` (bioluminescent teal) — Tailwind: `teal-400` or custom `micro-teal`
- Accent green: `#39d353` (cell green) — Tailwind: `green-400`
- Accent cyan: `#22d3ee` — Tailwind: `cyan-400`
- Text primary: `#e8f4f8` (near-white with cool tint)
- Text secondary: `#7fb3c8` (muted blue-gray)
- Text muted: `#4a7a8a`
- Border: `#1a3a4a`

## Typography
- Font family: `'Space Grotesk'` for headings, `'Inter'` for body
- Heading sizes: `text-5xl` / `text-4xl` / `text-3xl` / `text-2xl`
- Body: `text-base` or `text-lg`
- Letter spacing on headings: `tracking-tight`
- Uppercase labels: `text-xs tracking-widest uppercase`

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-6` or `p-8`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#1a3a4a]`
- Card hover: `hover:border-cyan-400/50`
- Glow effect: `shadow-[0_0_30px_rgba(0,201,177,0.15)]`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for badges

## Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-black font-semibold px-6 py-3 rounded-full`
- Secondary: `border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full`

## Navigation
- Sticky top navbar with dark background `bg-[#050d12]/90 backdrop-blur`
- Logo in teal, nav links in `text-[#7fb3c8]` with `hover:text-white`
- Active link: `text-teal-400`

## Images
- Use stock images extensively throughout all pages
- Images should have `rounded-2xl overflow-hidden` containers
- Hover: `hover:scale-105 transition-transform duration-500`
- Aspect ratios: hero `16x9`, cards `4x3` or `3x2`, portraits `3x4`

## Do's
- Use dark backgrounds everywhere
- Use glowing teal/cyan accents for interactive elements
- Use generous whitespace between sections
- Use grid layouts for image-heavy sections (3-4 columns on desktop)
- Add subtle gradient overlays on hero images

## Don'ts
- Don't use white or light backgrounds
- Don't use warm colors (orange, red, yellow) as primary accents
- Don't use small images — make them large and prominent
- Don't crowd text — keep line lengths readable
