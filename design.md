# Design System — Weather Dashboard

## Visual Style
Clean, modern data dashboard with a light background and strong contrast. Uses a cool blue/slate palette to evoke weather and sky themes. Cards have subtle shadows and rounded corners.

## Colors
- Background: `bg-slate-100` (#f1f5f9)
- Surface / Card: `bg-white`
- Primary accent: `bg-blue-600` (#2563eb)
- Primary light: `bg-blue-50` (#eff6ff)
- Text primary: `text-slate-800`
- Text secondary: `text-slate-500`
- Text on primary: `text-white`
- Border: `border-slate-200`
- Success / warm: `text-orange-500` (sunny)
- Info / cool: `text-blue-500` (rain/cloud)
- Danger: `text-red-500`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-slate-800`
- Section heading: `text-lg font-semibold text-slate-700`
- Card value (large): `text-4xl font-bold text-slate-800`
- Card label: `text-sm font-medium text-slate-500 uppercase tracking-wide`
- Body: `text-sm text-slate-600`
- Caption: `text-xs text-slate-400`

## Spacing & Layout
- Page padding: `p-6` or `p-8`
- Card padding: `p-5` or `p-6`
- Grid gap: `gap-4` or `gap-6`
- Section gap: `mb-6` or `mb-8`

## Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-5`
- Hover: `hover:shadow-md transition-shadow`

## Borders & Radius
- Cards: `rounded-xl`
- Badges/chips: `rounded-full`
- Buttons: `rounded-lg`

## Do's
- Use consistent card styles across all data panels
- Keep text clearly readable — dark text on white/light backgrounds
- Use icons alongside labels for quick scanning
- Use recharts for all chart visualizations

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use low-contrast text (e.g. gray on gray)
- Don't use inline styles — use Tailwind classes only
- Don't hardcode hex values in JSX — use Tailwind named colors
