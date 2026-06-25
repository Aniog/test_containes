# World Cup 2026 Prediction Website — Design System

## Theme
Dark sports theme inspired by football pitches and trophy gold. Professional, energetic, and immersive.

## Colors
- Background: `#0f172a` (deep navy) — `bg-[#0f172a]`
- Surface/Card: `#1e293b` (dark slate) — `bg-[#1e293b]`
- Surface Elevated: `#263348` — `bg-[#263348]`
- Primary Green: `#16a34a` — `bg-green-600`, `text-green-600`
- Primary Green Dark: `#15803d` — `bg-green-700`
- Gold/Accent: `#f59e0b` — `text-amber-400`, `bg-amber-400`
- Gold Dark: `#d97706` — `text-amber-500`
- Text Primary: `#f1f5f9` — `text-slate-100`
- Text Secondary: `#94a3b8` — `text-slate-400`
- Text Muted: `#64748b` — `text-slate-500`
- Border: `#334155` — `border-slate-700`
- Win: `#22c55e` — `text-green-500`
- Draw: `#f59e0b` — `text-amber-400`
- Loss: `#ef4444` — `text-red-500`
- Live: `#ef4444` — `text-red-500`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold` or `font-extrabold`, `tracking-tight`
- Body: `font-normal`, `text-slate-300`
- Labels/Caps: `text-xs font-semibold uppercase tracking-widest text-slate-400`
- Numbers/Scores: `font-mono font-bold`

## Spacing
- Section padding: `py-12 px-4` or `py-16 px-6`
- Card padding: `p-4` or `p-6`
- Gap between cards: `gap-4` or `gap-6`

## Borders & Radius
- Cards: `rounded-xl border border-slate-700`
- Buttons: `rounded-lg`
- Badges: `rounded-full`
- Inputs: `rounded-lg border border-slate-600`

## Shadows
- Cards: `shadow-lg`
- Elevated: `shadow-xl`

## Components

### Navbar
- Dark background `bg-[#0f172a]` with bottom border `border-slate-800`
- Logo with trophy icon in gold
- Links in `text-slate-300 hover:text-white`
- Active link: `text-amber-400`

### Match Card
- `bg-[#1e293b] rounded-xl border border-slate-700 p-4`
- Team flags/names centered with score in the middle
- Status badge: LIVE (red), UPCOMING (blue), FINISHED (gray)
- Group label in top-left corner

### Prediction Form
- Inline score inputs with `+/-` buttons
- Submit button: `bg-green-600 hover:bg-green-700 text-white`

### Leaderboard
- Rank number with gold/silver/bronze for top 3
- Points badge in amber

### Group Standings Table
- Striped rows, compact
- Column headers: P W D L GF GA GD Pts

## Do's
- Use `text-slate-100` or `text-white` for important text on dark backgrounds
- Use `text-amber-400` for highlights and accents
- Use `text-green-400` for positive/win states
- Always set explicit text colors on dark card backgrounds
- Use `font-mono` for scores and numbers

## Don'ts
- Don't use light backgrounds (white/gray-100) — this is a dark theme
- Don't use default browser button styles
- Don't leave text color implicit on dark surfaces
- Don't use small font sizes for scores (min `text-2xl`)
