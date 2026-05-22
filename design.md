# Design System — Bitcoin Geek Site

## Visual Style
极客风 (Geek/Hacker aesthetic): dark backgrounds, neon accents, monospace fonts, terminal-like elements, grid/circuit patterns, glowing effects.

## Color Palette
- Background primary: `#0a0a0f` (near-black with blue tint) → `bg-btc-bg`
- Background secondary: `#0f0f1a` → `bg-btc-surface`
- Background card: `#13131f` → `bg-btc-card`
- Border: `#1e1e3a` → `border-btc-border`
- Accent orange (Bitcoin): `#f7931a` → `text-btc-orange`, `bg-btc-orange`
- Accent green (neon): `#00ff88` → `text-btc-green`
- Accent cyan (neon): `#00d4ff` → `text-btc-cyan`
- Accent purple: `#8b5cf6` → `text-btc-purple`
- Text primary: `#e2e8f0` → `text-btc-text`
- Text muted: `#64748b` → `text-btc-muted`
- Text dim: `#94a3b8` → `text-btc-dim`

## Typography
- Heading font: `'Share Tech Mono'` (monospace, geek feel)
- Body font: `'Inter'` (clean, readable)
- Code/terminal: `'Fira Code'` (monospace)
- Heading sizes: text-4xl to text-7xl, font-bold
- Body: text-base to text-lg
- Labels/tags: text-xs to text-sm, uppercase, tracking-widest

## Borders & Shadows
- Cards: `border border-btc-border rounded-lg`
- Glow orange: `shadow-[0_0_20px_rgba(247,147,26,0.3)]`
- Glow green: `shadow-[0_0_20px_rgba(0,255,136,0.3)]`
- Glow cyan: `shadow-[0_0_20px_rgba(0,212,255,0.3)]`

## Spacing
- Section padding: `py-20 px-4` or `py-24 px-6`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Component Patterns
- Buttons: `bg-btc-orange text-black font-bold px-6 py-3 rounded hover:shadow-[0_0_20px_rgba(247,147,26,0.5)] transition-all`
- Tags/badges: `text-btc-green border border-btc-green text-xs px-2 py-1 rounded font-mono uppercase tracking-widest`
- Section labels: `text-btc-cyan font-mono text-sm uppercase tracking-widest`
- Dividers: `border-btc-border`

## Do's
- Use neon glow effects on key elements
- Use monospace font for numbers, code, and labels
- Use grid/dot background patterns for sections
- Use terminal-style decorations (>, $, #, //)
- Animate numbers and highlights subtly

## Don'ts
- No white backgrounds
- No light color schemes
- No rounded-full buttons (prefer rounded or rounded-lg)
- No serif fonts
- No pastel colors
