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
- **White**: `#FFFFFF` — cards, clean surfaces

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2A4A]`
- **H2**: `text-3xl md:text-4xl font-bold text-[#0F2A4A]`
- **H3**: `text-xl md:text-2xl font-semibold text-[#0F2A4A]`
- **Body**: `text-base text-gray-600 leading-relaxed`
- **Small/Caption**: `text-sm text-gray-500`
- **CTA Button**: `text-base font-semibold`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button
`bg-[#1A4B8C] hover:bg-[#0F2A4A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Secondary Button (Outline)
`border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### CTA Button (Red Accent)
`bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200`

### Card
`bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200`

### Section Background Alternation
- White: `bg-white`
- Light: `bg-[#F4F6F9]`
- Dark: `bg-[#0F2A4A]` with white text

## Navigation
- Sticky top nav with white background and subtle shadow
- Logo: bold text with blue primary color
- Nav links: `text-gray-700 hover:text-[#1A4B8C] font-medium`
- Active: `text-[#1A4B8C] font-semibold`
- Mobile: hamburger menu

## Do's
- Use generous whitespace between sections
- Keep CTAs prominent and action-oriented
- Use trust signals (years of experience, verified suppliers, countries served)
- Use numbered steps for process sections
- Use icons alongside text for scannability

## Don'ts
- No exaggerated claims ("best in the world", "guaranteed")
- No dark text on dark backgrounds
- No light text on light backgrounds
- No cluttered layouts — keep it clean and scannable
- No more than 2 font weights per section
