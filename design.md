# Design System

## Visual Style
Clean, professional SaaS landing page with a light background and blue accent palette.

## Colors
- Background: `bg-white` / `bg-gray-50` for sections
- Foreground text: `text-gray-900` (headings), `text-gray-600` (body), `text-gray-400` (muted)
- Primary brand: `bg-blue-600` / `text-blue-600` (buttons, links, accents)
- Primary hover: `hover:bg-blue-700`
- Border: `border-gray-200`
- Success: `text-green-600` / `bg-green-50`
- Destructive: `text-red-600`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-4xl md:text-6xl font-bold text-gray-900 leading-tight`
- Section heading: `text-3xl font-bold text-gray-900`
- Subheading: `text-xl text-gray-600`
- Body: `text-base text-gray-600 leading-relaxed`
- Label: `text-sm font-medium text-gray-700`
- Small/muted: `text-sm text-gray-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-4 md:px-8`
- Card padding: `p-6 md:p-8`
- Form gap: `space-y-4`

## Components
- Buttons: `bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors`
- Outline button: `border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50`
- Cards: `bg-white rounded-xl border border-gray-200 shadow-sm p-6`
- Inputs: `border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent`
- Badges: `bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full`

## Do's
- Use consistent 8px spacing grid
- Keep hero section full-width with subtle gradient background
- Use shadow-sm on cards, not heavy shadows
- Maintain high contrast for all text

## Don'ts
- No dark backgrounds on main content areas
- No text smaller than 12px
- No low-contrast text (e.g. gray on gray)
- No magic hex values — use Tailwind named colors
