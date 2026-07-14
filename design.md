# Design System

## Brand
Clean, modern SaaS landing page. Professional, trustworthy, approachable.

## Colors
- Primary: Indigo — `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- Primary light: `bg-indigo-50`, `text-indigo-700`
- Accent: `text-indigo-400`
- Background: White `bg-white`, light gray sections `bg-gray-50`
- Surface/Card: `bg-white` with `border border-gray-200 rounded-2xl shadow-sm`
- Text primary: `text-gray-900`
- Text secondary: `text-gray-600`
- Text muted: `text-gray-400`
- Success: `text-green-600`, `bg-green-50`
- Error: `text-red-600`, `bg-red-50`
- Border: `border-gray-200`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight`
- Section heading: `text-3xl md:text-4xl font-bold text-gray-900`
- Subheading: `text-xl font-semibold text-gray-900`
- Body: `text-base text-gray-600 leading-relaxed`
- Label: `text-sm font-medium text-gray-700`
- Caption/muted: `text-sm text-gray-400`

## Spacing
- Section padding: `py-20 px-4`
- Container: `max-w-6xl mx-auto`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Borders & Shadows
- Card: `rounded-2xl border border-gray-200 shadow-sm`
- Input: `rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`
- Button primary: `rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-semibold px-6 py-3`
- Button secondary: `rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3`

## Do's
- Use consistent indigo as the primary action color
- Use rounded-2xl for cards, rounded-lg for inputs/buttons
- Keep sections alternating white / gray-50 for visual rhythm
- Use shadow-sm on cards for subtle depth
- Always ensure text is readable against its background

## Don'ts
- Don't use dark backgrounds for the main content area
- Don't mix multiple accent colors
- Don't use font sizes smaller than text-sm for body content
- Don't use low-contrast text (e.g. gray-300 on white)
