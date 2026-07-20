# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. Not loud, not discount-looking, not generic e-commerce.

## Color Palette
- Background: `#F8F6F3` (velmora-bg) — warm off-white
- Cream: `#F5F0EB` (velmora-cream)
- Sand: `#E8E0D8` (velmora-sand)
- Gold accent: `#C9A96E` (velmora-gold) — warm metallic
- Gold light: `#D4BC8A` (velmora-gold-light)
- Gold dark: `#A88B4E` (velmora-gold-dark)
- Ebony: `#1A1614` (velmora-ebony) — primary text
- Graphite: `#2D2826` (velmora-graphite)
- Pewter: `#6B6560` (velmora-pewter) — secondary text
- Stone: `#9E948A` (velmora-stone) — muted text
- Warm white: `#FAF8F6`

## Typography
- Headings / Product names: Cormorant Garamond (serif)
- Body / UI: Inter (sans-serif)
- Product names: UPPERCASE with tracking-wide or tracking-wider
- Section headings: serif, uppercase, tracking-wider
- Body: Inter, regular weight, pewter or graphite color

## Spacing
- Generous whitespace throughout
- Section padding: py-16 md:py-24
- Card padding: p-6
- Gaps between cards: gap-6 md:gap-8

## Borders & Dividers
- Thin hairline dividers: border-t border-velmora-sand/50
- Subtle borders: border border-velmora-sand/30
- No heavy borders

## Buttons
- Primary: bg-velmora-ebony text-velmora-warm-white, hover:bg-velmora-graphite
- Accent: bg-velmora-gold text-velmora-ebony, hover:bg-velmora-gold-dark
- Outline: border border-velmora-ebony/20 text-velmora-ebony, hover:bg-velmora-ebony hover:text-white
- All buttons: tracking-wide, uppercase, text-sm, font-medium, transition-all duration-300

## Hover Transitions
- Subtle: transition-all duration-300 ease-in-out
- Image hover: scale-[1.02] with smooth transition
- Link hover: opacity-80

## Shadows
- Card: shadow-sm hover:shadow-md
- Navbar: shadow-sm when scrolled
- Soft, not dramatic

## Component Styles
- Navbar: transparent, fixed, becomes bg-white/95 backdrop-blur-sm on scroll
- Product cards: clean, white bg, subtle border, image with aspect-[4/5]
- Dividers: thin hr with border-velmora-sand/30
- Section titles: serif, uppercase, tracking-wider, text-center