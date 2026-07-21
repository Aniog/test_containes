# Velmora Fine Jewelry — Design System

## Brand Voice
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount, NOT generic.

## Color Palette
- Background: `#F8F5F0` (warm cream/ivory) — primary page background
- Surface: `#FFFFFF` — cards, modals, dropdowns
- Text primary: `#1A1A1A` (near-black) — body text
- Text secondary: `#6B6560` (warm gray) — muted text, labels
- Accent: `#A67C52` (warm gold/brass) — CTAs, links, accent elements
- Accent hover: `#8E6B45` (darker gold)
- Border: `#E5DDD4` (warm taupe) — dividers, thin borders
- Light accent: `#F0E8DD` (very light gold wash) — subtle backgrounds
- Star: `#D4A857` (warm yellow-gold) — ratings
- Footer bg: `#1A1A1A` — dark footer
- Footer text: `#A09890` — footer body text

## Typography
- Headings: 'Cormorant Garamond', serif — elegant, editorial
- Product names: 'Cormorant Garamond', serif, UPPERCASE, letter-spacing: 0.08em-0.12em
- Body & UI: 'Inter', sans-serif — clean, readable
- Nav: uppercase, 11px-12px, letter-spacing 0.1em, Inter

## Spacing & Layout
- Max content width: 1280px, centered
- Section padding: py-16 md:py-24 lg:py-28
- Generous whitespace between sections
- Thin hairline dividers (border-t border-[#E5DDD4])

## Borders & Shadows
- Hairline dividers: 1px solid #E5DDD4
- Card hover: subtle shadow (shadow-md hover:shadow-lg transition)
- Buttons: no border-radius (or very subtle), solid accent or outlined

## Interactive States
- Buttons: bg-[#A67C52] hover:bg-[#8E6B45] text-white, transition-all duration-300
- Outlined buttons: border border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white
- Links: hover: underline or color shift
- Product cards: hover scale/translate subtle, image zoom on hover

## Components
- Nav: transparent over hero, bg-white/95 backdrop-blur on scroll
- Buttons: px-8 py-3, uppercase tracking-widest text-xs font-medium
- Input: border-b border-[#E5DDD4] bg-transparent, focus:border-[#A67C52]
- Accordion: border-b border-[#E5DDD4], py-4