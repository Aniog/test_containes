# Design System — The Starry Night & Astronomy

## Aesthetic
Japanese Minimalism meets deep-space wonder. Lean layouts, generous whitespace, deliberate typography, and a dark night-sky palette. Every element earns its place.

## Color Palette

### Backgrounds
- `bg-cosmos` (#0a0e1a) — deepest background, near-black indigo
- `bg-void` (#0d1224) — page background
- `bg-nebula` (#111827) — card/section background (Tailwind: gray-900)
- `bg-surface` (#1a2035) — elevated surfaces, nav, footer
- `bg-surface-hover` (#1e2640) — hover state for surfaces

### Text
- `text-star` (#f0f4ff) — primary text, near-white with cool tint
- `text-muted` (#8892a4) — secondary/muted text
- `text-dim` (#4a5568) — placeholder, disabled text

### Accents
- `text-amber` / `border-amber` (#f5c842) — warm amber, primary accent (star color)
- `text-aurora` (#7dd3fc) — sky blue, secondary accent (Tailwind: sky-300)
- `text-nebula-pink` (#e879f9) — nebula pink, tertiary accent (Tailwind: fuchsia-400)

### Borders
- `border-subtle` (#1e2a3a) — subtle dividers
- `border-glow` (#f5c84240) — amber glow border (semi-transparent)

## Typography

### Font Family
- Primary: `'Cormorant Garamond'` — elegant serif for headings (loaded via Google Fonts)
- Secondary: `'Inter'` — clean sans-serif for body text and UI

### Scale
- Hero headline: `text-5xl md:text-7xl lg:text-8xl font-light tracking-tight` (Cormorant Garamond)
- Section title: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond)
- Card title: `text-xl font-medium tracking-wide` (Inter)
- Body: `text-base font-normal leading-relaxed` (Inter)
- Caption/label: `text-sm font-medium tracking-widest uppercase` (Inter)
- Micro: `text-xs text-muted` (Inter)

## Spacing
- Section padding: `py-24 md:py-32`
- Container: `max-w-6xl mx-auto px-6 md:px-12`
- Card padding: `p-8 md:p-10`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl border border-subtle`
- Inputs: `rounded-xl border border-subtle`
- Buttons: `rounded-full` (pill) or `rounded-xl` (standard)
- Dividers: `border-t border-subtle`

## Shadows & Glow
- Card hover: `shadow-lg shadow-amber/5`
- Active/focus glow: `ring-2 ring-amber/40`
- Hero glow: radial gradient overlay with amber/indigo

## Animations
- Transitions: `transition-all duration-300 ease-in-out`
- Hover scale: `hover:scale-[1.02]`
- Star twinkle: CSS keyframe animation on pseudo-elements

## Component Patterns

### Navigation Bar
- Fixed top, `bg-surface/80 backdrop-blur-md`
- Logo left, nav links right
- Active link: amber underline accent
- Mobile: hamburger menu

### Cards
- `bg-nebula rounded-2xl border border-subtle p-8 hover:border-amber/30 transition-all duration-300`
- Icon in amber, title in star-white, body in muted

### Buttons
- Primary: `bg-amber text-cosmos font-semibold rounded-full px-8 py-3 hover:bg-amber/90`
- Ghost: `border border-amber/40 text-amber rounded-full px-8 py-3 hover:bg-amber/10`

### Form Inputs
- `bg-surface border border-subtle rounded-xl px-4 py-3 text-star placeholder:text-dim focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber/60 transition-all`

## Do's
- Use generous whitespace between sections
- Prefer light font weights for large headings
- Use amber sparingly as a true accent
- Layer subtle gradients for depth
- Use `tracking-widest uppercase text-xs` for section labels/eyebrows

## Don'ts
- Don't use pure white (#ffffff) — use `text-star` (#f0f4ff) instead
- Don't use saturated colors for large areas
- Don't crowd elements — embrace negative space
- Don't use more than 3 accent colors per page
- Don't use heavy font weights for headings
