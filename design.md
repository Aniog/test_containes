# MicroCosmos Design System

## Concept
A visually immersive, dark-themed website exploring the microscopic world — cells, bacteria, fungi, crystals, and other tiny wonders. The aesthetic is scientific yet beautiful: deep dark backgrounds with vivid accent colors inspired by bioluminescence and microscopy imagery.

## Color Palette

| Name | Hex | Tailwind Token | Usage |
|---|---|---|---|
| Deep Space | #050a14 | `bg-deep-space` | Page background |
| Dark Navy | #0a1628 | `bg-dark-navy` | Section backgrounds |
| Midnight | #0f1f3d | `bg-midnight` | Card backgrounds |
| Teal Glow | #00d4c8 | `text-teal-glow` | Primary accent, headings |
| Violet Pulse | #7c3aed | `text-violet-pulse` | Secondary accent |
| Biolume Green | #39ff14 | `text-biolume` | Highlight / badge |
| Soft White | #e8f4f8 | `text-soft-white` | Body text |
| Muted Blue | #8ba7c7 | `text-muted-blue` | Subtext, captions |
| Amber Glow | #f59e0b | `text-amber-glow` | Warm accent |

## Typography

- **Font Family:** Inter (Google Fonts)
- **Display / Hero:** `text-5xl md:text-7xl font-extrabold tracking-tight`
- **Section Headings:** `text-3xl md:text-4xl font-bold`
- **Card Titles:** `text-xl font-semibold`
- **Body Text:** `text-base font-normal leading-relaxed`
- **Captions / Labels:** `text-sm font-medium tracking-wide uppercase`

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges

## Visual Style

- **Background:** Very dark navy/black with subtle radial gradients
- **Cards:** Semi-transparent dark backgrounds with subtle border `border border-white/10`
- **Glow effects:** Use `shadow-[0_0_30px_rgba(0,212,200,0.3)]` for teal glow on featured elements
- **Images:** Full-bleed, rounded corners, with subtle overlay gradients
- **Dividers:** Gradient lines using `bg-gradient-to-r from-transparent via-teal-glow to-transparent`
- **Badges:** Small pill-shaped labels with biolume green or teal backgrounds

## Do's
- Use dark backgrounds consistently — never white or light gray sections
- Pair teal glow text with dark backgrounds for maximum contrast
- Use large, full-width hero images and image grids
- Add subtle glow/blur effects to accent elements
- Use `backdrop-blur` on overlays for a modern glass effect

## Don'ts
- Never use white or very light backgrounds
- Never use dark text on dark backgrounds
- Avoid flat, colorless designs — always use accent colors
- Don't use more than 3 accent colors in a single section
