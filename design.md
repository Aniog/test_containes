# MicroCosmos Design System

## Theme
Dark, immersive, scientific aesthetic inspired by microscopy and the hidden world of tiny life.
Deep navy/black backgrounds with vibrant teal, cyan, and purple accent colors.

## Colors
- Background primary: `#050d1a` (deep dark navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f38` (navy card)
- Accent teal: `#00d4c8` (bright teal) → add as `teal-400` or use `[#00d4c8]`
- Accent cyan: `#22d3ee` (cyan-400)
- Accent purple: `#a855f7` (purple-500)
- Accent green: `#4ade80` (green-400)
- Text primary: `#f0f9ff` (sky-50, near white)
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Border subtle: `rgba(0,212,200,0.15)`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-teal-500/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Image overlay: gradient from transparent to `#050d1a`

## Components
- Navbar: sticky, dark glass `bg-[#050d1a]/80 backdrop-blur-md`
- Hero: full-screen with background image, centered text, gradient overlay
- Section cards: dark navy bg, teal border, hover glow
- Image grid: masonry-style or uniform grid with rounded corners
- Gallery: multi-column image grid with captions
- Footer: dark with teal accent links

## Do's
- Use teal/cyan glows on hover states
- Use `backdrop-blur` for glass effects
- Use `tracking-widest uppercase` for section labels
- Use gradient text for hero titles: `bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent`
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- No light backgrounds in main content
- No low-contrast text (e.g. dark text on dark bg)
- No harsh white backgrounds
- No overly saturated neon colors without dark context
