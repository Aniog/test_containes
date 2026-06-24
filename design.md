# MicroCosmos Design System — Vintage Scientific Minimalism

## Philosophy
A fusion of 20th-century botanical journal aesthetics with modern Glassmorphism UI. The result is academic, precise, timeless, and inspiring.

## Color Palette (Strictly Monochrome)

| Token            | Value     | Usage                                  |
|------------------|-----------|----------------------------------------|
| parchment        | #F2F0E9  | Page background                        |
| ink              | #1A1A1A  | Headings, primary text                 |
| charcoal         | #3D3D3D  | Body text                              |
| slate            | #6B6B6B  | Secondary text, captions               |
| silver           | #A0A0A0  | Borders, dividers                      |
| mist             | #D4D2CB  | Subtle backgrounds, hover states       |
| glass-fill       | rgba(255,255,255,0.30) | Glassmorphism fill          |
| glass-border     | rgba(255,255,255,0.20) | Glassmorphism border        |
| glass-fill-dark  | rgba(26,26,26,0.60)    | Dark glass overlay          |

## Typography

- **Headings**: `'Playfair Display', Georgia, serif` — Sophisticated serif
- **Body / UI**: `'Inter', system-ui, sans-serif` — Crisp sans-serif
- **Monospace / Data**: `'JetBrains Mono', monospace` — Scientific data

### Scale
- Display: text-5xl / text-6xl (font-bold)
- H1: text-4xl (font-bold)
- H2: text-3xl (font-semibold)
- H3: text-2xl (font-semibold)
- Body: text-base
- Caption: text-sm
- Micro: text-xs

## Glassmorphism Components

### Standard Glass Card
```
bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg
```

### Dark Glass Overlay
```
bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl
```

### Glass Button
```
bg-white/30 backdrop-blur-md border border-white/20 rounded-full px-6 py-3
hover:bg-white/50 transition-all duration-300
```

## Spacing
- Section padding: py-20 px-6 lg:px-16
- Card padding: p-6 lg:p-8
- Grid gap: gap-6 lg:gap-8
- Component gap: space-y-4

## Borders & Shadows
- Standard border: `border border-silver/40`
- Glass border: `border border-white/20`
- Card shadow: `shadow-lg`
- Elevated shadow: `shadow-2xl`

## Imagery
- All microscopy images: high-contrast B&W or sepia-toned
- Use CSS `grayscale(1)` filter on images where needed
- Sepia variant: `sepia(0.3) contrast(1.1)`

## Do's
- Use serif headings for academic gravitas
- Maintain high contrast (AAA level) for readability
- Use glassmorphism sparingly for key interactive elements
- Keep layouts asymmetrical and editorial
- Use generous whitespace

## Don'ts
- No color accents (strictly monochrome)
- No rounded-full on cards (use rounded-2xl max)
- No heavy drop shadows (keep subtle)
- No decorative fonts beyond the system
- No low-contrast text combinations
