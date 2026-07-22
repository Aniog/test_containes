# Design System — Todo App

## Color Palette
- Background: `bg-slate-50` (page), `bg-white` (cards)
- Primary accent: `bg-indigo-600` hover `bg-indigo-700`, text `text-indigo-600`
- Success / completed: `text-emerald-600`, `bg-emerald-50`
- Danger / delete: `text-red-500`, hover `text-red-600`
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Headings: `text-slate-900`
- Border: `border-slate-200`

## Priority Colors
- High: `bg-red-100 text-red-700`
- Medium: `bg-amber-100 text-amber-700`
- Low: `bg-sky-100 text-sky-700`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section heading: `text-lg font-semibold text-slate-800`
- Body: `text-sm text-slate-700`
- Muted: `text-xs text-slate-400`

## Spacing & Layout
- Page max width: `max-w-2xl mx-auto`
- Card padding: `p-5`
- Gap between items: `gap-3`
- Input/button height: `h-10`

## Borders & Shadows
- Card: `rounded-xl border border-slate-200 shadow-sm`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500`
- Button primary: `rounded-lg bg-indigo-600 text-white hover:bg-indigo-700`

## Do's
- Always use Tailwind classes, no inline styles
- Use `text-slate-700` or darker for all readable content
- Use `bg-white` cards on `bg-slate-50` page background
- Completed items use `line-through text-slate-400`

## Don'ts
- Don't use light text on light backgrounds
- Don't use `text-white` on white cards
- Don't use arbitrary hex values — use Tailwind named colors
