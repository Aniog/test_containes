# Design System — Todo App

## Visual Identity
Clean, modern productivity app with a light background and strong contrast. Minimal chrome, focus on content.

## Colors
- Background: `bg-slate-50` (page), `bg-white` (cards/panels)
- Primary accent: `bg-violet-600` hover `bg-violet-700` — used for primary buttons and active states
- Danger: `bg-red-500` hover `bg-red-600` — used for delete actions
- Success: `text-emerald-600` — used for completed states
- Muted text: `text-slate-400`
- Body text: `text-slate-700`
- Headings: `text-slate-900`
- Border: `border-slate-200`
- Priority badges:
  - High: `bg-red-100 text-red-700`
  - Medium: `bg-amber-100 text-amber-700`
  - Low: `bg-slate-100 text-slate-600`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-3xl font-bold text-slate-900`
- Section headings: `text-lg font-semibold text-slate-800`
- Body: `text-sm text-slate-700`
- Muted/helper: `text-xs text-slate-400`

## Spacing & Layout
- Page max width: `max-w-2xl mx-auto`
- Page padding: `px-4 py-8`
- Card padding: `p-4` or `p-6`
- Gap between items: `gap-3`

## Borders & Shadows
- Cards: `rounded-xl border border-slate-200 shadow-sm`
- Inputs: `rounded-lg border border-slate-300 focus:ring-2 focus:ring-violet-500`
- Buttons: `rounded-lg`

## Components

### Primary Button
`bg-violet-600 hover:bg-violet-700 text-white font-medium px-4 py-2 rounded-lg transition-colors`

### Ghost/Secondary Button
`text-slate-500 hover:text-slate-700 hover:bg-slate-100 px-3 py-1.5 rounded-lg transition-colors`

### Danger Button
`text-red-500 hover:text-red-700 hover:bg-red-50 px-2 py-1 rounded-lg transition-colors`

### Input
`w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-500`

### Todo Item Card
`bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-3`
- Completed state: title gets `line-through text-slate-400`

## Do's
- Use violet as the single accent color
- Keep layouts single-column on all screen sizes (it's a focused productivity tool)
- Use subtle shadows, not heavy drop shadows
- Animate checkboxes and transitions with `transition-all duration-200`

## Don'ts
- Don't use multiple accent colors
- Don't use heavy gradients
- Don't use font sizes below `text-xs`
- Don't use dark backgrounds for the main content area
