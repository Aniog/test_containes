# MicroCosmos Design System
## "Vintage Scientific Minimalism" — Old Newspaper × Glassmorphism

---

## Color Palette (Strictly Monochrome)

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Parchment | `#F2F0E9` | `bg-parchment` | Page background |
| Parchment Dark | `#E8E5DB` | `bg-parchment-dark` | Section dividers, cards |
| Ink Black | `#1A1A1A` | `text-ink-black` | H1, H2, primary headings |
| Ink Charcoal | `#3A3A3A` | `text-ink-charcoal` | H3, H4, subheadings |
| Ink Mid | `#6B6B6B` | `text-ink-mid` | Body text, descriptions |
| Ink Light | `#9A9A9A` | `text-ink-light` | Captions, metadata, labels |
| Ink Faint | `#C8C5BC` | `text-ink-faint` | Dividers, borders, placeholders |

**Rule:** No color other than grayscale. No blues, greens, reds, or purples.

---

## Typography

### Headings — Playfair Display (Serif)
- H1: `font-serif text-5xl md:text-7xl font-bold text-ink-black tracking-tight`
- H2: `font-serif text-3xl md:text-4xl font-semibold text-ink-black`
- H3: `font-serif text-xl md:text-2xl font-medium text-ink-charcoal`
- Italic accent: `font-serif italic text-ink-mid`

### Body — Inter (Sans-Serif)
- Body: `font-sans text-base text-ink-mid leading-relaxed`
- Small/Caption: `font-sans text-sm text-ink-light`
- Label/UI: `font-sans text-xs font-semibold uppercase tracking-widest text-ink-light`

### Data/Code — JetBrains Mono
- Specimen ID, magnification: `font-mono text-sm text-ink-charcoal`

---

## Glassmorphism Components

### Glass Card (Light)
```
bg-white/25 backdrop-blur-md border border-white/20 rounded-2xl shadow-sm
```
Use on: hero title card, nav, tooltips, modals

### Glass Card (Dark — on dark backgrounds)
```
bg-ink-black/55 backdrop-blur-md border border-white/12 rounded-2xl
```
Use on: lightbox overlays, dark hero sections

### Glass Button (Primary)
```
bg-white/25 backdrop-blur-md border border-white/20 text-ink-black font-sans font-semibold
px-6 py-3 rounded-full hover:bg-white/40 transition-all duration-300
```

### Glass Button (Dark)
```
bg-ink-black/80 backdrop-blur-md border border-white/15 text-white font-sans font-semibold
px-6 py-3 rounded-full hover:bg-ink-black/95 transition-all duration-300
```

---

## Imagery Rules

- All images: `filter: grayscale(100%) contrast(1.1)` — class `img-bw`
- Unsplash URLs must include `&sat=-100` parameter
- Hero images: full-width, high-contrast micrographs
- Aspect ratios: 16:9 for heroes, 4:3 for cards, 1:1 for thumbnails

---

## Spacing & Layout

- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Max content width: `max-w-7xl mx-auto`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons/pills

---

## Do's and Don'ts

**Do:**
- Use Playfair Display for all headings
- Apply `img-bw` class to every image
- Use glass-card utility class for overlays
- Maintain generous whitespace
- Use thin borders (`border border-ink-faint/40`) for form inputs

**Don't:**
- Never use colored text or backgrounds
- Never use solid opaque buttons (always glass style)
- Never use rounded-sm or sharp corners on cards
- Never use font-bold on body text
- Never use drop shadows heavier than `shadow-md`
