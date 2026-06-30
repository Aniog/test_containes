# Weather Dashboard Design System

## Color Palette

### Primary Colors
- Background: `bg-slate-900` (#0f172a) — deep navy, main page background
- Surface: `bg-slate-800` (#1e293b) — card/panel backgrounds
- Surface Elevated: `bg-slate-700` (#334155) — hover states, table rows
- Border: `border-slate-700` (#334155) — subtle dividers

### Accent Colors
- Sky Blue (primary accent): `text-sky-400` / `bg-sky-500` (#38bdf8 / #0ea5e9)
- Amber (warm/high temp): `text-amber-400` (#fbbf24)
- Emerald (good/normal): `text-emerald-400` (#34d399)
- Rose (alerts/low): `text-rose-400` (#fb7185)
- Violet (humidity/UV): `text-violet-400` (#a78bfa)

### Text Colors
- Primary text: `text-slate-100` (#f1f5f9)
- Secondary text: `text-slate-400` (#94a3b8)
- Muted text: `text-slate-500` (#64748b)

## Typography

- Font family: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-slate-100`
- Section heading: `text-lg font-semibold text-slate-100`
- Card label: `text-xs font-medium text-slate-400 uppercase tracking-wider`
- Card value: `text-3xl font-bold text-slate-100`
- Body: `text-sm text-slate-300`
- Caption: `text-xs text-slate-500`

## Spacing & Layout

- Page padding: `p-6` (desktop), `p-4` (mobile)
- Card padding: `p-5`
- Card gap: `gap-4` or `gap-6`
- Section gap: `gap-6`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inner elements

## Components

### Stat Card
- Background: `bg-slate-800`
- Border: `border border-slate-700`
- Rounded: `rounded-xl`
- Icon container: colored circle with low-opacity background, e.g. `bg-sky-500/10 text-sky-400`
- Value: large bold number
- Label: small uppercase muted text

### Chart Area
- Background: `bg-slate-800 border border-slate-700 rounded-xl`
- Chart colors: sky-400, amber-400, emerald-400, violet-400
- Grid lines: `stroke="#334155"` (slate-700)
- Axis text: `fill="#94a3b8"` (slate-400)
- Tooltip: dark background `bg-slate-900 border-slate-700`

### Data Table
- Header: `bg-slate-700/50 text-slate-400 text-xs uppercase`
- Row: `border-b border-slate-700/50 hover:bg-slate-700/30`
- Cell: `text-slate-200 text-sm`

### Navigation / Header
- Background: `bg-slate-900 border-b border-slate-700`
- Logo/title: `text-sky-400 font-bold`

## Do's
- Always use dark backgrounds with light text for readability
- Use colored icons with matching low-opacity backgrounds for stat cards
- Use `text-slate-100` or `text-slate-200` for all important data values
- Use `text-slate-400` for labels and secondary info
- Keep charts clean with minimal grid lines

## Don'ts
- Never use white backgrounds — this is a dark-theme dashboard
- Never use black text on dark backgrounds
- Don't use more than 4 accent colors in a single view
- Don't use font sizes smaller than `text-xs` for data
