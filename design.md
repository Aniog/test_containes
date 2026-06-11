# Design System

## Visual Style
Dark-themed weather dashboard with a deep navy/slate background and vibrant accent colors for data visualization.

## Colors
- Background: `bg-slate-900` (#0f172a)
- Surface/Card: `bg-slate-800` (#1e293b)
- Surface elevated: `bg-slate-700` (#334155)
- Border: `border-slate-700` (#334155)
- Primary accent: `text-sky-400` / `bg-sky-500` (#38bdf8 / #0ea5e9)
- Success/warm: `text-amber-400` (#fbbf24)
- Danger/rain: `text-blue-400` (#60a5fa)
- Text primary: `text-slate-100` (#f1f5f9)
- Text secondary: `text-slate-400` (#94a3b8)
- Text muted: `text-slate-500` (#64748b)

## Typography
- Font: Inter (system-ui fallback)
- Page title: `text-2xl font-bold text-slate-100`
- Section heading: `text-lg font-semibold text-slate-200`
- Card label: `text-xs font-medium text-slate-400 uppercase tracking-wide`
- Card value: `text-2xl font-bold text-slate-100`
- Body: `text-sm text-slate-300`

## Spacing & Layout
- Page padding: `p-6` desktop, `p-4` mobile
- Card padding: `p-5`
- Card gap: `gap-4`
- Grid: 4-column stat cards on desktop (`grid-cols-4`), 2-column on tablet (`md:grid-cols-2`), 1-column on mobile

## Borders & Shadows
- Cards: `rounded-xl border border-slate-700`
- Subtle shadow: `shadow-lg`

## Do's
- Always use explicit text colors on dark surfaces
- Use `text-slate-100` or `text-white` for important values
- Use `text-slate-400` for labels and secondary info
- Use colored icons to add visual interest (sky, amber, green, red)

## Don'ts
- Don't use light backgrounds without adjusting text color
- Don't use default gray text that blends into dark backgrounds
- Don't use `text-gray-*` — prefer `text-slate-*`
