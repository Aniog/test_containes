# Design System

## Brand Identity
Clean, modern SaaS-style landing page. Professional, trustworthy, approachable.

## Color Palette
- Primary: Indigo `#4F46E5` (`bg-indigo-600`, `text-indigo-600`)
- Primary hover: `#4338CA` (`hover:bg-indigo-700`)
- Primary light: `#EEF2FF` (`bg-indigo-50`)
- Accent: `#06B6D4` (cyan-500) for highlights
- Background: White `#FFFFFF` (`bg-white`)
- Surface: `#F8FAFC` (`bg-slate-50`) for section alternates
- Border: `#E2E8F0` (`border-slate-200`)
- Text primary: `#0F172A` (`text-slate-900`)
- Text secondary: `#475569` (`text-slate-600`)
- Text muted: `#94A3B8` (`text-slate-400`)
- Success: `#10B981` (`text-emerald-500`)
- Error: `#EF4444` (`text-red-500`)

## Typography
- Font: Inter (Google Fonts)
- Hero heading: `text-5xl font-bold text-slate-900` (desktop), `text-3xl` (mobile)
- Section heading: `text-3xl font-bold text-slate-900`
- Subheading: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-600`
- Small/caption: `text-sm text-slate-500`
- Label: `text-sm font-medium text-slate-700`

## Spacing
- Section padding: `py-20 px-4` (desktop), `py-12 px-4` (mobile)
- Card padding: `p-6` or `p-8`
- Form field gap: `space-y-4`
- Section gap: `space-y-16`

## Components

### Buttons
- Primary: `bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary/outline: `border border-slate-300 hover:border-indigo-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors`
- Danger: `bg-red-500 hover:bg-red-600 text-white`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6`
- Hover lift: `hover:shadow-md transition-shadow`

### Form Inputs
- `w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

### Badges
- Default: `bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full`
- Success: `bg-emerald-50 text-emerald-700`

### Navigation
- Sticky top nav: `bg-white/90 backdrop-blur border-b border-slate-200`
- Nav links: `text-slate-600 hover:text-indigo-600 font-medium transition-colors`

## Layout
- Max content width: `max-w-6xl mx-auto`
- Form max width: `max-w-lg mx-auto`
- Grid: 3-column on desktop (`grid-cols-3`), 1-column on mobile

## Do's
- Use rounded-lg or rounded-xl for cards and inputs
- Use shadow-sm for subtle depth
- Use transition-colors for interactive elements
- Keep generous whitespace between sections

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use low-contrast text (e.g. slate-400 on white for body text)
- Don't use more than 2 font weights in a single component
