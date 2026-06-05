# Design System

## Color Palette
- Background: `bg-slate-100` (light gray page background)
- Card/Surface: `bg-white` with `shadow-md rounded-2xl`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` (buttons, checkboxes)
- Danger: `bg-red-500` hover `bg-red-600`
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading text: `text-slate-900`
- Completed item text: `line-through text-slate-400`
- Border: `border-slate-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section labels: `text-sm font-medium text-slate-500 uppercase tracking-wide`
- Body: `text-base text-slate-700`
- Small/muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-100 flex items-start justify-center pt-16 px-4`
- Card: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Stack spacing: `space-y-3`
- Input + button row: `flex gap-2`

## Components
- Input: `flex-1 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400`
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-4 py-2 transition-colors`
- Danger button: `bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-4 py-2 transition-colors`
- Ghost/icon button: `text-slate-400 hover:text-red-500 transition-colors`
- Checkbox: custom styled circle toggle
- Badge: `text-xs font-medium px-2 py-0.5 rounded-full`

## Do's
- Use rounded-lg or rounded-2xl for cards and inputs
- Use transition-colors on interactive elements
- Keep the layout centered and constrained to max-w-lg
- Use clear visual separation between todo items

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use very small text for todo titles
- Don't use too many colors — keep it clean and minimal
