# Design System

## Color Palette
- Primary: Indigo (#6366f1) — `bg-indigo-600`, `text-indigo-600`
- Primary hover: `hover:bg-indigo-700`
- Background: White `bg-white`, Light gray `bg-gray-50`
- Surface/Card: `bg-white border border-gray-200 rounded-xl shadow-sm`
- Text primary: `text-gray-900`
- Text secondary: `text-gray-500`
- Text muted: `text-gray-400`
- Danger: `text-red-600`, `bg-red-50`
- Success: `text-green-600`, `bg-green-50`
- Warning: `text-amber-600`, `bg-amber-50`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-gray-900`
- Section title: `text-lg font-semibold text-gray-900`
- Label: `text-sm font-medium text-gray-700`
- Body: `text-sm text-gray-600`
- Muted: `text-xs text-gray-400`

## Spacing
- Page padding: `px-6 py-8` (desktop), `px-4 py-6` (mobile)
- Card padding: `p-6`
- Form gap: `gap-4`
- Section gap: `gap-6`

## Components
- Button primary: `bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`
- Button secondary: `bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors`
- Button danger: `bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`
- Input: `w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`
- Badge active: `bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium`
- Badge inactive: `bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium`
- Card: `bg-white border border-gray-200 rounded-xl shadow-sm`

## Layout
- Sidebar nav: fixed left, `w-64`, `bg-white border-r border-gray-200`
- Main content: `ml-64 min-h-screen bg-gray-50`
- Mobile: sidebar collapses to top nav

## Do's
- Always use explicit text colors on colored backgrounds
- Use rounded-xl for cards, rounded-lg for inputs/buttons
- Consistent 4px spacing grid via Tailwind

## Don'ts
- No hardcoded hex values in JSX
- No inline styles
- No dark text on dark backgrounds
