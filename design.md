# Design System

## Theme
Mobile game UI inspired by Monopoly GO — isometric village board game aesthetic.
Warm sandy tones, soft greens, sky blue backgrounds, golden accents.

## Colors
- Background sky: `bg-[#a8d8e8]` / `#a8d8e8`
- Ground/terrain: `bg-[#d4b896]` / `#d4b896`
- Grass green: `bg-[#8fad6a]` / `#8fad6a`
- Header card bg: `bg-white`
- Header border: `border-[#d4b896]`
- Multiplier badge: `bg-[#f5a623]` text-white
- Bottom button: `bg-[#d4b896]` border `border-[#c4a070]` text-[#5a3e1b]
- Glow ring: white with pink/red inner glow
- Building highlight ring: animated white dashed circle with pink glow

## Typography
- Font: Inter, system-ui
- Player name: `font-bold text-lg text-gray-800`
- Button text: `text-lg font-medium text-[#5a3e1b]`
- Badge text: `font-bold text-white text-xl`

## Borders & Radius
- Header card: `rounded-2xl border-2`
- Bottom button: `rounded-full border-2`
- Avatar: `rounded-full border-4 border-[#d4b896]`
- Multiplier badge: `rounded-xl px-3 py-1`

## Spacing
- Header padding: `px-4 py-3`
- Screen padding: `px-4`

## Animations
- Building ring: pulse + rotate animation (CSS keyframes)
- Glow effect: box-shadow with pink/white colors

## Do's
- Use warm earthy tones for ground and UI elements
- Use golden/amber for interactive badges and highlights
- Keep the isometric perspective feel with CSS transforms
- Animate the targeting rings on buildings

## Don'ts
- No dark mode
- No flat/minimal design — keep the game-like richness
- No sharp corners on UI cards
