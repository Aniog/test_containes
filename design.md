# MicroCosmos Design System
## Vintage Scientific Minimalism × Glassmorphism

A fusion of 20th-century botanical journal aesthetics with modern frosted glass UI.

---

## 1. Palette (Strict Monochrome)

| Token         | Hex       | Tailwind class            | Usage                                |
| ------------- | --------- | ------------------------- | ------------------------------------ |
| parchment     | `#F2F0E9` | `bg-parchment`            | Primary page background              |
| parchment-2   | `#E8E5DB` | `bg-parchment-2`          | Secondary surfaces, dividers         |
| ink           | `#1A1A1A` | `text-ink` / `bg-ink`     | Headings, primary text, dark accents |
| charcoal      | `#3A3A38` | `text-charcoal`           | Body copy                            |
| graphite      | `#6B6A66` | `text-graphite`           | Captions, metadata                   |
| ash           | `#A9A69D` | `text-ash` / `border-ash` | Hairlines, disabled                  |
| bone          | `#FAF8F2` | `bg-bone`                 | Card surfaces                        |

Do: Use stark contrast (ink on parchment) for headings.
Don't: Introduce any color hue beyond grayscale / sepia.

## 2. Typography

- Headings: `font-serif` → Cormorant Garamond / EB Garamond. Tracking tight on display.
- Body: `font-sans` → Inter. 400/500 weight.
- Mono / Data: `font-mono` → JetBrains Mono for specimen IDs, magnifications.
- Scale: display `text-6xl/7xl`, h2 `text-4xl`, body `text-base`, caption `text-xs uppercase tracking-[0.25em]`.

Do: All-caps tracked-out labels for section eyebrows ("PLATE I", "FIG. 02").
Don't: Use decorative or playful fonts.

## 3. Glassmorphism Surfaces

Standard frosted card:
```
bg-white/30 backdrop-blur-md border border-white/40
shadow-[0_8px_32px_rgba(26,26,26,0.08)] rounded-2xl
```

Dark glass (over light micrographs):
```
bg-ink/20 backdrop-blur-lg border border-white/15 text-bone
```

Do: Always pair glass with a textured background, otherwise blur is invisible.
Don't: Stack glass on glass without contrast.

## 4. Borders & Hairlines

- Primary divider: `border-t border-ink/20`
- Decorative double-rule: top `border-t-2 border-ink` + 4px gap + `border-t border-ink/40`.
- Frame around plate images: `ring-1 ring-ink/15` + `p-2 bg-bone`.

## 5. Imagery Rules

- All micrographs: pure B&W or sepia. Apply `grayscale contrast-110` if needed.
- Captions placed below the image with: `Plate N° · Specimen · Magnification`.

## 6. Motion

- Use Framer Motion. Easing: `[0.22, 1, 0.36, 1]`. Durations 0.4–0.7s.
- Lightbox: scale + fade. Hover on cards: subtle 1.01 lift + shadow.

## 7. Spacing & Layout

- Page max width: `max-w-7xl mx-auto px-6 lg:px-10`.
- Section vertical rhythm: `py-24 lg:py-32`.
- Grid gutters: `gap-8 lg:gap-12`.

## 8. Accessibility

- Maintain AAA contrast: ink (#1A1A1A) on parchment (#F2F0E9) ≈ 14.6:1.
- Focus rings: `focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-parchment`.
