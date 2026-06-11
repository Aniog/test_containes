# MicroCosmos Design System

## Brand Identity
MicroCosmos is a visually immersive website exploring the hidden world of microscopic life. The design is dark, scientific, and awe-inspiring — evoking the feeling of peering through a microscope into an alien universe.

## Color Palette
- Background (deep dark): `bg-gray-950` (#030712)
- Surface cards: `bg-gray-900` (#111827)
- Surface elevated: `bg-gray-800` (#1f2937)
- Primary accent (bioluminescent teal): `text-teal-400` / `bg-teal-400` (#2dd4bf)
- Secondary accent (electric violet): `text-violet-400` / `bg-violet-400` (#a78bfa)
- Highlight (amber/gold): `text-amber-400` (#fbbf24)
- Body text: `text-gray-100` (#f3f4f6)
- Muted text: `text-gray-400` (#9ca3af)
- Borders: `border-gray-700` (#374151)

Do NOT use: white backgrounds, light grays as backgrounds, or low-contrast text on dark surfaces.

## Typography
- Font: "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- Hero heading: `text-5xl md:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-gray-300 leading-relaxed`
- Caption/label: `text-sm text-gray-400 uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Grid: 1 col mobile → 2 col tablet → 3 col desktop

## Component Styles
- Cards: `bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500 transition-all duration-300`
- Buttons (primary): `bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-full transition-colors`
- Buttons (ghost): `border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full transition-colors`
- Section dividers: subtle gradient lines using `border-t border-gray-800`
- Image overlays: `bg-gradient-to-t from-gray-950 via-transparent to-transparent`

## Visual Style
- Heavy use of full-bleed images with dark overlays
- Glowing accent effects: `shadow-[0_0_30px_rgba(45,212,191,0.3)]`
- Subtle grid/dot background patterns for depth
- Smooth hover transitions on all interactive elements
- Masonry or asymmetric grid layouts for image galleries

## Do's and Don'ts
- DO: Use dark backgrounds everywhere; let images breathe with generous padding
- DO: Use teal/violet accents sparingly for emphasis
- DO: Add subtle glow effects to hero elements
- DON'T: Use pure white (#fff) as a background
- DON'T: Use low-contrast text (e.g. gray-500 on gray-900)
- DON'T: Use more than 3 accent colors in one section
