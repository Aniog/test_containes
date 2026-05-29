# Design System

## Visual Style
Clean, modern light-mode UI with a soft neutral background and vibrant accent color.

## Colors
- Background: `bg-slate-100` (#f1f5f9)
- Card/Surface: `bg-white`
- Primary Accent: `bg-violet-600` / `text-violet-600` (#7c3aed)
- Primary Hover: `hover:bg-violet-700`
- Danger: `text-red-500` / `hover:text-red-600`
- Success/Complete: `text-emerald-600`
- Muted Text: `text-slate-400`
- Body Text: `text-slate-700`
- Heading Text: `text-slate-900`
- Border: `border-slate-200`
- Completed item text: `line-through text-slate-400`

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-3xl font-bold text-slate-900`
- Section Label: `text-sm font-semibold text-slate-500 uppercase tracking-wide`
- Body: `text-sm text-slate-700`
- Muted: `text-sm text-slate-400`

## Spacing & Layout
- Page max width: `max-w-lg mx-auto`
- Card padding: `p-6`
- Item padding: `py-3 px-4`
- Gap between items: `gap-2`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for checkboxes

## Borders & Shadows
- Card shadow: `shadow-sm`
- Input border: `border border-slate-200 focus:ring-2 focus:ring-violet-400 focus:outline-none`
- Item divider: `divide-y divide-slate-100`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-4 py-2 transition`
- Ghost/Danger: `text-slate-400 hover:text-red-500 transition`
- Filter tab active: `bg-violet-600 text-white`
- Filter tab inactive: `text-slate-500 hover:text-slate-700`

## Do's
- Use Tailwind utility classes exclusively
- Keep components small and focused
- Use consistent spacing and color tokens
- Ensure all text is readable against its background

## Don'ts
- No dark backgrounds for the main UI
- No hardcoded hex values in JSX — use Tailwind classes
- No invisible or low-contrast text
