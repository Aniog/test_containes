# Design System — Luxe Shop

## Brand Identity
A modern, premium e-commerce experience. Clean, minimal, and trustworthy.

## Color Palette
- **Primary**: Indigo `#4F46E5` (`bg-indigo-600`, `text-indigo-600`)
- **Primary Dark**: `#3730A3` (`bg-indigo-800`)
- **Primary Light**: `#EEF2FF` (`bg-indigo-50`)
- **Accent**: Amber `#F59E0B` (`text-amber-500`) — used for ratings/stars
- **Success**: `#10B981` (`text-emerald-500`)
- **Danger**: `#EF4444` (`text-red-500`)
- **Background**: White `#FFFFFF` (`bg-white`)
- **Surface**: Light Gray `#F9FAFB` (`bg-gray-50`)
- **Border**: `#E5E7EB` (`border-gray-200`)
- **Text Primary**: `#111827` (`text-gray-900`)
- **Text Secondary**: `#6B7280` (`text-gray-500`)
- **Text Muted**: `#9CA3AF` (`text-gray-400`)

## Typography
- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-semibold`, `tracking-tight`
- **Body**: `font-normal`, `text-gray-700`
- **Small/Caption**: `text-sm text-gray-500`
- **Hero H1**: `text-5xl md:text-6xl font-bold tracking-tight text-gray-900`
- **Section H2**: `text-3xl font-bold text-gray-900`
- **Card Title**: `text-base font-semibold text-gray-900`

## Spacing
- Section padding: `py-16 md:py-24`
- Card padding: `p-4` or `p-6`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full` (pill) or `rounded-lg`
- Inputs: `rounded-lg`
- Images: `rounded-xl`
- Border: `border border-gray-200`

## Shadows
- Card hover: `shadow-lg`
- Default card: `shadow-sm`
- Navbar: `shadow-sm`

## Buttons
- **Primary**: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full px-6 py-2.5 transition-colors`
- **Secondary**: `border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-full px-6 py-2.5 transition-colors`
- **Ghost**: `text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg px-3 py-2 transition-colors`
- **Danger**: `bg-red-500 hover:bg-red-600 text-white rounded-full px-6 py-2.5`

## Cards
- Product card: `bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden`
- Feature card: `bg-white rounded-2xl p-6 shadow-sm border border-gray-100`

## Navbar
- Sticky top, white background, `shadow-sm`
- Logo: `text-xl font-bold text-indigo-600`
- Nav links: `text-gray-600 hover:text-indigo-600 font-medium`

## Do's
- Use `gap-*` for flex/grid spacing
- Use `transition-*` for hover effects
- Use `truncate` for long text in cards
- Use `aspect-square` or `aspect-[4/3]` for image containers
- Use `line-clamp-2` for descriptions

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use low-contrast text (e.g. gray-300 on white)
- Don't use arbitrary hex values — use Tailwind named colors
- Don't mix rounded styles inconsistently
