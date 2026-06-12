# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, international, B2B, practical

## Color Palette
- Primary Blue: `#1a4f8a` (deep navy-blue — trust, authority)
- Primary Blue Light: `#2563eb` (accent blue for CTAs)
- Secondary Red: `#c0392b` (China accent — used sparingly)
- Neutral Dark: `#1e293b` (headings, body text)
- Neutral Mid: `#475569` (secondary text)
- Neutral Light: `#94a3b8` (muted text, borders)
- Background White: `#ffffff`
- Background Gray: `#f8fafc` (section alternating bg)
- Background Dark: `#0f172a` (footer, dark sections)
- Border: `#e2e8f0`
- Success Green: `#16a34a`

## Typography
- Font Family: Inter (Google Fonts)
- Heading 1: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
- Heading 2: `text-3xl md:text-4xl font-bold text-slate-900`
- Heading 3: `text-xl md:text-2xl font-semibold text-slate-800`
- Body Large: `text-lg text-slate-600`
- Body: `text-base text-slate-600`
- Small/Caption: `text-sm text-slate-500`
- Label/Tag: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary CTA: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-blue-600 hover:text-blue-700 font-medium`

### Cards
- Standard: `bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow`
- Feature: `bg-white rounded-xl shadow-sm border border-slate-100 p-8`
- Dark: `bg-slate-800 rounded-xl p-6 text-white`

### Badges/Tags
- Industry tag: `bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full`
- Status: `bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full`

### Navbar
- Background: white with `shadow-sm border-b border-slate-100`
- Logo: bold navy text
- Links: `text-slate-600 hover:text-blue-600 font-medium`
- CTA button: primary blue

### Footer
- Background: `#0f172a` (dark navy)
- Text: white/slate-300
- Links: `text-slate-400 hover:text-white`

## Do's
- Use generous whitespace between sections
- Alternate section backgrounds (white / gray-50)
- Use icons consistently (Lucide React)
- Keep CTAs prominent and action-oriented
- Use real-looking stats and trust signals
- Images: factory floors, QC inspection, shipping containers, product samples

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims ("best in the world")
- No cluttered layouts
- No more than 2 font weights per section
- No inline styles — use Tailwind classes only
