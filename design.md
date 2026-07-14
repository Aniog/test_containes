# Design System

## Colors
- Primary: Indigo (`indigo-600`, `indigo-700`) — buttons, accents, links
- Background: White (`white`) for cards/sections, light gray (`gray-50`) for page bg
- Text: Dark gray (`gray-900`) for headings, `gray-600` for body, `gray-400` for muted
- Border: `gray-200` for subtle dividers
- Success: `green-600`
- Error: `red-600`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold` or `font-extrabold`, tight tracking (`tracking-tight`)
- Body: `text-base` or `text-sm`, `text-gray-600`
- Labels: `text-sm font-medium text-gray-700`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6` or `p-8`
- Form gap: `space-y-4` or `space-y-6`

## Borders & Shadows
- Cards: `rounded-2xl shadow-sm border border-gray-200`
- Inputs: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500`
- Buttons: `rounded-lg` with hover transitions

## Do's
- Use `bg-white text-gray-900` for cards on light backgrounds
- Use `bg-indigo-600 text-white` for primary CTAs
- Always set explicit text color on colored backgrounds
- Use responsive grid: single column on mobile, multi-column on desktop

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use light text on light backgrounds
- Don't use single-column stacked layout on desktop
