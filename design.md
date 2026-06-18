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
- Section labels: `text-sm font-semibold text-slate-500 uppercase tracking-wide`
- Body: `text-base text-slate-700`
- Small/muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4`
- Card: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Stack spacing: `space-y-3`
- Input/button height: `h-11`

## Borders & Radius
- Card: `rounded-2xl`
- Inputs: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400`
- Buttons: `rounded-lg`
- Checkbox: `rounded`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use indigo as the primary brand color
- Show empty states with helpful messages
- Animate transitions with `transition-all duration-200`

## Don'ts
- No inline styles
- No hardcoded hex colors outside Tailwind config
- No dark mode overrides (light-only design)
