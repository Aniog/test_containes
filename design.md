# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of tiny organisms. Deep navy and teal tones evoke bioluminescence and deep-sea exploration.

## Color Palette
- Background (deep dark): `bg-[#050d1a]`
- Surface (card/section): `bg-[#0a1628]`
- Surface elevated: `bg-[#0f1f38]`
- Primary accent (teal/cyan): `text-cyan-400`, `bg-cyan-400`
- Secondary accent (violet): `text-violet-400`, `bg-violet-500`
- Highlight (emerald): `text-emerald-400`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-500`
- Border: `border-cyan-900/40`, `border-slate-700/50`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption/label: `text-xs uppercase tracking-widest text-cyan-400`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`
- Stack gap: `gap-4`

## Components

### Hero
- Full-viewport height with background image overlay
- Dark gradient overlay: `bg-gradient-to-b from-[#050d1a]/60 via-[#050d1a]/40 to-[#050d1a]`
- Centered text with large headline and subtitle

### Cards
- Rounded corners: `rounded-2xl`
- Dark surface: `bg-[#0a1628]`
- Subtle border: `border border-cyan-900/30`
- Hover lift: `hover:-translate-y-1 transition-transform duration-300`
- Image on top, content below

### Image Gallery
- Masonry-style or uniform grid
- Images with `rounded-xl overflow-hidden`
- Hover zoom: `hover:scale-105 transition-transform duration-500`

### Navigation
- Fixed top bar: `fixed top-0 w-full z-50`
- Glassmorphism: `bg-[#050d1a]/80 backdrop-blur-md`
- Border bottom: `border-b border-cyan-900/30`

### Badges / Labels
- Pill shape: `rounded-full px-3 py-1 text-xs font-medium`
- Teal variant: `bg-cyan-400/10 text-cyan-400 border border-cyan-400/20`
- Violet variant: `bg-violet-500/10 text-violet-400 border border-violet-400/20`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use cyan/teal as the primary accent color consistently
- Add subtle glows with `shadow-[0_0_30px_rgba(34,211,238,0.15)]` on key elements
- Use `backdrop-blur` for overlays and nav
- Images should be large and prominent

## Don'ts
- No white or light backgrounds
- No bright primary colors (red, orange, yellow) as main accents
- No small or hidden images — images should be featured prominently
- No cluttered layouts — keep generous whitespace
