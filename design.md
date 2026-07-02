# World Cup 2026 Website Design System

## Theme
Dark, premium sports aesthetic. Deep navy/black backgrounds with vibrant gold accents.
Inspired by FIFA World Cup 2026 (USA, Canada, Mexico).

## Colors
- Background primary: `bg-[#0a0e1a]` (deep navy black)
- Background secondary: `bg-[#111827]` (dark navy)
- Background card: `bg-[#1a2235]` (card surface)
- Accent gold: `text-[#f5c518]` / `bg-[#f5c518]` (FIFA gold)
- Accent red: `text-[#e63946]` (highlight/live)
- Text primary: `text-white`
- Text secondary: `text-gray-400`
- Text muted: `text-gray-500`
- Border: `border-gray-700` / `border-[#2a3550]`
- Gradient hero: `from-[#0a0e1a] via-[#0d1b3e] to-[#0a0e1a]`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-black` or `font-bold`, uppercase for section titles
- Section labels: `text-xs font-bold tracking-widest uppercase text-[#f5c518]`
- Body: `text-sm` or `text-base text-gray-300`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16` or `py-20`
- Card padding: `p-4` or `p-6`
- Card radius: `rounded-xl` or `rounded-2xl`

## Components
- Cards: `bg-[#1a2235] border border-[#2a3550] rounded-xl`
- Badges: `bg-[#f5c518] text-black text-xs font-bold px-2 py-0.5 rounded`
- Live badge: `bg-[#e63946] text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse`
- Buttons primary: `bg-[#f5c518] text-black font-bold hover:bg-yellow-400`
- Buttons outline: `border border-[#f5c518] text-[#f5c518] hover:bg-[#f5c518] hover:text-black`
- Nav: `bg-[#0a0e1a]/90 backdrop-blur border-b border-[#2a3550]`

## Do's
- Use gold (#f5c518) as the primary accent color
- Use dark backgrounds consistently
- Use uppercase tracking-widest for section labels
- Use rounded-xl for cards
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- No light backgrounds
- No low-contrast text (e.g. gray on gray)
- No sans-serif fonts other than Inter
- No hardcoded hex codes outside of Tailwind config
