# 威尔德家庭护理产品有限公司 — Design System

## Brand Identity
- Company: 威尔德家庭护理产品有限公司 (Weide Family Care Products Co., Ltd.)
- Tone: Professional, trustworthy, clean, caring
- Language: Simplified Chinese

## Color Palette
- Primary: `#1a5c8a` (deep ocean blue — trust, professionalism)
- Primary Light: `#2d7ab5`
- Primary Dark: `#0f3d5e`
- Accent: `#4caf7d` (fresh green — health, nature, care)
- Accent Light: `#6fcf97`
- Neutral 50: `#f8fafc`
- Neutral 100: `#f1f5f9`
- Neutral 200: `#e2e8f0`
- Neutral 600: `#475569`
- Neutral 700: `#334155`
- Neutral 900: `#0f172a`
- White: `#ffffff`

Tailwind custom colors (add to config):
- `brand-primary`: `#1a5c8a`
- `brand-primary-light`: `#2d7ab5`
- `brand-primary-dark`: `#0f3d5e`
- `brand-accent`: `#4caf7d`
- `brand-accent-light`: `#6fcf97`

## Typography
- Font Family: "Noto Sans SC" (Google Fonts) for Chinese text, fallback: system-ui
- Headings: font-weight 700, tight line-height
- Body: font-weight 400, line-height 1.7
- Small/Caption: font-weight 400, text-sm, text-neutral-600

### Scale
- Hero Title: text-4xl md:text-6xl font-bold
- Section Title: text-3xl md:text-4xl font-bold
- Card Title: text-xl font-semibold
- Body: text-base
- Small: text-sm

## Spacing
- Section padding: py-20 px-4 md:px-8
- Container max-width: max-w-7xl mx-auto
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Borders & Shadows
- Card border: border border-neutral-200 rounded-2xl
- Card shadow: shadow-md hover:shadow-xl transition-shadow
- Button radius: rounded-full
- Section divider: border-t border-neutral-200

## Components

### Primary Button
`bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary-light transition-colors`

### Outline Button
`border-2 border-brand-primary text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-colors`

### Section Badge
`inline-block bg-brand-accent/10 text-brand-accent text-sm font-semibold px-4 py-1 rounded-full mb-4`

### Product Card
`bg-white border border-neutral-200 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden`

## Do's
- Use brand-primary for all primary CTAs and headings
- Use brand-accent for highlights, badges, and success states
- Maintain generous whitespace between sections
- Use subtle gradients for hero backgrounds (from brand-primary-dark to brand-primary)
- Keep text on dark backgrounds white or neutral-100
- Use rounded-2xl for cards, rounded-full for buttons and badges

## Don'ts
- Don't use pure black (#000) for body text — use neutral-900 or neutral-700
- Don't use low-contrast text on colored backgrounds
- Don't crowd sections — always use py-20 minimum
- Don't use more than 2 font weights per section
