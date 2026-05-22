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

### Headings — Playfair Display (Serif)
- H1: `font-playfair text-5xl font-bold tracking-tight text-ink`
- H2: `font-playfair text-3xl font-semibold text-ink`
- H3: `font-playfair text-xl font-semibold text-charcoal`

### Body — Inter (Sans-Serif)
- Body: `font-inter text-base text-charcoal leading-relaxed`
- Caption / Data: `font-inter text-sm text-graphite tracking-wide uppercase`
- Label: `font-inter text-xs text-silver tracking-widest uppercase`

---

## Glassmorphism Components

### Glass Card
```
bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg
```

### Glass Navbar
```
bg-white/20 backdrop-blur-lg border-b border-white/10 shadow-sm
```

### Glass Button (Primary)
```
bg-white/30 backdrop-blur-md border border-white/20 text-ink hover:bg-white/50 transition-all rounded-xl px-6 py-3 font-inter font-medium
```

### Glass Overlay (Lightbox)
```
bg-black/60 backdrop-blur-xl
```

### Glass Tooltip
```
bg-white/40 backdrop-blur-sm border border-white/30 text-ink text-xs rounded-lg px-3 py-2 shadow-md
```

---

## Spacing & Layout

- Section padding: `py-20 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

---

## Borders & Shadows

- Subtle border: `border border-ash`
- Glass border: `border border-white/20`
- Card shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.08)]`
- Elevated shadow: `shadow-[0_8px_40px_rgba(0,0,0,0.15)]`

---

## Do's
- Use Playfair Display for all headings and display text
- Use Inter for all UI labels, data, and body copy
- Apply backdrop-blur on all glass components
- Keep imagery strictly B&W or sepia-toned
- Use subtle paper grain texture on the background
- Maintain high contrast (WCAG AAA) for all text

## Don'ts
- Never use color outside the grayscale palette
- Never use flat opaque backgrounds for interactive components
- Never use rounded-full on large cards (use rounded-2xl or rounded-3xl)
- Never use font weights below 400 for body text
- Never use colored icons — keep all icons in ink/charcoal tones
