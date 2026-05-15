# Design System

## Visual Style
Clean, modern dark-themed UI with subtle gradients and smooth interactions.

## Colors
- Background: `bg-gray-900` (#111827)
- Surface/Card: `bg-gray-800` (#1f2937)
- Surface elevated: `bg-gray-750` / `bg-gray-700`
- Primary accent: `bg-indigo-500` / `bg-indigo-600` (hover)
- Success/Complete: `bg-emerald-500`
- Danger/Delete: `bg-red-500` / `text-red-400`
- Text primary: `text-white`
- Text secondary: `text-gray-400`
- Text muted: `text-gray-500`
- Border: `border-gray-700`

## Typography
- Font: Inter (Google Fonts)
- Heading: `text-2xl font-bold text-white`
- Subheading: `text-lg font-semibold text-white`
- Body: `text-sm text-gray-300`
- Muted: `text-xs text-gray-500`

## Spacing
- Page padding: `p-4 md:p-8`
- Card padding: `p-4 md:p-6`
- Section gap: `gap-4`
- Item gap: `gap-2`

## Borders & Radius
- Card: `rounded-xl border border-gray-700`
- Button: `rounded-lg`
- Input: `rounded-lg border border-gray-600`
- Badge: `rounded-full`

## Shadows
- Card: `shadow-lg`
- Button hover: subtle lift with `hover:shadow-md`

## Interactions
- Hover transitions: `transition-all duration-200`
- Completed items: `line-through text-gray-500 opacity-60`
- Checkbox: custom styled with indigo accent

## Do's
- Use dark backgrounds with light text for readability
- Use indigo as the primary action color
- Use emerald for success/completion states
- Use red for destructive actions
- Keep spacing consistent with Tailwind scale

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use low-contrast text on dark surfaces
- Don't use raw hex values — use Tailwind named colors
