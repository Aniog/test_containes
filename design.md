# MicroCosmos Design System

## Concept
A dark, immersive, science-inspired aesthetic evoking the hidden world of microscopic life — bioluminescent colors on deep dark backgrounds, with a sense of wonder and discovery.

## Color Palette
- Background (deep dark): `#050a0e` — use `bg-[#050a0e]`
- Surface / card: `#0d1b2a` — use `bg-[#0d1b2a]`
- Surface elevated: `#112233` — use `bg-[#112233]`
- Primary accent (teal/cyan): `#00d4c8` — use `text-[#00d4c8]`, `border-[#00d4c8]`
- Secondary accent (violet): `#7c3aed` — use `text-violet-500`
- Highlight (amber/gold): `#f59e0b` — use `text-amber-400`
- Body text: `#c8d8e8` — use `text-[#c8d8e8]`
- Muted text: `#6b8fa8` — use `text-[#6b8fa8]`
- White headings: `#f0f8ff` — use `text-[#f0f8ff]`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption / label: `text-sm font-medium tracking-wide uppercase`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-20 md:py-28`
- Card gap: `gap-6 md:gap-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Borders & Shadows
- Card border: `border border-[#1e3a4a]`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,200,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,200,0.3)]`

## Images
- Use `data-strk-img` / `data-strk-bg` system for all stock images
- Hero: 16x9 background, 1600px wide
- Gallery cards: 4x3 ratio, 600px wide
- Feature images: 3x2 ratio, 800px wide
- Portrait/specimen cards: 3x4 ratio, 400px wide

## Do's
- Use dark backgrounds with glowing teal/cyan accents
- Use generous whitespace between sections
- Use image-heavy layouts — at least 12+ images across the page
- Use subtle gradient overlays on images for text legibility
- Use pill/badge labels on cards (e.g. "Bacteria", "Fungi", "Protozoa")

## Don'ts
- No white or light backgrounds
- No flat, colorless designs
- No text that blends into the background
- No hardcoded hex codes outside of Tailwind config or design.md
