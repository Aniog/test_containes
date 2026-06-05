# Design System

## Color Palette

Primary blue theme with the following named colors in Tailwind config:

- **Primary**: `#1D4ED8` (blue-700) — main brand color, buttons, links
- **Primary Dark**: `#1E3A8A` (blue-900) — dark backgrounds, footer
- **Primary Light**: `#3B82F6` (blue-500) — hover states, accents
- **Accent**: `#60A5FA` (blue-400) — highlights, icons
- **Sky**: `#BAE6FD` (sky-200) — subtle backgrounds, badges
- **White**: `#FFFFFF` — text on dark backgrounds, cards
- **Gray Light**: `#F1F5F9` — section backgrounds
- **Gray Text**: `#64748B` — secondary text

## Typography

- **Font**: Inter (Google Fonts)
- **Headings**: `font-bold`, sizes from `text-4xl` to `text-6xl`
- **Body**: `font-normal`, `text-base` or `text-lg`, color `text-slate-600`
- **Labels/Captions**: `text-sm`, `text-slate-500`

## Spacing

- Section padding: `py-20 px-6` or `py-24 px-8`
- Container max width: `max-w-6xl mx-auto`
- Card padding: `p-8`
- Gap between grid items: `gap-8`

## Borders & Shadows

- Cards: `rounded-2xl shadow-lg`
- Buttons: `rounded-full` or `rounded-lg`
- Dividers: `border-blue-100`

## Component Styles

### Buttons
- Primary: `bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full transition`
- Secondary/Outline: `border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-3 rounded-full transition`
- Ghost: `text-blue-700 hover:underline font-medium`

### Cards
- `bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition`
- Icon container: `w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center`

### Navigation
- Background: `bg-white shadow-sm` (scrolled) / `bg-transparent` (top)
- Links: `text-slate-700 hover:text-blue-700 font-medium`
- Logo: `text-blue-700 font-bold text-xl`

### Hero Section
- Background: gradient `from-blue-900 via-blue-800 to-blue-600`
- Heading: `text-white font-bold`
- Subtext: `text-blue-100`

### Section Backgrounds
- Alternating: `bg-white` and `bg-slate-50`
- Accent sections: `bg-blue-700` with white text

## Do's
- Always use blue shades for interactive elements
- Use white text on blue backgrounds
- Use `text-slate-700` or `text-slate-600` for body text on white backgrounds
- Maintain generous whitespace between sections

## Don'ts
- Don't use dark text on dark blue backgrounds
- Don't use blue text on blue backgrounds
- Don't use very small font sizes for important content
- Don't mix too many different blue shades in one section
