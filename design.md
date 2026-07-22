# Velmora Fine Jewelry — Design System

## Mood & Tone
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Colors
- Background: `#FBF8F4` (warm off-white/cream)
- Surface: `#FFFFFF` (white cards, drawers)
- Text Primary: `#1A1A1A` (near-black)
- Text Muted: `#6B6B6B` (medium gray)
- Text Light: `#999999` (light gray for meta)
- Accent Gold: `#C8A45C` (warm gold — buttons, links, highlights)
- Accent Gold Hover: `#B8944E`
- Border: `#E8E2D8` (warm beige/cream)
- Dark Background: `#1A1A1A` (hero overlays, dark sections)
- Dark Text: `#F5F0EB` (text on dark backgrounds)
- Dark Border: `#2A2A2A` (borders on dark sections)

## Typography
- Headings: `'Cormorant Garamond', serif` — elegant, weight 500-700
- Body & UI: `'Inter', sans-serif` — clean, modern
- Product names: UPPERCASE, tracking-widest (letter-spacing: 0.1em+)
- Product prices: font-medium, text-lg

## Spacing & Layout
- Generous whitespace throughout
- Max content width: 1280px, centered
- Section padding: py-16 md:py-24
- Card padding: p-6

## Borders & Dividers
- Thin hairline borders: `border border-[#E8E2D8]`
- Section dividers: `border-t border-[#E8E2D8]`
- Subtle shadows: `shadow-sm` or `shadow-md`

## Buttons
- Primary: solid bg-[#C8A45C] text-white, hover:bg-[#B8944E], rounded-none
- Outline: border border-[#C8A45C] text-[#C8A45C], hover:bg-[#C8A45C] hover:text-white
- Size: px-8 py-3, uppercase tracking-widest text-sm
- Transitions: all 0.3s ease

## Interactive Elements
- Hover transitions: 0.2s-0.3s ease on all interactive elements
- Subtle scale on image hover (1.02)
- Soft shadows on hover
- Links: underline on hover, gold accent color

## Image Style
- Editorial, warm-lit, dark/neutral backgrounds
- Gold jewelry close-ups
- 9:16 vertical for UGC/reel cards
- Product images: 1:1 or 3:4 ratio

## Component-Specific

### Navbar
- Fixed top, transparent initially, bg-white on scroll with shadow
- Logo: 'Cormorant Garamond' uppercase, tracking-widest
- Center links: lowercase, text-sm, tracking-wide
- Icons: 20px, muted

### Hero
- Full-bleed, dark overlay, centered text
- Headline: text-5xl md:text-7xl, serif, text-white
- Subhead: text-lg, text-gray-300
- CTA: gold accent button

### Product Cards
- Image container: aspect-square, overflow-hidden
- Product name: uppercase tracking-widest text-xs
- Price: text-sm font-medium
- Hover: reveal second image + quick add button

### Accordion
- Thin border-top, serif heading, smooth expand

### Footer
- Dark background (#1A1A1A), light text
- Columns: 4 columns on desktop, stacked on mobile
- Payment icons row
- Social links row