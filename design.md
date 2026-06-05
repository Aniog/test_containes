# Word Game Design System

## Theme
Warm, nature-inspired word puzzle game. Wooden textures, earthy tones, forest/outdoor background.

## Colors
- Background: sky blue gradient `from-sky-400 to-blue-600` (outdoor scene)
- Header bar: warm amber/orange `bg-amber-600` with wood texture feel
- Grid cells (filled): warm cream/ivory `bg-amber-50` with dark border
- Grid cells (empty/locked): dark `bg-gray-800`
- Letter wheel: deep brown/mahogany `bg-amber-800` with gold border
- Letter buttons on wheel: white text on brown
- Correct word flash: green highlight
- Wrong word flash: red shake
- Buttons (Shuffle, Hint): rounded, brown `bg-amber-700` with cream text
- Score/coins: gold `text-yellow-400`
- Title text: white with dark shadow, bold uppercase

## Typography
- Font: 'Fredoka One' or 'Nunito' (rounded, playful) from Google Fonts
- Game title: 80px+ bold uppercase
- Grid letters: 24-32px bold, dark `text-gray-800`
- Wheel letters: 36-48px bold white
- Button labels: 14px bold

## Borders & Shadows
- Grid cells: `border-2 border-amber-200` with subtle shadow
- Wheel: thick gold border `border-4 border-yellow-500` with glow shadow
- Cards/panels: `rounded-2xl shadow-xl`
- Buttons: `rounded-full shadow-lg`

## Spacing
- Grid cell size: 52px × 52px on desktop, 44px × 44px on mobile
- Grid gap: 2px
- Wheel diameter: 240px on desktop, 200px on mobile
- Section padding: 16-24px

## Do's
- Use warm amber/brown palette throughout
- Rounded corners on all interactive elements
- Subtle animations on word completion (bounce, glow)
- Clear visual feedback on letter selection (highlight path)
- Show selected letters as a word preview above the wheel

## Don'ts
- No flat/cold color schemes
- No sharp corners on game elements
- No invisible text (always ensure contrast)
- No tiny touch targets (min 44px)
