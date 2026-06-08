# Intertwined — Design System

## Aesthetic
"Humanistic Minimalist" — raw, organic, and quiet. Generous whitespace, natural textures, and a palette drawn from skin, soil, leaf, and sky.

## Color Palette
All hex values are registered in tailwind.config.js as named tokens.

| Token | Hex | Usage |
|---|---|---|
| `parchment` | #F5EFE6 | Page background, primary surface |
| `linen` | #EDE4D8 | Card backgrounds, subtle dividers |
| `bark` | #8B6F5E | Body text, captions |
| `soil` | #5C4033 | Headings, strong emphasis |
| `moss` | #4A6741 | Accent, nav active state |
| `fern` | #7A9E6E | Secondary accent, hover states |
| `sky` | #7BA7BC | Highlight, quote color |
| `mist` | #C8DDE8 | Soft backgrounds, overlays |
| `dusk` | #2C3E35 | Dark text on light, footer bg |

## Typography

### Fonts
- **Headings / Display**: `Playfair Display` — serif, editorial weight
- **Handwriting / Quotes**: `Caveat` — casual handwriting feel
- **Body / UI**: `Inter` — clean sans-serif

### Scale
- Display: `text-6xl` to `text-8xl`, `font-playfair`, `text-soil`
- Section heading: `text-4xl`, `font-playfair`, `text-soil`
- Quote: `text-2xl`, `font-caveat`, `text-sky`, italic
- Body: `text-base`, `font-inter`, `text-bark`, leading-relaxed
- Caption: `text-sm`, `font-inter`, `text-bark/70`, tracking-wide uppercase

## Spacing
- Section padding: `py-24 px-8` or `py-32 px-12`
- Card padding: `p-8`
- Gap between grid items: `gap-8` or `gap-12`

## Borders & Radius
- Cards: `rounded-none` (editorial, no rounding)
- Buttons: `rounded-full` (soft pill)
- Dividers: `border-linen`

## Shadows
- Avoid heavy shadows. Use `shadow-sm` at most.
- Prefer layered opacity and scale transforms for depth.

## Do's
- Use full-bleed images with `object-cover`
- Pair human and nature imagery side by side
- Use generous whitespace to let images breathe
- Animate with slow, organic easing (ease-in-out, 0.8s+)

## Don'ts
- No bright neon or saturated colors
- No heavy drop shadows or gradients
- No tight spacing or cluttered layouts
- No rounded image corners (keep editorial feel)
