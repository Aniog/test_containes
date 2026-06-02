# PULP — Design System

## Brand
PULP is a high-end stationery and print studio. The visual identity is "Tactile Minimalism" — clean, quiet, and deeply physical.

## Color Palette
- `paper`: `#F5F5F7` — primary background, off-white like handmade paper
- `paper-dark`: `#E8E8EC` — neumorphic shadow dark side
- `paper-light`: `#FFFFFF` — neumorphic shadow light side
- `ink`: `#1A1A1A` — primary text, deep ink black
- `ink-muted`: `#6B6B6B` — secondary text, faded ink
- `ink-faint`: `#A8A8A8` — tertiary text, ghost ink
- `gold`: `#C9A84C` — foil accent, warm gold
- `gold-light`: `#E8C97A` — lighter foil highlight
- `copper`: `#B87333` — copper foil variant

## Typography
- Display: `Cormorant Garamond` — editorial serif for headlines
- Body: `Inter` — clean sans-serif for body text
- Mono: `JetBrains Mono` — for labels and metadata

### Scale
- `text-xs`: 0.75rem — metadata, labels
- `text-sm`: 0.875rem — captions, secondary
- `text-base`: 1rem — body
- `text-lg`: 1.125rem — lead text
- `text-xl` to `text-3xl`: section headings
- `text-4xl` to `text-7xl`: display headings (Cormorant)

## Neumorphic UI
Neumorphic elements appear pressed into the paper surface using dual box-shadows:
- Light source: top-left
- Shadow dark: `#D1D1D5` (bottom-right)
- Shadow light: `#FFFFFF` (top-left)

### Neumorphic Raised (default button/card):
```
box-shadow: 6px 6px 12px #D1D1D5, -6px -6px 12px #FFFFFF
```

### Neumorphic Pressed (active/clicked):
```
box-shadow: inset 4px 4px 8px #D1D1D5, inset -4px -4px 8px #FFFFFF
```

### Neumorphic Flat (subtle):
```
box-shadow: 3px 3px 6px #D1D1D5, -3px -3px 6px #FFFFFF
```

## Texture
A grainy SVG filter (`feTurbulence` + `feColorMatrix`) is applied to the body to simulate handmade paper grain. Opacity: 0.04–0.06.

## Spacing
- Section padding: `py-24 px-8 md:px-16 lg:px-24`
- Wide margins: `max-w-5xl mx-auto` for editorial content
- Grid gap: `gap-6` to `gap-10`

## Borders & Dividers
- Deckle edge: SVG wave/jagged path used as section dividers
- Thin rules: `border-t border-ink/10`
- No hard borders on cards — use shadow only

## Do's
- Use Cormorant Garamond for all display text
- Keep layouts airy with generous whitespace
- Use gold sparingly as an accent only
- Neumorphic shadows on interactive elements
- Grain texture always present

## Don'ts
- No pure white or pure black backgrounds
- No harsh drop shadows
- No bright saturated colors
- No tight, cramped layouts
- No rounded corners > `rounded-2xl`
