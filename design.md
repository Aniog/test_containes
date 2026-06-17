# Football Website Design System

## Color Palette
- Primary Green: `#16a34a` (green-600) — main brand color, CTAs, accents
- Dark Green: `#14532d` (green-900) — navbar background, footer
- Light Green: `#dcfce7` (green-100) — subtle backgrounds, badges
- Accent Gold: `#eab308` (yellow-500) — highlights, star ratings, awards
- Dark Background: `#0f172a` (slate-900) — hero section, dark cards
- Card Background: `#1e293b` (slate-800) — dark card surfaces
- Text Primary: `#f8fafc` (slate-50) — headings on dark backgrounds
- Text Secondary: `#94a3b8` (slate-400) — body text on dark backgrounds
- Text Dark: `#1e293b` (slate-800) — text on light backgrounds
- Border: `#334155` (slate-700) — subtle borders

## Typography
- Font Family: Inter (Google Fonts)
- Heading XL: `text-5xl md:text-7xl font-black tracking-tight`
- Heading LG: `text-3xl md:text-4xl font-bold`
- Heading MD: `text-xl md:text-2xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-slate-400`
- Label/Badge: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6 md:gap-8`
- Container max width: `max-w-7xl mx-auto`

## Borders & Shadows
- Card border radius: `rounded-2xl`
- Button border radius: `rounded-full`
- Card shadow: `shadow-xl`
- Hover shadow: `hover:shadow-2xl`

## Component Styles

### Navbar
- Background: `bg-green-900/95 backdrop-blur-md`
- Fixed at top: `fixed top-0 w-full z-50`
- Logo: bold white text with green accent icon

### Buttons
- Primary: `bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-full transition-all`
- Secondary: `border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 rounded-full transition-all`

### Cards
- Dark card: `bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1`
- Light card: `bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`

### Section Headers
- Eyebrow label: `text-green-400 text-xs font-semibold uppercase tracking-widest mb-3`
- Main heading: `text-3xl md:text-4xl font-bold text-white mb-4`
- Subheading: `text-slate-400 text-lg max-w-2xl mx-auto`

## Do's
- Use dark backgrounds (slate-900, slate-800) for most sections to create a premium feel
- Use green-600 as the primary accent color consistently
- Use gold/yellow for special highlights and awards
- Ensure all text has sufficient contrast against its background
- Use rounded-full for buttons and rounded-2xl for cards
- Add hover transitions for interactive elements

## Don'ts
- Don't use light backgrounds for hero or feature sections
- Don't mix too many colors — stick to the green/slate/gold palette
- Don't use small font sizes for important content
- Don't forget to set explicit text colors on dark backgrounds
