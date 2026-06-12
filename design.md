# SSourcing China — Design System

## Brand Identity
- **Company**: SSourcing China
- **Tagline**: China Sourcing Agent for Global Buyers
- **Tone**: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue**: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `bg-[#1A3C6E]`
- **Accent Red**: `#C0392B` (China red — identity, energy) → Tailwind: `bg-[#C0392B]`
- **Accent Gold**: `#D4A017` (premium, quality) → Tailwind: `text-[#D4A017]`
- **Light Blue**: `#EBF2FA` (section backgrounds) → Tailwind: `bg-[#EBF2FA]`
- **White**: `#FFFFFF` (cards, content areas)
- **Dark Text**: `#1A1A2E` (headings) → Tailwind: `text-[#1A1A2E]`
- **Body Text**: `#4A5568` (paragraphs) → Tailwind: `text-[#4A5568]`
- **Muted Text**: `#718096` → Tailwind: `text-[#718096]`
- **Border**: `#E2E8F0` → Tailwind: `border-[#E2E8F0]`
- **Success Green**: `#2D7D46` → Tailwind: `text-[#2D7D46]`

## Typography
- **Font**: Inter (Google Fonts)
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A2E]`
- **H2**: `text-3xl md:text-4xl font-bold text-[#1A1A2E]`
- **H3**: `text-xl md:text-2xl font-semibold text-[#1A1A2E]`
- **Body**: `text-base text-[#4A5568] leading-relaxed`
- **Small/Caption**: `text-sm text-[#718096]`
- **Label/Tag**: `text-xs font-semibold uppercase tracking-wider`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Components

### Primary Button (CTA)
`bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Secondary Button
`border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Ghost Button (on dark bg)
`border-2 border-white text-white hover:bg-white hover:text-[#1A3C6E] font-semibold px-6 py-3 rounded-lg transition-colors duration-200`

### Card
`bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow duration-200`

### Section Badge
`inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4`

### Nav Link
`text-[#4A5568] hover:text-[#1A3C6E] font-medium transition-colors duration-150`

## Layout Rules
- Desktop: multi-column grids (2, 3, or 4 columns)
- Mobile: single column stacking
- Hero sections: full-width with overlay, min-height `min-h-[600px]`
- Alternating section backgrounds: white and `#EBF2FA`

## Do's
- Use navy (#1A3C6E) for headers, nav, and trust elements
- Use red (#C0392B) only for primary CTAs and key highlights
- Use gold (#D4A017) for star ratings, premium badges
- Keep cards clean with subtle shadows
- Use icons from lucide-react consistently

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No exaggerated claims in copy
- No more than 2 accent colors per section
- No inline styles — use Tailwind classes only
