# Design System — TODO App

## Color Palette
- **Primary**: Indigo `#6366f1` (Tailwind: `indigo-500`) — used for primary actions, checkboxes, focus rings
- **Primary Dark**: `#4f46e5` (Tailwind: `indigo-600`) — hover states
- **Background**: `#f8fafc` (Tailwind: `slate-50`) — page background
- **Surface**: `#ffffff` (Tailwind: `white`) — card/panel background
- **Border**: `#e2e8f0` (Tailwind: `slate-200`) — dividers, input borders
- **Text Primary**: `#1e293b` (Tailwind: `slate-800`) — headings, main text
- **Text Secondary**: `#64748b` (Tailwind: `slate-500`) — subtitles, counts, placeholders
- **Text Muted**: `#94a3b8` (Tailwind: `slate-400`) — disabled, empty states
- **Completed Text**: `#94a3b8` (Tailwind: `slate-400`) — struck-through completed items
- **Danger**: `#ef4444` (Tailwind: `red-500`) — delete actions
- **Danger Hover**: `#dc2626` (Tailwind: `red-600`)
- **Success**: `#22c55e` (Tailwind: `green-500`) — completed checkmarks

## Typography
- **Font Family**: Inter (Google Fonts), system-ui fallback
- **App Title**: `text-3xl font-bold text-slate-800`
- **Subtitle / Count**: `text-sm text-slate-500`
- **Todo Item Text**: `text-base text-slate-800`
- **Completed Item Text**: `text-base text-slate-400 line-through`
- **Button Text**: `text-sm font-medium`
- **Input Placeholder**: `text-slate-400`

## Spacing & Layout
- Page: centered, max-width `max-w-lg`, padding `px-4 py-10`
- Card: `rounded-2xl shadow-md bg-white p-6`
- Todo item row: `flex items-center gap-3 py-3 px-4`
- Dividers between items: `border-b border-slate-100`
- Input field: `rounded-xl border border-slate-200 px-4 py-3 text-base`
- Buttons: `rounded-lg px-4 py-2 text-sm font-medium`

## Borders & Shadows
- Card shadow: `shadow-md` (subtle elevation)
- Input focus: `focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400`
- Checkbox: custom styled, `rounded-full` with indigo fill when checked

## Interactive States
- Hover on delete icon: text transitions from `slate-300` to `red-500`
- Hover on todo row: `hover:bg-slate-50`
- Checkbox checked: indigo background with white checkmark
- Add button: `bg-indigo-500 hover:bg-indigo-600 text-white`
- Clear completed button: `text-slate-500 hover:text-red-500` (text-only style)

## Do's
- Use `text-slate-800` for all primary readable text on white backgrounds
- Use `rounded-2xl` for the main card container
- Use `rounded-xl` for input fields
- Use `rounded-lg` for buttons
- Always pair a background color with an explicit foreground text color

## Don'ts
- Don't use dark backgrounds with dark text
- Don't use `text-white` on white/light surfaces
- Don't use raw hex codes in JSX — use Tailwind named classes only
- Don't use inline styles for layout or color
