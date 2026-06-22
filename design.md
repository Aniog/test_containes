# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by the beauty of the microscopic world — deep space-like backgrounds with vivid bioluminescent accent colors.

## Colors
- Background primary: `#050d1a` (near-black deep navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f3d` (dark blue card)
- Accent primary: `#00d4ff` (cyan/teal — like bioluminescence)
- Accent secondary: `#7c3aed` (violet/purple)
- Accent tertiary: `#10b981` (emerald green)
- Text primary: `#f0f6ff` (near-white)
- Text secondary: `#94a3b8` (muted slate)
- Text muted: `#475569`
- Border: `#1e3a5f` (subtle dark blue border)

Add to Tailwind config as named colors:
- `cosmos-bg`: `#050d1a`
- `cosmos-card`: `#0f1f3d`
- `cosmos-cyan`: `#00d4ff`
- `cosmos-violet`: `#7c3aed`
- `cosmos-emerald`: `#10b981`
- `cosmos-border`: `#1e3a5f`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
- Section titles: text-3xl md:text-5xl font-bold
- Card titles: text-xl font-semibold
- Body: text-base text-slate-300
- Captions: text-sm text-slate-400

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-4` to `gap-8`

## Borders & Shadows
- Cards: `border border-cosmos-border rounded-2xl`
- Glow effects: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`

## Components
- Navbar: sticky top, dark semi-transparent with backdrop blur
- Hero: full-screen with overlay gradient, centered text
- Section headers: centered, with cyan accent underline
- Gallery grid: masonry-style or uniform grid, 2-4 columns
- Cards: dark background, subtle border, hover lift effect
- Badges: small pill with accent color background

## Do's
- Use dark backgrounds throughout
- Use cyan/teal as the primary accent color
- Add subtle glow effects on interactive elements
- Use large, full-bleed images
- Keep text contrast high (white/light on dark)
- Use gradient overlays on images for text legibility

## Don'ts
- No white or light backgrounds
- No flat, unstyled cards
- No low-contrast text combinations
- No overly bright or saturated colors that clash
