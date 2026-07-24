# Velmora Fine Jewelry — Design System

## Brand Overview
- **Brand**: Velmora Fine Jewelry
- **Vibe**: Quiet luxury, warm, editorial, premium-but-accessible
- **Audience**: Women 25–45, gifting and self-purchase
- **Price Range**: $30–$120

## Color Palette
- **Background**: `#FAF8F5` (warm off-white) — primary page background
- **Surface**: `#FFFFFF` (white) — cards, modals, drawers
- **Surface Alt**: `#F5F2ED` (warm light) — secondary surfaces
- **Text Primary**: `#1A1A1A` (near-black) — headings, body
- **Text Secondary**: `#6B6359` (warm taupe) — secondary text, labels
- **Text Muted**: `#9C9489` (light taupe) — placeholders, captions
- **Accent**: `#C49A6C` (warm gold) — CTAs, accent highlights, stars
- **Accent Hover**: `#B08855` (darker gold)
- **Border**: `#E5DDD3` (warm beige) — dividers, borders
- **Border Light**: `#EFE9E0` (lighter beige) — hairline dividers

## Typography
- **Headings**: `'Playfair Display', Georgia, serif` — all headings, hero, product names
- **Body**: `'Inter', system-ui, sans-serif` — body text, UI, navigation
- **Product Names**: UPPERCASE, letter-spacing: 0.08em, serif font
- **Size Scale**: 
  - Hero headline: text-5xl / text-6xl md:text-7xl
  - Section headings: text-3xl / text-4xl
  - Product names: text-sm / text-base uppercase tracking-widest
  - Body: text-sm / text-base
  - Small/caption: text-xs / text-sm

## Spacing
- Generous whitespace throughout
- Section padding: py-16 md:py-24
- Card padding: p-6
- Grid gap: gap-6 md:gap-8
- Max content width: max-w-7xl mx-auto

## Borders & Dividers
- Thin hairline dividers: `border-t border-[#EFE9E0]`
- Card borders: `border border-[#E5DDD3]`
- Rounded corners: rounded-sm (subtle)
- No heavy shadows — soft shadows only: `shadow-sm`

## Buttons
- **Primary (Accent)**: bg-[#C49A6C] hover:bg-[#B08855] text-white — full-width on mobile
- **Outline**: border border-[#C49A6C] text-[#C49A6C] hover:bg-[#C49A6C] hover:text-white
- **Text link**: text-[#C49A6C] hover:text-[#B08855] underline
- **Size**: px-8 py-3 text-sm uppercase tracking-widest
- Transitions: transition-all duration-300

## Hover Effects
- Subtle scale on product cards: hover:scale-[1.02]
- Opacity shift on images: hover:opacity-90
- Smooth transitions: duration-300 ease-in-out
- Underline animation on nav links

## Image Style
- Editorial, warm-lit, dark/neutral backgrounds
- Gold jewelry close-ups
- 9:16 vertical for UGC reels
- 3x2 or 4x3 for product cards
- 16x9 for hero

## Accessibility
- High contrast: #1A1A1A on #FAF8F5
- Accent buttons maintain white text for readability
- Focus rings on interactive elements
- Touch targets minimum 44px