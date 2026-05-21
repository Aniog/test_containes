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
| Glass White | `rgba(255,255,255,0.30)` | `bg-white/30` | Glass fills |
| Glass Border | `rgba(255,255,255,0.20)` | `border-white/20` | Glass borders |

---

## Typography

### Headings — Serif (Playfair Display)
- `font-serif` — all `<h1>` through `<h3>`
- `text-ink` (#1A1A1A)
- Tracking: `tracking-tight` for large display, `tracking-normal` for sub-heads
- Example: `className="font-serif text-5xl font-bold tracking-tight text-ink"`

### Body — Sans-Serif (Inter)
- `font-sans` — paragraphs, labels, UI text
- `text-charcoal` (#3D3D3D)
- Example: `className="font-sans text-base leading-relaxed text-charcoal"`

### Data / Metadata — Monospace (JetBrains Mono)
- `font-mono` — specimen IDs, magnification values, coordinates
- `text-ash` (#6B6B6B)
- Example: `className="font-mono text-sm text-ash"`

---

## Component Styles

### Glassmorphism Card
```
backdrop-blur-md bg-white/30 border border-white/20 rounded-2xl shadow-lg
```

### Glassmorphism Button (Primary)
```
backdrop-blur-md bg-white/30 border border-white/20 rounded-full px-8 py-3
font-sans font-semibold text-ink hover:bg-white/50 transition-all duration-300
```

### Glassmorphism Navbar
```
fixed top-4 left-1/2 -translate-x-1/2 z-50
backdrop-blur-lg bg-white/20 border border-white/20 rounded-full
px-8 py-3 shadow-xl
```

### Input Fields (Lab Report Style)
```
bg-transparent border-0 border-b border-charcoal/40 rounded-none
focus:border-ink focus:outline-none focus:ring-0
font-sans text-charcoal pb-2
```

---

## Spacing & Layout

- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card gap: `gap-6` or `gap-8`
- Max content width: `max-w-7xl mx-auto`

---

## Do's
- Use `backdrop-blur-md` or `backdrop-blur-lg` on all glass elements
- Use `border-white/20` for glass borders
- Use Playfair Display for all headings
- Use paper grain texture on the `<body>` background
- Keep all imagery in grayscale or sepia filter

## Don'ts
- No color other than grayscale/monochrome
- No solid opaque backgrounds on cards (always use glass)
- No rounded corners smaller than `rounded-xl`
- No font sizes below `text-sm` for body content
- No low-contrast text (maintain AAA ratio)
