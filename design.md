# SSourcing China — Design System

## Overview
A clean, trustworthy, international B2B website for a China-based sourcing agent. The visual language balances corporate professionalism with approachable clarity, using a navy-and-white foundation and amber accents to draw attention to calls-to-action.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-navy` | `#0B1A3F` | Headings, header/footer surfaces, primary trust color |
| `--color-navy-light` | `#1E2E55` | Hover states for navy elements |
| `--color-slate` | `#334155` | Body text |
| `--color-slate-muted` | `#64748B` | Secondary text, captions |
| `--color-amber` | `#D97706` | Primary CTA buttons, accent icons |
| `--color-amber-hover` | `#B45309` | CTA hover |
| `--color-white` | `#FFFFFF` | Page backgrounds, cards |
| `--color-cloud` | `#F1F5F9` | Section alternate backgrounds |
| `--color-border` | `#E2E8F0` | Card borders, dividers |
| `--color-success` | `#15803D` | Trust badges, success states |

## Typography

- **Font family**: Inter, system-ui, sans-serif
- **Headings**: 700–800 weight, tight line-height (`leading-tight`), navy color
- **Body**: 400 weight, slate color, `leading-relaxed`
- **Display headline**: `text-4xl md:text-5xl lg:text-6xl`
- **Section title**: `text-3xl md:text-4xl`
- **Card title**: `text-xl font-semibold`
- **Small / caption**: `text-sm text-slate-muted`

## Spacing

- Section vertical padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary**: `bg-amber text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-amber-hover`
- **Secondary / Outline**: `border-2 border-navy text-navy font-semibold px-6 py-3 rounded-lg hover:bg-navy hover:text-white`
- **Ghost**: `text-navy font-medium hover:text-amber`

### Cards
- White background, `rounded-xl`, `shadow-sm`, `border border-border`
- Optional top accent line in amber or navy
- Padding `p-6`

### Icons
- Use Lucide React icons at `w-6 h-6` in cards, `w-5 h-5` inline
- Icon containers: `w-12 h-12 rounded-lg bg-amber/10 text-amber flex items-center justify-center`

### Forms
- Inputs: `w-full rounded-lg border-border px-4 py-3 focus:border-amber focus:ring-amber`
- Labels: `text-sm font-medium text-slate`

## Imagery

- Use stock-image tags (`data-strk-img` / `data-strk-bg`) for realistic factory, QC, shipping, and product visuals.
- Prefer 16:9 hero backgrounds and 4:3 card thumbnails.
- Always include alt text.

## Do's and Don'ts

- Do use generous whitespace and clear hierarchy.
- Do keep language professional, clear, and practical.
- Do use the amber CTA color sparingly for primary actions.
- Don't use exaggerated claims or flashy animations.
- Don't use low-contrast text on light or dark backgrounds.
- Don't rely on inherited colors inside cards; explicitly set foreground colors.
