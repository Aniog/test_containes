# MicroCosmos Design System

## Theme
Dark, mysterious, and scientific. Inspired by the microscopic world — deep ocean blues, bioluminescent greens, and rich purples against near-black backgrounds.

## Colors
- Background: `#050a0e` (near-black deep ocean)
- Surface: `#0d1b2a` (dark navy)
- Card: `#0f2233` (dark blue-grey)
- Primary: `#00d4aa` (bioluminescent teal/green) — Tailwind: use `[#00d4aa]`
- Secondary: `#7c3aed` (deep purple) — Tailwind: `purple-700`
- Accent: `#06b6d4` (cyan) — Tailwind: `cyan-500`
- Text Primary: `#f0f9ff` (near-white) — Tailwind: `slate-50`
- Text Secondary: `#94a3b8` (muted blue-grey) — Tailwind: `slate-400`
- Border: `#1e3a5f` (subtle dark blue border)

Add to tailwind config as named colors:
- `cosmos-bg`: `#050a0e`
- `cosmos-surface`: `#0d1b2a`
- `cosmos-card`: `#0f2233`
- `cosmos-primary`: `#00d4aa`
- `cosmos-border`: `#1e3a5f`

## Typography
- Font: "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- H1: `text-5xl md:text-7xl font-bold tracking-tight text-slate-50`
- H2: `text-3xl md:text-4xl font-bold text-slate-50`
- H3: `text-xl font-semibold text-slate-100`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption: `text-sm text-slate-400`
- Label/Tag: `text-xs font-medium uppercase tracking-widest text-[#00d4aa]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-[#1e3a5f]`
- Card shadow: `shadow-lg shadow-black/40`
- Glow effect (primary): `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Rounded: `rounded-2xl` for cards, `rounded-full` for tags/badges

## Components

### Navbar
- Background: `bg-[#050a0e]/90 backdrop-blur-md`
- Border bottom: `border-b border-[#1e3a5f]`
- Logo: teal primary color, bold
- Links: `text-slate-300 hover:text-[#00d4aa] transition-colors`

### Hero Section
- Full viewport height: `min-h-screen`
- Background image with dark overlay: `bg-black/60`
- Centered content with large headline

### Image Cards
- Aspect ratio: `aspect-[4/3]` or `aspect-square`
- Hover: scale up slightly `hover:scale-105 transition-transform duration-300`
- Overlay on hover with description text

### Tags/Badges
- `bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/30 rounded-full px-3 py-1 text-xs`

## Do's
- Use dark backgrounds throughout — never white or light grey backgrounds
- Use teal (#00d4aa) as the primary accent for highlights, links, and CTAs
- Images should be large and prominent
- Use subtle glows and gradients to create depth
- Maintain generous whitespace between sections

## Don'ts
- No light mode / white backgrounds
- No bright saturated colors other than the defined palette
- No small or cramped image layouts
- No generic sans-serif fonts without the Space Grotesk heading font
