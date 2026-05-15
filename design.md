# MicroCosmos Design System — Japanese Minimalism × Dark Laboratory

## Philosophy
Ultra-clean, deliberate whitespace, immersive dark palette inspired by microscope illumination.
Every element should feel like a precision instrument: purposeful, uncluttered, exact.

## Color Palette
- Background primary: `#090D16` (deep obsidian) → `bg-obsidian`
- Background secondary: `#121824` (muted charcoal) → `bg-charcoal`
- Background card: `#0E1520` → `bg-card-dark`
- Border subtle: `#1E2A3A` → `border-subtle`
- Accent green (bio-luminescent): `#10B981` → `text-bio-green`, `bg-bio-green`
- Accent cyan (electric): `#06B6D4` → `text-bio-cyan`, `bg-bio-cyan`
- Accent orange (phosphorus): `#F97316` → `text-bio-orange`, `bg-bio-orange`
- Text primary: `#E8EDF5` → `text-primary-text`
- Text secondary: `#8A9BB0` → `text-secondary-text`
- Text muted: `#4A5568` → `text-muted-text`

## Typography
- Font family: "Space Grotesk" (headings) + "Inter" (body) from Google Fonts
- Heading scale: text-5xl / text-4xl / text-3xl / text-2xl / text-xl
- Body: text-base (16px), leading-relaxed
- Labels/captions: text-xs tracking-widest uppercase (monospace feel)
- Do: Use letter-spacing on labels, generous line-height on body
- Don't: Use serif fonts, bright white backgrounds, dense text blocks

## Borders & Surfaces
- Cards: `border border-subtle rounded-sm` with `bg-card-dark`
- Dividers: `border-t border-subtle`
- Glow effects: `shadow-[0_0_30px_rgba(16,185,129,0.15)]` for green glow
- Cyan glow: `shadow-[0_0_30px_rgba(6,182,212,0.15)]`

## Spacing
- Section padding: `py-24 px-6` (desktop), `py-16 px-4` (mobile)
- Card padding: `p-8` (desktop), `p-6` (mobile)
- Gap between grid items: `gap-8` or `gap-6`

## Interactive States
- Hover transitions: `transition-all duration-300`
- Image hover: scale-105 with overflow-hidden parent
- Card hover: border color shifts to accent color
- Buttons: outlined style with accent color, fill on hover

## Do's
- Use asymmetric layouts and split-screen viewports
- Use generous negative space around key elements
- Use thin horizontal rules as section separators
- Use monospace/uppercase labels for scientific data
- Use subtle gradient overlays on images (dark → transparent)

## Don'ts
- No bright white backgrounds
- No rounded-full buttons (prefer rounded-sm or rounded)
- No drop shadows on text (use color contrast instead)
- No cluttered navigation with many items
