# MicroCosmos Design System — "Vintage Scientific Minimalism"

## Philosophy
Blends the aesthetic of 20th-century botanical journals with Glassmorphism UI.
Academic, precise, timeless, and inspiring.

## Color Palette (Strictly Monochrome / Grayscale)
- Background: `#F2F0E9` (old parchment / bone white) — `bg-[#F2F0E9]`
- Ink Black (headings): `#1A1A1A` — `text-[#1A1A1A]`
- Charcoal (body): `#3D3D3D` — `text-[#3D3D3D]`
- Mid Gray (secondary): `#6B6B6B` — `text-[#6B6B6B]`
- Light Gray (borders, dividers): `#C8C4B8` — `border-[#C8C4B8]`
- Off-white (glass fills): `rgba(255,255,255,0.30)` — `bg-white/30`
- Dark glass: `rgba(26,26,26,0.08)` — `bg-black/[0.08]`

## Typography
- Headings: `font-serif` — use Google Font "Playfair Display" (loaded in index.html)
- Body / UI: `font-sans` — use Google Font "Inter"
- Monospace / data: `font-mono` — system mono

### Scale
- Display: `text-6xl lg:text-8xl font-serif font-bold tracking-tight`
- H1: `text-4xl lg:text-5xl font-serif font-bold`
- H2: `text-2xl lg:text-3xl font-serif font-semibold`
- H3: `text-xl font-serif font-semibold`
- Body: `text-base font-sans text-[#3D3D3D] leading-relaxed`
- Caption / Label: `text-xs font-sans uppercase tracking-widest text-[#6B6B6B]`

## Glassmorphism Components
- Glass card: `bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg`
- Glass dark: `bg-black/[0.08] backdrop-blur-md border border-black/10 rounded-2xl`
- Glass button: `bg-white/30 backdrop-blur-md border border-white/20 hover:bg-white/50 transition-all`
- Frosted navbar: `bg-white/20 backdrop-blur-lg border-b border-white/20`

## Spacing
- Section padding: `py-20 lg:py-32 px-6 lg:px-12`
- Card padding: `p-6 lg:p-8`
- Gap between cards: `gap-6 lg:gap-8`

## Borders & Shadows
- Thin border: `border border-[#C8C4B8]`
- Glass border: `border border-white/20`
- Subtle shadow: `shadow-sm`
- Elevated shadow: `shadow-xl shadow-black/10`

## Imagery
- All images: high-contrast B&W or sepia-toned microscopy
- Use `grayscale` or `sepia` Tailwind filter classes

## Do's
- Use serif fonts for all headings and specimen names
- Use glassmorphism for interactive overlays, modals, navbars
- Maintain strict grayscale — no color accents
- Use generous whitespace for academic feel
- Bottom-border-only inputs for form fields

## Don'ts
- No color accents (no blue, red, green, etc.)
- No rounded pill buttons — prefer `rounded-lg` or `rounded-xl`
- No heavy drop shadows — keep shadows subtle
- No dense layouts — breathe
