# FIFA World Cup 2026 Design System

## Theme
Dark premium sports theme with vibrant accent colors. Inspired by the official FIFA World Cup 2026 branding.

## Colors
- Background primary: `#0a0e1a` (deep navy black)
- Background secondary: `#111827` (dark navy)
- Background card: `#1a2235` (card surface)
- Background elevated: `#1e2d45` (elevated card)
- Accent primary: `#e8b84b` (gold/amber) — `text-amber-400`, `bg-amber-400`
- Accent red: `#e63946` — `text-red-500`, `bg-red-500`
- Accent blue: `#3b82f6` — `text-blue-500`
- Accent green: `#22c55e` — `text-green-500`
- Text primary: `#f1f5f9` — `text-slate-100`
- Text secondary: `#94a3b8` — `text-slate-400`
- Text muted: `#64748b` — `text-slate-500`
- Border: `#1e3a5f` — `border-blue-900/50`
- Host country highlight: gradient from `#e63946` to `#3b82f6` (USA), green (Mexico), red (Canada)

## Typography
- Font: Inter (Google Fonts)
- Headings: bold/extrabold, tracking-tight
- Body: regular weight, slate-300
- Labels/badges: uppercase, tracking-wider, text-xs/sm

## Spacing
- Section padding: `py-16 px-4` or `py-12 px-6`
- Card padding: `p-4` or `p-6`
- Gap between cards: `gap-4` or `gap-6`

## Borders & Shadows
- Cards: `rounded-xl border border-blue-900/40 shadow-lg`
- Elevated: `rounded-2xl shadow-2xl`
- Hover: `hover:border-amber-400/50 transition-all`

## Component Styles
- Navbar: fixed top, dark bg with blur, gold accent on active link
- Hero: full-screen with gradient overlay, large bold text
- Group table: dark rows, alternating subtle bg, colored rank indicators
- Match card: dark card, team flags/names, score display
- Badge/pill: rounded-full, colored by status (live=red, upcoming=blue, finished=slate)

## Do's
- Use `text-slate-100` or `text-white` for important text on dark backgrounds
- Use `text-amber-400` for highlights and accents
- Use gradient text for hero headings: `bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent`
- Always ensure sufficient contrast on dark backgrounds

## Don'ts
- Don't use light backgrounds for main content areas
- Don't use gray text on dark gray backgrounds (too low contrast)
- Don't use default browser button styles
