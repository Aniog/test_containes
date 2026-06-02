# Design System

## Color Palette
- Background: `bg-slate-50` (page), `bg-white` (cards)
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` (buttons, checkboxes)
- Danger: `bg-red-500` hover `bg-red-600` (delete actions)
- Warning/Clear: `bg-amber-500` hover `bg-amber-600` (clear completed)
- Text primary: `text-slate-800`
- Text secondary: `text-slate-500`
- Text muted: `text-slate-400`
- Completed text: `line-through text-slate-400`
- Border: `border-slate-200`
- Focus ring: `ring-indigo-500`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-800`
- Section heading: `text-lg font-semibold text-slate-700`
- Body: `text-sm text-slate-700`
- Muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-50 py-10 px-4`
- Card: `bg-white rounded-2xl shadow-sm border border-slate-200 p-6`
- Max width: `max-w-lg mx-auto`
- Gap between items: `gap-2`

## Components
- Input: `border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500`
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 font-medium transition-colors`
- Danger button (icon): `text-slate-400 hover:text-red-500 transition-colors`
- Checkbox: custom styled with indigo accent
- Todo item: `flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all`

## Do's
- Use rounded-lg or rounded-2xl for cards and inputs
- Use shadow-sm for subtle elevation
- Keep the layout single-column, centered
- Use transitions for interactive states

## Don'ts
- No dark backgrounds on the main page
- No hard-coded hex colors — use Tailwind named classes
- No multi-column layouts on mobile
