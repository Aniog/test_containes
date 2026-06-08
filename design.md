# Design System

## Theme
Bold geometric style inspired by vibrant flat design — large color blocks, concentric square texture, frosted glass UI panels.

## Colors
- Background base: `#5555cc` (blue-purple)
- Pattern overlay: concentric squares, slightly darker/lighter than base
- Purple block: `#6600ff`
- Cyan block: `#00ccff`
- Orange block: `#ff5500`
- Frosted panel: `rgba(180,180,220,0.35)` with backdrop blur
- Text primary: `#111111`
- Text on dark: `#ffffff`
- Multiplier badge: `#ff5500` (orange)
- Bottom button: `#ff5500` or `#6600ff`

## Typography
- Font: Inter, system-ui
- Player name: `font-bold text-2xl text-gray-900`
- Button text: `font-bold text-white text-xl tracking-wide`
- Badge text: `font-extrabold text-white text-2xl`

## Borders & Radius
- Header panel: frosted glass, `rounded-2xl`
- Bottom button: `rounded-full`
- Building cards: `rounded-xl` with bold color borders

## Pattern
- Repeating concentric squares SVG pattern on blue-purple background
- Each cell ~36px, nested squares with subtle opacity difference

## Geometric Shapes
- Top-left: large purple diagonal triangle/block
- Bottom-left: large cyan curved/diagonal block
- Right side: tall orange vertical block
- Shapes use CSS clip-path or absolute positioned divs

## Animations
- Building ring: rotate + pulse (same as before, but white/bright)
- Shapes: static, no animation needed

## Do's
- Use bold, saturated colors
- Large geometric shapes as background decoration
- Frosted glass for UI panels
- High contrast text

## Don'ts
- No earthy/sandy tones
- No soft gradients
- No rounded organic shapes for backgrounds
