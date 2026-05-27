# Design System

## Color Palette
- Primary: Indigo `#6366f1` (Tailwind: `indigo-500`)
- Primary Dark: `#4f46e5` (Tailwind: `indigo-600`)
- Background: Light gray `#f8fafc` (Tailwind: `slate-50`)
- Card Background: White `#ffffff`
- Text Primary: `#1e293b` (Tailwind: `slate-800`)
- Text Secondary: `#64748b` (Tailwind: `slate-500`)
- Border: `#e2e8f0` (Tailwind: `slate-200`)
- Success: `#22c55e` (Tailwind: `green-500`)
- Danger: `#ef4444` (Tailwind: `red-500`)

## Typography
- Font Family: Inter (Google Fonts)
- Heading: `text-2xl font-bold text-slate-800`
- Subheading: `text-lg font-semibold text-slate-700`
- Body: `text-sm text-slate-600`
- Muted: `text-xs text-slate-400`

## Spacing
- Page padding: `p-6` or `px-4 py-8`
- Card padding: `p-6`
- Section gap: `gap-4`
- Item gap: `gap-2`

## Borders & Radius
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Button: `rounded-lg`
- Input: `rounded-lg border border-slate-200`
- Badge: `rounded-full`

## Shadows
- Card: `shadow-sm`
- Elevated: `shadow-md`

## Buttons
- Primary: `bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-2 font-medium transition-colors`
- Ghost: `text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg p-2 transition-colors`
- Danger: `text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg p-2 transition-colors`

## Do's
- Use consistent spacing with Tailwind utility classes
- Use `transition-colors` for interactive elements
- Use `slate` color scale for neutral text and borders
- Use `indigo` as the primary accent color

## Don'ts
- Don't use hardcoded hex values in JSX class strings
- Don't use inline styles
- Don't mix different color scales for the same semantic purpose
