# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, clear, practical, international B2B

## Color Palette
- Primary Blue: `#1a4f8a` (deep navy-blue — trust, reliability)
- Primary Blue Light: `#2563eb` (accent blue for CTAs)
- Secondary Red: `#c0392b` (China accent — used sparingly for highlights)
- Neutral Dark: `#1e293b` (headings, body text)
- Neutral Mid: `#475569` (secondary text)
- Neutral Light: `#f1f5f9` (section backgrounds)
- White: `#ffffff`
- Border: `#e2e8f0`
- Success Green: `#16a34a`

## Typography
- Font Family: Inter (Google Fonts)
- Heading 1: `text-4xl md:text-5xl font-bold text-slate-900`
- Heading 2: `text-3xl font-bold text-slate-900`
- Heading 3: `text-xl font-semibold text-slate-800`
- Body: `text-base text-slate-600`
- Small/Caption: `text-sm text-slate-500`
- CTA Button text: `text-base font-semibold`

## Tailwind Custom Colors (add to theme)
- `primary`: `#1a4f8a`
- `primary-light`: `#2563eb`
- `accent-red`: `#c0392b`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons

## Components

### Primary CTA Button
`bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Secondary Button (outline)
`border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Section Card
`bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow`

### Badge
`bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`

### Section Label (above heading)
`text-sm font-semibold text-[#2563eb] uppercase tracking-widest mb-3`

## Navbar
- Background: `bg-white` with `shadow-sm border-b border-slate-100`
- Logo: Bold, `text-[#1a4f8a]`
- Nav links: `text-slate-600 hover:text-[#2563eb]`
- CTA in nav: Primary button style

## Hero Section
- Background: Deep navy gradient `from-[#0f2d5e] to-[#1a4f8a]`
- Text: white
- Subtext: `text-blue-100`

## Footer
- Background: `bg-[#0f2d5e]`
- Text: `text-slate-300`
- Links: `text-slate-400 hover:text-white`

## Do's
- Use generous whitespace between sections
- Use icons alongside text for services/features
- Use numbered steps for process sections
- Use real-looking stats (not inflated)
- Keep CTAs prominent and repeated throughout the page

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims ("best in the world", "100% guaranteed")
- No decorative fonts — keep it clean and professional
- No cluttered layouts — max 3 columns on desktop
