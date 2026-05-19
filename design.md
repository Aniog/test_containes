# Design System — TODO App

## Color Palette
- Background: `bg-slate-900` (dark navy)
- Surface/Card: `bg-slate-800`
- Surface elevated: `bg-slate-700`
- Primary accent: `bg-indigo-500`, `text-indigo-400`, `border-indigo-500`
- Success/Complete: `text-emerald-400`, `bg-emerald-500`
- Danger/Delete: `text-rose-400`, `hover:text-rose-500`
- Muted text: `text-slate-400`
- Body text: `text-slate-100`
- Border: `border-slate-600`

## Typography
- Font family: Inter (Google Fonts)
- App title: `text-3xl font-bold text-white`
- Section headings: `text-lg font-semibold text-slate-200`
- Body: `text-sm text-slate-300`
- Muted/helper: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `p-4 md:p-8`
- Card padding: `p-4 md:p-6`
- Gap between items: `gap-3`
- Max content width: `max-w-xl mx-auto`
- Rounded corners: `rounded-xl` for cards, `rounded-lg` for inputs/buttons, `rounded-full` for checkboxes

## Borders & Shadows
- Card border: `border border-slate-700`
- Input border: `border border-slate-600 focus:border-indigo-500`
- Shadow: `shadow-lg`

## Buttons
- Primary: `bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg px-4 py-2`
- Ghost/danger: `text-rose-400 hover:text-rose-500 transition-colors`
- Muted action: `text-slate-400 hover:text-slate-200 text-sm transition-colors`

## Inputs
- `bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500`

## Checkbox / Toggle
- Custom circular checkbox using `rounded-full border-2`
- Unchecked: `border-slate-500 bg-transparent`
- Checked: `bg-indigo-500 border-indigo-500` with checkmark icon

## Do's
- Always use explicit text colors on dark surfaces
- Use `transition-colors` on interactive elements
- Keep components small and focused
- Use Tailwind classes exclusively — no inline styles

## Don'ts
- Never use light text on light backgrounds or dark text on dark backgrounds
- Don't use arbitrary hex values — use named Tailwind colors
- Don't use magic pixel values — use Tailwind spacing scale
