# Design System

## Color Palette
- Background: `bg-slate-100` (#f1f5f9) — page background
- Surface/Card: `bg-white` with `shadow-sm` and `rounded-xl`
- Primary accent: `text-blue-600` / `bg-blue-600` — key actions, highlights
- Secondary accent: `text-sky-500` — weather icons, secondary highlights
- Danger/Hot: `text-orange-500` — high temperatures
- Cool: `text-blue-400` — low temperatures
- Success/Green: `text-emerald-500` — good conditions
- Muted text: `text-slate-500` — labels, secondary info
- Body text: `text-slate-800` — primary readable text
- Border: `border-slate-200`

## Typography
- Page title: `text-2xl font-bold text-slate-800`
- Section heading: `text-lg font-semibold text-slate-700`
- Card label: `text-xs font-medium text-slate-500 uppercase tracking-wide`
- Card value: `text-3xl font-bold text-slate-800`
- Body: `text-sm text-slate-600`
- Table header: `text-xs font-semibold text-slate-500 uppercase tracking-wider`

## Spacing
- Page padding: `p-6` on desktop, `p-4` on mobile
- Card padding: `p-5` or `p-6`
- Grid gap: `gap-4` or `gap-6`
- Section gap: `mb-6` or `mb-8`

## Components
- Cards: `bg-white rounded-xl shadow-sm border border-slate-200 p-5`
- Badges: `rounded-full px-2.5 py-0.5 text-xs font-medium`
- Table rows: alternating `bg-white` / `bg-slate-50`

## Do's
- Use Tailwind utility classes exclusively
- Keep cards clean with clear hierarchy: label → value → sub-info
- Use icons from lucide-react alongside labels
- Ensure all text is readable against its background

## Don'ts
- No dark backgrounds on main content areas
- No low-contrast text (e.g., gray on gray)
- No inline styles
- No hardcoded hex values in JSX — use Tailwind named colors
