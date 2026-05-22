# MicroCosmos Design System
## "Vintage Scientific Minimalism" — Old Newspaper & Glassmorphism Fusion

---

## Color Palette (Strictly Monochrome / Grayscale)

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Parchment | `#F2F0E9` | `bg-parchment` | Page background |
| Ink Black | `#1A1A1A` | `text-ink` | Primary headings |
| Charcoal | `#3D3D3D` | `text-charcoal` | Body text |
| Graphite | `#6B6B6B` | `text-graphite` | Secondary text, captions |
| Silver | `#A8A8A8` | `text-silver` | Muted labels, placeholders |
| Ash | `#D4D2CB` | `bg-ash` | Dividers, subtle borders |
| Bone | `#E8E6DF` | `bg-bone` | Card backgrounds |
| Pure White | `#FFFFFF` | `bg-white` | Glass overlays |

---

## Typography

### Headings — Serif (Playfair Display)
- `font-serif` — All H1–H3 headings
- H1: `text-5xl md:text-7xl font-bold tracking-tight`
- H2: `text-3xl md:text-4xl font-semibold tracking-tight`
- H3: `text-xl md:text-2xl font-medium`
- Style: Ink black `#1A1A1A`, tight letter-spacing

### Body — Sans-Serif (Inter)
- `font-sans` — All body text, UI labels, data
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-graphite tracking-wide uppercase`
- Data: `text-xs font-mono tracking-widest`

### DO:
- Use Playfair Display for all scientific specimen names and section titles
- Use uppercase tracking-widest for metadata labels (e.g., "MAGNIFICATION: 400×")
- Use `font-mono` for specimen IDs and technical data

### DON'T:
- Never use color text (no blues, reds, greens)
- Never use font-weight below 400 for body text
- Never mix more than 2 typefaces on a single page

---

## Glassmorphism Components

### Glass Card (Primary)
```
bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
```

### Glass Card (Dark Overlay)
```
bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl
```

### Glass Button (Primary)
```
bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-8 py-3
text-ink font-medium hover:bg-white/50 transition-all duration-300
```

### Glass Navbar
```
bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50
```

### Glass Tooltip
```
bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2
text-white text-xs
```

---

## Spacing & Layout

- Section padding: `py-20 md:py-32`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons

---

## Paper Texture & Grain

- Background: `bg-parchment` with CSS `noise` texture overlay
- Subtle grain via SVG filter or CSS background-image
- All images: grayscale filter `filter grayscale contrast-110`

---

## Animation Principles (Framer Motion)

- Entry: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Duration: `0.6s` ease-out for page elements
- Stagger: `0.1s` between list items
- Hover: `scale(1.02)` with `0.2s` transition
- Lightbox: `opacity` + `scale` from `0.95` to `1`

---

## Imagery

- All microscopy images: `filter: grayscale(100%) contrast(1.1)`
- Hero images: Full-bleed, high-contrast B&W micrographs
- Specimen thumbnails: 4:3 aspect ratio, grayscale
- Watermarks: `opacity-5` to `opacity-10`
