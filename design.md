# MicroCosmos Design System — "Vintage Scientific Minimalism"

## Concept
A fusion of 20th-century botanical journal aesthetics with modern Glassmorphism UI.
Academic, precise, timeless, and inspiring.

## Color Palette (Strictly Monochrome / Grayscale)

| Token | Value | Usage |
|---|---|---|
| `parchment` | `#F2F0E9` | Page background (old newspaper bone white) |
| `ink` | `#1A1A1A` | Primary headings, strong text |
| `charcoal` | `#3D3D3D` | Body text |
| `graphite` | `#6B6B6B` | Secondary text, captions |
| `ash` | `#9E9E9E` | Muted labels, placeholders |
| `silver` | `#C8C8C8` | Borders, dividers |
| `fog` | `#E0DED7` | Subtle backgrounds, card fills |
| `white` | `#FFFFFF` | Glass overlays, highlights |

**No color accents. No hues. Pure grayscale only.**

## Typography

### Headings — Serif (Playfair Display)
- H1: `font-playfair text-5xl font-bold tracking-tight text-ink`
- H2: `font-playfair text-3xl font-semibold text-ink`
- H3: `font-playfair text-xl font-semibold text-ink`

### Body — Sans-Serif (Inter)
- Body: `font-inter text-base text-charcoal leading-relaxed`
- Caption / Label: `font-inter text-sm text-graphite tracking-widest uppercase`
- Data / Metadata: `font-inter text-xs text-graphite font-mono`

## Glassmorphism Components

### Glass Card
```
bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg
```

### Glass Button (Primary)
```
bg-white/20 backdrop-blur-sm border border-white/30 text-ink hover:bg-white/40
rounded-full px-8 py-3 font-inter font-medium tracking-wide transition-all
```

### Glass Navbar
```
bg-white/10 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50
```

### Glass Tooltip
```
bg-white/80 backdrop-blur-sm border border-silver/40 rounded-lg shadow-md
text-ink text-xs font-inter px-3 py-2
```

### Glass Overlay (Lightbox)
```
bg-black/60 backdrop-blur-xl fixed inset-0 z-50
```

## Texture & Grain
- Background: CSS noise/grain overlay at 3–5% opacity for paper texture
- Use `bg-[#F2F0E9]` as base, with a subtle SVG noise pattern overlay

## Imagery
- All images: Black & White or Sepia-toned micrographs
- High contrast, scientific aesthetic
- Use `grayscale` and `contrast-125` Tailwind filters

## Spacing & Layout
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

## Borders & Shadows
- Cards: `border border-silver/40 rounded-2xl`
- Glass: `border border-white/20`
- Shadows: `shadow-sm` for cards, `shadow-xl` for modals

## Do's
- Use Playfair Display for all headings
- Use Inter for all UI text, labels, metadata
- Keep everything grayscale — no color
- Use backdrop-blur for all glass elements
- Maintain generous whitespace

## Don'ts
- No color accents (no blue, green, red, etc.)
- No rounded corners smaller than `rounded-lg`
- No flat/solid colored buttons (always glass style)
- No dense layouts — breathe
