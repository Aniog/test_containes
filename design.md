# 0701 Game Site — Design System

## Brand Identity
Dark gaming aesthetic with vibrant accent colors. Feels premium, modern, and immersive.

## Color Palette
- **Background primary**: `#0d0f14` (near-black, deep space)
- **Background secondary**: `#13161e` (dark navy)
- **Background card**: `#1a1d27` (dark card surface)
- **Background elevated**: `#21253a` (slightly lighter card)
- **Accent primary**: `#7c3aed` (vivid purple — brand color)
- **Accent secondary**: `#06b6d4` (cyan — highlights)
- **Accent danger**: `#ef4444` (red — sale/discount badges)
- **Accent success**: `#22c55e` (green — in-stock, positive)
- **Accent warning**: `#f59e0b` (amber — ratings, caution)
- **Text primary**: `#f1f5f9` (near-white)
- **Text secondary**: `#94a3b8` (muted slate)
- **Text muted**: `#475569` (very muted)
- **Border**: `#2d3148` (subtle border)

In Tailwind config, these are registered as named colors:
- `game-bg` → `#0d0f14`
- `game-surface` → `#13161e`
- `game-card` → `#1a1d27`
- `game-elevated` → `#21253a`
- `game-purple` → `#7c3aed`
- `game-cyan` → `#06b6d4`
- `game-red` → `#ef4444`
- `game-green` → `#22c55e`
- `game-amber` → `#f59e0b`
- `game-text` → `#f1f5f9`
- `game-muted` → `#94a3b8`
- `game-dim` → `#475569`
- `game-border` → `#2d3148`

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, `tracking-tight`
- **Body**: `font-normal`, `leading-relaxed`
- **Labels/badges**: `font-semibold`, `text-xs` or `text-sm`, `uppercase tracking-wider`

## Spacing & Layout
- Section padding: `py-16 px-4` on mobile, `py-20 px-8` on desktop
- Max content width: `max-w-7xl mx-auto`
- Card gap: `gap-6`
- Card padding: `p-5` or `p-6`

## Borders & Radius
- Cards: `rounded-xl` with `border border-game-border`
- Buttons: `rounded-lg`
- Badges: `rounded-full` or `rounded-md`
- Images: `rounded-lg` or `rounded-xl`

## Shadows & Effects
- Cards: `shadow-lg shadow-black/40`
- Hover: `hover:border-game-purple/60 transition-all duration-200`
- Glow effects on featured items: `shadow-game-purple/30`

## Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` accent
- Epic: `#2d2d2d` bg, `#ffffff` accent
- Nintendo: `#e4000f` accent
- PlayStation: `#003087` bg, `#00439c` accent
- Xbox: `#107c10` accent

## Component Patterns

### Section Headers
```jsx
<h2 className="text-3xl font-bold text-game-text tracking-tight">Section Title</h2>
<p className="text-game-muted mt-2">Subtitle text</p>
```

### Cards
```jsx
<div className="bg-game-card border border-game-border rounded-xl p-5 hover:border-game-purple/60 transition-all duration-200 shadow-lg shadow-black/40">
```

### Primary Button
```jsx
<button className="bg-game-purple hover:bg-purple-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200">
```

### Secondary Button
```jsx
<button className="border border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60 px-5 py-2.5 rounded-lg transition-all duration-200">
```

### Discount Badge
```jsx
<span className="bg-game-red text-white text-xs font-bold px-2 py-0.5 rounded-md">-60%</span>
```

## Do's
- Always use dark backgrounds with light text
- Use purple as the primary CTA color
- Use cyan for secondary highlights and links
- Add subtle hover effects on all interactive elements
- Use platform-specific colors for platform badges
- Keep cards consistent in padding and border style

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Don't use more than 2 accent colors per component
- Don't use rounded-full on large cards
