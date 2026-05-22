# GameVault Design System

## Brand Identity
A dark-themed gaming portal with vibrant accent colors. The aesthetic is modern, immersive, and energetic — inspired by gaming UIs.

## Color Palette

### Base Colors (Dark Theme)
- Background primary: `#0f0f13` (near-black, deep space) → `bg-[#0f0f13]`
- Background secondary: `#16161d` (dark card surface) → `bg-[#16161d]`
- Background elevated: `#1e1e2a` (elevated card/panel) → `bg-[#1e1e2a]`
- Border subtle: `#2a2a3a` → `border-[#2a2a3a]`

### Accent Colors
- Primary accent (electric purple): `#7c3aed` → `bg-violet-700`, `text-violet-400`
- Secondary accent (cyan/teal): `#06b6d4` → `text-cyan-400`, `bg-cyan-500`
- Hot deals red: `#ef4444` → `text-red-500`, `bg-red-500`
- Success green: `#22c55e` → `text-green-400`
- Warning amber: `#f59e0b` → `text-amber-400`

### Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` text
- Epic: `#2d2d2d` bg, `#ffffff` text
- Nintendo: `#e4000f` bg, `#ffffff` text
- PlayStation: `#003087` bg, `#00439c` text, `#00b4f0` accent
- Xbox: `#107c10` bg, `#ffffff` text

### Text Colors
- Primary text: `text-white` / `text-gray-100`
- Secondary text: `text-gray-400`
- Muted text: `text-gray-500`
- Accent text: `text-violet-400`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Fallback: system-ui, sans-serif

### Scale
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Page heading: `text-3xl md:text-4xl font-bold`
- Section heading: `text-2xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base text-gray-300`
- Small/caption: `text-sm text-gray-400`
- Tiny: `text-xs text-gray-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Page horizontal padding: `px-4 md:px-6 lg:px-8`
- Section vertical padding: `py-12 md:py-16`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Components

### Cards
- Base: `bg-[#16161d] border border-[#2a2a3a] rounded-xl overflow-hidden`
- Hover: `hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200`
- Image aspect: `aspect-video` or `aspect-[3/4]`

### Buttons
- Primary: `bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Secondary: `bg-[#1e1e2a] hover:bg-[#2a2a3a] text-white border border-[#2a2a3a] px-6 py-2.5 rounded-lg transition-colors`
- Danger/Deal: `bg-red-600 hover:bg-red-500 text-white font-semibold px-4 py-2 rounded-lg`
- Ghost: `text-gray-400 hover:text-white transition-colors`

### Badges
- Platform badge: small pill with platform color, `text-xs font-bold px-2 py-0.5 rounded-full`
- Discount badge: `bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded`
- Category badge: `bg-violet-500/20 text-violet-300 text-xs px-2 py-0.5 rounded-full border border-violet-500/30`

### Navigation
- Navbar: `bg-[#0f0f13]/95 backdrop-blur-md border-b border-[#2a2a3a]` sticky top
- Nav links: `text-gray-400 hover:text-white transition-colors text-sm font-medium`
- Active nav: `text-white font-semibold`
- Logo: bold, gradient text `bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent`

### Inputs / Search
- `bg-[#1e1e2a] border border-[#2a2a3a] text-white placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-violet-500`

## Do's
- Use dark backgrounds throughout — never white backgrounds
- Use violet as the primary brand color for CTAs and highlights
- Use cyan as a secondary accent for prices, links, and highlights
- Use red for discount percentages and sale badges
- Add subtle glow effects on hover: `hover:shadow-violet-500/20`
- Use gradient text for hero headings and logo
- Use `backdrop-blur` for overlays and sticky nav
- Keep card images with consistent aspect ratios
- Use platform-specific colors for platform badges

## Don'ts
- Never use white or light backgrounds
- Never use low-contrast text (e.g., gray-600 on dark bg)
- Don't use more than 3 accent colors in one section
- Don't use rounded-full on large buttons (use rounded-lg)
- Don't use serif fonts
