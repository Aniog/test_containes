# Design System — Green Nature Website

## Brand Identity
A fresh, nature-inspired green website. Clean, modern, and eco-friendly aesthetic.

## Color Palette

### Primary Colors
- `green-950` (#052e16) — Darkest green, used for deep backgrounds
- `green-900` (#14532d) — Dark green, footer background
- `green-800` (#166534) — Dark accent
- `green-700` (#15803d) — Primary button hover
- `green-600` (#16a34a) — Primary brand color, buttons, links
- `green-500` (#22c55e) — Accent highlights, icons
- `green-400` (#4ade80) — Light accent, hover states
- `green-100` (#dcfce7) — Light background tints
- `green-50`  (#f0fdf4) — Page background sections

### Neutral Colors
- `white` — Card backgrounds, text on dark
- `gray-50` — Subtle section backgrounds
- `gray-100` — Borders, dividers
- `gray-600` — Body text
- `gray-800` — Headings on light backgrounds
- `gray-900` — Primary dark text

## Typography

### Font Family
- Primary: `Inter` (Google Fonts)
- Fallback: `system-ui, sans-serif`

### Scale
- Hero heading: `text-5xl md:text-7xl font-extrabold`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal`
- Small/caption: `text-sm`

## Spacing
- Section padding: `py-20 px-6`
- Container max-width: `max-w-6xl mx-auto`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-8`

## Borders & Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full`
- Badges: `rounded-full`
- Inputs: `rounded-xl`

## Shadows
- Cards: `shadow-md hover:shadow-xl`
- Navbar: `shadow-sm`

## Buttons
- Primary: `bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition`
- Secondary/Outline: `border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-full transition`
- Ghost (on dark): `text-white border-2 border-white hover:bg-white hover:text-green-900 rounded-full`

## Component Patterns

### Navbar
- Sticky top, white background with subtle shadow
- Logo in green-600, nav links in gray-700 hover:text-green-600
- CTA button: primary style

### Hero Section
- Full-height, gradient background from green-900 to green-700
- Large white heading, green-300 accent text
- Two CTA buttons (primary + ghost)
- Background image overlay with low opacity

### Feature Cards
- White background, rounded-2xl, shadow-md
- Green icon on top (text-green-600)
- Gray-800 heading, gray-600 body

### Stats Section
- Green-600 background, white text
- Large bold numbers

### About Section
- Alternating image + text layout
- Green accent on section label

### Contact / CTA Section
- Green-50 background
- Centered layout

### Footer
- Dark green-900 background, white/green-300 text

## Do's
- Use green as the dominant brand color throughout
- Maintain high contrast: white text on green backgrounds, dark text on white/light backgrounds
- Use rounded-full for all buttons
- Add hover transitions on interactive elements
- Use consistent section padding (py-20)

## Don'ts
- Don't use green text on green backgrounds
- Don't use gray text on dark green backgrounds
- Don't mix too many font weights
- Don't use sharp corners on cards or buttons
