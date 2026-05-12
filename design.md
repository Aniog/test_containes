# Design System — Purple Theme

## Color Palette

### Primary Purple
- `purple-950` (#3b0764) — Darkest background, deep sections
- `purple-900` (#4a044e) — Dark backgrounds, footer
- `purple-800` (#6b21a8) — Section backgrounds
- `purple-700` (#7e22ce) — Hover states, accents
- `purple-600` (#9333ea) — Primary brand color, buttons
- `purple-500` (#a855f7) — Highlights, icons
- `purple-400` (#c084fc) — Light accents
- `purple-300` (#d8b4fe) — Subtle text on dark bg
- `purple-200` (#e9d5ff) — Very light accents
- `purple-100` (#f3e8ff) — Light backgrounds
- `purple-50`  (#faf5ff) — Near-white backgrounds

### Violet Accents
- `violet-600` (#7c3aed) — Secondary accent
- `violet-400` (#a78bfa) — Glow effects

### Neutral
- White `#ffffff` — Primary text on dark backgrounds
- `gray-100` — Light text on dark backgrounds
- `gray-400` — Muted text

## Typography

### Font Family
- Primary: `Inter` (Google Fonts)
- Fallback: `system-ui, sans-serif`

### Scale
- Hero heading: `text-5xl md:text-7xl font-extrabold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal`
- Small/caption: `text-sm text-purple-300`

## Spacing
- Section padding: `py-20 px-6`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Inputs: `rounded-xl`
- Border color on dark: `border border-purple-700/40`

## Shadows & Glow
- Card glow: `shadow-lg shadow-purple-900/50`
- Button glow: `shadow-md shadow-purple-600/50`
- Hero glow: `drop-shadow` with purple tones

## Gradients
- Hero background: `from-purple-950 via-purple-900 to-violet-900`
- Button: `from-purple-600 to-violet-600`
- Card accent: `from-purple-800/50 to-violet-800/30`
- Text gradient: `from-purple-300 to-violet-300 bg-clip-text text-transparent`

## Components

### Primary Button
```
bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500
text-white font-semibold rounded-full px-8 py-3
shadow-md shadow-purple-600/40 transition-all duration-200
```

### Secondary Button (Outline)
```
border border-purple-500 text-purple-300 hover:bg-purple-800/40
rounded-full px-8 py-3 transition-all duration-200
```

### Card
```
bg-purple-900/40 border border-purple-700/40 rounded-2xl p-6
backdrop-blur-sm shadow-lg shadow-purple-950/50
```

### Navbar
```
bg-purple-950/80 backdrop-blur-md border-b border-purple-800/40
```

## Do's
- Use white or `purple-100` for primary text on dark backgrounds
- Use gradient text for hero headings
- Use `backdrop-blur` for glass-morphism effects on cards/nav
- Maintain high contrast: white text on purple-800+ backgrounds
- Use subtle purple glows on interactive elements

## Don'ts
- Don't use dark text on dark purple backgrounds
- Don't use `purple-600` text on `purple-800` backgrounds (low contrast)
- Don't use pure black backgrounds — use deep purple instead
- Don't mix too many gradient directions in one section
