# SSourcing China — Design System

## Brand Identity
Professional B2B China sourcing agency. Clean, trustworthy, international.
No flashy effects. Substance over style.

## Color Palette

### Primary Colors
- Navy (primary): `#1B2B4B` — main brand color, headers, nav bg
- Red (accent): `#C0392B` — CTAs, highlights, badges (use sparingly)
- Steel Blue (secondary): `#2E6DA4` — links, secondary buttons, icons

### Neutral Colors
- White: `#FFFFFF` — page backgrounds, cards
- Gray 50: `#F8F9FA` — section alternating backgrounds
- Gray 100: `#F1F3F5` — subtle borders, dividers
- Gray 400: `#9CA3AF` — placeholder text, muted labels
- Gray 600: `#4B5563` — body text secondary
- Gray 900: `#111827` — primary body text

### Semantic
- Success: `#16A34A`
- Warning: `#D97706`

## Typography

### Font Family
- Headings: `Inter` (700, 800)
- Body: `Inter` (400, 500)
- Accent/Labels: `Inter` (600)

### Scale
- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-bold`
- Section H2: `text-3xl md:text-4xl font-bold`
- Card H3: `text-xl font-semibold`
- Body: `text-base` (16px)
- Small: `text-sm`
- Label/Badge: `text-xs font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg`
- Secondary: `bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-3 rounded-lg`
- Outline: `border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-6 py-3 rounded-lg`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8`
- Hover: `hover:shadow-md transition-shadow`

### Badges
- `bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full`
- Red variant: `bg-red-50 text-red-700`

### Section Backgrounds
- White sections: `bg-white`
- Alternate: `bg-gray-50`
- Dark (hero, CTA): `bg-[#1B2B4B]`

## Do's
- Use navy for authority, red only for primary CTAs and key highlights
- Keep generous whitespace between sections
- Use real-looking data (numbers, percentages, years)
- Icons should be simple line icons (Lucide)
- Images should be factory/QC/shipping themed

## Don'ts
- No gradients on text
- No neon colors
- No rounded corners > `rounded-xl`
- No more than 2 font weights per section
- Don't use red for body text
