# Design System

## Visual Style
Clean, modern dark-themed UI with subtle gradients and smooth interactions.

## Colors
- Background: `bg-gray-950` (#030712) — deep dark page background
- Surface/Card: `bg-gray-900` (#111827) — card and panel backgrounds
- Surface elevated: `bg-gray-800` (#1f2937) — input fields, hover states
- Border: `border-gray-700` (#374151) — subtle borders
- Primary accent: `bg-indigo-600` (#4f46e5), hover `bg-indigo-500`
- Success/Complete: `text-green-400`, `bg-green-900/30`
- Danger/Delete: `text-red-400`, hover `text-red-300`
- Muted text: `text-gray-400`
- Body text: `text-gray-100`
- Heading text: `text-white`

## Typography
- Font family: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-white`
- Section labels: `text-sm font-medium text-gray-400 uppercase tracking-wider`
- Body: `text-base text-gray-100`
- Small/meta: `text-sm text-gray-400`

## Spacing & Layout
- Page max width: `max-w-2xl mx-auto`
- Page padding: `px-4 py-10`
- Card padding: `p-6`
- Gap between items: `gap-3`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for checkboxes

## Borders & Shadows
- Cards: `border border-gray-700/50 shadow-xl`
- Inputs: `border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30`

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg px-4 py-2 transition-colors`
- Ghost/danger: `text-red-400 hover:text-red-300 transition-colors`
- Outline: `border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg px-3 py-1.5 text-sm transition-colors`

## Interactions
- Hover transitions: `transition-all duration-200`
- Completed item: `line-through text-gray-500 opacity-60`
- Checkbox: custom styled circle with indigo fill when checked

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` or `transition-all` on interactive elements
- Keep consistent border-radius per element type
- Use `gap` for spacing in flex/grid layouts

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use default browser button styles
- Don't use low-contrast text (e.g. gray-600 on gray-900)
