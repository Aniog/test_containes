# SSourcing China — Design System

## Brand Identity
- **Company:** SSourcing China
- **Tagline:** China Sourcing Agent for Global Buyers
- **Tone:** Professional, clear, practical, trustworthy, international B2B

## Color Palette
- **Primary Blue:** `#1A3C6E` — deep navy, trust and authority (`bg-[#1A3C6E]`, `text-[#1A3C6E]`)
- **Accent Red:** `#C0392B` — China-inspired accent, CTAs (`bg-[#C0392B]`, `text-[#C0392B]`)
- **Accent Gold:** `#D4A017` — highlights, badges (`text-[#D4A017]`)
- **Light Blue:** `#EBF2FA` — section backgrounds (`bg-[#EBF2FA]`)
- **White:** `#FFFFFF` — cards, content areas
- **Gray 50:** `#F8FAFC` — alternate section bg
- **Gray 100:** `#F1F5F9` — subtle backgrounds
- **Gray 600:** `#475569` — body text
- **Gray 800:** `#1E293B` — headings
- **Border:** `#E2E8F0` — card borders

## Typography
- **Font:** Inter (Google Fonts)
- **H1:** `text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B]`
- **H2:** `text-3xl md:text-4xl font-bold text-[#1E293B]`
- **H3:** `text-xl md:text-2xl font-semibold text-[#1E293B]`
- **Body:** `text-base text-[#475569] leading-relaxed`
- **Small/Caption:** `text-sm text-[#64748B]`
- **Label/Badge:** `text-xs font-semibold uppercase tracking-wide`

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
`bg-white rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-200 p-6`

### Section Badge
`inline-block bg-[#EBF2FA] text-[#1A3C6E] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4`

### Nav Link
`text-[#475569] hover:text-[#1A3C6E] font-medium transition-colors duration-150`

## Layout Rules
- Desktop: multi-column grids (2, 3, or 4 cols)
- Mobile: single column stacking
- Hero sections: full-width with overlay, min-height `min-h-[600px]`
- Never use single-column stacking on desktop

## Do's
- Use navy (#1A3C6E) for primary headings and nav
- Use red (#C0392B) only for primary CTAs and key highlights
- Use gold (#D4A017) sparingly for trust badges and stars
- Keep white space generous
- Use subtle shadows on cards
- Use section badges to label each section

## Don'ts
- No dark text on dark backgrounds
- No light text on light backgrounds
- No magic hex values outside this guide
- No inline styles
- No exaggerated marketing claims
