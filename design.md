# Design System

## Color Palette
- Primary: Indigo (`bg-indigo-600`, `text-indigo-700`, `#4f46e5`)
- Success/Complete: Emerald (`bg-emerald-500`, `#10b981`)
- Danger: Red (`text-red-600`, `bg-red-50`)
- Background: Gradient from `indigo-50` via `white` to `purple-50`
- Surface: White (`bg-white`) with `border-slate-100`
- Muted text: `text-slate-400`, `text-slate-500`
- Body text: `text-slate-700`, `text-slate-800`

## Typography
- Font: Inter (Google Fonts)
- Headings: `font-bold`, `tracking-tight`, `text-slate-800`
- Body: `text-sm`, `font-medium`, `text-slate-700`
- Muted: `text-xs`, `text-slate-500`

## Spacing & Layout
- Page padding: `px-4 pt-12 pb-16`
- Card: `rounded-2xl shadow-xl border border-slate-100`
- Section padding: `p-5`
- Gap between items: `gap-2`

## Borders & Radius
- Cards: `rounded-2xl`
- Inputs: `rounded-xl`
- Buttons: `rounded-xl`
- Small elements: `rounded-lg`

## Shadows
- Card: `shadow-xl`
- Buttons: `shadow-sm`

## Interactive States
- Focus: `focus:ring-2 focus:ring-indigo-400`
- Hover: subtle border/background color shift
- Disabled: `opacity-50 cursor-not-allowed`
- Transitions: `transition-all duration-200`

## Do's
- Use Tailwind utility classes exclusively
- Use `cn()` from `@/lib/utils` for conditional classes
- Keep components small and focused
- Use semantic HTML (button, form, ul, li)
- Always show loading and empty states

## Don'ts
- No hardcoded hex colors in JSX
- No inline styles
- No magic pixel values
- No low-contrast text combinations
