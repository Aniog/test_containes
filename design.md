# Design System — TODO Application

## Color Palette
- **Primary**: Indigo `#6366f1` (Tailwind: `indigo-500`) — used for primary actions, checkboxes, focus rings
- **Primary Dark**: `#4f46e5` (Tailwind: `indigo-600`) — hover states on primary buttons
- **Background**: Light gray `#f1f5f9` (Tailwind: `slate-100`) — page background
- **Surface**: White `#ffffff` (Tailwind: `white`) — cards, input fields, todo items
- **Border**: `#e2e8f0` (Tailwind: `slate-200`) — dividers, input borders
- **Text Primary**: `#1e293b` (Tailwind: `slate-800`) — headings, main content
- **Text Secondary**: `#64748b` (Tailwind: `slate-500`) — subtitles, counts, placeholders
- **Text Muted**: `#94a3b8` (Tailwind: `slate-400`) — disabled, completed task text
- **Danger**: `#ef4444` (Tailwind: `red-500`) — delete buttons
- **Danger Hover**: `#dc2626` (Tailwind: `red-600`) — delete button hover
- **Success**: `#22c55e` (Tailwind: `green-500`) — completed checkmarks

## Typography
- **Font Family**: Inter (Google Fonts), system-ui fallback
- **App Title**: `text-3xl font-bold text-slate-800`
- **Section Heading**: `text-sm font-semibold text-slate-500 uppercase tracking-wider`
- **Todo Item Text**: `text-base font-medium text-slate-700`
- **Completed Todo Text**: `text-base font-medium text-slate-400 line-through`
- **Helper/Count Text**: `text-sm text-slate-500`
- **Button Text**: `text-sm font-semibold`

## Spacing & Layout
- Page: centered, max-width `max-w-xl`, padding `px-4 py-10`
- Card/Container: `rounded-2xl shadow-md bg-white p-6`
- Todo item row: `flex items-center gap-3 py-3 px-4`
- Input field: `rounded-xl border border-slate-200 px-4 py-3 text-base`
- Buttons: `rounded-xl px-4 py-2`

## Borders & Shadows
- Cards: `rounded-2xl shadow-md`
- Inputs: `rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-400`
- Todo items: separated by `border-b border-slate-100`, last item no border

## Component Styles

### Primary Button (Add Todo)
- `bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-5 py-3 font-semibold transition-colors`

### Danger Button (Delete / Clear Completed)
- `text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors`

### Ghost/Filter Button (Active filter)
- `text-indigo-600 font-semibold bg-indigo-50 rounded-lg px-3 py-1`
- Inactive: `text-slate-500 hover:text-slate-700 rounded-lg px-3 py-1`

### Checkbox
- Custom styled: `w-5 h-5 rounded-full border-2 border-slate-300` unchecked
- Checked: `bg-indigo-500 border-indigo-500` with white checkmark icon

## Do's
- Always use Tailwind utility classes; no inline styles
- Use `slate-*` for neutral text and backgrounds
- Use `indigo-*` for interactive/primary elements
- Ensure all text has sufficient contrast against its background
- Use `transition-colors` on interactive elements for smooth hover effects
- Use `rounded-2xl` for cards, `rounded-xl` for inputs/buttons, `rounded-lg` for small controls

## Don'ts
- Don't use dark backgrounds for the main page (keep it light)
- Don't use low-contrast text (e.g., gray text on white must be at least `slate-500`)
- Don't use magic hex values — map to Tailwind config named colors if needed
- Don't use `text-white` on light backgrounds
