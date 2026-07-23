# Design System

## Color Palette
- Background: `bg-slate-100` (page), `bg-white` (cards/panels)
- Primary accent: `bg-indigo-600` hover `bg-indigo-700`, text `text-indigo-600`
- Danger: `bg-red-500` hover `bg-red-600`, text `text-red-500`
- Success: `text-emerald-600`, `bg-emerald-50`
- Muted text: `text-slate-400`, `text-slate-500`
- Body text: `text-slate-700`, `text-slate-800`
- Borders: `border-slate-200`, `border-slate-300`

## Priority Colors
- High: `text-red-600 bg-red-50 border-red-200`
- Medium: `text-amber-600 bg-amber-50 border-amber-200`
- Low: `text-emerald-600 bg-emerald-50 border-emerald-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-800`
- Section heading: `text-lg font-semibold text-slate-700`
- Body: `text-sm text-slate-700`
- Muted: `text-sm text-slate-400`

## Spacing & Layout
- Page padding: `px-4 py-8 max-w-2xl mx-auto`
- Card: `bg-white rounded-xl shadow-sm border border-slate-200 p-4`
- Gap between items: `gap-3`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors`
- Ghost/icon: `text-slate-400 hover:text-slate-600 transition-colors`
- Danger: `text-red-400 hover:text-red-600 transition-colors`

## Inputs
- `border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Do's
- Use rounded-xl for cards, rounded-lg for buttons/inputs
- Use shadow-sm for subtle elevation
- Keep consistent spacing with gap-3 / space-y-3
- Use transition-colors on interactive elements

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use raw hex codes — use Tailwind named colors
- Don't mix font sizes arbitrarily
