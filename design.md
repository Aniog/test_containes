# Design System

## Color Palette
- Background: `bg-gray-950` (#030712) — deep dark page background
- Surface/Card: `bg-gray-900` (#111827) — card and panel backgrounds
- Surface elevated: `bg-gray-800` (#1f2937) — input fields, hover states
- Border: `border-gray-700` (#374151)
- Primary accent: `bg-indigo-600` (#4f46e5), hover `bg-indigo-500`
- Success/Complete: `text-emerald-400` (#34d399)
- Danger/Delete: `text-red-400` (#f87171), hover `text-red-300`
- Muted text: `text-gray-400` (#9ca3af)
- Body text: `text-gray-100` (#f3f4f6)
- Heading text: `text-white`

## Typography
- Font family: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-white`
- Section labels: `text-sm font-medium text-gray-400 uppercase tracking-wider`
- Body: `text-base text-gray-100`
- Muted/helper: `text-sm text-gray-400`

## Spacing & Layout
- Page max width: `max-w-xl mx-auto`
- Page padding: `px-4 py-10`
- Card padding: `p-6`
- Gap between items: `gap-3`

## Borders & Radius
- Cards: `rounded-2xl`
- Inputs: `rounded-xl`
- Buttons: `rounded-xl`
- Todo items: `rounded-xl`

## Shadows
- Cards: `shadow-xl`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl px-4 py-2 transition`
- Ghost/icon: `text-gray-400 hover:text-red-400 transition`

## Inputs
- `bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500`

## Todo Item
- Uncompleted: `bg-gray-800 border border-gray-700`
- Completed: `bg-gray-800/50 border border-gray-700/50 opacity-70`
- Completed text: `line-through text-gray-500`

## Do's
- Always set explicit text colors on dark surfaces
- Use `transition` on interactive elements
- Keep layout single-column on all screen sizes for this app
- Use `gap` utilities for spacing lists

## Don'ts
- Don't use white backgrounds
- Don't use default browser button styles
- Don't leave text color implicit on dark cards
