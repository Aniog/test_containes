# Design System

## Color Palette
- Primary: Indigo (`bg-indigo-600`, `text-indigo-600`, `border-indigo-500`)
- Primary hover: `hover:bg-indigo-700`
- Background: Light gray (`bg-gray-50`)
- Surface/Card: White (`bg-white`)
- Border: `border-gray-200`
- Text primary: `text-gray-900`
- Text secondary: `text-gray-500`
- Text muted: `text-gray-400`
- Danger: `text-red-500`, `hover:text-red-600`
- Success/Completed: `text-green-600`, `line-through text-gray-400`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Heading large: `text-3xl font-bold text-gray-900`
- Heading medium: `text-lg font-semibold text-gray-700`
- Body: `text-sm text-gray-700`
- Muted: `text-sm text-gray-400`

## Spacing & Layout
- Page max width: `max-w-2xl mx-auto`
- Page padding: `px-4 py-10`
- Card padding: `p-6`
- Section gap: `space-y-4`
- Item gap: `gap-3`

## Borders & Shadows
- Card: `rounded-2xl shadow-md border border-gray-100`
- Input: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400`
- Button: `rounded-lg`
- Todo item: `rounded-xl border border-gray-100 shadow-sm`

## Components

### Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg transition-colors`
- Ghost/Danger: `text-red-400 hover:text-red-600 transition-colors`
- Secondary: `text-gray-500 hover:text-gray-700 text-sm transition-colors`

### Todo Item
- Uncompleted: `bg-white border border-gray-100 rounded-xl shadow-sm`
- Completed: text uses `line-through text-gray-400`
- Checkbox: custom styled circle toggle

### Input
- `w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-400`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use consistent spacing (multiples of 4px via Tailwind)
- Ensure all text is readable against its background

## Don'ts
- No dark backgrounds for the main app surface
- No hardcoded hex colors in JSX — use Tailwind named classes
- No inline styles
