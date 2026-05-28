# MicroCosmos Design System

## Brand Identity
MicroCosmos is a visually immersive website exploring the hidden world of microscopic life — bacteria, cells, fungi, plankton, and more. The aesthetic is dark, scientific, and awe-inspiring, with vivid accent colors evoking bioluminescence and microscope imagery.

## Color Palette
- Background (deep dark): `bg-gray-950` (#030712)
- Surface / Card: `bg-gray-900` (#111827)
- Surface elevated: `bg-gray-800` (#1f2937)
- Primary accent (cyan/teal): `text-cyan-400` (#22d3ee), `bg-cyan-500` (#06b6d4)
- Secondary accent (violet): `text-violet-400` (#a78bfa)
- Highlight (emerald): `text-emerald-400` (#34d399)
- Text primary: `text-white`
- Text secondary: `text-gray-300`
- Text muted: `text-gray-500`
- Border: `border-gray-700` or `border-cyan-500/30`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Subheading: `text-xl font-semibold`
- Body: `text-base text-gray-300 leading-relaxed`
- Caption / label: `text-sm text-gray-500 uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Component Styles
- Cards: `bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden`
- Badges/pills: `bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-3 py-1 text-xs uppercase tracking-widest`
- Buttons (primary): `bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold rounded-full px-6 py-3 transition`
- Buttons (ghost): `border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-6 py-3 transition`
- Dividers: `border-gray-800`

## Image Style
- Images should be full-bleed within cards, with `object-cover` and fixed aspect ratios
- Use `aspect-video` (16:9) for wide feature images
- Use `aspect-square` (1:1) for grid thumbnails
- Use `aspect-[3/4]` for portrait gallery items
- Overlay gradients: `bg-gradient-to-t from-gray-950/80 to-transparent`

## Visual Effects
- Subtle glow on accent elements: `shadow-cyan-500/20 shadow-lg`
- Hover scale on cards: `hover:scale-105 transition-transform duration-300`
- Section backgrounds: alternating `bg-gray-950` and `bg-gray-900`
- Hero: full-viewport with dark overlay on background image

## Do's
- Use dark backgrounds throughout
- Use cyan/teal as the primary accent color
- Keep text clearly readable (white or gray-300 on dark surfaces)
- Use generous whitespace between sections
- Use image-heavy layouts — grid galleries, hero images, feature cards with images

## Don'ts
- Never use light backgrounds (white, gray-100, etc.)
- Never use dark text on dark backgrounds
- Don't use more than 3 accent colors at once
- Don't crowd sections — maintain breathing room
