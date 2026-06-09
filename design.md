# Online Slots Game — Design System

## Visual Theme
- **Background**: Deep space purple-blue gradient (`#1a0a2e` → `#0d0620`)
- **Machine Frame**: Rich purple with golden/neon border glow (`#2d1b69` with `#f5a623` border)
- **Reel Area**: Dark navy with subtle inner glow (`#0f0a1e`)
- **Accent Colors**: Neon gold (`#f5a623`), Electric purple (`#7c3aed`), Hot pink (`#ec4899`)

## Typography
- **Font**: `'Orbitron', 'Exo 2', sans-serif` — futuristic/gaming feel
- **Display numbers**: Bold, large, neon-glow text
- **Labels**: Uppercase, letter-spaced

## Color Palette (Tailwind custom)
```
slot-bg: #1a0a2e
slot-frame: #2d1b69
slot-reel: #0f0a1e
slot-gold: #f5a623
slot-purple: #7c3aed
slot-pink: #ec4899
slot-cyan: #06b6d4
slot-green: #10b981
slot-red: #ef4444
```

## Component Styles
- **Buttons**: Rounded-full, gradient backgrounds, box-shadow glow on hover
- **Spin Button**: Large circle, pink-to-red gradient, pulsing glow animation
- **Bet Controls**: Dark pill shape with gold border
- **Win Display**: Gold text with glow, dark background pill
- **Payline Indicators**: Purple rounded squares on left/right sides

## Animations
- **Reel Spin**: CSS keyframe vertical scroll with blur effect
- **Win Flash**: Symbol highlight with golden glow pulse
- **Coin Rain**: Particle effect on big wins
- **Button Press**: Scale down + glow burst

## Symbols (with emoji + custom styling)
1. 🍋 Lemon — common, low value
2. 🔮 Crystal — uncommon, medium value  
3. 🪙 Coin — uncommon, medium value
4. 💎 Diamond — rare, high value
5. ❤️ Heart — uncommon, medium value
6. 💰 Money Bag — rare, high value
7. 🎩 Top Hat — rare, high value
8. 💣 Bomb — special/wild
9. 🫧 Pearl — uncommon, medium value
10. 🌟 Star — very rare, jackpot

## Layout
- Max width: 900px centered
- Header: coin balance + buy coins + settings
- Machine: 5 reels × 3 rows with payline numbers on sides
- Controls: win display + bet controls + spin button
- Responsive: scales down on mobile

## Do's
- Use neon glow box-shadows for interactive elements
- Animate symbols during spin with CSS transforms
- Show win lines with colored overlays
- Use gradient text for important numbers

## Don'ts
- No plain white backgrounds
- No flat/unstyled buttons
- No small touch targets on mobile
- No text that blends into dark background
