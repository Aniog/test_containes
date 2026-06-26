# ARTITECT MACHINERY - Design System

## Overview
An elegant yet user-friendly website for an industrial machinery brand. The design conveys precision, strength, and sophistication through a dark, industrial palette with warm metallic accents.

## Color Palette
- **Primary Background**: `#0a0a0b` - Near-black for main sections
- **Secondary Background**: `#141416` - Slightly lighter dark for cards/sections
- **Accent**: `#c9a44c` - Warm gold/amber for CTAs and highlights
- **Accent Hover**: `#d4b55e` - Lighter gold on hover
- **Text Primary**: `#f5f5f5` - Off-white for headings
- **Text Secondary**: `#a0a0a8` - Muted gray for body text
- **Border**: `#2a2a2e` - Subtle dark borders
- **Surface**: `#1c1c1f` - Card surfaces

## Typography
- **Font Family**: Inter (Google Fonts), weights 300, 400, 500, 600, 700
- **Headings**: Weight 700, letter-spacing -0.02em, line-height 1.1
- **Body**: Weight 400, line-height 1.7
- **Labels/Nav**: Weight 500, uppercase, letter-spacing 0.05em

## Spacing
- Section padding: `py-20 md:py-32` (80px / 128px)
- Content max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`
- Element spacing: `space-y-4 md:space-y-6`

## Components

### Buttons
- Primary: `bg-[#c9a44c] text-[#0a0a0b] font-semibold px-8 py-3 rounded-sm hover:bg-[#d4b55e] transition-colors`
- Secondary: `border border-[#c9a44c] text-[#c9a44c] px-8 py-3 rounded-sm hover:bg-[#c9a44c] hover:text-[#0a0a0b] transition-colors`

### Cards
- Background: `bg-[#1c1c1f]`
- Border: `border border-[#2a2a2e]`
- Hover: `hover:border-[#c9a44c]/30 transition-all`
- Padding: `p-6 md:p-8`

### Navigation
- Fixed top, transparent initially, `bg-[#0a0a0b]/95 backdrop-blur-md` on scroll
- Links: uppercase, letter-spacing wide, text-sm
- Active/hover: `text-[#c9a44c]`

## Do's
- Use generous whitespace between sections
- Ensure all text has strong contrast against dark backgrounds
- Use the gold accent sparingly for maximum impact
- Keep layouts clean and grid-aligned

## Don'ts
- Don't use bright colors other than the gold accent
- Don't overcrowd sections with too many elements
- Don't use thin font weights on dark backgrounds
- Don't forget responsive breakpoints
