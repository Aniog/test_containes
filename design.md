# Design System — Apple Watch Page

## Visual Style
Clean, minimal, Apple-inspired aesthetic. Generous whitespace, bold typography, and high-contrast sections that alternate between white and near-black backgrounds.

## Colors
- Background (primary): `bg-white` (#ffffff)
- Background (dark section): `bg-black` (#000000)
- Background (light gray): `bg-gray-50` (#f9fafb)
- Background (mid gray): `bg-gray-100` (#f3f4f6)
- Text (primary on light): `text-gray-900` (#111827)
- Text (secondary on light): `text-gray-500` (#6b7280)
- Text (primary on dark): `text-white`
- Text (secondary on dark): `text-gray-400`
- Accent / CTA: `bg-blue-600` (#2563eb), hover `bg-blue-700`
- Accent text: `text-blue-600`
- Border: `border-gray-200`

## Typography
- Font: SF Pro / Inter (system fallback)
- Hero headline: `text-5xl md:text-7xl font-bold tracking-tight`
- Section headline: `text-3xl md:text-5xl font-bold tracking-tight`
- Sub-headline: `text-xl md:text-2xl font-semibold`
- Body: `text-base md:text-lg text-gray-500 leading-relaxed`
- Label / caption: `text-sm font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28 px-6`
- Container max-width: `max-w-6xl mx-auto`
- Card padding: `p-8`
- Gap between grid items: `gap-8 md:gap-12`

## Borders & Shadows
- Cards: `rounded-2xl` with `shadow-sm` or no shadow on dark backgrounds
- Dividers: `border-t border-gray-200`
- Image containers: `rounded-3xl overflow-hidden`

## Buttons
- Primary CTA: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition`
- Secondary: `border border-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition`

## Do's
- Use large, full-bleed hero images
- Alternate section backgrounds (white → black → white → gray)
- Keep text concise and punchy
- Use icons alongside feature descriptions
- Maintain generous whitespace between sections

## Don'ts
- No busy backgrounds or gradients on text
- No small font sizes for key content
- No low-contrast text (e.g. gray on gray)
- No cluttered layouts — max 3 columns on desktop
