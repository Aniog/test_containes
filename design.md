# GameHub Design System

## Brand Identity
A dark, immersive gaming portal with vibrant accent colors. The aesthetic is modern, high-contrast, and energetic — inspired by gaming UIs.

## Color Palette

### Base Colors (Dark Theme)
- Background: `bg-gray-950` (#030712) — deepest background
- Surface: `bg-gray-900` (#111827) — cards, panels
- Surface Elevated: `bg-gray-800` (#1f2937) — hover states, elevated cards
- Border: `border-gray-700` (#374151)
- Border Subtle: `border-gray-800` (#1f2937)

### Accent Colors
- Primary (Purple): `bg-purple-600` (#9333ea), hover `bg-purple-500`
- Secondary (Cyan): `bg-cyan-500` (#06b6d4), hover `bg-cyan-400`
- Danger/Sale: `bg-red-500` (#ef4444)
- Success/New: `bg-green-500` (#22c55e)
- Warning/Hot: `bg-orange-500` (#f97316)

### Platform Colors (named in tailwind config)
- Steam: `bg-steam` (#1b2838) with text `text-steam-light` (#c7d5e0)
- Epic: `bg-epic` (#2d2d2d) with text white
- Nintendo: `bg-nintendo` (#e4000f)
- PlayStation: `bg-playstation` (#003087)
- Xbox: `bg-xbox` (#107c10)

### Text Colors
- Primary: `text-white`
- Secondary: `text-gray-300`
- Muted: `text-gray-400`
- Disabled: `text-gray-600`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Monospace: system monospace for prices/codes

### Scale
- Hero Title: `text-5xl md:text-7xl font-black tracking-tight`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-lg font-semibold`
- Body: `text-base text-gray-300`
- Small/Meta: `text-sm text-gray-400`
- Tiny: `text-xs text-gray-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Grid gaps: `gap-4 md:gap-6`

## Components

### Cards
- Base: `bg-gray-900 border border-gray-800 rounded-xl overflow-hidden`
- Hover: `hover:border-purple-600/50 hover:bg-gray-800 transition-all duration-200`
- Shadow: `shadow-lg shadow-black/50`

### Buttons
- Primary: `bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Secondary: `bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 px-6 py-2.5 rounded-lg`
- Danger/Buy: `bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold`

### Badges
- Platform badge: small pill with platform color, `text-xs font-bold px-2 py-0.5 rounded-full`
- Sale badge: `bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- New badge: `bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded`

### Navigation
- Sticky top nav: `bg-gray-950/90 backdrop-blur-md border-b border-gray-800`
- Nav links: `text-gray-400 hover:text-white transition-colors`
- Active: `text-white font-semibold`

## Do's
- Always use dark backgrounds with light text
- Use purple/cyan gradient for primary CTAs
- Use platform-specific colors for platform badges
- Add subtle hover animations (scale, border glow)
- Use `rounded-xl` for cards, `rounded-lg` for buttons
- Show original + discounted price with strikethrough

## Don'ts
- Never use white/light backgrounds
- Never use low-contrast text (e.g. gray-600 on gray-900)
- Don't use more than 2 accent colors per component
- Don't use serif fonts
- Don't use flat/boring button styles for primary actions
