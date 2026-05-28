# Design System

## Colors
- Background: `bg-slate-50` (light page background)
- Card background: `bg-white`
- Primary accent: `bg-purple-600`, `text-purple-600`, `hover:bg-purple-700`
- Danger/Delete: `text-red-500`, `hover:text-red-600`
- Success/Complete: `text-emerald-600`
- Text primary: `text-slate-900`
- Text secondary: `text-slate-500`
- Border: `border-slate-200`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Headings: `font-semibold` or `font-bold`
- Body: `font-normal`
- Small/muted: `text-sm text-slate-500`

## Spacing
- Page padding: `px-4 py-8` on mobile, `px-6 py-12` on desktop
- Card padding: `p-6`
- Between elements: `space-y-4` or `gap-4`

## Borders & Shadows
- Cards: `rounded-xl shadow-sm border border-slate-200`
- Buttons: `rounded-lg`
- Inputs: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500`

## Layout
- Max content width: `max-w-2xl mx-auto`
- Centered single-column layout for the todo app

## Do's
- Use Tailwind utility classes exclusively
- Keep consistent rounded corners (lg/xl)
- Use transitions for hover states
- Maintain clear visual hierarchy

## Don'ts
- No hardcoded hex colors in JSX
- No inline styles
- No magic pixel values
- No dark mode (light theme only for this app)
