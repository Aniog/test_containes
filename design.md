# Design System — Football World Cup Website

## Visual Style
A bold, energetic sports website with a dark green pitch-inspired theme, gold accents for trophies and highlights, and clean white text for readability.

## Color Palette
- **Primary Background**: `bg-gray-950` (#030712) — deep dark base
- **Section Alt Background**: `bg-gray-900` (#111827)
- **Card Background**: `bg-gray-800` (#1f2937)
- **Primary Green**: `bg-green-700` (#15803d) — football pitch green
- **Accent Gold**: `text-yellow-400` (#facc15) — trophy / highlight gold
- **Accent Gold Dark**: `text-yellow-500` (#eab308)
- **Text Primary**: `text-white`
- **Text Secondary**: `text-gray-300`
- **Text Muted**: `text-gray-400`
- **Border**: `border-gray-700`

## Typography
- **Font**: Inter (Google Fonts)
- **Hero Title**: `text-5xl md:text-7xl font-black tracking-tight text-white`
- **Section Title**: `text-3xl md:text-4xl font-bold text-white`
- **Card Title**: `text-xl font-bold text-white`
- **Body**: `text-base text-gray-300`
- **Label / Badge**: `text-sm font-semibold uppercase tracking-wider`

## Spacing & Layout
- **Section Padding**: `py-16 md:py-24 px-4`
- **Container**: `max-w-6xl mx-auto`
- **Card Gap**: `gap-6 md:gap-8`
- **Card Padding**: `p-6`
- **Border Radius**: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Components

### Navigation
- Fixed top bar, dark background with slight blur
- Logo left, nav links right
- Active link: `text-yellow-400`

### Hero Section
- Full-viewport height, dark overlay on background image
- Large bold headline, subtitle, CTA button
- CTA Button: `bg-yellow-400 text-gray-950 font-bold rounded-full px-8 py-3 hover:bg-yellow-300`

### Cards
- `bg-gray-800 rounded-2xl overflow-hidden border border-gray-700`
- Hover: `hover:border-yellow-400 transition-colors`

### Badges / Pills
- `bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full`
- Gold variant: `bg-yellow-400 text-gray-950`

### Stats / Numbers
- Large number: `text-4xl font-black text-yellow-400`
- Label below: `text-sm text-gray-400 uppercase tracking-wider`

### Section Dividers
- Subtle: `border-t border-gray-800`

## Do's
- Use dark backgrounds throughout for a premium sports feel
- Use yellow-400 gold for all highlights, numbers, and CTAs
- Use green-700 for football-related accents (pitch, badges)
- Ensure all text has strong contrast against its background
- Use bold/black font weights for headings and stats

## Don'ts
- Don't use light backgrounds (white/gray-100) — breaks the dark theme
- Don't use low-contrast text (e.g. gray-500 on gray-800)
- Don't use thin font weights for headings
- Don't hardcode hex colors — use Tailwind named classes
