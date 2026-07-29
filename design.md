# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, trustworthy, practical, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `blue-900` or custom `brand-navy`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: custom `brand-red`
- Accent Gold: `#D4A017` (premium, quality) → Tailwind: custom `brand-gold`
- Background Light: `#F8F9FB` → Tailwind: `gray-50`
- Background White: `#FFFFFF`
- Surface: `#EEF2F7` → Tailwind: `slate-100`
- Text Primary: `#1A2332` → Tailwind: `slate-900`
- Text Secondary: `#4A5568` → Tailwind: `slate-600`
- Text Muted: `#718096` → Tailwind: `slate-500`
- Border: `#E2E8F0` → Tailwind: `slate-200`
- Success: `#2D7D46` → Tailwind: `green-700`

## Typography
- Font Family: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: `text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900`
  - H2: `text-3xl md:text-4xl font-bold text-slate-900`
  - H3: `text-xl md:text-2xl font-semibold text-slate-900`
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
- Primary: `bg-[#1A3C6E] hover:bg-[#152f58] text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- Secondary: `border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- CTA Red: `bg-[#C0392B] hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg`

### Cards
- `bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow`

### Section Headers
- Centered label: `text-xs font-semibold uppercase tracking-widest text-[#C0392B] mb-3`
- Title: `text-3xl md:text-4xl font-bold text-slate-900 mb-4`
- Subtitle: `text-lg text-slate-600 max-w-2xl mx-auto`

### Navbar
- Background: `bg-white border-b border-slate-200 shadow-sm`
- Logo text: `text-[#1A3C6E] font-bold text-xl`
- Nav links: `text-slate-600 hover:text-[#1A3C6E] font-medium transition-colors`

### Footer
- Background: `bg-[#1A2332]`
- Text: `text-slate-300`
- Headings: `text-white font-semibold`

## Do's
- Use navy (#1A3C6E) for primary actions and headings
- Use red (#C0392B) sparingly for CTAs and accent labels
- Use gold (#D4A017) for star ratings and premium highlights
- Keep sections well-spaced with generous padding
- Use subtle shadows on cards, not heavy drop shadows
- Alternate section backgrounds between white and gray-50 for visual rhythm
- Use icons from lucide-react consistently

## Don'ts
- Don't use dark text on dark backgrounds
- Don't use red as a background for large areas
- Don't use more than 3 font weights per section
- Don't use overly decorative fonts
- Don't use pure black (#000) for body text — use slate-900 or slate-800
