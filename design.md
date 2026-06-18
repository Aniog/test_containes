# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of tiny organisms. Deep navy and teal tones evoke bioluminescence and deep-sea exploration.

## Color Palette
- Background (deep dark): `bg-[#050d1a]`
- Surface (dark navy): `bg-[#0a1628]`
- Card surface: `bg-[#0f1f38]`
- Accent teal: `text-teal-400`, `bg-teal-400`, `border-teal-400`
- Accent cyan: `text-cyan-300`, `bg-cyan-300`
- Accent emerald: `text-emerald-400`
- Muted text: `text-slate-400`
- Body text: `text-slate-200`
- Headings: `text-white`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6`
- Section gap between heading and content: `mt-12`

## Borders & Shadows
- Card border: `border border-teal-900/40`
- Card hover: `hover:border-teal-500/60`
- Glow effect: `shadow-[0_0_30px_rgba(20,184,166,0.15)]`
- Rounded cards: `rounded-2xl`
- Image rounded: `rounded-xl`

## Buttons
- Primary: `bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full transition`
- Outline: `border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-6 py-3 rounded-full transition`

## Images
- Use data-strk-img system for all images
- Hero background: 16x9, width 1600
- Gallery cards: 3x2, width 600
- Feature images: 4x3, width 800
- Portrait/specimen: 2x3, width 400

## Do's
- Use dark backgrounds throughout for immersive feel
- Add subtle teal/cyan glows on key elements
- Use uppercase tracking-widest for labels and categories
- Overlay text on images with dark gradient overlays
- Use grid layouts for image galleries

## Don'ts
- No light backgrounds (white/light gray)
- No bright primary colors (red, orange, yellow) as main palette
- No flat, uninteresting card designs
- No text without sufficient contrast on dark backgrounds
