# Design System — CodeAgent Landing Page

## Visual Style
Dark-first, modern developer aesthetic inspired by Claude Code / GitHub Copilot.
Clean, minimal, high-contrast. Subtle gradients and glows for depth.

## Color Palette
- Background primary: `#0a0a0f` (near-black)
- Background secondary: `#111118` (dark card)
- Background tertiary: `#1a1a2e` (slightly elevated)
- Border subtle: `#1e1e2e` / `#2a2a3e`
- Accent primary: `#7c3aed` (violet-600)
- Accent secondary: `#a855f7` (purple-500)
- Accent glow: `#6d28d9` (violet-700)
- Accent gradient: `from-violet-600 to-purple-500`
- Text primary: `#f8fafc` (slate-50)
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Success: `#10b981` (emerald-500)
- Code bg: `#0d1117` (GitHub dark)
- Code border: `#21262d`

## Typography
- Font: Inter (Google Fonts)
- Heading XL: `text-6xl lg:text-7xl font-bold tracking-tight`
- Heading L: `text-4xl lg:text-5xl font-bold`
- Heading M: `text-2xl lg:text-3xl font-semibold`
- Heading S: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Small: `text-sm text-slate-400`
- Code: `font-mono text-sm`

## Spacing
- Section padding: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`
- Gap between cards: `gap-6 lg:gap-8`

## Borders & Radius
- Card radius: `rounded-2xl`
- Button radius: `rounded-xl`
- Badge radius: `rounded-full`
- Border color: `border-white/10`

## Shadows & Glows
- Card shadow: `shadow-xl shadow-black/40`
- Glow effect: `shadow-violet-500/20`
- Hover glow: `hover:shadow-violet-500/30`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-all`
- Secondary: `border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all`
- Ghost: `text-slate-400 hover:text-white transition-colors`

## Cards
- Base: `bg-[#111118] border border-white/10 rounded-2xl p-6`
- Hover: `hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all`

## Gradients
- Hero text: `bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent`
- Section bg: `bg-gradient-to-b from-[#0a0a0f] to-[#111118]`
- Accent line: `bg-gradient-to-r from-violet-600 to-purple-500`

## Do's
- Use dark backgrounds throughout
- Use violet/purple as the primary accent
- Use subtle borders (white/10) for card separation
- Use monospace font for all code snippets
- Animate with `transition-all duration-300`
- Use `backdrop-blur` for floating elements

## Don'ts
- No white or light backgrounds
- No bright/saturated colors other than violet/purple accent
- No heavy drop shadows on text
- No more than 2 accent colors in one section
