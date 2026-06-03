# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by microscope imagery — deep blacks, glowing cyans, and bioluminescent greens.

## Colors
- Background primary: `#050a0f` (near-black deep navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0d1f35` (dark blue-navy)
- Accent cyan: `#00d4ff` (bright cyan — like microscope light)
- Accent teal: `#00b4a0` (teal green)
- Accent green: `#39ff14` (neon green — bioluminescent)
- Text primary: `#f0f8ff` (alice blue — near white)
- Text secondary: `#8ab4c8` (muted blue-grey)
- Text muted: `#4a6a7a`
- Border: `#1a3a4a`

Add to Tailwind config as named colors:
```js
cosmos: {
  bg: '#050a0f',
  navy: '#0a1628',
  card: '#0d1f35',
  cyan: '#00d4ff',
  teal: '#00b4a0',
  neon: '#39ff14',
  text: '#f0f8ff',
  muted: '#8ab4c8',
  dim: '#4a6a7a',
  border: '#1a3a4a',
}
```

## Typography
- Font: Inter (already loaded)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-cosmos-muted`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`

## Borders & Shadows
- Card border: `border border-cosmos-border`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`

## Images
- All images use the `data-strk-img` / `data-strk-bg` stock image system
- Images should be microscopic subjects: bacteria, cells, fungi, viruses, protozoa, algae, diatoms, pollen
- Gallery images: `rounded-xl overflow-hidden`
- Hero background: full-bleed with dark overlay

## Do's
- Use dark backgrounds everywhere
- Use cyan/teal for interactive elements and highlights
- Use neon green sparingly for special callouts
- Ensure all text is clearly readable against dark backgrounds
- Use `text-cosmos-text` or `text-white` on dark surfaces

## Don'ts
- No light backgrounds
- No low-contrast text (e.g. dark text on dark bg)
- No harsh pure white backgrounds
- Don't overuse neon green
