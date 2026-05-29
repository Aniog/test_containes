# Design System

## Visual Style
Clean, modern light-mode UI with a soft neutral background and vibrant accent color.

## Colors
- Background: `bg-slate-100` (#f1f5f9)
- Card/Surface: `bg-white`
- Primary Accent: `bg-violet-600` / `text-violet-600` (#7c3aed)
- Primary Hover: `hover:bg-violet-700`
- Danger: `text-red-500` / `hover:text-red-600`
- Success/Complete: `text-emerald-500`
- Muted Text: `text-slate-400`
- Body Text: `text-slate-700`
- Heading Text: `text-slate-900`
- Border: `border-slate-200`
- Completed item text: `line-through text-slate-400`

## Typography
- Font: Inter (Google Fonts)
- Heading: `text-3xl font-bold text-slate-900`
- Subheading: `text-sm font-medium text-slate-500`
- Body: `text-sm text-slate-700`
- Small/Muted: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `px-4 py-10`
- Max content width: `max-w-lg mx-auto`
- Card padding: `p-6`
- Gap between items: `gap-2` or `gap-3`

## Borders & Shadows
- Card: `rounded-2xl shadow-md border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-400`
- Button: `rounded-lg`
- Todo item: `rounded-xl border border-slate-200`

## Buttons
- Primary: `bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg px-4 py-2`
- Ghost/Danger: `text-red-400 hover:text-red-600 transition-colors`
- Filter tab active: `bg-violet-600 text-white`
- Filter tab inactive: `text-slate-500 hover:text-slate-700`

## Do's
- Use Tailwind utility classes exclusively
- Maintain consistent spacing and border-radius
- Use violet as the single accent color
- Keep the UI minimal and uncluttered

## Don'ts
- Don't use dark backgrounds for the main UI
- Don't use multiple accent colors
- Don't use inline styles
- Don't use magic pixel values outside Tailwind scale
