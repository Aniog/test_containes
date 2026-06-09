# Design Guidelines - Strikingly AI Generators Hub

## Typography
- **Headings**: `Josefin Sans` (fallback for Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2.
  - Tailwind: `font-['Josefin_Sans'] font-bold uppercase leading-tight`
- **Body**: `Open Sans`, weight 400, 14px base, line-height 1.5.
  - Tailwind: `font-['Open_Sans'] font-normal text-[14px] leading-normal`
- **Buttons**: Same as headings, weight 700, uppercase.

## Colors
- **Brand Purple**: `#8159BB`
  - Tailwind: `text-[#8159BB]`, `bg-[#8159BB]`, `border-[#8159BB]`
- **AI Gradient**: `linear-gradient(to right, #7671FF, #CB0C9F)`
  - Tailwind: `bg-gradient-to-r from-[#7671FF] to-[#CB0C9F]`
- **Body Text**: `#636972`
  - Tailwind: `text-[#636972]`
- **Headings**: 
  - Section Headings: `#4B5056` -> `text-[#4B5056]`
  - Hero H1 Line 1: `#2E2E2F` -> `text-[#2E2E2F]`
- **Card Border**: `#C6C9CD`
  - Tailwind: `border-[#C6C9CD]`
- **Subtle Divider**: `#E2E4E7`
  - Tailwind: `border-[#E2E4E7]`
- **Light Background**: `#F4F6F8`
  - Tailwind: `bg-[#F4F6F8]`
- **White**: `#FFFFFF` (Default background)

## Components styling
- **Buttons**:
  - Standard: 36px height, 4px border-radius, 14px text, 9px 15px padding.
  - Big: 44px height.
  - Primary (AI Gradient): White text.
  - Ghost: Transparent bg, 1px brand-purple border, brand-purple text.
- **Cards**:
  - White bg, 1px border (#C6C9CD), 3px border-radius, 20px padding.
  - Hover: subtle elevation lift (box-shadow), 1px brand-purple border.
- **Tags (Badges)**:
  - 11px font, 2px 6px padding, 3px border-radius.
  - Ghost style: brand-purple text, 1px brand-purple border, no fill.

## Layout & Spacing
- Max content width: 1200px, centered.
- Multiples of 10px spacing (5px for tight pairs).
- 20px between blocks.
- 40px between sections.
- Hero: 60-80px top/bottom.
