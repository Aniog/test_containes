# Design System

## Color Palette
- Background: `bg-slate-50` (#f8fafc)
- Surface/Card: `bg-white` with `shadow-sm` and `border border-slate-200`
- Primary: `bg-indigo-600` text `text-white` — buttons, accents
- Primary hover: `hover:bg-indigo-700`
- Danger: `bg-red-500` / `text-red-600`
- Muted text: `text-slate-500`
- Body text: `text-slate-800`
- Heading text: `text-slate-900`
- Border: `border-slate-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-slate-900`
- Section heading: `text-lg font-semibold text-slate-800`
- Body: `text-sm text-slate-700`
- Muted/helper: `text-xs text-slate-500`

## Spacing & Layout
- Page padding: `px-4 py-6 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-2xl mx-auto`

## Borders & Radius
- Cards: `rounded-xl border border-slate-200 shadow-sm`
- Inputs: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg`
- Ghost/secondary: `bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg`
- Danger: `bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg`
- Icon button: `p-2 rounded-lg hover:bg-slate-100 text-slate-500`

## Status Badges
- Todo: `bg-slate-100 text-slate-600`
- In Progress: `bg-blue-100 text-blue-700`
- Done: `bg-green-100 text-green-700`

## Priority Badges
- Low: `bg-slate-100 text-slate-500`
- Medium: `bg-amber-100 text-amber-700`
- High: `bg-red-100 text-red-600`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `text-slate-900` or `text-slate-800` for all readable content
- Use `shadow-sm` on cards for subtle depth
- Keep forms clean with clear labels above inputs

## Don'ts
- Don't use light text on light backgrounds
- Don't use `text-white` on white cards
- Don't use arbitrary hex values — use Tailwind named colors
