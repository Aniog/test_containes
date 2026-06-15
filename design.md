# Visual Style Guide - Strikingly AI Generators Hub

This document defines the visual style and brand tokens for the Strikingly AI Generators Hub page.

## Typography
- **Headings**: Josefin Sans (fallback for Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2.
  - Tailwind Classes: `font-['Josefin_Sans'] font-bold uppercase leading-[1.2]`
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5.
  - Tailwind Classes: `font-['Open_Sans'] font-normal text-[14px] leading-[1.5]`
- **Buttons**: Same as headings (Josefin Sans), weight 700, uppercase.

## Colors
- **Brand Purple**: `#8159BB`
- **AI Gradient**: `linear-gradient(to right, #7671FF, #CB0C9F)`
- **Body Text**: `#636972`
- **Headings**: `#4B5056`
- **Hero H1 Line 1**: `#2E2E2F`
- **Card Border**: `#C6C9CD`
- **Subtle Divider**: `#E2E4E7`
- **Light Background**: `#F4F6F8`
- **White**: `#FFFFFF` (Default background)

## Components

### Buttons
- **Standard**: 36px height, 4px border-radius, 14px text, 9px by 15px padding.
- **Big**: 44px height.
- **AI Gradient Button**: Fill with AI gradient, white text (`#FFFFFF`).
- **Ghost Button**: Transparent background, 1px brand-purple border, brand-purple text.

### Cards
- **Style**: White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding.
- **Hover**: Subtle elevation lift (small shadow), 1px brand-purple border.

### Tags (Category Badges)
- **Style**: 11px text, 2px by 6px padding, 3px border-radius, ghost style (brand-purple text, 1px brand-purple border, no fill).

## Spacing
- Multiples of 10px (5px allowed for tight pairs).
- Between blocks: 20px.
- Between sections: 40px.
- Hero: 60-80px top and bottom.
- Max content width: 1200px.

## Do's and Don'ts
- **DO**: Use semantic HTML elements.
- **DO**: Ensure all filled buttons use white text.
- **DO**: Use Tailwind CSS for all styling.
- **DON'T**: Use black (`#000000`) for text or background.
- **DON'T**: Splash the AI gradient on backgrounds or section headers (only for CTAs and H1 line 2).
