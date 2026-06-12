# Weather Dashboard Design System

## Color Palette
- Background: `bg-slate-900` (#0f172a) — deep navy, main page background
- Surface / Card: `bg-slate-800` (#1e293b) — slightly lighter for cards
- Surface Elevated: `bg-slate-700` (#334155) — hover states, inner panels
- Border: `border-slate-700` — subtle card borders
- Primary Accent: `text-sky-400` / `bg-sky-500` — sky blue for highlights
- Success / Warm: `text-amber-400` — temperature highs
- Cool: `text-blue-400` — temperature lows
- Muted Text: `text-slate-400` — labels, secondary info
- Body Text: `text-slate-100` — primary readable text

## Typography
- Page Title: `text-2xl font-bold text-slate-100`
- Section Heading: `text-lg font-semibold text-slate-100`
- Card Label: `text-xs font-medium text-slate-400 uppercase tracking-wide`
- Card Value: `text-3xl font-bold text-slate-100`
- Body: `text-sm text-slate-300`

## Spacing & Layout
- Page padding: `p-6` on desktop, `p-4` on mobile
- Card padding: `p-5`
- Grid gap: `gap-4` or `gap-6`
- Stat grid: 4 columns on desktop (`grid-cols-4`), 2 on tablet (`sm:grid-cols-2`), 1 on mobile

## Cards
- `rounded-xl border border-slate-700 bg-slate-800 shadow-lg`
- No magic pixel values — use Tailwind spacing scale only

## Badges / Condition Pills
- Sunny: `bg-amber-500/20 text-amber-300 border border-amber-500/30`
- Cloudy: `bg-slate-600/40 text-slate-300 border border-slate-500/30`
- Rainy: `bg-blue-500/20 text-blue-300 border border-blue-500/30`
- Stormy: `bg-purple-500/20 text-purple-300 border border-purple-500/30`
- Snowy: `bg-cyan-500/20 text-cyan-300 border border-cyan-500/30`

## Charts
- Use Recharts with dark-friendly colors
- Grid lines: `stroke="#334155"` (slate-700)
- Axis text: `fill="#94a3b8"` (slate-400)
- High temp line: `#f59e0b` (amber-400)
- Low temp line: `#60a5fa` (blue-400)
- Humidity bar: `#38bdf8` (sky-400)

## Do's
- Always set explicit text colors on dark surfaces
- Use `text-slate-100` or `text-white` for important values
- Use `text-slate-400` for labels and secondary text
- Keep chart tooltips readable with dark backgrounds

## Don'ts
- Don't use light backgrounds with light text
- Don't use default browser button styles
- Don't hardcode hex colors in JSX — use Tailwind classes or named chart colors
