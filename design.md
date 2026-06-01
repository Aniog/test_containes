# MicroCosmos Design System — "Vintage Scientific Minimalism"

## Philosophy
Blends the aesthetic of 20th-century botanical journals with Glassmorphism UI.
Academic, precise, timeless, and inspiring.

## Color Palette (Strictly Monochrome / Grayscale)
- Background: `#F2F0E9` (old newspaper parchment / bone white)
- Text Primary: `#1A1A1A` (deep ink black — headers)
- Text Secondary: `#3D3D3D` (charcoal — body text)
- Text Muted: `#6B6B6B` (mid-grey — captions, metadata)
- Border Light: `rgba(255,255,255,0.20)` (glass borders)
- Border Dark: `rgba(26,26,26,0.12)` (subtle dividers)
- Glass Fill: `rgba(255,255,255,0.25)` (frosted glass backgrounds)
- Glass Fill Dark: `rgba(26,26,26,0.06)` (dark glass tint)
- Overlay: `rgba(242,240,233,0.85)` (parchment overlay)

## Typography
- Headings: `'Playfair Display', Georgia, serif` — sophisticated, editorial
- Body / UI: `'Inter', system-ui, sans-serif` — crisp, legible
- Monospace / Labels: `'JetBrains Mono', monospace` — scientific data

### Scale
- Display: `text-6xl` / `text-7xl` — hero titles
- H1: `text-4xl` / `text-5xl`
- H2: `text-3xl`
- H3: `text-xl` / `text-2xl`
- Body: `text-base` (16px)
- Caption / Label: `text-sm` / `text-xs`

## Glassmorphism Components
- Background: `bg-white/25` or `bg-white/30`
- Backdrop blur: `backdrop-blur-md` (12px) or `backdrop-blur-lg` (16px)
- Border: `border border-white/20`
- Shadow: `shadow-lg` with `shadow-black/10`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills

## Buttons
- Primary Glass: `bg-white/30 backdrop-blur-md border border-white/20 text-[#1A1A1A] hover:bg-white/50`
- Dark: `bg-[#1A1A1A] text-[#F2F0E9] hover:bg-[#3D3D3D]`
- Outline: `border border-[#1A1A1A]/30 text-[#1A1A1A] hover:bg-[#1A1A1A]/5`

## Spacing
- Section padding: `py-20 px-6` or `py-24 px-8`
- Card padding: `p-6` or `p-8`
- Gap between grid items: `gap-6` or `gap-8`

## Imagery
- All images: Black & White or Sepia-toned
- Unsplash: append `&sat=-100` for desaturation
- Aspect ratios: `aspect-video` for hero, `aspect-square` for specimens

## Do's
- Use `font-serif` (Playfair Display) for all headings
- Use `tracking-widest text-xs uppercase` for section labels / eyebrows
- Use `backdrop-blur` on all floating/overlay elements
- Maintain strict grayscale — no color accents whatsoever
- Use subtle paper grain texture on backgrounds

## Don'ts
- No color accents (no blue, red, green, etc.)
- No flat opaque backgrounds on cards — always use glass effect
- No rounded corners smaller than `rounded-lg`
- No font sizes below `text-xs` for readable content
