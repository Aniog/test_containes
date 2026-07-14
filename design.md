# Design System

## Visual Style
Clean, modern SaaS landing page aesthetic. Light background with strong contrast text. Accent color is indigo/violet. Professional and trustworthy feel.

## Colors
- Background: `bg-white` / `bg-slate-50`
- Primary accent: `bg-indigo-600` hover `bg-indigo-700`
- Text primary: `text-slate-900`
- Text secondary: `text-slate-500`
- Text muted: `text-slate-400`
- Border: `border-slate-200`
- Success: `text-emerald-600` / `bg-emerald-50`
- Error: `text-red-600` / `bg-red-50`
- Card background: `bg-white`
- Hero gradient: `from-indigo-50 via-white to-white`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold` or `font-extrabold`, `tracking-tight`
- Hero H1: `text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight`
- Section H2: `text-3xl md:text-4xl font-bold text-slate-900`
- Body: `text-base text-slate-600`
- Small/muted: `text-sm text-slate-500`

## Spacing
- Section padding: `py-20 px-4`
- Card padding: `p-6` or `p-8`
- Form gap: `gap-4`
- Button padding: `px-6 py-3`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500`
- Button: `rounded-lg`

## Components
- Primary button: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-6 py-3`
- Secondary button: `border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg px-6 py-3`
- Badge: `bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full px-3 py-1`

## Do's
- Use consistent 8px spacing grid via Tailwind
- Use `max-w-7xl mx-auto` for page containers
- Use `max-w-2xl mx-auto` for centered content sections
- Ensure all text is readable against its background

## Don'ts
- No dark backgrounds on the main page (keep it light)
- No low-contrast text combinations
- No inline styles
