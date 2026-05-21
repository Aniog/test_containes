# MicroCosmos Design System

## Theme
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of tiny life. Deep blacks and dark teals evoke the look of electron microscopes and bioluminescent organisms.

## Colors
- Background (primary): `#050d0f` — near-black deep teal
- Background (secondary): `#0a1a1e` — dark teal-black
- Background (card): `#0f2329` — dark teal card surface
- Accent (primary): `#00e5c8` — bright cyan-teal (bioluminescent glow)
- Accent (secondary): `#7c3aed` — deep violet (microscope light)
- Text (primary): `#e8f4f6` — near-white with cool tint
- Text (secondary): `#7fb8c4` — muted teal-blue
- Text (muted): `#3d6b75` — dark muted teal
- Border: `#1a3a42` — subtle dark teal border

Add to Tailwind config as named colors:
- `cosmos-bg`: `#050d0f`
- `cosmos-surface`: `#0a1a1e`
- `cosmos-card`: `#0f2329`
- `cosmos-accent`: `#00e5c8`
- `cosmos-violet`: `#7c3aed`
- `cosmos-text`: `#e8f4f6`
- `cosmos-muted`: `#7fb8c4`
- `cosmos-dim`: `#3d6b75`
- `cosmos-border`: `#1a3a42`

## Typography
- Font: `Space Grotesk` (headings) + `Inter` (body) from Google Fonts
- Heading sizes: `text-5xl md:text-7xl` (hero), `text-3xl md:text-4xl` (section), `text-xl md:text-2xl` (card)
- Body: `text-base` with `leading-relaxed`
- Accent labels: `text-xs uppercase tracking-widest font-semibold`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Shadows
- Cards: `rounded-2xl border border-cosmos-border`
- Glow effect: `shadow-[0_0_30px_rgba(0,229,200,0.15)]`
- Image overlay: gradient from transparent to `cosmos-bg`

## Do's
- Use full-bleed images with dark overlays for hero sections
- Use grid layouts for image galleries (2-4 columns)
- Add subtle glow/neon effects on accent elements
- Use `object-cover` on all images
- Overlay text on images with semi-transparent dark backgrounds

## Don'ts
- No light backgrounds
- No bright white text on light surfaces
- No flat, non-immersive layouts
- No small or cramped image grids
