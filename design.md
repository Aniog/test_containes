# Design System

## Brand
Clean, modern SaaS-style landing page. Professional, trustworthy, and approachable.

## Color Palette
- Primary: Indigo `#4F46E5` → Tailwind `indigo-600`
- Primary hover: `#4338CA` → `indigo-700`
- Primary light: `#EEF2FF` → `indigo-50`
- Accent: `#06B6D4` → `cyan-500`
- Background: White `#FFFFFF` → `white`
- Surface: `#F8FAFC` → `slate-50`
- Border: `#E2E8F0` → `slate-200`
- Text primary: `#0F172A` → `slate-900`
- Text secondary: `#475569` → `slate-600`
- Text muted: `#94A3B8` → `slate-400`
- Success: `#10B981` → `emerald-500`
- Error: `#EF4444` → `red-500`

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
- Secondary: `border border-slate-300 hover:border-indigo-400 text-slate-700 font-semibold px-6 py-3 rounded-lg transition-colors`
- Danger: `bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg`

### Cards
- `bg-white rounded-xl border border-slate-200 shadow-sm p-6`
- Hover: `hover:shadow-md transition-shadow`

### Form Inputs
- `w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`

### Navigation
- Sticky top nav: `bg-white/90 backdrop-blur border-b border-slate-200`
- Nav links: `text-slate-600 hover:text-indigo-600 font-medium transition-colors`

## Do's
- Use `slate-900` for all primary text on white backgrounds
- Use `indigo-600` as the primary action color
- Use `rounded-xl` for cards, `rounded-lg` for buttons and inputs
- Use `shadow-sm` on cards, `shadow-md` on hover
- Keep sections well-padded with generous whitespace

## Don'ts
- Don't use dark backgrounds for main content areas
- Don't use low-contrast text (e.g. slate-300 on white)
- Don't mix multiple accent colors
- Don't use inline styles — use Tailwind classes only
