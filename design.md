# MicroCosmos Design System

## Theme
Dark, immersive scientific aesthetic inspired by microscopy and the hidden world of tiny life. Deep space-like backgrounds with vivid bioluminescent accent colors.

## Colors
- Background primary: `#050d1a` (near-black deep navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f35` (dark blue-navy)
- Accent primary: `#00d4ff` (cyan/teal — like bioluminescence)
- Accent secondary: `#7c3aed` (violet/purple)
- Accent tertiary: `#10b981` (emerald green)
- Text primary: `#f0f9ff` (near-white with cool tint)
- Text secondary: `#94a3b8` (muted slate)
- Text muted: `#475569`
- Border: `#1e3a5f` (subtle dark blue border)
- Gradient: from `#050d1a` via `#0a1628` to `#050d1a`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-[#1e3a5f]`
- Card hover: `hover:border-[#00d4ff]/40`
- Card shadow: `shadow-lg shadow-black/40`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`

## Components
- Cards: dark background `bg-[#0f1f35]`, rounded `rounded-2xl`, subtle border
- Buttons primary: `bg-[#00d4ff] text-[#050d1a] font-bold rounded-full px-8 py-3 hover:bg-cyan-300`
- Buttons outline: `border border-[#00d4ff] text-[#00d4ff] rounded-full px-8 py-3 hover:bg-[#00d4ff]/10`
- Badges: `bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold px-3 py-1 rounded-full`
- Section dividers: subtle gradient lines

## Images
- Hero: full-width background, 16x9 or wider
- Gallery grid: mix of 4x3 and 1x1 ratios
- Category cards: 4x3 ratio
- Specimen cards: 3x4 portrait ratio

## Do's
- Use glowing cyan accents sparingly for highlights
- Overlay dark gradients on background images for text readability
- Use `backdrop-blur` for glass-morphism effects on overlays
- Animate subtle floating/pulse effects on accent elements

## Don'ts
- No white or light backgrounds
- No warm color palettes (orange, red, yellow as primary)
- No flat, unshaded cards without depth
- No small or hard-to-read text on dark backgrounds
