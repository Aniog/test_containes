# Design System — Todo App

## Color Palette
- Background: `bg-slate-100` (light gray page background)
- Card/Surface: `bg-white` with `shadow-md rounded-2xl`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` (buttons, checkboxes)
- Danger: `bg-red-500` hover `bg-red-600` (delete actions)
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading: `text-slate-800`
- Completed item text: `line-through text-slate-400`
- Filter active tab: `bg-indigo-600 text-white`
- Filter inactive tab: `bg-white text-slate-600 hover:bg-slate-50`

## Typography
- Font: Inter (Google Fonts)
- App title: `text-3xl font-bold text-slate-800`
- Todo item text: `text-base text-slate-700`
- Counter/meta: `text-sm text-slate-500`
- Button labels: `text-sm font-medium`

## Spacing & Layout
- Page: `min-h-screen bg-slate-100 flex items-start justify-center pt-16 px-4`
- Card container: `w-full max-w-lg`
- Section padding: `p-6`
- Item row: `flex items-center gap-3 py-3 px-4`
- Dividers between items: `divide-y divide-slate-100`

## Borders & Radius
- Card: `rounded-2xl`
- Input: `rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-400`
- Buttons: `rounded-lg`
- Checkbox: `rounded`

## Shadows
- Card: `shadow-md`
- Input focus: ring only, no shadow

## Do's
- Use Tailwind utility classes exclusively
- Keep item rows clean with subtle hover states (`hover:bg-slate-50`)
- Use smooth transitions on interactive elements (`transition-colors duration-150`)
- Show empty state when no todos match the current filter

## Don'ts
- No hardcoded hex colors — use Tailwind named colors
- No inline styles
- No dark mode toggle (light-only design)
- No overly complex animations
