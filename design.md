# Design System

## Visual Style
Clean, modern, professional SaaS-style landing page. Light background with strong contrast. Warm accent color to feel approachable.

## Colors
- Background: `bg-white` / `bg-slate-50`
- Primary accent: Indigo — `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- Text primary: `text-slate-900`
- Text secondary: `text-slate-500`
- Text muted: `text-slate-400`
- Border: `border-slate-200`
- Card background: `bg-white`
- Success: `text-green-600`, `bg-green-50`
- Error: `text-red-600`, `bg-red-50`

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl font-bold text-slate-900` (desktop), `text-3xl` (mobile)
- Section heading: `text-3xl font-bold text-slate-900`
- Subheading: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-600`
- Label: `text-sm font-medium text-slate-700`
- Caption/muted: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500`
- Button: `rounded-lg`

## Buttons
- Primary: `bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors`
- Secondary/outline: `border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-semibold transition-colors`

## Do's
- Use `max-w-6xl mx-auto` for page-width containers
- Use `max-w-2xl mx-auto` for centered narrow content
- Use consistent 8px grid spacing (Tailwind's default scale)
- Always pair a dark background with light text and vice versa

## Don'ts
- Don't use dark backgrounds for the main page body
- Don't use low-contrast text (e.g. gray on gray)
- Don't use more than 2 accent colors
- Don't use inline styles
