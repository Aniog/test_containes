# Design System — TODO App

## Color Palette
- Background: `bg-gray-950` (#030712) — deep dark page background
- Surface/Card: `bg-gray-900` (#111827) — card and panel backgrounds
- Surface elevated: `bg-gray-800` (#1f2937) — input fields, hover states
- Border: `border-gray-700` (#374151)
- Primary accent: `bg-violet-600` (#7c3aed), hover `bg-violet-500`
- Danger: `bg-red-600` (#dc2626), hover `bg-red-500`
- Success/Complete: `text-green-400` (#4ade80)
- Muted text: `text-gray-400` (#9ca3af)
- Body text: `text-gray-100` (#f3f4f6)
- Placeholder text: `placeholder-gray-500`

## Typography
- Font family: Inter (loaded via Google Fonts in index.html)
- Page title: `text-3xl font-bold text-white`
- Section labels: `text-sm font-semibold text-gray-400 uppercase tracking-wider`
- Body / todo text: `text-base text-gray-100`
- Completed todo text: `line-through text-gray-500`
- Button text: `text-sm font-medium`

## Spacing & Layout
- Page max width: `max-w-xl mx-auto`
- Page padding: `px-4 py-10`
- Card padding: `p-6`
- Gap between items: `gap-3`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for checkboxes

## Borders & Shadows
- Card border: `border border-gray-700`
- Card shadow: `shadow-xl`
- Input border: `border border-gray-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500`

## Buttons
- Primary (Add): `bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-4 py-2 transition-colors`
- Danger (Delete / Clear): `text-red-400 hover:text-red-300 transition-colors`
- Ghost/Muted: `text-gray-400 hover:text-gray-200 transition-colors`

## Checkbox / Toggle
- Unchecked: `w-5 h-5 rounded-full border-2 border-gray-600`
- Checked: `w-5 h-5 rounded-full bg-violet-600 border-2 border-violet-600 flex items-center justify-center`

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Keep todo items visually distinct with subtle hover backgrounds
- Show empty state when no todos exist

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use default browser button styles
- Don't use low-contrast gray-on-gray text combinations
