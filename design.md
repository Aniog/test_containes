# Design System

## Visual Style
Clean, modern light-mode UI with a soft neutral background and vibrant accent color.

## Colors
- Background: `bg-slate-100` (#f1f5f9)
- Card/Surface: `bg-white`
- Primary Accent: `bg-violet-600` (#7c3aed), hover `bg-violet-700`
- Danger: `bg-red-500`, hover `bg-red-600`
- Success/Complete: `text-slate-400 line-through`
- Border: `border-slate-200`
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Heading: `text-slate-900`

## Typography
- Font: Inter (Google Fonts)
- Heading: `text-2xl font-bold text-slate-900`
- Body: `text-sm text-slate-700`
- Muted: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `p-4 md:p-8`
- Card padding: `p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-xl mx-auto`

## Borders & Shadows
- Card: `rounded-2xl shadow-md border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-400`
- Button: `rounded-lg`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-4 py-2`
- Ghost/Icon: `text-slate-400 hover:text-red-500 transition-colors`
- Danger text: `text-red-500 hover:text-red-700 text-sm font-medium`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use `transition-colors` and `transition-all` for smooth interactions
- Use `line-through` and muted color for completed items

## Don'ts
- No dark backgrounds on main surfaces
- No hardcoded hex values in JSX — use Tailwind named classes
- No inline styles
