# Weather Dashboard Design System

## Color Palette
- Background: `bg-slate-950` (#020617) — deep navy page background
- Surface / Card: `bg-slate-900` (#0f172a) — card and panel backgrounds
- Surface Elevated: `bg-slate-800` (#1e293b) — table rows, hover states
- Border: `border-slate-700` (#334155)
- Primary Accent: `text-sky-400` / `bg-sky-500` — interactive elements, highlights
- Success / Warm: `text-amber-400` — temperature highs
- Cool: `text-blue-400` — temperature lows
- Danger: `text-red-400` — alerts, high UV
- Muted Text: `text-slate-400` — labels, secondary info
- Body Text: `text-slate-100` — primary readable text

## Typography
- Font: Inter (Google Fonts)
- Page Title: `text-2xl font-bold text-white`
- Section Heading: `text-lg font-semibold text-slate-100`
- Card Label: `text-xs font-medium text-slate-400 uppercase tracking-wider`
- Card Value: `text-3xl font-bold text-white`
- Body: `text-sm text-slate-300`
- Table Header: `text-xs font-semibold text-slate-400 uppercase tracking-wider`

## Spacing
- Page padding: `p-6` on mobile, `p-8` on desktop
- Card padding: `p-5` or `p-6`
- Gap between cards: `gap-4` or `gap-6`
- Section gap: `mb-8`

## Cards
- Rounded: `rounded-xl`
- Border: `border border-slate-700`
- Background: `bg-slate-900`
- Shadow: `shadow-lg`
- Example: `bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-lg`

## Badges / Condition Pills
- Sunny: `bg-amber-500/20 text-amber-300 border border-amber-500/30`
- Cloudy: `bg-slate-600/40 text-slate-300 border border-slate-500/30`
- Rainy: `bg-blue-500/20 text-blue-300 border border-blue-500/30`
- Stormy: `bg-purple-500/20 text-purple-300 border border-purple-500/30`
- Snowy: `bg-cyan-500/20 text-cyan-300 border border-cyan-500/30`
- Pill shape: `rounded-full px-2.5 py-0.5 text-xs font-medium`

## Charts
- Background: transparent (inherits card bg)
- Grid lines: `stroke="#334155"` (slate-700)
- Axis text: `fill="#94a3b8"` (slate-400)
- High temp line: `stroke="#f59e0b"` (amber-500)
- Low temp line: `stroke="#60a5fa"` (blue-400)
- Precipitation bar: `fill="#38bdf8"` (sky-400)
- Tooltip bg: `bg-slate-800 border-slate-600`

## Table
- Header row: `bg-slate-800/50`
- Body row: `border-b border-slate-800 hover:bg-slate-800/40`
- Striped: alternating `bg-slate-900` / `bg-slate-800/20`

## Do's
- Always use explicit text colors on dark surfaces
- Use `text-slate-100` or `text-white` for primary values
- Use `text-slate-400` for labels and secondary text
- Keep chart tooltips readable with dark bg + light text

## Don'ts
- Don't use default inherited colors on cards — always set explicit foreground
- Don't use light backgrounds (white/gray-100) — this is a dark theme dashboard
- Don't use magic hex values — use named Tailwind colors only
