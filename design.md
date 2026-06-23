# SSourcing China - Design System

## Brand Identity
Clean, trustworthy, international B2B services brand. Visual style should communicate reliability, clarity, and global business competence. Avoid flashy gradients and consumer-style "playful" patterns.

## Color Palette
Use Tailwind named slate/blue scales. The primary color is a confident corporate navy.

- Primary navy: `bg-slate-900` / `text-slate-900` (deep, authoritative)
- Primary navy hover: `bg-slate-800`
- Accent blue: `bg-blue-600` / `text-blue-600` (CTAs, links, highlights)
- Accent blue hover: `bg-blue-700`
- Soft surface: `bg-slate-50` (alternate sections)
- Card surface: `bg-white`
- Subtle border: `border-slate-200`
- Strong text: `text-slate-900`
- Body text: `text-slate-700`
- Muted text: `text-slate-500`
- Success accent: `text-emerald-600`

Do NOT use neon colors, purples, pinks, or playful gradients. Avoid pure black on white; use slate-900 for text.

## Typography
Inter font, loaded via Google Fonts in `index.html`.

- Hero H1: `text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900`
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight text-slate-900`
- Subsection H3: `text-xl md:text-2xl font-semibold text-slate-900`
- Eyebrow / label: `text-sm font-semibold uppercase tracking-wider text-blue-600`
- Body: `text-base text-slate-700 leading-relaxed`
- Small: `text-sm text-slate-500`

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section vertical: `py-16 md:py-24`
- Grid gap: `gap-6` or `gap-8`
- Card radius: `rounded-xl`
- Card padding: `p-6 md:p-8`

## Buttons
- Primary CTA: `inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors`
- Secondary: `inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors`
- Dark CTA: `bg-slate-900 text-white hover:bg-slate-800`

## Cards
- `bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow`

## Navigation
- White/`bg-white/95` backdrop-blur, `border-b border-slate-200`
- Links: `text-slate-700 hover:text-slate-900 text-sm font-medium`

## Footer
- `bg-slate-900 text-slate-300`
- Headings white, links `text-slate-400 hover:text-white`

## Icons
Lucide React, default `w-5 h-5` or `w-6 h-6`. Inside circular badge use `bg-blue-50 text-blue-600 rounded-lg p-3`.

## Imagery
Use the data-strk-img / data-strk-bg system. Subjects: factories, container ships, QC inspectors with clipboards, warehouses, freight, business handshakes, manufacturing close-ups. Realistic, not stock-cheesy.

## Do's
- Generous whitespace
- Strong hierarchy
- Clear CTAs above the fold
- Real, practical copy without exaggeration

## Don'ts
- No emoji decoration
- No "world's best" / "#1" / superlatives
- No low-contrast text
- No neon or pastel gradients
