# Fields Medal Website Design System

## Overview
A prestigious, academic-yet-modern website dedicated to the Fields Medal — mathematics' highest honor. The design evokes intellectual depth, elegance, and timelessness.

## Color Palette

### Primary Colors
- Deep Navy: `#0f1b2d` — primary background, headers
- Gold: `#c9a227` — accent, medal highlights, headings
- Warm Gold Light: `#e8c547` — hover states, highlights
- Ivory: `#f5f0e8` — light backgrounds, cards
- Off-White: `#faf8f4` — page background

### Secondary Colors
- Slate Blue: `#2d4a6e` — secondary backgrounds, nav
- Muted Gold: `#a07c1e` — subtle accents
- Charcoal: `#1e2a3a` — text on light backgrounds
- Medium Gray: `#6b7280` — secondary text
- Light Gray: `#e5e7eb` — borders, dividers

### Text Colors
- Primary Text (dark bg): `#f5f0e8` (ivory)
- Primary Text (light bg): `#1e2a3a` (charcoal)
- Secondary Text: `#6b7280`
- Accent Text: `#c9a227` (gold)

## Typography

### Font Stack
- Headings: `'Playfair Display', Georgia, serif` — elegant, academic
- Body: `'Inter', system-ui, sans-serif` — clean, readable
- Monospace/Math: `'JetBrains Mono', monospace` — for formulas

### Scale
- Hero Title: `text-5xl md:text-7xl font-bold`
- Section Title: `text-3xl md:text-4xl font-bold`
- Card Title: `text-xl font-semibold`
- Body: `text-base leading-relaxed`
- Caption: `text-sm text-gray-500`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-amber-200/30`
- Card shadow: `shadow-lg shadow-amber-900/10`
- Hover shadow: `shadow-xl shadow-amber-900/20`
- Rounded corners: `rounded-xl` for cards, `rounded-full` for badges

## Component Styles

### Navigation
- Background: `bg-[#0f1b2d]/95 backdrop-blur-sm`
- Text: `text-ivory`
- Active link: `text-[#c9a227]`
- Border bottom: `border-b border-amber-900/20`

### Hero Section
- Background: deep navy gradient with subtle gold accents
- Title: gold colored, large serif font
- Subtitle: ivory, lighter weight

### Cards (Laureate Cards)
- Background: `bg-white` or `bg-ivory`
- Border: `border border-amber-200/40`
- Hover: lift effect with gold border highlight
- Photo: circular or rounded-lg

### Badges / Tags
- Year badge: `bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm`
- Country badge: `bg-slate-100 text-slate-700`

### Buttons
- Primary: `bg-[#c9a227] text-[#0f1b2d] hover:bg-[#e8c547] font-semibold rounded-lg px-6 py-3`
- Secondary: `border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 rounded-lg px-6 py-3`
- Ghost: `text-ivory hover:text-[#c9a227]`

### Timeline
- Line: `border-l-2 border-amber-300/50`
- Dot: `bg-[#c9a227] rounded-full w-4 h-4`
- Year label: gold, bold

## Do's
- Use Playfair Display for all major headings
- Use gold accents sparingly for maximum impact
- Maintain generous whitespace for academic feel
- Use subtle gradients (navy to dark navy) for depth
- Add mathematical symbols (∑, ∫, π, ∞) as decorative elements
- Use high-contrast text on all backgrounds

## Don'ts
- Don't use bright/neon colors — keep palette refined
- Don't crowd content — whitespace is essential
- Don't use light text on light backgrounds
- Don't use dark text on dark backgrounds
- Don't use more than 2 font families
- Don't use harsh drop shadows

## Tailwind Config Extensions
Add to tailwind.config.js:
```js
colors: {
  navy: { DEFAULT: '#0f1b2d', light: '#2d4a6e' },
  gold: { DEFAULT: '#c9a227', light: '#e8c547', muted: '#a07c1e' },
  ivory: { DEFAULT: '#f5f0e8', light: '#faf8f4' },
}
```
