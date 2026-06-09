# Design System — AI Landing Page

## Visual Identity
A dark, futuristic aesthetic that conveys intelligence, depth, and innovation.

## Color Palette

### Backgrounds
- Page background: `#050510` (near-black deep navy)
- Card/surface: `#0d0d1f` (dark navy)
- Card border: `rgba(99,102,241,0.2)` (subtle indigo glow)
- Section alternate: `#080818`

### Accent Colors (add to Tailwind config as named tokens)
- `ai-blue`: `#3b82f6` — primary CTA, highlights
- `ai-purple`: `#8b5cf6` — secondary accent, gradients
- `ai-cyan`: `#06b6d4` — tertiary accent, icons
- `ai-indigo`: `#6366f1` — borders, subtle glows

### Text
- Primary: `#f1f5f9` (near-white)
- Secondary: `#94a3b8` (slate-400)
- Muted: `#475569` (slate-600)
- Gradient heading: from `#3b82f6` via `#8b5cf6` to `#06b6d4`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-extrabold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-indigo-500/20`
- Card hover border: `border-indigo-500/50`
- Glow shadow: `shadow-[0_0_30px_rgba(99,102,241,0.15)]`
- Hover glow: `shadow-[0_0_40px_rgba(99,102,241,0.3)]`

## Gradients
- Hero gradient text: `bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent`
- Button: `bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500`
- Card accent bar: `bg-gradient-to-r from-blue-500 to-purple-500`
- Section divider: `bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent`

## Components

### Cards
- Rounded: `rounded-2xl`
- Background: `bg-[#0d0d1f]`
- Border: `border border-indigo-500/20`
- Hover: scale slightly, border brightens, glow increases
- Transition: `transition-all duration-300`

### Buttons
- Primary: gradient blue-to-purple, white text, `rounded-full px-8 py-3`
- Secondary: transparent with border, `border border-indigo-500/50 text-indigo-300`

### Icons
- Use Lucide React icons
- Icon containers: small rounded square with gradient background or subtle glow

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use gradient text for all major headings
- Add subtle glow/blur effects for depth
- Use glassmorphism (backdrop-blur + semi-transparent bg) for floating elements
- Keep text contrast high — always use light text on dark backgrounds

## Don'ts
- Never use white or light-gray backgrounds
- Never use dark text on dark backgrounds
- Avoid flat, colorless designs — always add gradient or glow accents
- Don't use more than 3 accent colors in one component
