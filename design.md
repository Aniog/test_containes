# Design System — 办公用品商城

## Brand Identity
Professional, clean, trustworthy. Inspired by modern office environments.

## Color Palette
- Primary: Deep Blue `#1E3A5F` — `bg-[#1E3A5F]`, `text-[#1E3A5F]`
- Primary Light: `#2563EB` — `text-blue-600`, `bg-blue-600`
- Accent: Warm Orange `#F97316` — `text-orange-500`, `bg-orange-500`
- Background: Off-white `#F8FAFC` — `bg-slate-50`
- Surface: White `#FFFFFF` — `bg-white`
- Border: `#E2E8F0` — `border-slate-200`
- Text Primary: `#0F172A` — `text-slate-900`
- Text Secondary: `#475569` — `text-slate-600`
- Text Muted: `#94A3B8` — `text-slate-400`
- Success: `#16A34A` — `text-green-600`
- Error: `#DC2626` — `text-red-600`

## Typography
- Font: Inter (Google Fonts)
- Heading XL: `text-4xl font-bold text-slate-900`
- Heading L: `text-3xl font-bold text-slate-900`
- Heading M: `text-2xl font-semibold text-slate-800`
- Heading S: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-700`
- Small: `text-sm text-slate-600`
- Caption: `text-xs text-slate-500`

## Spacing
- Section padding: `py-16 px-4 md:px-8`
- Card padding: `p-4 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Components

### Buttons
- Primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Secondary: `border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-lg transition-colors`
- Danger: `bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg`

### Cards
- Product card: `bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-shadow overflow-hidden`
- Info card: `bg-white rounded-xl p-6 border border-slate-200`

### Navigation
- Navbar: `bg-[#1E3A5F] text-white shadow-lg`
- Nav links: `text-slate-200 hover:text-white transition-colors`

### Badges
- New: `bg-orange-100 text-orange-700 text-xs font-semibold px-2 py-0.5 rounded-full`
- Sale: `bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full`
- In Stock: `bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full`

## Do's
- Always use explicit text colors on colored backgrounds
- Use `rounded-xl` for cards, `rounded-lg` for buttons
- Use `shadow-sm` on cards, `shadow-lg` on navbar
- Maintain consistent 4px grid spacing

## Don'ts
- Never use dark text on dark backgrounds
- Never use light text on light backgrounds
- Avoid inline styles; use Tailwind classes
- Don't use arbitrary hex codes in JSX — add to Tailwind config if needed
