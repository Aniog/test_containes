# Design System

## Color Palette
- Primary: Indigo `#6366f1` (Tailwind: `indigo-500`)
- Primary Dark: `#4f46e5` (Tailwind: `indigo-600`)
- Background: White `#ffffff` (Tailwind: `bg-white`)
- Surface: Light gray `#f8fafc` (Tailwind: `bg-slate-50`)
- Card: White with shadow (Tailwind: `bg-white shadow-md`)
- Text Primary: Dark slate `#1e293b` (Tailwind: `text-slate-800`)
- Text Secondary: Medium slate `#64748b` (Tailwind: `text-slate-500`)
- Border: Light `#e2e8f0` (Tailwind: `border-slate-200`)
- Success: Green `#22c55e` (Tailwind: `text-green-500`)
- Danger: Red `#ef4444` (Tailwind: `text-red-500`)
- Priority High: Red badge `bg-red-100 text-red-700`
- Priority Medium: Yellow badge `bg-yellow-100 text-yellow-700`
- Priority Low: Green badge `bg-green-100 text-green-700`

## Typography
- Font Family: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-slate-800`
- Section Heading: `text-lg font-semibold text-slate-700`
- Body: `text-sm text-slate-600`
- Label: `text-xs font-medium text-slate-500 uppercase tracking-wide`

## Spacing & Layout
- Page padding: `p-4 md:p-8`
- Max content width: `max-w-2xl mx-auto`
- Card padding: `p-4 md:p-6`
- Gap between items: `gap-3`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons

## Components

### Buttons
- Primary: `bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg transition-colors`
- Danger: `text-red-400 hover:text-red-600 transition-colors`
- Icon button: `p-1.5 rounded-md hover:bg-slate-100 transition-colors`

### Inputs
- Text input: `w-full border border-slate-200 rounded-lg px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400`
- Select: same as text input

### Cards / Todo Items
- Container: `bg-white rounded-xl shadow-sm border border-slate-100 p-4`
- Completed state: `opacity-60 line-through text-slate-400`

## Do's
- Use consistent indigo as the primary accent color
- Keep backgrounds light and clean
- Use subtle shadows (`shadow-sm`, `shadow-md`) for depth
- Ensure all text is clearly readable against its background
- Use smooth transitions on interactive elements

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use low-contrast text (e.g., gray on gray)
- Don't use more than 3 accent colors
- Don't use arbitrary pixel values — use Tailwind spacing scale
