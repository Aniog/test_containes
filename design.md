# SSourcing China — Design System

## Brand Identity
- Company: SSourcing China
- Tagline: China Sourcing Agent for Global Buyers
- Tone: Professional, clear, practical, trustworthy, international B2B

## Color Palette
- Primary Blue: `#1A3C6E` (deep navy — trust, authority) → Tailwind: `[#1A3C6E]`
- Accent Red: `#C0392B` (China red — identity, energy) → Tailwind: `[#C0392B]`
- Accent Gold: `#D4A017` (quality, premium) → Tailwind: `[#D4A017]`
- Light BG: `#F5F7FA` (clean page background)
- White: `#FFFFFF`
- Dark Text: `#1A1A2E`
- Muted Text: `#5A6A7A`
- Border: `#E2E8F0`
- Success Green: `#27AE60`

## Typography
- Font: Inter (Google Fonts)
- Headings: font-bold, tracking-tight
  - H1: text-4xl md:text-5xl lg:text-6xl
  - H2: text-3xl md:text-4xl
  - H3: text-xl md:text-2xl
  - H4: text-lg font-semibold
- Body: text-base text-[#5A6A7A]
- Small/Caption: text-sm text-[#5A6A7A]

## Spacing
- Section padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-6 md:p-8
- Gap between cards: gap-6 md:gap-8

## Components

### Buttons
- Primary: bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors
- Secondary: border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors
- Ghost: text-[#1A3C6E] hover:underline font-medium

### Cards
- bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow

### Section Headers
- Centered, with a small colored label above (text-[#C0392B] text-sm font-semibold uppercase tracking-widest)
- H2 in text-[#1A3C6E]
- Subtitle in text-[#5A6A7A]

### Navbar
- bg-white shadow-sm sticky top-0 z-50
- Logo: text-[#1A3C6E] font-bold
- Nav links: text-[#1A1A2E] hover:text-[#C0392B]
- CTA button: Primary style

### Footer
- bg-[#1A3C6E] text-white
- Links: text-blue-200 hover:text-white

## Do's
- Use consistent section padding
- Use card grids for services/products (3-col desktop, 1-col mobile)
- Use trust badges and numbers prominently
- Use subtle dividers between sections
- Keep forms clean with clear labels

## Don'ts
- No dark backgrounds on body text sections (keep white/light)
- No low-contrast text
- No exaggerated marketing claims
- No decorative fonts
