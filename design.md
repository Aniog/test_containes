# MicroCosmos Design System
## "Vintage Scientific Minimalism" × Glassmorphism

---

## Color Palette (Strictly Monochrome / Grayscale)

| Token | Hex | Usage |
|---|---|---|
| `parchment` | `#F2F0E9` | Page background (old newspaper) |
| `ink` | `#1A1A1A` | Primary headings, strong text |
| `charcoal` | `#3D3D3D` | Body text |
| `graphite` | `#6B6B6B` | Secondary text, captions |
| `silver` | `#A8A8A8` | Borders, dividers |
| `mist` | `#D4D2CB` | Subtle backgrounds, hover states |
| `white` | `#FFFFFF` | Glass component fills |

No color accents. All UI is monochrome.

---

## Typography

### Headings — Serif (Playfair Display)
- `font-serif` (Playfair Display via Google Fonts)
- H1: `text-5xl md:text-7xl font-bold tracking-tight text-ink`
- H2: `text-3xl md:text-4xl font-bold text-ink`
- H3: `text-xl md:text-2xl font-semibold text-ink`

### Body — Sans-Serif (Inter)
- `font-sans` (Inter via Google Fonts)
- Body: `text-base text-charcoal leading-relaxed`
- Caption/Label: `text-sm text-graphite tracking-widest uppercase`
- Data/Metadata: `text-xs font-mono text-graphite`

### Do's
- Use Playfair Display for all section titles and specimen names
- Use Inter for all UI labels, metadata, form fields, and navigation
- Use wide letter-spacing (`tracking-widest`) for uppercase labels
- Use `font-mono` for scientific data (magnification, IDs)

### Don'ts
- Never use color for typographic hierarchy — use weight and size only
- Never mix more than two typefaces on a single page

---

## Glassmorphism Components

### Glass Card
```
bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
```

### Glass Button (Primary)
```
bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-8 py-3
text-ink font-sans font-medium tracking-wide hover:bg-white/50 transition-all
```

### Glass Navbar
```
bg-white/10 backdrop-blur-lg border-b border-white/20 fixed top-0 w-full z-50
```

### Glass Tooltip
```
bg-white/80 backdrop-blur-sm border border-silver/40 rounded-lg px-3 py-2
text-xs text-charcoal shadow-md
```

### Glass Modal Overlay
```
bg-black/60 backdrop-blur-sm fixed inset-0 z-50
```

### Glass Modal Panel
```
bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl
```

---

## Spacing & Layout

- Section padding: `py-20 md:py-32 px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`
- Z-pattern grid: alternating `flex-row` / `flex-row-reverse` on desktop

---

## Paper Texture

Apply a subtle grain texture via CSS `background-image` noise pattern on `body`.
Use `opacity-[0.03]` for the grain overlay — barely perceptible, adds tactile depth.

---

## Imagery

- All images: grayscale or sepia-toned via `filter: grayscale(100%)` or `sepia(30%)`
- Hero images: full-bleed, high-contrast B&W micrographs
- Gallery slides: uniform aspect ratio `4:3`, grayscale filter applied

---

## Animation (Framer Motion)

- Page entry: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}`
- Stagger children: `staggerChildren: 0.1`
- Lightbox open: `initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}`
- Hover lift: `whileHover={{ y: -4 }}`
