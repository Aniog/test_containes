# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, clear, practical, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-navy`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: `red-china`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: `gold-accent`
- Background Light: `#F8F9FB` → Tailwind: `bg-light`
- Surface White: `#FFFFFF`
- Border Gray: `#E2E8F0`
- Text Primary: `#1A202C` (near-black)
- Text Secondary: `#4A5568` (slate gray)
- Text Muted: `#718096`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-gray-600
- Small/Caption: text-sm text-gray-500

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: `bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- CTA Red: `bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors`

### Cards
- `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered label: `text-sm font-semibold text-[#C0392B] uppercase tracking-widest mb-3`
- Main heading: `text-3xl md:text-4xl font-bold text-[#1A202C] mb-4`
- Subtext: `text-lg text-gray-500 max-w-2xl mx-auto`

### Navbar
- Background: white with bottom border
- Logo: bold navy text
- Links: text-gray-600 hover:text-[#1A3C6E]
- CTA button: primary red

### Footer
- Background: `#1A3C6E` (navy)
- Text: white / gray-300

## Do's
- Use generous whitespace between sections
- Use icons from lucide-react for service/feature items
- Use subtle shadows on cards, not heavy drop shadows
- Keep CTAs prominent with red accent color
- Use grid layouts: 3-col on desktop, 1-col on mobile
- Use border-left accent lines for testimonials/quotes

## Don'ts
- No dark mode toggle (light-only site)
- No neon or overly bright colors
- No exaggerated marketing language
- No tiny text on colored backgrounds
- No more than 2 font weights per section
