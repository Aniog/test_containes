# Design System

## Color Palette
- Background: `bg-slate-100` (light gray page background)
- Card/Surface: `bg-white` with `shadow-md rounded-2xl`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` (buttons, checkboxes)
- Danger: `bg-red-500` hover `bg-red-600` (delete actions)
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading text: `text-slate-800`
- Completed item text: `line-through text-slate-400`
- Border: `border-slate-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-800`
- Section labels: `text-sm font-medium text-slate-500 uppercase tracking-wide`
- Body: `text-base text-slate-700`
- Small/muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-100 flex items-start justify-center pt-16 px-4`
- Card: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Stack spacing: `space-y-3`
- Input padding: `px-4 py-3`
- Button padding: `px-4 py-2`

## Components
- Input: `w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400`
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl px-4 py-3 transition-colors`
- Ghost/danger button: `text-slate-400 hover:text-red-500 transition-colors`
- Checkbox: custom styled with indigo accent
- Todo item: `flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group`

## Do's
- Use rounded-xl or rounded-2xl for cards and inputs
- Use transition-colors on interactive elements
- Keep layout centered and constrained (max-w-lg)
- Use subtle shadows for depth

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use harsh red for primary actions
- Don't use very small text for todo items
