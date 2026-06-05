# Design System — Cycling Record (May)

## Color Palette
- Primary: `#2563eb` (blue-600) — CTAs, active states, accents
- Primary hover: `#1d4ed8` (blue-700)
- Primary light: `#eff6ff` (blue-50) — card backgrounds, highlights
- Success: `#16a34a` (green-600)
- Danger: `#dc2626` (red-600)
- Background: `#f1f5f9` (slate-100)
- Surface: `#ffffff` (white) — cards, form panels
- Border: `#e2e8f0` (slate-200)
- Text primary: `#0f172a` (slate-900)
- Text secondary: `#64748b` (slate-500)
- Text muted: `#94a3b8` (slate-400)

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section heading: `text-lg font-semibold text-slate-800`
- Label: `text-sm font-medium text-slate-700`
- Body: `text-sm text-slate-600`
- Muted: `text-xs text-slate-400`

## Spacing
- Page padding: `px-4 py-8 md:px-8`
- Card padding: `p-6`
- Form gap: `gap-5`
- Section gap: `gap-4`

## Borders & Radius
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500`
- Button: `rounded-lg`
- Record card: `rounded-xl border border-slate-200 bg-slate-50`

## Buttons
- Primary: `bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg`
- Secondary: `bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium px-4 py-2 rounded-lg`
- Danger: `bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-lg`
- Add: `bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 rounded-lg`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `text-slate-900` or `text-slate-800` for all important content
- Use `text-slate-500` for helper/secondary text
- Maintain consistent 8px grid spacing
- Use `focus:ring-2 focus:ring-blue-500` for all interactive inputs

## Don'ts
- Never use light text on light backgrounds
- Avoid inline styles; use Tailwind classes
- Don't use arbitrary hex values — use named Tailwind colors
