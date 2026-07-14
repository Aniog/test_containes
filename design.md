# Velmora Fine Jewelry — Design System

## Visual Identity
- Mood: quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- Background: `#F5F0EB` (warm cream/ivory) — site-wide page background
- Card/Surface: `#FFFFFF` (white) — cards, modals, drawers
- Text Primary: `#1C1C1A` (warm black) — headings, body
- Text Secondary: `#6B6258` (warm gray) — muted text, captions
- Gold Accent: `#C4956A` (warm gold/brass) — CTAs, accent elements, borders
- Gold Dark: `#A67C52` (darker gold) — hover states, secondary accents
- Light Accent: `#E8E0D6` (warm light) — subtle dividers, backgrounds
- Border: `#E0D8CE` (warm border) — hairline dividers, card borders
- White: `#FFFFFF`

## Typography
- Headings (serif): Cormorant Garamond — elegant, editorial feel
- Body/UI (sans): Inter — clean, readable
- Product names: UPPERCASE, tracking-widest, serif font
- Font sizes: follow Tailwind scale; h1 ~text-5xl/6xl, h2 ~text-3xl/4xl

## Spacing
- Generous whitespace throughout
- Section padding: py-16 md:py-24
- Card padding: p-6
- Mobile: px-4, Desktop: px-6 or container mx-auto

## Borders & Dividers
- Thin hairline dividers: border-t border-[#E0D8CE]
- Subtle card borders: border border-[#E8E0D6]
- Soft shadows: shadow-sm, shadow-md

## Buttons
- Primary: bg-[#C4956A] text-white, hover:bg-[#A67C52]
- Outline: border border-[#C4956A] text-[#C4956A] hover:bg-[#C4956A] hover:text-white
- Full-width on mobile, inline on desktop
- Subtle transition: transition-all duration-300

## Hover Effects
- Subtle opacity shifts on images: hover:opacity-90
- Border accent on cards: hover:border-[#C4956A]
- Smooth transitions: transition-all duration-300 ease-in-out

## Layout
- Max width container: max-w-7xl mx-auto
- Responsive: mobile-first, 1-col on mobile, 2-col on md, 3-4 col on lg
- Grid gaps: gap-6 md:gap-8