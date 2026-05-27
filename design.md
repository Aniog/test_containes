# Design System

## Color Palette
- Primary: Indigo (`bg-indigo-600`, `text-indigo-600`, `border-indigo-500`)
- Primary Hover: `hover:bg-indigo-700`
- Background: Light gray (`bg-gray-50`)
- Surface / Card: White (`bg-white`)
- Border: `border-gray-200`
- Text Primary: `text-gray-900`
- Text Secondary: `text-gray-500`
- Text Muted: `text-gray-400`
- Success / Done: `text-green-600`, `bg-green-50`
- Danger: `text-red-500`, `hover:text-red-600`

## Typography
- Font Family: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-gray-900`
- Section Heading: `text-lg font-semibold text-gray-800`
- Body: `text-sm text-gray-700`
- Muted / Helper: `text-xs text-gray-400`

## Spacing & Layout
- Page padding: `p-6` or `px-4 py-6`
- Card padding: `p-4` or `p-6`
- Gap between items: `gap-3` or `gap-4`
- Max content width: `max-w-xl mx-auto`

## Borders & Radius
- Card: `rounded-xl shadow-sm border border-gray-200`
- Input: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500`
- Button: `rounded-lg`
- Badge: `rounded-full`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-lg`
- Ghost / Icon: `text-gray-400 hover:text-red-500 transition-colors`

## Do's
- Always set explicit text color on colored backgrounds
- Use `transition-colors` on interactive elements
- Use `line-through text-gray-400` for completed todo text
- Keep components small and focused

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use inline styles
- Don't hardcode hex colors — use Tailwind named classes
