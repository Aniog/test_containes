# Design System

## Color Palette
- Background: `bg-slate-100` (light gray page background)
- Card/Surface: `bg-white` with `shadow-md rounded-2xl`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` (buttons, checkboxes)
- Danger: `bg-red-500` hover `bg-red-600` (delete actions)
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading text: `text-slate-900`
- Completed item text: `line-through text-slate-400`
- Border: `border-slate-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section labels: `text-sm font-semibold text-slate-500 uppercase tracking-wide`
- Body: `text-base text-slate-700`
- Small/muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-100 flex items-start justify-center py-12 px-4`
- Card container: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Item rows: `flex items-center gap-3 py-3 border-b border-slate-100`
- Button padding: `px-4 py-2` for standard, `p-2` for icon-only

## Components
- Input: `w-full border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400`
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2 transition-colors`
- Ghost/danger button: `text-red-400 hover:text-red-600 transition-colors`
- Checkbox: custom styled with indigo accent
- Badge (count): `bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full px-2 py-0.5`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use smooth transitions on interactive elements
- Show empty states with helpful messages

## Don'ts
- No hardcoded hex colors — use Tailwind named colors
- No inline styles
- No dark text on dark backgrounds
