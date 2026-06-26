# ARTITECT MACHINERY — Visual Design System

A precision-engineered, elegant design language for an industrial machinery brand specializing in sheet metal folding equipment.

## Brand Personality
- **Elegant industrial**: refined typography meets workshop-grade confidence
- **Precise and trustworthy**: clean grids, generous whitespace, sharp edges
- **User friendly**: clear hierarchy, large touch targets, readable text

## Color Palette
Use a restrained palette: deep graphite for authority, warm steel accent for personality, off-white for breathing room.

| Token | Tailwind | Use |
|---|---|---|
| Ink (primary text/dark surfaces) | `bg-neutral-900` / `text-neutral-900` (#0a0a0a) | Headlines, header, footer |
| Steel (secondary surface) | `bg-neutral-800` (#262626) | Dark sections |
| Bone (page background) | `bg-stone-50` (#fafaf9) | Default page background |
| Pearl (card surface) | `bg-white` | Cards, panels |
| Hairline (borders) | `border-neutral-200` | Dividers, card borders |
| Muted (body text) | `text-neutral-600` | Body copy on light |
| Accent — Amber Forge | `bg-amber-500` / `text-amber-500` (#f59e0b) | Single primary accent, used sparingly |
| Accent hover | `bg-amber-600` | Hover state for accent |

Do NOT introduce additional accent hues. The site reads as monochrome + a single warm forge-amber.

## Typography
- Display/Headlines: **Fraunces** (serif, slight optical inspiration) — weights 400/500/600
- UI/Body: **Inter** (sans-serif) — weights 300/400/500/600
- Loaded via Google Fonts in `index.html`.

### Scale
- Hero h1: `text-5xl md:text-7xl font-serif font-medium tracking-tight`
- Section h2: `text-3xl md:text-5xl font-serif font-medium tracking-tight`
- Card title h3: `text-xl md:text-2xl font-serif font-medium`
- Eyebrow label: `text-xs uppercase tracking-[0.2em] font-medium text-amber-600`
- Body: `text-base md:text-lg text-neutral-600 leading-relaxed`
- Small/meta: `text-sm text-neutral-500`

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto`
- Section vertical padding: `py-20 md:py-28`
- Horizontal padding: `px-6 md:px-10`
- Grid gaps: `gap-8 md:gap-12`
- Cards: `rounded-2xl border border-neutral-200 bg-white p-6 md:p-8`

## Buttons
- Primary: `inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-500 hover:text-neutral-900 transition-colors`
- Secondary: `inline-flex items-center gap-2 border border-neutral-300 text-neutral-900 px-6 py-3 rounded-full font-medium hover:border-neutral-900 transition-colors`
- Ghost: `inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-amber-600 transition-colors`

## Imagery
- Prefer wide, cinematic crops (`16x9` or `3x2`) for hero/products
- Use `1x1` for portrait cards
- Keep imagery dark/industrial: factory floors, sheet metal close-ups, folded steel

## Do's
- Use generous whitespace; let content breathe
- Use thin hairline dividers (1px neutral-200) to separate sections subtly
- Use serif for any "branded moment" — h1, h2, big numbers
- Use uppercase tracked eyebrows above headlines

## Don'ts
- Don't use gradients or drop shadows beyond `shadow-sm` for elevation
- Don't use more than one accent color
- Don't use rounded-full on large cards (only on buttons, tags, pills)
- Don't use light text on light backgrounds — always verify contrast
