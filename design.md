# Design System

## Color Palette
- **Primary**: Indigo — `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- **Primary Light**: `bg-indigo-50`, `text-indigo-700`
- **Accent**: `bg-indigo-100`
- **Background**: White `bg-white`, Light gray `bg-gray-50`
- **Surface**: `bg-white` with `shadow-sm` or `shadow-md`
- **Text Primary**: `text-gray-900`
- **Text Secondary**: `text-gray-600`
- **Text Muted**: `text-gray-400`
- **Border**: `border-gray-200`
- **Success**: `text-green-600`, `bg-green-50`
- **Error**: `text-red-600`, `bg-red-50`

## Typography
- **Font**: Inter (loaded via Google Fonts in index.html)
- **Hero Heading**: `text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900`
- **Section Heading**: `text-3xl font-bold text-gray-900`
- **Card Heading**: `text-xl font-semibold text-gray-900`
- **Body**: `text-base text-gray-600`
- **Small / Caption**: `text-sm text-gray-500`
- **Label**: `text-sm font-medium text-gray-700`

## Spacing
- **Section padding**: `py-16 md:py-24`
- **Container**: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Card padding**: `p-6` or `p-8`
- **Form field gap**: `space-y-4`
- **Grid gap**: `gap-6` or `gap-8`

## Borders & Radius
- **Card**: `rounded-2xl`
- **Button**: `rounded-lg`
- **Input**: `rounded-lg`
- **Badge**: `rounded-full`

## Shadows
- **Card**: `shadow-sm` default, `shadow-md` on hover
- **Button**: no shadow by default, `shadow-sm` on primary

## Buttons
- **Primary**: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors`
- **Secondary/Outline**: `border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors`
- **Danger**: `bg-red-600 hover:bg-red-700 text-white`

## Form Inputs
- `w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Navigation
- Sticky top nav: `sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200`
- Nav links: `text-gray-600 hover:text-gray-900 font-medium transition-colors`

## Cards
- `bg-white rounded-2xl shadow-sm border border-gray-100 p-6`
- Hover: `hover:shadow-md transition-shadow`

## Do's
- Use indigo as the single brand color
- Keep backgrounds white or very light gray
- Use generous whitespace between sections
- Ensure all text has strong contrast against its background

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't mix multiple accent colors
- Don't use font sizes below `text-sm` for body content
