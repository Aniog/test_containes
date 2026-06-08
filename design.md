# Slots Game Design System

## Theme
Dark casino aesthetic with neon gold/amber accents. Rich, immersive feel.

## Colors
- Background: deep dark `#0a0a0f` (near black)
- Machine body: dark navy `#12122a` with gradient
- Reel background: `#1a1a35`
- Gold accent: `#f5c518` (neon gold) — Tailwind: `yellow-400`
- Amber accent: `#f59e0b` — Tailwind: `amber-500`
- Win highlight: `#22c55e` — Tailwind: `green-500`
- Danger/loss: `#ef4444` — Tailwind: `red-500`
- Text primary: `#ffffff`
- Text muted: `#9ca3af` — Tailwind: `gray-400`
- Border glow: `rgba(245, 197, 24, 0.4)`

## Typography
- Font: Inter (system)
- Headings: bold, uppercase, letter-spacing wide
- Numbers/coins: monospace feel, large and prominent

## Spacing
- Reel container: rounded-2xl, p-4
- Buttons: px-8 py-4, rounded-full
- Gaps: gap-4 between reels

## Borders & Shadows
- Machine: border border-yellow-400/30, shadow-2xl
- Reels: border-2 border-yellow-400/20, inner shadow
- Win line: border-2 border-green-400 with glow

## Animations
- Reel spin: translateY cycling, ease-in-out
- Win: pulse + scale bounce
- Coin: count-up animation
- Button press: scale-95 active

## Do's
- Use neon glow effects via box-shadow
- Use gradient backgrounds for depth
- Large emoji symbols for reels (🍒🍋🍊🍇💎7️⃣⭐🔔)
- Responsive: stack vertically on mobile

## Don'ts
- No light backgrounds
- No flat/plain buttons
- No small text on dark backgrounds without sufficient contrast
