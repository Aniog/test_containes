# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue**: `#1B4F8A` (deep navy-blue — trust, reliability) → Tailwind: `primary`
- **Accent Red**: `#C0392B` (China red — identity, energy) → Tailwind: `accent`
- **Light Blue**: `#EBF3FB` (section backgrounds) → Tailwind: `sky-50`
- **Dark Text**: `#1A2332` (headings) → Tailwind: `gray-900`
- **Body Text**: `#4A5568` → Tailwind: `gray-600`
- **Muted Text**: `#718096` → Tailwind: `gray-500`
- **White**: `#FFFFFF`
- **Light Gray BG**: `#F7F9FC` → Tailwind: `gray-50`
- **Border**: `#E2E8F0` → Tailwind: `gray-200`
- **Success Green**: `#27AE60` → Tailwind: `green-600`

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl font-bold text-gray-900 leading-tight`
- **H2**: `text-3xl font-bold text-gray-900`
- **H3**: `text-xl font-semibold text-gray-900`
- **Body**: `text-base text-gray-600 leading-relaxed`
- **Small/Caption**: `text-sm text-gray-500`
- **Label/Tag**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button (CTA)
`bg-[#1B4F8A] hover:bg-[#163f6e] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Secondary Button
`border-2 border-[#1B4F8A] text-[#1B4F8A] hover:bg-[#1B4F8A] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Accent CTA (Red)
`bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors`

### Card
`bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow`

### Section Badge
`inline-block bg-blue-100 text-[#1B4F8A] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4`

## Navbar
- Background: `bg-white` with `shadow-sm border-b border-gray-200`
- Logo: Bold, `text-[#1B4F8A]`
- Nav links: `text-gray-600 hover:text-[#1B4F8A]`
- CTA button in nav: primary blue

## Footer
- Background: `bg-[#1A2332]` (dark navy)
- Text: `text-gray-300`
- Links: `text-gray-400 hover:text-white`

## Do's
- Use generous whitespace between sections
- Use section badges to label each section
- Use icons alongside text for services/features
- Use numbered steps for process sections
- Keep CTAs prominent and repeated throughout the page

## Don'ts
- No exaggerated claims ("best in the world", "guaranteed")
- No dark text on dark backgrounds
- No light text on light backgrounds
- No magic pixel values — use Tailwind spacing scale
- No inline styles
