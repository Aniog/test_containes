# Design System

## Visual Style
Clean, modern SaaS landing page aesthetic. Light background with strong contrast. Professional and trustworthy feel.

## Colors
- Primary: Indigo `#4F46E5` (indigo-600) — buttons, links, accents
- Primary hover: `#4338CA` (indigo-700)
- Background: White `#FFFFFF` and light gray `#F9FAFB` (gray-50) for alternating sections
- Surface/Card: White with subtle shadow `bg-white shadow-sm`
- Border: `#E5E7EB` (gray-200)
- Text primary: `#111827` (gray-900)
- Text secondary: `#6B7280` (gray-500)
- Text muted: `#9CA3AF` (gray-400)
- Success: `#10B981` (emerald-500)
- Error: `#EF4444` (red-500)

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl font-bold text-gray-900` (desktop), `text-3xl` (mobile)
- Section heading: `text-3xl font-bold text-gray-900`
- Subheading: `text-xl font-semibold text-gray-800`
- Body: `text-base text-gray-600`
- Label: `text-sm font-medium text-gray-700`
- Muted: `text-sm text-gray-500`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Borders & Radius
- Cards: `rounded-xl`
- Buttons: `rounded-lg`
- Inputs: `rounded-lg border border-gray-300`
- Badges: `rounded-full`

## Shadows
- Card: `shadow-sm` or `shadow-md`
- Button: none by default, `shadow-sm` on primary

## Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg`
- Secondary/Outline: `border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg`
- Destructive: `bg-red-500 hover:bg-red-600 text-white`

## Inputs
- `w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

## Navigation
- Sticky top nav: `bg-white border-b border-gray-200 shadow-sm`
- Nav links: `text-gray-600 hover:text-indigo-600 font-medium`

## Do's
- Use indigo as the single accent color
- Keep sections well-spaced with generous padding
- Use white cards on gray backgrounds and gray cards on white backgrounds
- Always ensure text is readable — dark text on light backgrounds

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use more than 2 font weights in a single component
- Don't use low-contrast text (e.g. gray-300 on white)
