# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

### Color Palette
**Primary Background:** `#F5F0EB` (warm ivory/cream)
**Secondary Background:** `#FFFFFF` (pure white)
**Deep Accent:** `#1A1A1A` (near black for footer/contrast)
**Gold Accent:** `#C9A96E` (warm muted gold - not brassy)
**Gold Hover:** `#B8943F` (darker gold for hover states)
**Text Primary:** `#2D2D2D` (soft black)
**Text Secondary:** `#6B6B6B` (warm gray)
**Border/Divider:** `#E8E2D9` (warm light gray)
**Success:** `#4A6741` (forest green for trust indicators)

### Typography
**Headings & Product Names:** Cormorant Garamond (serif, elegant, editorial)
- Heading 1: `font-serif text-5xl md:text-6xl font-light tracking-wide`
- Heading 2: `font-serif text-3xl md:text-4xl font-light tracking-wider`
- Product names: `font-serif text-lg tracking-[0.2em] uppercase`

**Body & UI:** Inter (clean, modern sans-serif)
- Body: `font-sans text-base leading-relaxed`
- UI elements: `font-sans text-sm tracking-wide`

### Design Principles
- Generous whitespace (minimum 80px vertical padding on sections)
- Thin hairline dividers (`border-t border-[#E8E2D9]`)
- Restrained accent color (gold only for CTAs, price, active states)
- Subtle hover transitions (`transition-all duration-300`)
- Soft shadows (`shadow-sm hover:shadow-md`)
- Buttons feel premium (solid gold or outlined with thin border)

### Component Styles

**Buttons:**
- Primary: `bg-[#C9A96E] hover:bg-[#B8943F] text-white px-8 py-3 tracking-widest text-sm uppercase`
- Secondary: `border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white px-8 py-3 tracking-widest text-sm uppercase`

**Product Cards:**
- Image container: `aspect-[3/4] bg-[#F5F0EB] overflow-hidden`
- Hover: second image fades in, quick add button slides up
- Title: `font-serif text-sm tracking-[0.15em] uppercase mt-3`
- Price: `text-[#C9A96E] font-medium mt-1`

**Input Fields:**
- `border border-[#E8E2D9] focus:border-[#C9A96E] px-4 py-3 text-sm tracking-wide`

**Dividers:**
- Hairline: `border-t border-[#E8E2D9]`
- Section break: `w-16 h-[1px] bg-[#C9A96E] mx-auto`

### Layout
- Max width: `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding: `py-20 md:py-28`
- Grid gap: `gap-6 md:gap-8`

### Animation
- Hover transitions: `transition-all duration-300 ease-out`
- Image hover: `scale-105` with `overflow-hidden`
- Button hover: subtle background shift
- Cart drawer: slide from right `translate-x-full` to `translate-x-0`

### Responsive Breakpoints
- Mobile: default (< 640px)
- Tablet: `md:` (>= 768px)
- Desktop: `lg:` (>= 1024px)
