# Design System

## Color Palette
- Background: `bg-gray-50` (page), `bg-white` (card)
- Primary accent: `bg-indigo-600` hover `bg-indigo-700`
- Danger: `bg-red-500` hover `bg-red-600`
- Success / completed: `text-gray-400 line-through`
- Border: `border-gray-200`
- Muted text: `text-gray-400`
- Body text: `text-gray-700`
- Heading: `text-gray-900`

## Typography
- Font: Inter (system fallback)
- Page title: `text-3xl font-bold text-gray-900`
- Section label: `text-sm font-medium text-gray-500 uppercase tracking-wide`
- Body: `text-base text-gray-700`
- Small / meta: `text-sm text-gray-400`

## Spacing & Layout
- Page: `min-h-screen bg-gray-50 flex items-start justify-center pt-16 px-4`
- Card: `bg-white rounded-2xl shadow-md p-6 w-full max-w-lg`
- Stack gap: `space-y-3`

## Borders & Radius
- Card: `rounded-2xl`
- Input / button: `rounded-lg`
- Todo item: `rounded-xl border border-gray-200`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2 transition-colors`
- Ghost danger: `text-red-400 hover:text-red-600 transition-colors`
- Ghost muted: `text-gray-400 hover:text-gray-600 transition-colors`

## Do's
- Always set explicit text color on colored backgrounds
- Use `transition-colors` on interactive elements
- Keep todo items visually distinct with a border and padding

## Don'ts
- No dark backgrounds on the main page
- No invisible text (e.g. white on white)
- No magic hex values — use Tailwind named classes only
