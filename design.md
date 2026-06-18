# MicroCosmos Design System
## "Vintage Scientific Minimalism" — Old Newspaper × Glassmorphism

---

## Color Palette (Strictly Monochrome / Grayscale)

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Parchment | `#F2F0E9` | `bg-parchment` | Page background |
| Ink Black | `#1A1A1A` | `text-ink` | Primary headings |
| Charcoal | `#3D3D3D` | `text-charcoal` | Body text |
| Ash | `#6B6B6B` | `text-ash` | Secondary / captions |
| Silver | `#A8A8A8` | `text-silver` | Muted / disabled |
| Fog | `#D4D2CB` | `bg-fog` | Dividers, borders |
| Glass White | `rgba(255,255,255,0.25)` | `bg-white/25` | Glass fills |
| Glass Border | `rgba(255,255,255,0.18)` | `border-white/20` | Glass borders |

---

## Typography

### Headings — Serif (Playfair Display)
- `font-serif` — all `<h1>` through `<h3>`
- `tracking-tight` for display sizes
- `text-ink` (#1A1A1A)

### Body — Sans-Serif (Inter)
- `font-sans` — all body, labels, UI text
- `text-charcoal` (#3D3D3D)
- Line height: `leading-relaxed`

### Data / Metadata — Monospace (JetBrains Mono)
- `font-mono` — specimen IDs, magnification values, coordinates
- `text-ash` (#6B6B6B)
- `text-xs` or `text-sm`

---

## Component Styles

### Glassmorphism Card
```
backdrop-blur-md bg-white/25 border border-white/20 rounded-2xl shadow-lg
```
- Use for: hero title card, nav, tooltips, lightbox overlay, submit button

### Glassmorphism Navbar
```
backdrop-blur-lg bg-white/20 border-b border-white/15 sticky top-0 z-50
```

### Glassmorphism Button (Primary)
```
backdrop-blur-sm bg-white/30 border border-white/25 rounded-full px-8 py-3
text-ink font-sans font-medium tracking-wide hover:bg-white/50 transition-all
```

### Glassmorphism Button (Ghost)
```
border border-ink/30 rounded-full px-6 py-2 text-ink hover:bg-ink/5 transition-all
```

### Lab Report Input (bottom-border only)
```
bg-transparent border-0 border-b border-ink/30 rounded-none px-0 py-2
text-ink placeholder:text-silver focus:border-ink focus:outline-none
```

---

## Imagery Rules
- All images: Black & White or Sepia-toned
- Unsplash URLs must include `&sat=-100` for desaturation
- Hero images: full-width, high-contrast micrographs
- Specimen cards: 4:3 ratio, grayscale

---

## Spacing & Layout
- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

---

## Animation (Framer Motion)
- Page transitions: `opacity 0→1`, `y 20→0`, duration `0.5s`
- Card hover: `scale 1→1.02`, `shadow` increase
- Lightbox: `opacity 0→1`, `scale 0.95→1`, duration `0.3s`
- Stagger children: `0.1s` delay between items

---

## Do's
- Use `font-serif` for all display headings
- Use `backdrop-blur` on all glass surfaces
- Keep all imagery grayscale
- Use `tracking-widest` for small caps labels
- Use `border-b` only inputs for the contact form

## Don'ts
- No color other than grayscale/monochrome
- No solid opaque backgrounds on cards (always glass)
- No rounded corners smaller than `rounded-xl`
- No sans-serif for hero headings
