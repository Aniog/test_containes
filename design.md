# LumenPixel Design System

## Visual Identity
"High-Definition Pixel Art" — every element looks like it is composed of individual light-emitting diodes (LEDs) on a pitch-black substrate. Neon-emissive colors glow against absolute darkness.

## Color Palette
- Background: `#000000` (pitch black)
- Neon Cyan: `#00FFFF` — primary accent, borders, glow
- Neon Magenta: `#FF00FF` — secondary accent, highlights
- Neon Green: `#00FF41` — tertiary, data/code elements
- Neon Amber: `#FFB300` — warm accent, gallery highlights
- Neon Blue: `#0080FF` — cool accent, interactive states
- Dim Surface: `#0A0A0A` — card backgrounds
- Grid Line: `#111111` — subtle grid lines

## Typography
- Display / Headings: `'Press Start 2P'` (Google Fonts) — pixel-perfect retro
- Body / UI: `'Share Tech Mono'` (Google Fonts) — monospaced, technical
- All text must be clearly readable against dark backgrounds

## Borders & Glow
- Standard border: `1px solid #00FFFF` (neon cyan)
- Accent border: `1px solid #FF00FF`
- Glow effect: `box-shadow: 0 0 8px #00FFFF, 0 0 20px #00FFFF40`
- Hover glow: `box-shadow: 0 0 12px #00FFFF, 0 0 40px #00FFFF60`

## Grid System
- All components snap to an 8px base grid
- Cards and buttons appear as rectangular LED panels
- Use `image-rendering: pixelated` for pixel art assets

## CRT / Scanline Overlay
Applied globally via `::before` pseudo-element on `body`:
```css
background: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 2px,
  rgba(0, 0, 0, 0.15) 2px,
  rgba(0, 0, 0, 0.15) 4px
);
```

## Component Patterns
- Buttons: flat, bordered with neon glow, uppercase monospaced text, no border-radius (pixel-sharp corners)
- Cards: dark surface `#0A0A0A`, 1px neon border, inner glow on hover
- Navigation: horizontal LED strip, active item glows brighter
- Section dividers: 1px neon horizontal lines

## Do's
- Use `box-shadow` for LED glow effects
- Keep backgrounds pitch black or near-black
- Use uppercase for headings and labels
- Maintain 8px grid alignment

## Don'ts
- No rounded corners (use `border-radius: 0`)
- No white or light backgrounds
- No serif fonts
- No gradients except for glow/scanline effects
