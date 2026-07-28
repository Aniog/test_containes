# SSourcing China Design System

## Brand Direction
A clean, trustworthy, international B2B website for a China-based sourcing partner. The visual language should feel practical, structured, and credible rather than promotional or flashy.

## Visual Style
- Use a light neutral background for the site shell: `bg-slate-50`
- Use white cards and sections for content surfaces: `bg-white`
- Use a deep navy as the primary brand tone for headings, navigation, and strong accents: `bg-slate-900`, `text-slate-900`
- Use a muted steel blue for secondary emphasis: `bg-sky-100`, `text-sky-700`, `border-sky-200`
- Use green sparingly for positive trust or process states: `bg-emerald-50`, `text-emerald-700`
- Body copy should remain highly readable: `text-slate-600`
- Dividers and subtle structure should use soft neutral borders: `border-slate-200`

## Typography
- Primary font: Inter
- H1: `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight`
- H2: `text-3xl md:text-4xl font-semibold tracking-tight`
- H3: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg leading-7`
- Small labels: `text-sm font-medium uppercase tracking-[0.16em]`

## Layout
- Use a centered content container: `mx-auto w-full max-w-7xl px-6 lg:px-8`
- Default section spacing: `py-16 md:py-20 lg:py-24`
- Use two-column hero and feature layouts on desktop, stacked on mobile
- Desktop should feel spacious and grid-based, not like a mobile-first single-column landing page

## Components
- Buttons:
  - Primary: `inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800`
  - Secondary: `inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100`
- Cards: `rounded-3xl border border-slate-200 bg-white p-6 shadow-sm`
- Badges: `inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700`
- Form fields: `rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none`

## Imagery
- Use realistic visuals showing factory floors, supplier review, quality inspection, packaging, and shipping coordination
- Prefer a small number of high-quality visuals over excessive imagery
- Use images to reinforce trust and operational capability

## Do
- Keep all text easy to read against every surface
- Emphasize structure, process, and credibility
- Use concise business-focused copy and practical headlines
- Highlight inquiry CTAs in hero, mid-page, and footer/contact areas

## Don't
- Do not use exaggerated claims, flashy gradients, or aggressive sales styling
- Do not use low-contrast gray text on white cards
- Do not overcrowd sections with too many badges, colors, or icons
- Do not use arbitrary hex values directly in class strings
