# 2026 FIFA World Cup - Design System

## Theme
Dark, energetic football theme with bold colors inspired by the USA, Canada, and Mexico flags.
The site should feel modern, dynamic, and exciting.

## Colors
- Primary background: `bg-gray-950` (#030712) - deep dark
- Secondary background: `bg-gray-900` (#111827)
- Card background: `bg-gray-800` (#1f2937)
- Accent red: `text-red-500` / `bg-red-600` (#dc2626) - passion, energy
- Accent gold: `text-yellow-400` / `bg-yellow-500` (#eab308) - trophy, glory
- Accent green: `text-green-400` / `bg-green-500` (#22c55e) - pitch, Mexico
- Text primary: `text-white`
- Text secondary: `text-gray-300`
- Text muted: `text-gray-500`
- Border: `border-gray-700`

## Typography
- Font: Inter (Google Fonts)
- Hero title: `text-5xl md:text-7xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-gray-300`
- Caption: `text-sm text-gray-500`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`

## Borders & Shadows
- Card border: `border border-gray-700 rounded-xl`
- Hover shadow: `hover:shadow-lg hover:shadow-red-900/20`
- Gradient borders: use `bg-gradient-to-r from-red-600 via-yellow-500 to-green-500`

## Buttons
- Primary: `bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg`
- Secondary: `border border-gray-600 hover:border-red-500 text-white px-6 py-3 rounded-lg`
- Icon button: `p-2 rounded-full bg-gray-800 hover:bg-gray-700`

## Navigation
- Sticky top nav: `bg-gray-950/90 backdrop-blur-md border-b border-gray-800`
- Nav links: `text-gray-300 hover:text-white font-medium`
- Active link: `text-red-500 font-semibold`

## Cards
- Match card: dark bg, team flags, score, status badge
- Team card: flag, team name, group, stats
- News card: image, category badge, title, date

## Do's
- Use gradient text for hero headings: `bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent`
- Use subtle grid/pattern backgrounds for sections
- Use bold numbers for stats
- Use colored badges for match status (LIVE=red, FT=gray, upcoming=green)

## Don'ts
- Don't use light backgrounds
- Don't use low-contrast text on dark backgrounds
- Don't use serif fonts
- Don't use rounded-full for large cards
