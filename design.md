# Design System

## Colors
- Background: white (`bg-white`)
- Page background: light gray (`bg-gray-50`)
- Primary accent: blue (`bg-blue-600`, `text-blue-600`)
- Text primary: dark gray (`text-gray-900`)
- Text secondary: medium gray (`text-gray-500`)
- Border: light gray (`border-gray-200`)
- Danger: red (`text-red-500`, `bg-red-50`)

## Typography
- Font: system sans-serif (Inter via Google Fonts)
- Page title: `text-2xl font-bold text-gray-900`
- Section title: `text-lg font-semibold text-gray-800`
- Body: `text-sm text-gray-700`
- Label: `text-xs text-gray-500 uppercase tracking-wide`

## Spacing
- Page padding: `p-4 md:p-6`
- Card padding: `p-4`
- Gap between items: `gap-3` or `gap-4`

## Components
- Cards: `bg-white rounded-lg border border-gray-200 p-4`
- Buttons primary: `bg-blue-600 text-white rounded px-3 py-1.5 text-sm hover:bg-blue-700`
- Buttons ghost/danger: `text-red-500 hover:bg-red-50 rounded px-2 py-1 text-sm`
- Inputs: `border border-gray-300 rounded px-3 py-1.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500`
- Dividers: `border-t border-gray-100`

## Layout
- Single page, two-column on desktop: left panel (plan list) + right panel (plan detail)
- Mobile: stacked single column
- Max width: `max-w-5xl mx-auto`

## Do's
- Keep UI minimal and clean
- Use consistent spacing
- Show loading states with subtle text

## Don'ts
- No heavy shadows or gradients
- No complex animations
- No unnecessary decorative elements
