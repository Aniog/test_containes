# Design System

## Brand Identity
Clean, modern SaaS-style landing page. Professional, trustworthy, and approachable.

## Color Palette
- **Primary**: Indigo `#4F46E5` → Tailwind `indigo-600`
- **Primary Dark**: `#3730A3` → Tailwind `indigo-800`
- **Primary Light**: `#EEF2FF` → Tailwind `indigo-50`
- **Accent**: `#06B6D4` → Tailwind `cyan-500`
- **Background**: White `#FFFFFF` and light gray `#F9FAFB` → `bg-white`, `bg-gray-50`
- **Surface**: `#FFFFFF` → `bg-white`
- **Border**: `#E5E7EB` → `border-gray-200`
- **Text Primary**: `#111827` → `text-gray-900`
- **Text Secondary**: `#6B7280` → `text-gray-500`
- **Text Muted**: `#9CA3AF` → `text-gray-400`
- **Success**: `#10B981` → `text-emerald-500`
- **Error**: `#EF4444` → `text-red-500`

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Heading**: `text-5xl font-bold text-gray-900` (desktop), `text-3xl` (mobile)
- **Section Heading**: `text-3xl font-bold text-gray-900`
- **Subheading**: `text-xl font-semibold text-gray-800`
- **Body**: `text-base text-gray-600`
- **Small/Caption**: `text-sm text-gray-500`
- **Label**: `text-sm font-medium text-gray-700`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Borders & Radius
- Cards: `rounded-2xl border border-gray-200 shadow-sm`
- Inputs: `rounded-lg border border-gray-300`
- Buttons: `rounded-lg`
- Badges: `rounded-full`

## Shadows
- Card: `shadow-sm` or `shadow-md`
- Elevated card: `shadow-lg`
- Button hover: `shadow-md`

## Buttons
- **Primary**: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors`
- **Ghost**: `text-indigo-600 hover:text-indigo-700 font-medium`

## Form Inputs
- `w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Navigation
- Sticky top nav: `bg-white/90 backdrop-blur border-b border-gray-100`
- Nav links: `text-gray-600 hover:text-gray-900 font-medium`

## Do's
- Use indigo as the primary action color
- Keep backgrounds white or very light gray
- Use generous whitespace between sections
- Use `text-gray-900` for headings, `text-gray-600` for body text
- Cards should always have visible borders or shadows

## Don'ts
- Don't use dark backgrounds except for the footer
- Don't use more than 2 font weights in a single component
- Don't use low-contrast text (e.g. gray-300 on white)
- Don't use inline styles
