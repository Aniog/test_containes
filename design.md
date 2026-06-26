# ARTITECT MACHINERY — Visual Design Guide

## Brand essence
Precision engineering with a refined, trustworthy feel. The visual style is elegant but user friendly: clean layouts, generous whitespace, sharp lines that echo sheet-metal craftsmanship, and a confident dark-to-light contrast.

## Color palette
- Primary: `#0f172a` (slate-900) — headers, hero overlays, strong emphasis
- Secondary: `#1e293b` (slate-800) — cards, footer, secondary surfaces
- Accent: `#f59e0b` (amber-500) — CTAs, highlights, icons, hover states
- Accent hover: `#d97706` (amber-600)
- Background: `#f8fafc` (slate-50) — page background
- Surface: `#ffffff` — cards and panels
- Muted text: `#64748b` (slate-500)
- Body text: `#334155` (slate-700)
- Border: `#e2e8f0` (slate-200)
- Success/confirm: `#10b981` (emerald-500)
- Error: `#ef4444` (red-500)

## Typography
- Font family: Inter (300, 400, 500, 600, 700, 800)
- Hero title: `text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold tracking-tight`
- Subtitle/body: `text-base md:text-lg font-normal leading-relaxed`
- Small/captions: `text-sm font-medium uppercase tracking-widest`

## Spacing
- Page sections: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Component gaps: `gap-6` / `gap-8` / `gap-10`

## Elevation and shape
- Card radius: `rounded-2xl`
- Button radius: `rounded-full` for primary CTAs, `rounded-lg` for inputs
- Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`
- Use subtle borders (`border border-slate-200`) to keep UI crisp

## Components
### Primary button
`bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition shadow-md`

### Secondary button / outline
`border border-slate-300 text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-50 transition`

### Cards
White background, rounded-2xl, border slate-200, shadow-sm, hover:shadow-md transition. Inside cards use `text-slate-900` titles and `text-slate-600` body.

### Forms
Inputs: `w-full rounded-lg border-slate-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500`

## Imagery
Use industrial, high-quality stock photography. Hero should evoke precision metalwork and manufacturing confidence. Product images show sheet-metal folding machines in clean factory environments. Always apply the stock-image tagging system (`data-strk-img`, `data-strk-bg`) with appropriate ratios and widths.

## Do's
- Keep layouts breathable with ample whitespace.
- Use the amber accent sparingly for CTAs and key highlights.
- Ensure all text has strong contrast against its background.
- Make navigation simple and sticky on scroll.
- Use icons from Lucide to support labels.

## Don'ts
- Don't use neon or overly bright colors.
- Don't clutter cards with too much text.
- Don't use low-contrast text on dark or light backgrounds.
- Don't rely solely on images to communicate; always pair with clear headings.
