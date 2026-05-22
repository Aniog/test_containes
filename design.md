# GameVault Design System

## Brand Identity
Dark, immersive gaming aesthetic. Deep navy/dark backgrounds with vibrant accent colors.
The site feels premium, modern, and energetic — like a high-end gaming hub.

## Color Palette

### Background Colors
- Primary background: `#0d0f14` (near-black, deep space) → `bg-[#0d0f14]`
- Secondary background: `#13161e` (dark navy) → `bg-[#13161e]`
- Card background: `#1a1d27` (elevated dark) → `bg-[#1a1d27]`
- Elevated card: `#1f2235` → `bg-[#1f2235]`
- Border: `#2a2d3e` → `border-[#2a2d3e]`

### Accent Colors
- Primary accent (electric blue): `#4f8ef7` → `text-[#4f8ef7]` / `bg-[#4f8ef7]`
- Secondary accent (vivid purple): `#8b5cf6` → `text-purple-500`
- Success/discount green: `#22c55e` → `text-green-500`
- Warning/sale orange: `#f97316` → `text-orange-500`
- Danger/hot red: `#ef4444` → `text-red-500`

### Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` text → `bg-[#1b2838] text-[#66c0f4]`
- Epic: `#2d2d2d` bg, `#ffffff` text → `bg-[#2d2d2d] text-white`
- Nintendo: `#e4000f` bg, `#ffffff` text → `bg-red-600 text-white`
- PlayStation: `#003087` bg, `#ffffff` text → `bg-blue-900 text-white`
- Xbox: `#107c10` bg, `#ffffff` text → `bg-green-700 text-white`

### Text Colors
- Primary text: `#f1f5f9` → `text-slate-100`
- Secondary text: `#94a3b8` → `text-slate-400`
- Muted text: `#64748b` → `text-slate-500`
- Heading text: `#ffffff` → `text-white`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Monospace: system monospace for prices/codes

### Scale
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Page heading: `text-3xl md:text-4xl font-bold`
- Section heading: `text-2xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-sm md:text-base`
- Caption/label: `text-xs text-slate-400`

## Spacing & Layout

### Container
- Max width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`

### Grid
- Store grid: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`
- Blog grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Discount grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`

### Section Spacing
- Section padding: `py-12 md:py-16`
- Card padding: `p-4 md:p-6`

## Components

### Cards
- Base: `bg-[#1a1d27] border border-[#2a2d3e] rounded-xl overflow-hidden`
- Hover: `hover:border-[#4f8ef7] hover:shadow-lg hover:shadow-[#4f8ef7]/10 transition-all duration-200`
- Image aspect: `aspect-[3/4]` for game covers, `aspect-video` for articles

### Buttons
- Primary: `bg-[#4f8ef7] hover:bg-[#3b7de8] text-white font-semibold px-6 py-2.5 rounded-lg`
- Secondary: `bg-[#1f2235] hover:bg-[#2a2d3e] text-slate-100 border border-[#2a2d3e] px-6 py-2.5 rounded-lg`
- Danger/Sale: `bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg`

### Badges
- Platform badge: small pill with platform color
- Genre badge: `bg-[#1f2235] text-slate-300 text-xs px-2 py-0.5 rounded-full border border-[#2a2d3e]`
- Sale badge: `bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- New badge: `bg-[#4f8ef7] text-white text-xs font-bold px-2 py-0.5 rounded`

### Navigation
- Sticky top nav: `bg-[#0d0f14]/95 backdrop-blur border-b border-[#2a2d3e]`
- Nav links: `text-slate-400 hover:text-white transition-colors`
- Active nav: `text-white font-medium`

## Do's
- Use dark backgrounds consistently; never use white/light backgrounds
- Always pair dark backgrounds with light text (slate-100 or white)
- Use accent blue (#4f8ef7) for primary CTAs and interactive elements
- Use platform-specific colors for platform badges
- Add subtle glow effects on hover: `hover:shadow-[#4f8ef7]/20`
- Use `backdrop-blur` for overlays and sticky elements
- Animate transitions with `transition-all duration-200`

## Don'ts
- Never use white or very light backgrounds
- Never use dark text on dark backgrounds
- Don't use more than 2 accent colors per component
- Don't use generic gray for important UI elements — use the defined palette
- Don't use `text-gray-*` — use `text-slate-*` instead
