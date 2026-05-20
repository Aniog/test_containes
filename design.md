# GameVault Design System

## Brand Identity
A dark-themed gaming site with vibrant accent colors. The aesthetic is modern, immersive, and energetic — inspired by gaming UIs.

## Color Palette
- **Background primary**: `#0f0f13` (near-black, `bg-[#0f0f13]`)
- **Background secondary**: `#1a1a24` (dark card bg, `bg-[#1a1a24]`)
- **Background tertiary**: `#22222f` (elevated card, `bg-[#22222f]`)
- **Accent primary**: `#7c3aed` (violet, `text-violet-600`, `bg-violet-600`)
- **Accent secondary**: `#06b6d4` (cyan, `text-cyan-400`, `bg-cyan-400`)
- **Accent danger/sale**: `#ef4444` (red for discounts, `text-red-500`)
- **Accent success**: `#22c55e` (green for in-stock, `text-green-500`)
- **Text primary**: `#f1f5f9` (`text-slate-100`)
- **Text secondary**: `#94a3b8` (`text-slate-400`)
- **Text muted**: `#64748b` (`text-slate-500`)
- **Border**: `#2d2d3d` (`border-[#2d2d3d]`)

## Platform Colors
- Steam: `#1b2838` bg, `#66c0f4` accent
- Epic: `#2d2d2d` bg, `#ffffff` accent
- Nintendo: `#e4000f` accent
- PlayStation: `#003087` bg, `#00439c` accent
- Xbox: `#107c10` accent

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, `tracking-tight`
- **Body**: `font-normal`, `leading-relaxed`
- **Labels/Badges**: `font-semibold`, `text-xs` or `text-sm`, `uppercase tracking-wider`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-12` or `py-16`
- Card gap: `gap-6`
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons, `rounded-full` for badges/tags

## Components

### Cards
- Background: `bg-[#1a1a24]`
- Border: `border border-[#2d2d3d]`
- Hover: `hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300`
- Rounded: `rounded-xl`

### Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Secondary: `bg-[#22222f] hover:bg-[#2d2d3d] text-slate-100 border border-[#2d2d3d] font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Danger/CTA: `bg-gradient-to-r from-violet-600 to-cyan-500 hover:opacity-90 text-white font-bold px-8 py-3 rounded-lg transition-opacity`

### Badges
- Platform badge: small pill with platform color
- Discount badge: `bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full`
- Genre badge: `bg-violet-600/20 text-violet-400 text-xs font-semibold px-2.5 py-1 rounded-full`

### Navigation
- Background: `bg-[#0f0f13]/95 backdrop-blur-md border-b border-[#2d2d3d]`
- Sticky top nav
- Logo: gradient text `bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent`

## Do's
- Use dark backgrounds throughout
- Use violet as the primary accent for interactive elements
- Use cyan as a secondary highlight
- Use red for discounts and sale prices
- Keep text contrast high — always use `text-slate-100` or `text-slate-400` on dark backgrounds
- Use subtle gradients on hero sections
- Add hover transitions on all interactive cards and buttons

## Don'ts
- Never use white backgrounds
- Never use light-mode color schemes
- Don't use low-contrast text (e.g. gray on dark gray)
- Don't use more than 3 accent colors per section
- No magic hex values in JSX — use Tailwind config named colors or the palette above
