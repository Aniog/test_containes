# Design System — Apple Watch Page

## Visual Style
Clean, minimal, premium. Inspired by Apple's product marketing aesthetic: generous whitespace, bold typography, high-contrast sections, and smooth transitions.

## Colors
- Background primary: `bg-white` (#ffffff)
- Background secondary: `bg-gray-50` (#f9fafb)
- Background dark: `bg-black` (#000000)
- Background dark-alt: `bg-zinc-900` (#18181b)
- Text primary (light bg): `text-gray-900` (#111827)
- Text secondary (light bg): `text-gray-500` (#6b7280)
- Text primary (dark bg): `text-white`
- Text secondary (dark bg): `text-gray-400`
- Accent blue: `text-blue-500` / `bg-blue-500` (#3b82f6)
- Accent gradient: `from-blue-500 to-purple-600`
- Border: `border-gray-200`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero headline: `text-5xl md:text-7xl font-bold tracking-tight`
- Section headline: `text-3xl md:text-5xl font-bold tracking-tight`
- Subheadline: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-gray-500`
- Label/caption: `text-sm font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

## Borders & Shadows
- Card border: `border border-gray-200 rounded-2xl`
- Card shadow: `shadow-sm hover:shadow-md transition-shadow`
- Dark card: `bg-zinc-900 rounded-2xl`
- Button primary: `bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 font-medium`
- Button secondary: `border border-gray-300 hover:border-gray-400 text-gray-900 rounded-full px-6 py-3 font-medium`

## Layout
- Single-column hero, then alternating or grid layouts
- Feature cards: 2-col on md, 4-col on lg
- Series cards: 3-col on md+
- Responsive: stack to single column on mobile

## Do's
- Use lots of whitespace between sections
- Bold, large headlines with tight tracking
- Subtle section background alternation (white / gray-50 / black)
- Smooth hover transitions on cards and buttons
- Use stock images for watch product shots and lifestyle imagery

## Don'ts
- No busy backgrounds or heavy gradients on text
- No small, hard-to-read body text
- No crowded layouts — keep breathing room
- No low-contrast text combinations
