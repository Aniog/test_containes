# Design System

## Color Palette
- Primary: Indigo `#4F46E5` → Tailwind: `indigo-600`
- Primary Hover: `#4338CA` → `indigo-700`
- Primary Light: `#EEF2FF` → `indigo-50`
- Accent: `#06B6D4` → `cyan-500`
- Background: `#F8FAFC` → `slate-50`
- Surface (Card): `#FFFFFF` → `white`
- Border: `#E2E8F0` → `slate-200`
- Text Primary: `#0F172A` → `slate-900`
- Text Secondary: `#64748B` → `slate-500`
- Text Muted: `#94A3B8` → `slate-400`
- Success: `#10B981` → `emerald-500`
- Error: `#EF4444` → `red-500`

## Typography
- Font Family: Inter (Google Fonts)
- Heading XL: `text-4xl font-bold text-slate-900` (Hero title)
- Heading LG: `text-2xl font-semibold text-slate-900`
- Heading MD: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-700`
- Small: `text-sm text-slate-500`
- Label: `text-sm font-medium text-slate-700`

## Spacing
- Section padding: `py-16 px-4` (mobile), `py-24 px-8` (desktop)
- Card padding: `p-8`
- Form gap: `gap-5`
- Input padding: `px-4 py-3`

## Borders & Shadows
- Card: `rounded-2xl shadow-lg border border-slate-100`
- Input: `rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200`
- Button: `rounded-lg`
- Shadow SM: `shadow-sm`
- Shadow LG: `shadow-lg`

## Components

### Primary Button
```
bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm
```

### Input Field
```
w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-slate-900 placeholder-slate-400 bg-white transition
```

### Form Card
```
bg-white rounded-2xl shadow-lg border border-slate-100 p-8
```

## Do's
- Use indigo as the primary brand color
- Keep backgrounds light (slate-50 or white)
- Use generous padding and whitespace
- Ensure all text has sufficient contrast against its background
- Use subtle shadows to create depth

## Don'ts
- Don't use dark backgrounds for the main page
- Don't use low-contrast text (e.g., gray on gray)
- Don't use more than 2 accent colors per section
- Don't use inline styles; always use Tailwind classes
