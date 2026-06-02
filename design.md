# Design System — Snake Game

## Theme
Dark neon cyberpunk aesthetic. Deep dark backgrounds with vibrant neon accents.

## Colors
- Background: `#0a0a0f` (near-black with blue tint)
- Surface: `#12121a` (dark card background)
- Border: `#1e1e2e` (subtle border)
- Primary (neon green): `#39ff14` — snake body, accents
- Secondary (neon cyan): `#00f5ff` — UI highlights
- Danger (neon red): `#ff2d55` — game over, food
- Warning (neon yellow): `#ffd60a` — score, special items
- Text primary: `#e0e0ff`
- Text muted: `#6b6b8a`

## Typography
- Font: Inter (system fallback)
- Headings: `font-bold tracking-wider uppercase`
- Score display: `font-mono text-4xl font-bold`
- Labels: `text-sm font-medium tracking-widest uppercase`

## Borders & Shadows
- Game board border: `border-2 border-[#39ff14]/30` with neon glow shadow
- Cards: `rounded-xl border border-[#1e1e2e]`
- Neon glow: `shadow-[0_0_20px_rgba(57,255,20,0.3)]`
- Button hover glow: `shadow-[0_0_15px_rgba(0,245,255,0.5)]`

## Spacing
- Game board: fixed grid, 20x20 cells
- Cell size: responsive (min 16px, max 24px)
- Container padding: `p-4 md:p-8`

## Animations
- Snake movement: smooth CSS transitions
- Food pulse: `animate-pulse`
- Score pop: scale animation on score change
- Game over: fade-in overlay

## Do's
- Use neon glow effects on interactive elements
- Keep the game board centered and prominent
- Show clear score and high score
- Provide visual feedback for all interactions

## Don'ts
- No light backgrounds
- No flat/boring button styles
- No small touch targets on mobile
