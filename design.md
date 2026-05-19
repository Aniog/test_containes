# MicroCosmos Design System

## Theme
Dark, immersive, scientific-wonder aesthetic. Deep space-like backgrounds with vivid teal/cyan/emerald accent colors evoking bioluminescence and microscopic life.

## Colors
- Background primary: `#050d12` (near-black deep ocean)
- Background secondary: `#0a1a24` (dark navy)
- Background card: `#0d2233` (dark teal-navy)
- Accent primary: `#00d4aa` (bioluminescent teal) → Tailwind: use `[#00d4aa]`
- Accent secondary: `#00b4d8` (cyan) → Tailwind: use `[#00b4d8]`
- Accent glow: `#7df9e8` (light mint glow)
- Text primary: `#f0faf8` (near-white with cool tint)
- Text secondary: `#94b8b0` (muted teal-gray)
- Text muted: `#4a7a72`
- Border subtle: `rgba(0,212,170,0.15)`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-lg font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-[rgba(0,212,170,0.15)]`
- Card hover: `hover:border-[#00d4aa]`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,170,0.3)]`

## Images
- Hero: full-width background, 16x9 ratio, 1600px wide
- Gallery grid: 4x3 ratio, 600px wide
- Feature cards: 3x2 ratio, 800px wide
- Portrait cards: 2x3 ratio, 400px wide

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan glows for interactive elements
- Use `object-cover` on all images with `rounded-xl` or `rounded-2xl`
- Add subtle gradient overlays on images for text legibility
- Use `transition-all duration-300` for hover effects

## Don'ts
- No white or light backgrounds
- No warm color accents (orange, red, yellow)
- No sharp corners on image containers
- No flat/unstyled buttons
