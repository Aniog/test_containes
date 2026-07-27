# SSourcing China — Design System

## Brand
- Name: SSourcing China
- Positioning: China-based sourcing agent for overseas B2B buyers.
- Goal: Generate qualified sourcing inquiries.
- Tone: Professional, clear, practical, no exaggerated claims.

## Color Palette
- Primary (brand): `#0f172a` — slate-900 (navy). Used for headings, footer, primary buttons.
- Accent: `#2563eb` — blue-600. CTAs, links, icons, highlights.
- Accent hover: `#1d4ed8` — blue-700.
- Background: `#f8fafc` — slate-50. Main page background.
- Surface: `#ffffff` — white. Cards, nav, forms.
- Muted text: `#64748b` — slate-500. Captions, secondary text.
- Body text: `#334155` — slate-700.
- Border: `#e2e8f0` — slate-200.
- Success: `#16a34a` — green-600.
- Error: `#dc2626` — red-600.

## Typography
- Font: Inter (loaded from Google Fonts in index.html).
- Headings: font-semibold to font-bold, tight line-height, slate-900.
- Body: text-base leading-relaxed, slate-700.
- Small/caption: text-sm text-slate-500.

## Spacing & Layout
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section vertical padding: `py-16 md:py-24`.
- Grid gaps: `gap-6 md:gap-8`.
- Card padding: `p-6`.

## Components
- Buttons:
  - Primary: `bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3 font-medium`.
  - Secondary/Outline: `border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 rounded-lg px-6 py-3`.
- Cards: `bg-white rounded-xl border border-slate-200 shadow-sm p-6`.
- Inputs: `w-full rounded-lg border-slate-300 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500`.
- Badges: `inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium`.

## Imagery
- Use the Strikingly stock-image system (`data-strk-img`, `data-strk-bg`) with realistic factory, QC inspection, shipping, and product visuals.
- Always include a stable `data-strk-img-id` / `data-strk-bg-id`.
- Use a 1x1 SVG placeholder for content images.

## Do's & Don'ts
- Do keep plenty of white space and clear visual hierarchy.
- Do use readable contrast (dark text on light surfaces).
- Do make CTAs prominent and repeated.
- Don't use flashy animations or overuse color.
- Don't use stock-style irrelevant lifestyle images.
