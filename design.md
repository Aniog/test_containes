# MicroCosmos Design System
## "Vintage Scientific Minimalism" × Glassmorphism

---

## Color Palette (Strictly Monochrome)

| Token | Hex | Usage |
|---|---|---|
| `parchment` | `#F2F0E9` | Page background |
| `ink` | `#1A1A1A` | Primary headings, strong text |
| `charcoal` | `#3D3D3D` | Body text |
| `graphite` | `#6B6B6B` | Secondary text, captions |
| `ash` | `#9E9E9E` | Borders, dividers |
| `mist` | `#C8C6BF` | Subtle borders, disabled states |
| `fog` | `#E0DED7` | Card backgrounds, hover states |
| `white` | `#FFFFFF` | Glass overlays, highlights |

All colors are defined in `tailwind.config.js` as named tokens.

---

## Typography

### Headings — Playfair Display (Serif)
- `font-serif` → `'Playfair Display', Georgia, serif`
- H1: `text-6xl font-bold tracking-tight` (Hero)
- H2: `text-4xl font-semibold tracking-tight`
- H3: `text-2xl font-semibold`
- H4: `text-xl font-medium`

### Body / UI — Inter (Sans-Serif)
- `font-sans` → `'Inter', system-ui, sans-serif`
- Body: `text-base font-normal leading-relaxed`
- Caption / Label: `text-sm font-medium tracking-widest uppercase`
- Data / Metadata: `text-xs font-mono tracking-wide`

---

## Glassmorphism Components

### Glass Card
```
bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
```

### Glass Button (Primary)
```
bg-white/25 backdrop-blur-sm border border-white/40 rounded-full px-6 py-3
text-ink font-medium hover:bg-white/40 transition-all duration-300
```

### Glass Navbar
```
bg-white/10 backdrop-blur-lg border-b border-white/20 fixed top-0 w-full z-50
```

### Glass Tooltip
```
bg-ink/80 backdrop-blur-sm text-white text-xs rounded-lg px-3 py-2
```

### Glass Modal Overlay
```
bg-black/60 backdrop-blur-md fixed inset-0 z-50
```

---

## Spacing & Layout

- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons/pills

---

## Imagery

- All images: Unsplash with `&sat=-100` for grayscale
- Hero images: `16:9` or full-bleed, `object-cover`
- Specimen thumbnails: `4:3` ratio
- Gallery slides: Mixed aspect ratios (masonry)

---

## Do's and Don'ts

### Do
- Use `font-serif` for all headings and specimen names
- Apply `backdrop-blur` on all overlay/glass elements
- Use `tracking-widest uppercase text-xs` for labels and metadata
- Maintain high contrast: dark text on light backgrounds
- Use subtle `paper-grain` texture on the background

### Don't
- Never use color (no blues, greens, reds)
- Never use `font-bold` on body text
- Never use hard box shadows without blur
- Never use rounded corners smaller than `rounded-lg`
- Never use images without the `&sat=-100` grayscale filter
