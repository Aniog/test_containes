# Design System

## Color Palette
- Background: `bg-slate-50` (page), `bg-white` (card)
- Primary accent: `bg-indigo-600` hover `bg-indigo-700`
- Danger: `bg-red-500` hover `bg-red-600`
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading: `text-slate-900`
- Completed text: `text-slate-400 line-through`
- Border: `border-slate-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Subtitle: `text-sm text-slate-500`
- Body: `text-sm text-slate-700`
- Button label: `text-sm font-medium`

## Spacing & Layout
- Page: `min-h-screen bg-slate-50 flex items-start justify-center pt-16 px-4`
- Card: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Section gap: `space-y-4`
- Item gap: `space-y-2`

## Components

### Input
- `w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500`

### Primary Button
- `bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors`

### Ghost/Danger Button
- `text-red-500 hover:text-red-700 transition-colors`

### Todo Item
- `flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3`
- Checkbox: custom styled circle toggle
- Completed state: `opacity-60`

## Do's
- Use rounded-xl / rounded-2xl for cards and items
- Use shadow-md on the main card
- Keep consistent 4px spacing scale via Tailwind

## Don'ts
- No dark backgrounds on the main page
- No invisible text (always pair foreground with background)
- No magic hex values — use Tailwind named colors
