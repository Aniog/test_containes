# Design System

## Color Palette
- Background: `bg-slate-50` (light gray page background)
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
- Section labels: `text-sm font-medium text-slate-500 uppercase tracking-wide`
- Body: `text-base text-slate-700`
- Small/muted: `text-sm text-slate-400`

## Spacing & Layout
- Page: `min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4`
- Card: `w-full max-w-lg bg-white rounded-2xl shadow-md p-6`
- Item rows: `flex items-center gap-3 py-3 border-b border-slate-100`
- Button padding: `px-4 py-2` for standard, `p-2` for icon-only

## Borders & Shadows
- Card shadow: `shadow-md`
- Input focus: `focus:ring-2 focus:ring-indigo-400 focus:outline-none`
- Rounded inputs: `rounded-lg`
- Rounded buttons: `rounded-lg`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use indigo as the primary brand color
- Show empty states with helpful messages

## Don'ts
- No inline styles
- No hardcoded hex colors outside Tailwind config
- No magic pixel values
