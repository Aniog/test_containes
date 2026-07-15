# Velmora Fine Jewelry — Design System

## Visual Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking.

## Color Palette
- **Background**: `#FAF8F5` (warm ivory) — main page background
- **Surface**: `#FFFFFF` (pure white) — cards, overlays
- **Primary Text**: `#1A1A1A` (near black) — headings, body
- **Secondary Text**: `#6B6560` (warm taupe) — captions, descriptions
- **Muted Text**: `#9B9590` (soft warm gray) — placeholders, subtle labels
- **Accent**: `#B8860B` (dark goldenrod) — CTAs, links, highlights
- **Accent Hover**: `#9A7209` (darker gold)
- **Accent Light**: `#F5E6C8` (pale gold wash) — subtle backgrounds
- **Border**: `#E8E2DA` (warm light border)
- **Border Dark**: `#D4CFC7` (darker warm border)
- **Star Gold**: `#D4A843` (warm gold for ratings)
- **Dark Section BG**: `#1A1A1A` (near black for newsletter/footer)
- **Dark Section Text**: `#FAF8F5` (warm ivory on dark)

## Typography
- **Headings / Brand**: Cormorant Garamond (serif) — elegant, editorial
  - Hero headline: `text-5xl md:text-7xl lg:text-8xl font-light tracking-tight`
  - Section titles: `text-3xl md:text-4xl font-light tracking-wide`
  - Product names: `text-lg font-normal uppercase tracking-[0.2em]`
  - Logo: `text-2xl font-normal tracking-[0.3em]`
- **Body / UI**: Inter (sans-serif) — clean, modern
  - Body: `text-base leading-relaxed`
  - Small/captions: `text-sm`
  - Buttons: `text-sm uppercase tracking-widest font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-10`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between sections

## Components
- **Buttons**: 
  - Primary: `bg-[#B8860B] text-white uppercase tracking-widest text-xs font-medium px-8 py-3.5 hover:bg-[#9A7209] transition-all duration-300`
  - Outlined: `border border-[#B8860B] text-[#B8860B] uppercase tracking-widest text-xs font-medium px-8 py-3.5 hover:bg-[#B8860B] hover:text-white transition-all duration-300`
- **Cards**: `bg-white border border-[#E8E2DA] overflow-hidden group`
- **Dividers**: `h-px bg-[#E8E2DA]` (hairline)
- **Shadows**: `shadow-sm` on cards, `shadow-lg` on cart drawer

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions
- Cart drawer slide: `translate-x-full` to `translate-x-0`

## Don'ts
- No bright/neon colors
- No heavy shadows or gradients
- No rounded-full buttons (use slight rounding or sharp)
- No loud patterns or busy backgrounds
- No discount-style badges or urgency elements
