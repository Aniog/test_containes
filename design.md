# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, trustworthy, practical, international B2B

## Color Palette
- **Primary Blue**: `#1A4B8C` — trust, reliability (Tailwind: `[#1A4B8C]`)
- **Accent Red**: `#C0392B` — China accent, urgency (Tailwind: `[#C0392B]`)
- **Accent Gold**: `#D4A017` — quality, premium (Tailwind: `[#D4A017]`)
- **Dark Navy**: `#0F2A4A` — headings, deep backgrounds (Tailwind: `[#0F2A4A]`)
- **Light Gray**: `#F4F6F9` — section backgrounds (Tailwind: `[#F4F6F9]`)
- **Mid Gray**: `#6B7280` — body text secondary (Tailwind: `gray-500`)
- **White**: `#FFFFFF`
- **Border**: `#E2E8F0` (Tailwind: `slate-200`)

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2A4A]`
- **H2**: `text-3xl md:text-4xl font-bold text-[#0F2A4A]`
- **H3**: `text-xl md:text-2xl font-semibold text-[#0F2A4A]`
- **Body**: `text-base text-gray-600 leading-relaxed`
- **Small/Caption**: `text-sm text-gray-500`
- **Label/Badge**: `text-xs font-semibold uppercase tracking-wide`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary CTA**: `bg-[#1A4B8C] hover:bg-[#0F2A4A] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Accent CTA**: `bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered label badge above H2: `text-xs font-semibold uppercase tracking-widest text-[#1A4B8C] mb-3`
- H2 centered: `text-3xl md:text-4xl font-bold text-[#0F2A4A] mb-4`
- Subtitle: `text-lg text-gray-500 max-w-2xl mx-auto`

### Navigation
- Sticky top nav: `bg-white border-b border-slate-200 shadow-sm`
- Nav links: `text-gray-700 hover:text-[#1A4B8C] font-medium transition-colors`

## Do's
- Use `[#F4F6F9]` for alternating section backgrounds
- Use `[#0F2A4A]` for all major headings
- Use `[#1A4B8C]` for links, icons, and primary actions
- Keep layouts clean with generous whitespace
- Use grid layouts for desktop (2-3-4 columns), single column on mobile

## Don'ts
- Don't use dark backgrounds for body text sections
- Don't use low-contrast text on colored backgrounds
- Don't use more than 3 font weights per section
- Don't use exaggerated marketing language
