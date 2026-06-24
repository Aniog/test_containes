# MicroCosmos — Visual Design System

## Theme: Vintage Scientific Minimalism × Apple Glassmorphism
A monochrome aesthetic inspired by 20th century botanical/microscopy journals,
fused with a modern frosted-glass UI vocabulary.

## Color Palette (Strict Monochrome)
- `parchment` — `#F2F0E9` — primary background (old paper / bone)
- `parchment-dim` — `#E8E5DC` — recessed paper, card backs
- `ink` — `#1A1A1A` — primary text, headers
- `charcoal` — `#3A3A3A` — body text
- `graphite` — `#5C5C5C` — secondary / metadata text
- `pencil` — `#8A8783` — muted UI, borders
- `bone-line` — `#C8C3B6` — hairline rules / dividers
- `frost-white` — `rgba(255,255,255,0.30)` — glass fill
- `frost-edge` — `rgba(255,255,255,0.20)` — glass border

Tailwind tokens registered in `index.css` via `@theme`:
`bg-parchment`, `bg-parchment-dim`, `text-ink`, `text-charcoal`, `text-graphite`,
`text-pencil`, `border-bone`.

## Typography
- Headings: `font-serif` — "Cormorant Garamond" — refined, journal-like
- Body / UI: `font-sans` — "Inter" — crisp, technical
- Monospace data labels: `font-mono` — "JetBrains Mono"
- Tracking: headings `tracking-tight`; small caps labels `tracking-[0.25em] uppercase`

## Glassmorphism Recipe (Apple Glass)
Always layer these utilities together on glass surfaces:
```
bg-white/30 backdrop-blur-md border border-white/20
shadow-[0_8px_32px_rgba(26,26,26,0.08)]
```
For darker overlays (lightbox): `bg-ink/70 backdrop-blur-2xl`.

## Imagery Rules
- All micrographs are grayscale or sepia. Apply `grayscale contrast-110` filter.
- Use 1px hairline frame: `ring-1 ring-bone-line`.
- Captions in small caps mono labels.

## Spacing & Layout
- Generous whitespace; section padding `py-24 md:py-32`.
- Max content width `max-w-6xl mx-auto`.
- Hairline dividers `border-t border-bone-line` instead of heavy rules.

## Buttons
Primary glass button:
```
inline-flex items-center gap-2 px-7 py-3 rounded-full
bg-white/40 backdrop-blur-md border border-white/30
text-ink hover:bg-white/60 transition
```

## Don'ts
- ❌ No saturated colors (no blues, greens, reds for accents).
- ❌ No drop shadows heavier than 32px blur.
- ❌ No rounded-full corners except on pills/CTAs.
- ❌ Never put white text on parchment — always `text-ink` / `text-charcoal`.
