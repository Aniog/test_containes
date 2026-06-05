# Design System

## Color Palette
- **Primary**: Emerald green (`bg-emerald-600`, `text-emerald-600`) — used for CTAs, icons, accents
- **Primary Dark**: `bg-emerald-700` — hover states
- **Primary Light**: `bg-emerald-50`, `text-emerald-700` — badges, subtle backgrounds
- **Background**: Gradient `from-emerald-50 via-white to-teal-50`
- **Surface**: `bg-white` with `border-slate-100` or `border-slate-200`
- **Text Primary**: `text-slate-800`
- **Text Secondary**: `text-slate-500`, `text-slate-400`
- **Error**: `text-red-500`, `bg-red-50`, `border-red-200`
- **Success**: `text-emerald-500`

## Typography
- **Font**: Inter (Google Fonts)
- **Page Title**: `text-3xl font-bold text-slate-800`
- **Section Heading**: `text-base font-bold text-slate-700`
- **Label**: `text-sm font-medium text-slate-700`
- **Body**: `text-sm text-slate-800`
- **Muted**: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `py-10 px-4`
- Max content width: `max-w-2xl mx-auto`
- Card padding: `p-6`
- Form gap: `gap-4`
- Section gap: `mb-5`

## Borders & Shadows
- Cards: `rounded-2xl shadow-sm border border-slate-100`
- Inputs: `rounded-lg border border-slate-300`
- Focus ring: `focus:ring-2 focus:ring-emerald-500 focus:border-transparent`
- Buttons (primary): `rounded-xl shadow-md`

## Components

### Input Fields
- `border border-slate-300 rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder-slate-400`
- Focus: `focus:ring-2 focus:ring-emerald-500 focus:border-transparent`

### Primary Button
- `bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl`

### Secondary / Dashed Button
- `border-2 border-dashed border-emerald-300 text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50 rounded-xl`

### Toggle / Option Buttons (e.g. distance selector)
- Default: `bg-white text-slate-700 border-slate-300 hover:border-emerald-400`
- Selected: `bg-emerald-600 text-white border-emerald-600 shadow-md scale-105`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `text-slate-800` for all form input values
- Use `text-white` on emerald/dark backgrounds
- Use `rounded-xl` or `rounded-2xl` for cards and buttons
- Use `gap-4` for form grids

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use low-contrast text (e.g. gray on white without sufficient contrast)
- Don't use inline styles — use Tailwind classes
- Don't use arbitrary hex values — use Tailwind palette names
