# Design System

## Color Palette
- Background: `bg-slate-900` (dark navy)
- Card/Surface: `bg-slate-800`
- Input/Secondary Surface: `bg-slate-700`
- Primary Accent: `bg-violet-600`, hover `bg-violet-500`
- Danger/Delete: `text-red-400`, hover `text-red-300`
- Success/Complete: `text-emerald-400`
- Muted Text: `text-slate-400`
- Body Text: `text-slate-100`
- Border: `border-slate-600`

## Typography
- Font Family: Inter (Google Fonts)
- Page Title: `text-3xl font-bold text-white`
- Section Heading: `text-lg font-semibold text-slate-200`
- Body: `text-sm text-slate-300`
- Muted/Helper: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `p-6` on mobile, `p-10` on desktop
- Card padding: `p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-xl mx-auto`

## Borders & Radius
- Cards: `rounded-2xl`
- Inputs: `rounded-xl`
- Buttons: `rounded-xl`
- Todo items: `rounded-xl`

## Shadows
- Cards: `shadow-xl`
- Buttons: `shadow-md`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-xl px-4 py-2 transition-colors`
- Ghost/Danger: `text-red-400 hover:text-red-300 transition-colors`
- Icon button: `p-2 rounded-lg hover:bg-slate-700 transition-colors`

## Inputs
- `bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500`

## Todo Item
- Uncompleted: `bg-slate-700 border border-slate-600`
- Completed: `bg-slate-800 border border-slate-700 opacity-60`
- Completed text: `line-through text-slate-400`

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Keep consistent border-radius across similar elements
- Use violet as the primary brand color

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use default browser button styles
- Don't use pure black (#000) — use slate-900 instead
