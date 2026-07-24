# Design System

## Visual Style
Modern, calm, professional landing page with a light "airy" aesthetic. Generous whitespace, soft shadows, rounded corners, and a single confident accent color.

## Colors (Tailwind)
- Page background: `bg-slate-50`
- Surface / cards: `bg-white` with `border border-slate-200` and `shadow-sm`
- Primary text: `text-slate-900`
- Secondary text: `text-slate-600`
- Muted text: `text-slate-500`
- Accent (primary actions, highlights): `indigo-600` (hover `indigo-700`), soft accent fills `bg-indigo-50` with `text-indigo-700`
- Dark footer band: `bg-slate-900` with `text-slate-300` body text and `text-white` headings

## Typography
- Font: Inter (loaded in index.html)
- Hero headline: `text-4xl md:text-6xl font-bold tracking-tight`
- Section headings: `text-3xl md:text-4xl font-bold tracking-tight`
- Body: `text-base md:text-lg leading-relaxed`
- Eyebrow labels: `text-sm font-semibold uppercase tracking-widest text-indigo-600`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto px-6`
- Section vertical padding: `py-20 md:py-28`
- Cards: `rounded-2xl p-6 md:p-8`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Buttons: primary `bg-indigo-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-indigo-700 transition`; secondary `bg-white text-slate-900 border border-slate-300 rounded-full px-6 py-3 font-semibold hover:border-slate-400 transition`
- Badges/pills: `rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium px-4 py-1.5`
- Images: `rounded-2xl object-cover`

## Do's and Don'ts
- Do keep text high-contrast: dark text on light surfaces, light text on the dark footer.
- Do use one accent color consistently for interactive elements.
- Don't use pure black backgrounds or harsh saturated backgrounds for large areas.
- Don't stack everything in a single column on desktop — use 2-3 column grids for features and cards.
- Don't leave low-contrast gray text below `slate-500` on light backgrounds.
