# Design System

## Color Palette
- Background: `bg-gray-950` (#030712)
- Surface / Card: `bg-gray-900` (#111827)
- Surface elevated: `bg-gray-800` (#1f2937)
- Border: `border-gray-700`
- Primary accent: `bg-violet-600` / `text-violet-400`
- Danger: `text-red-400` / `bg-red-500`
- Success / Completed: `text-emerald-400` / `line-through`
- Muted text: `text-gray-400`
- Body text: `text-gray-100`

## Typography
- Font family: Inter (Google Fonts)
- Headings: `text-2xl font-bold text-gray-100`
- Body: `text-sm text-gray-300`
- Muted: `text-xs text-gray-500`

## Spacing & Layout
- Page padding: `p-4 md:p-8`
- Card padding: `p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-xl mx-auto`

## Borders & Radius
- Cards: `rounded-2xl`
- Inputs: `rounded-xl`
- Buttons: `rounded-xl`
- Todo items: `rounded-xl`

## Shadows
- Cards: `shadow-xl shadow-black/40`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-500 text-white font-semibold`
- Ghost/icon: `text-gray-400 hover:text-red-400 transition-colors`
- Filter active: `bg-violet-600 text-white`
- Filter inactive: `bg-gray-800 text-gray-400 hover:bg-gray-700`

## Inputs
- `bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-xl px-4 py-2`

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Use `line-through text-gray-500` for completed tasks
- Keep components small and focused

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use default browser button styles
- Don't leave text color implicit on colored backgrounds
