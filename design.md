/**
 * @file visual-style.md
 * @description Design system for the MicroCosmos website.
 */

# Visual Style Guide - MicroCosmos

## Core Philosophy
The design should feel clinical yet artistic, mirroring the experience of looking through a high-end microscope. It combined dark, deep spatial backgrounds with vibrant, bio-luminescent accents.

## Typography
- **Headings**: 'Inter', sans-serif. Heavy weights (800-900) for hero titles, with tight tracking. 
  - *Tailwind classes*: `font-black tracking-tighter`
- **Body**: 'Inter', sans-serif. Light to normal weights (300-400).
  - *Tailwind classes*: `font-light text-slate-400`

## Color Palette
- **Background**: Deep Slate / Navy.
  - *Base*: `bg-slate-950` (#020617)
  - *Surface*: `bg-slate-900/50`
- **Primary Accent**: Cyan / Electric Blue.
  - *Brand*: `text-cyan-400` (#22d3ee)
  - *Glow*: `shadow-cyan-500/20`
- **Secondary Accent**: Emerald / Seafoam.
  - *Detail*: `text-emerald-400` (#34d399)
- **Text**:
  - *Primary*: `text-slate-50`
  - *Muted*: `text-slate-400`

## Shapes and Borders
- **Rounded Corners**: Generous rounding for "organic" feel.
  - *Cards*: `rounded-3xl`
  - *Buttons*: `rounded-full`
- **Borders**: Thin, subtle dividers.
  - *Classes*: `border border-slate-800`

## Effects
- **Backdrop Blur**: Use for navigation and overlays.
  - *Classes*: `backdrop-blur-md bg-slate-950/80`
- **Gradients**: Subtle overlays for depth.
  - *Hero*: `bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950`

## Imagery
- High-contrast, high-magnification photography.
- Immersive background images with low opacity (30-40%).
- Consistent aspect ratios (4x3 for gallery, 16x9 for hero).
