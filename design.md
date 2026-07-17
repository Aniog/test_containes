# NBA Website Design System

## Brand Identity
NBA-themed sports website with a bold, energetic visual style. Dark backgrounds with vibrant orange accents convey the excitement and intensity of professional basketball.

## Color Palette

### Primary Colors
- **NBA Orange**: `#F4500E` — primary accent, CTAs, highlights (`text-orange-500`, `bg-orange-500`)
- **Deep Orange**: `#C9430A` — hover states, darker accents (`text-orange-700`, `bg-orange-700`)
- **Court Black**: `#0F0F0F` — primary dark background (`bg-gray-950`)
- **Dark Surface**: `#1A1A2E` — card backgrounds, panels (`bg-gray-900`)
- **Mid Surface**: `#16213E` — secondary panels (`bg-gray-800`)

### Neutral Colors
- **White**: `#FFFFFF` — primary text on dark backgrounds (`text-white`)
- **Light Gray**: `#E5E7EB` — secondary text (`text-gray-200`)
- **Muted Gray**: `#9CA3AF` — tertiary text, labels (`text-gray-400`)
- **Border**: `#374151` — dividers, borders (`border-gray-700`)

### Status Colors
- **Success**: `#22C55E` — green-500
- **Warning**: `#EAB308` — yellow-500
- **Error**: `#EF4444` — red-500

## Typography

### Font Family
- Primary: `Inter` (Google Fonts) — all body text
- Display: `Inter` with `font-black` or `font-extrabold` for headings

### Scale
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal`
- Caption/label: `text-sm text-gray-400`

## Spacing & Layout
- Page max width: `max-w-7xl mx-auto`
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Component Styles

### Navigation
- Dark background: `bg-gray-950/95 backdrop-blur`
- Fixed top: `fixed top-0 w-full z-50`
- Logo: orange accent text
- Nav links: `text-gray-300 hover:text-orange-500 transition-colors`

### Cards
- Background: `bg-gray-900 border border-gray-800`
- Hover: `hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10`
- Rounded: `rounded-xl`

### Buttons
- Primary: `bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-6 py-3`
- Secondary: `border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg px-6 py-3`
- Ghost: `text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg`

### Badges
- Tier badge: `bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-3 py-1 text-xs font-medium`
- Status badge: `bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-3 py-1 text-xs`

### Tables
- Header: `bg-gray-800 text-gray-400 text-xs uppercase tracking-wider`
- Row: `border-b border-gray-800 hover:bg-gray-800/50`
- Cell text: `text-gray-200`

### Forms / Inputs
- Background: `bg-gray-800 border border-gray-700`
- Focus: `focus:border-orange-500 focus:ring-1 focus:ring-orange-500`
- Text: `text-white placeholder:text-gray-500`
- Rounded: `rounded-lg`

## Do's
- Always use explicit text colors on dark backgrounds (never rely on inherited color)
- Use orange accents sparingly for emphasis — not on every element
- Maintain high contrast: white/light text on dark surfaces
- Use `backdrop-blur` for overlays and modals
- Add subtle gradients to hero sections for depth

## Don'ts
- Don't use light backgrounds for main content areas
- Don't use low-contrast text (e.g., gray-600 on gray-900)
- Don't use default browser button styles
- Don't hardcode hex colors — use Tailwind named classes
- Don't use more than 2 accent colors per section
