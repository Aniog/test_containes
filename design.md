# Tectonic — Design System

## Visual Identity
Raw brutalist aesthetic. Concrete, steel, shadow. No color — only grey.

## Color Palette
All colors are shades of raw grey. No warm tones, no saturation.

| Name         | Hex       | Tailwind Custom |
|--------------|-----------|-----------------|
| void         | #111111   | `bg-void`       |
| obsidian     | #1A1A1A   | `bg-obsidian`   |
| deep         | #222222   | `bg-deep`       |
| shadow       | #333333   | `bg-shadow`     |
| iron         | #444444   | `bg-iron`       |
| slate        | #555555   | `bg-slate-raw`  |
| mid          | #777777   | `bg-mid`        |
| ash          | #999999   | `bg-ash`        |
| concrete     | #AAAAAA   | `bg-concrete`   |
| pale         | #BBBBBB   | `bg-pale`       |
| light        | #CCCCCC   | `bg-light-grey` |
| ghost        | #DDDDDD   | `bg-ghost`      |
| chalk        | #EEEEEE   | `bg-chalk`      |
| white-raw    | #F5F5F5   | `bg-white-raw`  |

## Typography
- **Primary Font**: Space Grotesk — geometric, technical, cold
- **Mono Font**: Space Mono — for coordinates, labels, technical data
- **Display**: All caps, wide letter-spacing for section titles
- **Body**: Small, sparse, tucked into corners

### Type Scale
- Display: `text-xs tracking-[0.3em] uppercase font-mono` — corner labels
- Section: `text-sm tracking-[0.2em] uppercase` — navigation, headings
- Body: `text-xs tracking-wide` — descriptions, metadata
- Coordinates: `font-mono text-[10px] tracking-widest` — technical data

## Layout
- Full-bleed images, no padding on hero sections
- Bento grid: asymmetric, heavy cells, no rounded corners
- Blueprint: overlapping layers, technical grid lines
- All borders: `border-[#333333]` or `border-[#444444]`

## Effects
- `mix-blend-mode: difference` on text over images — inverts against dark/light
- `mix-blend-mode: exclusion` for secondary text layers
- Deep shadows: `shadow-[0_0_60px_rgba(0,0,0,0.8)]`
- No border-radius anywhere — everything is sharp-edged

## Do's
- Use `mix-blend-mode: difference` with white text for auto-inversion
- Use `font-mono` for all technical/coordinate text
- Use `tracking-[0.3em]` or wider for display text
- Use full-bleed images with `object-cover`
- Use `overflow-hidden` on all image containers

## Don'ts
- No color other than grey shades
- No rounded corners (`rounded-none` everywhere)
- No drop shadows with color
- No gradients with color
- No animations faster than 600ms
