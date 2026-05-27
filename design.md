# Design System

## Color Palette
- Primary: Indigo `#6366f1` (Tailwind: `indigo-500`)
- Primary Dark: `#4f46e5` (Tailwind: `indigo-600`)
- Background: White `#ffffff` (Tailwind: `white`)
- Surface: Light gray `#f8fafc` (Tailwind: `slate-50`)
- Border: `#e2e8f0` (Tailwind: `slate-200`)
- Text Primary: `#1e293b` (Tailwind: `slate-800`)
- Text Secondary: `#64748b` (Tailwind: `slate-500`)
- Success: `#22c55e` (Tailwind: `green-500`)
- Danger: `#ef4444` (Tailwind: `red-500`)

## Typography
- Font Family: Inter, system-ui, sans-serif
- Heading Large: `text-3xl font-bold text-slate-800`
- Heading Medium: `text-xl font-semibold text-slate-700`
- Body: `text-sm text-slate-600`
- Label: `text-xs font-medium text-slate-500 uppercase tracking-wide`

## Spacing & Layout
- Page padding: `px-4 py-8` on mobile, `px-8 py-10` on desktop
- Card padding: `p-6`
- Section gap: `gap-4`
- Max content width: `max-w-2xl mx-auto`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-400`
- Button primary: `rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white`
- Button ghost: `rounded-lg text-slate-500 hover:bg-slate-100`

## Do's
- Use `slate-*` for neutral text and backgrounds
- Use `indigo-*` for primary actions and highlights
- Always pair a background color with an explicit text color
- Use `transition` on interactive elements

## Don'ts
- Don't use raw hex codes in JSX — use Tailwind named classes
- Don't use dark text on dark backgrounds or light text on light backgrounds
- Don't use `text-white` on white/light surfaces
