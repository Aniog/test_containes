# Velmora Fine Jewelry — Design System

## Brand Identity
- Mood: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- NOT loud, NOT discount-looking, NOT generic e-commerce.
- Target: Women 25–45, gifting and self-purchase, $30–$120 price range.

## Color Palette
- Deep Warm: #1A1614 (near-black with warmth) — primary text, dark backgrounds
- Warm Ivory: #F5F0EB (main page background)
- Gold Accent: #C9A96E (CTAs, accents, borders)
- Gold Dark: #B8944F (hover states for gold)
- Slate: #2D2823 (body text)
- Muted Taupe: #8A7D72 (secondary text)
- Light Warm: #EDE6DC (card backgrounds, subtle dividers)
- Pure White: #FFFFFF (surfaces on ivory)
- Error: #C73A3A
- Success: #2D6A4F

## Typography
- Headings (h1-h3): 'Playfair Display', serif — elegant, refined
- Product names / decorative: 'Cormorant Garamond', serif — UPPERCASE with tracking-wider
- Body / UI: 'Inter', sans-serif — clean, readable

## Spacing
- Page max-width: 1280px, center-aligned
- Section padding: py-16 md:py-24
- Card gap: gap-6 md:gap-8
- Content padding: px-4 md:px-8 lg:px-12

## Borders & Dividers
- Thin hairline: border-t border-[#E5DDD4] (or border-b)
- Card borders: none, use subtle shadows
- Focus rings: ring-1 ring-[#C9A96E]

## Shadows
- Card: shadow-sm hover:shadow-md transition-shadow
- Nav: shadow-sm on scroll

## Buttons
- Primary: bg-[#C9A96E] text-white, hover:bg-[#B8944F], uppercase tracking-wider, text-sm, px-8 py-3
- Outline: border border-[#C9A96E] text-[#C9A96E], hover:bg-[#C9A96E] hover:text-white, uppercase tracking-wider, text-sm, px-8 py-3
- Transitions: 300ms ease

## Hover Effects
- Subtle opacity shifts (hover:opacity-80)
- Scale on images (hover:scale-105 transition-transform duration-700)
- Underline links on hover

## Product Cards
- Image: aspect-[4/5], object-cover, overflow-hidden
- Name: uppercase, tracking-wider, Cormorant Garamond serif, font-medium
- Price: Inter, text-sm
- Star rating: small gold stars

## Animations
- Fade in sections: opacity-0 animate-[fadeIn_0.6s_ease_forwards]
- Smooth scroll behavior
- Subtle transitions on interactive elements (300ms)