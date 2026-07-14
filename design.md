# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount-looking, not generic e-commerce.

## Color Palette
- **Base background:** #F5F0EB (Warm Cream) — soft, editorial, flatters gold
- **Surface / Cards:** #FFFFFF (White)
- **Primary text:** #1A1A1A (Deep Charcoal)
- **Secondary text:** #6B635B (Warm Taupe)
- **Accent / Gold:** #C9A86C (Warm Gold) — used for buttons, accents, highlights
- **Accent hover:** #B8954E (Darker Gold)
- **Border / Hairline:** #E5DDD5 (Soft Beige)
- **Footer / Dark sections:** #1A1A1A (Charcoal)
- **Footer text:** #F5F0EB (Cream) on dark
- **Trust bar bg:** #EDE7DF (Light Beige)
- **Success:** #4A7C59 (Muted Green — for checkmarks)
- **Error:** #C65D5D (Muted Red)

## Typography
- **Headings / Product names / Logo:** "Cormorant Garamond", serif — elegant, refined
- **Body / UI:** "Inter", sans-serif — clean, modern
- **Product names:** UPPERCASE, wide letter-spacing (tracking-wider or tracking-widest)
- **Hero headline:** font-cormorant, text-5xl/text-6xl, uppercase, tracking-wide
- **Section headings:** font-cormorant, text-3xl/text-4xl, uppercase, tracking-wider

## Spacing & Layout
- Generous whitespace throughout (py-16, py-20, py-24 for sections)
- Max-width container: 1280px (max-w-7xl)
- Thin hairline dividers (border-t border-[#E5DDD5])
- Responsive grid: 2 columns on mobile, 3-4 on desktop

## Buttons
- **Primary:** bg-[#C9A86C] text-white, hover:bg-[#B8954E], rounded-none, uppercase, tracking-widest, text-sm, px-8 py-3
- **Outline:** border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white, uppercase, tracking-widest, text-sm, px-8 py-3
- **Pill variant (for filters):** rounded-full, border border-[#E5DDD5], px-4 py-1.5

## Cards
- Product cards: bg-white, no border, soft shadow-sm, hover:shadow-md transition
- No sharp corners (rounded-none or subtle rounded-sm)
- Smooth transitions on hover (transition-all duration-300)

## Navigation
- Sticky, transparent on hero, solid white on scroll (backdrop-blur-md)
- Left: logo "VELMORA" in serif, uppercase
- Center: links (Shop, Collections, About, Journal)
- Right: icons (search, cart)

## Dividers
- hr with border-t border-[#E5DDD5] (hairline)
- Thin, subtle

## Animations
- Subtle fade-up on scroll (opacity-0 translate-y-4 -> opacity-100 translate-y-0)
- Hover: scale-[1.02] on product images, smooth transitions
- Cart drawer: slide-in from right
- Mobile menu: slide-in from left

## Do's
- Use generous whitespace
- Keep text readable with high contrast
- Gold jewelry should pop against the warm cream background
- Product names in UPPERCASE with wide letter-spacing
- Thin, elegant dividers

## Don'ts
- No loud, saturated colors
- No discount-store feel
- No generic stock photos of people
- No cluttered layouts
- No bright red or orange sale badges