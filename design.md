# GameVault Design System

## Brand Identity
GameVault is a dark-themed gaming platform with vibrant accent colors. The design is bold, modern, and immersive — inspired by gaming UIs.

## Color Palette

### Primary Colors
- Background (darkest): `#0a0a0f` — page background
- Surface: `#12121a` — cards, panels
- Surface elevated: `#1a1a28` — hover states, elevated cards
- Border: `#2a2a3d` — subtle borders

### Accent Colors
- Primary accent (purple): `#7c3aed` — `bg-violet-700`
- Primary accent hover: `#6d28d9` — `bg-violet-800`
- Secondary accent (cyan): `#06b6d4` — `text-cyan-400`
- Hot/Sale (red-orange): `#ef4444` — `text-red-500`, `bg-red-500`
- Success (green): `#22c55e` — `text-green-500`
- Warning (amber): `#f59e0b` — `text-amber-400`

### Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` text
- Epic: `#2d2d2d` bg, `#ffffff` text
- Nintendo: `#e4000f` bg, `#ffffff` text
- PlayStation: `#003087` bg, `#00439c` text
- Xbox: `#107c10` bg, `#ffffff` text

### Text Colors
- Primary text: `text-white` / `text-gray-100`
- Secondary text: `text-gray-400`
- Muted text: `text-gray-500`
- Accent text: `text-violet-400`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Monospace: system monospace for prices/codes

### Scale
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Page heading: `text-3xl md:text-4xl font-bold`
- Section heading: `text-2xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base text-gray-300`
- Small/Caption: `text-sm text-gray-400`
- Tiny: `text-xs text-gray-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Page padding: `px-4 md:px-6 lg:px-8`
- Section vertical spacing: `py-12 md:py-16`
- Card gap: `gap-4 md:gap-6`
- Card padding: `p-4 md:p-6`

## Components

### Cards
- Background: `bg-[#12121a]`
- Border: `border border-[#2a2a3d]`
- Hover: `hover:border-violet-500/50 hover:bg-[#1a1a28]`
- Radius: `rounded-xl`
- Transition: `transition-all duration-200`

### Buttons
- Primary: `bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-lg px-4 py-2`
- Secondary: `bg-[#1a1a28] hover:bg-[#2a2a3d] text-white border border-[#2a2a3d] rounded-lg px-4 py-2`
- Danger: `bg-red-600 hover:bg-red-500 text-white rounded-lg px-4 py-2`
- Ghost: `hover:bg-[#1a1a28] text-gray-400 hover:text-white rounded-lg px-3 py-2`

### Badges
- Platform badge: colored by platform
- Discount badge: `bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- Genre badge: `bg-violet-900/50 text-violet-300 text-xs px-2 py-0.5 rounded-full`
- New badge: `bg-cyan-500/20 text-cyan-400 text-xs px-2 py-0.5 rounded-full`

### Navigation
- Navbar: `bg-[#0a0a0f]/95 backdrop-blur border-b border-[#2a2a3d]`
- Nav links: `text-gray-400 hover:text-white transition-colors`
- Active nav: `text-white font-medium`

### Inputs
- Background: `bg-[#1a1a28] border border-[#2a2a3d] text-white placeholder:text-gray-500`
- Focus: `focus:border-violet-500 focus:ring-1 focus:ring-violet-500`
- Radius: `rounded-lg`

## Do's
- Always use dark backgrounds for cards and surfaces
- Use violet as the primary CTA color
- Show platform colors consistently
- Use red/orange for discounts and sale prices
- Keep text contrast high — white or gray-100 on dark surfaces
- Use subtle borders to define card edges

## Don'ts
- Never use white backgrounds
- Never use light-mode color schemes
- Don't use low-contrast text (e.g. gray-600 on dark bg)
- Don't mix too many accent colors in one section
- Don't use default browser button styles
