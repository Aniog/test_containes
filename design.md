# ARTITECT MACHINERY — Visual Style Guide

An elegant, industrial yet user-friendly identity for a sheet metal folding machine manufacturer. The mood blends precision engineering with refined editorial design.

## Brand Voice
- Confident, precise, refined.
- Industrial heritage with modern minimalism.
- Clean typography, generous whitespace, restrained palette.

## Color Palette
Use these Tailwind utilities. Background defaults are warm off-white; primary brand tone is deep graphite; accent is a brushed copper.

- Page background: `bg-stone-50` (default surface) and `bg-white` (cards/sections)
- Foreground text: `text-stone-900` (headings), `text-stone-700` (body), `text-stone-500` (muted)
- Brand dark: `bg-stone-900` / `text-stone-900` (graphite, used for header, footer, primary buttons)
- Accent (copper): `text-amber-700`, `bg-amber-700`, hover `bg-amber-800`, soft accent `bg-amber-50`
- Borders: `border-stone-200`, hover `border-stone-300`
- Subtle dividers: `border-stone-200/70`

Do NOT use saturated blues, greens, purples. Stick to stone neutrals and copper accent.

## Typography
- Display / Headings: `font-serif` (Playfair Display via Google Fonts), weights 500–700, tight tracking.
- Body / UI: `font-sans` (Inter via Google Fonts), weights 300–600.
- Sizing scale:
  - Hero `text-5xl md:text-6xl lg:text-7xl` with `font-serif font-medium tracking-tight leading-[1.05]`
  - Section heading `text-3xl md:text-4xl font-serif font-medium tracking-tight`
  - Eyebrow label `text-xs uppercase tracking-[0.22em] text-amber-700 font-medium`
  - Body `text-base md:text-lg text-stone-700 leading-relaxed`
  - Small `text-sm text-stone-500`

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto px-6 md:px-10`
- Vertical section spacing: `py-20 md:py-28`
- Grid gaps: `gap-8 md:gap-12`
- Cards: `rounded-none` (sharp, industrial) or `rounded-sm` for subtle softness; never rounded-full for cards.
- Borders preferred over shadows for elegance: `border border-stone-200`. Shadow used sparingly: `shadow-sm`.

## Components
- Buttons (primary): `inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 text-sm tracking-wide uppercase font-medium hover:bg-amber-800 transition-colors`
- Buttons (secondary / ghost): `inline-flex items-center gap-2 border border-stone-900 text-stone-900 px-7 py-3.5 text-sm tracking-wide uppercase font-medium hover:bg-stone-900 hover:text-stone-50 transition-colors`
- Eyebrow + heading pattern: small uppercase copper label above large serif heading.
- Product cards: white background, hairline border, image on top, padded text block, small arrow CTA.

## Imagery
- Use industrial photography: sheet metal forming, brushed steel surfaces, factory floor, machined detail. Calm, well-lit, neutral colors.
- Aspect ratios: hero `16x9`, product cards `4x3`, portraits `3x4`.

## Do / Don't
- Do: keep palette neutral with single copper accent; use serif for headings, sans for body.
- Do: use generous whitespace and hairline borders.
- Don't: use gradient backgrounds, neon colors, drop shadows everywhere, or rounded pill buttons for primary actions.
- Don't: place light text on light backgrounds. Always ensure contrast (stone-900 on stone-50, stone-50 on stone-900).
