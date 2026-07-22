# CRM Tool Design System

## Brand Identity
Clean, professional B2B SaaS aesthetic. Trustworthy, efficient, modern.

## Color Palette
- **Primary**: Indigo — `bg-indigo-600`, `text-indigo-600`, `hover:bg-indigo-700`
- **Background**: Light gray — `bg-slate-50` (page), `bg-white` (cards/panels)
- **Surface**: White — `bg-white`
- **Border**: `border-slate-200`
- **Text Primary**: `text-slate-900`
- **Text Secondary**: `text-slate-500`
- **Text Muted**: `text-slate-400`
- **Success**: `bg-green-100 text-green-700`
- **Warning**: `bg-amber-100 text-amber-700`
- **Danger**: `bg-red-100 text-red-700`
- **Info**: `bg-blue-100 text-blue-700`

## Typography
- Font: Inter (Google Fonts)
- Page title: `text-2xl font-bold text-slate-900`
- Section heading: `text-lg font-semibold text-slate-900`
- Body: `text-sm text-slate-700`
- Muted/helper: `text-sm text-slate-500`
- Label: `text-sm font-medium text-slate-700`

## Spacing
- Page padding: `px-6 py-8` (desktop), `px-4 py-6` (mobile)
- Card padding: `p-6`
- Section gap: `gap-6`
- Form field gap: `gap-4`

## Components
- **Cards**: `rounded-xl border border-slate-200 bg-white shadow-sm`
- **Buttons (primary)**: `bg-indigo-600 text-white hover:bg-indigo-700 rounded-md`
- **Buttons (outline)**: `border border-slate-300 bg-white text-slate-900 hover:bg-slate-50`
- **Inputs**: `border border-slate-300 rounded-md bg-white text-slate-900`
- **Badges**: Rounded-full, color-coded by status
- **Table rows**: `hover:bg-slate-50` on hover, `border-b border-slate-100`

## Lead Status Colors
- New: `bg-blue-100 text-blue-700`
- Contacted: `bg-amber-100 text-amber-700`
- Qualified: `bg-indigo-100 text-indigo-700`
- Proposal: `bg-purple-100 text-purple-700`
- Won: `bg-green-100 text-green-700`
- Lost: `bg-red-100 text-red-700`

## Layout
- Sidebar navigation: `w-64 bg-white border-r border-slate-200`
- Main content: `flex-1 bg-slate-50`
- Max content width: `max-w-7xl mx-auto`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `text-slate-900` for all important data in tables and cards
- Use consistent spacing with Tailwind gap/padding utilities
- Use indigo as the primary action color throughout

## Don'ts
- Don't use dark backgrounds for the main app shell
- Don't use low-contrast text (e.g., gray on gray)
- Don't use arbitrary hex values — use Tailwind named colors
