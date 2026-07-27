# SSourcing China — Design System

## Overview
A clean, trustworthy, international B2B website for a China-based sourcing agent. The visual style is professional, understated, and conversion-focused. No exaggerated claims; clear, practical language.

## Color Palette

- **Primary Blue**: `#0f4c81` — trustworthy navy blue for CTAs, headings, key accents
- **Primary Blue Light**: `#1e6ba8` — hover state
- **Secondary Teal**: `#0d9488` — secondary accents, success indicators
- **Background**: `#ffffff` main, `#f8fafc` sections
- **Surface**: `#ffffff` cards, `#f1f5f9` subtle fills
- **Text Primary**: `#0f172a` — headings, body
- **Text Secondary**: `#475569` — descriptions, captions
- **Text Muted**: `#64748b` — meta, fine print
- **Border**: `#e2e8f0`
- **Error**: `#dc2626`
- **Success**: `#059669`

## Typography

- Font family: `Inter`, system-ui, sans-serif
- Headings: weight 700–800, tight line-height (`tracking-tight`)
- Body: weight 400–500, line-height 1.6–1.75
- Hero H1: `text-4xl md:text-5xl lg:text-6xl`
- Section H2: `text-3xl md:text-4xl`
- Card titles: `text-xl font-semibold`

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`
- Rounded corners: `rounded-lg` for cards, `rounded-full` for pills/avatars
- Shadows: `shadow-sm`, `shadow-md` on cards; avoid heavy shadows

## Components

### Buttons
- Primary: `bg-[#0f4c81] text-white hover:bg-[#1e6ba8] px-6 py-3 rounded-lg font-medium`
- Secondary / Outline: `border border-[#0f4c81] text-[#0f4c81] hover:bg-[#0f4c81] hover:text-white px-6 py-3 rounded-lg font-medium`
- CTA is the most prominent element on the page

### Cards
- White background, `rounded-lg shadow-sm border border-slate-200`
- Hover: subtle shadow lift `hover:shadow-md`

### Forms
- Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 focus:border-[#0f4c81] focus:ring-[#0f4c81]`
- Labels: `text-sm font-medium text-slate-700`
- Helper text: `text-sm text-slate-500`

## Imagery

- Realistic factory, QC inspection, packaging, and shipping visuals
- Use the stock-image tagging system (`data-strk-img`, `data-strk-bg`)
- Prefer 16:9 hero backgrounds, 4:3 card images, 1:1 avatars/icons

## Do's and Don'ts

- DO use generous whitespace and clear hierarchy
- DO keep body text dark on light backgrounds for readability
- DO use the primary blue sparingly for CTAs and key accents
- DON'T use bright reds, oranges, or flashy gradients
- DON'T use tiny body text or low-contrast captions
- DON'T clutter the page with multiple competing CTAs
