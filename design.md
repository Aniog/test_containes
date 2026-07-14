# Design System

## Visual Style
Clean, modern SaaS landing page aesthetic. Light background with strong contrast text. Accent color is indigo/violet. Professional and trustworthy feel.

## Colors
- Background: `bg-white` / `bg-slate-50`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700` — used for CTAs and highlights
- Secondary accent: `bg-violet-100 text-violet-700` — used for badges/tags
- Text primary: `text-slate-900`
- Text secondary: `text-slate-500`
- Text muted: `text-slate-400`
- Border: `border-slate-200`
- Success: `text-green-600 bg-green-50`
- Error: `text-red-600 bg-red-50`

Custom Tailwind colors (add to config if needed):
- brand: indigo-600 (#4f46e5)

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl font-bold text-slate-900 leading-tight` (desktop), `text-3xl` (mobile)
- Section heading: `text-3xl font-bold text-slate-900`
- Subheading: `text-lg text-slate-500`
- Body: `text-base text-slate-600`
- Label: `text-sm font-medium text-slate-700`
- Caption: `text-xs text-slate-400`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Borders & Shadows
- Card: `rounded-2xl border border-slate-200 shadow-sm`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`
- Button primary: `rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-semibold`
- Button secondary: `rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50`

## Do's
- Use `max-w-6xl mx-auto` for page-level containers
- Use `max-w-lg mx-auto` for centered forms
- Use consistent 8px grid spacing (Tailwind multiples of 2)
- Use `transition-colors duration-200` on interactive elements
- Use `shadow-sm` on cards, `shadow-md` on elevated elements

## Don'ts
- Don't use dark backgrounds for the main page body
- Don't use font sizes below `text-sm` for body content
- Don't use more than 2 accent colors per section
- Don't use inline styles
