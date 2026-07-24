# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount-looking, not generic e-commerce.

## Color Palette
- **Background**: `#FBF9F6` (warm ivory/cream) — sitewide page background
- **Surface**: `#FFFFFF` (white) — cards, modals, drawers
- **Primary / Text**: `#1A1A1A` (near-black) — body text, headings
- **Muted Text**: `#8C8985` (warm gray) — secondary labels, captions
- **Accent / Gold**: `#C9A96E` (warm gold) — CTAs, accent borders, highlights
- **Accent Hover**: `#B8954F` (deeper gold) — hover states
- **Border / Hairline**: `#E8E5E0` (warm light gray) — dividers, borders
- **Light Gold Wash**: `#F5F0E8` — subtle tinted backgrounds, newsletter block
- **Star / Rating**: `#C9A96E` — star ratings

## Typography
- **Headings / Product Names**: `'Cormorant Garamond', serif` — elegant serif
- **Body / UI**: `'Inter', sans-serif` — clean sans-serif
- **Product names in UPPERCASE** with `tracking-widest` (letter-spacing)
- **Scale**: h1: 4rem, h2: 2.5rem, h3: 1.5rem, body: 0.9375rem, small: 0.8125rem

## Spacing
- Generous whitespace throughout
- Section padding: `py-20 md:py-28`
- Grid gap: `gap-6 md:gap-8`
- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## Borders & Dividers
- Thin hairline borders: `border border-[#E8E5E0]`
- Dividers: `border-t border-[#E8E5E0]`
- Soft shadows: `shadow-sm` on cards, `shadow-md` on hover

## Buttons
- Primary: solid gold `bg-[#C9A96E]` text-white, hover `bg-[#B8954F]`
- Outline: `border border-[#C9A96E] text-[#C9A96E]` hover fill
- Rounded: `rounded-none` (sharp/square for editorial feel) or `rounded-sm`
- Padding: `px-8 py-3` for full buttons
- Transitions: `transition-all duration-300`

## Navigation
- Transparent initially, solid white on scroll (`bg-white/95 backdrop-blur-sm`)
- Logo: serif, uppercase, tracking-widest
- Center links: clean sans-serif, uppercase, small
- Height: `h-16 md:h-20`

## Product Cards
- Aspect ratio: `aspect-[4/5]` for images
- Hover: reveal second image, show quick-add button
- Product name: uppercase, serif, tracking-widest
- Price: sans-serif, muted

## Animations
- Subtle fade-up on scroll: `opacity-0 translate-y-4` to `opacity-100 translate-y-0`
- Hover transitions: 300ms ease
- Cart drawer: slide from right, 300ms