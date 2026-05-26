# GameHub Design System

## Brand Identity
A dark-themed gaming hub with vibrant accent colors. The design should feel immersive, modern, and energetic — inspired by gaming culture.

## Color Palette

### Base Colors (Dark Theme)
- Background: `#0d0d14` (deep dark navy-black) → `bg-[#0d0d14]`
- Surface: `#13131f` (dark card surface) → `bg-[#13131f]`
- Surface Elevated: `#1a1a2e` (slightly lighter card) → `bg-[#1a1a2e]`
- Border: `#2a2a3e` → `border-[#2a2a3e]`

### Accent Colors
- Primary (Purple): `#7c3aed` → `bg-violet-700`, `text-violet-400`
- Secondary (Cyan): `#06b6d4` → `text-cyan-400`, `bg-cyan-500`
- Hot/Sale (Orange-Red): `#f97316` → `text-orange-400`
- Success (Green): `#22c55e` → `text-green-400`

### Platform Brand Colors
- Steam: `#1b2838` bg, `#66c0f4` accent
- Epic: `#2d2d2d` bg, `#ffffff` accent
- Nintendo: `#e4000f` accent
- PlayStation: `#003087` bg, `#00439c` accent
- Xbox: `#107c10` accent

### Text Colors
- Primary Text: `text-white`
- Secondary Text: `text-gray-300`
- Muted Text: `text-gray-500`
- Accent Text: `text-violet-400`

## Typography

### Font Family
- Primary: Inter (Google Fonts)
- Display: Inter with font-weight 800 for headings

### Scale
- Hero Title: `text-5xl md:text-7xl font-extrabold`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-lg font-semibold`
- Body: `text-sm text-gray-300`
- Caption: `text-xs text-gray-500`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Components

### Cards
- Background: `bg-[#1a1a2e]`
- Border: `border border-[#2a2a3e]`
- Radius: `rounded-xl`
- Hover: `hover:border-violet-500 hover:shadow-lg hover:shadow-violet-900/20 transition-all duration-200`

### Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-4 py-2 font-semibold`
- Secondary: `bg-[#1a1a2e] border border-[#2a2a3e] hover:border-violet-500 text-white rounded-lg px-4 py-2`
- Danger/Sale: `bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 py-2 font-semibold`

### Badges
- Platform badge: small pill with platform color
- Discount badge: `bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded`
- Category badge: `bg-violet-900/50 text-violet-300 text-xs px-2 py-0.5 rounded`

### Navigation
- Sticky top nav: `bg-[#0d0d14]/90 backdrop-blur-md border-b border-[#2a2a3e]`
- Logo: gradient text `bg-gradient-to-r from-violet-400 to-cyan-400`

## Do's
- Always use dark backgrounds for cards
- Use gradient accents for hero sections and CTAs
- Use platform brand colors for platform-specific badges
- Ensure all text has sufficient contrast on dark backgrounds
- Use `text-white` or `text-gray-300` for body text on dark surfaces

## Don'ts
- Never use light backgrounds (white/gray-100) for main surfaces
- Never use dark text on dark backgrounds
- Don't use more than 2 accent colors per component
- Don't use default browser button styles
