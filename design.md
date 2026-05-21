# MicroCosmos Design System

## Concept
Dark, immersive, science-meets-wonder aesthetic. Inspired by microscopy, bioluminescence, and the hidden beauty of the microscopic world.

## Color Palette
- Background: Deep navy/black `#050a14`
- Surface: Dark blue-gray `#0d1b2a`
- Card surface: `#111827` (gray-900)
- Primary accent: Cyan/teal `#06b6d4` (cyan-500)
- Secondary accent: Violet `#8b5cf6` (violet-500)
- Highlight: Emerald `#10b981` (emerald-500)
- Text primary: White `#ffffff`
- Text secondary: `#94a3b8` (slate-400)
- Text muted: `#475569` (slate-600)
- Border: `rgba(6,182,212,0.2)` subtle cyan border

## Typography
- Font: "Inter" (loaded via Google Fonts)
- Hero heading: `text-6xl md:text-8xl font-black tracking-tight`
- Section heading: `text-4xl md:text-5xl font-bold`
- Subheading: `text-xl md:text-2xl font-semibold`
- Body: `text-base text-slate-400 leading-relaxed`
- Caption: `text-sm text-slate-500`

## Spacing
- Section padding: `py-24 px-6`
- Card padding: `p-6`
- Gap between cards: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-cyan-500/20`
- Card hover: `hover:border-cyan-500/50`
- Glow shadow: `shadow-[0_0_30px_rgba(6,182,212,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]`

## Images
- Hero: full-width, 16x9, microscopic/cellular imagery
- Gallery grid: 4x3 ratio, microscopy photos
- Feature cards: 3x2 ratio
- All images use the stock image system via `data-strk-img` / `data-strk-bg`

## Do's
- Use dark backgrounds throughout
- Use cyan/violet/emerald accents for highlights and borders
- Use large, full-bleed images in hero and gallery sections
- Use subtle glows and gradients for depth
- Ensure all text is white or light on dark backgrounds

## Don'ts
- No light backgrounds
- No low-contrast text (e.g. dark text on dark bg)
- No flat, plain card designs — always add subtle border/glow
- No small or sparse image usage — images should be prominent
