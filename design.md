# Design System

## Visual Style
Clean, modern weather dashboard with a light blue-gray color palette. Professional data-focused layout with clear hierarchy.

## Colors
- Background: `bg-slate-100` (#f1f5f9)
- Card background: `bg-white`
- Primary accent: `bg-blue-600` / `text-blue-600`
- Secondary accent: `bg-sky-500` / `text-sky-500`
- Text primary: `text-slate-800`
- Text secondary: `text-slate-500`
- Text muted: `text-slate-400`
- Border: `border-slate-200`
- Sunny/warm: `text-amber-500`
- Rain/cold: `text-blue-400`
- Cloudy: `text-slate-400`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-slate-800`
- Section heading: `text-lg font-semibold text-slate-700`
- Card value: `text-3xl font-bold text-slate-800`
- Label: `text-sm font-medium text-slate-500`
- Body: `text-sm text-slate-600`

## Spacing
- Page padding: `p-6` or `p-8`
- Card padding: `p-5` or `p-6`
- Gap between cards: `gap-4` or `gap-6`
- Section gap: `gap-6`

## Borders & Shadows
- Card: `rounded-xl shadow-sm border border-slate-200`
- Stat card: `rounded-xl shadow-sm border border-slate-200`
- No heavy shadows — keep it light and airy

## Layout
- Desktop: multi-column grid (`grid-cols-4` for stat cards, `grid-cols-2` for charts)
- Mobile: single column (`grid-cols-1`)
- Max width: `max-w-7xl mx-auto`

## Do's
- Use consistent card styling across all panels
- Keep text clearly readable against white/light backgrounds
- Use color-coded weather icons (amber for sun, blue for rain, gray for clouds)
- Show data trends with recharts line/bar charts

## Don'ts
- No dark backgrounds on main content areas
- No low-contrast text (e.g., light gray on white)
- No overly decorative elements
