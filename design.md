# Design System

## Color Palette
- Background: `bg-gray-950` (#030712)
- Surface / Card: `bg-gray-900` (#111827)
- Surface elevated: `bg-gray-800` (#1f2937)
- Border: `border-gray-700`
- Primary accent: `bg-indigo-600` / `text-indigo-400`
- Danger: `bg-red-600` / `text-red-400`
- Success / Completed: `text-green-400` / `line-through`
- Muted text: `text-gray-400`
- Body text: `text-gray-100`

## Typography
- Font family: Inter (Google Fonts)
- Heading: `text-3xl font-bold text-gray-100`
- Subheading: `text-lg font-semibold text-gray-200`
- Body: `text-sm text-gray-300`
- Muted: `text-xs text-gray-500`

## Spacing & Layout
- Page padding: `p-6 md:p-10`
- Card padding: `p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-xl mx-auto`

## Borders & Radius
- Card: `rounded-2xl`
- Input / Button: `rounded-xl`
- Todo item: `rounded-xl`
- Border color: `border border-gray-700`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-4 py-2`
- Danger: `bg-red-600 hover:bg-red-500 text-white rounded-xl px-3 py-1.5`
- Ghost: `text-gray-400 hover:text-gray-100 transition-colors`

## Do's
- Always set explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Use `focus:ring-2 focus:ring-indigo-500` for accessibility
- Keep components under 50 lines

## Don'ts
- Don't use light text on light backgrounds
- Don't use magic hex values — use Tailwind named classes
- Don't use inline styles
