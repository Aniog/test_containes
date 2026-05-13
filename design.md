# Design System — Blue Theme

## Color Palette
- Primary: `#1D4ED8` (blue-700) — main brand color
- Primary Light: `#3B82F6` (blue-500) — hover states, accents
- Primary Dark: `#1E3A8A` (blue-900) — dark backgrounds, footer
- Accent: `#60A5FA` (blue-400) — highlights, icons
- Background Light: `#EFF6FF` (blue-50) — section backgrounds
- Background White: `#FFFFFF` — card backgrounds
- Text Dark: `#1E3A8A` (blue-900) — headings on light backgrounds
- Text Body: `#374151` (gray-700) — body text
- Text Muted: `#6B7280` (gray-500) — secondary text
- Text White: `#FFFFFF` — text on dark/blue backgrounds

## Typography
- Font Family: Inter (Google Fonts)
- Heading XL: `text-5xl font-bold` (hero titles)
- Heading LG: `text-4xl font-bold` (section titles)
- Heading MD: `text-2xl font-semibold` (card titles)
- Body: `text-base font-normal` (paragraphs)
- Small: `text-sm` (captions, labels)

## Spacing
- Section padding: `py-20 px-6` or `py-16 px-6`
- Container max width: `max-w-6xl mx-auto`
- Card padding: `p-8`
- Gap between cards: `gap-8`

## Borders & Shadows
- Card border: `border border-blue-100`
- Card shadow: `shadow-md hover:shadow-xl`
- Border radius: `rounded-2xl` for cards, `rounded-full` for buttons/badges
- Navbar border: `border-b border-blue-100`

## Buttons
- Primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition`
- Secondary/Outline: `border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-3 rounded-full transition`
- Ghost (on dark bg): `border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-full transition`

## Component Styles
- Navbar: white background, sticky top, shadow on scroll
- Hero: gradient from `blue-700` to `blue-900`, white text
- Feature cards: white background, blue icon, subtle border and shadow
- About section: `blue-50` background
- CTA section: `blue-700` background, white text
- Footer: `blue-900` background, white/blue-200 text

## Do's
- Always use white text on blue backgrounds
- Use blue-50 for alternating section backgrounds
- Use blue-600/700 for primary interactive elements
- Maintain consistent rounded corners (rounded-2xl for cards)

## Don'ts
- Never use dark text on dark blue backgrounds
- Avoid mixing too many shades of blue in one section
- Don't use gray backgrounds — prefer blue-50 for light sections
