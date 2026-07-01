# Football Website Design System

## Brand Identity
A modern, energetic football website with a dark-themed aesthetic inspired by stadium lights and pitch green.

## Color Palette
- **Primary Green**: `#16a34a` (green-600) — main brand color, CTAs, accents
- **Dark Green**: `#14532d` (green-900) — deep backgrounds, hero overlays
- **Accent Yellow**: `#facc15` (yellow-400) — highlights, scores, badges
- **Background Dark**: `#0f172a` (slate-900) — page background
- **Surface Dark**: `#1e293b` (slate-800) — cards, panels
- **Surface Mid**: `#334155` (slate-700) — borders, dividers
- **Text Primary**: `#f8fafc` (slate-50) — headings, main text
- **Text Secondary**: `#94a3b8` (slate-400) — subtitles, meta info
- **Text Muted**: `#64748b` (slate-500) — placeholders, disabled

## Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: `font-bold` or `font-extrabold`, tracking tight
  - H1: `text-5xl md:text-7xl font-extrabold`
  - H2: `text-3xl md:text-4xl font-bold`
  - H3: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base font-normal text-slate-300`
- **Small/Meta**: `text-sm text-slate-400`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Navbar
- Dark background: `bg-slate-900/95 backdrop-blur`
- Logo with green accent
- Links: `text-slate-300 hover:text-green-400 transition-colors`
- Active: `text-green-400`
- Mobile hamburger menu

### Buttons
- Primary: `bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border border-green-600 text-green-400 hover:bg-green-600/10 px-6 py-3 rounded-lg`
- Ghost: `text-slate-300 hover:text-white`

### Cards
- Background: `bg-slate-800 rounded-xl overflow-hidden`
- Border: `border border-slate-700`
- Hover: `hover:border-green-600/50 transition-all`
- Shadow: `shadow-lg`

### Badges
- Live: `bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded`
- Category: `bg-green-600/20 text-green-400 text-xs font-medium px-2 py-0.5 rounded`
- Score: `bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded`

## Do's
- Use dark backgrounds throughout for a premium stadium feel
- Use green-600 as the primary action color
- Use yellow-400 sparingly for scores and highlights
- Ensure all text has sufficient contrast against dark backgrounds
- Use rounded-xl for cards, rounded-lg for buttons
- Add subtle hover transitions (transition-all duration-200)

## Don'ts
- Don't use white backgrounds — keep the dark theme consistent
- Don't use low-contrast text (e.g., slate-600 on slate-800)
- Don't use more than 2 accent colors per section
- Don't use serif fonts
