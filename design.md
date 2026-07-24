# Design System — Todo App

## Visual Theme
Inspired by spring flowers (soft purples, greens, warm whites). Clean, airy, and calm.

## Colors
- Primary: `#8b5cf6` (violet-500) — main actions, active states
- Primary light: `#ede9fe` (violet-100) — backgrounds, hover states
- Primary dark: `#6d28d9` (violet-700) — hover on primary buttons
- Accent green: `#4ade80` (green-400) — completed state checkmarks
- Background: `#f5f3ff` (violet-50) — page background
- Surface: `#ffffff` — cards, inputs
- Border: `#ddd6fe` (violet-200) — subtle borders
- Text primary: `#1e1b4b` (indigo-950) — headings, main text
- Text secondary: `#6b7280` (gray-500) — subtitles, placeholders
- Danger: `#ef4444` (red-500) — delete actions

## Typography
- Font: Inter (Google Fonts)
- Heading: `text-2xl font-bold text-indigo-950`
- Subheading: `text-lg font-semibold text-indigo-900`
- Body: `text-sm text-gray-700`
- Muted: `text-xs text-gray-400`

## Spacing & Layout
- Page max width: `max-w-2xl mx-auto`
- Section padding: `px-4 py-8` on mobile, `px-6 py-10` on md+
- Card padding: `p-4` or `p-5`
- Gap between items: `gap-3`

## Borders & Shadows
- Card: `rounded-2xl shadow-sm border border-violet-100`
- Input: `rounded-xl border border-violet-200 focus:ring-2 focus:ring-violet-400`
- Button primary: `rounded-xl bg-violet-500 hover:bg-violet-600 text-white`
- Button ghost: `rounded-xl text-violet-500 hover:bg-violet-50`

## Do's
- Use violet/purple palette consistently
- Keep cards light with subtle shadows
- Use rounded corners (xl, 2xl) throughout
- Show completed tasks with strikethrough + muted color
- Animate transitions (opacity, translate) for smooth UX

## Don'ts
- Don't use harsh dark backgrounds
- Don't use red except for destructive actions
- Don't use more than 2 font weights in one section
