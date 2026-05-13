# GameVault Design System

## Brand Identity
Dark gaming aesthetic with vibrant accent colors. Professional, modern, and immersive.

## Color Palette

### Background Colors
- Page background: `bg-gray-950` (#030712)
- Card background: `bg-gray-900` (#111827)
- Elevated card: `bg-gray-800` (#1f2937)
- Subtle surface: `bg-gray-900/60`

### Accent Colors (add to Tailwind config)
- Primary (electric blue): `#3b82f6` → `blue-500`
- Highlight (neon green): `#22c55e` → `green-500`
- Danger/Sale (red): `#ef4444` → `red-500`
- Warning/Gold: `#f59e0b` → `amber-500`
- Platform Steam: `#1b2838` with `#66c0f4`
- Platform Epic: `#2d2d2d` with `#ffffff`
- Platform Nintendo: `#e4000f`
- Platform PlayStation: `#003087` with `#00439c`
- Platform Xbox: `#107c10`

### Text Colors
- Primary text: `text-white`
- Secondary text: `text-gray-300`
- Muted text: `text-gray-400`
- Disabled text: `text-gray-600`

## Typography
- Font family: Inter (Google Fonts)
- Page title: `text-4xl md:text-5xl font-bold text-white`
- Section heading: `text-2xl md:text-3xl font-bold text-white`
- Card title: `text-lg font-semibold text-white`
- Body: `text-sm text-gray-300`
- Caption/label: `text-xs text-gray-400 uppercase tracking-wide`

## Spacing
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Radius
- Card border: `border border-gray-800`
- Card radius: `rounded-xl`
- Button radius: `rounded-lg`
- Badge radius: `rounded-full`

## Shadows
- Card hover: `hover:shadow-lg hover:shadow-blue-500/10`
- Glow effect: `shadow-blue-500/20`

## Components

### Cards
- Base: `bg-gray-900 border border-gray-800 rounded-xl overflow-hidden`
- Hover: `hover:border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200`

### Buttons
- Primary: `bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors`
- Secondary: `bg-gray-800 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors border border-gray-700`
- Danger/Buy: `bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors`

### Badges
- Platform badge: small pill with platform color
- Sale badge: `bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full`
- Category badge: `bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-full border border-gray-700`

### Navigation
- Navbar: `bg-gray-950/95 backdrop-blur border-b border-gray-800`
- Nav links: `text-gray-300 hover:text-white transition-colors`
- Active link: `text-blue-400 font-medium`

## Do's
- Always use dark backgrounds with light text
- Use blue-500 as the primary interactive color
- Use green for prices and buy actions
- Use red for discounts and sale badges
- Add subtle hover transitions on all interactive elements
- Use grid layouts for card collections (2-4 columns depending on screen)

## Don'ts
- Never use white backgrounds
- Never use dark text on dark backgrounds
- Don't use more than 3 accent colors per section
- Don't use font sizes smaller than text-xs
