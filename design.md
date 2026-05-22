# MicroCosmos Design System
## "Vintage Scientific Minimalism" × Glassmorphism

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
| Pure White | `#FFFFFF` | `bg-white` | Glass fills |
| Pure Black | `#000000` | `bg-black` | Overlays |

---

## Typography

### Headings — Playfair Display (Serif)
- H1: `font-playfair text-5xl md:text-7xl font-bold tracking-tight text-ink`
- H2: `font-playfair text-3xl md:text-4xl font-semibold text-ink`
- H3: `font-playfair text-xl md:text-2xl font-medium text-ink`

### Body — Inter (Sans-Serif)
- Body: `font-inter text-base text-charcoal leading-relaxed`
- Caption: `font-inter text-sm text-graphite tracking-wide uppercase`
- Data/Label: `font-inter text-xs text-silver tracking-widest uppercase`

### Accent — Courier New (Monospace)
- Scientific IDs: `font-mono text-sm text-graphite`

---

## Glassmorphism Components

### Glass Card
```
bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg
```

### Glass Button (Primary)
```
bg-white/25 backdrop-blur-sm border border-white/40 text-ink hover:bg-white/40
rounded-full px-8 py-3 font-inter font-medium tracking-wide transition-all
```

### Glass Navbar
```
bg-white/15 backdrop-blur-lg border-b border-white/20 shadow-sm
```

### Glass Overlay (Lightbox)
```
bg-black/60 backdrop-blur-xl
```

### Glass Tooltip
```
bg-white/30 backdrop-blur-md border border-white/40 rounded-lg px-3 py-2
text-ink text-sm shadow-md
```

---

## Spacing & Layout

- Section padding: `py-20 md:py-32 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Grid gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons

---

## Borders & Shadows

- Glass border: `border border-white/30`
- Subtle border: `border border-ash`
- Card shadow: `shadow-[0_8px_32px_rgba(0,0,0,0.08)]`
- Elevated shadow: `shadow-[0_16px_48px_rgba(0,0,0,0.15)]`

---

## Do's
- Use Playfair Display for all headings
- Use backdrop-blur for all interactive overlays
- Keep imagery strictly B&W or sepia-toned
- Use paper grain texture on the background
- Maintain high contrast (WCAG AAA) for all text

## Don'ts
- No color accents (no blue, red, green, etc.)
- No flat opaque buttons — always use glass style
- No rounded corners smaller than `rounded-lg`
- No sans-serif for display headings
- No bright white backgrounds — use parchment (#F2F0E9)
