# Design System

## Color Palette
- Background: `bg-slate-100` (light gray page background)
- Card/Surface: `bg-white` with `shadow-sm` and `rounded-xl`
- Primary accent: `bg-indigo-600` / `text-indigo-600` (buttons, active states)
- Primary hover: `hover:bg-indigo-700`
- Danger: `text-red-500` / `hover:text-red-600`
- Success/Complete: `text-emerald-600` / `bg-emerald-50`
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Headings: `text-slate-900`
- Border: `border-slate-200`

## Priority Colors
- High: `text-red-600 bg-red-50 border-red-200`
- Medium: `text-amber-600 bg-amber-50 border-amber-200`
- Low: `text-sky-600 bg-sky-50 border-sky-200`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section heading: `text-lg font-semibold text-slate-800`
- Body: `text-sm text-slate-700`
- Muted/helper: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `px-4 py-8` on mobile, `px-6 py-10` on md+
- Max content width: `max-w-2xl mx-auto`
- Card padding: `p-4` or `p-5`
- Gap between items: `gap-3`

## Borders & Radius
- Cards: `rounded-xl`
- Inputs: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg`
- Ghost/icon: `text-slate-400 hover:text-slate-600 p-1 rounded`
- Danger ghost: `text-red-400 hover:text-red-600 p-1 rounded`

## Do's
- Use consistent spacing with Tailwind gap/padding utilities
- Use `transition-colors` on interactive elements
- Keep cards clean with subtle shadows
- Use badges for priority and status

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use raw hex colors — use Tailwind named classes
- Don't use overly large font sizes for list items
