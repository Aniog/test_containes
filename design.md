# Design System

## Color Palette
- Primary: Indigo `#6366f1` (Tailwind: `indigo-500`)
- Primary Dark: `#4f46e5` (Tailwind: `indigo-600`)
- Background: Light gray `#f8fafc` (Tailwind: `slate-50`)
- Surface: White `#ffffff` (Tailwind: `white`)
- Border: `#e2e8f0` (Tailwind: `slate-200`)
- Text Primary: `#1e293b` (Tailwind: `slate-800`)
- Text Secondary: `#64748b` (Tailwind: `slate-500`)
- Text Muted: `#94a3b8` (Tailwind: `slate-400`)
- Success: `#22c55e` (Tailwind: `green-500`)
- Warning: `#f59e0b` (Tailwind: `amber-500`)
- Danger: `#ef4444` (Tailwind: `red-500`)

## Priority Colors
- High: Red `text-red-500 bg-red-50`
- Medium: Amber `text-amber-500 bg-amber-50`
- Low: Green `text-green-500 bg-green-50`

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-slate-800`
- Section Heading: `text-lg font-semibold text-slate-700`
- Body: `text-sm text-slate-700`
- Muted: `text-sm text-slate-500`
- Label: `text-xs font-medium text-slate-500 uppercase tracking-wide`

## Spacing
- Page padding: `px-4 py-6` (mobile), `px-6 py-8` (desktop)
- Card padding: `p-4` (mobile), `p-6` (desktop)
- Section gap: `gap-4`
- Item gap: `gap-2`

## Borders & Radius
- Card: `rounded-xl border border-slate-200 shadow-sm`
- Input: `rounded-lg border border-slate-300`
- Button: `rounded-lg`
- Badge: `rounded-full`

## Shadows
- Card: `shadow-sm`
- Elevated: `shadow-md`

## Buttons
- Primary: `bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg transition-colors`
- Ghost: `text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors`
- Danger: `text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `transition-colors` on interactive elements
- Use `slate-*` for neutral text and borders
- Use `indigo-*` for primary actions
- Ensure all text has sufficient contrast

## Don'ts
- Don't use dark backgrounds with dark text
- Don't use light text on light backgrounds
- Don't use arbitrary hex values — use named Tailwind colors
- Don't use inline styles for colors
