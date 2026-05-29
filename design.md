# Celestial Odyssey — Design System

## Visual Identity
- **Theme**: True Black — background is always `#000000`
- **Accent**: Nebula violet `#7c3aed` (violet-700) and cosmic cyan `#06b6d4` (cyan-500)
- **Highlight**: Stellar gold `#f59e0b` (amber-500) for key labels and data points
- **Muted text**: `#6b7280` (gray-500) for secondary info
- **Borders**: `rgba(255,255,255,0.08)` — ultra-thin 0.5px lines for data tables

## Typography
- **Display / Hero**: `'Noto Serif JP'`, serif — Japanese-inspired elegance
- **UI / Navigation**: `'Inter'`, sans-serif — clean, minimal
- **Data / Monospace**: `'JetBrains Mono'`, monospace — technical data sheets
- **Base size**: 16px, line-height 1.6

## Colors (Tailwind custom tokens)
```
cosmic-black: #000000
cosmic-void: #0a0a0f
cosmic-surface: #0f0f1a
cosmic-border: rgba(255,255,255,0.08)
nebula-violet: #7c3aed
nebula-violet-light: #a78bfa
cosmic-cyan: #06b6d4
stellar-gold: #f59e0b
star-white: #f8fafc
star-dim: #94a3b8
```

## Navigation
- Fixed, transparent, `backdrop-blur-sm`
- Height: 64px
- Logo: Noto Serif JP, letter-spacing wide
- Nav links: Inter, uppercase, tracking-widest, font-light
- Active state: thin bottom border in nebula-violet
- No background until scroll (then `bg-black/60 backdrop-blur`)

## Spacing & Layout
- Max content width: 1400px
- Section padding: `py-24 px-6 md:px-12`
- Grid gap: `gap-1` for gallery tiles (tight, editorial)

## Borders & Dividers
- Data table borders: `border border-white/[0.05]` — 0.5px equivalent via opacity
- Section dividers: `border-t border-white/10`

## Animations
- Ken Burns: slow scale from 1.0 → 1.12 over 20s, ease-in-out, alternate infinite
- Stagger: Framer Motion, children delay 0.08s apart, fade + translateY(20px) → 0
- Page transitions: fade in 0.4s ease

## Do's
- Always use `text-star-white` or `text-white` on dark surfaces
- Use `font-mono` for all data values
- Keep nav items sparse — max 4 links
- Use thin borders, never thick outlines

## Don'ts
- Never use white backgrounds
- Never use colored backgrounds other than black/void/surface
- Never use bold nav links
- Never use rounded corners on data table cells
