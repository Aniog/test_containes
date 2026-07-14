# Design System

## Color Palette
- Primary: Indigo `#4F46E5` → Tailwind `indigo-600`
- Primary hover: `#4338CA` → `indigo-700`
- Primary light: `#EEF2FF` → `indigo-50`
- Accent: `#06B6D4` → `cyan-500`
- Background: `#F8FAFC` → `slate-50`
- Surface (cards): `#FFFFFF` → `white`
- Border: `#E2E8F0` → `slate-200`
- Text primary: `#0F172A` → `slate-900`
- Text secondary: `#475569` → `slate-600`
- Text muted: `#94A3B8` → `slate-400`
- Success: `#10B981` → `emerald-500`
- Error: `#EF4444` → `red-500`

## Typography
- Font family: Inter (Google Fonts)
- Hero heading: `text-5xl font-bold text-slate-900` (desktop), `text-3xl` (mobile)
- Section heading: `text-3xl font-bold text-slate-900`
- Subheading: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-600`
- Small/muted: `text-sm text-slate-400`
- Labels: `text-sm font-medium text-slate-700`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-slate-200`
- Input: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`
- Button primary: `rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold`
- Button outline: `rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700`

## Do's
- Use `slate-*` for neutral text and backgrounds
- Use `indigo-600` as the primary action color
- Keep cards white with subtle `shadow-sm` and `border-slate-200`
- Use `rounded-2xl` for cards, `rounded-lg` for inputs and buttons
- Maintain generous whitespace between sections

## Don'ts
- Don't use dark backgrounds for the main page body
- Don't use low-contrast text (e.g. slate-300 on white)
- Don't mix multiple accent colors
- Don't use arbitrary hex codes — use named Tailwind colors
