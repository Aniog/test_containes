# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base**: `#1A1714` — deep espresso brown (near-black, warmer than pure black)
- **Surface**: `#F7F4F0` — warm ivory / eggshell
- **Muted**: `#9E968D` — warm stone gray
- **Accent**: `#B8926A` — warm antique gold
- **Accent hover**: `#A07D55` — deeper gold
- **White**: `#FFFFFF`
- **Hairline**: `rgba(26, 23, 20, 0.12)`

## Typography
- **Serif headings**: `Cormorant Garamond`, weight 300–500
- **Sans-serif body/UI**: `Inter`, weight 300–600
- **Product names**: uppercase, `tracking-[0.2em]`, `font-light`
- **Hero headline**: `text-4xl md:text-6xl lg:text-7xl`, `font-light`, `leading-tight`
- **Section titles**: `text-2xl md:text-3xl`, `font-light`, `tracking-wide`
- **Body**: `text-sm md:text-base`, `font-light`, `leading-relaxed`, `text-[#9E968D]`

## Spacing
- Generous whitespace. Sections: `py-16 md:py-24`
- Grid gap: `gap-6 md:gap-8`
- Container max-width: `max-w-7xl mx-auto px-6`

## Components
- **Buttons**: 
  - Primary: `bg-[#B8926A] text-white hover:bg-[#A07D55]`
  - Secondary: `border border-[#1A1714] text-[#1A1714] hover:bg-[#1A1714] hover:text-white`
  - Ghost: `bg-transparent text-[#1A1714] hover:opacity-70`
- **Cards**: no border-radius or `rounded-sm`, subtle shadow on hover, clean edges
- **Dividers**: `h-px bg-[rgba(26,23,20,0.12)]`
- **Inputs**: `border-b border-[#1A1714] bg-transparent focus:border-[#B8926A]`

## Motion
- Subtle hover transitions: `transition-all duration-300 ease-out`
- Image scale on hover: `hover:scale-105`
- Fade-in on scroll via simple opacity transition
- Sticky nav background transition: `transition-colors duration-300`

## Do's and Don'ts
- DO use large imagery with warm lighting
- DO keep text readable with strong contrast
- DON'T use bright/neon colors
- DON'T use heavy drop shadows or gradients
- DON'T use rounded-full pill shapes for product cards
