# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep navy/black backgrounds with vibrant teal, cyan, and purple accent colors evoke bioluminescence and scientific imagery.

## Color Palette

### Background Colors
- Page background: `bg-gray-950` (#030712)
- Section dark: `bg-gray-900` (#111827)
- Section slightly lighter: `bg-gray-800` (#1f2937)
- Card background: `bg-gray-900/80`

### Accent Colors (added to Tailwind config)
- Teal primary: `teal-400` / `teal-500` (#2dd4bf / #14b8a6)
- Cyan glow: `cyan-400` / `cyan-300` (#22d3ee / #67e8f9)
- Purple accent: `purple-500` / `violet-400` (#a855f7 / #a78bfa)
- Emerald highlight: `emerald-400` (#34d399)

### Text Colors
- Primary text: `text-white`
- Secondary text: `text-gray-300`
- Muted text: `text-gray-400`
- Accent text: `text-teal-400`, `text-cyan-400`

## Typography

### Font Family
- Headings: "Space Grotesk" (Google Fonts) — modern, scientific feel
- Body: "Inter" — clean and readable

### Scale
- Hero title: `text-6xl md:text-8xl font-bold`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-gray-300`
- Caption: `text-sm text-gray-400`

## Borders & Shadows
- Card border: `border border-gray-700/50`
- Glow effect: `shadow-[0_0_30px_rgba(45,212,191,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]`
- Rounded cards: `rounded-2xl`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Image Style
- All images use `rounded-xl` or `rounded-2xl`
- Images have subtle border: `border border-gray-700/40`
- Hover: slight scale `hover:scale-105 transition-transform duration-500`
- Overlay gradient on hero images for text legibility

## Do's
- Use dark backgrounds throughout
- Use teal/cyan for interactive elements and highlights
- Use generous whitespace between sections
- Add subtle gradient overlays on images
- Use grid layouts for image galleries (3-4 columns on desktop)

## Don'ts
- No white or light backgrounds
- No bright primary colors (red, orange) as main accents
- No tight, cramped layouts
- No plain text without proper contrast against dark backgrounds
