# Design System

## Color Palette
- Primary: Indigo (`bg-indigo-600`, `text-indigo-600`, `border-indigo-500`)
- Primary hover: `hover:bg-indigo-700`
- Background: Light gray (`bg-gray-50`)
- Card/Surface: White (`bg-white`)
- Text primary: Dark gray (`text-gray-900`)
- Text secondary: Medium gray (`text-gray-500`)
- Text muted: Light gray (`text-gray-400`)
- Border: `border-gray-200`
- Danger: Red (`text-red-500`, `hover:text-red-600`, `bg-red-50`)
- Success/Complete: Green (`text-green-600`, `bg-green-50`)

## Typography
- Font: Inter (system-ui fallback)
- Page title: `text-3xl font-bold text-gray-900`
- Section heading: `text-lg font-semibold text-gray-700`
- Body: `text-sm text-gray-700`
- Muted: `text-sm text-gray-400`

## Spacing
- Page padding: `px-4 py-8` on mobile, `px-6 py-10` on md+
- Card padding: `p-6`
- Item padding: `px-4 py-3`
- Gap between items: `gap-2` or `space-y-2`

## Borders & Shadows
- Card: `rounded-2xl shadow-md border border-gray-100`
- Input: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400`
- Button: `rounded-lg`
- Todo item: `rounded-xl border border-gray-100`

## Component Styles
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-2`
- Ghost/text button: `text-gray-500 hover:text-red-500 transition-colors`
- Checkbox: Custom styled with indigo accent
- Completed todo text: `line-through text-gray-400`

## Do's
- Use rounded corners consistently (`rounded-lg`, `rounded-xl`, `rounded-2xl`)
- Use subtle shadows for cards
- Use indigo as the primary accent color
- Ensure all text is readable against its background
- Use transitions for interactive elements

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use very small text (below `text-sm`)
- Don't use low-contrast color combinations
