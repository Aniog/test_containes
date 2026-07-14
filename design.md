# Design System

## Color Palette
- **Primary**: Indigo — `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- **Primary Light**: `bg-indigo-50`, `text-indigo-700`
- **Accent**: Amber — `text-amber-500`
- **Background**: White — `bg-white`
- **Surface**: Light gray — `bg-gray-50`
- **Border**: `border-gray-200`
- **Text Primary**: `text-gray-900`
- **Text Secondary**: `text-gray-600`
- **Text Muted**: `text-gray-400`
- **Success**: `text-green-600`, `bg-green-50`
- **Error**: `text-red-600`, `bg-red-50`

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Heading**: `text-5xl font-bold text-gray-900` (desktop), `text-3xl` (mobile)
- **Section Heading**: `text-3xl font-bold text-gray-900`
- **Subheading**: `text-xl font-semibold text-gray-800`
- **Body**: `text-base text-gray-600`
- **Label**: `text-sm font-medium text-gray-700`
- **Caption**: `text-sm text-gray-500`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-12`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-gray-200`
- Input: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`
- Button: `rounded-lg`
- Large card shadow: `shadow-lg`

## Buttons
- **Primary**: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg transition-colors`
- **Danger**: `bg-red-600 hover:bg-red-700 text-white`

## Components
- **Nav**: White background, `shadow-sm`, sticky top, `h-16`
- **Hero**: Full-width, centered, gradient background `from-indigo-50 to-white`
- **Feature Card**: White card with icon, title, description
- **Form**: White card, labeled inputs, primary submit button
- **Table**: Clean, `divide-y divide-gray-200`, header `bg-gray-50`
- **Badge**: Rounded pill, colored background + text

## Do's
- Use Tailwind utility classes exclusively
- Maintain consistent 8px spacing grid
- Always pair background color with a readable foreground color
- Use `transition-colors` on interactive elements

## Don'ts
- No hardcoded hex values in JSX — use Tailwind named colors
- No inline styles
- No dark text on dark backgrounds or light text on light backgrounds
