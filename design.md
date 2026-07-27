# SSourcing China — Design System

## Overview
A clean, trustworthy, international B2B website for a China sourcing agent. The design prioritizes clarity, professionalism, and conversion.

## Color Palette
- **Primary:** `blue-700` (#1d4ed8) — trust, action, links
- **Primary hover:** `blue-800` (#1e40af)
- **Background:** `white` (#ffffff) — clean, open
- **Surface alt:** `slate-50` (#f8fafc) — section backgrounds
- **Text primary:** `slate-900` (#0f172a)
- **Text secondary:** `slate-600` (#475569)
- **Text muted:** `slate-500` (#64748b)
- **Borders:** `slate-200` (#e2e8f0)
- **Dark sections:** `slate-900` (#0f172a) background with white/slate-300 text
- **Success:** `green-50` / `green-600` / `green-900`
- **Error:** `red-600`

## Typography
- **Font family:** Inter (Google Font), system-ui fallback
- **Headings:** Bold, tight tracking (`tracking-tight`)
- **Hero title:** `text-4xl sm:text-5xl lg:text-6xl font-extrabold`
- **H2 section titles:** `text-3xl sm:text-4xl font-bold`
- **Body:** `text-base text-slate-600`, line-height relaxed
- **Eyebrows / labels:** `text-sm font-semibold uppercase tracking-wider text-blue-700`

## Spacing
- Section padding: `py-16 lg:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card grids: `grid gap-6` with responsive columns
- Component gaps: `gap-4`, `gap-6`, `gap-8`, `gap-12`

## Components

### Buttons
- **Primary:** `bg-blue-700 text-white hover:bg-blue-800 rounded-lg`
- **Outline:** `border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg`
- **Ghost:** `hover:bg-slate-100 text-slate-700`
- Sizes: default `h-10 px-5`, large `h-12 px-8 text-lg`

### Cards
- White background, `rounded-xl`, `border border-slate-200`, subtle shadow on hover
- Icon containers: `bg-blue-50 text-blue-700 rounded-lg h-12 w-12`

### Forms
- Inputs: `rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500`
- Labels: `text-sm font-medium text-slate-700`

### Badges
- Primary variant: `bg-blue-100 text-blue-800`

## Layout Principles
- Single-column mobile, multi-column desktop
- Generous whitespace
- Clear visual hierarchy with eyebrows, headings, body text
- Dark alternating sections for emphasis (hero, problems, CTA)

## Imagery
- Realistic factory, QC, shipping, and product visuals via the stock image helper
- Background images for hero sections
- Content images with 4:3 or 16:9 ratios

## Do's and Don'ts
- Do use blue-700 for primary actions and trust signals
- Do keep text contrast high (slate-900 on white, white on slate-900)
- Don't use dark backgrounds behind light gray text
- Don't use exaggerated marketing language
- Don't clutter sections with too many competing CTAs
