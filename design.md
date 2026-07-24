# Football App Design System

## Visual Identity
A bold, modern football/soccer website with a dark theme and vibrant green accents. Inspired by top sports platforms like ESPN, BBC Sport, and UEFA.

## Color Palette
- **Primary Background**: `bg-gray-950` (#030712) — deep dark base
- **Secondary Background**: `bg-gray-900` (#111827) — cards, panels
- **Surface**: `bg-gray-800` (#1f2937) — elevated cards, table rows
- **Accent Green**: `bg-green-500` (#22c55e) — primary CTA, highlights, badges
- **Accent Green Dark**: `bg-green-600` (#16a34a) — hover states
- **Accent Yellow**: `bg-yellow-400` (#facc15) — live indicators, warnings
- **Text Primary**: `text-white` — headings, key data
- **Text Secondary**: `text-gray-300` — body text, descriptions
- **Text Muted**: `text-gray-500` — timestamps, labels
- **Border**: `border-gray-700` — dividers, card borders
- **Red Accent**: `text-red-400` — losses, negative stats

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Heading**: `text-5xl md:text-7xl font-black tracking-tight text-white`
- **Section Title**: `text-2xl md:text-3xl font-bold text-white`
- **Card Title**: `text-lg font-semibold text-white`
- **Body**: `text-sm text-gray-300`
- **Label/Badge**: `text-xs font-bold uppercase tracking-widest`
- **Score**: `text-3xl font-black text-white`

## Spacing
- Section padding: `py-16 md:py-24`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`
- Container: `max-w-7xl mx-auto px-4 md:px-8`

## Components

### Cards
- Background: `bg-gray-900 border border-gray-800 rounded-xl`
- Hover: `hover:border-green-500/50 transition-all duration-200`
- Shadow: `shadow-lg`

### Buttons
- Primary: `bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg`
- Secondary: `bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg border border-gray-700`
- Ghost: `text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg`

### Badges
- Live: `bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse`
- Win: `bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded`
- Draw: `bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded`
- Loss: `bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded`

### Tables
- Header: `bg-gray-800 text-gray-400 text-xs uppercase tracking-wider`
- Row: `border-b border-gray-800 hover:bg-gray-800/50`
- Highlight row (top 4): `border-l-2 border-green-500`

### Navbar
- Background: `bg-gray-950/95 backdrop-blur-sm border-b border-gray-800`
- Sticky at top

## Do's
- Use dark backgrounds throughout — never white or light gray as base
- Use green-500 as the primary accent color consistently
- Bold, high-contrast typography for scores and key stats
- Use uppercase tracking-widest for section labels and badges
- Rounded-xl for cards, rounded-full for badges/avatars

## Don'ts
- Don't use light mode colors
- Don't use low-contrast text on dark backgrounds
- Don't use more than 2 accent colors (green + yellow)
- Don't use thin font weights for important data
- Don't use rounded-none for cards
