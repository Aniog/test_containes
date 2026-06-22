# Visual Style for MicroCosmos

## Overview
A dark-mode, nature-centric aesthetic suitable for a scientific/microscopic photography showcase. Elements are minimalist to highlight the vivid content images.

## Typography
- **Primary Font:** Inter, system-ui, sans-serif
- **Headings:** Bold to extrabold, tight tracking (`font-bold`, `font-extrabold`, `tracking-tight`)
- **Body Text:** Neutral gray, relaxed leading (`text-neutral-400`, `leading-relaxed`)

## Layout & Spacing
- **Container:** Standard centered container with padding (`container mx-auto px-4`)
- **Sections:** Generous vertical padding (`py-24`)
- **Grid gaps:** standard spacing (`gap-4`, `gap-8`)

## Colors
- **Backgrounds:**
  - Main Body: `bg-neutral-950`
  - Elements/Cards: `bg-neutral-900`, `bg-neutral-800`
- **Text:** 
  - Primary: `text-white`
  - Secondary/Body: `text-neutral-400`
  - Subtle (nav links): `text-neutral-300`
- **Accents:**
  - Primary Accent: `text-emerald-400`, `bg-emerald-500`, `hover:bg-emerald-600`

## Borders & Radii
- **Borders:** Subtle separators (`border-neutral-800`)
- **Radii:** Rounded corners for cards and buttons (`rounded-2xl`, `rounded-xl`, `rounded-full`)

## Do's and Don'ts
- **Do:** Use transparent backgrounds with blur for sticky headers (`bg-neutral-950/80 backdrop-blur-md`).
- **Do:** Ensure text contrast over images (use overlays like `bg-gradient-to-t from-black/80 to-transparent`).
- **Don't:** Introduce vibrant colors outside of the emerald accent and the images themselves.
- **Don't:** Use light mode backgrounds.