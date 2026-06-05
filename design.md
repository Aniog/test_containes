# Design System

## Color Palette
- Primary: Emerald green (`bg-emerald-500`, `text-emerald-600`, `#10b981`)
- Background: Gradient from `emerald-50` via `white` to `teal-50`
- Surface: White cards with `border-gray-100` and `shadow-sm`
- Text primary: `text-gray-800`
- Text secondary: `text-gray-500`, `text-gray-600`
- Error: `text-red-500`, `bg-red-50`, `border-red-400`
- Success: `text-emerald-500`, `bg-emerald-100`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold`, sizes `text-3xl` (page title), `text-base` (section titles)
- Labels: `text-xs font-semibold uppercase tracking-wide text-gray-600`
- Body: `text-sm text-gray-800`
- Placeholder: `placeholder-gray-400`

## Spacing & Layout
- Page padding: `py-10 px-4`
- Max content width: `max-w-2xl mx-auto`
- Card padding: `p-6`
- Field gap: `gap-4`
- Section gap: `mb-5`

## Borders & Radius
- Cards: `rounded-2xl`
- Inputs: `rounded-xl`
- Buttons (toggle): `rounded-lg`
- Submit button: `rounded-2xl`
- Dashed add button: `border-2 border-dashed border-emerald-300`

## Inputs
- Background: `bg-gray-50 border-gray-200`
- Focus: `focus:ring-2 focus:ring-emerald-400 focus:border-transparent`
- Error state: `border-red-400 bg-red-50`

## Buttons
- Primary: `bg-emerald-500 hover:bg-emerald-600 text-white font-bold`
- Toggle (selected): `bg-emerald-500 text-white border-emerald-500`
- Toggle (unselected): `border-gray-200 text-gray-600 bg-white hover:bg-emerald-50`
- Destructive: `text-gray-400 hover:text-red-500`

## Do's
- Use emerald as the primary accent color throughout
- Use white cards on gradient background for depth
- Use uppercase tracking-wide labels for form fields
- Use numbered section badges for multi-step forms
- Show inline validation errors below each field

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use low-contrast text on colored backgrounds
- Don't use more than 2 accent colors per section
