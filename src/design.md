# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background**: `#FDF8F3` (warm cream/ivory) — sitewide background
- **Surface**: `#FFFFFF` (white) — cards, modals, drawers
- **Text Primary**: `#1A1A1A` (near-black) — headings, body
- **Text Muted**: `#6B5E52` (warm grey-brown) — secondary text, metadata
- **Accent Gold**: `#C4965A` (warm gold) — CTAs, accents, highlights
- **Accent Gold Dark**: `#A67C42` — hover states for gold buttons
- **Accent Gold Light**: `#F5E6D3` — subtle backgrounds, badges
- **Border**: `#E8DDD0` (warm beige) — dividers, borders
- **Border Light**: `#F0EAE0` — hairline dividers
- **Success**: `#2D6A4F` — trust indicators
- **Error**: `#C44545` — errors

## Typography
- **Headings**: 'Playfair Display', serif — elegant, editorial. Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Body / UI**: 'Inter', system-ui, sans-serif — clean, modern. Font weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Product names**: UPPERCASE, letter-spacing: 0.1em, Playfair Display
- **Price**: Inter, font-weight: 400

## Spacing
- Consistent use of Tailwind spacing scale
- Section padding: py-16 md:py-24 lg:py-32
- Generous whitespace between elements
- Container max-width: 7xl (1280px)

## Borders & Dividers
- Thin hairline dividers: border-t border-[#E8DDD0]
- Border radius: rounded-sm for cards, rounded-full for buttons
- Input borders: 1px solid border color

## Shadows
- Card hover: shadow-lg (soft, elevated)
- Navbar: shadow-sm on scroll
- Product images: subtle shadow on hover

## Buttons
- Primary: bg-[#C4965A] text-white, hover:bg-[#A67C42]
- Outline: border border-[#C4965A] text-[#C4965A] hover:bg-[#F5E6D3]
- Text: no background, text-[#C4965A] hover:text-[#A67C42]
- All buttons: rounded-full, px-8 py-3, transition-all duration-300

## Transitions
- All interactive elements: transition-all duration-300 ease-in-out
- Hover: opacity-90, subtle lift (translateY(-1px))
- Cart drawer: slide from right, duration-300

## Product Cards
- bg-white, rounded-sm, overflow-hidden
- Image: aspect-square, object-cover
- Hover: show second image, slight shadow lift
- Quick add button: appears on hover (desktop) or always visible (mobile)

## Icons
- Use Lucide React icons
- Size: w-5 h-5 for nav icons, w-6 h-6 for section icons
- Color: currentColor or text-[#1A1A1A]

## Do's
- Use generous whitespace
- Keep editorial, magazine-like feel
- Gold accents should be warm, not brassy
- Serif for headings and product names
- Uppercase product names with wide letter-spacing
- Thin, elegant dividers
- Soft shadows, subtle transitions

## Don'ts
- Don't use loud colors or bright reds/blues
- Don't use heavy borders
- Don't use discount-looking badges or sale tags
- Don't overcrowd
- Don't use emoji
- Don't use generic stock photos