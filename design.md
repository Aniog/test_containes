# Design System — Weather Dashboard

## Color Palette

| Role | Hex | Tailwind Class |
|---|---|---|
| Background | #0f172a | `bg-slate-950` |
| Surface / Card | #1e293b | `bg-slate-800` |
| Surface Elevated | #334155 | `bg-slate-700` |
| Border | #475569 | `border-slate-600` |
| Primary Accent | #38bdf8 | `text-sky-400` / `bg-sky-400` |
| Primary Hover | #0ea5e9 | `hover:bg-sky-500` |
| Success / Warm | #fb923c | `text-orange-400` |
| Cool / Cold | #818cf8 | `text-indigo-400` |
| Text Primary | #f1f5f9 | `text-slate-100` |
| Text Secondary | #94a3b8 | `text-slate-400` |
| Text Muted | #64748b | `text-slate-500` |

## Typography

- **Font**: Inter (Google Fonts)
- **Page Title**: `text-2xl font-bold text-slate-100`
- **Section Heading**: `text-lg font-semibold text-slate-100`
- **Card Label**: `text-xs font-medium uppercase tracking-wider text-slate-400`
- **Card Value**: `text-3xl font-bold text-slate-100`
- **Body**: `text-sm text-slate-300`
- **Muted**: `text-xs text-slate-500`

## Spacing & Layout

- Page padding: `p-6` (desktop), `p-4` (mobile)
- Card padding: `p-5`
- Grid gap: `gap-4` or `gap-6`
- Border radius: `rounded-xl` for cards, `rounded-lg` for inner elements
- Stat cards: 4-column grid on desktop (`grid-cols-4`), 2-column on tablet (`sm:grid-cols-2`), 1-column on mobile

## Components

### Stat Card
- Background: `bg-slate-800`
- Border: `border border-slate-700`
- Rounded: `rounded-xl`
- Icon: colored icon top-right, 40x40 area
- Label: `text-xs uppercase tracking-wider text-slate-400`
- Value: `text-3xl font-bold text-slate-100`
- Trend: small badge with up/down arrow

### Chart Area
- Background: `bg-slate-800 border border-slate-700 rounded-xl`
- Chart lines: sky-400 for temperature, orange-400 for humidity, indigo-400 for wind
- Grid lines: `stroke="#334155"` (slate-700)
- Tooltip: dark background `bg-slate-900 border-slate-600`

### Data Table
- Header: `bg-slate-900 text-slate-400 text-xs uppercase`
- Row: `bg-slate-800 border-b border-slate-700`
- Row hover: `hover:bg-slate-700`
- Cell text: `text-slate-200`

### Weather Icon Badges
- Sunny: `text-yellow-400`
- Cloudy: `text-slate-400`
- Rainy: `text-sky-400`
- Stormy: `text-indigo-400`
- Snowy: `text-blue-200`

## Do's
- Always use dark backgrounds with light text
- Use sky-400 as the primary accent for interactive elements
- Use consistent border-slate-700 for all card borders
- Use rounded-xl for all card containers
- Ensure chart tooltips have dark backgrounds with readable text

## Don'ts
- Don't use white backgrounds
- Don't use light-mode color schemes
- Don't use font sizes smaller than `text-xs`
- Don't use low-contrast text (e.g. slate-600 on slate-800)
- Don't use inline styles — use Tailwind classes only
