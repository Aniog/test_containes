# MicroCosmos Design System
## "Vintage Scientific Minimalism" — Old Newspaper × Glassmorphism Fusion

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
| Glass White | `rgba(255,255,255,0.30)` | `bg-white/30` | Glass fills |
| Glass Border | `rgba(255,255,255,0.20)` | `border-white/20` | Glass borders |

---

## Typography

### Headings — Playfair Display (Serif)
- H1: `font-playfair text-5xl md:text-7xl font-bold tracking-tight text-ink`
- H2: `font-playfair text-3xl md:text-4xl font-semibold text-ink`
- H3: `font-playfair text-xl md:text-2xl font-medium text-ink`

### Body — Inter (Sans-Serif)
- Body: `font-inter text-base text-charcoal leading-relaxed`
- Caption / Label: `font-inter text-sm text-graphite tracking-widest uppercase`
- Data / Metadata: `font-mono text-xs text-graphite`

---

## Component Styles

### Glassmorphism Card
```
backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-lg
```

### Glassmorphism Button (Primary)
```
backdrop-blur-md bg-white/30 border border-white/20 rounded-full px-8 py-3
text-ink font-inter font-semibold tracking-widest uppercase text-sm
hover:bg-white/50 transition-all duration-300
```

### Glassmorphism Navbar
```
fixed top-4 left-1/2 -translate-x-1/2 z-50
backdrop-blur-xl bg-white/20 border border-white/20 rounded-full
px-6 py-3 shadow-xl
```

### Input Fields (Lab Report Style)
```
bg-transparent border-0 border-b border-charcoal/40
focus:border-ink focus:outline-none
font-inter text-ink placeholder:text-silver
pb-2 w-full transition-colors duration-200
```

---

## Spacing & Layout

- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto`

---

## Do's
- Use `backdrop-blur-md` or `backdrop-blur-xl` for all glass surfaces
- Pair glass components against textured/image backgrounds for maximum effect
- Use `tracking-widest uppercase` for all labels and metadata
- Use `font-playfair` for all display headings
- Maintain strict grayscale — no color accents whatsoever
- Use subtle `shadow-lg` or `shadow-2xl` on glass cards

## Don'ts
- Never use colored text or backgrounds
- Never use flat opaque buttons — always glass style
- Never use rounded-none on interactive elements
- Never use font sizes below 12px
- Never use low-contrast text on light backgrounds (maintain AAA ratio)
