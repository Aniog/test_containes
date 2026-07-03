# Weather Dashboard Design System

## Color Palette
- Background: `bg-slate-950` (#020617) — deep navy page background
- Surface / Card: `bg-slate-900` (#0f172a) — card and panel backgrounds
- Surface Elevated: `bg-slate-800` (#1e293b) — table rows, hover states
- Border: `border-slate-700` (#334155) — subtle dividers
- Primary Accent: `text-sky-400` / `bg-sky-500` (#38bdf8 / #0ea5e9) — highlights, active states
- Success / Low: `text-emerald-400` (#34d399) — low temps, good conditions
- Warning / High: `text-orange-400` (#fb923c) — high temps, alerts
- Danger: `text-red-400` (#f87171) — extreme values
- Muted Text: `text-slate-400` (#94a3b8) — labels, secondary info
- Body Text: `text-slate-100` (#f1f5f9) — primary readable text

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-slate-100`
- Section Heading: `text-lg font-semibold text-slate-100`
- Card Label: `text-xs font-medium text-slate-400 uppercase tracking-wider`
- Card Value: `text-3xl font-bold text-slate-100`
- Body: `text-sm text-slate-300`
- Caption / Muted: `text-xs text-slate-500`

## Spacing & Layout
- Page padding: `p-6` on desktop, `p-4` on mobile
- Card padding: `p-5` or `p-6`
- Grid gap: `gap-4` or `gap-6`
- Stat cards: 4-column grid on desktop (`grid-cols-4`), 2-column on tablet (`md:grid-cols-2`), 1-column on mobile
- Charts: full-width or 2-column grid

## Borders & Shadows
- Cards: `rounded-xl border border-slate-700`
- No heavy box shadows — rely on border + background contrast
- Table rows: `border-b border-slate-700/50`

## Charts (Recharts)
- Background: transparent (inherits card bg)
- Grid lines: `stroke="#334155"` (slate-700)
- Axis text: `fill="#94a3b8"` (slate-400)
- Tooltip: dark bg `#1e293b`, border `#334155`, text `#f1f5f9`
- Temperature High line: `#fb923c` (orange-400)
- Temperature Low line: `#38bdf8` (sky-400)
- Precipitation bars: `#818cf8` (indigo-400)
- Humidity area: `#34d399` (emerald-400)

## Component Patterns
- Stat cards: icon + label + large value + optional trend badge
- Charts: titled card with subtitle, full-width Recharts inside ResponsiveContainer
- Table: sticky header, alternating row hover, condition badge with color coding
- Condition badges: `rounded-full px-2 py-0.5 text-xs font-medium`
  - Sunny: `bg-amber-500/20 text-amber-300`
  - Cloudy: `bg-slate-500/20 text-slate-300`
  - Rainy: `bg-blue-500/20 text-blue-300`
  - Stormy: `bg-purple-500/20 text-purple-300`
  - Foggy: `bg-slate-400/20 text-slate-400`

## Do's
- Always set explicit text colors on dark surfaces
- Use `text-slate-100` or `text-white` for important values
- Use `text-slate-400` for labels and secondary text
- Keep chart tooltips readable with dark bg + light text

## Don'ts
- Don't use light backgrounds (white/gray-100) — this is a dark-theme dashboard
- Don't use default browser button styles
- Don't leave text color implicit on colored backgrounds
- Don't use font sizes smaller than `text-xs` for data
