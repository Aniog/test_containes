# Design System

## Color Palette
- Background: `bg-gray-950` (#030712) — deep dark page background
- Surface/Card: `bg-gray-900` (#111827) — card and panel backgrounds
- Surface elevated: `bg-gray-800` (#1f2937) — input fields, hover states
- Border: `border-gray-700` (#374151)
- Primary accent: `bg-indigo-600` / `text-indigo-400` — action buttons, highlights
- Danger: `bg-red-600` / `text-red-400` — delete actions
- Success/Complete: `text-emerald-400` / `line-through` — completed tasks
- Text primary: `text-gray-100`
- Text secondary: `text-gray-400`
- Text muted: `text-gray-500`

## Typography
- Font family: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-gray-100`
- Section heading: `text-lg font-semibold text-gray-200`
- Body: `text-sm text-gray-300`
- Muted/label: `text-xs text-gray-500`

## Spacing & Layout
- Page max width: `max-w-lg mx-auto`
- Card padding: `p-6`
- Section gap: `gap-4`
- Item gap: `gap-2`

## Borders & Radius
- Card: `rounded-2xl`
- Button: `rounded-lg`
- Input: `rounded-lg`
- Checkbox: `rounded`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg px-4 py-2 transition-colors`
- Ghost/icon: `text-gray-400 hover:text-red-400 transition-colors`
- Filter active: `bg-indigo-600 text-white rounded-md px-3 py-1 text-sm`
- Filter inactive: `text-gray-400 hover:text-gray-200 rounded-md px-3 py-1 text-sm`

## Inputs
- `bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Keep components small and focused
- Use Tailwind utility classes exclusively

## Don'ts
- No light backgrounds on dark theme
- No invisible text (e.g. dark text on dark bg)
- No hardcoded hex values in JSX — use Tailwind named classes
