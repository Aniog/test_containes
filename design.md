# Design Guide

## Visual Style
Clean, modern, minimal. Generous spacing, soft shadows, rounded corners.

## Colors
- Page background: `bg-slate-50`
- Card / surface: `bg-white`
- Primary text: `text-slate-900`
- Secondary text: `text-slate-600`
- Muted text: `text-slate-500`
- Accent (primary): `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- Accent (subtle): `bg-indigo-50`, `text-indigo-700`
- Border: `border-slate-200`

## Typography
- Font family: Inter (via Google Fonts)
- Headings: `font-semibold` or `font-bold`, `tracking-tight`
- Body: `text-base text-slate-700 leading-relaxed`
- Hero: `text-4xl md:text-6xl font-bold tracking-tight text-slate-900`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-6xl mx-auto px-6`
- Card padding: `p-6 md:p-8`

## Borders & Shadows
- Radius: `rounded-2xl` for cards, `rounded-xl` for buttons/inputs
- Shadow: `shadow-sm` for cards, `shadow-lg` for hero/CTA

## Do's
- Always set readable foreground text colors explicitly on colored surfaces.
- Use Tailwind breakpoints (`md:`, `lg:`) for responsive design.
- Maintain consistent spacing with the scale above.

## Don'ts
- Don't use low-contrast text (e.g. light gray on light gray).
- Don't hardcode arbitrary hex values inside class strings.
- Don't stack everything in single columns on desktop.
