# World Cup Merchandise Store — Design System

## Brand Identity
- **Theme**: FIFA World Cup 2026 (USA, Canada, Mexico)
- **Tone**: Energetic, bold, celebratory, international

## Color Palette
- **Primary**: `#C8102E` (FIFA Red) — `bg-red-700`, `text-red-700`
- **Secondary**: `#003DA5` (FIFA Blue) — `bg-blue-800`, `text-blue-800`
- **Accent Gold**: `#FFD700` — `text-yellow-400`, `bg-yellow-400`
- **Dark BG**: `#0A0E1A` — `bg-[#0A0E1A]`
- **Card BG**: `#111827` — `bg-gray-900`
- **Surface**: `#1F2937` — `bg-gray-800`
- **Border**: `#374151` — `border-gray-700`
- **Text Primary**: `#F9FAFB` — `text-gray-50`
- **Text Secondary**: `#9CA3AF` — `text-gray-400`
- **Text Muted**: `#6B7280` — `text-gray-500`

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Title**: `text-5xl md:text-7xl font-black tracking-tight text-white`
- **Section Title**: `text-3xl md:text-4xl font-bold text-white`
- **Card Title**: `text-lg font-semibold text-white`
- **Body**: `text-base text-gray-300`
- **Small/Caption**: `text-sm text-gray-400`
- **Price**: `text-xl font-bold text-yellow-400`

## Spacing & Layout
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-16 md:py-24`
- **Card Gap**: `gap-6`
- **Card Padding**: `p-4 md:p-6`

## Components

### Buttons
- **Primary**: `bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all`
- **Secondary**: `bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all`
- **Outline**: `border border-gray-600 hover:border-yellow-400 text-white px-6 py-3 rounded-lg transition-all`
- **Gold CTA**: `bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-lg transition-all`

### Cards
- Background: `bg-gray-900 border border-gray-800 rounded-xl overflow-hidden`
- Hover: `hover:border-red-700 hover:shadow-lg hover:shadow-red-900/20 transition-all`
- Image area: `aspect-square bg-gray-800`

### Navigation
- Background: `bg-[#0A0E1A]/95 backdrop-blur-sm border-b border-gray-800`
- Logo: `text-white font-black text-xl`
- Links: `text-gray-300 hover:text-white transition-colors`

### Badges
- **New**: `bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded`
- **Sale**: `bg-red-700 text-white text-xs font-bold px-2 py-1 rounded`
- **Hot**: `bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded`
- **Category**: `bg-blue-900 text-blue-300 text-xs font-medium px-3 py-1 rounded-full`

## Do's
- Use dark backgrounds throughout for a premium night-game atmosphere
- Use red and gold accents for CTAs and highlights
- Use bold, uppercase text for section headers
- Ensure all text is clearly readable against dark backgrounds
- Use grid layouts for product cards (2 cols mobile, 3-4 cols desktop)

## Don'ts
- Don't use light/white backgrounds for main sections
- Don't use low-contrast text (e.g. gray on gray)
- Don't use more than 3 font weights in one component
- Don't use rounded-full on rectangular product cards
