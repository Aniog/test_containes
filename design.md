# MicroCosmos Design System
## "Vintage Scientific Minimalism" — Old Newspaper × Glassmorphism

---

## Color Palette (Strictly Monochrome / Grayscale)

| Token | Hex | Usage |
|---|---|---|
| `parchment` | `#F2F0E9` | Page background (old newspaper bone-white) |
| `ink` | `#1A1A1A` | Primary headings, deep text |
| `charcoal` | `#3D3D3D` | Body text |
| `ash` | `#6B6B6B` | Secondary / muted text |
| `silver` | `#A8A8A8` | Borders, dividers |
| `mist` | `#D4D2CB` | Subtle backgrounds, hover states |
| `white` | `#FFFFFF` | Glass fills, highlights |

**Rule:** No color other than grayscale. All images must use `&sat=-100` (Unsplash desaturation).

---

## Typography

### Headings — Serif (Playfair Display)
- `font-playfair` — imported via Google Fonts
- Hero: `text-6xl lg:text-8xl font-bold tracking-tight`
- Section titles: `text-4xl font-semibold`
- Card titles: `text-2xl font-medium`

### Body / UI — Sans-Serif (Inter)
- `font-inter` — system default
- Body: `text-base leading-relaxed`
- Labels / metadata: `text-sm font-mono tracking-widest uppercase`
- Captions: `text-xs text-ash`

---

## Glassmorphism Components

### Glass Card
```
bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
```

### Glass Button (Primary)
```
bg-white/25 backdrop-blur-sm border border-white/40 rounded-full px-8 py-3
text-ink font-medium hover:bg-white/40 transition-all duration-300
```

### Glass Navbar
```
bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50
```

### Glass Tooltip
```
bg-white/80 backdrop-blur-sm border border-silver/40 rounded-lg px-3 py-2
text-ink text-sm shadow-md
```

### Glass Overlay / Lightbox
```
bg-black/60 backdrop-blur-xl fixed inset-0 z-50
```

---

## Spacing & Layout

- Section padding: `py-24 px-6 lg:px-16`
- Card gap: `gap-6 lg:gap-8`
- Max content width: `max-w-7xl mx-auto`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons

---

## Imagery Rules

- All Unsplash images: append `&sat=-100&con=20` for B&W high-contrast
- Aspect ratios: Hero `16:9`, Cards `4:3`, Gallery `variable`
- Overlay: `mix-blend-multiply` or `grayscale` CSS filter

---

## Animation (Framer Motion)

- Page enter: `opacity 0→1, y 20→0, duration 0.6`
- Card hover: `scale 1→1.02, duration 0.2`
- Lightbox open: `opacity 0→1, scale 0.95→1, duration 0.3`
- Stagger children: `staggerChildren: 0.08`

---

## Do's and Don'ts

✅ Use `backdrop-blur-md` or higher for all glass elements  
✅ Maintain minimum 4.5:1 contrast ratio (AAA)  
✅ Use Playfair Display for all display headings  
✅ Use `font-mono` for scientific data, IDs, measurements  
✅ Desaturate all images with `filter: grayscale(100%)`  

❌ Never use color (no blues, greens, reds)  
❌ Never use `border-radius` less than `rounded-lg`  
❌ Never use font-weight below 400 for body text  
❌ Never use colored shadows — only `shadow-black/20`  
