# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A4F8A` (navy/trust blue) → Tailwind: `blue-900` or custom `brand-blue`
- Accent Blue: `#2563EB` → Tailwind: `blue-600`
- Light Blue: `#EFF6FF` → Tailwind: `blue-50`
- Dark Navy: `#0F2A4A` → Tailwind: custom `brand-navy`
- Neutral Gray: `#64748B` → Tailwind: `slate-500`
- Light Gray: `#F8FAFC` → Tailwind: `slate-50`
- Border Gray: `#E2E8F0` → Tailwind: `slate-200`
- Text Dark: `#0F172A` → Tailwind: `slate-900`
- Text Medium: `#334155` → Tailwind: `slate-700`
- Text Light: `#64748B` → Tailwind: `slate-500`
- White: `#FFFFFF`
- Success Green: `#16A34A` → Tailwind: `green-600`
- Warning Amber: `#D97706` → Tailwind: `amber-600`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-800`
  - H4: `text-lg font-semibold text-slate-800`
- Body: `text-base text-slate-600 leading-relaxed`
- Small: `text-sm text-slate-500`
- Caption: `text-xs text-slate-400 uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-lg transition-colors`
- Ghost: `text-blue-600 hover:text-blue-700 font-medium`

### Cards
- Default: `bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6`
- Feature: `bg-white rounded-xl border border-slate-200 shadow-sm p-8`
- Highlight: `bg-blue-50 rounded-xl border border-blue-100 p-6`

### Navigation
- Background: `bg-white border-b border-slate-200 shadow-sm`
- Links: `text-slate-600 hover:text-blue-600 font-medium transition-colors`
- Active: `text-blue-600 font-semibold`

### Badges
- Default: `bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full`
- Green: `bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full`

### Dividers
- `border-t border-slate-200`

## Layout Patterns
- Hero: full-width with dark overlay on background image, white text
- Section alternating: white bg / slate-50 bg
- 3-column grid for features/services: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- 2-column grid for case studies: `grid grid-cols-1 md:grid-cols-2 gap-8`
- Process steps: numbered horizontal or vertical timeline

## Do's
- Use consistent blue as the primary trust color
- Keep white space generous
- Use icons from lucide-react for all feature icons
- Use subtle shadows on cards
- Use uppercase tracking-wider for section labels/eyebrows
- Keep CTAs prominent with blue-600 background

## Don'ts
- No dark backgrounds for body sections (only hero/footer)
- No bright/neon colors
- No rounded-full on large buttons (use rounded-lg)
- No text smaller than text-sm in body content
- No low-contrast text on colored backgrounds
